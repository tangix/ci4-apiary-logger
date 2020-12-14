<?php


namespace App\Models;


use App\Classes\DBTable;
use App\Entities\HiveEntity;

class HiveModel extends BaseModel
{

    protected $table = DBTable::hive;
    protected $primaryKey = 'id';

    protected $allowedFields = ['name'];
    protected $returnType = HiveEntity::class;
}
