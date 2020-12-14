<?php


namespace App\Controllers;


use App\Classes\DBTable;
use App\Models\HiveModel;
use App\Models\QueenModel;
use App\Traits\ExtraResponesTrait;
use CodeIgniter\API\ResponseTrait;

class Hives extends BaseController
{

    use ResponseTrait;
    use ExtraResponesTrait;

    public function create() {
        $hive = new HiveModel();

        $newData = $this->request->getJSON();
        if (is_null($newData)) {
            return $this->failValidationError();
        }

        $hive->insert($newData);

        return $this->respondNoContent();

    }

    public function delete($id)
    {
        $hive = new HiveModel();
        $record = $hive->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $hive->delete($id);

        return $this->respondNoContent();
    }


    public function index()
    {
        $hive = new HiveModel();
        $query = $hive->select(DBTable::hive . '.*')
            ->select(DBTable::queen . '.name AS queen_name')
            ->join(DBTable::queen, DBTable::queen . '.hive=' . DBTable::hive . '.id', 'LEFT')
            ->get();

        $data = [];
        foreach ($query->getResultObject() as $row) {
            $last_inspection = db_connect()
                ->table(DBTable::inspection)
                ->selectMax('created_at', 'last_inspection')
                ->where('hive', $row->id)
                ->get()
                ->getRow(0)->last_inspection;
            $row->last_inspection = $last_inspection;

            array_push($data, $row);
        }

        return $this->JsonStoreResponse(true, $data);
    }

    public function update($id)
    {
        $hive = new HiveModel();
        $record = $hive->find($id);
        if (is_null($record)) {
            return $this->failNotFound();
        }

        $newData = $this->request->getJSON();

        if ( ! $hive->validateVersionAndUpdate($id, $newData)) {
            return $this->failConflict();
        }

        return $this->respondNoContent();
    }


}
