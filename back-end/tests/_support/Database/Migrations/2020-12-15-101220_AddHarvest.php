<?php


namespace Tests\Support\Database\Migrations;


use App\Classes\DBTable;

class AddHarvest extends \CodeIgniter\Database\Migration
{

    /**
     * @inheritDoc
     */
    public function down()
    {
        $this->forge->dropTable(DBTable::harvest);
    }

    /**
     * @inheritDoc
     */
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'hive' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'subject' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true
            ],
            'season' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'weight' => [
                'type' => 'INT',
                'constraint' => 11,
                'null' => true
            ],
            'moisture' => [
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
        $this->forge->createTable(DBTable::harvest);
    }
}
