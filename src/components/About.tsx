import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

const aboutSections = [
  {
    icon: User2,
    title: "Muhammad Ahmad Amin – Software Engineer",
    description: [
      "Full Stack Developer skilled in React, C#, Python, Django, and ASP.NET MVC 5.",
      "Expertise in SQL, Crystal Reports, and scalable ERP.",
      "Experience with SharePoint Azure Blob, QuickBooks API & e-commerce solutions.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Design and build full-stack applications with modern frameworks.",
      "Develop APIs, reporting systems, and database-driven solutions.",
      "Implement integrations with cloud, payment gateways & third-party APIs.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Deliver impactful software solutions that solve real problems.",
      "Expand expertise in AI, cloud technologies & enterprise systems.",
      "Grow as a versatile engineer contributing to global projects.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Code should be simple, scalable, and maintainable.",
      "Technology must improve lives, not complicate them.",
      "Continuous learning and knowledge-sharing fuel growth.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Just a curious developer who loves turning ideas into reality.">About Me</SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Muhammad Ahmad Amin</span>,
              a Senior Full Stack Engineer who somehow turned a "Hello World" tutorial into a full-blown coding obsession.
              I've built stuff like DIGIDOC CLOUD (Document Management System), PathoXperts (Lab Management System), Global SNI PVT. LTD. Ecommerce Website (with JazzCash and Bitdefender integration), NASR Secuirty Website and SSC Brands - Service Sales Corporation Website.
              When I'm not wrestling with React hooks or trying to make my CSS actually work, you'll find me solving problems or experimenting with whatever shiny new tech caught my attention this week.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 I turn coffee into code and bugs into features
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
