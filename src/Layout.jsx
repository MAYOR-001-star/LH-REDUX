import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  const location = useLocation();

  const noNavbarRoutes = ["/login", "/register", "/reset-password"];

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
