# Sencha Ext JS and CodeIgniter4 Apiary Logger
A demo Apiary Logger project demonstrating a project with CodeIgniter4 backend and Sencha Ext JS frontend.

## Quick Start Instructions

This project requires a working PHP 7.2+ installation capable of running version 4.0.4 of CodeIgniter4 as installed by ``composer``. A local SQLite3 database is used for this demonstration. Migrations and Seeders are provided in the project.

Clone this project to your local machine

```
git clone https://github.com/tangix/ci4-apiary-logger.git
cd ci4-apiary-logger
```

Prepare the demo by installing the framework using ``composer``, seed the database and then start ``spark``'s web-server.

```
cd back-end
composer install
php spark migrate
php spark db:seed Demonstration
php spark serve --host 127.0.0.1
```

The ``--host`` argument seems to be needed on macOS to enable IPv4 support in PHP's built-in web-server. 

After spark's server is started, navigate to http://127.0.0.1:8080 in your browser. You should be presented with the start page.

## Todos

I have planned to complete this project with the following functions in future versions:

* Document the project files and thoughts
* Document RESTful API
* Add authentication
* Add phone profile using Sencha's best-practices
