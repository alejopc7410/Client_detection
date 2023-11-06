'use strict';

/* ------------------------ Utility Functions ----------------------------- */
function select (selector, parent = document) {
    return parent.querySelector(selector);
}

function selectEvent (selector, event, callback) {
    return selector.addEventListener(event, callback);
}

function selectById (selector, parent = document) {
    return parent.getElementById(selector);
}

function selectAll (selector, parent = document) {
    return parent.querySelectorAll(selector);
}
/* ------------------------------------------------------------------------ */

const os = select('.os');
const language = select('.language');
const browser = select('.browser');
const width = select('.width');
const height = select('.height');
const orientation = select('.orientation');
const level = select('.level')
const status = select ('.status')
const wifi = select('.wifi-status')

/* ------------------------------------------------------------------------ */

function size () {
    const w = window.innerWidth;
    const h = window.innerHeight;

    browser.innerText = system()
    
    width.textContent = `Width: ${w}px`;
    height.textContent = `Height: ${h}px`;

    if (window.innerHeight > window.innerWidth) {
        return orientation.innerText = 'Orientation: Portrait';
    } else {
        return orientation.innerText = 'Orientation: Landscape';
    }
    
}

function system () {
    let nav = navigator.userAgent.toLowerCase();
    let lang = navigator.language;
    let oscpu = navigator.platform;
    let brow = '';

    switch (true) {
        case nav.includes('edge') || nav.includes('edg'):
            brow = 'Edge';
            break;
        case nav.includes('chrome'):
            brow = 'Chrome';
            break;
        case nav.includes('firefox'):
            brow = 'Firefox';
            break;
        default:
            brow = 'Unknown';
    }

    if (lang === 'es-419') {
        language.innerText = 'Language: es-ES';
    } else {
        language.innerText = `Language: ${lang}`;
    }

    if (oscpu.includes('Win32')) {
        os.innerText = 'OS: Windows';
    } else {
        os.innerText = `OS: Mac/iOS`;
    }

    return `Browser: ${brow}`;
}

function infoBattery () {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            status.innerText = `Battery Charging: ${battery.charging ? "Charging" : "Idle"}`;
            level.innerText = `Battery Level: ${Math.trunc(battery.level * 100)}%`;
        });
    } else {
        level.innerText = "No Avaible";
    }
    
    wifi.innerText = isOnline()
}

function isOnline() {
    if (navigator.onLine) {
        return 'Online';
    } else {
        wifi.style.background = '#ff0000';
        return 'Offline';
    }    
}

 

selectEvent (window, 'load', size)

selectEvent (window, 'resize', size)

selectEvent (window, 'load', infoBattery)

