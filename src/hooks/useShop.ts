// hooks/useShop.ts
import { products } from "@/app/const/list-products";
import { CartItem, Product } from "@/app/types/product";
import { useState } from "react";

const useShop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCartWsp = (product: Product, size: string) => {
    setCartItems((prevItems) => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return prevItems; // No agregar duplicados
      }

      return [...prevItems, { product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const addToCart = (product: Product, size: string) => {
    setCartItems((prevItems) => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        return prevItems; // No agregar duplicados
      }

      return [...prevItems, { product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  const proceedToCheckout = () => {
    const message = cartItems
      .map(
        (item) =>
          `${item.product.name} - Talla: ${item.size} - $${item.product.price}`
      )
      .join("%0A");

    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const whatsappUrl = `https://wa.me/573247469108?text=Hola,%20quiero%20comprar:%0A${message}%0ATotal:%20$${total}`;

    window.open(whatsappUrl, "_blank");
  };

  return {
    products: filteredProducts,
    selectedCategory,
    cartItems,
    isCartOpen,
    setSelectedCategory,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    proceedToCheckout,
    addToCartWsp,
  };
};

export default useShop;
