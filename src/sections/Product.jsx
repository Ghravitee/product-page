import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import Gallery from "../component/Gallery";
// import iconCart from "../images/icon-cart.svg";

const Product = () => {
  const { addToCart, count, removeFromCart, price } = useContext(AuthContext);
  const { toggleModal } = useContext(AuthContext);

  return (
    <section className="lg:container xl:py-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[8rem]">
        <Gallery toggleModal={toggleModal} />

        <div className="flex flex-col lg:pt-20 px-6 py-10">
          <p className="uppercase text-Dark-Grayish-Blue leading-8 text-sm font-bold lg:mb-6 tracking-widest">
            sneaker company
          </p>
          <h1 className="text-black font-bold text-[2rem] lg:text-[3rem] leading-[1.1] lg:leading-[3.3rem] mb-5 lg:mb-10">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-[0.95rem] md:text-base lg:text-[1.1rem] text-Dark-Grayish-Blue mb-6">
            These low profile sneaker are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="flex justify-between items-center lg:items-start lg:flex-col mb-4">
            <div className="flex items-center gap-4 lg:mb-4">
              <h2 className="font-bold text-[1.5rem] lg:text-[1.6rem]">
                {" "}
                ${price.toFixed(2)}
              </h2>
              <p className="bg-black py-[2px] px-3 flex justify-center items-center text-white rounded-md text-sm">
                50%
              </p>
            </div>
            <p className="line-through text-Dark-Grayish-Blue font-bold lg:mb-8">
              $250.00
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-Light-Grayish-Blue rounded-lg px-4 py-3 w-full flex justify-between items-center lg:w-[30%]">
              <div
                onClick={removeFromCart}
                className="p-2 cursor-pointer hover:opacity-35"
              >
                <img
                  src={iconMinus}
                  alt="This is an icon for decreasing quantity of products"
                />
              </div>
              <p className="font-bold">{count}</p>
              <div
                onClick={addToCart}
                className="p-2 cursor-pointer hover:opacity-35"
              >
                <img
                  src={iconPlus}
                  alt="This is an icon for increasing quantity of products"
                />
              </div>
            </div>

            <div
              className="bg-Orange hover:opacity-70 px-4 py-3 w-full lg:w-[50%] rounded-lg cursor-pointer"
              onClick={addToCart}
            >
              <div className="flex justify-center items-center gap-3">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                </svg>
                <p className="font-bold">Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
