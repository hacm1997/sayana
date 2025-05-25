import { Product } from '@/app/types/product';
import { formatCOP } from '@/utils/format-number';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ProductCardProps = {
    product: Product;
    onAddToCart: (product: Product, size: string) => void;
    onAddToCartWsp: (product: Product, size: string) => void;
};

const ProductCard = ({ product, onAddToCart, onAddToCartWsp }: ProductCardProps) => {
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Cerrar con ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    // Cerrar al hacer clic fuera
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {/* CARD */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border-[1px] border-[#F2AFB5]">
                <div className='pt-4'>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={500}
                        onClick={() => setIsModalOpen(true)}
                        className="w-full h-56 object-contain object-center cursor-pointer"
                    />
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-neutral-950 text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-800 font-bold mb-4">${formatCOP(product.price)}</p>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Seleccione una talla:</label>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-3 py-1 text-xs rounded cursor-pointer ${selectedSize === size
                                        ? 'bg-[#dfa1a6] text-white'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <button
                            onClick={() => {
                                if (selectedSize) {
                                    onAddToCart(product, selectedSize);
                                    setSelectedSize('');
                                }
                            }}
                            disabled={!selectedSize}
                            className={`py-2 px-2 w-[50%] rounded-md ${selectedSize
                                ? 'bg-[#F2AFB5] text-white hover:bg-[#dfa1a6] cursor-pointer'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Agregar al carrito
                        </button>

                        <button
                            onClick={() => {
                                if (selectedSize) {
                                    onAddToCartWsp(product, selectedSize);
                                    setSelectedSize('');
                                }
                            }}
                            disabled={!selectedSize}
                            className={`py-2 px-2 w-[40%] rounded-md ${selectedSize
                                ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Whatsapp
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleClickOutside}
                >
                    <div
                        ref={modalRef}
                        className="relative max-w-3xl max-h-[90vh] overflow-auto"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 bg-white text-black rounded-full p-1 shadow hover:bg-gray-100"
                        >
                            ✕
                        </button>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={800}
                            className="object-contain w-full h-auto max-h-[90vh] rounded"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCard;
