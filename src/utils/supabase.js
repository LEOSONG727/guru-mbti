import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    "⚠️ Supabase environment variables are missing (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).\n" +
    "Running in offline local fallback mode. Authentication and profile updates will be saved to local mock storage."
  );
}

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to mock Supabase Auth/DB actions in fallback mode
export const fallbackAuth = {
  signUp: async (email, password, mbtiType) => {
    const mockUser = { id: 'mock-user-123', email, created_at: new Date().toISOString() };
    const mockSession = { access_token: 'mock-token', user: mockUser };
    
    // Save profile to localStorage
    const profile = { id: mockUser.id, email, mbti_type: mbtiType, updated_at: new Date().toISOString() };
    localStorage.setItem('guru_mbti_user', JSON.stringify(mockUser));
    localStorage.setItem('guru_mbti_profile', JSON.stringify(profile));
    
    return { data: { user: mockUser, session: mockSession }, error: null };
  },
  signIn: async (email, password) => {
    const mockUser = { id: 'mock-user-123', email, created_at: new Date().toISOString() };
    const mockSession = { access_token: 'mock-token', user: mockUser };
    localStorage.setItem('guru_mbti_user', JSON.stringify(mockUser));
    return { data: { user: mockUser, session: mockSession }, error: null };
  },
  signOut: async () => {
    localStorage.removeItem('guru_mbti_user');
    localStorage.removeItem('guru_mbti_profile');
    return { error: null };
  },
  getUser: () => {
    const userStr = localStorage.getItem('guru_mbti_user');
    return userStr ? JSON.parse(userStr) : null;
  },
  getProfile: () => {
    const profileStr = localStorage.getItem('guru_mbti_profile');
    return profileStr ? JSON.parse(profileStr) : null;
  },
  updateProfileMbti: (mbtiType) => {
    const profileStr = localStorage.getItem('guru_mbti_profile');
    if (profileStr) {
      const profile = JSON.parse(profileStr);
      profile.mbti_type = mbtiType;
      localStorage.setItem('guru_mbti_profile', JSON.stringify(profile));
    }
  }
};
