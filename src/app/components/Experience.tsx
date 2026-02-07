import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'Capital Sacco Ltd',
    role: 'External Industrial Attachment',
    period: 'May 2023 – July 2023',
    gradient: 'from-primary to-accent',
    responsibilities: [
      'Performed data cleaning and analysis using Microsoft Excel',
      'Installed Ethernet cables and configured radio connections',
      'Repaired RJ-45 using crimping tools',
      'Reinstalled software and updated systems',
      'Maintained server hardware and configured printers',
      'Developed strong problem-solving and IT support skills'
    ]
  },
  {
    company: 'Dedan Kimathi University of Technology',
    role: 'Internal Industrial Attachment',
    period: 'May 2022 – August 2022',
    gradient: 'from-accent to-primary',
    responsibilities: [
      'Developed a simple e-commerce website',
      'Assembled and diagnosed computer systems',
      'Modeled and evaluated computer networks',
      'Managed ICT projects and electrical installations'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-semibold flex items-center gap-2">
              <Sparkles size={16} />
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Briefcase className="text-white" size={28} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{exp.role}</h3>
                      <p className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-xl border border-border/50 lg:flex-shrink-0">
                    <Calendar size={18} className="text-secondary" />
                    <span className="text-sm whitespace-nowrap text-gray-700">{exp.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-700 leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}