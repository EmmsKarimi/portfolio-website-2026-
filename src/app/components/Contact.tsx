import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-semibold flex items-center gap-2">
              <MessageSquare size={16} />
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:emmaannkinyua@gmail.com"
                    className="group/item flex items-start gap-4 p-4 bg-muted/30 border border-border/50 rounded-2xl hover:bg-muted/50 hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold mb-1 text-gray-800">Email</p>
                      <p className="text-gray-600 text-sm break-all">emmaannkinyua@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+254708886636"
                    className="group/item flex items-start gap-4 p-4 bg-muted/30 border border-border/50 rounded-2xl hover:bg-muted/50 hover:border-secondary/50 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1 text-gray-800">Phone</p>
                      <p className="text-gray-600 text-sm">+254 708 886 636</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-muted/30 border border-border/50 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-gray-800">Location</p>
                      <p className="text-gray-600 text-sm">Meru, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50">
                  <h4 className="font-semibold mb-4 text-gray-800">Connect with me</h4>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/emma-karimi-kinyua" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    >
                      <Linkedin className="text-white" size={24} />
                    </a>
                    <a 
                      href="https://github.com/EmmsKarimi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    >
                      <Github className="text-white" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            <div className="relative bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-3xl p-8 shadow-xl h-full flex flex-col">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 shadow-lg animate-pulse">
                  <Send className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Let's Work Together
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm passionate about building innovative solutions and contributing to impactful projects. 
                  If you're looking for a dedicated Full Stack Software Engineer who brings both technical expertise 
                  and creative problem-solving to the table, let's connect!
                </p>
              </div>
              
              <div className="space-y-3 mt-auto">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=emmaannkinyua@gmail.com&su=Job%20Opportunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-2xl shadow-lg hover:shadow-primary/50 transition-all overflow-hidden hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  <Send size={20} className="relative z-10" />
                  <span className="relative z-10 font-semibold">Send Message</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/emma-karimi-kinyua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-card border-2 border-secondary/50 text-gray-800 rounded-2xl hover:border-secondary hover:bg-card/80 shadow-lg transition-all hover:scale-105"
                >
                  <Linkedin size={20} className="text-secondary" />
                  <span className="font-semibold">Connect on LinkedIn</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                    <Heart className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1 text-gray-800">Open to Opportunities</p>
                    <p className="text-sm text-gray-600">
                      Currently seeking Full Stack Development roles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            Made with <Heart className="text-primary fill-primary" size={16} /> by Emma Karimi Kinyua
          </p>
        </div>
      </div>
    </section>
  );
}