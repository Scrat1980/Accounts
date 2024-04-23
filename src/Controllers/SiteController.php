<?php

declare(strict_types=1);

namespace Accounts\Controllers;

use Accounts\Services\UserService;

class SiteController
{
    private UserService $userService;

    public function __construct()
    {
        $this->userService = new UserService();
    }
    public function indexAction(): void
    {
        $usersWithTransactions = $this->userService
            ->getUsersWithTransactions();

        include dirname(__DIR__, 1) . '/View/page.tpl';
        include dirname(__DIR__, 1) . '/View/dropdown.tpl';
        include dirname(__DIR__, 1) . '/View/table.tpl';

    }

    public function getUserTurnoversAction($userId): void
    {
        $turnovers = $this->userService->getTurnoversByUserId($userId);

        echo json_encode($turnovers);
    }
}