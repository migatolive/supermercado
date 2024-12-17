import React from 'react';

interface Order {
    id: number;
    total: number;
    items: {
        id: number;
        product: {
            name: string;
        };
        price: number;
        quantity: number;
    }[];
}

interface OrderTicketProps {
    order: Order;
}

const OrderTicket: React.FC<OrderTicketProps> = ({ order }) => {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Ticket de Compra</h1>
            <div className="border rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold">Pedido #{order.id}</h2>
                <p className="text-gray-500 mb-2">
                    Total: ${!isNaN(Number(order.total)) ? Number(order.total).toFixed(2) : 'N/A'}
                </p>
                <ul>
                    {order.items.map((item) => (
                        <li key={item.id}>
                            {item.product.name} - Cantidad: {item.quantity} - ${!isNaN(Number(item.price)) ? Number(item.price).toFixed(2) : 'N/A'}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderTicket;
