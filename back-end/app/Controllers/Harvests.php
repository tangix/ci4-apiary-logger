<?php


namespace App\Controllers;


use App\Classes\DBTable;
use App\Models\HarvestModel;
use App\Models\QueenModel;
use App\Traits\ExtraResponesTrait;
use CodeIgniter\API\ResponseTrait;

class Harvests extends BaseController
{

    use ResponseTrait;
    use ExtraResponesTrait;

    public function create()
    {
        $harvest = new HarvestModel();

        $newData = $this->request->getJSON();
        if (is_null($newData)) {
            return $this->failValidationError();
        }

        if (property_exists($newData, 'weight')) {
            $newData->weight = (int)($newData->weight * 1000.0);
        }

        if (property_exists($newData, 'moisture')) {
            $newData->moisture = (int)($newData->moisture * 100.0);
        }

        $harvest->insert($newData);

        return $this->respondNoContent();
    }

    public function delete($id)
    {
        $harvest = new HarvestModel();
        $record = $harvest->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $harvest->delete($id);

        return $this->respondNoContent();
    }

    public function index()
    {
        $harvest = new HarvestModel();
        $harvest->select(DBTable::harvest . '.*')
            ->select(DBTable::hive . '.name AS hive_name')
            ->join(DBTable::hive, DBTable::hive . '.id=hive', 'LEFT');

        return $this->JsonStoreResponse(true, $harvest->findAll());
    }

    public function update($id)
    {
        $harvest = new HarvestModel();
        $record = $harvest->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $newData = $this->request->getJSON();

        if (property_exists($newData, 'weight')) {
            $newData->weight = (int)($newData->weight * 1000.0);
        }

        if (property_exists($newData, 'moisture')) {
            $newData->moisture = (int)($newData->moisture * 100.0);
        }

        if ( ! $harvest->validateVersionAndUpdate($id, $newData)) {
            return $this->failConflict();
        }

        return $this->respondNoContent();
    }


}
