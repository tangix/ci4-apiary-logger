<?php namespace App\Controllers;

use Ulid\Ulid;

class Home extends BaseController
{
	public function index()
	{
		return redirect()->to('/front-end');
	}

	//--------------------------------------------------------------------

}
