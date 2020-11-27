define(["exports", "jquery", "TweenMax", "scrollTo", "utils/utils", "utils/scroll", "utils/bootstrapMedia"], function (exports, _jquery, _TweenMax, _scrollTo, _utils, _scroll, _bootstrapMedia) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Loader = undefined;

    var _jquery2 = _interopRequireDefault(_jquery);

    var _scrollTo2 = _interopRequireDefault(_scrollTo);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Loader = exports.Loader = function () {
        function Loader() {
            _classCallCheck(this, Loader);

            console.log('🌀 LOADER INIT');

            this.$cont = (0, _jquery2.default)('#loading');
            this.$inner = (0, _jquery2.default)('#loading-inner');

            _scroll.Scroll.disable(); // enable();
            // console.log('SCROLL DISABLE');
            // $(window).scrollTop(0);
            // TweenLite.to(window, 0.6, {scrollTo:{y:0, autokill:false}});

            this.context = 'static';
            this.$body = (0, _jquery2.default)('body');

            this.isHome = this.$body[0].className.indexOf('home') >= 0;

            this.active = true;

            this.showStatic();
        }

        _createClass(Loader, [{
            key: "showStatic",
            value: function showStatic() {
                // console.log('🌀 LOADER SHOW STATIC');
                TweenLite.to(window, 0.6, { scrollTo: { y: 0, autokill: false } });

                _utils.Utils.addClass(this.$body[0], 'loading-active');
                _utils.Utils.addClass(this.$body[0], 'static');
            }
        }, {
            key: "show",
            value: function show() {
                var _this = this;

                setTimeout(function () {
                    // console.log('🌀 LOADER SHOW');

                    var viewportSize = _utils.Utils.getViewportSize();

                    _this.$cont[0].style.display = 'block';
                    TweenLite.fromTo(_this.$cont, 1, { y: viewportSize.height }, { y: 0 });
                    TweenLite.fromTo(_this.$inner, 1, { y: -viewportSize.height }, { y: 0 });

                    _this.active = true;

                    _scroll.Scroll.disable();
                    TweenLite.to(window, 0.6, { scrollTo: { y: 0 }, delay: 0.4, autokill: false });

                    setTimeout(function () {
                        _utils.Utils.addClass(_this.$body[0], 'loading-active');
                    }, 1000);
                }, 50);
            }
        }, {
            key: "hide",
            value: function hide() {
                var _this2 = this;

                // console.log('🌀 LOADER HIDE');

                var hideDelay = 0.6;
                if (this.context == 'static' && this.isHome) hideDelay = 1.6;

                (0, _jquery2.default)(window).scrollTop(0);
                TweenLite.to(window, 0.6, { scrollTo: { y: 0, autokill: false } });
                _utils.Utils.removeClass(this.$body[0], 'loading-active');

                // console.log('🌀 LOADER HIDE ANIM');
                var viewportSize = _utils.Utils.getViewportSize();

                if (this.context == 'static') {}
                // else this.onHidden();

                TweenLite.to(this.$inner, 1, { y: viewportSize.height, delay: hideDelay });
                TweenLite.to(this.$cont, 1, { y: -viewportSize.height, delay: hideDelay, onComplete: function onComplete() {
                        _this2.onHidden();
                    } });
            }
        }, {
            key: "onHidden",
            value: function onHidden() {
                // console.log('🌀 LOADER ON HIDDEN');
                this.active = false;

                this.$cont[0].style.display = 'none';
                TweenLite.set(this.$cont, { x: 0, y: 0 });
                TweenLite.set(this.$inner, { x: 0, y: 0 });
                // console.log('SCROLL ENABLE');
                // $(window).scrollTop(0);
                _scroll.Scroll.enable();

                if (this.context == 'static') {
                    this.context = 'ajax';
                    _utils.Utils.removeClass(this.$body[0], 'static');
                    _utils.Utils.addClass(this.$body[0], 'ajax');
                    _utils.Utils.addClass(this.$cont[0], 'loading-ajax');
                    if (this.isHome) this.isHome = false;
                }
            }
        }]);

        return Loader;
    }();
});
//# sourceMappingURL=loader.js.map
