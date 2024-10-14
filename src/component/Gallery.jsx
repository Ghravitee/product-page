import { useState } from "react";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";

const Gallery = ({ isLightbox, toggleModal }) => {
  const productImages = [product1, product2, product3, product4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImage = productImages[currentIndex];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === productImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col gap-6">
      {isLightbox && (
        <svg
          className="ml-auto cursor-pointer fill-white hover:fill-Orange"
          onClick={toggleModal}
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </svg>
      )}

      <div className="relative">
        <img
          onClick={!isLightbox ? toggleModal : null}
          src={mainImage}
          alt="Product"
          className=" lg:rounded-xl lg:h-[30rem] w-full cursor-pointer"
        />
        <div
          className="lg:hidden absolute top-1/2 left-5 w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
          onClick={prevSlide}
        >
          <img
            src={iconPrev}
            alt="Previous"
            className="w-4 h-4 object-contain"
          />
        </div>
        <div
          className="lg:hidden absolute top-1/2 right-5 w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
          onClick={nextSlide}
        >
          <img src={iconNext} alt="Next" className="w-4 h-4 object-contain" />
        </div>
        {isLightbox && (
          <>
            <div
              className="absolute top-1/2 -left-5 w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={prevSlide}
            >
              <img src={iconPrev} alt="Previous" />
            </div>
            <div
              className="absolute top-1/2 -right-5 w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={nextSlide}
            >
              <img src={iconNext} alt="Next" />
            </div>
          </>
        )}
      </div>

      <div className="hidden lg:flex justify-between items-center">
        {productImages.map((product, index) => (
          <img
            key={index}
            src={product}
            alt={`Product ${index + 1}`}
            className={`w-20 h-20 rounded-lg cursor-pointer ${
              currentIndex === index
                ? "border-2 border-orange-500 opacity-35"
                : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
