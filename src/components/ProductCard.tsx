import { useCartStore } from "../store/cartStore";

import type { Product } from "../types/types";

export default function ProductCard({ product }: { product: Product }) {
    const addToCart = useCartStore((s) => s.addToCart);
    const products = useCartStore((s) => s.products)

    return (
        <div
            className="
                bg-white shadow rounded-lg p-4 text-center 
                cursor-pointer 
                hover:shadow-gray-400 
                transition 
                transform 
                hover:scale-105 
                active:scale-95 
                duration-200
            "
            onClick={() => addToCart(product)}
        >
            <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
                loading="lazy"
            />
            <p className="mt-2 font-medium">{product.name}</p>
        </div>

    );
}
