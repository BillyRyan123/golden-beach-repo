import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
