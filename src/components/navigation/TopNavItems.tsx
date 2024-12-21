import React from 'react';
import { MapPin, Phone, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartProvider';

export const TopNavItems = ({
  onStoreClick,
  onContactClick,
}: {
  onStoreClick: () => void;
  onContactClick: () => void;
}) => {
  const { cartCount } = useCart();

  return (
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <button
          onClick={onStoreClick}
          className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300"
        >
          <MapPin size={18} />
          TROUVER UNE BOUTIQUE
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onContactClick}
          className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300 mb-2 sm:mb-0 hidden sm:flex"
        >
          <Phone size={18} />
          CONTACTEZ-NOUS
        </button>
        <Link 
          to="/cart" 
          className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300 relative"
        >
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};