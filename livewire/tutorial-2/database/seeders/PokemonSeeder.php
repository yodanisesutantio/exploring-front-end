<?php

namespace Database\Seeders;

use App\Models\Pokemon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PokemonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pokemons = [
            ['bulbasaur', 'grass', 'poison'],
            ['ivysaur', 'grass', 'poison'],
            ['venusaur', 'grass', 'poison'],
            ['charmander', 'fire', null],
            ['charmeleon', 'fire', null],
            ['charizard', 'fire', 'flying'],
            ['squirtle', 'water', null],
            ['wartortle', 'water', null],
            ['blastoise', 'water', null],
            ['caterpie', 'bug', null],
            ['metapod', 'bug', null],
            ['butterfree', 'bug', 'flying'],
            ['weedle', 'bug', 'poison'],
            ['kakuna', 'bug', 'poison'],
            ['beedrill', 'bug', 'poison'],
            ['pidgey', 'normal', 'flying'],
            ['pidgeotto', 'normal', 'flying'],
            ['pidgeot', 'normal', 'flying'],
            ['rattata', 'normal', null],
            ['raticate', 'normal', null],
            ['spearow', 'normal', 'flying'],
            ['fearow', 'normal', 'flying'],
            ['ekans', 'poison', null],
            ['arbok', 'poison', null],
            ['pikachu', 'electric', null],
            ['raichu', 'electric', null],
            ['sandshrew', 'ground', null],
            ['sandslash', 'ground', null],
            ['nidoran♀', 'poison', null],
            ['nidorina', 'poison', null],
            ['nidoqueen', 'poison', 'ground'],
            ['nidoran♂', 'poison', null],
            ['nidorino', 'poison', null],
            ['nidoking', 'poison', 'ground'],
            ['clefairy', 'normal', null],
            ['clefable', 'normal', null],
            ['vulpix', 'fire', null],
            ['ninetales', 'fire', null],
            ['jigglypuff', 'normal', null],
            ['wigglytuff', 'normal', null],
            ['zubat', 'poison', 'flying'],
            ['golbat', 'poison', 'flying'],
            ['oddish', 'grass', 'poison'],
            ['gloom', 'grass', 'poison'],
            ['vileplume', 'grass', 'poison'],
            ['paras', 'bug', 'grass'],
            ['parasect', 'bug', 'grass'],
            ['venonat', 'bug', 'poison'],
            ['venomoth', 'bug', 'poison'],
        ];

        foreach ($pokemons as [$name, $type1, $type2]) {
            Pokemon::create([
                'name' => $name,
                'gender' => ['male', 'female', 'genderless'][rand(0, 2)],
                'description' => 'This is a well-known Pokémon from the original 151 lineup.',
            ]);
        }
    }
}
