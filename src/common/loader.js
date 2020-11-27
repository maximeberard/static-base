/**
 * Copyright Maxime Bérard 2020
 *
 * @file loader.js
 * @copyright Maxime Bérard 2020
 * @author Maxime Bérard
 */
import $ from 'jquery';
import {TweenMax} from "TweenMax";
import scrollTo from "scrollTo";
import {Utils} from "utils/utils";
import {Scroll} from 'utils/scroll';
import {BootstrapMedia} from "utils/bootstrapMedia";

export class Loader {

    constructor() {
        console.log('🌀 LOADER INIT');

        this.$cont = $('#loading');
        this.$inner = $('#loading-inner');

        Scroll.disable(); // enable();
        // console.log('SCROLL DISABLE');
        // $(window).scrollTop(0);
        // TweenLite.to(window, 0.6, {scrollTo:{y:0, autokill:false}});

        this.context = 'static';
        this.$body = $('body');

        this.isHome = (this.$body[0].className.indexOf('home') >= 0);

        this.active = true;

        this.showStatic();
    }

    showStatic () {
        // console.log('🌀 LOADER SHOW STATIC');
        TweenLite.to(window, 0.6, {scrollTo:{y:0, autokill:false}});

        Utils.addClass(this.$body[0],'loading-active');
        Utils.addClass(this.$body[0],'static');
    }

    show () {

        setTimeout(() => {
            // console.log('🌀 LOADER SHOW');
            
            let viewportSize = Utils.getViewportSize();
                
            this.$cont[0].style.display = 'block';
            TweenLite.fromTo(this.$cont, 1,  {y:viewportSize.height}, {y:0});
            TweenLite.fromTo(this.$inner, 1, {y:-viewportSize.height}, {y:0});
            
            this.active = true;

            Scroll.disable();
            TweenLite.to(window, 0.6, {scrollTo:{y:0}, delay:0.4, autokill:false});

            setTimeout(() => {
                Utils.addClass(this.$body[0], 'loading-active');
            }, 1000);

        }, 50);
    }

    hide () {
        // console.log('🌀 LOADER HIDE');

        let hideDelay = 0.6;
        if (this.context == 'static' && this.isHome) hideDelay = 1.6;

        $(window).scrollTop(0);
        TweenLite.to(window, 0.6, {scrollTo:{y:0, autokill:false}});
        Utils.removeClass(this.$body[0],'loading-active');
        
        // console.log('🌀 LOADER HIDE ANIM');
        let viewportSize = Utils.getViewportSize();

        if (this.context == 'static'){
        }
        // else this.onHidden();
            
        TweenLite.to(this.$inner, 1, {y:viewportSize.height, delay:hideDelay});
        TweenLite.to(this.$cont, 1, {y:-viewportSize.height, delay:hideDelay, onComplete: () => {
            this.onHidden();
        }});
    }

    onHidden () {
        // console.log('🌀 LOADER ON HIDDEN');
        this.active = false;

        this.$cont[0].style.display = 'none';
        TweenLite.set(this.$cont, {x:0, y:0});
        TweenLite.set(this.$inner, {x:0, y:0});
        // console.log('SCROLL ENABLE');
        // $(window).scrollTop(0);
        Scroll.enable();

        if (this.context == 'static') {
            this.context = 'ajax';
            Utils.removeClass(this.$body[0],'static');
            Utils.addClass(this.$body[0],'ajax');
            Utils.addClass(this.$cont[0], 'loading-ajax');
            if (this.isHome) this.isHome = false;
        }
    }
}
