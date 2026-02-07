import { GraduationCap, Calendar, Award, BookOpen, Trophy, Sparkles } from 'lucide-react';

const education = [
  {
    degree: 'BSc. Business Information Technology',
    institution: 'Dedan Kimathi University of Technology',
    location: 'Nyeri',
    period: 'Sep 2020 - Dec 2024',
    type: 'degree',
    gradient: 'from-primary to-accent',
    icon: GraduationCap
  },
  {
    degree: 'Certification: Front-end Development',
    institution: 'ALX Kenya',
    period: 'June 2025 - Oct 2025',
    type: 'certification',
    gradient: 'from-accent to-primary',
    icon: Award
  },
  {
    degree: 'Certification: Back-end Development',
    institution: 'ALX, Kenya',
    period: 'Dec 2024 - Apr 2025',
    type: 'certification',
    gradient: 'from-primary to-accent',
    icon: Trophy
  },
  {
    degree: 'Certification: Professional Foundations',
    institution: 'ALX, Kenya',
    period: 'Aug 2024 - Oct 2024',
    type: 'certification',
    gradient: 'from-accent to-primary',
    icon: BookOpen
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-4">
            <span className="text-secondary font-semibold flex items-center gap-2">
              <GraduationCap size={16} />
              Academic Excellence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>
        
        <div className="grid gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform group-hover:rotate-6`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900">{edu.degree}</h3>
                          <p className={`text-lg bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent font-semibold mb-1`}>
                            {edu.institution}
                          </p>
                          {edu.location && (
                            <p className="text-gray-600">{edu.location}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-xl border border-border/50 inline-flex">
                        <Calendar size={16} className="text-secondary" />
                        <span className="text-sm text-gray-700">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}