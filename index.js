'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
            t.classList.remove('active');
        });
        tab.classList.add('active');
        id = parseInt(tab.getAttribute('data-id')); // Convertendo para número
        contents.forEach(function (box) {
            box.classList.remove('show');
            box.classList.add('hide');
            if (parseInt(box.getAttribute('data-content')) === id) { // Comparando como número
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});
    