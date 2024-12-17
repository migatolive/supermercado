<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Generar 20 productos de ejemplo
        for ($i = 0; $i < 20; $i++) {
            Product::create([
                'name' => $faker->words(3, true), // Nombre del producto aleatorio
                'description' => $faker->sentence(), // Descripción breve
                'price' => $faker->randomFloat(2, 10, 500), // Precio entre 10 y 500
                'stock' => $faker->numberBetween(10, 100), // Stock entre 10 y 100
            ]);
        }
    }
}
