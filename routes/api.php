<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Models\Account;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register', [AccountController::class, 'register']); // Per registrarsi al sito

Route::post('/login', [AccountController::class, 'login']); // Per effettuare il Login

Route::post('/logout', [AccountController::class, 'logout']); // Per effettuare il Logout

Route::get('/checkLog', [AccountController::class, 'checkLog']); // Per controllare se l'utente è loggato o no

Route::get('/user', [AccountController::class, 'user']); // Per recuperare i dati relativi all'account dell'utente




