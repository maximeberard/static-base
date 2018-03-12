requirejs.config({
    baseUrl: '/dist',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
        waitForImages: '/bower_components/waitForImages/dist/jquery.waitforimages.min',
        TweenLite: "/bower_components/gsap/src/minified/TweenLite.min",
        TweenMax: "/bower_components/gsap/src/minified/TweenMax.min",
        scrollTo: "/bower_components/gsap/src/minified/plugins/ScrollToPlugin.min",
        isMobile: "/bower_components/isMobile/isMobile.min",
        actual: "/bower_components/jquery.actual/jquery.actual.min",
        Hammer: "/bower_components/hammerjs/hammer.min",
        // Utils functions and classes
        "utils/utils": "/bower_components/starting-blocks/dist/utils/utils",
        "utils/polyfills": "/bower_components/starting-blocks/dist/utils/polyfills",
        "utils/gaTrackErr": "/bower_components/starting-blocks/dist/utils/gaTrackErrors",
        "utils/debounce": "/bower_components/starting-blocks/dist/utils/debounce",
        "utils/scroll": "/bower_components/starting-blocks/dist/utils/scroll",
        "utils/gaTrackErrors": "/bower_components/starting-blocks/dist/utils/gaTrackErrors",
        "utils/bootstrapMedia": "/bower_components/starting-blocks/dist/utils/bootstrapMedia",
        // Include current page-block sources from their location in bower_components
        // if you are using bower to fetch this lib.
        "state": "/bower_components/starting-blocks/dist/state",
        "router": "/bower_components/starting-blocks/dist/router",
        "graphicLoader": "/bower_components/starting-blocks/dist/graphicLoader",
        "abstract-nav": "/bower_components/starting-blocks/dist/abstract-nav",
        "abstract-page": "/bower_components/starting-blocks/dist/abstract-page",
        "abstract-block": "/bower_components/starting-blocks/dist/abstract-block",
        // If you want to use example Page and Home classes in your project
        // "pages/page": "/bower_components/starting-blocks/dist/pages/page"
    }
});

// requirejs.onError = function (err) {
//    console.log(err.requireType);
//    console.log('modules: ' + err.requireModules);
//    throw err;
// };

require(['main']);

