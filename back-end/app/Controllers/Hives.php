<?php


namespace App\Controllers;


use App\Models\HiveModel;

class Hives extends BaseController
{

    public function index()
    {
        $hive = new HiveModel();

        return $this->JsonStoreResponse(true, $hive->findAll());
    }

}
