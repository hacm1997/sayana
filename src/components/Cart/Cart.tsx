import { CartItem } from "@/app/types/product";
import CartItemComponent from "./CartItem";
import { formatCOP } from "@/utils/format-number";

type CartProps = {
    items: CartItem[];
    isOpen: boolean;
    onClose: () => void;
    onRemoveItem: (productId: string, size: string) => void;
    onCheckout: () => void;
};

const Cart = ({ items, isOpen, onClose, onRemoveItem, onCheckout }: CartProps) => {
    if (!isOpen) return null;

    const total = items.reduce(
        (sum, item) => sum + (item.product.price * item.quantity), 0
    );

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* <div className="fixed inset-0 transition-opacity" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div> */}

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Tu Carrito</h3>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer" title="Cerrar">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4">
                            {items.length === 0 ? (
                                <p className="text-gray-500">Tu carrito está vacío</p>
                            ) : (
                                <div className="space-y-4">
                                    {items.map(item => (
                                        <CartItemComponent
                                            key={`${item.product.id}-${item.size}`}
                                            item={item}
                                            onRemove={() => onRemoveItem(item.product.id, item.size)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {items.length > 0 && (
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <div className="w-full flex justify-between items-center">
                                <span className="font-bold text-black">Total: ${formatCOP(total)}</span>
                                <button
                                    onClick={onCheckout}
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                                >
                                    Comprar por WhatsApp
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;