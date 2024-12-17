import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import Cart from '@/Components/Cart';
import Header from '@/Components/Header';

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

const Dashboard: React.FC<CartProps> = () => {
    const { cart = [] } = usePage().props as unknown as CartProps;

    const handleConfirmOrder = async () => {
        await router.post(route('order.store'));
    };

    const cartItemCount = cart.length;

    return (
        <AuthenticatedLayout
            header={
                <Header cartItemCount={cartItemCount} />
            }
        >
            <Head title="Carrito" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Cart cart={cart} />
                            {cart.length > 0 && (
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={handleConfirmOrder}
                                        className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                                    >
                                        Confirmar Pedido
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
