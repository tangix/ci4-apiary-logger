<?php


namespace App\Controllers;


use App\Classes\DBTable;
use App\Models\InspectionModel;
use App\Models\QueenModel;
use App\Traits\ExtraResponesTrait;
use CodeIgniter\API\ResponseTrait;

class Inspections extends BaseController
{

    use ResponseTrait;
    use ExtraResponesTrait;

    public function create()
    {
        $inspection = new InspectionModel();

        $newData = $this->request->getJSON();
        if (is_null($newData)) {
            return $this->failValidationError();
        }

        $inspection->insert($newData);

        return $this->respondNoContent();
    }

    public function delete($id)
    {
        $inspection = new InspectionModel();
        $record = $inspection->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $inspection->delete($id);

        return $this->respondNoContent();
    }

    public function index()
    {
        $inspection = new InspectionModel();
        $inspection->select(DBTable::inspection . '.*')
            ->select(DBTable::hive . '.name AS hive_name')
            ->join(DBTable::hive, DBTable::hive . '.id=hive', 'LEFT');

        return $this->JsonStoreResponse(true, $inspection->findAll());
    }

    public function update($id)
    {
        $inspection = new InspectionModel();
        $record = $inspection->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $newData = $this->request->getJSON();

        if ( ! $inspection->validateVersionAndUpdate($id, $newData)) {
            return $this->failConflict();
        }

        return $this->respondNoContent();
    }

}
