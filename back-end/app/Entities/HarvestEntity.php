<?php


namespace App\Entities;


class HarvestEntity extends BaseEntity
{

    protected $casts = [
        'id' => 'int',
        'weight' => 'float',
        'moisture' => 'float'
    ];

    public function getMoisture()
    {
        return ($this->attributes['moisture'] / 100.0);
    }

    public function getWeight()
    {
        return round($this->attributes['weight'] / 1000.0, 2);
    }

    public function setMoisture(int $value)
    {
        $this->attributes['moisture'] = (int)($value * 100.0);
        return $this;
    }

    public function setWeight(int $value)
    {
        $this->attributes['weight'] = (int)($value * 1000.0);
        return $this;
    }

}
