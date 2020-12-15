# Sencha Ext JS and CodeIgniter4 Apiary Logger
A demo Apiary Logger project demonstrating a project with CodeIgniter4 backend and Sencha Ext JS frontend.

## Quick Start Instructions

This project requires a working PHP 7.2+ installation capable of running version 4.0.4 of CodeIgniter4 as installed by ``composer``. A local SQLite3 database is used for this demonstration. Migrations and Seeders are provided in the project.

```
cd back-end
composer install
php spark migrate
php spark db:seed Demonstration
```

## Todos

I have planned to complete this project with the following functions in future versions:

* Document RESTful API
* Add authentication
* Add phone profile using Sencha's best-practices
