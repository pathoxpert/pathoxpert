import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiDotnet, 
  SiPython, 
  SiDjango, 
  SiJavascript, 
  SiJquery, 
  SiBootstrap,
   SiHtml5, 
   SiCss3, 
   SiSharp
} from 'react-icons/si';
const CrystalReportsIcon = () => (
  <img
    src="/public/assets/SAP-Crystal-Reports.png"
    alt="Crystal Reports"
    className="w-6 h-6 mx-auto"
  />
);
// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
   dotnet: { icon: SiDotnet, name: "NET/.NET Core", color: "#512BD4", },
    html5: { icon: SiHtml5, name: "HTML 5", color: "#E34F26", },
  python: { icon: SiPython, name: "Python", color: "#3776ab" },
  django: { icon: SiDjango, name: "Django", color: "#092e20" },
  javascript: { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  jquery: { icon: SiJquery, name: "jQuery", color: "#0769ad" },
  bootstrap: { icon: SiBootstrap, name: "Bootstrap", color: "#7952b3" },
  css3: { icon: SiCss3, name: "CSS3", color: "#1572b6" },
  csharp: { icon: SiSharp, name: "C#", color: "#239120" },
crystalReport: { icon: CrystalReportsIcon, name: "Crystal Reports", color: "#00ADEF", }
};

// Define projects data
const projects = [
  {
    title: 'SSC Brands',
    description: 'I developed sscbrands.com, a modern and fully responsive e-commerce platform for a leading fashion and apparel brand. The project focused on creating a visually appealing, user-friendly interface that reflects the brand’s style and identity. The website was optimized for fast loading speed, mobile responsiveness, and SEO to improve visibility in search engines. Built with scalable technology, the site ensures smooth performance, easy product management, and flexibility for future growth.',
    image: '/assets/SSC.PNG',
    link: 'https://sscbrands.com/',
    techStack: [
      techStacks.dotnet,
      techStacks.html5,
      techStacks.css3,
      techStacks.bootstrap,
      techStacks.csharp,
    ],
  },
  {
    title: 'GLOBAL SNI',
    description: 'A cybersecurity-focused e-commerce platform specializing in selling antivirus software and endpoint protection solutions. I integrates Bitdefender APIs for automated product activation and license management, along with JazzCash payment gateway for secure online transactions. It features an automated invoicing system that stores complete customer purchase records. Customers can also manage their subscriptions, including cancellations, through an email OTP verification system for enhanced security.',
    image: '/assets/GSNI.PNG',
    link: 'https://globalsni.com/',
    techStack: [
      techStacks.dotnet,
      techStacks.html5,
      techStacks.css3,
      techStacks.bootstrap,
      techStacks.csharp,
    ],
  },
  {
    title: 'DIGIDOC CLOUD',
    description: 'I designed and developed a modern, responsive, and SEO-optimized website for a cloud-based document management solution. The project involved creating a clean and professional UI, implementing fast-loading pages, and ensuring a mobile-friendly experience across all devices. I integrated features to highlight the platform’s services, security, and user benefits, along with smooth navigation. It is scalable, high-performance code, ensuring easy future upgrades and optimal SEO for higher search rankings.',
    image: '/assets/DIGIDOC.PNG',
    link: 'https://digidoccloud.com/',
    techStack: [
     techStacks.dotnet,
      techStacks.html5,
      techStacks.css3,
      techStacks.bootstrap,
      techStacks.csharp,
    ],
  },
  {
    title: 'DIGIDOC - DMS',
    description: 'DIGIDOC – Document Management System, I developed DIGIDOC, a secure and scalable document management platform that allows businesses to store, manage, approvals, compliance, audits and access files digitally. The system includes user management, cloud-based storage, advanced search, and version control. With a responsive design, intuitive dashboard, and strong security features, DIGIDOC helps organizations improve productivity, reduce paperwork, and ensure safe document handling.',
    image: '/assets/DIGIDOC DASHBOARD2.jpg',
    link: 'https://digidoccloud.com/dms',
    techStack: [
      techStacks.dotnet,
      techStacks.html5,
      techStacks.css3,
      techStacks.tailwind,
      techStacks.csharp,
    ],
  },
  {
    title: 'PathoXperts',
    description: 'PathoXperts – Lab Management System, A complete lab management system built to streamline diagnostic operations. It supports online test booking, patient registration, digital report generation via crystal reports, and secure record management. With an intuitive latest view, lab staff can manage samples and results, while patients access reports online. The platform is fast, responsive, and secure, featuring automated notifications and scalability to improve efficiency and enhance patient experience.',
    image: '/assets/PathoXperts.png',
    link: 'https://localhost/lab',
    techStack: [
      techStacks.dotnet,
      techStacks.html5,
      techStacks.css3,
      techStacks.bootstrap,
      techStacks.csharp,
      techStacks.crystalReport,
    ],
  },
  {
    title: 'NASR SECURITY',
    description: 'I designed and developed the site that offers a clean, professional interface aligned with the companys tagline, "Securing Your Digital World, One Click at a Time," emphasizing its mission and expertise in digital protection. The platform highlights a comprehensive suite of services, including Web VAPT, Network Security Audits, Active Directory Hardening, Infrastructure Security Reviews, Secure Code Review & Remediation, and custom Full-Stack Web Application Builds nasrsecurity.com',
    image: '/assets/nasrsecurity.com_ (1).png',
    link: 'https://digidoccloud.com/',
    techStack: [
      techStacks.dotnet,
      techStacks.html5,
      techStacks.css3,
      techStacks.bootstrap,
      techStacks.csharp,
    ],
  },
  
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="From powerful ERP solutions to dynamic e-commerce platforms and sleek custom static websites, my projects showcase versatility, scalability, and attention to detail.">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  </SectionBackground>
  );
}
