<?php

declare(strict_types=1);

namespace Accounts\Repository;

use Accounts\Entity\User;
use DateTime;

class UserRepository extends Repository
{
    public function getTurnover(DateTime $dateObject, int $id): array
    {
        $year = $dateObject->format('Y');

        $monthCounter = new DateTime($year . '-01-01');
        $to = new DateTime($year . '-12-01');

        $turnover = [];
        while ($monthCounter <= $to)
        {
            $monthStart = clone $monthCounter;
            $monthEnd = clone $monthCounter;
            $monthEnd
                ->modify('+1 month')
                ->modify('-1 second')
            ;

//            echo $monthStart->format('Y-m-d H:i:s') . ' - '
//                . $monthEnd->format('Y-m-d H:i:s') . "\n";
            $parameters = [
                'id' => $id,
                'from' => $monthStart->format('Y-m-d H:i:s'),
                'to' => $monthEnd->format('Y-m-d H:i:s'),
            ];
            $turnover[] = $this->getMonthlyTurnover($parameters);

            $monthCounter->modify('+1 month');
        }

        return $turnover;
    }

    public function getUsersWithTransactions()
    {
        $query = "
SELECT
    u.id,
    u.name
FROM users u
         INNER JOIN user_accounts ua on u.id = ua.user_id
         LEFT JOIN transactions withdrawals ON withdrawals.account_from = ua.id
         LEFT JOIN transactions fulfills ON fulfills.account_to = ua.id
WHERE
    withdrawals.trdate BETWEEN '2024-01-01 00:00:00' AND '2024-12-31 23:59:59'
   OR fulfills.trdate BETWEEN '2024-01-01 00:00:00' AND '2024-12-31 23:59:59'
GROUP BY u.id
HAVING COUNT(withdrawals.amount) + COUNT(fulfills.amount) > 0
ORDER BY u.id
";

        return $this->execute($query, []);
    }

    private function getMonthlyTurnover($parameters)
    {
        $query = "SELECT
#    u.name,
#     ua.id,
#     withdrawals.account_from,
#    SUM(withdrawals.amount) AS withdrawals,
#     fulfills.account_to,
#    SUM(fulfills.amount) AS fulfills,
    IFNULL(SUM(
            CAST(fulfills.amount AS SIGNED)
            - withdrawals.amount
    ), 0)
        AS turnover
FROM users u
INNER JOIN user_accounts ua on u.id = ua.user_id
LEFT JOIN transactions withdrawals ON withdrawals.account_from = ua.id
LEFT JOIN transactions fulfills ON fulfills.account_to = ua.id
WHERE
    u.id =:id 
        AND
    (withdrawals.trdate BETWEEN :from AND :to
    OR fulfills.trdate BETWEEN :from AND :to)
GROUP BY u.id
ORDER BY u.id";

        return $this->execute($query, $parameters);
    }
}