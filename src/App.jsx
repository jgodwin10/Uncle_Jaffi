import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";

const App = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div>
      <Outlet />
      {pathname.pathname == "/" ? "" : <Footer />}
    </div>
  );
};

export default App;
