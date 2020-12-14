<?php


namespace App\Database\Seeds;


class Demonstration extends \CodeIgniter\Database\Seeder
{

    public function run()
    {
        $this->db->transStart();
        $this->call('Queens');
        $this->call('Hives');
        $this->call('Inspections');
        $this->db->transCommit();
    }
}
