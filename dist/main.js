define(["jquery", "TweenMax", "isMobile", "utils/utils", "utils/polyfills", "utils/gaTrackErrors", "common/nav", "router", "graphicLoader", "class-factory"], function (_jquery, _TweenMax, _isMobile, _utils, _polyfills, _gaTrackErrors, _nav, _router, _graphicLoader, _classFactory) {
  "use strict";

  var _jquery2 = _interopRequireDefault(_jquery);

  var _TweenMax2 = _interopRequireDefault(_TweenMax);

  var _isMobile2 = _interopRequireDefault(_isMobile);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // import {Page} from "pages/page";

  /**
   * 
   * Set default Tween ease
   */
  TweenLite.defaultEase = Expo.easeOut;

  /**
   * Log credits
   */
  // Utils.logCredits(
  //     'StaticBase',
  //     '#fff',
  //     [
  //          { name:'Maxime Bérard', website:'www.maximeberard.com' }
  //     ],
  //     [
  //         { name:'GSAP', website:'www.greensock.com' }
  //     ],
  //     '#000'
  // );

  /*
   * Declare polyfills
   */
  (0, _polyfills.polyfills)();

  /**
   * Tracks erros with Analytics
   */
  (0, _gaTrackErrors.gaTrackErrors)();

  /*
   * Define vars
   */
  var $body = (0, _jquery2.default)('body');
  var nodeType = $body[0].getAttribute('data-node-type') || 'page';
  var dataHome = $body[0].getAttribute('data-is-home');
  var bodyId = $body[0].id;
  var isHome = dataHome == '1' ? true : false;

  /*
   * isMobile Test
   */
  var deviceMobile = _isMobile2.default.any === false ? false : true;
  if (deviceMobile) _utils.Utils.addClass($body[0], 'is-mobile');else _utils.Utils.addClass($body[0], 'is-desktop');

  /*
   * IE Test
   */
  if (navigator.userAgent.indexOf('MSIE') >= 0 || navigator.userAgent.indexOf('Trident') >= 0) {
    _utils.Utils.addClass($body[0], 'ie');
  }

  /**
   * Launch router
   */
  var router = new _router.Router({
    homeHasClass: false,
    ajaxEnabled: false,
    pageClass: 'page-container'
  }, new _classFactory.ClassFactory(),
  // temp namespace is defined in your Resources/views/base.twig.html
  temp.baseUrl, new _graphicLoader.GraphicLoader(), new _nav.Nav());
  router.initEvents();
  router.boot((0, _jquery2.default)('.page-container').eq(0), 'static', isHome);
});
//# sourceMappingURL=main.js.map
