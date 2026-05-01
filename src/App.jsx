import React, { Suspense } from "react";
// import Fallback from "./components/Fallback";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./app/routes";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <ScrollToTop />
        <Navbar />

        <Routes location={location}>
          {/* <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} /> */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

        <Footer />
      </Suspense>
    </>
  );
};

export default App;
