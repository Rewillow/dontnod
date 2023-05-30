<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller 
{

    public function login(Request $request) {
        $validatedData = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);

        if(auth()->attempt($validatedData)) {
            $request->session()->regenerate();

            return response()->json(['message' => 'You are now logged in!']);
        }

        return response()->json(['message' => 'Incorrect Credentials']);
    }



    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required|min:8',
        ]);

        $account = Account::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        return response()->json(['account'=> $account, 'message' => 'Account registered successfully'], 201);
    }

    public function logout(Request $request) { // Per effettuare il LogOut dal sito
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'You are now logged out']);
    }

    public function checkLog () { // Per controllare lo stato di connessione dell'utente 
        if(auth()->check()) {
            return response()->json(['isLoggedIn' => true]);
        } else {
            return response()->json(['isLoggedIn' => false]);
        }
    }

    public function user () { // Per recuperare i dati relativi all'account dell'utente
     
        if(Auth::check()) {

        $user = Auth::user();
        return response()->json($user); 

     } else {
       return response()->json(['message' => 'You are not logged'], 401);
     }
    }
}
