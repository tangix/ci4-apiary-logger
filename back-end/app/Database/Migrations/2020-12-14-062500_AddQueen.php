<?php


namespace App\Database\Migrations;


use App\Classes\DBTable;

class AddQueen extends \CodeIgniter\Database\Migration
{

    public function down()
    {
        $this->forge->dropTable(DBTable::queen);
    }

    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'installed' => [
                'type' => 'DATE',
                'null' => true,
            ],
            'race' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true,
            ],
            'marking' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true,
            ],
            'comment' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true,
            ],
            'hive' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true,
            ],
            'ancestor' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true,
            ],
            'deceased' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true,
            ],
            'item_version' => [
                'type' => 'INT',
                'constraint' => 11,
                'default' => 1
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->addKey('hive');
        $this->forge->createTable(DBTable::queen);
    }
}
