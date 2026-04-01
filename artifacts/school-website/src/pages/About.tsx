import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, BookOpen, Heart } from "lucide-react";

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
              Discover the history, values, and people that make Greenleaf Academy a special place for children to learn and grow.
            </p>
          </div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">A Legacy of Learning</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1998, Greenleaf Academy began as a small community initiative with just 30 students. Today, we are proud to serve over 400 families, but our core ethos remains unchanged: every child is unique and deserves an education tailored to their potential.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our campus has evolved into a modern facility equipped with state-of-the-art science labs, a vibrant arts wing, and expansive athletic fields, all designed to foster comprehensive development.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Mission</h4>
                    <p className="text-muted-foreground">To empower students with the knowledge, skills, and character to thrive in a changing world.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-secondary/40 p-1 rounded-full text-yellow-700 shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Vision</h4>
                    <p className="text-muted-foreground">A community where learning is joyful, discovery is constant, and every student feels valued.</p>
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
              <img src="/images/campus-1.png" alt="School History" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground text-lg">Dedicated educators with decades of combined experience.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principal */}
            <Card className="border-border overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Dr. Sarah Jenkins</h3>
                <p className="text-primary font-medium mb-4">Principal</p>
                <p className="text-sm text-muted-foreground">With 20 years in education, Dr. Jenkins leads with a focus on holistic student wellbeing and academic excellence.</p>
              </CardContent>
            </Card>
            
            {/* Vice Principal */}
            <Card className="border-border overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600" alt="Vice Principal" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
                <p className="text-primary font-medium mb-4">Vice Principal</p>
                <p className="text-sm text-muted-foreground">Specializing in curriculum development, Mr. Rodriguez ensures our teaching methods are innovative and engaging.</p>
              </CardContent>
            </Card>

            {/* Head of Admissions */}
            <Card className="border-border overflow-hidden sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto w-full">
              <div className="h-64 bg-gray-200">
                <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600&h=600" alt="Head of Admissions" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Emily Chen</h3>
                <p className="text-primary font-medium mb-4">Head of Admissions</p>
                <p className="text-sm text-muted-foreground">Emily is the welcoming first point of contact for new families, helping them navigate their journey at Greenleaf.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground relative overflow-hidden">
            {/* Abstract background shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 border-none">Achievements</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Recognized for Excellence</h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  We are proud to be acknowledged by leading educational bodies for our commitment to quality education, environmental sustainability, and community service.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-secondary" />
                    <span className="font-medium">National Blue Ribbon School (2022)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-secondary" />
                    <span className="font-medium">Green Flag Eco-School Certification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-secondary" />
                    <span className="font-medium">Excellence in STEM Education Award</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <span className="block text-3xl font-bold text-white mb-1">Top 5%</span>
                  <span className="text-sm text-primary-foreground/80">In Regional Literacy</span>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20 translate-y-6">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <span className="block text-3xl font-bold text-white mb-1">10,000+</span>
                  <span className="text-sm text-primary-foreground/80">Hours of Community Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
