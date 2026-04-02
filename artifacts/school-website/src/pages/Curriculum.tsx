import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import classroomImg from "@assets/652805278_122248426340266808_7731009226519113777_n.jpg";
import lowerPrimaryImg from "@assets/581960689_122234146766266808_2802511307121587309_n.jpg";
import { BookOpen, Rocket, Music, Dumbbell, Beaker, Code, Globe, Palette } from "lucide-react";

export default function Curriculum() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Academics</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Curriculum</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive, inquiry-based approach to learning that balances foundational skills with creative exploration and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Grade Levels Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="early-years" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted p-2 rounded-xl mb-12">
              <TabsTrigger value="early-years" className="py-3 text-base rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Early Years (Pre-K - K)</TabsTrigger>
              <TabsTrigger value="lower-primary" className="py-3 text-base rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Lower Primary (1-3)</TabsTrigger>
              <TabsTrigger value="upper-primary" className="py-3 text-base rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Upper Primary (4-6)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="early-years" className="mt-0 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Foundations of Discovery</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      Our Early Years program is designed around play-based learning. We believe that young children learn best when they are actively engaged, exploring their environment, and interacting with peers.
                    </p>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                      <AccordionItem value="item-1" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Literacy & Language</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Phonics, storytelling, interactive reading, and early writing skills taught through games and songs to build a strong foundation for communication.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Numeracy & Logic</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Number recognition, basic shapes, patterns, and spatial awareness introduced through hands-on manipulatives and puzzle solving.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Social & Emotional</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Developing empathy, sharing, conflict resolution, and self-regulation in a supportive group setting.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <img src={classroomImg} alt="Early Years" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="lower-primary" className="mt-0 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <img src={lowerPrimaryImg} alt="Lower Primary" className="w-full h-full object-cover" />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-3xl font-bold mb-6">Building Core Competencies</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      Grades 1-3 focus on solidifying reading, writing, and mathematical skills while introducing broader concepts in science and social studies through thematic units.
                    </p>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                      <AccordionItem value="item-1" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Language Arts</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Transitioning from "learning to read" to "reading to learn." Creative writing, grammar, and reading comprehension using diverse literature.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Mathematics</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Addition, subtraction, basic multiplication/division, fractions, time, money, and introductory geometry with an emphasis on real-world problem solving.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Science & Discovery</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Inquiry-based exploration of life cycles, weather, simple machines, and earth sciences through simple experiments and observation.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="upper-primary" className="mt-0 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Fostering Independence</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      Grades 4-6 prepare students for middle school by developing critical thinking, independent study skills, and complex problem-solving abilities across all subjects.
                    </p>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                      <AccordionItem value="item-1" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Advanced Language Arts</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Novel studies, essay writing, debates, presentations, and advanced reading analysis to articulate thoughts clearly and persuasively.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">STEM Integration</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          Advanced math including pre-algebra concepts. Science curriculum covering physics, chemistry basics, and biology, integrated with introductory coding and robotics.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3" className="border-border">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">Global Studies</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          History, geography, and cultural studies focused on understanding global interconnectivity, ancient civilizations, and civic responsibilities.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <img src="/images/science-1.png" alt="Upper Primary" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Specialist Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Specialist Programs</h2>
            <p className="text-muted-foreground text-lg">Beyond the core classroom, students participate in specialized subjects led by expert instructors.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visual Arts</h3>
                <p className="text-sm text-muted-foreground">Painting, sculpture, ceramics, and mixed media to foster creative expression.</p>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Music</h3>
                <p className="text-sm text-muted-foreground">Vocal training, rhythm, notation, and introduction to various instruments.</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Physical Ed</h3>
                <p className="text-sm text-muted-foreground">Team sports, athletics, gymnastics, and promoting lifelong physical health.</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">World Languages</h3>
                <p className="text-sm text-muted-foreground">Introduction to Spanish and French, focusing on conversation and culture.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
