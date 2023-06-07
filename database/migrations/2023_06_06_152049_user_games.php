<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('UserGames', function (Blueprint $table) {
            $table->unsignedBigInteger('account_id');
            $table->unsignedBigInteger('game_id');
            $table->boolean('is_favourite');
    
            // Definisci le chiavi esterne
            $table->foreign('account_id')->references('id')->on('account')->onDelete('cascade');
            $table->foreign('game_id')->references('id')->on('listvideogames')->onDelete('cascade');
            
            // Aggiungi la chiave primaria composta
            $table->primary(['account_id', 'game_id']);
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
