import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul>
      {images.length > 0 && (
        <li>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} onOpenModal={onOpenModal} />
          ))}
        </li>
      )}
    </ul>
  );
}
