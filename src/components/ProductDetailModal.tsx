import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, X } from 'lucide-react';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    material: string;
    color: string;
    price: number;
    image: string;
  };
}

const ProductDetailModal = ({ isOpen, onClose, product }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState('Noir');

  const colors = ['Noir'];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain max-h-[600px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 space-y-6">
            {/* Product Name */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-2">
                REF: {product.id.toString().padStart(6, '0')}
              </p>
            </div>

            {/* Price */}
            <div className="text-3xl font-extrabold text-gray-800">{product.price} €</div>

            {/* Material */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Matière</h3>
              <p className="text-gray-600">{product.material}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Couleur</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md text-sm transition-all 
                      ${selectedColor === color 
                        ? 'border-gray-800 bg-gray-100 text-gray-800' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-[#471818] hover:bg-gray-900 text-white py-4 rounded-md flex items-center justify-center gap-2 transition-all focus:ring-2 focus:ring-gray-300 focus:outline-none"
              onClick={() => console.log('Added to cart:', { product, quantity, selectedColor })}
            >
              <ShoppingCart className="h-5 w-5" />
              Ajouter au panier
            </Button>

            {/* Footer */}
            <div className="text-sm text-gray-600 space-y-2 mt-6">
              <p>• Livraison gratuite en Tunisie</p>
              <p>• Retours gratuits sous 14 jours</p>
              <p>• Service client disponible 24/7</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
