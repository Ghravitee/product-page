import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import productThumbnail1 from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";

const Cart = () => {
  const { count, price, clearCart } = useContext(AuthContext);

  const calculatedPrice = price * count;
  return (
    <div className="py-8 absolute w-[92%] md:w-[23rem] mx-auto top-24 lg:-right-28 lg:top-[105px] z-[50] box bg-white rounded-md">
      <div className="px-6 ">
        <h3 className="font-bold">Cart</h3>
      </div>
      <hr className="bg-Grayish-Blue h-[1px] my-6" />
      {count >= 1 ? (
        <div className="flex flex-col px-6 ">
          <div className="flex items-center gap-4 mb-10">
            <img
              src={productThumbnail1}
              alt=""
              className="w-14 h-14 rounded-lg"
            />
            <div className="flex flex-col gap-2 ">
              <h4 className="text-Dark-Grayish-Blue text-[0.9rem] md:text-base">
                Fall Limited Edition Sneakers
              </h4>
              <p className="text-Dark-Grayish-Blue text-[0.95rem] md:text-base">
                ${price.toFixed(2)} x {count}{" "}
                <span className="text-black font-bold">
                  ${calculatedPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <img
              src={iconDelete}
              alt=""
              onClick={clearCart}
              className="cursor-pointer"
            />
          </div>
          <a
            href="#"
            className="px-4 py-3 rounded-lg bg-Orange flex justify-center items-center font-bold"
          >
            Checkout
          </a>
        </div>
      ) : (
        <div className="flex justify-center items-center py-16">
          <p className="text-Dark-Grayish-Blue font-bold">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
