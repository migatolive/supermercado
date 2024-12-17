<?php
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta para la página principal de productos
Route::get('/', [ProductController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    // Rutas del carrito
    Route::get('/dashboard', [CartController::class, 'index'])->name('dashboard');
    Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
    Route::post('/cart/remove/{id}', [CartController::class, 'remove'])->name('cart.remove');

    // Rutas del perfil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Rutas de pedidos
    Route::post('/order', [OrderController::class, 'store'])->name('order.store');
    Route::get('/order/ticket/{order}', [OrderController::class, 'ticket'])->name('order.ticket');

    // Rutas de pagos
    Route::get('/payment/{order}', [PaymentController::class, 'show'])->name('payment.show');
    Route::post('/payment', [PaymentController::class, 'process'])->name('payment.process');
});

require __DIR__.'/auth.php';
