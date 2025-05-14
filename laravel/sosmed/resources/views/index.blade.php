<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
@foreach ($videos as $video)
    <div>
        <h3>{{ $video->snippet->title }}</h3>
        <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/{{ $video->id->videoId }}" 
            frameborder="0" allowfullscreen>
        </iframe>
    </div>
@endforeach

</body>
</html>