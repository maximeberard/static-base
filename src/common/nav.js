/**
 * Copyright Maxime Bérard 2016
 *
 * @file nav.js
 * @copyright Maxime Bérard 2016
 * @author Maxime Bérard
 */
import $ from 'jquery';
import {AbstractNav} from 'abstract-nav';

export class Nav extends AbstractNav {
    constructor() {
        super();

        this.$cont = $('#nav');
        this.$links = this.$cont.find('a').not('[target="_blank"]');
    }

    initEvents(router) {
        super.initEvents(router);
        if (router.options.ajaxEnabled) {
            this.$links.on('click', router.onLinkClick.bind(router));
        }
    }
}
