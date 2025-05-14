<?php

// app/Http/Controllers/GoogleAuthController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google_Client;
use Google_Service_YouTube;
use Google_Service_YouTube_Video;
use Google_Service_YouTube_VideoSnippet;
use Google_Service_YouTube_VideoStatus;
use Google_Service_YouTube_VideoRecordingDetails;

class GoogleAuthController extends Controller
{
    public function redirectToGoogle()
    {
        $client = new Google_Client();
        $client->setClientId(env('GOOGLE_CLIENT_ID'));
        $client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
        $client->setRedirectUri(env('GOOGLE_REDIRECT'));
        $client->addScope(Google_Service_YouTube::YOUTUBE_UPLOAD);

        return redirect()->away($client->createAuthUrl());
    }

    public function handleGoogleCallback(Request $request)
    {
        $client = new Google_Client();
        $client->setClientId(env('GOOGLE_CLIENT_ID'));
        $client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
        $client->setRedirectUri(env('GOOGLE_REDIRECT'));

        $token = $client->fetchAccessTokenWithAuthCode($request->code);
        $client->setAccessToken($token);

        // Save token to session (or DB)
        session(['youtube_access_token' => $token]);

        return redirect()->route('youtube.upload.form');
    }

    public function showUploadForm()
    {
        return view('upload');
    }

public function uploadVideo(Request $request)
{
    $request->validate([
        'title' => 'required',
        'video' => 'required|file|mimes:mp4,avi,mov',
    ]);

    // Setup Google client
    $client = new \Google_Client();
    $client->setClientId(env('GOOGLE_CLIENT_ID'));
    $client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
    $client->setAccessToken(session('youtube_access_token'));

    $youtube = new \Google_Service_YouTube($client);

    // Prepare video metadata
    $video = new \Google_Service_YouTube_Video();

    $snippet = new \Google_Service_YouTube_VideoSnippet();
    $snippet->setTitle($request->title);
    $snippet->setDescription($request->description ?? 'Uploaded from Laravel');
    $snippet->setTags(['Laravel', 'YouTube API']);
    $snippet->setCategoryId("22"); // People & Blogs

    $status = new \Google_Service_YouTube_VideoStatus();
    $status->privacyStatus = "public"; // public, unlisted, private

    $video->setSnippet($snippet);
    $video->setStatus($status);

    // Get uploaded video file
    $videoFile = $request->file('video');
    $videoPath = $videoFile->getRealPath();
    $fileSize = filesize($videoPath);
    $chunkSize = 1 * 1024 * 1024; // 1 MB

    $client->setDefer(true);

    $insertRequest = $youtube->videos->insert("status,snippet", $video);

    $media = new \Google_Http_MediaFileUpload(
        $client,
        $insertRequest,
        'video/*',
        null,
        true,
        $chunkSize
    );
    $media->setFileSize($fileSize);

    $handle = fopen($videoPath, 'rb');
    if (!$handle) {
        return back()->withErrors(['video' => 'Failed to open the video file.']);
    }

    while (!$media->nextChunk(fread($handle, $chunkSize)) && !feof($handle)) {
        // chunks are being uploaded in the loop
    }

    fclose($handle);
    $client->setDefer(false);

    return back()->with('success', 'Video uploaded successfully!');
}

}
