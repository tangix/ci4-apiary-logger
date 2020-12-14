<?php


namespace App\Controllers;


use App\Classes\DBTable;
use App\Libraries\AuthBearer;
use App\Models\QueenModel;
use App\Models\RegionModel;
use App\Traits\ExtraResponesTrait;
use CodeIgniter\API\ResponseTrait;

class Queens extends BaseController
{

    use ResponseTrait;
    use ExtraResponesTrait;

    public function create()
    {
        $queen = new QueenModel();

        $newData = $this->request->getJSON();
        if (is_null($newData)) {
            return $this->failValidationError();
        }

        $queen->insert($newData);

        return $this->respondNoContent();
    }

    public function delete($id)
    {
        $queen = new QueenModel();
        $record = $queen->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $queen->delete($id);

        return $this->respondNoContent();
    }

    public function index()
    {
        $queen = new QueenModel();
        $queen->select(DBTable::queen . '.*')
            ->select(DBTable::hive . '.name AS hive_name')
            ->join(DBTable::hive, DBTable::hive . '.id=hive', 'LEFT');

        return $this->JsonStoreResponse(true, $queen->findAll());
    }

    public function update($id)
    {
        $queen = new QueenModel();
        $record = $queen->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $newData = $this->request->getJSON();

        if ( ! $queen->validateVersionAndUpdate($id, $newData)) {
            return $this->failConflict();
        }

        return $this->respondNoContent();
    }
}
