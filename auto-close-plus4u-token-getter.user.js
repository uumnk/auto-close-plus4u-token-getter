// ==UserScript==
// @name         Auto close Plus4U token getter
// @namespace    https://github.com/uumnk/auto-close-plus4u-token-getter
// @version      0.1
// @description  Auto close the page for getting token by insomnia-plugin-plus4u-oidc.
// @author       Monika
// @match        https://uuidentity.plus4u.net/uu-identitymanagement-maing01/a9b105aff2744771be4daa8361954677/showAuthorizationCode?clientId=F64b643R05xQ62696875W1j2
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const TIME_TO_CLOSE = 5000;

    let timer = setTimeout(() => {
        let win = window.open("", "_self");
        win.close();
    }, TIME_TO_CLOSE);
})();