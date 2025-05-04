<div class="create">
    <h3>Add new pokemon</h3>

    <form wire:submit="save">
        <div class="field">
            <label>Pokemon Name</label>
            <input type="text" wire:model="name" placeholder="Enter your pokemon name">
            @error('name')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>

        <div class="field">
            <label>Pokemon Gender</label>
            <select wire:model="gender">
                <option disabled>Select your pokemon gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
            </select>
            @error('gender')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>

        <div class="field">
            <label>Description</label>
            <textarea wire:model="description" rows="5" placeholder="Enter pokemon description"></textarea>
            @error('description')
                <div class="error">{{ $message }}</div>
            @enderror
        </div>

        <button>Add Pokemon</button>
    </form>
</div>
