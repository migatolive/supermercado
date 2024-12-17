<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class ProductRepository
{
    public function getAllProducts()
    {
        return DB::select("SELECT * FROM products");
    }

    public function getProductById($id)
    {
        return DB::select("SELECT * FROM products WHERE id = ?", [$id]);
    }

    public function createProduct($product)
    {
        DB::statement(
            "INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)",
            [$product['name'], $product['description'], $product['price'], $product['stock']]
        );
    }

    public function updateProductById($id, $product)
    {
        $affected = DB::statement(
            "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?",
            [$product['name'], $product['description'], $product['price'], $product['stock'], $id]
        );

        return $affected > 0;
    }

    public function deleteProductById($id)
    {
        $affected = DB::statement("DELETE FROM products WHERE id = ?", [$id]);

        return $affected > 0;
    }
}
