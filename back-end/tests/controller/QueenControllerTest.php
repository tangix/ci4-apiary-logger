<?php


use App\Controllers\Queens;
use CodeIgniter\HTTP\Response;
use CodeIgniter\Test\ControllerTester;
use Tests\Support\DatabaseTestCase;

class QueenControllerTest extends DatabaseTestCase
{

    use ControllerTester;

    public function setUp(): void
    {
        parent::setUp();
        // Extra code to run before each test
    }

    public function testCreate()
    {
        $expected = 'Create Test';
        $data = ['name' => $expected];
        $result = $this
            ->withBody(json_encode($data))
            ->controller(Queens::class)
            ->execute('create');

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(204, $response->getStatusCode());

        $result = $this
            ->controller(Queens::class)
            ->execute('index');

        $this->assertTrue($result->isOK());

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals('application/json; charset=UTF-8', $response->getHeader('Content-Type')
            ->getValue());

        $json = json_decode($response->getBody());
        $this->assertNotNull($json);
        $this->assertObjectHasAttribute('success', $json);
        $this->assertObjectHasAttribute('data', $json);
        $this->assertCount(7, $json->data);
        $this->assertEquals($expected, $json->data[6]->name);
    }

    public function testCreateFail()
    {
        $expected = 'Create Test';
        $data = null;
        $result = $this
            ->withBody(json_encode($data))
            ->controller(Queens::class)
            ->execute('create');

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(400, $response->getStatusCode());
    }

    public function testDelete()
    {
        $result = $this
            ->controller(Queens::class)
            ->execute('delete', 1);

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(204, $response->getStatusCode());

        $result = $this
            ->controller(Queens::class)
            ->execute('index');

        $this->assertTrue($result->isOK());

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals('application/json; charset=UTF-8', $response->getHeader('Content-Type')
            ->getValue());

        $json = json_decode($response->getBody());
        $this->assertNotNull($json);
        $this->assertObjectHasAttribute('success', $json);
        $this->assertObjectHasAttribute('data', $json);
        $this->assertCount(5, $json->data);
    }


    public function testDeleteFail()
    {
        $result = $this
            ->controller(Queens::class)
            ->execute('delete', 99);

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(404, $response->getStatusCode());
    }

    public function testIndex()
    {
        $result = $this
            ->controller(Queens::class)
            ->execute('index');

        $this->assertTrue($result->isOK());

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals('application/json; charset=UTF-8', $response->getHeader('Content-Type')
            ->getValue());

        $json = json_decode($response->getBody());
        $this->assertNotNull($json);
        $this->assertObjectHasAttribute('success', $json);
        $this->assertObjectHasAttribute('data', $json);
        $this->assertCount(6, $json->data);
        $this->assertEquals('Q-SH-2019-1', $json->data[0]->name);
    }

    public function testUpdate()
    {
        $expected = 'Update Test';
        $data = ['name' => $expected, 'item_version' => 1];
        $result = $this
            ->withBody(json_encode($data))
            ->controller(Queens::class)
            ->execute('update', 1);

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(204, $response->getStatusCode());

        $result = $this
            ->controller(Queens::class)
            ->execute('index');

        $this->assertTrue($result->isOK());

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals('application/json; charset=UTF-8', $response->getHeader('Content-Type')
            ->getValue());

        $json = json_decode($response->getBody());
        $this->assertNotNull($json);
        $this->assertObjectHasAttribute('success', $json);
        $this->assertObjectHasAttribute('data', $json);
        $this->assertCount(6, $json->data);
        $this->assertEquals($expected, $json->data[0]->name);
    }

    public function testUpdateFail()
    {
        $expected = 'Update Test';
        $data = ['name' => $expected];
        $result = $this
            ->withBody(json_encode($data))
            ->controller(Queens::class)
            ->execute('update', 1);

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(400, $response->getStatusCode());
    }

    public function testUpdateFailNotFound()
    {
        $expected = 'Update Test';
        $data = ['name' => $expected, 'item_version' => 1];
        $result = $this
            ->withBody(json_encode($data))
            ->controller(Queens::class)
            ->execute('update', 99);

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(404, $response->getStatusCode());
    }

    public function testUpdateFailVersion()
    {
        $expected = 'Update Test';
        $data = ['name' => $expected, 'item_version' => 99];
        $result = $this
            ->withBody(json_encode($data))
            ->controller(Queens::class)
            ->execute('update', 1);

        /** @var Response $response */
        $response = $result->response();
        $this->assertEquals(409, $response->getStatusCode());
    }


}
