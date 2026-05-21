# Implementation Plan - 디폴트 설명 거장(데이비드 테퍼, 마이클 버리 등) 상세 정보 보강 및 스크래퍼 개선

이 계획서는 Supabase 데이터베이스 내 `gurus` 테이블에서 기본값 설명(`"Dataroma에 등록된 해외 투자 거장입니다..."`)을 가진 해외 투자 대가들의 프로필을 정교한 한글 이름과 전문적인 투자 철학을 담은 설명글로 보강하고, 향후 추가되는 신규 거장들에 대한 디폴트 텍스트 할당 로직을 보완하는 마이그레이션 계획서입니다.

---

## User Review Required

> [!IMPORTANT]
> - `david-tepper`, `michael-burry` 등 DB의 디폴트 소개글 상태에 머물러 있는 총 28명의 주요 거장에 대해 실제 펀드 특징 및 투자 철학을 한글 소개문으로 교체합니다.
> - `dataroma_scraper.js`가 신규 거장을 등록할 때 무조건적인 고정형 템플릿 대신 인물의 영문명 및 펀드 정보를 활용해 보다 매끄러운 기본 설명을 삽입하도록 템플릿 로직을 고도화합니다.
> - 업데이트 스크립트를 작성하여 Supabase 실환경에 즉시 반영하고, 프론트엔드 연동 상태 및 빌드 무결성을 검증합니다.

## Proposed Changes

### [Backend Data & DB Migration Layer]

#### [NEW] [update_guru_descriptions.js](file:///C:/Users/USER/.gemini/antigravity/scratch/guru-mbti/scratch/update_guru_descriptions.js)
- **역할**: Supabase DB `gurus` 테이블의 `description`과 `name_kr` 컬럼을 일괄 업데이트하는 Node.js 마이그레이션 스크립트.
- **주요 내용**: 
  - `david-tepper`, `michael-burry`, `bill-miller`, `sarah-ketterer`, `francis-chou`, `john-rogers`, `dodge-cox-funds`, `lee-ainslie`, `harry-burn` 등 28명 대가들의 맵 정보를 내장.
  - Supabase 클라이언트를 사용해 매핑된 ID의 `name_kr`과 `description`을 순차 업데이트 실행.

### [Scraper / Data Ingestion Layer]

#### [MODIFY] [dataroma_scraper.js](file:///C:/Users/USER/.gemini/antigravity/scratch/guru-mbti/scratch/dataroma_scraper.js)
- **변경 사항**:
  - 신규 매니저 발견 시의 `description` 할당부 변경.
  - AS-IS: `'Dataroma에 등록된 해외 투자 거장입니다. 실시간 13F 공시를 추적합니다.'`
  - TO-BE: `Dataroma에 등록된 해외 투자 거장인 ${mgr.nameEn} (${mgr.firmName})의 실시간 13F 공시 및 분기 포트폴리오 변동 내역을 실시간으로 추적합니다.` 로 동적 템플릿 할당.

---

## Verification Plan

### Automated / DB Execution Verification
- `node scratch/update_guru_descriptions.js` 스크립트를 수동 실행하여 DB에 에러 없이 업데이트 쿼리가 반영되는지 콘솔 로그를 확인합니다.
- 이후 `node scratch/query_gurus.js`를 재실행하여 디폴트 설명으로 남은 구루가 대폭 감소하였고, 수정한 거장들이 고품질 한글 설명으로 교체되었는지 조회합니다.

### Frontend UI Verification
- 브라우저를 통해 `david-tepper`나 `michael-burry` 등 보강된 거장의 상세 리포트 화면을 열어, 소개 텍스트 영역에 우리가 입력한 가치투자 철학 한글 설명이 깔끔하고 자연스럽게 노출되는지 검증합니다.
