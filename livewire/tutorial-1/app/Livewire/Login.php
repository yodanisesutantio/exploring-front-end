<?php

namespace App\Livewire;

use Livewire\Component;
use Livewire\Attributes\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

#[\Livewire\Attributes\Layout('layouts.guest')]

class Login extends Component
{
    public \App\Livewire\Forms\LoginForm $form;

    public function login() {
        $this->form->store();

        // dd('loggedin');
    }
    public function render()
    {
        return view('livewire.login');
    }
}
