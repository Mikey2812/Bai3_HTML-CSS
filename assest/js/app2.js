let menu = $('.navbar_menu')
let box = $('.navbar_menu--box')
let menuItem = $('.menu_item')
let isOpen = true;
$(document).ready(function () {
    menu.click(() => {
        if (isOpen === true) {
            box.css('display', 'block');
            isOpen = false;
        }
        else {
            box.css('display', 'none');
            isOpen = true;
        }
    });
    menuItem.click(() => {
        box.css('display', 'none');
    });
});