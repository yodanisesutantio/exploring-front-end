<x-layout>
    <h2>{{ $pokemon->name }}</h2>

    <img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/{{ $pokemon->name }}.png" alt="{{ $pokemon->name }}" class="w-24 h-24 rounded-lg mb-3">

    <div class="bg-gray-200 p-4 rounded">
        <p><strong>Gender:</strong> {{ $pokemon->gender }}</p>
        <p><strong>Description:</strong></p>
        <p>{{ $pokemon->description }}</p>
    </div>

    <div class="border-2 border-dashed bg-white px-4 pb-4 my-4 rounded">
        <p><strong>Primary Type: {{ $pokemon->type1->name }}</strong></p>

        @if ($pokemon->type2)
            <p><strong>Secondary Type: {{ $pokemon->type2->name }}</strong></p>
        @endif
    </div>

    <form action="{{ route('pokemon.destroy', $pokemon->id) }}" method="POST">
        @csrf
        @method('DELETE')
        
        <button type="submit" class="btn my-4">Delete Pokemon</button>
    </form>
</x-layout>