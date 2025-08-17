// App.js
import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import HomePage from "./components/home/HomePage";
import DealsSlider from "./components/deals/DealsSlider"; 

import DealDetail from "./components/deals/DealDetail";
import ServiceListing from "./components/service/ServiceListing";
import ServiceDetail from "./components/service/ServiceDetail";
import Layout from "./components/utils/Layout";
function App() {
  return (
   <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="deals" element={<DealsSlider />} />
          <Route path="deals/:id" element={<DealDetail />} />
          <Route path="service" element={<ServiceListing />} />
          <Route path="service/:id" element={<ServiceDetail />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
