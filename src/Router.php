<?php

declare(strict_types=1);

namespace Accounts;

use Accounts\Controllers\SiteController;
class Router
{
    public function execute()
    {
        $controller = new SiteController();
        $action = $_GET['action'] ?? 'index';
        if ($action == 'turnovers')
        {
            $id = (int) $_GET['id'];
            $controller->getUserTurnoversAction($id);
        }
        else
        {
            $controller->indexAction();
        }
    }
}