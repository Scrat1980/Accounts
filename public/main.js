document.addEventListener('DOMContentLoaded', function () {
    let App = {};

    App.userSelector = document.querySelector('#users');

    App.getUserId = (e) => {
        let id = e.target.id * 1;

        if (! Number.isInteger(id))
        {
            return;
        }

        let turnovers = App.getTurnovers(id);

        App.draw(turnovers);
    }

    App.userSelector.addEventListener('click', App.getUserId);

    App.draw = (data) => {
        console.log(data);

    //     let cell = document.querySelector('#' + data.cell);
    //     console.log(data);
    //     // console.log(cell);
    //     if (cell) {
    //         cell.innerHTML = data.playerType;
    //     }

    };


    App.getTurnovers = (id) => {
        let url = 'http://localhost?action=turnovers&id=' + id;
        return fetch(url)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                return result;
            });
    };

    App.table = `<table class="table table-narrow table-bordered">
    <thead>
    <tr>
        <th scope="col">Month</th>
        <th scope="col">Balance</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><?= $turnover->month ?></td>
        <td><?= $turnover->value ?></td>
    </tr>
    </tbody>
</table>`;


});