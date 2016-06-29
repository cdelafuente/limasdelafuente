# limasdelafuente

Website project for [limasdelafuente.com.mx](http://limasdelafuente.com.mx)

## Requirements

PHP needs to be at least version 5.3.9. For PHP, JSON and ctype support needs to be enabled. Also, `php.ini` needs to have the `date.timezone` setting.

## Installation

1. Get composer

        curl -sS https://getcomposer.org/installer | php

2. Get dependencies

        php composer.phar install

## Development


### Running a Web Server

If you have PHP 5.4 installed you can alternatively use the PHP internal
web server

    php app/console server:run
