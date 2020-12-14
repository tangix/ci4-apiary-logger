<?php


namespace App\Models;


use App\Classes\DBTable;
use App\Entities\QueenEntity;

class QueenModel extends BaseModel
{

    protected $table = DBTable::queen;
    protected $primaryKey = 'id';

    protected $allowedFields = [
        'name',
        'installed',
        'race',
        'marking',
        'comment',
        'hive',
        'ancestor',
        'deceased',
        'item_version'
    ];

    protected $returnType = QueenEntity::class;

}
