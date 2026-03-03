import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Footer from "../components/Footer";
import useScrollReveal from "../hooks/useScrollReveal";


const MainLayout = ({ children }) => {
   useScrollReveal(); // ⭐ motion engine active
  useSmoothScroll(); // 👈 ENABLE SMOOTH SCROLL
  

  return (
    <>
      <Cursor />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;