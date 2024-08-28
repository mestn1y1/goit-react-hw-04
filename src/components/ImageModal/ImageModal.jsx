import Modal from "react-modal";
export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <button onClick={onRequestClose} className="CloseButton">
        X
      </button>
      <img src={image.urls.full} alt={image.description} />
    </Modal>
  );
}
