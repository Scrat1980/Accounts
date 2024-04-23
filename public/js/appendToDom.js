export let appendToDom = (tableElement) => {
    let container = document.querySelector('#dropdown-container');
    let table = document.querySelector('.table');
    if (table) {
        table.remove();
    }

    container.after(tableElement);

};
