<?php


namespace App\Entities;


class QueenEntity extends BaseEntity
{
    protected $casts = [
        'deceased' => 'boolean'
    ];
}
