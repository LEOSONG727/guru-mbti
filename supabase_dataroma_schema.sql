-- ====================================================================
-- GURU-MBTI Dataroma-style Database Schema
-- Run this script in the SQL Editor of your Supabase project.
-- ====================================================================

-- 1. Create table for gurus (metadata & biography)
CREATE TABLE IF NOT EXISTS public.gurus (
    id VARCHAR(50) PRIMARY KEY,          -- unique slug, e.g. 'warren-buffett'
    name_en VARCHAR(100) NOT NULL,       -- English name
    name_kr VARCHAR(100) NOT NULL,       -- Korean name
    firm_name VARCHAR(150) NOT NULL,     -- Management firm name
    cik VARCHAR(10) UNIQUE NOT NULL,     -- SEC CIK code (10 digits)
    mbti_type VARCHAR(4) NOT NULL,       -- Associated MBTI type (e.g. 'FCVS')
    description TEXT,                    -- Investment philosophy biography
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast MBTI lookup
CREATE INDEX IF NOT EXISTS idx_gurus_mbti_type ON public.gurus(mbti_type);

-- 2. Create table for guru portfolios (13F holdings)
CREATE TABLE IF NOT EXISTS public.guru_portfolios (
    id SERIAL PRIMARY KEY,
    guru_id VARCHAR(50) REFERENCES public.gurus(id) ON DELETE CASCADE,
    ticker VARCHAR(10) NOT NULL,         -- Stock ticker, e.g. 'AAPL'
    company_name VARCHAR(200) NOT NULL,  -- Company name, e.g. 'Apple Inc.'
    weight NUMERIC(5, 2) NOT NULL,       -- Portfolio weight percentage (e.g. 15.42)
    shares_held BIGINT,                  -- Total shares owned
    value_usd BIGINT,                    -- Total value in USD
    change_type VARCHAR(20) NOT NULL,    -- '신규', '추가', '축소', '유지', '청산'
    change_percent NUMERIC(8, 2),        -- Quarter-over-quarter change percentage
    reported_price NUMERIC(10, 2),       -- Reported price of the stock (e.g. 152.34)
    is_teaser BOOLEAN DEFAULT FALSE,     -- True if it's the teaser ticker (visible to non-users)
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast ticker & guru_id joins
CREATE INDEX IF NOT EXISTS idx_portfolios_guru_id ON public.guru_portfolios(guru_id);
CREATE INDEX IF NOT EXISTS idx_portfolios_ticker ON public.guru_portfolios(ticker);

-- 3. Create table for guru portfolio cash/equity history (12 quarters)
CREATE TABLE IF NOT EXISTS public.guru_portfolio_history (
    id SERIAL PRIMARY KEY,
    guru_id VARCHAR(50) REFERENCES public.gurus(id) ON DELETE CASCADE,
    quarter VARCHAR(10) NOT NULL,        -- Quarter label, e.g. '2025-Q1'
    equity_ratio NUMERIC(5, 2) NOT NULL, -- Equity weight percentage
    cash_ratio NUMERIC(5, 2) NOT NULL    -- Cash weight percentage
);

CREATE INDEX IF NOT EXISTS idx_history_guru_id ON public.guru_portfolio_history(guru_id);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.gurus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guru_portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guru_portfolio_history ENABLE ROW LEVEL SECURITY;

-- 5. Set up Select policies (read-only for all public users)
CREATE POLICY "Allow public read on gurus" 
    ON public.gurus FOR SELECT USING (true);

CREATE POLICY "Allow public read on portfolios" 
    ON public.guru_portfolios FOR SELECT USING (true);

CREATE POLICY "Allow public read on history" 
    ON public.guru_portfolio_history FOR SELECT USING (true);

-- 6. Add mbti_type column to public.profiles table (if it exists)
-- This connects the user account to their investment style result.
ALTER TABLE public.profiles 
  ADD COLUMN IF NOT EXISTS mbti_type VARCHAR(4) CHECK (char_length(mbti_type) = 4);
