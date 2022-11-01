'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">dea documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"' : 'data-target="#xs-components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"' : 'id="xs-components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DialogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DialogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MainPageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainPageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavigationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavigationComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PuzzleGameComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PuzzleGameComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DeaModule.html\" data-type=\"entity-link\" >DeaModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' : 'data-target="#xs-components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' : 'id="xs-components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/CytoGraphComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CytoGraphComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DeaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeaComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' : 'data-target="#xs-injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' : 'id="xs-injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/DeaService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeaService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/GrammarModule.html\" data-type=\"entity-link\" >GrammarModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' : 'data-target="#xs-components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' : 'id="xs-components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/GrammarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GrammarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/GrammarGraphComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GrammarGraphComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' : 'data-target="#xs-injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' : 'id="xs-injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/GrammarGraphService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GrammarGraphService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/GrammarService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >GrammarService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PuzzleModule.html\" data-type=\"entity-link\" >PuzzleModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"' : 'data-target="#xs-components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"' : 'id="xs-components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PuzzleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PuzzleComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StartGameModule.html\" data-type=\"entity-link\" >StartGameModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' : 'data-target="#xs-components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' : 'id="xs-components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/StartGameComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StartGameComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TableComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TableComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' : 'data-target="#xs-injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' : 'id="xs-injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/MyCounterComponent.html\" data-type=\"entity-link\" >MyCounterComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/DEAException.html\" data-type=\"entity-link\" >DEAException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DemoForceDirectedLayout.html\" data-type=\"entity-link\" >DemoForceDirectedLayout</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ExpressionGrammarModel.html\" data-type=\"entity-link\" >ExpressionGrammarModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RuleSetInterface.html\" data-type=\"entity-link\" >RuleSetInterface</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/WordChecker.html\" data-type=\"entity-link\" >WordChecker</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/WordGenerator.html\" data-type=\"entity-link\" >WordGenerator</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CytoGraphService.html\" data-type=\"entity-link\" >CytoGraphService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/DeaArray.html\" data-type=\"entity-link\" >DeaArray</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DeaLink.html\" data-type=\"entity-link\" >DeaLink</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DeaNode.html\" data-type=\"entity-link\" >DeaNode</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DialogData.html\" data-type=\"entity-link\" >DialogData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FourTuple.html\" data-type=\"entity-link\" >FourTuple</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GrammarModel.html\" data-type=\"entity-link\" >GrammarModel</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GrammarState.html\" data-type=\"entity-link\" >GrammarState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User-1.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User-2.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));