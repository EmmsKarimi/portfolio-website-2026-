import { useState } from 'react';
import { Code2, Database, Wrench, Users, Server, Laptop, Zap, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    category: 'Back-End Development',
    icon: Server,
    skills: [
      'Python',
      'Django',
      'REST APIs',
      'Object-Oriented Programming (OOP)',
      'Debugging',
      'Authentication & Authorization'
    ],
    gradient: 'from-primary to-accent',
    accentColor: 'text-primary'
  },
  {
    category: 'Front-End Development',
    icon: Laptop,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'API Integration',
      'Web Design',
      'npm & Node.js Basics',
      'DOM Manipulation'
    ],
    gradient: 'from-accent to-primary',
    accentColor: 'text-primary'
  },
  {
    category: 'Databases & Data Management',
    icon: Database,
    skills: [
      'MySQL',
      'MongoDB',
      'Data Analysis (Excel)'
    ],
    gradient: 'from-primary to-accent',
    accentColor: 'text-primary'
  },
  {
    category: 'Developer Tools',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Bash',
      'Linux',
      'Visual Studio Code',
      'Vite',
      'Figma',
      'Microsoft Office Suite'
    ],
    gradient: 'from-accent to-primary',
    accentColor: 'text-primary'
  },
  {
    category: 'System & Network Management',
    icon: Code2,
    skills: [
      'System Analysis',
      'Network Setup'
    ],
    gradient: 'from-primary to-accent',
    accentColor: 'text-primary'
  },
  {
    category: 'Soft Skills',
    icon: Users,
    skills: [
      'Communication',
      'Team Collaboration',
      'Problem Solving',
      'Project Management'
    ],
    gradient: 'from-accent to-primary',
    accentColor: 'text-primary'
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="text-accent font-semibold flex items-center gap-2">
              <Zap size={16} />
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="relative bg-card border border-border rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-muted/50 hover:bg-muted border border-border/50 hover:border-primary/30 text-gray-800 rounded-lg text-sm transition-all hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Tabs Layout */}
        <div className="md:hidden">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-2xl whitespace-nowrap transition-all flex-shrink-0 ${
                    selectedCategory === index
                      ? 'bg-card border-2 border-primary shadow-lg scale-105'
                      : 'bg-card/50 border border-border/50'
                  }`}
                >
                  {selectedCategory === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${skillCategories[selectedCategory].gradient} opacity-10 rounded-2xl`}></div>
                  )}
                  <Icon size={18} className={selectedCategory === index ? skillCategories[index].accentColor : 'text-gray-600'} />
                  <span className={`text-sm relative z-10 text-gray-800 ${selectedCategory === index ? 'font-semibold' : ''}`}>
                    {category.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Skills */}
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${skillCategories[selectedCategory].gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            
            <div className="relative bg-card border border-border rounded-3xl p-6 shadow-xl">
              <div className="flex flex-wrap gap-2">
                {skillCategories[selectedCategory].skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-muted/50 border border-border/50 hover:border-primary/30 text-gray-800 rounded-xl text-sm transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-full">
            <Sparkles size={20} className="text-primary animate-pulse" />
            <span className="text-foreground/90">
              <span className="font-bold text-primary text-xl">20+</span> Technical Skills Mastered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}