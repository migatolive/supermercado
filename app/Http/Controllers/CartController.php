<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $cart = session()->get('cart', []);
        return Inertia::render('Dashboard', ['cart' => array_values($cart)]);
    }

    public function add(Request $request)
    {
        $cart = session()->get('cart', []);
        $product = $request->all();
        $product['price'] = (float) $product['price'];
        $cart[$product['id']] = $product;
        session()->put('cart', $cart);
        return redirect()->back();
    }

    public function remove($id)
    {
        $cart = session()->get('cart', []);
        unset($cart[$id]);
        session()->put('cart', $cart);
        return redirect()->back();
    }
}
