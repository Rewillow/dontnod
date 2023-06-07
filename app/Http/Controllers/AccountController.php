<?php

namespace App\Http\Controllers;


use App\Models\Game;
use App\Models\Account;
use Illuminate\Http\Request;
use App\Models\UserPreference;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller 
{

    public function login(Request $request) {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);
    
        $user = Account::where('email', $request->email)->first();
    
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Incorrect Credentials'], 401);
        }
    
        auth()->login($user);
        $request->session()->regenerate();
    
        return response()->json(['message' => 'You are now logged in!']);
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

        Auth::login($account); // In questo modo viene effettuata l'autenticazione automatica dell'utente

        return response()->json(['account'=> $account, 'message' => 'Account registered successfully'], 201);
    }


    public function logout(Request $request) { // Per effettuare il LogOut dal sito
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'You are now logged out']);
    }

    public function checkLog() {
        if (auth()->check()) {
            $userId = auth()->id(); // Ottieni l'ID dell'utente autenticato
            // Altri controlli o azioni specifiche in base all'ID dell'utente
            return response()->json(['isLoggedIn' => true, 'userId' => $userId]);
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

