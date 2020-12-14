<?php


namespace App\Database\Seeds;


use App\Classes\DBTable;

class Hives extends \CodeIgniter\Database\Seeder
{

    public function run()
    {
        $builder = $this->db->table(DBTable::hive);
        $data = [
            [
                'id' => 1,
                'name' => 'H-Blue1'
            ],
            [
                'id' => 2,
                'name' => 'H-Green2'
            ],
            [
                'id' => 3,
                'name' => 'H-Green1'
            ],
            [
                'id' => 4,
                'name' => 'H-Red1'
            ]
        ];

        foreach ($data as $record) {
            $builder
                ->set('created_at', date('Y-m-d H:i:s'))
                ->insert($record);
        }
    }
}
