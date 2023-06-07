<?php

namespace App\Models;

use App\Models\Game;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Account extends Model implements Authenticatable
{
    use HasFactory;

        public function games() {
        return $this->belongsToMany(Game::class, 'usergames')->withPivot('is_favourite');}

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $table = 'account';


    public function getAuthIdentifierName()
    {
        return 'email'; 
    }

    public function getAuthIdentifier()
    {
        return $this->email; 
    }

    public function getAuthPassword()
    {
        return $this->password; 
    }

    public function getRememberToken()
    {
        return $this->remember_token; 
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value; 
    }

    public function getRememberTokenName()
    {
        return 'remember_token'; 
    }
}
