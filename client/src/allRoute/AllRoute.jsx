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
import Career from "../pages/Career/Career";
import Policy from "../pages/Policy";
import PageNotFound from "../pages/404/PageNotFound";
import Blogs from "../pages/Blogs/Blogs";
import MicrosoftSinglePage from "../SinglePage/microsoft/MicrosoftSinglePage";
import CiscoSinglePage from "../SinglePage/Cisco/CiscoSinglePage";
import AWSsinglePage from "../SinglePage/AWS/AWSsinglePage";
import IIBAsinglePage from "../SinglePage/IIBA/IIBAsinglePage";
import ScrumStudySinglePage from "../SinglePage/ScrumStudy/ScrumStudySinglePage";
import PMIsinglePage from "../SinglePage/PMI/PMIsinglePage";
import CompTIAsinglePage from "../SinglePage/CompTIA/CompTIAsinglePage";
import OracleSinglePage from "../SinglePage/Oracle/OracleSinglePage";
import ISACAsinglePage from "../SinglePage/ISACA/ISACAsinglePage";
import EcCouncilSinglePage from "../SinglePage/EcCouncil/EcCouncilSinglePage";
import AxelosSinglePage from "../SinglePage/Axelos/AxelosSinglePage";
import TheOpenGroupSinglePage from "../SinglePage/TheOpenGroup/TheOpenGroupSinglePage";
import OffSecTrainingSinglePage from "../SinglePage/OffSecTraining/OffSecTrainingSinglePage";
import APMGsinglePage from "../SinglePage/APMG/APMGsinglePage";
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
      <Route path="/Career-details" element={<Career />} />
      <Route path="/Our-Policies" element={<Policy />} />
      <Route path="/Our-Blogs" element={<Blogs />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/Microsoft-single-page" element={<MicrosoftSinglePage />} />
      <Route path="/Cisco-single-page" element={<CiscoSinglePage />} />
      <Route path="/AWS-single-page" element={<AWSsinglePage />} />
      <Route path="/IIBA-single-page" element={<IIBAsinglePage />} />
      <Route path="/PMI-single-page" element={<PMIsinglePage />} />
      <Route path="/CompTIA-single-page" element={<CompTIAsinglePage />} />
      <Route path="/Oracle-single-page" element={<OracleSinglePage />} />
      <Route path="/ISACA-single-page" element={<ISACAsinglePage />} />
      <Route path="/EcCouncil-single-page" element={<EcCouncilSinglePage />} />
      <Route path="/Axelos-single-page" element={<AxelosSinglePage />} />
      <Route
        path="/TheOpenGroup-single-page"
        element={<TheOpenGroupSinglePage />}
      />
      <Route
        path="/OffSec-Training-single-page"
        element={<OffSecTrainingSinglePage />}
      />
      <Route path="/APMG-single-page" element={<APMGsinglePage />} />
      <Route
        path="/ScrumStudy-single-page"
        element={<ScrumStudySinglePage />}
      />
    </Routes>
  );
};

export default AllRoute;
