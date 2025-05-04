<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    protected $fillable = [
        'name',
        'gender',
        'type1_id',
        'type2_id',
        'description',
    ];

    /** @use HasFactory<\Database\Factories\PokemonFactory> */
    use HasFactory;

    public function type1()
    {
        return $this->belongsTo(Types::class, 'type1_id');
    }

    public function type2()
    {
        return $this->belongsTo(Types::class, 'type2_id');
    }
}
