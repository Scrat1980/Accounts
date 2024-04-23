<?php

declare(strict_types=1);

namespace Accounts\Entity;

use DateTime;

class Transaction
{
    public ?int $id;
    public ?int $accountFrom = null;
    public ?int $accountTo = null;
    public ?float $amount = null;
    public ?DateTime $tradeDate = null;
}