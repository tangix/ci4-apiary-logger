<?php

use App\Models\HarvestModel;
use App\Models\HiveModel;
use App\Models\QueenModel;
use Tests\Support\DatabaseTestCase;

class ExampleDatabaseTest extends DatabaseTestCase
{

    public function setUp(): void
    {
        parent::setUp();
        // Extra code to run before each test
    }

    public function testHarvestsModel()
    {
        $model = new HarvestModel();
        $objects = $model->findAll();
        $this->assertCount(10, $objects);
        $this->assertEquals('App\Entities\HarvestEntity', get_class($objects[0]));
        $this->assertEquals('Spring honey', $objects[0]->subject);
    }

    public function testHiveModel()
    {
        $model = new HiveModel();
        $objects = $model->findAll();
        $this->assertCount(4, $objects);
        $this->assertEquals('App\Entities\HiveEntity', get_class($objects[0]));
        $this->assertEquals('H-Blue1', $objects[0]->name);
    }

    public function testInspectionModel()
    {
        $model = new \App\Models\InspectionModel();
        $objects = $model->findAll();
        $this->assertCount(9, $objects);
        $this->assertEquals('App\Entities\InspectionEntity', get_class($objects[0]));

        // Test updating of model
        $object = $model->find(1);
        $this->assertEquals('Weekly inspection', $object->subject);
        $model->update(1, ['subject' => 'Weekly Inspection']);
        $object = $model->find(1);
        $this->assertEquals('Weekly Inspection', $object->subject);
    }

    public function testQueenModel()
    {
        $model = new QueenModel();
        $objects = $model->findAll();
        $this->assertCount(6, $objects);
        $this->assertEquals('App\Entities\QueenEntity', get_class($objects[0]));
        $this->assertEquals('Q-SH-2019-1', $objects[0]->name);
    }


}
