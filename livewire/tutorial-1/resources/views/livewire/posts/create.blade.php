<div class="">
    <x-flash-message />
    <div class="card">
        <div class="card-body">
            <div class="card-body">
                <h5 class="card-title">New Post</h5>
                
                <form wire:submit="save">
                    <div class="mb-4">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" wire:model="form.title" id="title" class="form-control" rows="3" />
                        @error('form.title')
                            <small class="text-danger d-block mt-1">{{ $message }}</small>
                        @enderror
                    </div>

                    <div class="mb-4">
                        <label for="body" class="form-label">Body</label>
                        <textarea wire:model="form.body" id="body" class="form-control" rows="3"></textarea>
                        @error('form.body')
                            <small class="text-danger d-block mt-1">{{ $message }}</small>
                        @enderror
                    </div>

                    <div class="flex justify-content-end">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

