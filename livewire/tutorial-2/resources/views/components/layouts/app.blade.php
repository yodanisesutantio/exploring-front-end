<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>{{ $title ?? 'Laravel w/ Livewire' }}</title>

        @vite('resources/css/app.css')
    </head>
    <body>
        <nav>
            <div class="">
                <h1>Gen 1 Pokedex</h1>
                <a wire:navigate @class(['active' => request()->is('/')]) href="/">Pokemon List</a>
                <a wire:navigate @class(['active' => request()->is('create')]) href="/create">Add Pokemon</a>
            </div>
        </nav>
        <main>
            {{ $slot }}
        </main>
    </body>
</html>
