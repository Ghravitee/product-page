import { useContext } from "react";
import Navbar from "./sections/Navbar";
import Product from "./sections/Product";
import { AuthContext } from "./utils/AuthContext";
import LightBox from "./component/LightBox";

const App = () => {
  const { openModal } = useContext(AuthContext);
  return (
    <main className="relative">
      {openModal && <LightBox />}
      <Navbar />
      <Product />
    </main>
  );
};

export default App;
