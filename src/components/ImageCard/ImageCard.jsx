import css from "./ImageCard.module.css";
export default function ImageCard({ image, onOpenModal }) {
  return (
    <div onClick={() => onOpenModal(image)} className={css.itemImg}>
      <img
        src={image.urls.small_s3}
        alt={image.description}
        className={css.galleryImg}
      />
    </div>
  );
}
