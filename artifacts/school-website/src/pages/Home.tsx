import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles, ArrowRight, Calendar, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImg from "@assets/21.jpg_1775098026097.jpeg";
import classroomImg from "@assets/1.jpg_1775098026090.jpeg";
import eventsImg from "@assets/20.jpg_1775098026096.jpeg";
import sportsImg from "@assets/WhatsApp_Image_2026-04-01_at_18.21.56_1775098823736.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Sunshine First School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,30,49,0.85) 0%, rgba(12,30,49,0.45) 55%, rgba(12,30,49,0.2) 100%)' }} />
        </div>

        <div className="container mx-auto px-6 md:px-10 z-10 relative pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-secondary text-sm tracking-[0.25em] font-medium uppercase mb-4">
              Hargeisa, Somalia
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-tight">
              Where curious minds <em>grow</em>.
            </h1>
            <p className="text-white/75 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-sans font-light">
              An inspiring, academically excellent learning environment — from Kindergarten through Secondary — preparing every child for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
                data-testid="button-hero-enroll"
              >
                ENROLL NOW <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest font-semibold border border-white/50 text-white hover:bg-white/10 transition-colors"
                data-testid="button-hero-tour"
              >
                VIEW GALLERY
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll down</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* Welcome / Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-xs tracking-[0.3em] font-semibold uppercase mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 leading-tight text-foreground">
                Welcome to<br />Sunshine First School
              </h2>
              <div className="w-12 h-0.5 bg-secondary mb-8" />
              <p className="text-muted-foreground text-base md:text-lg mb-5 leading-relaxed">
                Sunshine First School provides a complete learning journey — from Kindergarten through Primary and Secondary levels — under one unified vision of excellence. We nurture students from their earliest years through adolescence with a continuous, well-structured academic pathway.
              </p>
              <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
                We don't just educate students — we guide them through a complete journey toward success, building academic strength, moral grounding, and global competitiveness at every stage.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide hover:gap-3 transition-all"
                data-testid="link-read-more-about"
              >
                Read our full story <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground border-none shadow-lg rounded-none">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-serif font-light mb-2">15:1</span>
                  <span className="text-sm font-medium opacity-90 tracking-wide">Student to Teacher Ratio</span>
                </CardContent>
              </Card>
              <Card className="bg-secondary text-secondary-foreground border-none shadow-lg rounded-none translate-y-8">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-serif font-light mb-2">25+</span>
                  <span className="text-sm font-medium opacity-90 tracking-wide">Years of Excellence</span>
                </CardContent>
              </Card>
              <Card className="bg-muted text-foreground border-none shadow-lg rounded-none">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-serif font-light mb-2">100%</span>
                  <span className="text-sm font-medium opacity-90 tracking-wide">Pass Rate</span>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg rounded-none translate-y-8" style={{ backgroundColor: '#0C1E31' }}>
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-serif font-light mb-2 text-white">30+</span>
                  <span className="text-sm font-medium tracking-wide text-white/80">Extracurricular Activities</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-xs tracking-[0.3em] font-semibold uppercase mb-4" data-testid="badge-our-values">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 leading-tight">What Guides Us Everyday</h2>
            <div className="w-12 h-0.5 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">We instill principles that go beyond the classroom, shaping students into compassionate global citizens.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                desc: "Delivering a structured, high-quality curriculum across all levels — from Kindergarten through Secondary School — with continuous assessment and performance tracking.",
                accent: "bg-primary/8 text-primary"
              },
              {
                icon: Heart,
                title: "Moral Values",
                desc: "Instilling integrity, responsibility, and respect. We shape students into compassionate individuals who contribute positively to their communities.",
                accent: "bg-secondary/20 text-secondary-foreground"
              },
              {
                icon: Sparkles,
                title: "Global Readiness",
                desc: "Preparing students for international universities and scholarships through our integrated SAT program and globally-aligned academic standards.",
                accent: "bg-accent/8 text-accent"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow rounded-none group">
                  <CardContent className="p-8 md:p-10">
                    <div className={`w-12 h-12 flex items-center justify-center mb-6 ${value.accent}`}>
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-light mb-3">{value.title}</h3>
                    <div className="w-8 h-0.5 bg-secondary mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Row */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="h-64 md:h-80 relative overflow-hidden group">
            <img src={classroomImg} alt="Classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
            <span className="absolute bottom-4 left-4 text-white font-serif text-lg font-light tracking-wide">Classroom Life</span>
          </div>
          <div className="h-64 md:h-80 relative overflow-hidden group">
            <img src={eventsImg} alt="Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
            <span className="absolute bottom-4 left-4 text-white font-serif text-lg font-light tracking-wide">School Events</span>
          </div>
          <div className="h-64 md:h-80 relative overflow-hidden group">
            <img src={sportsImg} alt="Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
            <span className="absolute bottom-4 left-4 text-white font-serif text-lg font-light tracking-wide">Sports & Activities</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events / Announcements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div className="max-w-xl">
              <p className="text-primary text-xs tracking-[0.3em] font-semibold uppercase mb-4">Campus News</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 leading-tight">Stay Updated</h2>
              <div className="w-12 h-0.5 bg-secondary mb-4" />
              <p className="text-muted-foreground text-lg">Don't miss out on what's happening around the campus this month.</p>
            </div>
            <Link
              href="/contact"
              className="mt-6 md:mt-0 text-sm tracking-widest font-semibold text-foreground border border-foreground/30 hover:border-foreground px-5 py-2.5 transition-all"
              data-testid="button-all-events"
            >
              VIEW ALL EVENTS
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border shadow-sm rounded-none hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8 flex gap-6">
                <div className="flex flex-col items-center justify-center bg-primary/8 p-4 min-w-[80px] text-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">MAY</span>
                  <span className="text-3xl font-serif font-light text-primary">15</span>
                </div>
                <div>
                  <Badge variant="outline" className="mb-3 rounded-none text-xs tracking-wide" data-testid="badge-event-category">Academics</Badge>
                  <h3 className="text-xl font-serif font-light mb-2">Annual Science Fair</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Students from grades 3-6 will present their science projects in the main hall. Parents welcome!</p>
                  <div className="flex items-center text-sm font-medium text-foreground gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> 9:00 AM – 2:00 PM
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-border shadow-sm rounded-none hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8 flex gap-6">
                <div className="flex flex-col items-center justify-center bg-secondary/20 p-4 min-w-[80px] text-center">
                  <span className="text-xs font-bold text-secondary-foreground uppercase tracking-widest">MAY</span>
                  <span className="text-3xl font-serif font-light text-secondary-foreground">22</span>
                </div>
                <div>
                  <Badge variant="outline" className="mb-3 rounded-none text-xs tracking-wide border-secondary/50 text-secondary-foreground" data-testid="badge-event-category-2">Community</Badge>
                  <h3 className="text-xl font-serif font-light mb-2">Spring Picnic</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Join us for food, games, and sunshine on the school athletic field. Bring your own blanket!</p>
                  <div className="flex items-center text-sm font-medium text-foreground gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> 11:00 AM – 3:00 PM
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Announcement Alert */}
          <div className="mt-8 bg-foreground text-white p-6 flex items-start gap-4 rounded-none">
            <Bell className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg font-light mb-1">Registration Deadline Approaching</h4>
              <p className="text-white/70 text-sm">Friendly reminder that early-bird registration for the upcoming academic year ends on June 1st.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
