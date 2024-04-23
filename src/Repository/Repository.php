<?php

declare(strict_types=1);

namespace Accounts\Repository;

use PDO;
use Accounts\MyPdo;
use Accounts\MyPdo2;

class Repository
{
    protected ?PDO $pdo;
    protected ?PDO $pdo2;

    public function __construct(
    )
    {
        $this->pdo = MyPdo::getPdo();
        $this->pdo2 = MyPdo2::getPdo();
    }

    public function query($query)
    {
        try {
            $statement = $this->pdo->query($query);
        } catch (\Exception $e) {
            $statement = $this->pdo2->query($query);
        }

        return $statement->fetch(PDO::FETCH_ASSOC) ?? null;

    }

    public function execute($query, $parameters = null)
    {
        try {
            $statement = $this->pdo->prepare($query);
        } catch (\Exception $e) {
            $statement = $this->pdo2->prepare($query);
        }

        if ($parameters)
        {
            $statement->execute($parameters);
        }
        else {
            $statement->execute();
        }

        return $statement->fetchAll(PDO::FETCH_OBJ);
    }
}