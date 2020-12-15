<?php


namespace App\Entities;


class BaseEntity extends \CodeIgniter\Entity
{

    // The built-in mutator for dates is not suitable for
    // the communication and formatting of JSON data.
    // Instead we use the ISO format set in the database.
    protected $dates = [];

}
