document.addEventListener('DOMContentLoaded', function () {
    let App = {};

    App.userSelector = document.querySelector('#users');

    let div = document.createElement('div');

    App.getTable = (turnovers) => {
        let table = `
        <table class="table table-narrow table-bordered">
            <thead>
                <tr>
                    <th scope="col">Month</th>
                    <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
            `;

        for (const turnover of turnovers) {
            console.log(turnover);
            table += `
            <tr>
                <td>${turnover.month}</td>
                <td>${turnover.value}</td>
            </tr>
            `;
        }

        table += `
                </tbody>
            </table>
        `;

        div.innerHTML = table.trim();
        App.table = div.firstChild;

        return App.table;
    };

    App.getUserId = (e) => {
        let id = e.target.id * 1;

        if (! Number.isInteger(id))
        {
            return;
        }

        App.fetchTurnovers(id);
    }

    App.userSelector.addEventListener('click', App.getUserId);

    App.draw = (data) => {
        let container = document.querySelector('#dropdown-container');
        let table = document.querySelector('.table');
        if (table) {
            table.remove();
        }
        container.after(App.getTable(data));

    };


    App.fetchTurnovers = (id) => {
        let url = 'http://localhost?action=turnovers&id=' + id;
        const turnovers = fetch(url)
            .then(response => response.json())
            .then(result => {
                App.draw(result);
            });

    };

});