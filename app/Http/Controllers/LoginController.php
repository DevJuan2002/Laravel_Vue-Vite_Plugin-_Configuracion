<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller

{
    public function register(Request $request){

        $usuarioR = $request->all();
        $nombre = $usuarioR['name'];
        dd($nombre, $request->all());
        return view('auth.login');
    }
}



