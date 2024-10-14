import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [count, setCount] = useState(2);
  const [price] = useState(125);

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const addToCart = () => {
    setCount((prev) => prev + 1);
  };
  const removeFromCart = () => {
    setCount((prev) => prev - 1);
  };

  const clearCart = () => {
    setCount((prev) => prev - prev);
  };
  return (
    <AuthContext.Provider
      value={{
        count,
        addToCart,
        removeFromCart,
        price,
        clearCart,
        openModal,
        toggleModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
