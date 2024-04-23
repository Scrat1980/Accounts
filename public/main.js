import { getId } from "/js/getUserId.js";
import { UrlMachine } from "./js/UrlMachine.js";
import { createUpdateView } from "./js/createUpdateView.js";

document.addEventListener('DOMContentLoaded', function () {

    let userSelector = document.querySelector('#users');
    let renderView = (e) => {
        let id = getId(e);
        let machine = Object.create(UrlMachine);
        fetch(machine.getUrl(id))
            .then(response => response.json())
            .then(turnovers => createUpdateView(turnovers) );
    };

    userSelector.addEventListener('click', renderView);
});