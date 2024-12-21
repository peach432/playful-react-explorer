import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import BeltsSection from "../components/productsPages/BeltsSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/productsPages/ProductsSection";
import BrandNavbarSection from "@/components/productsPages/BrandNavbarSection";
import MainNavbarProduct from "@/components/productsPages/MainNavbarProduct";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Fonction utilitaire pour capitaliser les mots et gérer les tirets
  const capitalizeWords = (str) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Extraire la hiérarchie du chemin complet
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '' && segment !== 'category');

  useEffect(() => {
    console.log("Chemin de la catégorie actuelle :", pathSegments);
    toast({
      title: "Catégorie actuelle",
      description: `Vous visualisez : ${pathSegments.map(capitalizeWords).join(' > ')}`,
    });
  }, [location.pathname]);

  // Exemple de rendu conditionnel basé sur le chemin
  const isOutletSection = pathSegments[0] === 'outlet';
  const isSurMesureSection = pathSegments[0] === 'sur-mesure';
  const isAccessoriesSection = pathSegments[0] === 'accessoires';

  const mainCategory = pathSegments[0];
  const subCategory = pathSegments[1];
  const productType = pathSegments[2];

  // Fonction pour générer une bannière de catégorie en fonction de la section
  const CategoryBanner = ({ type, title, description, bgColor, textColor }) => (
    <div className={`${bgColor} p-6 rounded-lg shadow-sm mb-6 transition-all duration-300 hover:shadow-md`}>
      <h2 className={`${textColor} font-bold text-xl mb-2`}>{title}</h2>
      <p className={`${textColor} opacity-90`}>{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col relative">
      <TopNavbar />
      <div className="flex-grow">
        <BrandNavbarSection />
        <div className="hidden lg:block">
          <MainNavbarProduct />
        </div>
        <BeltsSection />

        <div className="bg-[#fff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all duration-300 mb-6 px-4 py-2 rounded-lg hover:bg-white/50"
              aria-label="Retour à l'accueil"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Retour à l'accueil</span>
            </button>

            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                <li className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    Accueil
                  </a>
                </li>
                {pathSegments.map((segment, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span
                      className={`
                        ${index === pathSegments.length - 1
                          ? "text-primary font-medium"
                          : "text-gray-600 hover:text-black cursor-pointer"
                        }
                        transition-colors duration-300
                      `}
                      onClick={() => {
                        if (index !== pathSegments.length - 1) {
                          navigate(`/${pathSegments.slice(0, index + 1).join('/')}`);
                        }
                      }}
                    >
                      {capitalizeWords(segment)}
                    </span>
                  </li>
                ))}
              </ol>
            </nav>

            {isOutletSection && (
              <CategoryBanner
                type="outlet"
                title="Offres spéciales Outlet !"
                description="Découvrez nos offres exclusives en outlet avec jusqu'à 50% de réduction !"
                bgColor="bg-red-50"
                textColor="text-red-600"
              />
            )}

            {isSurMesureSection && (
              <CategoryBanner
                type="sur-mesure"
                title="Collection Sur Mesure"
                description="Découvrez nos pièces personnalisables faites juste pour vous."
                bgColor="bg-purple-50"
                textColor="text-purple-600"
              />
            )}

            {isAccessoriesSection && (
              <CategoryBanner
                type="accessories"
                title="Collection d'Accessoires"
                description="Complétez votre look avec nos accessoires haut de gamme."
                bgColor="bg-blue-50"
                textColor="text-blue-600"
              />
            )}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 bg-[#fff]">
            <ProductsSection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
