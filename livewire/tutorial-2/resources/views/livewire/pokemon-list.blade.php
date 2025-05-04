<div>
    <livewire:page-header subtitle="Here's a list of your pokemon..." />

    {{-- searchbar --}}
    <input type="text" wire:model.live.debounce.300ms="term" placeholder="Search for pokemon..." class="search">

    {{-- <div class="">
        <p>Count: {{ $count }}</p>
        <button wire:click="increment(1)" class="">+1</button>
        <button wire:click="increment(5)" class="">+5</button>
    </div> --}}

    <ul class="list">
        @foreach ($pokemons as $p)
            <div class="inline-flex bg-[#263040]">
                <img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/2x/{{ $p->name }}.png" alt="{{ $p->name }}" class="w-40 h-40">
                <li wire:key="{{ $p->id }}" class="w-full">
                    <button wire:click="delete({{ $p->id }})">
                        Delete
                    </button>
                    <h3>{{ $p->name }}</h3>
                    <h4>{{ $p->gender }}</h4>
                    <p>{{ $p->description }}</p>
                </li>
            </div>
        @endforeach
    </ul>
</div>
