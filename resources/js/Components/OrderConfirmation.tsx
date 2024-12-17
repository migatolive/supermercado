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

interface OrderConfirmationPopupProps {
    order: Order;
    onClose: () => void;
    onPayment: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationPopupProps> = ({ order, onClose, onPayment }) => {
    const handleAction = (action: 'accept' | 'cancel') => {
        router.post(route('order.confirm'), {
            order_id: order.id,
            action,
        }, {
            onSuccess: () => {
                if (action === 'accept') {
                    onPayment();
                } else {
                    onClose();
                }
            }
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold">Confirmación de Pedido</h2>
                <p className="text-gray-500 mb-2">Pedido #{order.id}</p>
                <p className="text-gray-500 mb-2">Total: ${order.total.toFixed(2)}</p>
                <ul>
                    {order.items.map((item) => (
                        <li key={item.id}>
                            {item.product.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <button onClick={() => handleAction('accept')} className="mr-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                        Aceptar Pedido
                    </button>
                    <button onClick={() => handleAction('cancel')} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                        Cancelar Pedido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
