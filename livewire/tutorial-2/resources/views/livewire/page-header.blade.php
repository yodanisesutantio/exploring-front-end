<header class="flex justify-between">
    <div class="">
        <h2>Hi, {{ $name }}</h2>
        <p>{{ $subtitle }}</p>
    </div>

    <form wire:submit="$refresh" action="">
        <span class="mr-2">Your Name: </span>
        <input type="text" wire:model.live.debounce.500ms="name">
    </form>
</header>