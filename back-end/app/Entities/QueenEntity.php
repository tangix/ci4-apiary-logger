<?php


namespace App\Entities;


class QueenEntity extends BaseEntity
{
    protected $casts = [
        'id' => 'int',
        'deceased' => 'boolean'
    ];
}
