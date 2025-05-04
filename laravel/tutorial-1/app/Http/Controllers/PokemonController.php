<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use App\Models\Types;
use Illuminate\Http\Request;

class PokemonController extends Controller
{
    public function index() {
        $pokemons = Pokemon::with(['type1', 'type2'])->orderBy('created_at', 'desc')->paginate(10);

        return view('pokemons.index', [
            'pokemons' => $pokemons,
        ]);
    }

    public function show(Pokemon $pokemon) {
        $pokemon->load(['type1', 'type2']);

        return view('pokemons.show', ["pokemon" => $pokemon]);
    }

    public function create() {
        $types = Types::all();

        return view('pokemons.create', [
            'types' => $types,
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:30',
            'gender' => 'required|string',
            'description' => 'required|string',
            'type1_id' => 'required|exists:types,id',
            'type2_id' => 'nullable|exists:types,id',
        ]);

        Pokemon::create($validated);

        return redirect()->route('pokemon.index')->with('success', 'Pokemon added successfully');
    }

    public function destroy(Pokemon $pokemon) {
        $pokemon->delete();

        return redirect()->route('pokemon.index')->with('success', 'Pokemon has been released');
    }
}
