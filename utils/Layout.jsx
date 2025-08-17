import React, { useEffect } from "react";
import Header from "../home/Header";
import { Outlet, useLocation } from "react-router-dom";
import GetEmailSection from "../home/GetEmailSection";
import Footer from "../home/Footer";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-sans w-full bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <GetEmailSection />
      <Footer/>
    </div>
  );
}

export default Layout;