<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;
use Livewire\Attributes\Rule;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class PostForm extends Form
{
    #[Rule(['required'])]
    public string $title = '';

    #[Rule(['required'])]
    public string $body = '';

    public function store() {
        $post = Auth::user()->posts()->create($this->validate());

        flash('Post created successfully.', 'success');

        $this->reset();
        return $post;
    }
}
