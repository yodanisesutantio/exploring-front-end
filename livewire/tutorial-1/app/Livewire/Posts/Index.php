<?php

namespace App\Livewire\Posts;

use Livewire\Component;
use App\Models\Post;
#[\Livewire\Attributes\Title('Posts Index')]

class Index extends Component
{
    #[\Livewire\Attributes\On('postCreated')]

    public function updateList($post){

    }

    public function render()
    {
        return view('livewire.posts.index', [
            'posts' => Post::query()->with('user')->latest()->get(),
        ]);
    }
}
