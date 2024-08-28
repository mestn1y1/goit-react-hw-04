import Modal from "react-modal";
import css from "./ImageModal.module.css";
export default function ImageModal({ isOpen, onRequestClose, image }) {
  console.log(image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {/* <button onClick={onRequestClose} className={css.closeButton}>
        X
      </button> */}
      <img src={image.urls.full} alt={image.description} className={css.img} />
    </Modal>
  );
}
