<x-layout>
    <form action="{{ route('pokemon.store') }}" method="POST">
        @csrf
        <h2>Add a New Pokemon</h2>
      
        <!-- Name -->
        <label for="name">Pokemon Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value="{{ old('name') }}"
        >

        <!-- select type 1 -->
        <label for="type1_id">Type 1:</label>
        <select id="type1_id" name="type1_id" >
          <option value="" disabled selected>Select Primary Type</option>
          @foreach ($types as $t1)
            <option value="{{ $t1->id }}" {{ $t1->id == old('type1_id') ? 'selected' : '' }}>{{ $t1->name }}</option>
          @endforeach
        </select>

        <!-- select type 2 -->
        <label for="type2_id">Type 2:</label>
        <select id="type2_id" name="type2_id">
          <option value="" disabled selected>Select Secondary Type</option>
          @foreach ($types as $t2)
            <option value="{{ $t2->id }}" {{ $t2->id == old('type2_id') ? 'selected' : '' }}>{{ $t2->name }}</option>
          @endforeach
        </select>
      
        <!-- Description -->
        <label for="description">Description:</label>
        <textarea
          rows="5"
          id="description" 
          name="description" 
        >{{ old('description') }}</textarea>
      
        <!-- select gender -->
        <label for="gender">Gender:</label>
        <select id="gender" name="gender" >
          <option value="" disabled selected>Select Gender</option>
            <option value="male" {{ old('gender') == 'male' ? 'selected' : '' }}>male</option>
            <option value="female" {{ old('gender') == 'female' ? 'selected' : '' }}>female</option>
            <option value="genderless" {{ old('gender') == 'genderless' ? 'selected' : '' }}>genderless</option>
        </select>
      
        <button type="submit" class="btn mt-4">Add Pokemon</button>
      
        <!-- validation errors -->
        @if ($errors->any())
            <ul class="px-4 py-2 bg-red-100">
              @foreach ($errors->all() as $err)
                  <li class="my-2 text-red-500">{{ $err }}</li>
              @endforeach
            </ul>
        @endif
    </form>
</x-layout>