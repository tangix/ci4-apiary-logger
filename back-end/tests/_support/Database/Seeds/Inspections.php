<?php


namespace Tests\Support\Database\Seeds;


use App\Classes\DBTable;

class Inspections extends \CodeIgniter\Database\Seeder
{

    public function run()
    {
        $builder = $this->db->table(DBTable::inspection);
        $data = [
            // Subject,note,image,hive,completed,eggs,larvae,queen
            ['Weekly inspection', '', '', 1, 1, 1, 1, 0, '2020-06-18 12:34:00'],
            ['Weekly inspection', 'Cut grass under bench', '', 2, 0, 1, 1, 1, '2020-06-18 12:39:00'],
            ['Weekly inspection', 'Hive nice and clean', '01ESH0S7JBHY2SXTVF5WS3QNP4.jpeg', 3, 1, 1, 1, 1, '2020-06-18 12:46:00'],
            ['Weekly inspection', '', '', 4, 1, 1, 1, 0, '2020-06-18 13:15:00'],

            ['Weekly inspection', '', '', 1, 1, 1, 1, 1, '2020-07-01 09:34:00'],
            ['Weekly inspection', '', '', 2, 1, 1, 1, 0, '2020-07-01 09:39:00'],
            ['Weekly inspection', 'Hive almost ready for harvest', '01ESH0RQDMXVJMEM6D5JW9XGVJ.jpeg', 3, 1, 1, 1, 0, '2020-07-01 09:46:00'],
            ['Weekly inspection', '', '', 4, 1, 1, 1, 0, '2020-07-01 09:15:00'],

            ['Food-box empty', 'Bees have escaped into the empty box', '01ESH0V4KVQAB52MBEQHS0H7RZ.jpeg', 2, 1, 1, 1, 0, '2020-08-07 11:25:00'],

        ];

        foreach ($data as $d) {
            $builder->set([
                'subject' => $d[0],
                'note' => $d[1],
                'image' => $d[2],
                'hive' => $d[3],
                'completed' => $d[4],
                'eggs' => $d[5],
                'larvae' => $d[6],
                'queen' => $d[7],
                'created_at' => $d[8]
            ])->insert();
        }
    }

}
