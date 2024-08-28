import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={css.gallery}>
      {images.length > 0 && (
        <li className={css.galleryList}>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} onOpenModal={onOpenModal} />
          ))}
        </li>
      )}
    </ul>
  );
}
