<div class="btn-group" id="dropdown-container">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        User
    </button>
    <div class="dropdown-menu" id="users">
        <?php foreach ($usersWithTransactions as $user) { ?>
        <a class="dropdown-item" id="<?=$user->id?>" href="#">
            <?=$user->name?>
        </a>
        <?php } ?>
    </div>
</div>