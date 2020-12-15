<?php


namespace App\Models;

use App\Classes\DBTable;
use App\Entities\InspectionEntity;

class InspectionModel extends BaseModel
{

    protected $table = DBTable::inspection;
    protected $primaryKey = 'id';
    protected $allowedFields = [
        'subject',
        'note',
        'image',
        'hive',
        'completed',
        'eggs',
        'larvae',
        'queen',
        'item_version',
        'created_at'
    ];

    protected $returnType = InspectionEntity::class;

}
