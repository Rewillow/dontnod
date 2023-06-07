<?php

namespace App\Models;

use App\Models\Account;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Game extends Model
{
    protected $table = 'listvideogames';

    public function accounts() { // Si stringe una relazione many-to-many con la tabella Subjects
        return $this->belongsToMany(Account::class, 'usergames')->withPivot('is_favourite'); 
    }

    use HasFactory;
}
