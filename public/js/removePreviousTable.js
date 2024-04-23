export let removePreviousTable = () => {
    let table = document.querySelector('.table');
    if (table) {
        table.remove();
    }
}