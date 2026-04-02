import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, BookOpen, Globe, Mail } from "lucide-react";
import campusImg from "@assets/17.jpg.jpeg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-secondary text-secondary-foreground mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story & Mission</h1>
            <p className="text-xl text-muted-foreground">
              Sunshine First School is a comprehensive educational institution providing a complete learning journey — from Kindergarten through Secondary — under one unified vision of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded to nurture students from their earliest years through adolescence, Sunshine First School offers a continuous and well-structured academic pathway that supports both intellectual growth and character development.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Sunshine, we believe that strong beginnings lead to exceptional futures. Our school is designed to guide students through every stage of development — from building early literacy in Kindergarten to preparing for university and global opportunities at the Secondary level.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Mission</h4>
                    <p className="text-muted-foreground">To build a generation that is academically strong, morally grounded, and globally competitive — guiding every student through a complete journey toward success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary/40 p-1 rounded-full text-yellow-700 shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Vision</h4>
                    <p className="text-muted-foreground">A school where every child, from KG to Secondary, experiences a consistent, high-quality education that prepares them for local excellence and global success.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={campusImg} alt="Sunshine First School Campus" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Our Programs</Badge>
            <h2 className="text-3xl font-bold mb-4">A Complete Educational Journey</h2>
            <p className="text-muted-foreground text-lg">We guide students through every stage of development — from their very first day of school to university readiness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: "Kindergarten (KG)",
                desc: "Building early foundations in literacy, numeracy, and social skills through engaging, nurturing environments that spark curiosity and a love for learning.",
                color: "bg-yellow-50 border-yellow-200",
                badge: "Ages 4–6"
              },
              {
                level: "Primary School",
                desc: "Strengthening core academic skills while developing curiosity, discipline, and confidence. Students receive personalised attention and continuous progress tracking.",
                color: "bg-green-50 border-green-200",
                badge: "Grades 1–6"
              },
              {
                level: "Secondary School",
                desc: "Preparing students for higher education, leadership, and global opportunities through advanced academic programs — including structured SAT preparation.",
                color: "bg-blue-50 border-blue-200",
                badge: "Grades 7–12"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full border ${item.color}`}>
                  <CardContent className="p-8">
                    <Badge variant="outline" className="mb-4 text-xs">{item.badge}</Badge>
                    <h3 className="text-xl font-bold mb-3">{item.level}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Leadership</Badge>
            <h2 className="text-3xl font-bold mb-4">School Leadership</h2>
            <p className="text-muted-foreground text-lg">Our dedicated leadership team drives Sunshine First School's vision of academic excellence and global readiness.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Abdulkadir Hassan Abdisala</h3>
                <p className="text-primary font-medium mb-3">General Director</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:abdulkadir@sunshineschools.net" className="hover:text-primary transition-colors">abdulkadir@sunshineschools.net</a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 text-yellow-700">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">Issa Omer</h3>
                <p className="text-primary font-medium mb-3">SAT Program Coordinator</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:issa@sunshineschools.net" className="hover:text-primary transition-colors">issa@sunshineschools.net</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 border-none">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose Sunshine First School?</h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  We offer more than an education — we offer a complete journey from a child's first classroom to university readiness, grounded in values and driven by excellence.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full educational pathway from KG to Secondary",
                    "Strong academic system with continuous evaluation",
                    "Integrated SAT preparation program",
                    "Focus on discipline, values, and student character",
                    "Organised leadership and quality-driven management",
                    "Preparation for both local excellence and global success",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-secondary shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <span className="block text-3xl font-bold text-white mb-1">KG–12</span>
                  <span className="text-sm text-primary-foreground/80">Complete Pathway</span>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20 translate-y-6">
                  <Globe className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <span className="block text-3xl font-bold text-white mb-1">SAT</span>
                  <span className="text-sm text-primary-foreground/80">International Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
