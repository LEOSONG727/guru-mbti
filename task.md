# Tasks - Dataroma 전체 매니저 자동 크롤링 및 DB 적재

## 1단계: DB 스키마 완화
- [x] Supabase SQL Editor에서 CIK 및 MBTI 제약조건 해제 쿼리 실행 검증
  ```sql
  ALTER TABLE public.gurus ALTER COLUMN cik DROP NOT NULL;
  ALTER TABLE public.gurus ALTER COLUMN mbti_type DROP NOT NULL;
  ```

## 2단계: 크롤러 고도화 (`scratch/dataroma_scraper.js`)
- [x] Dataroma `home.php` 매니저 리스트 크롤링 함수 구현
- [x] 매니저 이름 가공 및 정규식 처리 (날짜 및 공백 슬러그화)
- [x] 신규 매니저 발견 시 `gurus` 테이블 자동 Upsert 로직 구현
- [x] 신규 매니저 대상 보유 종목 수 기준 MBTI 자동 매칭 알고리즘 구현
- [x] 전체 매니저 holdings 순차적 크롤링 및 동기화 루프 연동

## 3단계: 로컬 테스트 및 검증
- [x] `node scratch/dataroma_scraper.js` 샘플 매니저 수집 테스트
- [x] 프론트엔드(`MbtiScreens.jsx`) 렌더링 정상 호환성 확인
- [x] 프로덕션 빌드 체크 (`npm run build`)

## 4단계: 버그 수정 및 성향 분류 고도화 (최신 요청)
- [x] UI 버그 수정: 축소/추가 뱃지 색상 분리 (`MbtiScreens.jsx`)
  - [x] `useSupabaseGuruReport` 훅의 `change_percent` 데이터 누락 복구
  - [x] `renderActivityBadge` 헬퍼 함수 추가 및 전체 뱃지 렌더링 적용 (축소: 빨간색, 추가: 초록색, 신규: 파란색, 유지: 회색)
  - [x] `Live13fScreen` 하단 테이블에서 `isBuy`/`isSell`을 텍스트 파싱 대신 `tx.actionType` 속성 기반으로 판별하도록 교정 (초록색 뱃지 오인 버그 해결)
  - [x] `formatActivity`가 `'8%'`, `'15%'` 처럼 부호 기호 없이 입력된 유형도 매수/추가(`isAdd`)로 정상 판정하도록 예외 처리 보완
- [x] 신규 거장 MBTI 성향 매칭 알고리즘 고도화
  - [x] `classify_gurus.js` 분석 스크립트 작성 (상위 종목 집중도, 테크 성장주 비중, 매크로/금융/ETF 비중 기반 분류)
  - [x] 대표적 대가들(데이비드 테퍼, 마이클 버리 등)의 수동 오버라이드 맵 적용
  - [x] `node scratch/classify_gurus.js` 실행 및 DB 일괄 업데이트 완료
  - [x] `dataroma_scraper.js` 스크래퍼 내 자동 분류 로직 이식 완료

## 5단계: 실시간 동기화 고도화 및 UI/UX 피드백 반영
- [x] 공동 오버랩 필터 최적화 (변동성 종목 우선 정렬 알고리즘 적용)
- [x] DB 데이터 부재 구루(피터 린치 등)의 로컬 철학 에세이 뷰 Fallback 처리 복구
- [x] 구루 개별 포트폴리오의 실시간 업종 비중 및 현금비중 추이 DB 연동
- [x] SVG 도넛 차트 및 현금비중 꺾은선 차트 호버 툴팁 UI 및 가이드라인 마크업 구현
- [x] 랜딩 및 성향 리스트 화면 내 하드코딩된 총 거장 수(총 매니저 수)를 DB와 동적 연동
- [x] 포트폴리오 보유 종목 표의 최근 활동 내역(최근 활동/변동 비율) 상세 표시 개선 (`추가 (+12%)`, `축소 (-8%)`)
- [x] 로컬 빌드 및 배포 적합성 테스트 통과 (`npm run build`)

## 6단계: 비활동 거장 정보 노출 및 UI 오버랩/더보기 인터랙션 구현 (최신 피드백)
- [x] `getGuruReport`에서 포트폴리오 정보가 없는 거장들(Ben Graham, Peter Lynch 등)에 대한 MBTI 맞춤형 동적 포트폴리오(가상 13F) 자동 병합 로직 추가 (`guruReports.js`)
- [x] `MbtiScreens.jsx`에서 `report.hasChanges`가 `false`일 때 에세이 카드만 나오고 포트폴리오가 생략되던 구조 제거
- [x] 비활동 거장의 경우 상단에 '정중동(靜중動) 에세이'를 인용구 박스로 띄우고, 그 아래에 포트폴리오 정보를 그대로 노출하는 통합형 상세 뷰 구현
- [x] 보유 종목 테이블이 아래로 길게 늘어지는 현상 해결을 위한 UI/UX 개선:
  - [x] 상위 10개 종목 우선 노출 및 하단에 96px(h-24) 투명 그라디언트 페이드 오버레이 얹기
  - [x] "보유 종목 더보기 / 접기" 토글 버튼 구현
  - [x] 더보기 시 최대 높이 `max-h-[480px]`의 내부 스크롤 박스로 포장
  - [x] 테이블 헤더(`thead`)에 `sticky top-0 bg-slate-50/95 backdrop-blur-sm z-10` 고정 적용하여 스크롤 시 칼럼 식별 유지

## 7단계: DB 전용 신규 거장(Harry Burn 등) 정보 노출 및 Fallback 포트폴리오 구현 (최신 피드백)
- [x] `useSupabaseGuruReport(guruId)` 훅에서 `gurus` 테이블 조회하여 거장 메타데이터 로드 및 `dbGuru` 반환 추가 (`MbtiScreens.jsx`)
- [x] `useSupabaseGuruReport(guruId)` 훅에서 `dbPortfolios`가 비어 있더라도 `dbGuru`가 존재하면 로드 완료 처리 및 기초 데이터 전달 (`MbtiScreens.jsx`)
- [x] `GuruDetailReport` 컴포넌트 내 `guru` 조회 시 로컬 `GURUS_LIST`에 없을 경우 `dbReport.dbGuru` 매칭 (`MbtiScreens.jsx`)
- [x] `getGuruReport` 헬퍼 함수에서 `dbGuru` 메타데이터를 인수로 받아 DB 내 MBTI 타입 연동 지원 (`guruReports.js`)
- [x] 리포트 내 펀드별 운용규모(AUM) 동적 합산 및 한글/달러 하이브리드 포맷팅 표기 적용 (`MbtiScreens.jsx`)
- [x] 프로덕션 빌드 무결성 검증 (`npm run build`)

## 8단계: 거장 상세 설명 데이터 보강 및 스크래퍼 개선 (최신 피드백)
- [x] 28명의 주요 거장(데이비드 테퍼, 마이클 버리 등)의 한국어 이름 및 투자 철학 상세 설명 맵 구축
- [x] Supabase DB를 순회하며 `gurus` 테이블의 `name_kr`, `description` 일괄 업데이트 스크립트 작성 및 실행 (`scratch/update_guru_descriptions.js`, `_2.js`, `_3.js`)
- [x] `dataroma_scraper.js`의 신규 거장 설명(description) 생성 방식 개선 (정적 기본값에서 영문 이름/회사명이 반영된 동적 기본값으로 변경)
- [x] DB 상태 재조회 (`query_gurus.js`) 및 상세 정보 로드 정상화 확인
- [x] 프로덕션 빌드 무결성 검증 (`npm run build`)



