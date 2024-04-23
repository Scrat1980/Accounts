<?php

declare(strict_types=1);

namespace Accounts;
use PDO;
class MyPdo2
{
    public static ?PDO $pdo = null;

    private function __construct()
    {
    }

    public static function getPdo(): ?PDO
    {
        if (! self::$pdo)
        {
            $servername = "127.0.0.1";
            $username = "db_user";
            $password = "password";
            $dbname = 'my_db';

            try {
                self::$pdo = new PDO(
                    "mysql:host=$servername;dbname=$dbname",
                    $username,
                    $password
                );
            } catch (\Exception $e) {

            }
        }

        return self::$pdo;
    }
}