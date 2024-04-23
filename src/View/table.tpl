<table class="table table-narrow table-bordered"
       <?php if (! isset($turnovers)) { echo 'style="display:none"'; } ?>
>
    <thead>
    <tr>
        <th scope="col">Month</th>
        <th scope="col">Balance</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <?php
            if (isset($turnovers)   ) {
                foreach ($turnovers as $turnover)
                    { ?>
                        <td><?= $turnover->month ?></td>
                        <td><?= $turnover->value ?></td>
                <?php }
            } ?>
    </tr>
    </tbody>
</table>