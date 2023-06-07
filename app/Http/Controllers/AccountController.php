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

    public function showUser($id) { // Questa funziona mostra il singolo videogioco e i rispettivi dettagli
        $user = Account::find($id); // La variabile e la rispettiva query vanno alla ricerca dell'id del videogioco
        return response()->json($user); // Ritorna i risultati in formato "json"
    }

    public function listgames() { // Funzione che recupera la lista di tutti i videogiochi
        $games = Game::all();
        return response()->json($games);
    }

    public function showGame($id) { // Questa funziona mostra il singolo videogioco e i rispettivi dettagli
        $game = Game::find($id); // La variabile e la rispettiva query vanno alla ricerca dell'id del videogioco
        return response()->json($game); // Ritorna i risultati in formato "json"
    }

    public function toggleFavourite($userId, $gameId)
    {
        $user = Account::findOrFail($userId);
        
    
        // Aggiungi o rimuovi il gioco dai preferiti dell'utente senza detaching
        $user->games()->syncWithoutDetaching($gameId);
    
        // Verifica se il gioco è tra i preferiti dell'utente
        $isFavourite = $user->games()->where('game_id', $gameId)->exists();
    
        return response()->json(['is_favourite' => $isFavourite]);
    }
    
    
    
    
    
    
    
    
    
    
}
