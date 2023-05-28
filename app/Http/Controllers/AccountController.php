<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


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
}
