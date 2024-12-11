# 사이드프로젝트의 무덤 (Project Graveyard)

> _"여기 잠든 프로젝트들은 우리에게 소중한 가르침을 남기고 떠났습니다."_

완료되지 못한 프로젝트들의 이야기가 모이는 곳입니다. 중단된 사이드프로젝트들을 기리고 그로부터 얻은 교훈을 공유하는 플랫폼입니다.

## 프로젝트 등록하기

### CLI를 통한 등록

프로젝트를 무덤에 안장하는 방법은 다음과 같습니다:

```bash
# 프로젝트 등록 스크립트 실행
npm run add-project
```

다음 정보를 순서대로 입력합니다:

- 프로젝트명
- 개발 기간 (예: 2023.08 - 2023.10)
- 기술 스택 (쉼표로 구분) e.g. `Python, Flask, React, OpenAI API`
- 중단 사유
- 배운 점
- GitHub 저장소 주소
- 상태 (파묘 가능/파묘 불가능)

## 기술 스택

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**:
  - Radix UI
  - Custom Card Components
- **Code Quality**:
  - ESLint
  - React Hooks Plugin

## 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- npm 또는 yarn

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 빌드 파일 실행

```bash
npm run preview
```
