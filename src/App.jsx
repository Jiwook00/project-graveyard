import { useState, useEffect } from "react";
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
  Scroll,
} from "lucide-react";
import yaml from "js-yaml";
import GuideSection from "./components/GuideSection";

const ProjectGraveyard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [authorImages, setAuthorImages] = useState({});
  const defaultAvatar = "https://github.identicons.github.com/identicon.png"; // GitHub 기본 아이덴티콘

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Jiwook00/project-graveyard/main/data/projects.yaml"
        );
        const yamlText = await response.text();
        const data = yaml.load(yamlText);
        setProjects(data.projects);
      } catch (error) {
        console.error("프로젝트 데이터를 불러오는데 실패했습니다:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchAuthorImages = async () => {
      const images = {};
      for (const project of projects) {
        try {
          const response = await fetch(
            `https://api.github.com/users/${project.author}`
          );
          const data = await response.json();
          images[project.author] = data.avatar_url;
        } catch (error) {
          console.error(
            `프로필 이미지를 불러오는데 실패했습니다: ${project.author}`,
            error
          );
          images[project.author] = defaultAvatar;
        }
      }
      setAuthorImages(images);
    };

    if (projects.length > 0) {
      fetchAuthorImages();
    }
  }, [projects]);

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
            {project.epitaph && (
              <div className="border-l-4 border-gray-300 pl-3 py-1">
                <p className="text-gray-600 italic">
                  <span className="font-semibold not-italic">묘비명: </span>
                  {project.epitaph}
                </p>
              </div>
            )}
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
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                  onClick={(e) =>
                    handleGithubClick(e, `github.com/${project.author}`)
                  }
                >
                  <img
                    src={authorImages[project.author] || defaultAvatar}
                    alt={`${project.author}'s profile`}
                    className="w-6 h-6 rounded-full"
                    onError={(e) => {
                      e.target.src = defaultAvatar;
                      e.target.onerror = null;
                    }}
                  />
                  <span className="text-sm text-gray-600">
                    {project.author}
                  </span>
                </div>
                <div
                  className={`text-sm px-2 py-1 rounded-full w-fit
                  ${
                    project.status === "파묘 가능"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const tabs = [
    { id: "projects", label: "프로젝트", icon: <Skull className="h-5 w-5" /> },
    { id: "guide", label: "안치 방법", icon: <Scroll className="h-5 w-5" /> },
  ];

  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold flex items-center justify-center gap-2 mb-2">
            <Skull className="h-6 w-6 md:h-8 md:w-8" />
            사이드프로젝트의 무덤
          </h1>
          <p className="text-gray-600 mb-8">
            완료되지 못한 프로젝트들의 이야기가 모이는 곳
          </p>

          <div className="border-b border-gray-200">
            <nav className="flex justify-center -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    inline-flex items-center gap-2 px-6 py-3 border-b-2 text-sm font-medium
                    ${
                      activeTab === tab.id
                        ? "border-gray-800 text-gray-800"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {activeTab === "projects" ? (
          <div className="max-w-5xl mx-auto">{renderProjects()}</div>
        ) : (
          <GuideSection />
        )}
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
