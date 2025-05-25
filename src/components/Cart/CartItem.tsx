import { CartItem } from "@/app/types/product";
import { formatCOP } from "@/utils/format-number";

type CartItemProps = {
    item: CartItem;
    onRemove: () => void;
};

const CartItemComponent = ({ item, onRemove }: CartItemProps) => {
    return (
        <div className="flex justify-between items-start border-b pb-4">
            <div className="flex space-x-4">
                <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                />
                <div>
                    <h4 className="font-medium text-black">{item.product.name}</h4>
                    <p className="text-sm text-gray-600">Talla: {item.size}</p>
                    <p className="text-sm font-bold text-black">${formatCOP(item.product.price)}</p>
                </div>
            </div>
            <button
                onClick={onRemove}
                className="text-red-500 hover:text-red-700 cursor-pointer"
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
};

export default CartItemComponent;