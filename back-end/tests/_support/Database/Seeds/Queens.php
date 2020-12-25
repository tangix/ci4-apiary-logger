<?php

namespace Tests\Support\Database\Seeds;

use App\Classes\DBTable;
use CodeIgniter\Database\Seeder;

class Queens extends Seeder
{

    public function run()
    {
        $builder = $this->db->table(DBTable::queen);
        $data = [
            [
                'id' => 1,
                'name' => 'Q-SH-2019-1',
                'installed' => '2019-06-25',
                'race' => 'Carnica',
                'marking' => 'GREEN',
                'comment' => 'Purchased from Steven',
                'ancestor' => 0,
                'hive' => 3
            ],
            [
                'id' => 2,
                'name' => 'Q-SH-2019-2',
                'installed' => '2019-06-25',
                'race' => 'Carnica',
                'marking' => 'GREEN',
                'comment' => 'Purchased from Steven. We killed 2020-07 since not fertile.',
                'ancestor' => 0,
                'hive' => 0,
                'deceased' => 1
            ],
            [
                'id' => 3,
                'name' => 'Q-JM-2020-64',
                'installed' => '2020-07-07',
                'race' => 'Carnica',
                'marking' => '#64',
                'comment' => 'Purchased from Janjatou',
                'hive' => 2,
                'ancestor' => 0
            ],
            [
                'id' => 4,
                'name' => 'Q-JM-2020-88',
                'installed' => '2020-07-07',
                'race' => 'Carnica',
                'marking' => '#88',
                'comment' => 'Purchased from Janjatou. Not accepted by hive and was killed.',
                'ancestor' => 0,
                'deceased' => 1
            ],
            [
                'id' => 5,
                'name' => 'Q-SEM-2020-1',
                'installed' => '2020-07-07',
                'race' => 'Carnica',
                'marking' => 'BLUE',
                'comment' => 'Created from extension',
                'hive' => 1,
                'ancestor' => 1
            ],
            [
                'id' => 6,
                'name' => 'Q-SH-2020-1',
                'installed' => '2020-06-15',
                'race' => 'Carnica',
                'marking' => 'BLUE',
                'comment' => 'Package with bees from Steven.',
                'hive' => 4,
                'ancestor' => 1
            ],
        ];

        foreach ($data as $record) {
            $builder->set($record)
                ->set('created_at', date('Y-m-d H:i:s'))
                ->insert();
        }
    }
}
