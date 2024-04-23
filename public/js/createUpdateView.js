import {getTableHtml} from "./getTableHtml.js";
import {htmlToDomElement} from "./htmlToDomElement.js";
import {removePreviousTable} from "./removePreviousTable.js";

export let createUpdateView = (data) => {
    let tableHtml = getTableHtml(data);
    let tableElement = htmlToDomElement(tableHtml);
    removePreviousTable();
    let container = document.querySelector('#dropdown-container');
    container.after(tableElement);

};