<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    @if (session('success'))
    <p style="color: green">{{ session('success') }}</p>
@endif

<form action="{{ route('youtube.upload') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="text" name="title" placeholder="Video Title" required><br><br>
    <textarea name="description" placeholder="Video Description"></textarea><br><br>
    <input type="file" name="video" accept="video/*" required><br><br>
    <button type="submit">Upload Video</button>
</form>
</body>
</html>