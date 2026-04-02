import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Heart, Sparkles, ArrowRight, Calendar, Bell, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import heroImg    from "@assets/21.jpg_1775098026097.jpeg";
import splitImg1  from "@assets/17.jpg.jpeg";
import splitImg2  from "@assets/WhatsApp_Image_2026-04-01_at_18.21.44_1775098706787.jpeg";
import panelImg1  from "@assets/1.jpg_1775098026090.jpeg";
import panelImg2  from "@assets/20.jpg_1775098026096.jpeg";
import panelImg3  from "@assets/WhatsApp_Image_2026-04-01_at_18.21.56_1775098823736.jpeg";
import newsImg1   from "@assets/12.jpg_1775098026095.jpeg";
import newsImg2   from "@assets/WhatsApp_Image_2026-04-01_at_18.21.53_(2)_1775098823731.jpeg";
import newsImg3   from "@assets/18.jpg_1775098026096.jpeg";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const heroWords = ["Where", "curious", "minds", "grow."];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-end overflow-hidden">
        {/* background image with subtle scale on load */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <img src={heroImg} alt="Sunshine First School" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(12,30,49,0.90) 0%, rgba(12,30,49,0.40) 60%, rgba(12,30,49,0.15) 100%)" }}
          />
        </motion.div>

        <div className="container mx-auto px-8 md:px-14 z-10 relative pb-24 md:pb-32">
          {/* location label */}
          <motion.p
            className="text-secondary text-xs tracking-[0.3em] font-semibold uppercase mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease }}
          >
            Jigjigayr · Hargeisa · Somalia
          </motion.p>

          {/* animated heading — word by word */}
          <motion.h1
            className="font-serif font-light text-white leading-[1.1] mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -20 },
                  show:   { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, delay: 0.5 + i * 0.13, ease } },
                }}
              >
                {i === 3 ? <em>{word}</em> : word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-white/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease }}
          >
            An inspiring, academically excellent environment — from Kindergarten through Secondary — preparing every child for a bright future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-[0.18em] font-semibold bg-primary text-white hover:bg-primary/85 transition-colors"
              data-testid="button-hero-enroll"
            >
              ENROLL NOW <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-[0.18em] font-semibold border border-white/50 text-white hover:bg-white/10 transition-colors"
              data-testid="button-hero-tour"
            >
              VIEW GALLERY
            </Link>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SPLIT A  (text left · image right) ───────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* text */}
        <motion.div
          className="flex flex-col justify-center px-10 md:px-20 py-20 bg-white"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-primary text-[10px] tracking-[0.35em] font-bold uppercase mb-5">Our Story</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-5">
            Welcome to<br />Sunshine First School
          </h2>
          <div className="w-10 h-0.5 bg-secondary mb-7" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
            Sunshine First School provides a complete learning journey — from Kindergarten through Primary and Secondary levels — under one unified vision of excellence. We nurture students from their earliest years through adolescence with a continuous, well-structured academic pathway.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
            We don't just educate students — we guide them through a complete journey toward success, building academic strength, moral grounding, and global competitiveness at every stage.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide group"
            data-testid="link-read-more-about"
          >
            Read our full story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* image */}
        <motion.div
          className="relative overflow-hidden min-h-[50vh] md:min-h-full"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={splitImg1}
            alt="Sunshine First School campus"
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease }}
          />
        </motion.div>
      </section>

      {/* ─── DARK VALUES STRIP ────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#0C1E31" }}>
        <div className="container mx-auto px-8 md:px-14">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="text-secondary text-[10px] tracking-[0.35em] font-bold uppercase mb-4">What Guides Us</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-white leading-tight">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {[
              {
                icon: BookOpen,
                title: "Academic Excellence",
                desc: "A structured, high-quality curriculum from KG through Secondary — with continuous assessment and performance tracking at every level.",
              },
              {
                icon: Heart,
                title: "Moral Values",
                desc: "Instilling integrity, responsibility, and respect. We shape students into compassionate individuals who contribute positively to their communities.",
              },
              {
                icon: Sparkles,
                title: "Global Readiness",
                desc: "Preparing students for international universities and scholarships through our integrated SAT program and globally-aligned academic standards.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-start px-10 py-12"
                variants={fadeUp}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-secondary/40 mb-6 text-secondary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif font-light text-2xl text-white mb-3">{v.title}</h3>
                <div className="w-8 h-0.5 bg-secondary mb-5" />
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* stats row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-14 border-t border-white/10 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { num: "15:1",  label: "Student / Teacher Ratio" },
              { num: "25+",   label: "Years of Excellence" },
              { num: "100%",  label: "Annual Pass Rate" },
              { num: "30+",   label: "Extracurricular Activities" },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <span className="block font-serif text-4xl md:text-5xl font-light text-white mb-2">{s.num}</span>
                <span className="text-white/40 text-xs tracking-[0.18em] uppercase">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SPLIT B  (image left · text right) ───────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* image */}
        <motion.div
          className="relative overflow-hidden min-h-[50vh] md:min-h-full order-2 md:order-1"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={splitImg2}
            alt="Students in science lab"
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease }}
          />
        </motion.div>

        {/* text */}
        <motion.div
          className="flex flex-col justify-center px-10 md:px-20 py-20 bg-muted/40 order-1 md:order-2"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-primary text-[10px] tracking-[0.35em] font-bold uppercase mb-5">Our Programs</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight mb-5">
            A Complete<br />Educational Journey
          </h2>
          <div className="w-10 h-0.5 bg-secondary mb-7" />
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            We guide students through every stage of development — from their very first day of school to university readiness. Each program builds naturally on the last, creating confident, capable young people at every age.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { level: "Kindergarten (KG)", age: "Ages 4–6" },
              { level: "Primary School",   age: "Grades 1–6" },
              { level: "Secondary School", age: "Grades 7–12" },
            ].map((p, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-serif text-lg font-light">{p.level}</span>
                <span className="text-xs tracking-widest text-muted-foreground uppercase">{p.age}</span>
              </div>
            ))}
          </div>
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide group"
          >
            Explore our curriculum
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* ─── IMAGE TRIPTYCH ───────────────────────────────────── */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { src: panelImg1, label: "Classroom Life" },
            { src: panelImg2, label: "School Events" },
            { src: panelImg3, label: "Sports & Activities" },
          ].map((panel, i) => (
            <motion.div
              key={i}
              className="relative h-72 md:h-96 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
            >
              <motion.img
                src={panel.src}
                alt={panel.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.7, ease }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <span className="absolute bottom-6 left-6 text-white font-serif text-xl font-light tracking-wide">
                {panel.label}
              </span>
              <Link
                href="/gallery"
                className="absolute inset-0 z-10"
                aria-label={`View ${panel.label}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── LATEST NEWS / EVENTS ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-8 md:px-14">

          <motion.div
            className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div>
              <p className="text-primary text-[10px] tracking-[0.35em] font-bold uppercase mb-4">Campus News</p>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
                Stay Updated
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-[10px] tracking-[0.25em] font-bold text-foreground border border-foreground/30 hover:border-foreground px-6 py-3 transition-all uppercase whitespace-nowrap"
              data-testid="button-all-events"
            >
              All Events
            </Link>
          </motion.div>

          {/* news image cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              { img: newsImg1, cat: "Academics", date: "May 15", title: "Annual Science Fair", desc: "Students from grades 3–6 present their science projects in the main hall. Parents welcome!" },
              { img: newsImg2, cat: "Sports",    date: "May 22", title: "Inter-School Sports Day", desc: "Our teams compete in football, athletics, and basketball against leading regional schools." },
              { img: newsImg3, cat: "Community", date: "Jun 1",  title: "End-of-Year Celebration", desc: "A wonderful day of performances, awards, and reflection on another brilliant school year." },
            ].map((n, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden bg-muted"
                variants={fadeUp}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, ease }}
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-semibold">
                    {n.cat}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">{n.date}</p>
                  <h3 className="font-serif text-xl font-light mb-2">{n.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* announcement bar */}
          <motion.div
            className="flex items-start gap-5 p-6 border-l-4 border-secondary bg-muted/60"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Bell className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg font-light mb-1">Registration Deadline Approaching</h4>
              <p className="text-muted-foreground text-sm">Early-bird registration for the upcoming academic year closes on June 1st. Contact us to secure your child's place.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────── */}
      <motion.section
        className="relative py-28 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ backgroundColor: "#0C1E31" }}
      >
        <div className="container mx-auto px-8 md:px-14 text-center relative z-10">
          <p className="text-secondary text-[10px] tracking-[0.35em] font-bold uppercase mb-6">Join Our Family</p>
          <h2 className="font-serif font-light text-4xl md:text-6xl text-white leading-tight mb-8">
            Begin your child's<br /><em>exceptional journey</em>
          </h2>
          <div className="w-10 h-0.5 bg-secondary mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm tracking-[0.18em] font-semibold bg-primary text-white hover:bg-primary/85 transition-colors"
              data-testid="button-cta-enroll"
            >
              ENROLL NOW <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm tracking-[0.18em] font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              ABOUT THE SCHOOL
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
