<?php


namespace App\Database\Seeds;


use App\Classes\DBTable;

class Harvests extends \CodeIgniter\Database\Seeder
{
    public function run()
    {
        $builder = $this->db->table(DBTable::harvest);
        $data = [
            // hive,subject,season,weight,moisture,harvestdate
            // Note that weight is in grams and moisture in % * 100 to fit an INT

            [3, 'Spring honey', 2019, 18.2, 17.6, '2019-06-27 10:00:00'],
            [3, 'Summer honey', 2019, 17.2, 18.1, '2019-07-24 14:00:00'],
            [3, 'Final extraction', 2019, 21.2, 18.2, '2019-08-29 13:00:00'],

            [3, 'Spring honey', 2020, 14.2, 17.6, '2020-06-21 10:00:00'],
            [1, 'Summer honey', 2020, 16.2, 18.6, '2020-07-15 10:00:00'],
            [3, 'Summer honey', 2020, 17.8, 17.9, '2020-07-19 12:00:00'],
            [4, 'Summer honey', 2020, 13.6, 18.1, '2020-07-22 14:00:00'],
            [1, 'Final extraction', 2020, 22.8, 17.6, '2019-08-23 13:00:00'],
            [3, 'Final extraction', 2020, 19.4, 16.9, '2019-08-23 13:00:00'],
            [4, 'Final extraction', 2020, 18.7, 17.7, '2019-08-24 12:00:00'],

        ];

        foreach ($data as $d) {
            $builder->set([
                'hive' => $d[0],
                'subject' => $d[1],
                'season' => $d[2],
                'weight' => (int)($d[3] * 1000.0), // convert to grams
                'moisture' => (int)($d[4] * 100.0), // % with 2 decimals
                'created_at' => $d[5]
            ])->insert();
        }
    }
}
