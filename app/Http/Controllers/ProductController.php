<?php
namespace App\Http\Controllers;

use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    protected $productRepo;

    public function __construct(ProductRepository $productRepo)
    {
        $this->productRepo = $productRepo;
    }

    public function index()
    {
        $products = $this->productRepo->getAllProducts();
        $cart = session()->get('cart', []);
        return Inertia::render('Products', [
            'products' => $products,
            'cart' => array_values($cart),
        ]);
    }
}
