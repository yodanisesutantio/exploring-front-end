<x-layout>
    <h2>List of all Pokemons</h2>
    
    <ul>
        @foreach ($pokemons as $pokemon)
        <li>
            <x-card href="{{ route('pokemon.show', $pokemon->id) }}" :highlight="$pokemon['gender'] === 'female'">
                <div class="">
                    <h3>{{ $pokemon->name }}</h3>
                    <p>Primary Type: {{ $pokemon->type1->name }}</p>

                    @if ($pokemon->type2)
                        <p>Secondary Type: {{ $pokemon->type2->name }}</p>
                    @endif
                </div>
            </x-card>
        </li>
        @endforeach
    </ul>

    {{ $pokemons->onEachSide(1)->links('pagination::tailwind') }}
    </span>
</x-layout>