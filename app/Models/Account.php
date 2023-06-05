<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;

class Account extends Model implements Authenticatable
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $table = 'account';

    public function getAuthIdentifierName()
    {
        return 'email'; // Replace 'email' with the actual name of your identifier column
    }

    public function getAuthIdentifier()
    {
        return $this->email; // Replace 'email' with the actual name of your identifier column
    }

    public function getAuthPassword()
    {
        return $this->password; // Replace 'password' with the actual name of your password column
    }

    public function getRememberToken()
    {
        return $this->remember_token; // Replace 'remember_token' with the actual name of your remember token column
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value; // Replace 'remember_token' with the actual name of your remember token column
    }

    public function getRememberTokenName()
    {
        return 'remember_token'; // Replace 'remember_token' with the actual name of your remember token column
    }
}
