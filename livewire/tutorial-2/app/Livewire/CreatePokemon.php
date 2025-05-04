<?php

namespace App\Livewire;

use App\Models\Pokemon;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Rule;
use Livewire\Component;

class CreatePokemon extends Component
{
    #[Rule('required|string|max:25')]
    public $name;

    #[Rule('required|string')]
    public $gender;

    #[Rule('required|string|max:100')]
    public $description;

    public function save() {
        $this->validate();

        Pokemon::create([
            'name' => strtolower($this->name),
            'gender' => $this->gender,
            'description' => $this->description,
        ]);

        $this->redirect('/', navigate: true);
    }

    // #[Layout('components.layouts.second')]
    public function render()
    {
        return view('livewire.create-pokemon');
    }
}
