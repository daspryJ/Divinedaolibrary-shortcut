// ==UserScript==
// @name         divinedaolibrary shortcut
// @namespace    https://github.com/daspryJ/Divinedaolibrary-shortcut
// @version      0.1
// @description  next/prev chapter shortcuts
// @author       daspryJ
// @match        https://www.divinedaolibrary.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=divinedaolibrary.com
// @grant        none
// ==/UserScript==

document.onkeyup = function(e) { // key pressed
    if(document.activeElement.nodeName === "INPUT"
    || document.activeElement.nodeName === "TEXTAREA") {
        return; // abort if focusing input box
    }

    var elems = document.getElementsByTagName("a"),
        links = {};

    for(var i = elems.length-1; i >= 0; i--) { // filter link elements
        var elem = elems[i];
        if(elem.rel === "prev") { // add prev to links object
            links.prev = elem;
        } else if(elem.rel === "next") { // ad next to links object
            links.next = elem;
        }
    }
    if(!links.next) {
       links.next = document.getElementsByClassName("next-special")[0]; // ad next to links object for new chapters
    }

    if(e.keyCode === 37) { // left key
        location.href = links.prev.href;
    } else if(e.keyCode === 39) { // right key
        location.href = links.next.href;
    }
};
