import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";

import { 
  SiDotnet, SiPython, SiDjango, SiJavascript, SiJquery, 
  SiBootstrap, SiHtml5, SiCss3, SiReact, SiSharp 
} from "react-icons/si";
import { FaGitAlt, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// ✅ Custom wrappers for external logos
const CrystalReportsIcon = () => (
  <img
    src="/public/assets/SAP-Crystal-Reports.png"
    alt="Crystal Reports"
    className="w-12 h-12 mx-auto"
  />
);

const SignalRIcon = () => (
  <img
    src="/public/assets/10052-icon-service-SignalR.svg"
    alt="SignalR"
    className="w-12 h-12 mx-auto"
  />
);

const VisualStudio = () => (
  <img
    src="/public/assets/VisualStudio.png"
    alt="VisualStudio"
    className="w-12 h-12 mx-auto"
  />
);

const skills = [
  { name: "C#", icon: SiSharp, color: "#68217A", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: ".NET/.NET Core", icon: SiDotnet, color: "#512BD4", url: "https://dotnet.microsoft.com/" },
  { name: "SQL Server", icon: FaDatabase, color: "#CC2927", url: "https://learn.microsoft.com/en-us/sql/sql-server/" },

  // ✅ External icons wrapped as components
  { name: "Crystal Reports", icon: CrystalReportsIcon, color: "#00ADEF", url: "https://www.sap.com/products/crystal-reports.html" },
  { name: "SignalR", icon: SignalRIcon, color: "#00B2A9", url: "https://learn.microsoft.com/en-us/aspnet/signalr/overview/getting-started/" },
  { name: "Visual Studio", icon: VisualStudio, color: "#0078D4", url: "https://visualstudio.microsoft.com/vs/" },

  { name: "Python", icon: SiPython, color: "#3776AB", url: "https://www.python.org/" },
  { name: "Django", icon: SiDjango, color: "#092E20", url: "https://www.djangoproject.com/" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD", url: "https://jquery.com/" },
  { name: "Bootstrap 5", icon: SiBootstrap, color: "#7952B3", url: "https://getbootstrap.com/" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "React", icon: SiReact, color: "#61DBFB", url: "https://react.dev/" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F", url: "https://git-scm.com/" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC", url: "https://code.visualstudio.com/" },
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Technologies & tools I work with daily to build enterprise-grade solutions.">
            Skills
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon} // ✅ still a component (no TS error now)
                color={tech.color}
                url={tech.url}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
