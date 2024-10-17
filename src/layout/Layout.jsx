import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import AosInit from "../aos/AosInit";

function Layout() {
  return (
    <AosInit>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AosInit>
  );
}

export default Layout;
