/**
 * Copyright Maxime Bérard 2016
 *
 * @file page.js
 * @copyright Maxime Bérard 2016
 * @author Maxime Bérard
 */
import {AbstractPage} from "abstract-page";

export class Page extends AbstractPage {
    constructor(router, id, context, type, isHome){
        super(router, id, context, type, isHome);
    }
}
