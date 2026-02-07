import { ShoppingCart, Network, Code2, Github, Rocket, Zap, ExternalLink, Leaf, Store } from 'lucide-react';

const projects = [
  {
    title: 'First Choice Mineral Feeds Ltd — Corporate Website',
    description: 'A production-grade, multi-page corporate website built for First Choice Mineral Feeds Ltd, an established animal nutrition company. This project demonstrates my ability to design, architect, and implement a scalable, business-focused web application with complex UI architecture and real-world business requirements.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
    icon: Store,
    gradient: 'from-primary to-accent',
    features: [
      'Multi-page website with 5 core sections',
      'Product catalog: 9 categories, 80+ items',
      'Real-time product search and filtering',
      'Outlet directory for 8 physical locations',
      'Component-driven UI architecture',
      'Fully responsive, mobile-first design'
    ]
  },
  {
    title: 'Indoor Plants Management System API',
    description: 'A backend-focused project developed during the ALX Software Engineering program. The system provides a RESTful API for managing indoor plants, maintenance schedules, and internal orders, with secure user authentication and role-based access.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'Swagger'],
    icon: Leaf,
    gradient: 'from-accent to-primary',
    github: 'https://github.com/EmmsKarimi/indoor_plants_api',
    features: [
      'RESTful API for plant & maintenance management',
      'User authentication and profile management',
      'CRUD operations with ownership-based access control',
      'Maintenance task scheduling and tracking',
      'Swagger API documentation',
      'Deployed on PythonAnywhere'
    ]
  },
  {
    title: 'PlantPal — Discover & Care for Your Favorite Plants',
    description: 'A responsive React web application that allows users to discover plant species, explore care details, and save favorites using real-time data from the Trefle API. The project emphasizes clean UI design, component-based architecture, and seamless API integration.',
    technologies: ['React (Vite)', 'JavaScript', 'Tailwind CSS', 'React Router', 'Trefle API', 'Figma'],
    icon: Leaf,
    gradient: 'from-primary to-accent',
    github: 'https://github.com/EmmsKarimi/plantpal',
    features: [
      'Plant discovery and search functionality',
      'Detailed plant information pages',
      'Favorites management using local storage',
      'Fully responsive design (desktop & mobile)',
      'Client-side routing with React Router'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-semibold flex items-center gap-2">
              <Rocket size={16} />
              What I've Built
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Real-world applications and systems developed through academic and professional experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="relative bg-card border border-border rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col">
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4 flex-1">
                    <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Key Features</p>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Zap size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-muted/50 border border-border/50 text-gray-800 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="relative group max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Github className="text-white" size={32} />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                  More Projects on GitHub
                </h3>
                <p className="text-gray-700 mb-4">
                  Check out my GitHub profile for additional projects and contributions, including work from the ALX Software Engineering program.
                </p>
                <a 
                  href="https://github.com/EmmsKarimi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-2xl hover:shadow-lg hover:shadow-secondary/50 transition-all hover:scale-105 font-semibold mx-auto"
                >
                  <Github size={20} />
                  <span>View GitHub Profile</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}