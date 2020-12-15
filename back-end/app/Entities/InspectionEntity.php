<?php


namespace App\Entities;


class InspectionEntity extends BaseEntity
{

    protected $casts = [
        'id' => 'int',
        'completed' => 'boolean',
        'eggs' => 'boolean',
        'larvae' => 'boolean',
        'queen' => 'boolean'
    ];

}
