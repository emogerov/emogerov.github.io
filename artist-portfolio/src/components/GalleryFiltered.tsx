import { useState } from "react";
import { Button } from "@/components/ui/button";
import ImageModal from "./ImageModal";
import artworkAbstract1 from "@/assets/artwork-abstract-1.jpg";
import artworkPortrait1 from "@/assets/artwork-portrait-1.jpg";
import artworkLandscape1 from "@/assets/artwork-landscape-1.jpg";
import artworkAbstract2 from "@/assets/artwork-abstract-2.jpg";
import artworkStillLife1 from "@/assets/artwork-still-life-1.jpg";
import artworkUrban1 from "@/assets/artwork-urban-1.jpg";

export interface Artwork {
  id: number;
  title: string;
  dimensions: string;
  category: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Geometric Harmony",
    dimensions: "70x50 cm",
    category: "Abstract",
    image: artworkAbstract1,
  },
  {
    id: 2,
    title: "Emotional Depths",
    dimensions: "50x70 cm",
    category: "Portraits",
    image: artworkPortrait1,
  },
  {
    id: 3,
    title: "Mountain Serenity",
    dimensions: "100x60 cm",
    category: "Landscapes",
    image: artworkLandscape1,
  },
  {
    id: 4,
    title: "Colorful Flow",
    dimensions: "80x80 cm",
    category: "Abstract",
    image: artworkAbstract2,
  },
  {
    id: 5,
    title: "Blooming Elegance",
    dimensions: "50x70 cm",
    category: "Still Life",
    image: artworkStillLife1,
  },
  {
    id: 6,
    title: "Urban Perspective",
    dimensions: "70x50 cm",
    category: "Urban",
    image: artworkUrban1,
  },
];

const categories = ["All", "Abstract", "Portraits", "Landscapes", "Still Life", "Urban"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((artwork) => artwork.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Gallery</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-smooth"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{artwork.title}</h3>
                <p className="text-sm text-muted-foreground">{artwork.dimensions}</p>
                <p className="text-sm text-accent mt-1">{artwork.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedArtwork && (
        <ImageModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
      )}
    </section>
  );
};

export default Gallery;
