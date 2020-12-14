<?php


namespace App\Controllers;


use Config\Services;

class Options extends BaseController
{


    public function index()
    {
//header.Add("Access-Control-Allow-Origin", "*")
//header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
//header.Add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

        $request = Services::request();

        return $this->response->setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, PUT, OPTIONS')
            ->setHeader('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN'])
            ->setHeader('Access-Control-Allow-Headers',
                'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
            ->setHeader('Access-Control-Max-Age', '3600')
            ->setHeader('Access-Control-Allow-Credentials', 'true')
            ->setStatusCode(204);
    }

}
