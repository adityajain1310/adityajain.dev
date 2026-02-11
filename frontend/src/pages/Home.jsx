import React, { useEffect, useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ThemeToggle } from '../components/ThemeToggle';
import { portfolioData } from '../data/mock';
import * as LucideIcons from 'lucide-react';

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{displayText}</span>;
};

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="h-6 w-6" /> : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-10 dark:opacity-5 animate-pulse-slow"></div>
      </div>

      <ThemeToggle />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative mt-12">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="relative w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              <TypewriterText text={portfolioData.personal.greeting} delay={150} />
            </h1>
            <p className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-400 font-semibold">
              {portfolioData.personal.title}
            </p>
          </div>

          <p className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 max-w-4xl mx-auto leading-tight">
            {portfolioData.personal.headline}
          </p>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {portfolioData.personal.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {portfolioData.personal.techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-900 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all hover:scale-105 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              <LucideIcons.Briefcase className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-6 text-lg font-semibold border-2 border-cyan-600 dark:border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <LucideIcons.MessageSquare className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
          </div>

          <div className="pt-12">
            <Badge variant="secondary" className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-300 dark:border-green-800 px-4 py-2 text-sm font-medium">
              <LucideIcons.CheckCircle2 className="mr-2 h-4 w-4" />
              {portfolioData.personal.availability}
            </Badge>
          </div>

          <div className="pt-12 animate-bounce">
            <LucideIcons.ChevronDown className="h-8 w-8 mx-auto text-cyan-600 dark:text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {portfolioData.stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Real-world applications built with cutting-edge technology
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group min-h-[260px] p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {getIcon(project.icon) ? React.cloneElement(getIcon(project.icon), { className: 'h-6 w-6 text-white' }) : null}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                      </div>
                      <Badge variant="secondary" className="mb-3 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-800 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-slate-300 dark:border-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                    <LucideIcons.TrendingUp className="mr-2 h-4 w-4" />
                    {project.impact}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Services I Offer
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                End-to-end development solutions tailored to your needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group min-h-[380px] p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(getIcon(service.icon), { className: 'h-6 w-6 text-white' })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About & Experience Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                {portfolioData.personal.about}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid space-y-6 mt-16 gap-6">
              {portfolioData.experience.map((exp, index) => (
                <Card key={index} className="p-8 min-h-[250px] bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      <LucideIcons.Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{exp.company}</h3>
                        <Badge className="bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-800">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mb-3">{exp.role}</p>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                            <LucideIcons.CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                What clients say about working with me
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-6 min-h-[270px] bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-cyan-400"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100">{testimonial.name}</h4>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">"{testimonial.content}"</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Have a project in mind? Let's discuss how I can help bring it to life
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.contact.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-4 min-h-[200px] text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 relative overflow-hidden">
                    {contact.type === 'WhatsApp' && (
                      <div className="absolute inset-0 bg-green-500/5 animate-pulse"></div>
                    )}
                    <div className="relative z-10">
                      <div className="inline-block p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        {React.cloneElement(getIcon(contact.icon), { className: 'h-6 w-6 text-white' })}
                      </div>
                      <h3 className="font-bold mb-2 text-slate-900 dark:text-slate-100">{contact.type}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 break-all">{contact.value}</p>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/919654727983?text=Hi%20Aditya%2C%20I%20would%20like%20to%20discuss%20a%20project', '_blank')}
                className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                <LucideIcons.MessageCircle className="mr-2 h-5 w-5" />
                Quick WhatsApp Chat
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Aditya Jain · Built with care</p>
        </div>
      </footer>
    </div>
  );
};
