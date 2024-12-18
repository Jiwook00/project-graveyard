# 사이드프로젝트의 무덤 (Project Graveyard)

> _"여기 잠든 프로젝트들은 우리에게 소중한 가르침을 남기고 떠났습니다."_

완료되지 못한 프로젝트들의 이야기가 모이는 곳입니다. 중단된 사이드프로젝트들을 기리고 그로부터 얻은 교훈을 공유하는 플랫폼입니다.

🪦 [사이드프로젝트의 무덤](https://project-graveyard.netlify.app/)

## 프로젝트 등록 방법

### 1. 이 저장소를 Fork 합니다.

### 2. Fork한 저장소를 로컬에 clone 합니다:

```bash
git clone https://github.com/{your-username}/project-graveyard.git
```

### 3. 새로운 브랜치를 생성합니다:

```bash
git checkout -b add-project/{project-name}
```

### 4. 프로젝트 등록 스크립트를 실행합니다:

> 반드시 아래의 명령어로 프로젝트를 등록해주세요.

```bash
npm run add-project
```

다음 정보를 순서대로 입력합니다:

- 프로젝트명
- 개발 기간 (예: 2023.08 - 2023.10)
- 프로젝트 설명
- 기술 스택 (쉼표로 구분) e.g. `Python, Flask, React, OpenAI API`
- 묘비명
- 중단 사유
- 배운 점
- GitHub 저장소 주소
- 상태 (파묘 가능/파묘 불가능)

### 5. `data/projects.yaml` 파일을 확인합니다.

> 결과를 확인하고 수정이 필요하면 수정 후 커밋합니다.

```yaml
- id: { YYYYMMDDXXXX } # 현재 날짜 + 랜덤 4자리
  title: "프로젝트명"
  duration: "YYYY.MM - YYYY.MM"
  techStack:
    - 기술1
    - 기술2
  epitaph: "묘비명"
  reason: "중단 사유"
  learned: "배운 점"
  github: "github.com/username/repo"
  author: "GitHub 사용자명"
  status: "파묘 가능/파묘 불가능"
```

### 6. 변경사항을 커밋하고 Fork한 저장소로 푸시합니다:

```bash
git add data/projects.yaml
git commit -m "Add {project-name} to Project Graveyard"
git push origin add-project/{project-name}
```

### 7. GitHub에서 풀 리퀘스트를 생성합니다.

- Fork된 저장소에서 원본 저장소로 PR을 생성합니다.
- [PR템플릿](.github/pull_request_template.md)을 사용해주세요.

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
