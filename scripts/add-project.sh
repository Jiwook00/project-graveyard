#!/bin/bash

# 현재 날짜로 ID 생성 (YYYYMMDD + 4자리 랜덤 숫자)
ID=$(date +%Y%m%d)$((RANDOM % 9000 + 1000))

# Git 설정에서 사용자명 가져오기
AUTHOR=$(git config user.name)
if [ -z "$AUTHOR" ]; then
    echo "Git 사용자명을 찾을 수 없습니다. 수동으로 입력해주세요:"
    read AUTHOR
fi

# 사용자 입력 받기
echo "프로젝트 정보를 입력해주세요:"
echo "프로젝트명:"
read TITLE

echo "개발 기간 (예: 2023.08 - 2023.10):"
read DURATION

echo "기술 스택 (쉼표로 구분):"
read TECH_STACK

echo "묘비명:"
read EPITAPH

echo "중단 사유:"
read REASON

echo "배운 점:"
read LEARNED

echo "GitHub 저장소 주소:"
read GITHUB

echo "상태 (파묘 가능/파묘 불가능):"
read STATUS

# YAML 형식으로 변환
PROJECT="  - id: $ID
    title: \"$TITLE\"
    duration: \"$DURATION\"
    techStack: 
$(echo $TECH_STACK | tr ',' '\n' | sed 's/^/      - /')
    epitaph: \"$EPITAPH\"
    reason: \"$REASON\"
    learned: \"$LEARNED\"
    github: \"$GITHUB\"
    author: \"$AUTHOR\"
    status: \"$STATUS\""

# projects.yaml 파일에 추가
echo "$PROJECT" >> data/projects.yaml

echo "프로젝트가 성공적으로 등록되었습니다!"
echo "ID: $ID" 