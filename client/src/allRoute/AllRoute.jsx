import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AboutUS from "../pages/AboutUS";
import ContactUs from "../pages/ContactUs";
import Signup from "../pages/Signup";
import FAQ from "../pages/FAQ";
import Services from "../pages/Services";
import TermsAndCondition from "../pages/TermsAndCondition";
import Courses from "../pages/Courses";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/frequently-asked-questions" element={<FAQ />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/Terms-and-Conditions" element={<TermsAndCondition />} />
      <Route path="/Courses-details" element={<Courses />} />
    </Routes>
  );
};

export default AllRoute;
