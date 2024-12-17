import React from "react";
import { router } from '@inertiajs/react';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const addToCart = (product: Product) => {
        router.post(route('cart.add', product));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-lg shadow-md p-4 hover:shadow-lg"
                >
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-500 mb-2">{product.description}</p>
                    <p className="text-blue-500 font-bold">
                        ${!isNaN(Number(product.price)) ? Number(product.price).toFixed(2) : 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                        Stock: {product.stock}
                    </p>
                    <button onClick={() => addToCart(product)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
