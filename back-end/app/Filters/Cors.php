<?php

namespace App\Filters;

class Cors implements \CodeIgniter\Filters\FilterInterface
{

    /**
     * @inheritDoc
     */
    public function before(\CodeIgniter\HTTP\RequestInterface $request, $arguments = null)
    {
        // TODO: Implement before() method.
    }

    /**
     * @inheritDoc
     */
    public function after(
        \CodeIgniter\HTTP\RequestInterface $request,
        \CodeIgniter\HTTP\ResponseInterface $response,
        $arguments = null
    ) {
        return $response->setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, PUT, OPTIONS')
            ->setHeader('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN'])
            ->setHeader('Access-Control-Allow-Headers',
                'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
            ->setHeader('Access-Control-Max-Age', '3600')
            ->setHeader('Access-Control-Allow-Credentials', 'true');

    }
}
