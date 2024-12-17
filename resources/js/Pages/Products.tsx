import React from "react";
import { PageProps } from '@/types';
import ProductList from "@/Components/ProductList";
import Header from "@/Components/Header";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};

interface ProductsProps extends PageProps {
    products: Product[];
    cart: Product[];
}

const Products: React.FC<ProductsProps> = ({ products, cart }) => {
    const cartItemCount = cart.length;

    return (
        <div>
            <Header cartItemCount={cartItemCount} />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-6">Productos</h1>
                <ProductList products={products} />
            </div>
        </div>
    );
};

export default Products;
