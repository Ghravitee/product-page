import Gallery from "./Gallery";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

const LightBox = () => {
  const { toggleModal } = useContext(AuthContext);
  return (
    <div className="hidden min-h-screen bg-black bg-opacity-80 z-[100] absolute inset-0 mx-auto lg:flex justify-center items-center">
      <Gallery isLightbox={true} toggleModal={toggleModal} />
    </div>
  );
};

export default LightBox;
