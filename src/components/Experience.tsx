import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Senior Full Stack Software Engineer",
    company: "Global SNI PVT. LTD.",
    period: "May 2023 - August 2025",
    description: `My first taste of professional development! Got to work with the ASP.NET and build stuff that users would interact with. 
    The highlight? Building a real-time frontend & backend that boosted my skills 100%. (yeah, I was pretty proud of that). 
    Also learned responsive design - cross-platform apps.`,
    skills: ["ASP.NET", "C#", "SQL Server", "HTML 5", "CSS 3","Bootstrap 5","Tailwind","SignalR","Crystal Reports"],
  },
  {
   title: "Senior Full Stack Software Engineer",
    company: "DIGIDOC LLC",
    period: "May 2023 - August 2025",
    description: `A product based, sub-organization of GSNI, USA and UAE registed software house.
    Their Product Document Management System, A complete ERP for the compliance and Corporate affairs.
    I learned strong concepts of multiple integrations and automation development.`,
    skills: ["ASP.NET", "C#", "SQL Server", "HTML 5", "CSS 3","Bootstrap 5","Tailwind","SignalR","Crystal Reports"],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="My journey from 'Hello World' to leading teams and building stuffs">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
