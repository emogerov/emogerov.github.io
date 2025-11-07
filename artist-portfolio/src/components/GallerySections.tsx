import { useState } from "react";
import ImageModal from "./ImageModal";
import type { Artwork } from "./GalleryFiltered";
import artworkAbstract1 from "@/assets/artwork-abstract-1.jpg";
import artworkPortrait1 from "@/assets/artwork-portrait-1.jpg";
import artworkLandscape1 from "@/assets/artwork-landscape-1.jpg";
import artworkAbstract2 from "@/assets/artwork-abstract-2.jpg";
import artworkStillLife1 from "@/assets/artwork-still-life-1.jpg";
import artworkUrban1 from "@/assets/artwork-urban-1.jpg";

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

const categories = ["Abstract", "Portraits", "Landscapes", "Still Life", "Urban"];

const GallerySections = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="py-20 px-4">
      {categories.map((category) => {
        const categoryArtworks = artworks.filter((artwork) => artwork.category === category);
        
        return (
          <section key={category} id={category.toLowerCase().replace(" ", "-")} className="mb-20">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground">{category}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArtworks.map((artwork) => (
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {selectedArtwork && (
        <ImageModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
      )}
    </div>
  );
};

export default GallerySections;
