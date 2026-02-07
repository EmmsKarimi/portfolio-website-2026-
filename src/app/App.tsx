import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border z-50 shadow-lg shadow-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative px-4 py-2 bg-gradient-to-r from-secondary to-accent rounded-xl shadow-lg">
                <span className="text-white font-bold text-lg">EK</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-foreground/80 hover:text-secondary transition-colors relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all"></span>
              </button>
              <button onClick={() => scrollToSection('education')} className="text-foreground/80 hover:text-accent transition-colors relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-foreground/80 hover:text-primary transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground/80 hover:text-secondary transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative group px-6 py-2 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <span className="relative text-white font-semibold flex items-center gap-2">
                  <Sparkles size={16} />
                  Contact
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-secondary hover:bg-secondary/10 rounded-xl transition-all"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-xl transition-all"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-secondary hover:bg-secondary/10 rounded-xl transition-all"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">EK</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Emma Karimi Kinyua</p>
                  <p className="text-sm text-muted-foreground">Full Stack Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/emma-karimi-kinyua" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a 
                  href="https://github.com/EmmsKarimi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a 
                  href="mailto:emmaannkinyua@gmail.com"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <Mail className="text-white" size={20} />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                © 2026 Emma Karimi Kinyua. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}