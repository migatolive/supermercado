import React from 'react';
import { PageProps } from '@/types';
import OrderTicket from '@/Components/OrderTicket';

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

interface OrderTicketPageProps extends PageProps {
    order: Order;
}

const OrderTicketPage: React.FC<OrderTicketPageProps> = ({ order }) => {
    return (
        <div className="container mx-auto px-4 py-6">
            <OrderTicket order={order} />
        </div>
    );
};

export default OrderTicketPage;
