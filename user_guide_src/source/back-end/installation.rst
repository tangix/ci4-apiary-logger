#######################
Installation and Setup
#######################

After downloading this repository to a supported system, move to the ``back-end`` directory and 
execute a ``composer install`` to install requirements.

Default configuration is to use SQLite3 database to a local file in CodeIgniter's ``writable`` directory.
To initialize the database, use ``spark`` and the supplied database migration and seeders for the sample 
data. After this, start the built in webserver.

.. code-block:: bash

	$ php spark migrate
	$ php spark db:seed Demonstration
	$ php spark serve --host 127.0.0.1

The ``--host 127.0.0.1`` seems to be necessary on macOS to make sure that PHP's built-in server listens 
to IPv4 which is a requirement for the communication between back- and front-end in this setup.

.. contents::
    :local:
    :depth: 1
