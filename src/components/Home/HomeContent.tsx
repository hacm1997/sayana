import useShop from "@/hooks/useShop";
import React from "react";
import CategoryFilter from "../Categories/CategoryFilter";
import ProductList from "../Products/ProductList";
import Cart from "../Cart/Cart";
import Image from "next/image";
import { categories } from "@/const/categories";

export const HomeContent = () => {
    const {
        products,
        cartItems,
        selectedCategory,
        isCartOpen,
        setSelectedCategory,
        addToCart,
        addToCartWsp,
        removeFromCart,
        setIsCartOpen,
        proceedToCheckout,
    } = useShop();
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto py-8 px-4">
                <div className="flex justify-center py-4">
                    <Image
                        src="/sanaya-logo.png"
                        alt="SANAYA"
                        width={300}
                        height={300}
                    />
                </div>
                {/* <h1 className="text-3xl text-neutral-950 font-bold text-center mb-8">
                    Nuestra Colección
                </h1> */}

                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <ProductList products={products} onAddToCart={addToCart} onAddToCartWsp={addToCartWsp} />
            </main>

            <Cart
                items={cartItems}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onRemoveItem={removeFromCart}
                onCheckout={proceedToCheckout}
            />

            <button
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                        {cartItems.length}
                    </span>
                )}
            </button>
        </div>
    );
};
