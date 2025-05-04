<?php

use App\Http\Controllers\PokemonController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/pokemons', [PokemonController::class, 'index'])->name('pokemon.index');
Route::get('/pokemons/create', [PokemonController::class, 'create'])->name('pokemon.create');
Route::get('/pokemons/{pokemon}', [PokemonController::class, 'show'])->name('pokemon.show');
Route::post('/pokemons', [PokemonController::class, 'store'])->name('pokemon.store');
Route::delete('/pokemons/{pokemon}', [PokemonController::class, 'destroy'])->name('pokemon.destroy');