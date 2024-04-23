import { userSelector } from "/js/selector.js";
import { getTableHtml, htmlToDomElement } from "/js/getTable.js";
import { appendToDom } from "/js/appendToDom.js";
import { getId } from "/js/getUserId.js";
import { UrlMachine } from "./js/UrlMachine.js";

document.addEventListener('DOMContentLoaded', function () {
    let createUpdateTurnoversTable = (e) => {
        let id = getId(e);
        let machine = Object.create(UrlMachine);
        fetch(machine.getUrl(id))
            .then(response => response.json())
            .then(result => process(result) );
    };

    userSelector.addEventListener('click', createUpdateTurnoversTable);

    let process = (result) => {
        let tableHtml = getTableHtml(result);
        let tableElement = htmlToDomElement(tableHtml);
        appendToDom(tableElement);
    };
});