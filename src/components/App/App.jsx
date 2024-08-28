import { useState } from "react";

import "./App.css";
import SearchBAr from "../SearchBar/SearchBar";
import searchImagesApi from "../searchImagesApi";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await searchImagesApi(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <>
      <SearchBAr onSearch={handleSearch} />
      <ImageGallery images={images} onOpenModal={openModal} />
      {modalImage && (
        <ImageModal
          isOpen={modalImage}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
