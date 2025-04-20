import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfiniteScrollBar from "./InfiniteScrollBar";

const PublicLayout = () => {
  return (
    <>
      <InfiniteScrollBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
