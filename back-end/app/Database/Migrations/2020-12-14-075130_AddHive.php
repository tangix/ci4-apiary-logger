<?php


namespace App\Database\Migrations;


use App\Classes\DBTable;

class AddHive extends \CodeIgniter\Database\Migration
{

    /**
     * @inheritDoc
     */
    public function down()
    {
        $this->forge->dropTable(DBTable::hive);
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
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'comment' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
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
        $this->forge->createTable(DBTable::hive);
    }
}
