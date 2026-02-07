import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles, Code2, Zap } from 'lucide-react';
import profileImage from '../../assets/graduation-pic-4.jpeg';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-secondary/10"></div>
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border-2 border-primary/60 rounded-full mb-6 animate-pulse shadow-lg shadow-primary/20">
                <Sparkles size={16} className="text-primary" />
                <span className="text-primary font-semibold">Tech Girl 💻✨</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Emma Karimi</span>
              </h1>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
                  Full Stack Software Engineer
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
              </div>

              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                Building innovative solutions with <span className="text-primary font-semibold">Python & Django</span> and{' '}
                <span className="text-secondary font-semibold">React (JavaScript)</span>.<br />
                Also working with <span className="text-accent font-semibold">TypeScript</span> for scalable, maintainable front-end development.
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
                {['Python', 'Django', 'React', 'JavaScript', 'TypeScript', 'MySQL'].map((tech, idx) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-card border border-primary/20 rounded-full text-sm font-medium hover:border-primary/50 hover:bg-card/80 transition-all cursor-default text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/emma-karimi-kinyua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-lg shadow-primary/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2 font-semibold">
                    <Linkedin size={20} />
                    Let's Connect
                  </span>
                </a>
                <a 
                  href="https://github.com/EmmsKarimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-card border-2 border-secondary/50 text-gray-800 rounded-xl hover:border-secondary hover:bg-card/80 transition-all flex items-center gap-2 font-semibold hover:scale-105 shadow-lg"
                >
                  <Github size={20} className="text-secondary" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a 
                  href="tel:+254708886636" 
                  className="px-6 py-3 bg-card border-2 border-primary/50 text-gray-800 rounded-xl hover:border-primary hover:bg-card/80 transition-all flex items-center gap-2 font-semibold hover:scale-105 shadow-lg"
                >
                  <Phone size={18} className="text-primary" />
                  <span>+254 708 886 636</span>
                </a>
                <a 
                  href="mailto:emmaannkinyua@gmail.com" 
                  className="px-6 py-3 bg-card border-2 border-secondary/50 text-gray-800 rounded-xl hover:border-secondary hover:bg-card/80 transition-all flex items-center gap-2 font-semibold hover:scale-105 shadow-lg"
                >
                  <Mail size={18} className="text-secondary" />
                  <span>emmaannkinyua@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                
                {/* Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl"></div>
                  <img 
                    src={profileImage} 
                    alt="Emma Karimi Kinyua" 
                    className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-4 border-background shadow-2xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                    <Code2 className="text-white" size={32} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-xl animate-pulse">
                    <Zap className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <button 
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 group-hover:border-primary transition-colors">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-4">
              <span className="text-secondary font-semibold">About Me</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Passionate Tech Professional
              </span>
            </h2>
          </div>
          
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Full Stack Software Engineer with a strong foundation in both back-end and front-end development. I 
                  hold a degree in <span className="text-primary font-semibold">Business Information Technology</span> and have completed the 
                  <span className="text-secondary font-semibold"> ALX Software Engineering programs</span> in Back-End and Front-End Development.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My technical experience includes building scalable systems and APIs using{' '}
                  <span className="text-primary font-semibold">Python, Django, SQL (MySQL), and MongoDB</span>, 
                  as well as developing responsive, user-friendly interfaces with{' '}
                  <span className="text-secondary font-semibold">HTML, CSS, JavaScript, TypeScript, and React</span>. 
                  I'm passionate about solving real-world problems through clean, efficient code and developing high-quality software 
                  solutions that deliver meaningful user experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">4+</div>
                  <div className="text-sm text-gray-600">Years Education</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">3</div>
                  <div className="text-sm text-gray-600">ALX Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-sm text-gray-600">Technical Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-gray-600">Dedicated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}