import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles, ArrowRight, Calendar, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/campus-1.png" 
            alt="School Campus" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mb-6 text-sm py-1 px-3" data-testid="badge-admissions-open">
              Admissions Open for 2025-2026
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Where curious minds <span className="text-primary">grow</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Providing an inspiring, warm, and academically excellent learning environment that prepares your child for a bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-md" data-testid="button-hero-enroll">
                <Link href="/contact">Enroll Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-md bg-white/50 backdrop-blur" data-testid="button-hero-tour">
                <Link href="/gallery">Take a Virtual Tour</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome / Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Sunshine First School</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Sunshine First School provides a complete learning journey — from Kindergarten through Primary and Secondary levels — under one unified vision of excellence. We nurture students from their earliest years through adolescence with a continuous, well-structured academic pathway.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We don't just educate students — we guide them through a complete journey toward success, building academic strength, moral grounding, and global competitiveness at every stage.
              </p>
              <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg" asChild data-testid="link-read-more-about">
                <Link href="/about">Read our full story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-bold mb-2">15:1</span>
                  <span className="text-sm font-medium opacity-90">Student to Teacher Ratio</span>
                </CardContent>
              </Card>
              <Card className="bg-secondary text-secondary-foreground border-none shadow-lg translate-y-8">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-bold mb-2">25+</span>
                  <span className="text-sm font-medium opacity-90">Years of Excellence</span>
                </CardContent>
              </Card>
              <Card className="bg-muted text-foreground border-none shadow-lg">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-bold mb-2">100%</span>
                  <span className="text-sm font-medium opacity-90">Pass Rate</span>
                </CardContent>
              </Card>
              <Card className="bg-foreground text-background border-none shadow-lg translate-y-8">
                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                  <span className="text-4xl font-bold mb-2">30+</span>
                  <span className="text-sm font-medium opacity-90">Extracurricular Activities</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground" data-testid="badge-our-values">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Guides Us Everyday</h2>
            <p className="text-muted-foreground text-lg">We instill principles that go beyond the classroom, shaping students into compassionate global citizens.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                desc: "Delivering a structured, high-quality curriculum across all levels — from Kindergarten through Secondary School — with continuous assessment and performance tracking.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Heart,
                title: "Moral Values",
                desc: "Instilling integrity, responsibility, and respect. We shape students into compassionate individuals who contribute positively to their communities.",
                color: "bg-red-100 text-red-600"
              },
              {
                icon: Sparkles,
                title: "Global Readiness",
                desc: "Preparing students for international universities and scholarships through our integrated SAT program and globally-aligned academic standards.",
                color: "bg-yellow-100 text-yellow-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
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
          <div className="h-64 md:h-80 relative">
            <img src="/images/classroom-1.png" alt="Classroom" className="w-full h-full object-cover" />
          </div>
          <div className="h-64 md:h-80 relative">
            <img src="/images/art-1.png" alt="Art Class" className="w-full h-full object-cover" />
          </div>
          <div className="h-64 md:h-80 relative">
            <img src="/images/sports-1.png" alt="Sports" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Upcoming Events / Announcements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground text-lg">Don't miss out on what's happening around the campus this month.</p>
            </div>
            <Button variant="outline" className="mt-6 md:mt-0" data-testid="button-all-events">View All Events</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border shadow-sm">
              <div className="p-6 md:p-8 flex gap-6">
                <div className="flex flex-col items-center justify-center bg-primary/10 rounded-xl p-4 min-w-[90px]">
                  <span className="text-sm font-bold text-primary uppercase">MAY</span>
                  <span className="text-3xl font-bold text-primary">15</span>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2" data-testid="badge-event-category">Academics</Badge>
                  <h3 className="text-xl font-bold mb-2">Annual Science Fair</h3>
                  <p className="text-muted-foreground mb-4">Students from grades 3-6 will present their science projects in the main hall. Parents welcome!</p>
                  <div className="flex items-center text-sm font-medium text-foreground gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> 9:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-border shadow-sm">
              <div className="p-6 md:p-8 flex gap-6">
                <div className="flex flex-col items-center justify-center bg-secondary/20 rounded-xl p-4 min-w-[90px]">
                  <span className="text-sm font-bold text-yellow-700 uppercase">MAY</span>
                  <span className="text-3xl font-bold text-yellow-700">22</span>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 border-secondary text-yellow-700" data-testid="badge-event-category-2">Community</Badge>
                  <h3 className="text-xl font-bold mb-2">Spring Picnic</h3>
                  <p className="text-muted-foreground mb-4">Join us for food, games, and sunshine on the school athletic field. Bring your own blanket!</p>
                  <div className="flex items-center text-sm font-medium text-foreground gap-2">
                    <Calendar className="h-4 w-4 text-primary" /> 11:00 AM - 3:00 PM
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Announcement Alert */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
            <Bell className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900 mb-1">Registration Deadline Approaching</h4>
              <p className="text-blue-800">Friendly reminder that early-bird registration for the upcoming academic year ends on June 1st.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
