export let htmlToDomElement = (htmlElement) => {
    let div = document.createElement('div');
    div.innerHTML = htmlElement.trim();

    return div.firstChild;
};