<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderItem;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $cart = session()->get('cart', []);
        $total = array_sum(array_column($cart, 'price'));

        $order = Order::create([
            'user_id' => auth()->id(),
            'total' => $total
        ]);

        foreach ($cart as $product) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $product['id'],
                'quantity' => 1,
                'price' => $product['price'],
            ]);

            $productModel = Product::find($product['id']);
            $productModel->stock -= 1;
            $productModel->save();
        }

        session()->forget('cart');
        return redirect()->route('order.ticket', ['order' => $order->id]);
    }

    public function ticket($orderId)
    {
        $order = Order::with('items.product')->find($orderId);
        return Inertia::render('OrderTicketPage', ['order' => $order]);
    }
}
