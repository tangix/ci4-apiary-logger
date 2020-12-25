<?php


namespace Tests\Support\Database\Migrations;


use App\Classes\DBTable;

class AddInspection extends \CodeIgniter\Database\Migration
{

    public function down()
    {
        $this->forge->dropTable(DBTable::inspection);
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
            'subject' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true
            ],
            'note' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true
            ],
            'image' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true
            ],
            'hive' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'completed' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'eggs' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'larvae' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'queen' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
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
        $this->forge->createTable(DBTable::inspection);
    }
}
