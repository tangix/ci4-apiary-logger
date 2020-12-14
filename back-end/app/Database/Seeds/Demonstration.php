<?php


namespace App\Database\Seeds;


class Demonstration extends \CodeIgniter\Database\Seeder
{

    public function run()
    {
        $this->call('Queens');
        $this->call('Hives');
    }
}
