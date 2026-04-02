import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Classroom", "Library", "Lab", "Sports", "Events", "Ceremonies"];

  const images = [
    { src: img21, category: "Ceremonies", title: "Graduation Celebration 2023" },
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
    { src: sports1, category: "Sports", title: "Football Training" },
    { src: sports2, category: "Sports", title: "On the Pitch" },
  ];

  const filteredImages = filter === "All"
    ? images
    : images.filter(img => img.category === filter);

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
                  className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
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
    </div>
  );
}
