<?php

namespace Database\Seeders;

use App\Models\Types;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            'normal', 'fire', 'water', 'grass', 'electric',
            'ice', 'fighting', 'poison', 'ground', 'flying',
            'psychic', 'bug', 'rock', 'ghost', 'dragon'
        ];

        foreach ($types as $type) {
            Types::create(['name' => $type]);
        }
    }
}
