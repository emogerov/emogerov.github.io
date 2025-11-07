import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Artwork } from "./GalleryFiltered";

interface ImageModalProps {
  artwork: Artwork;
  onClose: () => void;
}

const ImageModal = ({ artwork, onClose }: ImageModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-foreground hover:text-accent"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </Button>

      <div
        className="max-w-6xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="mt-6 text-center bg-card p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-2">{artwork.title}</h3>
          <p className="text-muted-foreground mb-1">Dimensions: {artwork.dimensions}</p>
          <p className="text-accent">{artwork.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
