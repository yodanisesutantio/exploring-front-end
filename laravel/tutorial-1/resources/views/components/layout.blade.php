<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gen 1 Pokedex</title>

    @vite('resources/css/app.css')
</head>
<body>
    @if (session('success'))
        <div id="flash" class="text-center py-4 bg-green-50 text-green-500 font-bold">
            {{ session('success') }}
        </div>
    @endif

    <header>
        <nav>
            <h1>Gen 1 Pokedex</h1>
            <a href="{{ route('pokemon.index') }}">All Pokemons</a>
            <a href="{{ route('pokemon.create') }}">Add New Pokemons</a>
        </nav>
    </header>

    <main class="container">
        {{ $slot }}
    </main>
</body>
</html>