import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./assets/css/bootstrap-datetimepicker.min.css";
import "./assets/css/bootstrap.min.css";
// import "./assets/css/bootstrap.min.css.map";
import "./assets/css/feather.css";
// import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./assets/css/quaries.css";

import Listing_Grid from "./components/Listings/ListingGrid";
import ServiceDetails from "./components/Listings/serviceDetails/serviceDetails";
import ListingMap from "./components/Listings/listingMap";
import GridSidebar from "./components/Listings/LisitingGridSidebar";
import ListSidebar from "./components/Listings/LisitingListSidebar";
import GridMap from "./components/Listings/GridMap";
import About from "./components/pages/about";
import Pricing from "./components/pages/about/pricing";
import Faq from "./components/pages/faq";
import Gallary from "./components/pages/gallary";
import Category from "./components/pages/category";
import HowItWork from "./components/pages/howitWork";
import TermsCondition from "./components/pages/termsCondition";
import PrivacyPolicy from "./components/pages/privacyPolicy";
import Error404 from "./components/pages/404error";
import Error504 from "./components/pages/504error";
import Dashboard from "./components/userPages/Dashboard";
import Profile from "./components/userPages/profile";
import Bookmarks from "./components/userPages/bookmark";
import MyListe from "./components/userPages/mylisting";
import Message from "./components/userPages/mesage";
import Review from "./components/userPages/review";
import AddLisiting from "./components/userPages/AddLisiting";
import BlogList from "./components/blog/BlogList";
import BlogDetailsh from "./components/blog/BlogList/blogDatalish";
import BlogGrid from "./components/blog/BlogList/BlogGrid";
import BlogListSideBar from "./components/blog/BlogList/blogListSidebar";
import BlogGridSidebar from "./components/blog/BlogList/blogGridSidebar";
import Contract from "./components/contract";
import SignUp from "./components/signUp";
import Login from "./components/login";
import ForgotPassword from "./components/forgotPassword";
import config from "config";
import Dynamic_Routes from "./components/dyanmic_routes/index";
import HealthCare from "./components/admin/HealthCare/HealthCare";
import RealEstate from "./components/admin/RealEstate/RealEstate";
import Electronic from "./components/admin/Electronic/Electronic";
import GamesSport from "./components/admin/GamesSport/GamesSport";
import ComercialsAds from "./components/admin/ComercialsAds/ComercialsAds";
import AddBooks from "./components/admin/AddBooks/AddBooks";
import AddCars from "./components/admin/AddCars/AddCars";
export const App = () => {
  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<Home />} />

        {/* features  dynamic   routes */}
        <Route path="/routes/:id" element={<Dynamic_Routes />} />
      </Routes>
    </BrowserRouter>
  );
};
