define(["exports", "jquery", "utils/utils", "utils/bootstrapMedia", "utils/debounce", "abstract-nav"], function (exports, _jquery, _utils, _bootstrapMedia, _debounce, _abstractNav) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Nav = undefined;

    var _jquery2 = _interopRequireDefault(_jquery);

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

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Nav = exports.Nav = function (_AbstractNav) {
        _inherits(Nav, _AbstractNav);

        function Nav() {
            _classCallCheck(this, Nav);

            var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this));

            _this.$cont = (0, _jquery2.default)('#nav');
            _this.$list = (0, _jquery2.default)('#nav-list');
            _this.$item = _this.$list.find('.nav-item');
            _this.$link = _this.$list.find('.nav-link');
            _this.$links = _this.$cont.find('a').not('[target="_blank"]');

            _this.$btn = (0, _jquery2.default)('#nav-btn');
            _this.$overlay = (0, _jquery2.default)('#nav-overlay');

            _this.minifyLimit = _bootstrapMedia.BootstrapMedia.isMinMD() ? 165 : 50;

            _this.opened = false;
            return _this;
        }

        _createClass(Nav, [{
            key: "initEvents",
            value: function initEvents(router) {
                _get(Nav.prototype.__proto__ || Object.getPrototypeOf(Nav.prototype), "initEvents", this).call(this, router);

                if (router.options.ajaxEnabled) {
                    this.$links.on('click', router.onLinkClick.bind(router));
                }

                this.$btn.on('click', this.btnClick.bind(this));
                this.$overlay.on('click', this.close.bind(this));

                window.addEventListener('scroll', this.onScroll.bind(this));
                window.addEventListener('resize', (0, _debounce.debounce)(this.onResize.bind(this), 100, false));
            }
        }, {
            key: "destroyEvents",
            value: function destroyEvents(router) {

                _get(Nav.prototype.__proto__ || Object.getPrototypeOf(Nav.prototype), "destroyEvents", this).call(this, router);

                if (router.options.ajaxEnabled) {
                    this.$links.off('click', router.onLinkClick.bind(router));
                }

                this.$btn.off('click', this.btnClick.bind(this));
                this.$overlay.off('click', this.close.bind(this));

                window.removeEventListener('scroll', this.onScroll.bind(this));
                window.removeEventListener('resize', (0, _debounce.debounce)(this.onResize.bind(this), 100, false));
            }

            /**
             * Scroll
             */

        }, {
            key: "onScroll",
            value: function onScroll(e) {

                if (window.scrollY > this.minifyLimit) {
                    if (!this.minified) this.minify();
                } else {
                    if (this.minified) this.unminify();
                }
            }
        }, {
            key: "minify",
            value: function minify() {

                _utils.Utils.addClass(document.body, 'nav-minified');
                this.minified = true;
            }
        }, {
            key: "unminify",
            value: function unminify() {

                _utils.Utils.removeClass(document.body, 'nav-minified');
                this.minified = false;
            }

            /**
             * Btn click
             */

        }, {
            key: "btnClick",
            value: function btnClick(e) {
                if (!_bootstrapMedia.BootstrapMedia.isMinSM()) {
                    if (!this.opened) this.open();else this.close();
                }
            }
        }, {
            key: "open",
            value: function open() {
                if (!_bootstrapMedia.BootstrapMedia.isMinSM() && !this.opened) {

                    this.$cont[0].style.display = 'block';
                    TweenLite.fromTo(this.$cont, 0.4, { xPercent: -100 }, { xPercent: 0 });

                    this.$overlay[0].style.display = 'block';
                    TweenLite.to(this.$overlay, 1.2, { opacity: 1 });

                    this.opened = true;
                }
            }
        }, {
            key: "close",
            value: function close() {
                var _this2 = this;

                if (!_bootstrapMedia.BootstrapMedia.isMinSM() && this.opened) {

                    TweenLite.to(this.$cont, 0.4, { xPercent: -100, onComplete: function onComplete() {
                            if (!_this2.opened) _this2.$cont[0].style.display = 'none';
                            // document.body.removeAttribute('style');
                        } });

                    TweenLite.to(this.$overlay, 1.2, { opacity: 0, onComplete: function onComplete() {
                            _this2.$overlay[0].style.display = 'none';
                        } });

                    this.opened = false;
                }
            }
        }, {
            key: "onResize",
            value: function onResize() {}
        }]);

        return Nav;
    }(_abstractNav.AbstractNav);
});
//# sourceMappingURL=nav.js.map
