<?php

namespace App\Livewire;

use App\Models\Pokemon;
use Livewire\Attributes\Title;
use Livewire\Component;

class PokemonList extends Component
{
    public $term = '';
    // public $count = 0;

    // public function increment($number) {
    //     $this->count += $number;
    // }

    public function delete(Pokemon $pokemon) {
        $pokemon->delete();
    }

    #[Title('Gen 1 Pokedex')]
    public function render()
    {
        if ($this->term) {
            return view('livewire.pokemon-list', [
                'pokemons' => Pokemon::where('name', 'LIKE', "%{$this->term}%")->get(),
            ]);
        }

        return view('livewire.pokemon-list', [
            'pokemons' => Pokemon::all(),
        ]);
    }
}
