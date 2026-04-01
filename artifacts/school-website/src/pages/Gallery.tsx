import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Classroom", "Sports", "Events", "Campus"];

  const images = [
    { src: "/images/classroom-1.png", category: "Classroom", title: "Interactive Learning" },
    { src: "/images/playground-1.png", category: "Campus", title: "Recess Fun" },
    { src: "/images/art-1.png", category: "Classroom", title: "Creative Arts" },
    { src: "/images/campus-1.png", category: "Campus", title: "Main Building" },
    { src: "/images/science-1.png", category: "Classroom", title: "Science Experiment" },
    { src: "/images/sports-1.png", category: "Sports", title: "Soccer Practice" },
    { src: "/images/library-1.png", category: "Campus", title: "Library Reading" },
    { src: "/images/music-1.png", category: "Classroom", title: "Music Class" },
    { src: "/images/graduation-1.png", category: "Events", title: "Graduation Day" },
    { src: "/images/field-trip-1.png", category: "Events", title: "Museum Field Trip" },
    { src: "/images/sports-day-1.png", category: "Sports", title: "Annual Sports Day" },
    { src: "/images/group-1.png", category: "Campus", title: "Student Community" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Life at Greenleaf</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our vibrant classrooms, dynamic events, and beautiful campus.
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
