<?php


namespace Tests\Support\Database\Seeds;


use App\Classes\DBTable;

class Hives extends \CodeIgniter\Database\Seeder
{

    public function run()
    {
        $builder = $this->db->table(DBTable::hive);
        $data = [
            [
                'id' => 1,
                'name' => 'H-Blue1',
                'comment' => 'Located on bench 1'
            ],
            [
                'id' => 2,
                'name' => 'H-Green2',
                'comment' => 'Located on bench 1'
            ],
            [
                'id' => 3,
                'name' => 'H-Green1',
                'comment' => 'Located in SW field'
            ],
            [
                'id' => 4,
                'name' => 'H-Red1',
                'comment' => 'Located by the forest road'
            ]
        ];

        foreach ($data as $record) {
            $builder
                ->set('created_at', date('Y-m-d H:i:s'))
                ->insert($record);
        }
    }
}
