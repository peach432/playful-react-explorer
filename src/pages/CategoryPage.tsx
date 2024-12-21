import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import BeltsSection from "../components/productsPages/BeltsSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/productsPages/ProductsSection";
import BrandNavbarSection from "@/components/productsPages/BrandNavbarSection";
import MainNavbarProduct from "@/components/productsPages/MainNavbarProduct";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  console.log("Current category:", category);

  return (
    <div className="min-h-screen flex flex-col relative">
      <TopNavbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
            aria-label="Go back to home"
          >
            <ArrowLeft size={24} />
            <span>Back to Home</span>
          </button>
        </div>
        <BrandNavbarSection />
        <div className="hidden lg:block">
          <MainNavbarProduct />
        </div>
        <BeltsSection />
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;