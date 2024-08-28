export default function ImageCard({ image, onOpenModal }) {
  console.log(image);
  return (
    <div onClick={() => onOpenModal(image)} style={{ cursor: "pointer" }}>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
}
