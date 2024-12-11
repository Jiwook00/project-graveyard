import { Scroll } from "lucide-react";

const GuideSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Scroll className="h-6 w-6" />
          프로젝트 안치 방법
        </h2>

        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "저장소 Fork",
              content: (
                <p className="text-gray-600">
                  <a
                    href="https://github.com/Jiwook00/project-graveyard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    이 저장소
                  </a>
                  를 Fork 합니다.
                </p>
              ),
            },
            {
              step: 2,
              title: "로컬에 Clone",
              content: (
                <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
                  git clone https://github.com/{"{your-username}"}
                  /project-graveyard.git
                </div>
              ),
            },
            {
              step: 3,
              title: "새 브랜치 생성",
              content: (
                <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
                  git checkout -b add-project/{"{project-name}"}
                </div>
              ),
            },
            {
              step: 4,
              title: "프로젝트 등록",
              content: (
                <>
                  <div className="bg-gray-50 p-3 rounded-md font-mono text-sm mb-3">
                    npm run add-project
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">다음 정보를 순서대로 입력합니다:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "프로젝트명",
                        "개발 기간 (예: 2023.08 - 2023.10)",
                        "기술 스택 (쉼표로 구분)",
                        "묘비명",
                        "중단 사유",
                        "배운 점",
                        "GitHub 저장소 주소",
                        "상태 (파묘 가능/파묘 불가능)",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ),
            },
            {
              step: 5,
              title: "변경사항 확인",
              content: (
                <div className="text-gray-600">
                  <p className="mb-2">
                    data/projects.yaml 파일에서 결과를 확인합니다.
                  </p>
                </div>
              ),
            },
            {
              step: 6,
              title: "커밋 및 푸시",
              content: (
                <div className="bg-gray-50 p-3 rounded-md font-mono text-sm space-y-2">
                  <div>git add data/projects.yaml</div>
                  <div>
                    git commit -m "Add {"{project-name}"} to Project Graveyard"
                  </div>
                  <div>git push origin add-project/{"{project-name}"}</div>
                </div>
              ),
            },
            {
              step: 7,
              title: "PR 생성",
              content: (
                <p className="text-gray-600">
                  Fork된 저장소에서 원본 저장소로 PR을 생성합니다. (PR 템플릿을
                  사용해주세요)
                </p>
              ),
            },
          ].map(({ step, title, content }) => (
            <div key={step} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                {step}
              </div>
              <div>
                <h3 className="font-semibold mb-2">{title}</h3>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
