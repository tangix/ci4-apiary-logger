<?php


namespace App\Models;


use App\Classes\DBTable;
use App\Entities\HarvestEntity;

class HarvestModel extends BaseModel
{

    protected $table = DBTable::harvest;
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'subject',
        'hive',
        'season',
        'weight',
        'moisture',
        'item_version'
    ];

    protected $returnType = HarvestEntity::class;

}
