<?php

use App\Livewire\CreatePokemon;
use App\Livewire\PokemonList;
use Illuminate\Support\Facades\Route;

Route::get('/', PokemonList::class);
Route::get('/create', CreatePokemon::class);
