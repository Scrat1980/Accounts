import { getTableHtml } from "/js/getTableHtml.js";
import { htmlToDomElement } from "/js/getTable.js";
import { getId } from "/js/getUserId.js";
import { UrlMachine } from "./js/UrlMachine.js";
import { removePreviousTable } from "./js/removePreviousTable.js";

document.addEventListener('DOMContentLoaded', function () {

    let userSelector = document.querySelector('#users');
    let createUpdateTurnoversTable = (e) => {
        let id = getId(e);
        let machine = Object.create(UrlMachine);
        fetch(machine.getUrl(id))
            .then(response => response.json())
            .then(turnoversData => process(turnoversData) );
    };

    userSelector.addEventListener('click', createUpdateTurnoversTable);

    let process = (data) => {
        let tableHtml = getTableHtml(data);
        let tableElement = htmlToDomElement(tableHtml);
        removePreviousTable();
        let container = document.querySelector('#dropdown-container');
        container.after(tableElement);

    };
});