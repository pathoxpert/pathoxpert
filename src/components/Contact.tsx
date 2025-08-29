import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Got a cool project idea? Want to collaborate? Or just want to say hi? Contact me!">Get In Touch</SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12">
            {/* Left Column: Contact Info */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you've got a crazy project idea, want to collaborate on something awesome, or just want to chat about tech over coffee ☕ - I'm all ears! And yes, this actually goes straight to my inbox, not some random void like other contact forms.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hafizmuhammadahmadamin@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail className="w-6 h-6" />
                  <span>hafizmuhammadahmadamin@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/971525081961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <BsWhatsapp className="w-6 h-6" />
                  <span>+971 52 508 1961</span>
                </a>
                 <a
                  href="tel:+971 52 508 1961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Phone className="w-6 h-6" />
                  <span>+971 52 508 1961</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-ahmad-amin-49b5a7236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/in/muhammad-ahmad-amin-49b5a7236</span>
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
