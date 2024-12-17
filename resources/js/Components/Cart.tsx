import React from 'react';
import { router } from '@inertiajs/react';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};

interface CartProps {
    cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
    const removeFromCart = (id: number) => {
        router.post(route('cart.remove', id));
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Carrito de Compras</h1>
            <div className="grid grid-cols-1 gap-6">
                {cart.map((product) => (
                    <div key={product.id} className="border rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-500 mb-2">{product.description}</p>
                        <p className="text-blue-500 font-bold">
                            ${!isNaN(Number(product.price)) ? Number(product.price).toFixed(2) : 'N/A'}
                        </p>
                        <button onClick={() => removeFromCart(product.id)} className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
                            Eliminar del carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
