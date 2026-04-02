import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@assets/1.jpg_1775098026090.jpeg";
import img2 from "@assets/2.jpg_1775098026090.jpeg";
import img3 from "@assets/3.jpg_1775098026089.jpeg";
import img4 from "@assets/4.jpg_1775098026091.jpeg";
import img6 from "@assets/6.jpg_1775098026091.jpeg";
import img7 from "@assets/7.jpg_1775098026092.jpeg";
import img8 from "@assets/8.jpg_1775098026092.jpeg";
import img11 from "@assets/11.jpg_1775098026093.jpeg";
import img12 from "@assets/12.jpg_1775098026095.jpeg";
import img13 from "@assets/13.jpg_1775098026095.jpeg";
import img15 from "@assets/15.jpg_1775098026094.jpeg";
import img16 from "@assets/16.jpg_1775098026094.jpeg";
import img17 from "@assets/17.jpg_1775098026093.jpeg";
import img18 from "@assets/18.jpg_1775098026096.jpeg";
import img20 from "@assets/20.jpg_1775098026096.jpeg";
import img21 from "@assets/21.jpg_1775098026097.jpeg";

import lab1 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.44_1775098706787.jpeg";
import lab2 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.44_(1)_1775098706787.jpeg";
import lab3 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.44_(2)_1775098706787.jpeg";
import lab4 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.45_1775098706788.jpeg";
import lab5 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.46_(1)_1775098706788.jpeg";
import lab6 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.46_1775098706789.jpeg";
import lab7 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.47_(1)_1775098706789.jpeg";
import lab8 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.47_(2)_1775098706789.jpeg";
import lab9 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.47_1775098706790.jpeg";
import sports1 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.48_1775098706790.jpeg";
import sports2 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.49_1775098706791.jpeg";
import sports3 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.50_1775098823729.jpeg";
import sports4 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.51_1775098823730.jpeg";
import sports5 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.52_1775098823730.jpeg";
import sports6 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.53_(1)_1775098823730.jpeg";
import sports7 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.53_(2)_1775098823731.jpeg";
import sports8 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.53_(3)_1775098823732.jpeg";
import sports9 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.53_1775098823732.jpeg";
import sports10 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.54_(1)_1775098823733.jpeg";
import sports11 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.54_(2)_1775098823734.jpeg";
import sports12 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.54_1775098823735.jpeg";
import sports13 from "@assets/WhatsApp_Image_2026-04-01_at_18.21.56_1775098823736.jpeg";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Library", "Lab", "Sports", "Events", "Ceremonies"];

  const images = [
    { src: img21, category: "Ceremonies", title: "Graduation Celebration 2025" },
    { src: img20, category: "Events", title: "Student Address" },
    { src: img17, category: "Library", title: "Reading in the Library" },
    { src: img18, category: "Library", title: "Group Reading Session" },
    { src: img16, category: "Library", title: "Students with Their Books" },
    { src: img15, category: "Library", title: "Library Reading Hour" },
    { src: img7,  category: "Classroom", title: "Focused Study" },
    { src: img4,  category: "Classroom", title: "Classroom Learning" },
    { src: img8,  category: "Classroom", title: "Exam Preparation" },
    { src: img6,  category: "Classroom", title: "Student Concentration" },
    { src: img11, category: "Ceremonies", title: "Award Presentation" },
    { src: img12, category: "Ceremonies", title: "Certificate Ceremony" },
    { src: img13, category: "Ceremonies", title: "Achievement Award" },
    { src: img2,  category: "Events", title: "Ramadan Event" },
    { src: img1,  category: "Events", title: "School Gathering" },
    { src: img3,  category: "Events", title: "Leadership Address" },
    { src: lab4,  category: "Lab", title: "Electrical Lab Team" },
    { src: lab6,  category: "Lab", title: "Lab Group Photo" },
    { src: lab5,  category: "Lab", title: "Lab Session" },
    { src: lab1,  category: "Lab", title: "Lab Practical Work" },
    { src: lab7,  category: "Lab", title: "Future Engineer" },
    { src: lab3,  category: "Lab", title: "Hands-On Learning" },
    { src: lab8,  category: "Lab", title: "Student in the Lab" },
    { src: lab9,  category: "Lab", title: "Practical Skills" },
    { src: lab2,  category: "Lab", title: "Lab Partners" },
    { src: sports1,  category: "Sports", title: "Football Training" },
    { src: sports2,  category: "Sports", title: "On the Pitch" },
    { src: sports3,  category: "Sports", title: "Getting Ready" },
    { src: sports4,  category: "Sports", title: "Match in Action" },
    { src: sports5,  category: "Sports", title: "Goal Mouth Action" },
    { src: sports6,  category: "Sports", title: "Team Players" },
    { src: sports7,  category: "Sports", title: "Football Friends" },
    { src: sports8,  category: "Sports", title: "Team Line-Up" },
    { src: sports9,  category: "Sports", title: "Game Day" },
    { src: sports10, category: "Sports", title: "Football Squad" },
    { src: sports11, category: "Sports", title: "Rival Teams" },
    { src: sports12, category: "Sports", title: "White Team Line-Up" },
    { src: sports13, category: "Sports", title: "Full Squad Photo" },
  ];

  const filteredImages = filter === "All"
    ? images
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = useCallback(() => {
    setLightboxIndex(i => (i !== null ? (i - 1 + filteredImages.length) % filteredImages.length : null));
  }, [filteredImages.length]);
  const goNext = useCallback(() => {
    setLightboxIndex(i => (i !== null ? (i + 1) % filteredImages.length : null));
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-4">Gallery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Life at Sunshine First School</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our classrooms, library, events, and ceremonies.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
                data-testid={`button-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <Badge className="bg-secondary text-secondary-foreground mb-2 border-none text-xs pointer-events-none">{image.category}</Badge>
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <Badge className="bg-secondary text-secondary-foreground mb-2 border-none">{filteredImages[lightboxIndex].category}</Badge>
              <p className="text-white font-semibold text-lg">{filteredImages[lightboxIndex].title}</p>
              <p className="text-white/50 text-sm mt-1">{lightboxIndex + 1} / {filteredImages.length}</p>
            </div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
