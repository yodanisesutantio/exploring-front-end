<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Types extends Model
{
    protected $fillable = [
        'name',
    ];

    /** @use HasFactory<\Database\Factories\TypesFactory> */
    use HasFactory;

    public function types() {
        return $this->belongsToMany(Types::class);
    }
}
