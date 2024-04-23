export let htmlToDomElement = (htmlElement) => {
    let div = document.createElement('div');
    div.innerHTML = htmlElement.trim();

    return div.firstChild;
};

export let getTableHtml = (turnovers) => {
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

    return table;
};