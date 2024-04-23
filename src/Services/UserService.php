<?php

declare(strict_types=1);

namespace Accounts\Services;

use Accounts\Repository\UserRepository;
use DateTime;

class UserService
{
    private UserRepository $userRepository;

    public function __construct()
    {
        $this->userRepository = new UserRepository();
    }
    public function getTurnoversByUserId(int $id): array|null
    {
        $year = new DateTime();

        return $this->userRepository->getTurnover($year, $id);
    }

    public function getUsersWithTransactions(): array|null
    {
        return $this->userRepository->getUsersWithTransactions();
    }
}