<?php


namespace App\Exceptions;


class RequestException extends \RuntimeException implements \CodeIgniter\Exceptions\ExceptionInterface
{

    public static function forArgumentError() {
        return new static('Argument Error', 400);
    }

}
