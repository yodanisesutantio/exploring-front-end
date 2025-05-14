<?php

use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/google/login', [GoogleAuthController::class, 'redirectToGoogle'])->name('google.login');
Route::get('/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);
Route::get('/youtube/upload', [GoogleAuthController::class, 'showUploadForm'])->name('youtube.upload.form');
Route::post('/youtube/upload', [GoogleAuthController::class, 'uploadVideo'])->name('youtube.upload');

