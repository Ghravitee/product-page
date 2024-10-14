import { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import iconHamburger from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";
import Cart from "../component/Cart";

const NavLink = [
  { title: "Collections" },
  { title: "Men" },
  { title: "Women" },
  { title: "About" },
  { title: "Contact" },
];

const Navbar = () => {
  const { count } = useContext(AuthContext);

  const [showCart, setShowCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <header className="py-4 md:py-10 container xl:border-b border-b-Grayish-Blue relative">
      <nav className="hidden md:flex xl:justify-between md:justify-evenly items-center ">
        <div className="flex gap-12 items-center">
          <div>
            <img
              src={logo}
              alt="This is the logo of the website"
              className="cursor-pointer"
            />
          </div>
          <div className="flex lg:gap-8 md:gap-4 items-center">
            {NavLink.map((item) => (
              <div key={item.title} className="relative group">
                <ul>
                  <li className="text-Dark-Grayish-Blue">
                    <a href="#">{item.title}</a>
                  </li>
                </ul>
                <div className="h-[3px] w-full bg-Orange xl:top-[70px] md:top-[40px] absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="relative">
            <svg
              className="cursor-pointer fill-Dark-Grayish-Blue hover:fill-black"
              onClick={toggleCart}
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>

            <div className="absolute -top-[6px] -right-1 w-4 h-3 rounded-xl bg-Orange flex justify-center items-center">
              <p className="text-white text-[10px] font-bold">{count}</p>
            </div>
          </div>
          <img
            src={avatar}
            alt="This is the avatar of the user"
            className="rounded-full h-10 w-10 cursor-pointer hover:border-[2px] border-Orange"
          />
        </div>
        {showCart && <Cart />}
      </nav>

      <nav className="md:hidden flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div onClick={openMenu}>
            <img
              src={iconHamburger}
              alt="This is the icon used to open the mobile navigation"
              className="w-4 h-4"
            />
          </div>
          <div>
            <img
              src={logo}
              alt="This is the logo of the website"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div className="relative p-4" onClick={toggleCart}>
            <svg
              className="cursor-pointer fill-Dark-Grayish-Blue hover:fill-black"
              width="26"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>

            <div className="absolute top-[10px] right-2 w-4 h-3 rounded-xl bg-Orange flex justify-center items-center">
              <p className="text-white text-[10px] font-bold">{count}</p>
            </div>
          </div>
          <img
            src={avatar}
            alt="This is the avatar of the user"
            className="rounded-full h-10 w-10 cursor-pointer hover:border-[2px] border-Orange"
          />
        </div>

        {isOpen && (
          <div
            className="fixed h-screen w-screen lg:hidden backdrop-blur-sm bg-black/50 top-0 left-0 z-50"
            onClick={openMenu}
          >
            <div className="bg-white text-black absolute left-0 top-0 h-screen w-64 pt-6 px-6 gap-8 flex flex-col">
              <img
                src={iconClose}
                onClick={openMenu}
                alt=""
                className="w-5 h-5 "
              />
              <ul className="flex flex-col gap-3 mt-10">
                {NavLink.map((items, index) => (
                  <li className="text-Very-Dark-Blue font-bold" key={index}>
                    {items.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {showCart && <Cart />}
      </nav>
    </header>
  );
};

export default Navbar;
