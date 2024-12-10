import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import {
  Skull,
  Calendar,
  GitBranch,
  ArrowUpRight,
  HandHeart,
} from "lucide-react";

const ProjectGraveyard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI 기반 식단 추천 서비스",
      duration: "2023.08 - 2023.10",
      techStack: ["Python", "Flask", "React", "OpenAI API"],
      reason: "OpenAI API 비용 부담과 유사 서비스 출시",
      learned: "API 비용 산정의 중요성, MVP 단계에서의 빠른 출시 필요성",
      github: "github.com/username/diet-ai",
      successors: 2,
      status: "파묘 가능",
    },
    {
      id: 2,
      title: "개발자 멘토링 매칭 플랫폼",
      duration: "2024.01 - 2024.02",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      reason: "팀원들과의 일정 조율 어려움",
      learned: "원격 협업에서의 명확한 커뮤니케이션 중요성",
      github: "github.com/username/mentor-match",
      successors: 0,
      status: "파묘 가능",
    },
    {
      id: 3,
      title: "부동산 실거래가 분석 도구",
      duration: "2023.11 - 2024.01",
      techStack: ["Django", "React", "Docker", "Redis"],
      reason: "공공 API 정책 변경으로 인한 기능 축소",
      learned: "외부 API 의존성 최소화의 중요성",
      github: "github.com/username/real-estate-analytics",
      successors: 8,
      status: "파묘 가능",
    },
  ];

  const handleGithubClick = (e, github) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    window.open(`https://${github}`, "_blank");
  };

  const renderProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="hover:shadow-lg transition-shadow cursor-pointer border bg-white"
          onClick={() => setSelectedProject(project)}
        >
          <CardHeader className="space-y-1">
            <CardTitle className="flex justify-between items-center text-xl">
              <span>{project.title}</span>
              <ArrowUpRight className="h-5 w-5 text-gray-400" />
            </CardTitle>
            <CardDescription className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              {project.duration}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
                <div
                  className="flex items-center gap-1 hover:text-blue-600"
                  onClick={(e) => handleGithubClick(e, project.github)}
                >
                  <GitBranch className="h-4 w-4" />
                  <span>{project.github}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HandHeart className="h-4 w-4" />
                  <span>{project.successors}</span>
                </div>
              </div>
              <div
                className={`text-sm mt-2 px-2 py-1 rounded-full w-fit
                ${
                  project.status === "파묘 가능"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2 mb-2">
            <Skull className="h-8 w-8" />
            사이드프로젝트의 무덤
          </h1>
          <p className="text-gray-600">
            완료되지 못한 프로젝트들의 이야기가 모이는 곳
          </p>
        </header>

        <div className="max-w-5xl mx-auto">{renderProjects()}</div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full">
            <CardHeader>
              <CardTitle>{selectedProject.title}</CardTitle>
              <CardDescription>{selectedProject.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">사용 기술</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">중단 사유</h3>
                  <p className="text-gray-600">{selectedProject.reason}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">배운 점</h3>
                  <p className="text-gray-600">{selectedProject.learned}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <a
                    href={`https://${selectedProject.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <GitBranch className="h-4 w-4" />
                    {selectedProject.github}
                  </a>
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    onClick={() => {}}
                  >
                    <HandHeart className="h-5 w-5" />
                    파묘 신청
                  </button>
                  <button
                    className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    닫기
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProjectGraveyard;
