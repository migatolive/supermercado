import React from 'react';
import { router } from '@inertiajs/react';

interface Order {
    id: number;
    total: number;
    items: {
        id: number;
        product: {
            name: string;
        };
        price: number;
    }[];
}

interface PaymentPopupProps {
    order: Order;
    onClose: () => void;
}

const Payment: React.FC<PaymentPopupProps> = ({ order, onClose }) => {
    const handlePayment = () => {
        router.post(route('payment.process'), { order_id: order.id }, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Pago</h2>
                <p className="text-gray-500 mb-2">Pedido #{order.id}</p>
                <p className="text-gray-500 mb-2">Total: ${order.total.toFixed(2)}</p>
                <button onClick={handlePayment} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Realizar Pago
                </button>
            </div>
        </div>
    );
};

export default Payment;
