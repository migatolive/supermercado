<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function show($orderId)
    {
        $order = Order::with('items.product')->find($orderId);
        return Inertia::render('Payment', ['order' => $order]);
    }

    public function process(Request $request)
    {
        // Simular el proceso de pago
        return redirect()->route('dashboard')->with('success', 'Pago realizado con éxito');
    }
}
