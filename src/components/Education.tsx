import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Bachelors in Computer Science Engineering',
    institution: 'NCBA&E - National College of Business Administration & Economics',
    period: '2021 - 2025',
    score: '80%',
  },
  {
    degree: 'HSSC Senior Secondary (Intermediate - XII)',
    institution: 'Government College of Science, Wahdat Road, Lahore',
    period: '2019 - 2021',
    score: '88%',
  },
  {
    degree: 'SSC Secondary (Matric - X)',
    institution: "Pak Angels Foundation High School, Lahore",
    period: '2017 - 2019',
    score: '85.6%',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Gained a strong foundation in theoretical concepts, later reinforced through practical coding experience and real-world application.">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
