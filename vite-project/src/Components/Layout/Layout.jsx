import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function LayoutManager() {
  return (
    <div className="Font">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
