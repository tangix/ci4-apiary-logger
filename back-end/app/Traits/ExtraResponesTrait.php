<?php


namespace App\Traits;


trait ExtraResponesTrait
{

    public function failConflict()
    {
        return $this->response->setStatusCode(409, 'Conflict');
    }


}
