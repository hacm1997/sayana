import { Product } from "@/app/types/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
    products: Product[];
    onAddToCart: (product: Product, size: string) => void;
    onAddToCartWsp: (product: Product, size: string) => void;
};

const ProductList = ({ products, onAddToCart, onAddToCartWsp }: ProductListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onAddToCartWsp={onAddToCartWsp}
                />
            ))}
        </div>
    );
};

export default ProductList;