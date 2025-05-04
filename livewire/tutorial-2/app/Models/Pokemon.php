<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    protected $fillable = [
        'name',
        'gender',
        'description'
    ];

    /** @use HasFactory<\Database\Factories\PokemonFactory> */
    use HasFactory;
}
