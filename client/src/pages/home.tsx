import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  FlaskConical,
  Languages,
  PenTool,
  Mail,
  Phone,
  MessageCircle,
  Menu,
  X,
  Quote,
  CheckCircle,
  User,
  Star,
} from "lucide-react";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 flex-shrink-0"
            data-testid="link-logo"
          >
            <GraduationCap className="h-8 w-8 text-accent" />
            <span className="font-semibold text-lg text-foreground">
              TutorPro
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 flex-wrap">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <Button
            className="hidden md:inline-flex bg-accent text-accent-foreground border border-accent-border"
            onClick={() => scrollToSection("contact")}
            data-testid="button-nav-cta"
          >
            Get in Touch
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors hover-elevate"
                  data-testid={`link-mobile-nav-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-2 mx-4 bg-accent text-accent-foreground border border-accent-border"
                onClick={() => scrollToSection("contact")}
                data-testid="button-mobile-cta"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center pt-16 bg-gradient-to-br from-background via-background to-muted"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Build Confidence.
              <span className="block text-accent">Achieve Results.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Personalized one-on-one tutoring that meets your child where they
              are. Together, we'll unlock their potential and build a strong
              foundation for academic success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground border border-accent-border px-8 py-6 text-lg"
                onClick={scrollToContact}
                data-testid="button-hero-cta"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-testid="button-hero-services"
              >
                View Services
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  10+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  500+ Students Helped
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center shadow-lg">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <User className="h-24 w-24 text-muted-foreground/50 mx-auto" />
                    <p className="mt-4 text-sm text-muted-foreground">
                      Your Photo Here
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg p-4 border border-card-border">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="font-semibold text-foreground">5.0</span>
                  <span className="text-sm text-muted-foreground">
                    (50+ reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center shadow-lg">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-xl bg-card flex items-center justify-center border border-card-border">
                <div className="text-center">
                  <User className="h-20 w-20 text-muted-foreground/50 mx-auto" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Secondary Photo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Meet Your Tutor
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in education, I've dedicated my
                career to helping students not just understand their subjects,
                but truly excel at them. I hold a Master's degree in Education
                and have worked with students from elementary through high
                school.
              </p>
              <p>
                My teaching philosophy centers on building genuine understanding
                rather than memorization. Every student learns differently, and
                I take pride in adapting my methods to match each individual's
                unique learning style and pace.
              </p>
              <p>
                When we work together, you'll find a patient, encouraging
                partner who celebrates every milestone along the way. My goal is
                to help students become confident, independent learners who are
                equipped for success in school and beyond.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 border border-card-border">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">
                  Years Teaching
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 border border-card-border">
                <div className="text-2xl font-bold text-accent">M.Ed.</div>
                <div className="text-sm text-muted-foreground">
                  Master's Degree
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      grades: "Grades 1-12",
      description:
        "From basic arithmetic to advanced calculus. Build strong problem-solving skills.",
    },
    {
      icon: FlaskConical,
      title: "Science",
      grades: "Grades 5-12",
      description:
        "Biology, Chemistry, and Physics with hands-on learning approaches.",
    },
    {
      icon: BookOpen,
      title: "English",
      grades: "All Grades",
      description:
        "Reading comprehension, writing skills, grammar, and literature analysis.",
    },
    {
      icon: Languages,
      title: "Languages",
      grades: "All Grades",
      description:
        "ESL support and foreign language tutoring for conversational fluency.",
    },
    {
      icon: PenTool,
      title: "Essay Writing",
      grades: "Grades 6-12",
      description:
        "Develop strong writing skills for essays, research papers, and college applications.",
    },
    {
      icon: GraduationCap,
      title: "Test Prep",
      grades: "High School",
      description:
        "SAT, ACT, and AP exam preparation with proven strategies for success.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Services & Subjects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive tutoring across core subjects, tailored to your
            student's grade level and learning goals.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="p-6 border border-card-border bg-card"
              data-testid={`card-subject-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <subject.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {subject.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {subject.grades}
              </p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {subject.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "My daughter went from struggling with math to actually enjoying it. The improvement in her confidence has been remarkable. She now looks forward to her tutoring sessions!",
      name: "Sarah M.",
      context: "Parent of 8th grader",
    },
    {
      quote:
        "The test prep sessions were incredibly helpful. My SAT score improved by 200 points, and I got into my first-choice college. I couldn't have done it without this support.",
      name: "Michael T.",
      context: "High School Senior",
    },
    {
      quote:
        "Patient, knowledgeable, and genuinely caring. Our tutor made all the difference during a challenging school year. My son's grades have improved dramatically.",
      name: "Jennifer L.",
      context: "Parent of 5th grader",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What Families Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from parents and students who have experienced the
            difference personalized tutoring can make.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 border border-card-border bg-card"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <blockquote className="mt-4 text-muted-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      href: "mailto:tutor@example.com",
      description: "tutor@example.com",
    },
    {
      icon: Phone,
      label: "Call or Text",
      href: "tel:+15551234567",
      description: "(555) 123-4567",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/15551234567",
      description: "Message on WhatsApp",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg opacity-80">
          Reaching out is the first step. Choose your preferred contact method
          below, and let's discuss how I can help your student succeed.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("https") ? "_blank" : undefined}
              rel={
                method.href.startsWith("https")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-center justify-center gap-4 bg-primary-foreground text-primary rounded-lg px-6 py-4 font-medium transition-all hover-elevate active-elevate-2"
              data-testid={`button-contact-${index}`}
            >
              <method.icon className="h-5 w-5" />
              <span>{method.label}</span>
              <span className="text-sm opacity-70">({method.description})</span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm opacity-70">
          I typically respond within 24 hours. Looking forward to hearing from
          you!
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            <span className="font-semibold text-foreground">TutorPro</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TutorPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
