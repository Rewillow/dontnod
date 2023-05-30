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

Route::post('/register', [AccountController::class, 'register']);

Route::post('/login', [AccountController::class, 'login']);

Route::post('/logout', [AccountController::class, 'logout']);

Route::get('/checkLog', [AccountController::class, 'checkLog']);

Route::get('/user', [AccountController::class, 'user']);


