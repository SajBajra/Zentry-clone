import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <main id="main" className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;


