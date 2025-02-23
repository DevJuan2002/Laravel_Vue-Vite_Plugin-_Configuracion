<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return view('welcome');
});

Route::get('/register' , function(){
    return view('auth.register');
});


// Route::post('/login/register' , "App\Http\Controllers\LoginController@register");
