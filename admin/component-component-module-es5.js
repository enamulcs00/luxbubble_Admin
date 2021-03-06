(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-component-module"], {
    /***/
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js ***!
      \*********************************************************************************/

    /*! exports provided: NotifierConfig, NotifierConfigToken, NotifierContainerComponent, NotifierModule, NotifierNotificationComponent, NotifierOptionsToken, NotifierService, notifierCustomConfigFactory, notifierDefaultConfigFactory, ??a, ??b, ??c */

    /***/
    function node_modulesAngularNotifier__ivy_ngcc__Fesm2015AngularNotifierJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierConfig", function () {
        return NotifierConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function () {
        return NotifierConfigToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function () {
        return NotifierContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierModule", function () {
        return NotifierModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function () {
        return NotifierNotificationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function () {
        return NotifierOptionsToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierService", function () {
        return NotifierService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function () {
        return notifierCustomConfigFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function () {
        return notifierDefaultConfigFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return NotifierQueueService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??b", function () {
        return NotifierTimerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??c", function () {
        return NotifierAnimationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notification
       *
       * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
       */


      function NotifierContainerComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "notifier-notification", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ready", function NotifierContainerComponent_li_1_Template_notifier_notification_ready_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.onNotificationReady($event);
          })("dismiss", function NotifierContainerComponent_li_1_Template_notifier_notification_dismiss_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r4.onNotificationDismiss($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var notification_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("notification", notification_r1);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          notification: a0
        };
      };

      function NotifierNotificationComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0, 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", ctx_r0.notification.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx_r0.notification));
        }
      }

      function NotifierNotificationComponent_ng_template_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierNotificationComponent_ng_template_1_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r4.onClickDismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NotifierNotificationComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NotifierNotificationComponent_ng_template_1_button_2_Template, 3, 0, "button", 4);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.notification.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.config.behaviour.showDismissButton);
        }
      }

      var NotifierNotification =
      /**
       * Constructor
       *
       * @param {?} options Notifier options
       */
      function NotifierNotification(options) {
        _classCallCheck(this, NotifierNotification);

        /**
         * The template to customize
         * the appearance of the notification
         */
        this.template = null;
        Object.assign(this, options); // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
        // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
        // is not possible due to the action queue concept.

        if (options.id === undefined) {
          this.id = "ID_".concat(new Date().getTime());
        }
      };

      if (false) {}
      /**
       * Notifiction options
       *
       * This interface describes which information are needed to create a new notification, or in other words, which information the external API
       * call must provide.
       * @record
       */


      function NotifierNotificationOptions() {}

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier queue service
       *
       * In general, API calls don't get processed right away. Instead, we have to queue them up in order to prevent simultanious API calls
       * interfering with each other. This, at least in theory, is possible at any time. In particular, animations - which potentially overlap -
       * can cause changes in JS classes as well as affect the DOM. Therefore, the queue service takes all actions, puts them in a queue, and
       * processes them at the right time (which is when the previous action has been processed successfully).
       *
       * Technical sidenote:
       * An action looks pretty similar to the ones within the Flux / Redux pattern.
       */


      var NotifierQueueService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function NotifierQueueService() {
          _classCallCheck(this, NotifierQueueService);

          this.actionStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.actionQueue = [];
          this.isActionInProgress = false;
        }
        /**
         * Push a new action to the queue, and try to run it
         *
         * @param {?} action Action object
         * @return {?}
         */


        _createClass(NotifierQueueService, [{
          key: "push",
          value: function push(action) {
            this.actionQueue.push(action);
            this.tryToRunNextAction();
          }
          /**
           * Continue with the next action (called when the current action is finished)
           * @return {?}
           */

        }, {
          key: "continue",
          value: function _continue() {
            this.isActionInProgress = false;
            this.tryToRunNextAction();
          }
          /**
           * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
           * @private
           * @return {?}
           */

        }, {
          key: "tryToRunNextAction",
          value: function tryToRunNextAction() {
            if (this.isActionInProgress || this.actionQueue.length === 0) {
              return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
            }

            this.isActionInProgress = true;
            this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
          }
        }]);

        return NotifierQueueService;
      }();

      NotifierQueueService.??fac = function NotifierQueueService_Factory(t) {
        return new (t || NotifierQueueService)();
      };

      NotifierQueueService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NotifierQueueService,
        factory: NotifierQueueService.??fac
      });
      /** @nocollapse */

      NotifierQueueService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierQueueService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier options
       * @record
       */


      function NotifierOptions() {}

      if (false) {}
      /**
       * Notifier configuration
       *
       * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
       * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
       * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
       */


      var NotifierConfig =
      /**
       * Constructor
       *
       * @param {?=} customOptions
       */
      function NotifierConfig() {
        var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, NotifierConfig);

        // Set default values
        this.animations = {
          enabled: true,
          hide: {
            easing: 'ease',
            offset: 50,
            preset: 'fade',
            speed: 300
          },
          overlap: 150,
          shift: {
            easing: 'ease',
            speed: 300
          },
          show: {
            easing: 'ease',
            preset: 'slide',
            speed: 300
          }
        };
        this.behaviour = {
          autoHide: 7000,
          onClick: false,
          onMouseover: 'pauseAutoHide',
          showDismissButton: true,
          stacking: 4
        };
        this.position = {
          horizontal: {
            distance: 12,
            position: 'left'
          },
          vertical: {
            distance: 12,
            gap: 10,
            position: 'bottom'
          }
        };
        this.theme = 'material'; // The following merges the custom options into the notifier config, respecting the already set default values
        // This linear, more explicit and code-sizy workflow is preferred here over a recursive one (because we know the object structure)
        // Technical sidenote: Objects are merged, other types of values simply overwritten / copied

        if (customOptions.theme !== undefined) {
          this.theme = customOptions.theme;
        }

        if (customOptions.animations !== undefined) {
          if (customOptions.animations.enabled !== undefined) {
            this.animations.enabled = customOptions.animations.enabled;
          }

          if (customOptions.animations.overlap !== undefined) {
            this.animations.overlap = customOptions.animations.overlap;
          }

          if (customOptions.animations.hide !== undefined) {
            Object.assign(this.animations.hide, customOptions.animations.hide);
          }

          if (customOptions.animations.shift !== undefined) {
            Object.assign(this.animations.shift, customOptions.animations.shift);
          }

          if (customOptions.animations.show !== undefined) {
            Object.assign(this.animations.show, customOptions.animations.show);
          }
        }

        if (customOptions.behaviour !== undefined) {
          Object.assign(this.behaviour, customOptions.behaviour);
        }

        if (customOptions.position !== undefined) {
          if (customOptions.position.horizontal !== undefined) {
            Object.assign(this.position.horizontal, customOptions.position.horizontal);
          }

          if (customOptions.position.vertical !== undefined) {
            Object.assign(this.position.vertical, customOptions.position.vertical);
          }
        }
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // tslint:disable variable-name

      /**
       * Injection Token for notifier options
       * @type {?}
       */


      var NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[angular-notifier] Notifier Options');
      /**
       * Injection Token for notifier configuration
       * @type {?}
       */

      var NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[anuglar-notifier] Notifier Config');
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier service
       *
       * This service provides access to the public notifier API. Once injected into a component, directive, pipe, service, or any other building
       * block of an applications, it can be used to show new notifications, and hide existing ones. Internally, it transforms API calls into
       * actions, which then get thrown into the action queue - eventually being processed at the right moment.
       */

      var NotifierService = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {?} notifierQueueService Notifier queue service
         * @param {?} config               Notifier configuration, optionally injected as a dependency
         */
        function NotifierService(notifierQueueService, config) {
          _classCallCheck(this, NotifierService);

          this.queueService = notifierQueueService;
          this.config = config;
        }
        /**
         * Get the notifier configuration
         *
         * @return {?} Notifier configuration
         */


        _createClass(NotifierService, [{
          key: "getConfig",
          value: function getConfig() {
            return this.config;
          }
          /**
           * API: Show a new notification
           *
           * @param {?} notificationOptions Notification options
           * @return {?}
           */

        }, {
          key: "show",
          value: function show(notificationOptions) {
            this.queueService.push({
              payload: notificationOptions,
              type: 'SHOW'
            });
          }
          /**
           * API: Hide a specific notification, given its ID
           *
           * @param {?} notificationId ID of the notification to hide
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide(notificationId) {
            this.queueService.push({
              payload: notificationId,
              type: 'HIDE'
            });
          }
          /**
           * API: Hide the newest notification
           * @return {?}
           */

        }, {
          key: "hideNewest",
          value: function hideNewest() {
            this.queueService.push({
              type: 'HIDE_NEWEST'
            });
          }
          /**
           * API: Hide the oldest notification
           * @return {?}
           */

        }, {
          key: "hideOldest",
          value: function hideOldest() {
            this.queueService.push({
              type: 'HIDE_OLDEST'
            });
          }
          /**
           * API: Hide all notifications at once
           * @return {?}
           */

        }, {
          key: "hideAll",
          value: function hideAll() {
            this.queueService.push({
              type: 'HIDE_ALL'
            });
          }
          /**
           * API: Shortcut for showing a new notification
           *
           * @param {?} type             Type of the notification
           * @param {?} message          Message of the notification
           * @param {?=} notificationId
           * @return {?}
           */

        }, {
          key: "notify",
          value: function notify(type, message, notificationId) {
            /** @type {?} */
            var notificationOptions = {
              message: message,
              type: type
            };

            if (notificationId !== undefined) {
              notificationOptions.id = notificationId;
            }

            this.show(notificationOptions);
          }
        }]);

        return NotifierService;
      }();

      NotifierService.??fac = function NotifierService_Factory(t) {
        return new (t || NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](NotifierConfigToken));
      };

      NotifierService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NotifierService,
        factory: NotifierService.??fac
      });
      /** @nocollapse */

      NotifierService.ctorParameters = function () {
        return [{
          type: NotifierQueueService
        }, {
          type: NotifierConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NotifierConfigToken]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: NotifierQueueService
          }, {
            type: NotifierConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NotifierConfigToken]
            }]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier container component
       * ----------------------------
       * This component acts as a wrapper for all notification components; consequently, it is responsible for creating a new notification
       * component and removing an existing notification component. Being more precicely, it also handles side effects of those actions, such as
       * shifting or even completely removing other notifications as well. Overall, this components handles actions coming from the queue service
       * by subscribing to its action stream.
       *
       * Technical sidenote:
       * This component has to be used somewhere in an application to work; it will not inject and create itself automatically, primarily in order
       * to not break the Angular AoT compilation. Moreover, this component (and also the notification components) set their change detection
       * strategy onPush, which means that we handle change detection manually in order to get the best performance. (#perfmatters)
       */


      var NotifierContainerComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {?} changeDetector       Change detector, used for manually triggering change detection runs
         * @param {?} notifierQueueService Notifier queue service
         * @param {?} notifierService      Notifier service
         */
        function NotifierContainerComponent(changeDetector, notifierQueueService, notifierService) {
          var _this = this;

          _classCallCheck(this, NotifierContainerComponent);

          this.changeDetector = changeDetector;
          this.queueService = notifierQueueService;
          this.config = notifierService.getConfig();
          this.notifications = []; // Connects this component up to the action queue, then handle incoming actions

          this.queueServiceSubscription = this.queueService.actionStream.subscribe(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            _this.handleAction(action).then(
            /**
            * @return {?}
            */
            function () {
              _this.queueService["continue"]();
            });
          });
        }
        /**
         * Component destroyment lifecycle hook, cleans up the observable subsciption
         * @return {?}
         */


        _createClass(NotifierContainerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.queueServiceSubscription) {
              this.queueServiceSubscription.unsubscribe();
            }
          }
          /**
           * Notification identifier, used as the ngFor trackby function
           *
           * @param {?} index        Index
           * @param {?} notification Notifier notification
           * @return {?} Notification ID as the unique identnfier
           */

        }, {
          key: "identifyNotification",
          value: function identifyNotification(index, notification) {
            return notification.id;
          }
          /**
           * Event handler, handles clicks on notification dismiss buttons
           *
           * @param {?} notificationId ID of the notification to dismiss
           * @return {?}
           */

        }, {
          key: "onNotificationDismiss",
          value: function onNotificationDismiss(notificationId) {
            this.queueService.push({
              payload: notificationId,
              type: 'HIDE'
            });
          }
          /**
           * Event handler, handles notification ready events
           *
           * @param {?} notificationComponent Notification component reference
           * @return {?}
           */

        }, {
          key: "onNotificationReady",
          value: function onNotificationReady(notificationComponent) {
            /** @type {?} */
            var currentNotification = this.notifications[this.notifications.length - 1];
            currentNotification.component = notificationComponent; // Save the new omponent reference

            this.continueHandleShowAction(currentNotification); // Continue with handling the show action
          }
          /**
           * Handle incoming actions by mapping action types to methods, and then running them
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleAction",
          value: function handleAction(action) {
            switch (action.type) {
              // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
              case 'SHOW':
                return this.handleShowAction(action);

              case 'HIDE':
                return this.handleHideAction(action);

              case 'HIDE_OLDEST':
                return this.handleHideOldestAction(action);

              case 'HIDE_NEWEST':
                return this.handleHideNewestAction(action);

              case 'HIDE_ALL':
                return this.handleHideAllAction(action);

              default:
                return new Promise(
                /**
                * @param {?} resolve
                * @param {?} reject
                * @return {?}
                */
                function (resolve, reject) {
                  resolve(); // Ignore unknown action types
                });
            }
          }
          /**
           * Show a new notification
           *
           * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleShowAction",
          value: function handleShowAction(action) {
            var _this2 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              _this2.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method

              _this2.addNotificationToList(new NotifierNotification(action.payload));
            });
          }
          /**
           * Continue to show a new notification (after the notification components is initialized / created / rendered).
           *
           * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
           * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
           * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
           * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
           *
           * @private
           * @param {?} notification New notification to show
           * @return {?}
           */

        }, {
          key: "continueHandleShowAction",
          value: function continueHandleShowAction(notification) {
            var _this3 = this;

            // First (which means only one) notification in the list?

            /** @type {?} */
            var numberOfNotifications = this.notifications.length;

            if (numberOfNotifications === 1) {
              notification.component.show().then(this.tempPromiseResolver); // Done
            } else {
              /** @type {?} */
              var implicitStackingLimit = 2; // Stacking enabled? (stacking value below 2 means stacking is disabled)

              if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
                this.notifications[0].component.hide().then(
                /**
                * @return {?}
                */
                function () {
                  _this3.removeNotificationFromList(_this3.notifications[0]);

                  notification.component.show().then(_this3.tempPromiseResolver); // Done
                });
              } else {
                /** @type {?} */
                var stepPromises = []; // Are there now too many notifications?

                if (numberOfNotifications > this.config.behaviour.stacking) {
                  /** @type {?} */
                  var oldNotifications = this.notifications.slice(1, numberOfNotifications - 1); // Are animations enabled?

                  if (this.config.animations.enabled) {
                    // Is animation overlap enabled?
                    if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                      stepPromises.push(this.notifications[0].component.hide());
                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        stepPromises.push(_this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                      }, this.config.animations.hide.speed - this.config.animations.overlap);
                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        stepPromises.push(notification.component.show());
                      }, this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                    } else {
                      stepPromises.push(new Promise(
                      /**
                      * @param {?} resolve
                      * @param {?} reject
                      * @return {?}
                      */
                      function (resolve, reject) {
                        _this3.notifications[0].component.hide().then(
                        /**
                        * @return {?}
                        */
                        function () {
                          _this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then(
                          /**
                          * @return {?}
                          */
                          function () {
                            notification.component.show().then(resolve);
                          });
                        });
                      }));
                    }
                  } else {
                    stepPromises.push(this.notifications[0].component.hide());
                    stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                    stepPromises.push(notification.component.show());
                  }
                } else {
                  /** @type {?} */
                  var _oldNotifications = this.notifications.slice(0, numberOfNotifications - 1); // Are animations enabled?


                  if (this.config.animations.enabled) {
                    // Is animation overlap enabled?
                    if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                      stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                      setTimeout(
                      /**
                      * @return {?}
                      */
                      function () {
                        stepPromises.push(notification.component.show());
                      }, this.config.animations.shift.speed - this.config.animations.overlap);
                    } else {
                      stepPromises.push(new Promise(
                      /**
                      * @param {?} resolve
                      * @param {?} reject
                      * @return {?}
                      */
                      function (resolve, reject) {
                        _this3.shiftNotifications(_oldNotifications, notification.component.getHeight(), true).then(
                        /**
                        * @return {?}
                        */
                        function () {
                          notification.component.show().then(resolve);
                        });
                      }));
                    }
                  } else {
                    stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                    stepPromises.push(notification.component.show());
                  }
                }

                Promise.all(stepPromises).then(
                /**
                * @return {?}
                */
                function () {
                  if (numberOfNotifications > _this3.config.behaviour.stacking) {
                    _this3.removeNotificationFromList(_this3.notifications[0]);
                  }

                  _this3.tempPromiseResolver();
                }); // Done
              }
            }
          }
          /**
           * Hide an existing notification
           *
           * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
           * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
           * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
           *
           * @private
           * @param {?} action Action object, payload contains the notification ID
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideAction",
          value: function handleHideAction(action) {
            var _this4 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              /** @type {?} */
              var stepPromises = []; // Does the notification exist / are there even any notifications? (let's prevent accidential errors)

              /** @type {?} */

              var notification = _this4.findNotificationById(action.payload);

              if (notification === undefined) {
                resolve();
                return;
              } // Get older notifications

              /** @type {?} */


              var notificationIndex = _this4.findNotificationIndexById(action.payload);

              if (notificationIndex === undefined) {
                resolve();
                return;
              }
              /** @type {?} */


              var oldNotifications = _this4.notifications.slice(0, notificationIndex); // Do older notifications exist, and thus do we need to shift other notifications as a consequence?


              if (oldNotifications.length > 0) {
                // Are animations enabled?
                if (_this4.config.animations.enabled && _this4.config.animations.hide.speed > 0) {
                  // Is animation overlap enabled?
                  if (_this4.config.animations.overlap !== false && _this4.config.animations.overlap > 0) {
                    stepPromises.push(notification.component.hide());
                    setTimeout(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                    }, _this4.config.animations.hide.speed - _this4.config.animations.overlap);
                  } else {
                    notification.component.hide().then(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                    });
                  }
                } else {
                  stepPromises.push(notification.component.hide());
                  stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                }
              } else {
                stepPromises.push(notification.component.hide());
              } // Wait until both hiding and shifting is done, then remove the notification from the list


              Promise.all(stepPromises).then(
              /**
              * @return {?}
              */
              function () {
                _this4.removeNotificationFromList(notification);

                resolve(); // Done
              });
            });
          }
          /**
           * Hide the oldest notification (bridge to handleHideAction)
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideOldestAction",
          value: function handleHideOldestAction(action) {
            // Are there any notifications? (prevent accidential errors)
            if (this.notifications.length === 0) {
              return new Promise(
              /**
              * @param {?} resolve
              * @param {?} reject
              * @return {?}
              */
              function (resolve, reject) {
                resolve();
              }); // Done
            } else {
              action.payload = this.notifications[0].id;
              return this.handleHideAction(action);
            }
          }
          /**
           * Hide the newest notification (bridge to handleHideAction)
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideNewestAction",
          value: function handleHideNewestAction(action) {
            // Are there any notifications? (prevent accidential errors)
            if (this.notifications.length === 0) {
              return new Promise(
              /**
              * @param {?} resolve
              * @param {?} reject
              * @return {?}
              */
              function (resolve, reject) {
                resolve();
              }); // Done
            } else {
              action.payload = this.notifications[this.notifications.length - 1].id;
              return this.handleHideAction(action);
            }
          }
          /**
           * Hide all notifications at once
           *
           * @private
           * @param {?} action Action object
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "handleHideAllAction",
          value: function handleHideAllAction(action) {
            var _this5 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Are there any notifications? (prevent accidential errors)

              /** @type {?} */
              var numberOfNotifications = _this5.notifications.length;

              if (numberOfNotifications === 0) {
                resolve(); // Done

                return;
              } // Are animations enabled?


              if (_this5.config.animations.enabled && _this5.config.animations.hide.speed > 0 && _this5.config.animations.hide.offset !== false && _this5.config.animations.hide.offset > 0) {
                var _loop = function _loop(i) {
                  /** @type {?} */
                  var animationOffset = _this5.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this5.notifications[i].component.hide().then(
                    /**
                    * @return {?}
                    */
                    function () {
                      // Are we done here, was this the last notification to be hidden?
                      if (_this5.config.position.vertical.position === 'top' && i === 0 || _this5.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1) {
                        _this5.removeAllNotificationsFromList();

                        resolve(); // Done
                      }
                    });
                  }, _this5.config.animations.hide.offset * animationOffset);
                };

                for (var i = numberOfNotifications - 1; i >= 0; i--) {
                  _loop(i);
                }
              } else {
                /** @type {?} */
                var stepPromises = [];

                for (var _i = numberOfNotifications - 1; _i >= 0; _i--) {
                  stepPromises.push(_this5.notifications[_i].component.hide());
                }

                Promise.all(stepPromises).then(
                /**
                * @return {?}
                */
                function () {
                  _this5.removeAllNotificationsFromList();

                  resolve(); // Done
                });
              }
            });
          }
          /**
           * Shift multiple notifications at once
           *
           * @private
           * @param {?} notifications List containing the notifications to be shifted
           * @param {?} distance      Distance to shift (in px)
           * @param {?} toMakePlace   Flag, defining in which direciton to shift
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "shiftNotifications",
          value: function shiftNotifications(notifications, distance, toMakePlace) {
            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Are there any notifications to shift?
              if (notifications.length === 0) {
                resolve();
                return;
              }
              /** @type {?} */


              var notificationPromises = [];

              for (var i = notifications.length - 1; i >= 0; i--) {
                notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
              }

              Promise.all(notificationPromises).then(resolve); // Done
            });
          }
          /**
           * Add a new notification to the list of notifications (triggers change detection)
           *
           * @private
           * @param {?} notification Notification to add to the list of notifications
           * @return {?}
           */

        }, {
          key: "addNotificationToList",
          value: function addNotificationToList(notification) {
            this.notifications.push(notification);
            this.changeDetector.markForCheck(); // Run change detection because the notification list changed
          }
          /**
           * Remove an existing notification from the list of notifications (triggers change detection)
           *
           * @private
           * @param {?} notification Notification to be removed from the list of notifications
           * @return {?}
           */

        }, {
          key: "removeNotificationFromList",
          value: function removeNotificationFromList(notification) {
            this.notifications = this.notifications.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return item.component !== notification.component;
            });
            this.changeDetector.markForCheck(); // Run change detection because the notification list changed
          }
          /**
           * Remove all notifications from the list (triggers change detection)
           * @private
           * @return {?}
           */

        }, {
          key: "removeAllNotificationsFromList",
          value: function removeAllNotificationsFromList() {
            this.notifications = [];
            this.changeDetector.markForCheck(); // Run change detection because the notification list changed
          }
          /**
           * Helper: Find a notification in the notification list by a given notification ID
           *
           * @private
           * @param {?} notificationId Notification ID, used for finding notification
           * @return {?} Notification, undefined if not found
           */

        }, {
          key: "findNotificationById",
          value: function findNotificationById(notificationId) {
            return this.notifications.find(
            /**
            * @param {?} currentNotification
            * @return {?}
            */
            function (currentNotification) {
              return currentNotification.id === notificationId;
            });
          }
          /**
           * Helper: Find a notification's index by a given notification ID
           *
           * @private
           * @param {?} notificationId Notification ID, used for finding a notification's index
           * @return {?} Notification index, undefined if not found
           */

        }, {
          key: "findNotificationIndexById",
          value: function findNotificationIndexById(notificationId) {
            /** @type {?} */
            var notificationIndex = this.notifications.findIndex(
            /**
            * @param {?} currentNotification
            * @return {?}
            */
            function (currentNotification) {
              return currentNotification.id === notificationId;
            });
            return notificationIndex !== -1 ? notificationIndex : undefined;
          }
        }]);

        return NotifierContainerComponent;
      }();

      NotifierContainerComponent.??fac = function NotifierContainerComponent_Factory(t) {
        return new (t || NotifierContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NotifierService));
      };

      NotifierContainerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NotifierContainerComponent,
        selectors: [["notifier-container"]],
        hostAttrs: [1, "notifier__container"],
        decls: 2,
        vars: 2,
        consts: [["class", "notifier__container-list", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notifier__container-list"], [3, "notification", "ready", "dismiss"]],
        template: function NotifierContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NotifierContainerComponent_li_1_Template, 2, 1, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.identifyNotification);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], NotifierNotificationComponent];
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NotifierContainerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: NotifierQueueService
        }, {
          type: NotifierService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // (#perfmatters)
            host: {
              "class": 'notifier__container'
            },
            selector: 'notifier-container',
            template: "<ul>\n\t<li class=\"notifier__container-list\" *ngFor=\"let notification of notifications; trackBy: identifyNotification;\">\n\t\t<notifier-notification\n\t\t\t[notification]=\"notification\"\n\t\t\t(ready)=\"onNotificationReady( $event )\"\n\t\t\t(dismiss)=\"onNotificationDismiss( $event )\">\n\t\t</notifier-notification>\n\t</li>\n</ul>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: NotifierQueueService
          }, {
            type: NotifierService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ??0 =
      /**
      * @return {?}
      */
      function ??0() {
        return {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        };
      },
          ??1 =
      /**
      * @return {?}
      */
      function ??1() {
        return {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        };
      };
      /**
       * Fade animation preset
       * @type {?}
       */


      var fade = {
        hide: ??0,
        show: ??1
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ??0$1 =
      /**
      * @param {?} notification
      * @return {?}
      */
      function ??0$1(notification) {
        // Prepare variables

        /** @type {?} */
        var config = notification.component.getConfig();
        /** @type {?} */

        var shift = notification.component.getShift();
        /** @type {?} */

        var from;
        /** @type {?} */

        var to; // Configure variables, depending on configuration and component

        if (config.position.horizontal.position === 'left') {
          from = {
            transform: "translate3d( 0, ".concat(shift, "px, 0 )")
          };
          to = {
            transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), ").concat(shift, "px, 0 )")
          };
        } else if (config.position.horizontal.position === 'right') {
          from = {
            transform: "translate3d( 0, ".concat(shift, "px, 0 )")
          };
          to = {
            transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), ").concat(shift, "px, 0 )")
          };
        } else {
          /** @type {?} */
          var horizontalPosition;

          if (config.position.vertical.position === 'top') {
            horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
          } else {
            horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
          }

          from = {
            transform: "translate3d( -50%, ".concat(shift, "px, 0 )")
          };
          to = {
            transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
          };
        } // Done


        return {
          from: from,
          to: to
        };
      },
          ??1$1 =
      /**
      * @param {?} notification
      * @return {?}
      */
      function ??1$1(notification) {
        // Prepare variables

        /** @type {?} */
        var config = notification.component.getConfig();
        /** @type {?} */

        var from;
        /** @type {?} */

        var to; // Configure variables, depending on configuration and component

        if (config.position.horizontal.position === 'left') {
          from = {
            transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), 0, 0 )")
          };
          to = {
            transform: 'translate3d( 0, 0, 0 )'
          };
        } else if (config.position.horizontal.position === 'right') {
          from = {
            transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), 0, 0 )")
          };
          to = {
            transform: 'translate3d( 0, 0, 0 )'
          };
        } else {
          /** @type {?} */
          var horizontalPosition;

          if (config.position.vertical.position === 'top') {
            horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
          } else {
            horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
          }

          from = {
            transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
          };
          to = {
            transform: 'translate3d( -50%, 0, 0 )'
          };
        } // Done


        return {
          from: from,
          to: to
        };
      };
      /**
       * Slide animation preset
       * @type {?}
       */


      var slide = {
        hide: ??0$1,
        show: ??1$1
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier animation service
       */

      var NotifierAnimationService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function NotifierAnimationService() {
          _classCallCheck(this, NotifierAnimationService);

          this.animationPresets = {
            fade: fade,
            slide: slide
          };
        }
        /**
         * Get animation data
         *
         * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
         * direction (either in or out) as well as the notifications (and its attributes) itself.
         *
         * @param {?} direction    Animation direction, either in or out
         * @param {?} notification Notification the animation data should be generated for
         * @return {?} Animation information
         */


        _createClass(NotifierAnimationService, [{
          key: "getAnimationData",
          value: function getAnimationData(direction, notification) {
            // Get all necessary animation data

            /** @type {?} */
            var keyframes;
            /** @type {?} */

            var duration;
            /** @type {?} */

            var easing;

            if (direction === 'show') {
              keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
              duration = notification.component.getConfig().animations.show.speed;
              easing = notification.component.getConfig().animations.show.easing;
            } else {
              keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
              duration = notification.component.getConfig().animations.hide.speed;
              easing = notification.component.getConfig().animations.hide.easing;
            } // Build and return animation data


            return {
              keyframes: [keyframes.from, keyframes.to],
              options: {
                duration: duration,
                easing: easing,
                fill: 'forwards' // Keep the newly painted state after the animation finished

              }
            };
          }
        }]);

        return NotifierAnimationService;
      }();

      NotifierAnimationService.??fac = function NotifierAnimationService_Factory(t) {
        return new (t || NotifierAnimationService)();
      };

      NotifierAnimationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NotifierAnimationService,
        factory: NotifierAnimationService.??fac
      });
      /** @nocollapse */

      NotifierAnimationService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierAnimationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier timer service
       *
       * This service acts as a timer, needed due to the still rather limited setTimeout JavaScript API. The timer service can start and stop a
       * timer. Furthermore, it can also pause the timer at any time, and resume later on. The timer API workd promise-based.
       */


      var NotifierTimerService = /*#__PURE__*/function () {
        /**
         * Constructor
         */
        function NotifierTimerService() {
          _classCallCheck(this, NotifierTimerService);

          this.now = 0;
          this.remaining = 0;
        }
        /**
         * Start (or resume) the timer
         *
         * @param {?} duration Timer duration, in ms
         * @return {?} Promise, resolved once the timer finishes
         */


        _createClass(NotifierTimerService, [{
          key: "start",
          value: function start(duration) {
            var _this6 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // For the first run ...
              _this6.remaining = duration; // Setup, then start the timer

              _this6.finishPromiseResolver = resolve;

              _this6["continue"]();
            });
          }
          /**
           * Pause the timer
           * @return {?}
           */

        }, {
          key: "pause",
          value: function pause() {
            clearTimeout(this.timerId);
            this.remaining -= new Date().getTime() - this.now;
          }
          /**
           * Continue the timer
           * @return {?}
           */

        }, {
          key: "continue",
          value: function _continue() {
            var _this7 = this;

            this.now = new Date().getTime();
            this.timerId = window.setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this7.finish();
            }, this.remaining);
          }
          /**
           * Stop the timer
           * @return {?}
           */

        }, {
          key: "stop",
          value: function stop() {
            clearTimeout(this.timerId);
            this.remaining = 0;
          }
          /**
           * Finish up the timeout by resolving the timer promise
           * @private
           * @return {?}
           */

        }, {
          key: "finish",
          value: function finish() {
            this.finishPromiseResolver();
          }
        }]);

        return NotifierTimerService;
      }();

      NotifierTimerService.??fac = function NotifierTimerService_Factory(t) {
        return new (t || NotifierTimerService)();
      };

      NotifierTimerService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NotifierTimerService,
        factory: NotifierTimerService.??fac
      });
      /** @nocollapse */

      NotifierTimerService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierTimerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Notifier notification component
       * -------------------------------
       * This component is responsible for actually displaying the notification on screen. In addition, it's able to show and hide this
       * notification, in particular to animate this notification in and out, as well as shift (move) this notification vertically around.
       * Furthermore, the notification component handles all interactions the user has with this notification / component, such as clicks and
       * mouse movements.
       */


      var NotifierNotificationComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {?} elementRef               Reference to the component's element
         * @param {?} renderer                 Angular renderer
         * @param {?} notifierService          Notifier service
         * @param {?} notifierTimerService     Notifier timer service
         * @param {?} notifierAnimationService Notifier animation service
         */
        function NotifierNotificationComponent(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
          _classCallCheck(this, NotifierNotificationComponent);

          this.config = notifierService.getConfig();
          this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.timerService = notifierTimerService;
          this.animationService = notifierAnimationService;
          this.renderer = renderer;
          this.element = elementRef.nativeElement;
          this.elementShift = 0;
        }
        /**
         * Component after view init lifecycle hook, setts up the component and then emits the ready event
         * @return {?}
         */


        _createClass(NotifierNotificationComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.setup();
            this.elementHeight = this.element.offsetHeight;
            this.elementWidth = this.element.offsetWidth;
            this.ready.emit(this);
          }
          /**
           * Get the notifier config
           *
           * @return {?} Notifier configuration
           */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this.config;
          }
          /**
           * Get notification element height (in px)
           *
           * @return {?} Notification element height (in px)
           */

        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.elementHeight;
          }
          /**
           * Get notification element width (in px)
           *
           * @return {?} Notification element height (in px)
           */

        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.elementWidth;
          }
          /**
           * Get notification shift offset (in px)
           *
           * @return {?} Notification element shift offset (in px)
           */

        }, {
          key: "getShift",
          value: function getShift() {
            return this.elementShift;
          }
          /**
           * Show (animate in) this notification
           *
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "show",
          value: function show() {
            var _this8 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Are animations enabled?
              if (_this8.config.animations.enabled && _this8.config.animations.show.speed > 0) {
                // Get animation data

                /** @type {?} */
                var animationData = _this8.animationService.getAnimationData('show', _this8.notification); // Set initial styles (styles before animation), prevents quick flicker when animation starts

                /** @type {?} */


                var animatedProperties = Object.keys(animationData.keyframes[0]);

                for (var i = animatedProperties.length - 1; i >= 0; i--) {
                  _this8.renderer.setStyle(_this8.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
                } // Animate notification in


                _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');
                /** @type {?} */


                var animation = _this8.element.animate(animationData.keyframes, animationData.options);

                animation.onfinish =
                /**
                * @return {?}
                */
                function () {
                  _this8.startAutoHideTimer();

                  resolve(); // Done
                };
              } else {
                // Show notification
                _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');

                _this8.startAutoHideTimer();

                resolve(); // Done
              }
            });
          }
          /**
           * Hide (animate out) this notification
           *
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "hide",
          value: function hide() {
            var _this9 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              _this9.stopAutoHideTimer(); // Are animations enabled?


              if (_this9.config.animations.enabled && _this9.config.animations.hide.speed > 0) {
                /** @type {?} */
                var animationData = _this9.animationService.getAnimationData('hide', _this9.notification);
                /** @type {?} */


                var animation = _this9.element.animate(animationData.keyframes, animationData.options);

                animation.onfinish =
                /**
                * @return {?}
                */
                function () {
                  resolve(); // Done
                };
              } else {
                resolve(); // Done
              }
            });
          }
          /**
           * Shift (move) this notification
           *
           * @param {?} distance         Distance to shift (in px)
           * @param {?} shiftToMakePlace Flag, defining in which direction to shift
           * @return {?} Promise, resolved when done
           */

        }, {
          key: "shift",
          value: function shift(distance, shiftToMakePlace) {
            var _this10 = this;

            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              // Calculate new position (position after the shift)

              /** @type {?} */
              var newElementShift;

              if (_this10.config.position.vertical.position === 'top' && shiftToMakePlace || _this10.config.position.vertical.position === 'bottom' && !shiftToMakePlace) {
                newElementShift = _this10.elementShift + distance + _this10.config.position.vertical.gap;
              } else {
                newElementShift = _this10.elementShift - distance - _this10.config.position.vertical.gap;
              }
              /** @type {?} */


              var horizontalPosition = _this10.config.position.horizontal.position === 'middle' ? '-50%' : '0'; // Are animations enabled?

              if (_this10.config.animations.enabled && _this10.config.animations.shift.speed > 0) {
                /** @type {?} */
                var animationData = {
                  // TODO: Extract into animation service
                  keyframes: [{
                    transform: "translate3d( ".concat(horizontalPosition, ", ").concat(_this10.elementShift, "px, 0 )")
                  }, {
                    transform: "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )")
                  }],
                  options: {
                    duration: _this10.config.animations.shift.speed,
                    easing: _this10.config.animations.shift.easing,
                    fill: 'forwards'
                  }
                };
                _this10.elementShift = newElementShift;
                /** @type {?} */

                var animation = _this10.element.animate(animationData.keyframes, animationData.options);

                animation.onfinish =
                /**
                * @return {?}
                */
                function () {
                  resolve(); // Done
                };
              } else {
                _this10.renderer.setStyle(_this10.element, 'transform', "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )"));

                _this10.elementShift = newElementShift;
                resolve(); // Done
              }
            });
          }
          /**
           * Handle click on dismiss button
           * @return {?}
           */

        }, {
          key: "onClickDismiss",
          value: function onClickDismiss() {
            this.dismiss.emit(this.notification.id);
          }
          /**
           * Handle mouseover over notification area
           * @return {?}
           */

        }, {
          key: "onNotificationMouseover",
          value: function onNotificationMouseover() {
            if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
              this.pauseAutoHideTimer();
            } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
              this.stopAutoHideTimer();
            }
          }
          /**
           * Handle mouseout from notification area
           * @return {?}
           */

        }, {
          key: "onNotificationMouseout",
          value: function onNotificationMouseout() {
            if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
              this.continueAutoHideTimer();
            } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
              this.startAutoHideTimer();
            }
          }
          /**
           * Handle click on notification area
           * @return {?}
           */

        }, {
          key: "onNotificationClick",
          value: function onNotificationClick() {
            if (this.config.behaviour.onClick === 'hide') {
              this.onClickDismiss();
            }
          }
          /**
           * Start the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "startAutoHideTimer",
          value: function startAutoHideTimer() {
            var _this11 = this;

            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService.start(this.config.behaviour.autoHide).then(
              /**
              * @return {?}
              */
              function () {
                _this11.onClickDismiss();
              });
            }
          }
          /**
           * Pause the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "pauseAutoHideTimer",
          value: function pauseAutoHideTimer() {
            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService.pause();
            }
          }
          /**
           * Continue the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "continueAutoHideTimer",
          value: function continueAutoHideTimer() {
            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService["continue"]();
            }
          }
          /**
           * Stop the auto hide timer (if enabled)
           * @private
           * @return {?}
           */

        }, {
          key: "stopAutoHideTimer",
          value: function stopAutoHideTimer() {
            if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
              this.timerService.stop();
            }
          }
          /**
           * Initial notification setup
           * @private
           * @return {?}
           */

        }, {
          key: "setup",
          value: function setup() {
            // Set start position (initially the exact same for every new notification)
            if (this.config.position.horizontal.position === 'left') {
              this.renderer.setStyle(this.element, 'left', "".concat(this.config.position.horizontal.distance, "px"));
            } else if (this.config.position.horizontal.position === 'right') {
              this.renderer.setStyle(this.element, 'right', "".concat(this.config.position.horizontal.distance, "px"));
            } else {
              this.renderer.setStyle(this.element, 'left', '50%'); // Let's get the GPU handle some work as well (#perfmatters)

              this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
            }

            if (this.config.position.vertical.position === 'top') {
              this.renderer.setStyle(this.element, 'top', "".concat(this.config.position.vertical.distance, "px"));
            } else {
              this.renderer.setStyle(this.element, 'bottom', "".concat(this.config.position.vertical.distance, "px"));
            } // Add classes (responsible for visual design)


            this.renderer.addClass(this.element, "notifier__notification--".concat(this.notification.type));
            this.renderer.addClass(this.element, "notifier__notification--".concat(this.config.theme));
          }
        }]);

        return NotifierNotificationComponent;
      }();

      NotifierNotificationComponent.??fac = function NotifierNotificationComponent_Factory(t) {
        return new (t || NotifierNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NotifierTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NotifierAnimationService));
      };

      NotifierNotificationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NotifierNotificationComponent,
        selectors: [["notifier-notification"]],
        hostAttrs: [1, "notifier__notification"],
        hostBindings: function NotifierNotificationComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierNotificationComponent_click_HostBindingHandler() {
              return ctx.onNotificationClick();
            })("mouseout", function NotifierNotificationComponent_mouseout_HostBindingHandler() {
              return ctx.onNotificationMouseout();
            })("mouseover", function NotifierNotificationComponent_mouseover_HostBindingHandler() {
              return ctx.onNotificationMouseover();
            });
          }
        },
        inputs: {
          notification: "notification"
        },
        outputs: {
          ready: "ready",
          dismiss: "dismiss"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([// We provide the timer to the component's local injector, so that every notification components gets its own
        // instance of the timer service, thus running their timers independently from each other
        NotifierTimerService])],
        decls: 3,
        vars: 2,
        consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["predefinedNotification", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "notifier__notification-message"], ["class", "notifier__notification-button", "type", "button", "title", "dismiss", 3, "click", 4, "ngIf"], ["type", "button", "title", "dismiss", 1, "notifier__notification-button", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "notifier__notification-button-icon"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],
        template: function NotifierNotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NotifierNotificationComponent_ng_container_0_Template, 1, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NotifierNotificationComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.notification.template)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      NotifierNotificationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: NotifierService
        }, {
          type: NotifierTimerService
        }, {
          type: NotifierAnimationService
        }];
      };

      NotifierNotificationComponent.propDecorators = {
        notification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dismiss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierNotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // (#perfmatters)
            host: {
              '(click)': 'onNotificationClick()',
              '(mouseout)': 'onNotificationMouseout()',
              '(mouseover)': 'onNotificationMouseover()',
              "class": 'notifier__notification'
            },
            providers: [// We provide the timer to the component's local injector, so that every notification components gets its own
            // instance of the timer service, thus running their timers independently from each other
            NotifierTimerService],
            selector: 'notifier-notification',
            template: "<ng-container *ngIf=\"notification.template; else predefinedNotification\" [ngTemplateOutlet]=\"notification.template\" [ngTemplateOutletContext]=\"{ notification: notification }\">\n</ng-container>\n\n<ng-template #predefinedNotification>\n\t<p class=\"notifier__notification-message\">{{ notification.message }}</p>\n\t<button class=\"notifier__notification-button\" type=\"button\" title=\"dismiss\" *ngIf=\"config.behaviour.showDismissButton\" (click)=\"onClickDismiss()\">\n\t\t<svg class=\"notifier__notification-button-icon\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n\t\t\t<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n\t\t</svg>\n\t</button>\n</ng-template>\n"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: NotifierService
          }, {
            type: NotifierTimerService
          }, {
            type: NotifierAnimationService
          }];
        }, {
          ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          notification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Factory for a notifier configuration with custom options
       *
       * Sidenote:
       * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
       *
       * @param {?} options - Custom notifier options
       * @return {?} - Notifier configuration as result
       */


      function notifierCustomConfigFactory(options) {
        return new NotifierConfig(options);
      }
      /**
       * Factory for a notifier configuration with default options
       *
       * Sidenote:
       * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
       *
       * @return {?} - Notifier configuration as result
       */


      function notifierDefaultConfigFactory() {
        return new NotifierConfig({});
      }
      /**
       * Notifier module
       */


      var NotifierModule = /*#__PURE__*/function () {
        function NotifierModule() {
          _classCallCheck(this, NotifierModule);
        }

        _createClass(NotifierModule, null, [{
          key: "withConfig",

          /**
           * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
           *
           * @param {?=} options
           * @return {?} - Notifier module with custom providers
           */
          value: function withConfig() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: NotifierModule,
              providers: [// Provide the options itself upfront (as we need to inject them as dependencies -- see below)
              {
                provide: NotifierOptionsToken,
                useValue: options
              }, // Provide a custom notifier configuration, based on the given notifier options
              {
                deps: [NotifierOptionsToken],
                provide: NotifierConfigToken,
                useFactory: notifierCustomConfigFactory
              }]
            };
          }
        }]);

        return NotifierModule;
      }();

      NotifierModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NotifierModule
      });
      NotifierModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NotifierModule_Factory(t) {
          return new (t || NotifierModule)();
        },
        providers: [NotifierAnimationService, NotifierService, NotifierQueueService, // Provide the default notifier configuration if just the module is imported
        {
          provide: NotifierConfigToken,
          useFactory: notifierDefaultConfigFactory
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NotifierModule, {
          declarations: function declarations() {
            return [NotifierContainerComponent, NotifierNotificationComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [NotifierContainerComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [NotifierContainerComponent, NotifierNotificationComponent],
            exports: [NotifierContainerComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [NotifierAnimationService, NotifierService, NotifierQueueService, // Provide the default notifier configuration if just the module is imported
            {
              provide: NotifierConfigToken,
              useFactory: notifierDefaultConfigFactory
            }]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-notifier.js.map

      /***/

    },

    /***/
    "./src/app/component/accordion/accordion.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/component/accordion/accordion.component.ts ***!
      \************************************************************/

    /*! exports provided: NgbdAccordionBasicComponent */

    /***/
    function srcAppComponentAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdAccordionBasicComponent", function () {
        return NgbdAccordionBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgbdAccordionBasicComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdAccordionBasicComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2605 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " title \u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdAccordionBasicComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Toggle first");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var opened_r22 = ctx.opened;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("First panel - ", opened_r22 ? "opened" : "collapsed", "");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Second panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Toggle second");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdAccordionBasicComponent_ng_template_73_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.disabled = !ctx_r23.disabled;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdAccordionBasicComponent_ng_template_73_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](68);

            return _r15.collapseAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Collapse all");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r18.disabled ? "En" : "Dis", "able third ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      function NgbdAccordionBasicComponent_ng_template_76_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "[I'm\xA0disabled]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdAccordionBasicComponent_ng_template_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Third panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, NgbdAccordionBasicComponent_ng_template_76_p_3_Template, 2, 0, "p", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r20.disabled);
        }
      }

      function NgbdAccordionBasicComponent_ng_template_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        }
      }

      var NgbdAccordionBasicComponent = /*#__PURE__*/function () {
        function NgbdAccordionBasicComponent() {
          _classCallCheck(this, NgbdAccordionBasicComponent);

          this.disabled = false;
        }

        _createClass(NgbdAccordionBasicComponent, [{
          key: "beforeChange",
          value: function beforeChange($event) {
            if ($event.panelId === 'preventchange-2') {
              $event.preventDefault();
            }

            if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
              $event.preventDefault();
            }
          }
        }]);

        return NgbdAccordionBasicComponent;
      }();

      NgbdAccordionBasicComponent.??fac = function NgbdAccordionBasicComponent_Factory(t) {
        return new (t || NgbdAccordionBasicComponent)();
      };

      NgbdAccordionBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdAccordionBasicComponent,
        selectors: [["app-ngbd-accordion-basic"]],
        decls: 78,
        vars: 4,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["activeIds", "ngb-panel-0"], ["acc", "ngbAccordion"], ["title", "Simple"], ["ngbPanelContent", ""], ["ngbPanelTitle", ""], ["title", "Disabled", 3, "disabled"], ["activeIds", "static-1", 3, "closeOthers"], ["id", "static-1", "title", "Simple"], ["id", "static-2"], ["id", "static-3", "title", "Disabled", 3, "disabled"], ["id", "toggle-1", "title", "First panel"], ["id", "toggle-2", "title", "Second"], [1, "m-t-40"], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], [3, "panelChange"], ["id", "preventchange-1", "title", "Simple"], ["id", "preventchange-2", "title", "I can't be toggled..."], ["id", "preventchange-3", "title", "I can be opened, but not closed..."], [1, "ml-2", "badge", "badge-success", "text-white"], ["activeIds", "custom-panel-1"], ["a", "ngbAccordion"], ["id", "custom-panel-1"], ["ngbPanelHeader", ""], [3, "disabled"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], ["ngbPanelToggle", "", 1, "btn", "btn-link", "p-0"], ["ngbPanelToggle", "", 1, "btn", "btn-sm", "btn-outline-primary", "ml-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "ml-2", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ml-2", 3, "click"], ["ngbPanelToggle", "", 1, "btn", "btn-link", "container-fluid", "text-left", "pl-0"], ["class", "text-muted m-0 small", 4, "ngIf"], [1, "text-muted", "m-0", "small"]],
        template: function NgbdAccordionBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Toggle Accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic toggletype accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-accordion", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ngb-panel", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, NgbdAccordionBasicComponent_ng_template_11_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngb-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, NgbdAccordionBasicComponent_ng_template_13_Template, 5, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NgbdAccordionBasicComponent_ng_template_14_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ngb-panel", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, NgbdAccordionBasicComponent_ng_template_16_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "This is One open panel accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ngb-accordion", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ngb-panel", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, NgbdAccordionBasicComponent_ng_template_25_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ngb-panel", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, NgbdAccordionBasicComponent_ng_template_27_Template, 5, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, NgbdAccordionBasicComponent_ng_template_28_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "ngb-panel", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NgbdAccordionBasicComponent_ng_template_30_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Toggle Panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "This is toggle panel accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ngb-accordion", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ngb-panel", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, NgbdAccordionBasicComponent_ng_template_40_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ngb-panel", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, NgbdAccordionBasicComponent_ng_template_42_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdAccordionBasicComponent_Template_button_click_44_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

              return _r0.toggle("toggle-1");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Toggle first");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdAccordionBasicComponent_Template_button_click_46_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

              return _r0.toggle("toggle-2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Toggle second");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Prevent panel toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "This is prevent toggle panel accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ngb-accordion", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("panelChange", function NgbdAccordionBasicComponent_Template_ngb_accordion_panelChange_54_listener($event) {
              return ctx.beforeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ngb-panel", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, NgbdAccordionBasicComponent_ng_template_56_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ngb-panel", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, NgbdAccordionBasicComponent_ng_template_58_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ngb-panel", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, NgbdAccordionBasicComponent_ng_template_60_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Custom header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "ngb-accordion", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "ngb-panel", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](70, NgbdAccordionBasicComponent_ng_template_70_Template, 5, 1, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, NgbdAccordionBasicComponent_ng_template_71_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "ngb-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, NgbdAccordionBasicComponent_ng_template_73_Template, 10, 1, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, NgbdAccordionBasicComponent_ng_template_74_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "ngb-panel", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, NgbdAccordionBasicComponent_ng_template_76_Template, 4, 1, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, NgbdAccordionBasicComponent_ng_template_77_Template, 1, 0, "ng-template", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("closeOthers", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.disabled);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPanelToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdAccordionBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-accordion-basic',
            templateUrl: 'accordion.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/alert/alert.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/alert/alert.component.ts ***!
      \****************************************************/

    /*! exports provided: NgbdAlertBasicComponent */

    /***/
    function srcAppComponentAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdAlertBasicComponent", function () {
        return NgbdAlertBasicComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgbdAlertBasicComponent_p_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ngb-alert", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("close", function NgbdAlertBasicComponent_p_18_Template_ngb_alert_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5);

            var alert_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r4.closeAlert(alert_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var alert_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("type", alert_r3.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](alert_r3.message);
        }
      }

      function NgbdAlertBasicComponent_ngb_alert_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngb-alert", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("close", function NgbdAlertBasicComponent_ngb_alert_28_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r6.staticAlertClosed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Check out our awesome new features!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function NgbdAlertBasicComponent_ngb_alert_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngb-alert", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("close", function NgbdAlertBasicComponent_ngb_alert_31_Template_ngb_alert_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r8.successMessage = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.successMessage);
        }
      }

      var NgbdAlertBasicComponent = /*#__PURE__*/function () {
        function NgbdAlertBasicComponent() {
          _classCallCheck(this, NgbdAlertBasicComponent);

          // this is for the Closeable Alert
          this.alerts = []; // End the Closeable Alert
          // This is for the self closing alert

          this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.staticAlertClosed = false;
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
          }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
          }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
          }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
          });
          this.backup = this.alerts.map(function (alert) {
            return Object.assign({}, alert);
          });
        }

        _createClass(NgbdAlertBasicComponent, [{
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.alerts = this.backup.map(function (alert) {
              return Object.assign({}, alert);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            setTimeout(function () {
              return _this12.staticAlertClosed = true;
            }, 20000);

            this._success.subscribe(function (message) {
              return _this12.successMessage = message;
            });

            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(5000)).subscribe(function () {
              return _this12.successMessage = null;
            });
          }
        }, {
          key: "changeSuccessMessage",
          value: function changeSuccessMessage() {
            this._success.next("".concat(new Date(), " - Message successfully changed."));
          }
        }]);

        return NgbdAlertBasicComponent;
      }();

      NgbdAlertBasicComponent.??fac = function NgbdAlertBasicComponent_Factory(t) {
        return new (t || NgbdAlertBasicComponent)();
      };

      NgbdAlertBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: NgbdAlertBasicComponent,
        selectors: [["app-ngbd-alert"]],
        inputs: {
          alerts: "alerts"
        },
        decls: 51,
        vars: 5,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [3, "dismissible"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "close", 4, "ngIf"], ["type", "success", 3, "close", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["type", "custom", 3, "dismissible"], [3, "type", "close"], [3, "close"], ["type", "success", 3, "close"]],
        template: function NgbdAlertBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Basic Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "This is basic alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Warning!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " Better check yourself, you're not looking too good. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Closeable Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "This is closeable alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, NgbdAlertBasicComponent_p_18_Template, 3, 2, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NgbdAlertBasicComponent_Template_button_click_20_listener() {
              return ctx.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Self Closing Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](28, NgbdAlertBasicComponent_ngb_alert_28_Template, 2, 0, "ngb-alert", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Show a self-closing success message that disappears after 5 seconds.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](31, NgbdAlertBasicComponent_ngb_alert_31_Template, 2, 1, "ngb-alert", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function NgbdAlertBasicComponent_Template_button_click_33_listener() {
              return ctx.changeSuccessMessage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Change message");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Custom Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "ngb-alert", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Whoa!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, " This is a custom alert.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Global Configuration of Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "ngb-alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, " This alert's type is success and it's not dismissible because the config has been customized ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.alerts);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.staticAlertClosed);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("dismissible", false);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["[_nghost-%COMP%]     .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](NgbdAlertBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-ngbd-alert',
            templateUrl: 'alert.component.html',
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
          }]
        }], function () {
          return [];
        }, {
          alerts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/component/buttons/buttons.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/component/buttons/buttons.component.ts ***!
      \********************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function srcAppComponentButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(formBuilder) {
          _classCallCheck(this, ButtonsComponent);

          this.formBuilder = formBuilder;
          this.model = {
            left: true,
            middle: false,
            right: false
          };
          this.model1 = 1;
        } // tslint:disable-next-line:use-life-cycle-interface


        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.checkboxGroupForm = this.formBuilder.group({
              left: true,
              middle: false,
              right: false
            });
            this.radioGroupForm = this.formBuilder.group({
              model: 1
            });
          }
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.??fac = function ButtonsComponent_Factory(t) {
        return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ButtonsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ButtonsComponent,
        selectors: [["ng-component"]],
        decls: 738,
        vars: 18,
        consts: [[1, "row"], [1, "col-lg-12", "col-xlg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "button-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-success"], ["type", "button", 1, "btn", "btn-outline-info"], ["type", "button", 1, "btn", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-rounded", "btn-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-info"], ["type", "button", 1, "btn", "btn-rounded", "btn-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-danger"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-info"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-outline-danger"], [1, "col-lg-6"], ["type", "button", 1, "btn", "btn-lg", "btn-primary"], ["type", "button", 1, "btn", "btn-sm", "btn-success"], ["type", "button", 1, "btn", "btn-xs", "btn-info"], ["type", "button", 1, "btn", "btn-lg", "btn-rounded", "btn-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-sm", "btn-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-xs", "btn-info"], [1, "col-12"], [1, "row", "button-group"], [1, "col-lg-2", "col-md-4"], ["type", "button", 1, "btn", "btn-block", "btn-info"], ["type", "button", 1, "btn", "btn-block", "btn-success"], ["type", "button", 1, "btn", "btn-block", "btn-primary"], ["type", "button", 1, "btn", "btn-block", "btn-danger"], ["type", "button", 1, "btn", "btn-block", "btn-secondary"], ["type", "button", 1, "btn", "btn-block", "btn-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-info"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-danger"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-warning"], ["type", "button", 1, "btn", "btn-block", "btn-outline-info"], ["type", "button", 1, "btn", "btn-block", "btn-outline-success"], ["type", "button", 1, "btn", "btn-block", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-block", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-block", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-outline-info"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-outline-success"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-outline-primary"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-outline-danger"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-rounded", "btn-block", "btn-outline-warning"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "btn-info"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "btn-success"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "btn-primary"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "btn-danger"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "btn-secondary"], ["type", "button", 1, "btn", "btn-block", "btn-lg", "btn-warning"], [1, "col-lg-12", "col-xlg-6", "m-b-30"], [1, "fa", "fa-check"], [1, "fa", "fa-heart"], ["type", "button", 1, "btn", "btn-primary", "waves-effect", "waves-light"], [1, "btn-label", "m-r-5"], [1, "fas", "fa-envelope"], ["type", "button", 1, "btn", "btn-secondary", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-info", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-warning", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-danger", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded"], ["type", "button", 1, "btn", "btn-secondary", "btn-rounded"], ["type", "button", 1, "btn", "btn-success", "btn-rounded"], ["type", "button", 1, "btn", "btn-info", "btn-rounded"], ["type", "button", 1, "btn", "btn-warning", "btn-rounded"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-primary", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-outline-secondary", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-outline-info", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-outline-warning", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-outline-danger", "waves-effect", "waves-light"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-success", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-info", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-rounded"], [1, "col-lg-6", "button-group"], ["type", "button", 1, "btn", "btn-secondary", "btn-circle"], ["type", "button", 1, "btn", "btn-primary", "btn-circle"], [1, "fa", "fa-list"], ["type", "button", 1, "btn", "btn-success", "btn-circle"], [1, "fa", "fa-link"], ["type", "button", 1, "btn", "btn-info", "btn-circle"], ["type", "button", 1, "btn", "btn-warning", "btn-circle"], [1, "fa", "fa-times"], ["type", "button", 1, "btn", "btn-danger", "btn-circle"], ["type", "button", 1, "btn", "btn-secondary", "btn-circle", "btn-lg"], ["type", "button", 1, "btn", "btn-primary", "btn-circle", "btn-lg"], ["type", "button", 1, "btn", "btn-success", "btn-circle", "btn-lg"], ["type", "button", 1, "btn", "btn-info", "btn-circle", "btn-lg"], ["type", "button", 1, "btn", "btn-warning", "btn-circle", "btn-lg"], ["type", "button", 1, "btn", "btn-danger", "btn-circle", "btn-lg"], ["type", "button", 1, "btn", "btn-secondary", "btn-circle", "btn-xl"], ["type", "button", 1, "btn", "btn-primary", "btn-circle", "btn-xl"], ["type", "button", 1, "btn", "btn-success", "btn-circle", "btn-xl"], ["type", "button", 1, "btn", "btn-info", "btn-circle", "btn-xl"], ["type", "button", 1, "btn", "btn-warning", "btn-circle", "btn-xl"], ["type", "button", 1, "btn", "btn-facebook", "waves-effect", "waves-light"], [1, "fab", "fa-facebook-f"], ["type", "button", 1, "btn", "btn-twitter", "waves-effect", "waves-light"], [1, "fab", "fa-twitter"], ["type", "button", 1, "btn", "btn-googleplus", "waves-effect", "waves-light"], [1, "fab", "fa-google-plus"], ["type", "button", 1, "btn", "btn-linkedin", "waves-effect", "waves-light"], [1, "fab", "fa-linkedin"], ["type", "button", 1, "btn", "btn-instagram", "waves-effect", "waves-light"], [1, "fab", "fa-instagram"], ["type", "button", 1, "btn", "btn-pinterest", "waves-effect", "waves-light"], [1, "fab", "fa-pinterest"], ["type", "button", 1, "btn", "btn-dribbble", "waves-effect", "waves-light"], [1, "fab", "fa-dribbble"], ["type", "button", 1, "btn", "btn-youtube", "waves-effect", "waves-light"], [1, "fab", "fa-youtube"], ["type", "button", 1, "btn", "btn-facebook", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-twitter", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-googleplus", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-linkedin", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-instagram", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-pinterest", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-dribbble", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-youtube", "waves-effect", "btn-circle", "waves-light"], ["type", "button", 1, "btn", "btn-facebook", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-twitter", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-googleplus", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-linkedin", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-instagram", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-pinterest", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-dribbble", "waves-effect", "btn-rounded", "waves-light"], ["type", "button", 1, "btn", "btn-youtube", "waves-effect", "btn-rounded", "waves-light"], [1, "col-lg-12"], [1, "col-xlg-6", "col-lg-12", "m-b-30"], [1, "highlighter-rouge"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "fa", "fa-align-left"], [1, "fa", "fa-align-justify"], [1, "fa", "fa-align-right"], [1, "fa", "fa-fast-backward"], [1, "fa", "fa-play"], [1, "fa", "fa-fast-forward"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-secondary", "disabled"], ["role", "group", "aria-label", "Second group", 1, "btn-group", "mr-2"], ["role", "group", "aria-label", "Third group", 1, "btn-group"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-lg"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm"], ["role", "group", "aria-label", "Vertical button group", 1, "btn-group-vertical"], [1, "btn-group", "btn-group-toggle"], ["ngbButtonLabel", "", 1, "btn-primary"], ["type", "checkbox", "ngbButton", "", 3, "ngModel", "ngModelChange"], [3, "formGroup"], ["type", "checkbox", "formControlName", "left", "ngbButton", ""], ["type", "checkbox", "formControlName", "middle", "ngbButton", ""], ["type", "checkbox", "formControlName", "right", "ngbButton", ""], ["ngbRadioGroup", "", "name", "radioBasic", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButton", "", "type", "radio", 3, "value"], ["ngbButton", "", "type", "radio", "value", "middle"], ["ngbRadioGroup", "", "name", "radioBasic", "formControlName", "model", 1, "btn-group", "btn-group-toggle"]],
        template: function ButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "General Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "btn btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Button with outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "btn btn-outline-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Rounded Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "btn btn-rounded btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Rounded outlined Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "btn btn-rounded btn-outline-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Button Sizes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "btn btn-lg btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Large .btn-lg ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Normal .btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Small .btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Tiny .btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Button Sizes with rounded");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "btn btn-lg btn-rounded btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " to create a btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Large .btn-lg ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Normal .btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Small .btn-sm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Tiny .btn-xs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Block buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "btn btn-block btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "button", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Rounded Block buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "btn btn-block btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Block outline buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "btn btn-block btn-outline-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "button", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "button", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Rounded outline Block buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "btn btn-block btn-outline-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "button", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Large Block buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "btn btn-block btn-lg btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "button", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "button", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "button", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Second");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "button", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Button with icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "btn btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, " & ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "i class =\"fa fa-heart\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](286, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, " Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "Secondary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](290, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](292, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, " Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](295, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, " Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, " Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "button", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](306, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](310, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](314, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Heart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](318, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](322, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Heart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "button", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](326, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, " Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Secondary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](330, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "button", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](332, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, " Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "button", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](335, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, " Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "button", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](338, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, " Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "button", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](341, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, " Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](345, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, " Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "Secondary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](349, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](351, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, " Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](354, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, " Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](357, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, " Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](360, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, " Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "button", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](365, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](369, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "Check");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "button", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](373, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](374, "Heart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](375, "button", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](377, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](378, "Mail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "button", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "span", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](381, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Heart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "button", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](385, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, " Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "button", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "Secondary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](389, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "button", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](391, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, " Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](394, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, " Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](397, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](398, " Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "button", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](400, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, " Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Circle buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "btn btn-circle btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "button", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](414, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "button", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](416, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "button", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](418, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "button", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](420, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "button", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](422, "i", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "button", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](424, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](425, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](426, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "Circle Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "btn btn-circle btn-lg btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](435, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "button", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](437, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "button", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](439, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "button", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](441, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "button", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](443, "i", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "button", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](445, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](446, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](447, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](449, "Circle xtra Large buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](450, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, "btn btn-circle btn-xl btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "button", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](456, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "button", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](458, "i", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "button", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "i", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "button", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](462, "i", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "button", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](464, "i", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "Social buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "btn btn-facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "button", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](476, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "button", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](478, "i", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "button", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](480, "i", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](481, "button", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](482, "i", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "button", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](484, "i", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "button", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](486, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "button", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](488, "i", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "button", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](490, "i", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](491, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](492, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "With Circle buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "btn btn-circle btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](501, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "button", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](503, "i", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "button", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](505, "i", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "button", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](507, "i", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "button", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](509, "i", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "button", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](511, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "button", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](513, "i", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "button", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](515, "i", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](516, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](517, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "with rounded buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "Use a classes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "btn btn-rounded btn-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, " to quickly create a General btn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "button", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](526, "i", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "button", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](528, "i", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "button", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](530, "i", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "button", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](532, "i", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "button", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](534, "i", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "button", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](536, "i", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "button", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](538, "i", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "button", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](540, "i", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "div", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "div", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "Group buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Wrap a series of buttons with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "code", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "code", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, ".btn-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](558, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "div", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](565, "i", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](567, "i", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](569, "i", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "div", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](571, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](572, "i", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](574, "i", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](576, "i", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "div", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](579, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](580, "Button toolbar pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](581, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](582, "Wrap a series of buttons with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "code", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](584, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "code", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, ".btn-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "div", 161);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](589, "div", 162);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "button", 163);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "div", 164);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](600, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "div", 165);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "div", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](609, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "Group buttons sizing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Wrap a series of buttons with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "code", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](615, ".btn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](616, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "code", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, ".btn-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "div", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](620, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](621, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](622, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](623, "Middle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](625, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](626, "div", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](628, "i", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](630, "i", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](632, "i", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "div", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](634, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](635, "i", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](637, "i", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](639, "i", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "div", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](641, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "Vertical buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](645, "creat vertical button with class of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](646, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](647, ".btn-group-vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "div", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](649, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](650, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](652, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](654, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](658, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](659, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](660, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](662, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](663, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](665, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](666, "Checkbox buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](667, "div", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](668, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](669, "input", 171);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_669_listener($event) {
              return ctx.model.left = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](670, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](671, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "input", 171);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_672_listener($event) {
              return ctx.model.middle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](673, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "input", 171);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_input_ngModelChange_675_listener($event) {
              return ctx.model.right = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](676, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](677, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](678, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](679);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](680, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](681, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](682, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](684, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](685, "Checkbox buttons(Reactive Forms)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "form", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](687, "div", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](688, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](689, "input", 173);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](690, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](692, "input", 174);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](693, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](694, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](695, "input", 175);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](696, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](697, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](698, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](699);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](700, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](701, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](703, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](704, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, "Radio Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "div", 176);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ButtonsComponent_Template_div_ngModelChange_706_listener($event) {
              return ctx.model1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](707, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](708, "input", 177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](709, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](710, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](711, "input", 178);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](712, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](714, "input", 177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](715, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](716, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](717, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](718);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](719, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](721, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](722, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](723, "Radio Buttons(Reactive Forms)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](724, "form", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](725, "div", 179);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](726, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](727, "input", 177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](728, " Left (pre-checked) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](730, "input", 178);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](731, " Middle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](732, "label", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](733, "input", 177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](734, " Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](735, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](737);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](669);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.left);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.middle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.right);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](680, 14, ctx.model));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.checkboxGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](700, 16, ctx.checkboxGroupForm.value));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.model1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.radioGroupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.radioGroupForm.value["model"]);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbButtonLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCheckBox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRadio"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'buttons.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/card/card.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/component/card/card.component.ts ***!
      \**************************************************/

    /*! exports provided: CardsComponent */

    /***/
    function srcAppComponentCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
        return CardsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CardsComponent = function CardsComponent() {
        _classCallCheck(this, CardsComponent);
      };

      CardsComponent.??fac = function CardsComponent_Factory(t) {
        return new (t || CardsComponent)();
      };

      CardsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CardsComponent,
        selectors: [["ng-component"]],
        decls: 575,
        vars: 0,
        consts: [[1, "row"], [1, "col-12"], [1, "d-inline"], [1, "col-lg-3", "col-md-6"], [1, "card"], ["src", "assets/images/big/img1.jpg", "alt", "Card image cap", 1, "card-img-top", "img-responsive"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], ["src", "assets/images/big/img2.jpg", "alt", "Card image cap", 1, "card-img-top", "img-responsive"], ["src", "assets/images/big/img3.jpg", "alt", "Card image cap", 1, "card-img-top", "img-responsive"], [1, "col-lg-3", "col-md-6", "img-responsive"], ["src", "assets/images/big/img4.jpg", "alt", "Card image cap", 1, "card-img-top", "img-responsive"], [1, "col-12", "m-t-30"], [1, "m-b-0"], [1, "text-muted", "m-t-0"], [1, "card-body", "collapse", "show"], [1, "card-subtitle", "mb-2", "text-muted"], ["href", "#", 1, "card-link"], [1, "text-muted", "m-t-0", "font-12"], [1, "card-header"], [1, "card", "text-center"], ["href", "#", 1, "btn", "btn-info"], [1, "card-footer", "text-muted"], [1, "col-md-6"], ["href", "#", 1, "btn", "btn-success"], [1, "col-md-4"], [1, "card", "text-right"], ["href", "#", 1, "btn", "btn-inverse"], [1, "card", "w-75"], ["href", "#", 1, "btn", "btn-danger"], [1, "card", "w-50"], [1, "nav", "nav-tabs", "card-header-tabs"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "active"], ["href", "javascript:void(0)", 1, "nav-link"], ["href", "#", 1, "nav-link", "disabled"], [1, "nav", "nav-pills", "card-header-pills"], ["href", "javascript:void(0)", 1, "nav-link", "disabled"], [1, "card", "card-inverse", 2, "background-color", "#333", "border-color", "#333"], [1, "m-b-0", "text-white"], [1, "card", "card-inverse", "card-info"], [1, "card", "card-inverse", "card-primary"], [1, "card", "card-inverse", "card-danger"], [1, "card", "card-inverse", "card-warning"], [1, "card", "card-inverse", "card-success"], [1, "card", "card-outline-inverse"], [1, "card", "card-outline-info"], [1, "card", "card-outline-primary"], [1, "card", "card-outline-danger"], [1, "card", "card-outline-warning"], [1, "card", "card-outline-success"], [1, "card-group"], [1, "text-muted"], [1, "m-t-40"], [1, "card-actions"], ["data-perform", "card-collapse", 1, "btn-minimize"], [1, "ti-minus"], [1, "btn-close"], [1, "ti-close"], [1, "card-deck"], [1, "card-columns"], ["src", "assets/images/big/img6.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card", "p-3"], ["title", "Source Title"], ["src", "assets/images/big/img5.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card", "card-inverse", "bg-primary", "p-3", "text-center", "text-white"], ["src", "assets/images/big/img4.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card", "p-3", "text-right"]],
        template: function CardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Card with Image code icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Some quick example text to build on the card title and make up the bulk of the card's content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Some quick example text to build on the card title and make up the bulk of the card's content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Some quick example text to build on the card title and make up the bulk of the card's content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Some quick example text to build on the card title and make up the bulk of the card's content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Content types");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "The building block of a card is the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, ".card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, ".card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Use it whenever you need a padded section within a card.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Titles, text, and links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Card titles are used by adding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, ".card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " & ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, ".card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " for subtitle of card.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h6", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Card subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Some quick example text to build on the card title and make up the bulk of the card's content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Card link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Another link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Header and footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Add an optional header and/or footer within a card.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Featured ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Header and footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Add an optional header and/or footer within a card. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " Featured ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, " 2 days ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Size Using grid markup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Using the grid, wrap cards in columns and rows as needed.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, ".col-1 to .col-12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Text alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "You can quickly change the text alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, ".text-center .text-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Using utilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Using the utility, you can give direct width class to card like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, ".w-25, w-50, w-75, w-100");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "This card has width of 75%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "This card has width of 50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Size Using grid markup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Using the grid, wrap cards in columns and rows as needed.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, ".col-1 to .col-12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "ul", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "li", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "Card styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "Cards include various options for customizing their backgrounds, borders, and color.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, ".card-primary info, warning, danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Card styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "Cards include various options for customizing their backgrounds, borders, and color.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](341, ".card-primary info, warning, danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](353, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](379, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](387, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](401, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "Card Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](411, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "Go somewhere");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "Card Groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "Use card groups to render cards as a single, attached element with equal width and height columns.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](422, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](432, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "This card has supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](442, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](448, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "h4", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "Card With action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "With action elements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](457, " Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](460, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "a", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](462, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Special title treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Card with Deck");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Use card groups to render cards as a single, attached element with equal width and height columns.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](476, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](483, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](484, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](485, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](486, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](487, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, "This card has supporting text below as a natural.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](496, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. supporting text below as a natural lead-in to additional content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "Card columns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "Cards can be organized into Masonry-like columns with just CSS by wrapping them in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, "card-columns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](515, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](518, "Card title that wraps to a new line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](520, "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, " Someone famous in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "cite", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "Source Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](530, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](533, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](534, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](535, "This card has supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, " Someone famous in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "cite", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Source Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "This card has supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](557, "img", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, " Someone famous in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "cite", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, "Source Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](567, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](573, "small", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](574, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'card.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/carousel/carousel.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/carousel/carousel.component.ts ***!
      \**********************************************************/

    /*! exports provided: NgbdCarouselBasicComponent */

    /***/
    function srcAppComponentCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasicComponent", function () {
        return NgbdCarouselBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var _c0 = ["carousel"];

      function NgbdCarouselBasicComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Nulla vitae elit libero, a pharetra augue mollis interdum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "10 seconds between slides...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "No keyboard...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "And no wrap after last slide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "10 seconds between slides...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "No keyboard...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdCarouselBasicComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "And no wrap after last slide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "This carousel uses customized default values.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NgbdCarouselBasicComponent = /*#__PURE__*/function () {
        function NgbdCarouselBasicComponent(config) {
          _classCallCheck(this, NgbdCarouselBasicComponent);

          this.showNavigationArrows = false;
          this.showNavigationIndicators = false;
          this.paused = false;
          this.unpauseOnArrow = false;
          this.pauseOnIndicator = false;
          this.pauseOnHover = true; // customize default values of carousels used by this component tree

          config.interval = 10000;
          config.wrap = false;
          config.keyboard = false;
          config.showNavigationArrows = true;
          config.showNavigationIndicators = true;
        }

        _createClass(NgbdCarouselBasicComponent, [{
          key: "togglePaused",
          value: function togglePaused() {
            if (this.paused) {
              this.carousel.cycle();
            } else {
              this.carousel.pause();
            }

            this.paused = !this.paused;
          }
        }, {
          key: "onSlide",
          value: function onSlide(slideEvent) {
            if (this.unpauseOnArrow && slideEvent.paused && (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].ARROW_RIGHT)) {
              this.togglePaused();
            }

            if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlideEventSource"].INDICATOR) {
              this.togglePaused();
            }
          }
        }]);

        return NgbdCarouselBasicComponent;
      }();

      NgbdCarouselBasicComponent.??fac = function NgbdCarouselBasicComponent_Factory(t) {
        return new (t || NgbdCarouselBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]));
      };

      NgbdCarouselBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdCarouselBasicComponent,
        selectors: [["app-ngbd-buttons-radio"]],
        viewQuery: function NgbdCarouselBasicComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.carousel = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])],
        decls: 55,
        vars: 7,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["ngbSlide", ""], [3, "showNavigationArrows", "showNavigationIndicators"], ["role", "group", "aria-label", "Carousel toggle controls", 1, "btn-group", "m-t-40"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], [1, "badge", "badge-success", "text-white", "ml-2"], ["interval", "1000", 3, "pauseOnHover", "slide"], ["carousel", ""], [1, "form-check"], ["type", "checkbox", "id", "pauseOnHover", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnHover", 1, "form-check-label"], ["type", "checkbox", "id", "unpauseOnArrow", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "unpauseOnArrow", 1, "form-check-label"], ["type", "checkbox", "id", "pauseOnIndicator", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "pauseOnIndicator", 1, "form-check-label"], ["src", "assets/images/big/img1.jpg", "alt", "Random first slide"], [1, "carousel-caption"], [1, "text-white", "font-bold"], ["src", "assets/images/big/img2.jpg", "alt", "Random second slide"], ["src", "assets/images/big/img3.jpg", "alt", "Random third slide"], ["src", "assets/images/big/img4.jpg", "alt", "Random first slide"], ["src", "assets/images/big/img5.jpg", "alt", "Random second slide"], ["src", "assets/images/big/img6.jpg", "alt", "Random third slide"]],
        template: function NgbdCarouselBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic Carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-carousel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, NgbdCarouselBasicComponent_ng_template_9_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, NgbdCarouselBasicComponent_ng_template_10_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, NgbdCarouselBasicComponent_ng_template_11_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Navigation arrows and indicators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ngb-carousel", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, NgbdCarouselBasicComponent_ng_template_20_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, NgbdCarouselBasicComponent_ng_template_21_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, NgbdCarouselBasicComponent_ng_template_22_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdCarouselBasicComponent_Template_button_click_24_listener() {
              return ctx.showNavigationArrows = !ctx.showNavigationArrows;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Toggle navigation arrows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdCarouselBasicComponent_Template_button_click_26_listener() {
              return ctx.showNavigationIndicators = !ctx.showNavigationIndicators;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Toggle navigation indicators");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Pause/cycle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "ngb-carousel", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("slide", function NgbdCarouselBasicComponent_Template_ngb_carousel_slide_35_listener($event) {
              return ctx.onSlide($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, NgbdCarouselBasicComponent_ng_template_37_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, NgbdCarouselBasicComponent_ng_template_38_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, NgbdCarouselBasicComponent_ng_template_39_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdCarouselBasicComponent_Template_input_ngModelChange_42_listener($event) {
              return ctx.pauseOnHover = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Pause on hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdCarouselBasicComponent_Template_input_ngModelChange_46_listener($event) {
              return ctx.unpauseOnArrow = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Unpause when clicking on arrows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdCarouselBasicComponent_Template_input_ngModelChange_50_listener($event) {
              return ctx.pauseOnIndicator = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Pause when clicking on navigation indicator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdCarouselBasicComponent_Template_button_click_53_listener() {
              return ctx.togglePaused();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pauseOnHover", ctx.pauseOnHover);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pauseOnHover);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.unpauseOnArrow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.pauseOnIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.paused ? "Cycle" : "Pause", " ");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdCarouselBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-buttons-radio',
            templateUrl: './carousel.component.html',
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
          }];
        }, {
          carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carousel', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/component/component.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/component/component.module.ts ***!
      \***********************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-notifier */
      "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
      /* harmony import */


      var _component_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./component.routing */
      "./src/app/component/component.routing.ts");
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "./src/app/component/progressbar/progressbar.component.ts");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "./src/app/component/pagination/pagination.component.ts");
      /* harmony import */


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "./src/app/component/accordion/accordion.component.ts");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./alert/alert.component */
      "./src/app/component/alert/alert.component.ts");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/component/carousel/carousel.component.ts");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "./src/app/component/datepicker/datepicker.component.ts");
      /* harmony import */


      var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dropdown-collapse/dropdown-collapse.component */
      "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modal/modal.component */
      "./src/app/component/modal/modal.component.ts");
      /* harmony import */


      var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./popover-tooltip/popover-tooltip.component */
      "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/component/rating/rating.component.ts");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "./src/app/component/tabs/tabs.component.ts");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "./src/app/component/timepicker/timepicker.component.ts");
      /* harmony import */


      var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./typehead/typehead.component */
      "./src/app/component/typehead/typehead.component.ts");
      /* harmony import */


      var _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./language-datepicker/language-datepicker.component */
      "./src/app/component/language-datepicker/language-datepicker.component.ts");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "./src/app/component/buttons/buttons.component.ts");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./card/card.component */
      "./src/app/component/card/card.component.ts");
      /* harmony import */


      var _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./notifier/notifier.component */
      "./src/app/component/notifier/notifier.component.ts");
      /* harmony import */


      var _toast_toast_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./toast/toast.component */
      "./src/app/component/toast/toast.component.ts");
      /* harmony import */


      var _toast_toast_container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./toast/toast-container */
      "./src/app/component/toast/toast-container.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_component_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ComponentsModule, {
          declarations: [_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__["NgbdpregressbarBasicComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["NgbdpaginationBasicComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["NgbdAccordionBasicComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["NgbdAlertBasicComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["NgbdCarouselBasicComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__["NgbdDatepickerBasicComponent"], _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__["NgbdDropdownBasicComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasicComponent"], _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__["NgbdPopTooltipComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__["NgbdratingBasicComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__["NgbdtabsBasicComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__["NgbdtimepickerBasicComponent"], _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__["NgbdtypeheadBasicComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__["ButtonsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_22__["CardsComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_24__["ToastComponent"], _toast_toast_container__WEBPACK_IMPORTED_MODULE_25__["ToastsContainer"], _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_23__["NotifierComponent"], _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_20__["NgbdDatepickerLanguageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_component_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"]],
            declarations: [_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__["NgbdpregressbarBasicComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["NgbdpaginationBasicComponent"], _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["NgbdAccordionBasicComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["NgbdAlertBasicComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["NgbdCarouselBasicComponent"], _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__["NgbdDatepickerBasicComponent"], _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__["NgbdDropdownBasicComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasicComponent"], _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__["NgbdPopTooltipComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__["NgbdratingBasicComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__["NgbdtabsBasicComponent"], _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__["NgbdtimepickerBasicComponent"], _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__["NgbdtypeheadBasicComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__["ButtonsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_22__["CardsComponent"], _toast_toast_component__WEBPACK_IMPORTED_MODULE_24__["ToastComponent"], _toast_toast_container__WEBPACK_IMPORTED_MODULE_25__["ToastsContainer"], _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_23__["NotifierComponent"], _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_20__["NgbdDatepickerLanguageComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/component.routing.ts":
    /*!************************************************!*\
      !*** ./src/app/component/component.routing.ts ***!
      \************************************************/

    /*! exports provided: ComponentsRoutes */

    /***/
    function srcAppComponentComponentRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function () {
        return ComponentsRoutes;
      });
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      "./src/app/component/progressbar/progressbar.component.ts");
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      "./src/app/component/pagination/pagination.component.ts");
      /* harmony import */


      var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./accordion/accordion.component */
      "./src/app/component/accordion/accordion.component.ts");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert/alert.component */
      "./src/app/component/alert/alert.component.ts");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./carousel/carousel.component */
      "./src/app/component/carousel/carousel.component.ts");
      /* harmony import */


      var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./datepicker/datepicker.component */
      "./src/app/component/datepicker/datepicker.component.ts");
      /* harmony import */


      var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dropdown-collapse/dropdown-collapse.component */
      "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal/modal.component */
      "./src/app/component/modal/modal.component.ts");
      /* harmony import */


      var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./popover-tooltip/popover-tooltip.component */
      "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./rating/rating.component */
      "./src/app/component/rating/rating.component.ts");
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      "./src/app/component/tabs/tabs.component.ts");
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      "./src/app/component/timepicker/timepicker.component.ts");
      /* harmony import */


      var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./typehead/typehead.component */
      "./src/app/component/typehead/typehead.component.ts");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "./src/app/component/buttons/buttons.component.ts");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./card/card.component */
      "./src/app/component/card/card.component.ts");
      /* harmony import */


      var _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./toast/toast.component */
      "./src/app/component/toast/toast.component.ts");
      /* harmony import */


      var _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./notifier/notifier.component */
      "./src/app/component/notifier/notifier.component.ts");
      /* harmony import */


      var _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./language-datepicker/language-datepicker.component */
      "./src/app/component/language-datepicker/language-datepicker.component.ts");

      var ComponentsRoutes = [{
        path: '',
        children: [{
          path: 'progressbar',
          component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__["NgbdpregressbarBasicComponent"],
          data: {
            title: 'Progressbar',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Progressbar'
            }]
          }
        }, {
          path: 'card',
          component: _card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"],
          data: {
            title: 'Cards',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Cards'
            }]
          }
        }, {
          path: 'pagination',
          component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["NgbdpaginationBasicComponent"],
          data: {
            title: 'Pagination',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Pagination'
            }]
          }
        }, {
          path: 'accordion',
          component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__["NgbdAccordionBasicComponent"],
          data: {
            title: 'Accordion',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Accordion'
            }]
          }
        }, {
          path: 'alert',
          component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["NgbdAlertBasicComponent"],
          data: {
            title: 'Alert',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Alert'
            }]
          }
        }, {
          path: 'carousel',
          component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NgbdCarouselBasicComponent"],
          data: {
            title: 'Carousel',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Carousel'
            }]
          }
        }, {
          path: 'datepicker',
          component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["NgbdDatepickerBasicComponent"],
          data: {
            title: 'Datepicker',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Datepicker'
            }]
          }
        }, {
          path: 'language-datepicker',
          component: _language_datepicker_language_datepicker_component__WEBPACK_IMPORTED_MODULE_17__["NgbdDatepickerLanguageComponent"],
          data: {
            title: 'Language Datepicker',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Language Datepicker'
            }]
          }
        }, {
          path: 'dropdown',
          component: _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__["NgbdDropdownBasicComponent"],
          data: {
            title: 'Dropdown',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Dropdown'
            }]
          }
        }, {
          path: 'modal',
          component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModalBasicComponent"],
          data: {
            title: 'Modal',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Modal'
            }]
          }
        }, {
          path: 'poptool',
          component: _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__["NgbdPopTooltipComponent"],
          data: {
            title: 'Popover & Tooltip',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Popover & Tooltip'
            }]
          }
        }, {
          path: 'rating',
          component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["NgbdratingBasicComponent"],
          data: {
            title: 'Rating',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Rating'
            }]
          }
        }, {
          path: 'tabs',
          component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NgbdtabsBasicComponent"],
          data: {
            title: 'Tabs',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Tabs'
            }]
          }
        }, {
          path: 'timepicker',
          component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgbdtimepickerBasicComponent"],
          data: {
            title: 'Timepicker',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Timepicker'
            }]
          }
        }, {
          path: 'typehead',
          component: _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__["NgbdtypeheadBasicComponent"],
          data: {
            title: 'Typehead',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Typehead'
            }]
          }
        }, {
          path: 'buttons',
          component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ButtonsComponent"],
          data: {
            title: 'Button',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Button'
            }]
          }
        }, {
          path: 'notifier',
          component: _notifier_notifier_component__WEBPACK_IMPORTED_MODULE_16__["NotifierComponent"],
          data: {
            title: 'Notifier',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'ngComponent'
            }, {
              title: 'Notifier'
            }]
          }
        }, {
          path: 'toast',
          component: _toast_toast_component__WEBPACK_IMPORTED_MODULE_15__["ToastComponent"],
          data: {
            title: 'Toast'
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/component/datepicker/datepicker.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/datepicker/datepicker.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbdDatepickerBasicComponent */

    /***/
    function srcAppComponentDatepickerDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDatepickerBasicComponent", function () {
        return NgbdDatepickerBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgbdDatepickerBasicComponent_ng_template_98_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mouseenter", function NgbdDatepickerBasicComponent_ng_template_98_Template_span_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var date_r16 = ctx.date;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r18.hoveredDate = date_r16;
          })("mouseleave", function NgbdDatepickerBasicComponent_ng_template_98_Template_span_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r20.hoveredDate = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var date_r16 = ctx.date;
          var focused_r17 = ctx.focused;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("focused", focused_r17)("range", ctx_r5.isFrom(date_r16) || ctx_r5.isTo(date_r16) || ctx_r5.isInside(date_r16) || ctx_r5.isHovered(date_r16))("faded", ctx_r5.isHovered(date_r16) || ctx_r5.isInside(date_r16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", date_r16.day, " ");
        }
      }

      function NgbdDatepickerBasicComponent_ng_template_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var date_r21 = ctx.$implicit;
          var currentMonth_r22 = ctx.currentMonth;
          var selected_r23 = ctx.selected;
          var disabled_r24 = ctx.disabled;
          var focused_r25 = ctx.focused;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("weekend", ctx_r12.isWeekend(date_r21))("focused", focused_r25)("bg-primary", selected_r23)("hidden", date_r21.month !== currentMonth_r22)("text-muted", disabled_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", date_r21.day, " ");
        }
      }

      function NgbdDatepickerBasicComponent_ng_template_180_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "hr", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_ng_template_180_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

            ctx_r26.model5 = ctx_r26.today5;
            return _r6.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_ng_template_180_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

            return _r6.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var my = new Date(); // This is for the range date picker
      // tslint:disable-next-line:max-line-length

      var equals = function equals(one, two) {
        return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
      };

      var before = function before(one, two) {
        return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day < two.day : one.month < two.month : one.year < two.year;
      };

      var after = function after(one, two) {
        return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day > two.day : one.month > two.month : one.year > two.year;
      }; // End range date picker


      var NgbdDatepickerBasicComponent = /*#__PURE__*/function () {
        function NgbdDatepickerBasicComponent(calendar, calendar1, calendar5) {
          var _this13 = this;

          _classCallCheck(this, NgbdDatepickerBasicComponent);

          this.calendar1 = calendar1;
          this.calendar5 = calendar5;
          this.today5 = this.calendar5.getToday(); // This is for multiple month

          this.displayMonths = 2;
          this.navigation = 'select';
          this.showWeekNumbers = false; // This is for the disable datepicker

          this.model3 = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
          };
          this.disabled = true;

          this.isHovered = function (date) {
            return _this13.fromDate && !_this13.toDate && _this13.hoveredDate && after(date, _this13.fromDate) && before(date, _this13.hoveredDate);
          };

          this.isInside = function (date) {
            return after(date, _this13.fromDate) && before(date, _this13.toDate);
          };

          this.isFrom = function (date) {
            return equals(date, _this13.fromDate);
          };

          this.isTo = function (date) {
            return equals(date, _this13.toDate);
          };

          this.isDisabled = function (date, current) {
            return date.month !== current.month;
          };

          this.isWeekend = function (date) {
            return _this13.calendar1.getWeekday(date) >= 6;
          };

          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        }

        _createClass(NgbdDatepickerBasicComponent, [{
          key: "selectToday",
          value: function selectToday() {
            this.model = {
              year: my.getFullYear(),
              month: my.getMonth() + 1,
              day: my.getDate()
            };
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(date) {
            if (!this.fromDate && !this.toDate) {
              this.fromDate = date;
            } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
              this.toDate = date;
            } else {
              this.toDate = null;
              this.fromDate = date;
            }
          }
        }, {
          key: "today",
          get: function get() {
            return new Date();
          }
        }]);

        return NgbdDatepickerBasicComponent;
      }();

      NgbdDatepickerBasicComponent.??fac = function NgbdDatepickerBasicComponent_Factory(t) {
        return new (t || NgbdDatepickerBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]));
      };

      NgbdDatepickerBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdDatepickerBasicComponent,
        selectors: [["app-datepicker-basic"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
          useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"]
        }])],
        decls: 182,
        vars: 49,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "dl"], [1, "m-l-20"], [1, "m-t-20"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [3, "ngModel", "disabled", "ngModelChange"], [3, "click"], [3, "displayMonths", "navigation"], [1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "displayMonths", "navigation", "showWeekNumbers"], ["e", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-calendar"], [1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["value", "none"], ["value", "select"], ["value", "arrows"], ["placeholder", "yyyy-mm-dd", "name", "dp2", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d3", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-outline-secondary", "no-shadow", 3, "click"], [1, "col-md-12"], ["ngModel", "", 3, "displayMonths", "dayTemplate", "ngModelChange"], ["t", ""], [1, "col-6"], [3, "ngModel", "ngModelChange"], ["d1", "", "c1", "ngModel"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["placeholder", "yyyy-mm-dd", "name", "d2", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["c2", "ngModel", "d2", "ngbDatepicker"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "dayTemplate", "markDisabled", "ngModelChange"], ["d", "ngbDatepicker"], ["customDay", ""], ["placeholder", "yyyy-mm-dd", "name", "dp1", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "footerTemplate", "ngModelChange"], ["d1", "ngbDatepicker"], ["footerTemplate", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"], [1, "custom-day"], [1, "my-0"], [1, "btn", "btn-primary", "btn-sm", "m-2", "float-left", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", "m-2", "float-right", 3, "click"]],
        template: function NgbdDatepickerBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Datepicker Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Simple datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ngb-datepicker", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_ngb_datepicker_ngModelChange_10_listener($event) {
              return ctx.model = $event;
            })("navigate", function NgbdDatepickerBasicComponent_Template_ngb_datepicker_navigate_10_listener($event) {
              return ctx.date = $event.next;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_21_listener() {
              return ctx.selectToday();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Select Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);

              return _r0.navigateTo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "To current month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_25_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](11);

              return _r0.navigateTo({
                year: 2013,
                month: 2
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "To Feb 2013");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Disabled datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "This is Disabled datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ngb-datepicker", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_ngb_datepicker_ngModelChange_34_listener($event) {
              return ctx.model3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_36_listener() {
              return ctx.disabled = !ctx.disabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Datepicker Multiple months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "This is datepicker Multiple months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "ngb-datepicker", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_53_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](51);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_select_ngModelChange_56_listener($event) {
              return ctx.displayMonths = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "One month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Two months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Three months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_select_ngModelChange_63_listener($event) {
              return ctx.navigation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Without navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "With select boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Without select boxes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Datepicker in a popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "This is datepicker with popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_input_ngModelChange_80_listener($event) {
              return ctx.model = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_83_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](81);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](88, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Range Datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Example of the range selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "ngb-datepicker", 32, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_ngb_datepicker_ngModelChange_96_listener($event) {
              return ctx.onDateChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](98, NgbdDatepickerBasicComponent_ng_template_98_Template, 2, 7, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "pre", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](104, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "pre", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](107, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Custom date adapter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " These datepickers use custom Date adapter that lets you use your own model implementation. In this example we are converting from and to a JS native Date object");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "ngb-datepicker", 35, 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_ngb_datepicker_ngModelChange_117_listener($event) {
              return ctx.model1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_121_listener() {
              return ctx.model1 = ctx.today;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Select Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](126, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "input", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_input_ngModelChange_133_listener($event) {
              return ctx.model11 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_137_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](135);

              return _r9.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_140_listener() {
              return ctx.model11 = ctx.today;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Select Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](145, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Custom day view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "input", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_input_ngModelChange_158_listener($event) {
              return ctx.model4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_161_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](159);

              return _r10.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](163, NgbdDatepickerBasicComponent_ng_template_163_Template, 2, 11, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Footer template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "This datepicker uses a footer template which is presented inside datepicker. Today and close buttons used as an example.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "input", 44, 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerBasicComponent_Template_input_ngModelChange_175_listener($event) {
              return ctx.model5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDatepickerBasicComponent_Template_button_click_178_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r29);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](118);

              return _r6.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](180, NgbdDatepickerBasicComponent_ng_template_180_Template, 5, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](99);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](119);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](134);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](164);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](181);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("Month: ", ctx.date.month, ".", ctx.date.year, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 37, ctx.model), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model3)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("btn btn-sm btn-outline-", ctx.disabled ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.disabled ? "disabled" : "enabled", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("displayMonths", ctx.displayMonths)("navigation", ctx.navigation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("displayMonths", ctx.displayMonths)("navigation", ctx.navigation)("showWeekNumbers", ctx.showWeekNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.displayMonths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.navigation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](88, 39, ctx.model2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("displayMonths", 2)("dayTemplate", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("From: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](104, 41, ctx.fromDate), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("To: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](107, 43, ctx.toDate), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](126, 45, ctx.model1), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("State: ", _r7.status, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](145, 47, ctx.model11), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("State: ", _r8.status, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model4)("dayTemplate", _r11)("markDisabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model5)("footerTemplate", _r14);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        styles: [".custom-day[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused[_ngcontent-%COMP%] {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n        background-color: #0275d8;\n        color: white;\n      }\n      .faded[_ngcontent-%COMP%] {\n        opacity: 0.5;\n      }\n      .weekend[_ngcontent-%COMP%] {\n        background-color: #242a33;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden[_ngcontent-%COMP%] {\n        display: none;\n      }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdDatepickerBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-datepicker-basic',
            templateUrl: './datepicker.component.html',
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateAdapter"],
              useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateNativeAdapter"]
            }],
            styles: ["\n      .custom-day {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range,\n      .custom-day:hover {\n        background-color: #0275d8;\n        color: white;\n      }\n      .faded {\n        opacity: 0.5;\n      }\n      .weekend {\n        background-color: #242a33;\n        border-radius: 1rem;\n        color: white;\n      }\n      .hidden {\n        display: none;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/component/dropdown-collapse/dropdown-collapse.component.ts ***!
      \****************************************************************************/

    /*! exports provided: NgbdDropdownBasicComponent */

    /***/
    function srcAppComponentDropdownCollapseDropdownCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasicComponent", function () {
        return NgbdDropdownBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var NgbdDropdownBasicComponent = function NgbdDropdownBasicComponent() {
        _classCallCheck(this, NgbdDropdownBasicComponent);

        // This is for the collapse example
        this.isCollapsed = false;
        this.collapsed = true;
      };

      NgbdDropdownBasicComponent.??fac = function NgbdDropdownBasicComponent_Factory(t) {
        return new (t || NgbdDropdownBasicComponent)();
      };

      NgbdDropdownBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdDropdownBasicComponent,
        selectors: [["app-dropdown-basic"]],
        decls: 193,
        vars: 5,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "col", "text-right"], ["ngbDropdown", "", "placement", "top-right", 1, "d-inline-block"], ["id", "dropdownBasic2", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic2"], ["myDrop", "ngbDropdown"], ["id", "dropdownManual", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual"], [1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "col-md-12"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-outline-primary", 3, "click"], ["id", "collapseExample", 3, "ngbCollapse"], [1, "btn-group", "mr-3"], ["type", "button", 1, "btn", "btn-outline-success", "mr-0"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", 1, "btn", "btn-primary", "mr-0"], ["ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-danger", "mr-0"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-success"], [1, "badge", "badge-success", "text-white"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "px-4", "py-3"], [1, "form-group"], ["for", "exampleDropdownFormEmail1"], ["type", "email", "id", "exampleDropdownFormEmail1", "placeholder", "email@example.com", 1, "form-control"], ["for", "exampleDropdownFormPassword1"], ["type", "password", "id", "exampleDropdownFormPassword1", "placeholder", "Password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "dropdownCheck", 1, "form-check-input"], ["for", "dropdownCheck", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary"], [1, "dropdown-divider"], ["ngbDropdownItem", ""], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "navbar-brand"], ["type", "button", "aria-controls", "navbarContent", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["ngbDropdown", "", 1, "nav-item"], ["ngbDropdownToggle", "", "id", "navbarDropdown1", "role", "button", 1, "nav-link", 2, "cursor", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarDropdown1", 1, "dropdown-menu"], ["ngbDropdownItem", "", "href", "#", 3, "click"], ["ngbDropdownToggle", "", "id", "navbarDropdown2", "role", "button", 1, "nav-link", 2, "cursor", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarDropdown2", 1, "dropdown-menu", "dropdown-menu-right"], ["ngbDropdown", "", "display", "dynamic", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "id", "navbarDropdown3", "role", "button", 1, "nav-link", 2, "cursor", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "navbarDropdown3", 1, "dropdown-menu"]],
        template: function NgbdDropdownBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic Dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Toggle dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Toggle dropup ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " You can easily control dropdowns programmatically using the exported dropdown instance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 7, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Toggle dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Action - 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Another Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Something else is here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_button_click_49_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

              $event.stopPropagation();
              return _r0.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Open from outside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_button_click_51_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

              $event.stopPropagation();
              return _r0.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Close from outside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Collapse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " The NgbCollapse directive provides a simple way to hide and show an element with animations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_button_click_61_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "blockquote", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " You can collapse this card by clicking Toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Button groups and split buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " ThBootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Plain ol' button ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Drop me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Split me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Select me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " Or me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Four!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Mixed menu items and form ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Toggle dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "form", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, " Remember me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "New around here? Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Dynamic positioning in a navbar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "nav", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Dropdowns in navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "button", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_button_click_159_listener() {
              return ctx.collapsed = !ctx.collapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "span", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "ul", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " Static ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_167_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_169_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_171_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "li", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " Static right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_177_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_179_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_181_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "li", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, " Dynamic ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_187_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_189_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdDropdownBasicComponent_Template_a_click_191_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.collapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("collapse", ctx.collapsed);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdDropdownBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dropdown-basic',
            templateUrl: './dropdown-collapse.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/language-datepicker/language-datepicker.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/component/language-datepicker/language-datepicker.component.ts ***!
      \********************************************************************************/

    /*! exports provided: I18n, CustomDatepickerI18n, NgbdDatepickerLanguageComponent */

    /***/
    function srcAppComponentLanguageDatepickerLanguageDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I18n", function () {
        return I18n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function () {
        return CustomDatepickerI18n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdDatepickerLanguageComponent", function () {
        return NgbdDatepickerLanguageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // Last


      var I18N_VALUES = {
        fr: {
          weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
          months: ['Jan', 'F??v', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'D??c']
        } // other languages you would support

      }; // Last

      var I18n = function I18n() {
        _classCallCheck(this, I18n);

        this.language = 'fr';
      };

      I18n.??fac = function I18n_Factory(t) {
        return new (t || I18n)();
      };

      I18n.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: I18n,
        factory: I18n.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](I18n, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var CustomDatepickerI18n = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
        _inherits(CustomDatepickerI18n, _ng_bootstrap_ng_boot);

        var _super = _createSuper(CustomDatepickerI18n);

        function CustomDatepickerI18n(_i18n) {
          var _this14;

          _classCallCheck(this, CustomDatepickerI18n);

          _this14 = _super.call(this);
          _this14._i18n = _i18n;
          return _this14;
        }

        _createClass(CustomDatepickerI18n, [{
          key: "getWeekdayShortName",
          value: function getWeekdayShortName(weekday) {
            return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
          }
        }, {
          key: "getMonthShortName",
          value: function getMonthShortName(month) {
            return I18N_VALUES[this._i18n.language].months[month - 1];
          }
        }, {
          key: "getMonthFullName",
          value: function getMonthFullName(month) {
            return this.getMonthShortName(month);
          }
        }, {
          key: "getDayAriaLabel",
          value: function getDayAriaLabel(date) {
            return "".concat(date.day, "-").concat(date.month, "-").concat(date.year);
          }
        }]);

        return CustomDatepickerI18n;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]);

      CustomDatepickerI18n.??fac = function CustomDatepickerI18n_Factory(t) {
        return new (t || CustomDatepickerI18n)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](I18n));
      };

      CustomDatepickerI18n.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CustomDatepickerI18n,
        factory: CustomDatepickerI18n.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomDatepickerI18n, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: I18n
          }];
        }, null);
      })(); // last


      var NgbdDatepickerLanguageComponent = function NgbdDatepickerLanguageComponent() {
        _classCallCheck(this, NgbdDatepickerLanguageComponent);
      };

      NgbdDatepickerLanguageComponent.??fac = function NgbdDatepickerLanguageComponent_Factory(t) {
        return new (t || NgbdDatepickerLanguageComponent)();
      };

      NgbdDatepickerLanguageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdDatepickerLanguageComponent,
        selectors: [["app-datepicker-language"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([I18n, {
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"],
          useClass: CustomDatepickerI18n
        }])],
        decls: 7,
        vars: 1,
        consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [3, "ngModel", "ngModelChange"]],
        template: function NgbdDatepickerLanguageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Internationalization of datepickers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ngb-datepicker", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdDatepickerLanguageComponent_Template_ngb_datepicker_ngModelChange_6_listener($event) {
              return ctx.model = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdDatepickerLanguageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-datepicker-language',
            templateUrl: './language-datepicker.component.html',
            providers: [I18n, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"],
              useClass: CustomDatepickerI18n
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/modal/modal.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/modal/modal.component.ts ***!
      \****************************************************/

    /*! exports provided: NgbdModalBasicComponent */

    /***/
    function srcAppComponentModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModalBasicComponent", function () {
        return NgbdModalBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function NgbdModalBasicComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Profile update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_8_Template_button_click_3_listener() {
            var modal_r10 = ctx.$implicit;
            return modal_r10.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Date of birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_8_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            return _r11.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_8_Template_button_click_18_listener() {
            var modal_r10 = ctx.$implicit;
            return modal_r10.close("Save click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdModalBasicComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_21_Template_button_click_3_listener() {
            var modal_r16 = ctx.$implicit;
            return modal_r16.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "One fine body\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_21_Template_button_click_10_listener() {
            var modal_r16 = ctx.$implicit;
            return modal_r16.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdModalBasicComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_32_Template_button_click_3_listener() {
            var modal_r19 = ctx.$implicit;
            return modal_r19.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "One fine body\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_32_Template_button_click_10_listener() {
            var modal_r19 = ctx.$implicit;
            return modal_r19.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdModalBasicComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_51_Template_button_click_3_listener() {
            var modal_r22 = ctx.$implicit;
            return modal_r22.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "One fine body\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_51_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);

            return ctx_r24.opensubmodal(_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Launch demo modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_51_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r26.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdModalBasicComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_53_Template_button_click_3_listener() {
            var modal_r27 = ctx.$implicit;
            return modal_r27.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Sub Modal is open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_ng_template_53_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r29.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NgbdModalBasicComponent = /*#__PURE__*/function () {
        function NgbdModalBasicComponent(modalService) {
          _classCallCheck(this, NgbdModalBasicComponent);

          this.modalService = modalService;
        } // This is for the first modal


        _createClass(NgbdModalBasicComponent, [{
          key: "open1",
          value: function open1(content1) {
            var _this15 = this;

            this.modalService.open(content1, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this15.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this15.closeResult = "Dismissed ".concat(_this15.getDismissReason(reason));
            });
          } // This is for the Second modal

        }, {
          key: "open2",
          value: function open2(content2) {
            var _this16 = this;

            this.modalService.open(content2, {
              ariaLabelledBy: 'modal-basic-title'
            }).result.then(function (result) {
              _this16.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this16.closeResult = "Dismissed ".concat(_this16.getDismissReason(reason));
            });
          } // This is for the Third varios modal options

        }, {
          key: "openBackDropCustomClass",
          value: function openBackDropCustomClass(content3) {
            this.modalService.open(content3, {
              backdropClass: 'light-blue-backdrop'
            });
          }
        }, {
          key: "openWindowCustomClass",
          value: function openWindowCustomClass(content3) {
            this.modalService.open(content3, {
              windowClass: 'dark-modal'
            });
          }
        }, {
          key: "openSm",
          value: function openSm(content3) {
            this.modalService.open(content3, {
              size: 'sm'
            });
          }
        }, {
          key: "openLg",
          value: function openLg(content3) {
            this.modalService.open(content3, {
              size: 'lg'
            });
          }
        }, {
          key: "openVerticallyCentered",
          value: function openVerticallyCentered(content3) {
            this.modalService.open(content3, {
              centered: true
            });
          }
        }, {
          key: "openstackmodal",
          value: function openstackmodal(contentstack) {
            this.modalService.open(contentstack, {
              size: 'lg'
            });
          }
        }, {
          key: "opensubmodal",
          value: function opensubmodal(contentsubmodal) {
            this.modalService.open(contentsubmodal, {
              size: 'lg'
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return NgbdModalBasicComponent;
      }();

      NgbdModalBasicComponent.??fac = function NgbdModalBasicComponent_Factory(t) {
        return new (t || NgbdModalBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      NgbdModalBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdModalBasicComponent,
        selectors: [["app-ngbd-modal"]],
        decls: 57,
        vars: 1,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["content1", ""], [1, "btn", "btn-lg", "btn-outline-primary", 3, "click"], [1, "m-t-20"], ["content2", ""], [1, "col-md-12"], ["content3", ""], [1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], [1, "badge", "badge-success", "text-white"], ["contentstack", ""], ["contentsubmodal", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "dateOfBirth"], [1, "input-group"], ["id", "dateOfBirth", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["dp", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-calendar"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "modal-title"], ["type", "button", 1, "btn", "btn-inverse", 3, "click"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
        template: function NgbdModalBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Modal with default options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic toggletype accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, NgbdModalBasicComponent_ng_template_8_Template, 20, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);

              return ctx.open1(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Component as Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "You can pass an existing component as content of the modal window.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, NgbdModalBasicComponent_ng_template_21_Template, 12, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

              return ctx.open2(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Modal With Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "You can pass an existing component as content of the modal window.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, NgbdModalBasicComponent_ng_template_32_Template, 12, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_34_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

              return ctx.openWindowCustomClass(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Modal with window custom class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_36_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

              return ctx.openBackDropCustomClass(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Modal with backdrop custom class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_38_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

              return ctx.openSm(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Small modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_40_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

              return ctx.openLg(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Large modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_42_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

              return ctx.openVerticallyCentered(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Modal vertically centered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Stacked modals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, NgbdModalBasicComponent_ng_template_51_Template, 15, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, NgbdModalBasicComponent_ng_template_53_Template, 12, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdModalBasicComponent_Template_button_click_55_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](52);

              return ctx.opensubmodal(_r6);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Launch demo modal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.closeResult);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdModalBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-modal',
            templateUrl: './modal.component.html'
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/notifier/notifier.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/notifier/notifier.component.ts ***!
      \**********************************************************/

    /*! exports provided: NotifierComponent */

    /***/
    function srcAppComponentNotifierNotifierComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierComponent", function () {
        return NotifierComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-notifier */
      "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");

      var NotifierComponent = /*#__PURE__*/function () {
        /**
         * Constructor
         *
         * @param {NotifierService} notifier Notifier service
         */
        function NotifierComponent(notifier) {
          _classCallCheck(this, NotifierComponent);

          this.notifier = notifier;
        }
        /**
         * Show a notification
         *
         * @param {string} type    Notification type
         * @param {string} message Notification message
         */


        _createClass(NotifierComponent, [{
          key: "showNotification",
          value: function showNotification(type, message) {
            this.notifier.notify(type, message);
          }
          /**
           * Hide oldest notification
           */

        }, {
          key: "hideOldestNotification",
          value: function hideOldestNotification() {
            this.notifier.hideOldest();
          }
          /**
           * Hide newest notification
           */

        }, {
          key: "hideNewestNotification",
          value: function hideNewestNotification() {
            this.notifier.hideNewest();
          }
          /**
           * Hide all notifications at once
           */

        }, {
          key: "hideAllNotifications",
          value: function hideAllNotifications() {
            this.notifier.hideAll();
          }
          /**
           * Show a specific notification (with a custom notification ID)
           *
           * @param {string} type    Notification type
           * @param {string} message Notification message
           * @param {string} id      Notification ID
           */

        }, {
          key: "showSpecificNotification",
          value: function showSpecificNotification(type, message, id) {
            this.notifier.show({
              id: id,
              message: message,
              type: type
            });
          }
          /**
           * Hide a specific notification (by a given notification ID)
           *
           * @param {string} id Notification ID
           */

        }, {
          key: "hideSpecificNotification",
          value: function hideSpecificNotification(id) {
            this.notifier.hide(id);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotifierComponent;
      }();

      NotifierComponent.??fac = function NotifierComponent_Factory(t) {
        return new (t || NotifierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]));
      };

      NotifierComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NotifierComponent,
        selectors: [["app-notifier"]],
        decls: 18,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "button-group"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
        template: function NotifierComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Show notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierComponent_Template_button_click_7_listener() {
              return ctx.showNotification("default", "Good evening, you lovely person!");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Default me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierComponent_Template_button_click_9_listener() {
              return ctx.showNotification("info", "This library is built on top of Angular 2.");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Info me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierComponent_Template_button_click_11_listener() {
              return ctx.showNotification("success", "Notification successfully opened.");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Success me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierComponent_Template_button_click_13_listener() {
              return ctx.showNotification("warning", "Warning! But not an error! Just a warning!");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Warning me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotifierComponent_Template_button_click_15_listener() {
              return ctx.showNotification("error", "Whoops, something went wrong. Probably.");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Error me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "notifier-container");
          }
        },
        directives: [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierContainerComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotifierComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notifier',
            templateUrl: './notifier.component.html'
          }]
        }], function () {
          return [{
            type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/pagination/pagination.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/pagination/pagination.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbdpaginationBasicComponent */

    /***/
    function srcAppComponentPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdpaginationBasicComponent", function () {
        return NgbdpaginationBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function NgbdpaginationBasicComponent_ng_template_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Prev");
        }
      }

      function NgbdpaginationBasicComponent_ng_template_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Next");
        }
      }

      function NgbdpaginationBasicComponent_ng_template_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var p_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.getPageSymbol(p_r3));
        }
      }

      var NgbdpaginationBasicComponent = /*#__PURE__*/function () {
        function NgbdpaginationBasicComponent() {
          _classCallCheck(this, NgbdpaginationBasicComponent);

          this.page = 4;
          this.page2 = 1;
          this.currentPage = 3;
          this.disablepage = 3;
          this.isDisabled = true;
        }

        _createClass(NgbdpaginationBasicComponent, [{
          key: "toggleDisabled",
          value: function toggleDisabled() {
            this.isDisabled = !this.isDisabled;
          }
        }, {
          key: "getPageSymbol",
          value: function getPageSymbol(current) {
            return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
          }
        }]);

        return NgbdpaginationBasicComponent;
      }();

      NgbdpaginationBasicComponent.??fac = function NgbdpaginationBasicComponent_Factory(t) {
        return new (t || NgbdpaginationBasicComponent)();
      };

      NgbdpaginationBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdpaginationBasicComponent,
        selectors: [["app-ngbd-pagination"]],
        decls: 86,
        vars: 43,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "directionLinks", "pageChange"], [3, "collectionSize", "page", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageChange"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], ["size", "lg", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "pageChange"], ["size", "sm", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-start", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageChange"], [1, "d-flex", "justify-content-end", 3, "collectionSize", "page", "pageChange"], [3, "collectionSize", "page", "disabled", "pageChange"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "badge", "badge-success", "text-white"], ["aria-label", "Custom pagination", 3, "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["ngbPaginationNumber", ""]],
        template: function NgbdpaginationBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Default pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic Default pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-pagination", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_8_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "directionLinks = false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ngb-pagination", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_11_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "boundaryLinks = true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-pagination", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_14_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Advanced pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "This is Advanced pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "maxSize = 5, rotate = false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ngb-pagination", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_27_listener($event) {
              return ctx.page2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "maxSize = 5, rotate = true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ngb-pagination", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_30_listener($event) {
              return ctx.page2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "maxSize = 5, rotate = true, ellipses = false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ngb-pagination", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_33_listener($event) {
              return ctx.page2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Pagination size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "This is Pagination size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "ngb-pagination", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_44_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "ngb-pagination", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_45_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ngb-pagination", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_46_listener($event) {
              return ctx.currentPage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Pagination Alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Change the alignment of pagination components with flexbox utilities.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ngb-pagination", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_54_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ngb-pagination", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_55_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "ngb-pagination", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_56_listener($event) {
              return ctx.page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Disabled pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "This is Disabled pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Pagination control can be disabled:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "ngb-pagination", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_66_listener($event) {
              return ctx.disablepage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdpaginationBasicComponent_Template_button_click_68_listener() {
              return ctx.toggleDisabled();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Toggle disabled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Custom links ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "A pagination with customized links:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "ngb-pagination", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NgbdpaginationBasicComponent_Template_ngb_pagination_pageChange_79_listener($event) {
              return ctx.pagecustom = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, NgbdpaginationBasicComponent_ng_template_80_Template, 1, 0, "ng-template", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](81, NgbdpaginationBasicComponent_ng_template_81_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](82, NgbdpaginationBasicComponent_ng_template_82_Template, 1, 1, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.page)("directionLinks", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.page)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Current page: ", ctx.page, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 120)("page", ctx.page2)("maxSize", 5)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 120)("page", ctx.page2)("maxSize", 5)("rotate", true)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 120)("page", ctx.page2)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Current page: ", ctx.page2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 50)("page", ctx.currentPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.page);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.disablepage)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collectionSize", 70)("page", ctx.pagecustom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Current page: ", ctx.pagecustom, "");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPaginationNumber"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdpaginationBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-pagination',
            templateUrl: './pagination.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/popover-tooltip/popover-tooltip.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/component/popover-tooltip/popover-tooltip.component.ts ***!
      \************************************************************************/

    /*! exports provided: NgbdPopTooltipComponent */

    /***/
    function srcAppComponentPopoverTooltipPopoverTooltipComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdPopTooltipComponent", function () {
        return NgbdPopTooltipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["p"];

      function NgbdPopTooltipComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Hello, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "!");
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.name);
        }
      }

      function NgbdPopTooltipComponent_ng_template_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "!");
        }

        if (rf & 2) {
          var greeting_r17 = ctx.greeting;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", greeting_r17, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r5.name);
        }
      }

      function NgbdPopTooltipComponent_ng_template_209_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Hello, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "!");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r9.name);
        }
      }

      function NgbdPopTooltipComponent_ng_template_259_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "!");
        }

        if (rf & 2) {
          var greeting_r18 = ctx.greeting;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", greeting_r18, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r13.name);
        }
      }

      var NgbdPopTooltipComponent = /*#__PURE__*/function () {
        function NgbdPopTooltipComponent() {
          _classCallCheck(this, NgbdPopTooltipComponent);

          this.greeting = {};
          this.name = 'World';
        }

        _createClass(NgbdPopTooltipComponent, [{
          key: "changeGreeting",
          value: function changeGreeting(greeting) {
            var isOpen = this.popover.isOpen();
            this.popover.close();

            if (greeting !== this.greeting || !isOpen) {
              this.greeting = greeting;
              this.popover.open(greeting);
            }
          }
        }, {
          key: "toggleWithGreeting",
          value: function toggleWithGreeting(tooltip, greeting) {
            if (tooltip.isOpen()) {
              tooltip.close();
            } else {
              tooltip.open({
                greeting: greeting
              });
            }
          }
        }, {
          key: "recordShown",
          value: function recordShown() {
            this.lastShown = new Date();
          }
        }, {
          key: "recordHidden",
          value: function recordHidden() {
            this.lastHidden = new Date();
          }
        }]);

        return NgbdPopTooltipComponent;
      }();

      NgbdPopTooltipComponent.??fac = function NgbdPopTooltipComponent_Factory(t) {
        return new (t || NgbdPopTooltipComponent)();
      };

      NgbdPopTooltipComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdPopTooltipComponent,
        selectors: [["app-ngbd-popover-tooltip"]],
        viewQuery: function NgbdPopTooltipComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.popover = _t.first);
          }
        },
        decls: 294,
        vars: 27,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "button-box"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-secondary"], ["type", "button", "placement", "right", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", 1, "btn", "btn-secondary"], ["type", "button", "placement", "bottom", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on bottom", 1, "btn", "btn-secondary"], ["type", "button", "placement", "left", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on left", 1, "btn", "btn-secondary"], ["popContent", ""], ["type", "button", "popoverTitle", "Fancy content", 1, "btn", "btn-secondary", 3, "ngbPopover"], ["type", "button", "ngbPopover", "You see, I show up on hover!", "triggers", "mouseenter:mouseleave", "popoverTitle", "Pop title", 1, "btn", "btn-secondary"], ["type", "button", "ngbPopover", "What a great tip!", "triggers", "manual", "popoverTitle", "Pop title", 1, "btn", "btn-outline-secondary", "mr-2", 3, "autoClose", "click"], ["p1", "ngbPopover"], ["type", "button", 1, "btn", "btn-outline-secondary", "mr-2", 3, "click"], [1, "mb-2"], ["type", "button", "popoverTitle", "Pop title", "ngbPopover", "Click inside or press Escape to close", 1, "btn", "btn-outline-secondary", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "ngbPopover", "Click outside or press Escape to close", 1, "btn", "btn-outline-secondary", 3, "autoClose"], ["type", "button", "popoverTitle", "Pop title", "ngbPopover", "Click anywhere or press Escape to close (try the toggling element too)", 1, "btn", "btn-outline-secondary", 3, "autoClose"], ["popover3", "ngbPopover"], ["popoverTitle", "Greeting", "triggers", "manual", 3, "ngbPopover"], ["p", "ngbPopover"], ["type", "button", "placement", "top", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", 1, "btn", "btn-outline-secondary", 3, "shown", "hidden"], ["popover", "ngbPopover"], [1, "col-md-12"], [1, "card", "px-1", "py-5"], ["type", "button", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-outline-secondary", "mb-2"], ["type", "button", "ngbPopover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "container", "body", 1, "btn", "btn-outline-secondary"], [1, "badge", "badge-success", "text-white"], ["type", "button", "ngbPopover", "You see, I show up after 300ms and disappear after 500ms!", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-outline-secondary", "mr-2", 3, "openDelay", "closeDelay"], ["type", "button", "ngbPopover", "You see, I show up after 1s and disappear after 2s!", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-outline-secondary", "mr-2", 3, "openDelay", "closeDelay"], ["type", "button", "ngbTooltip", "You see, I show up on click!", "triggers", "click:blur", 1, "btn", "btn-secondary"], ["type", "button", "placement", "top", "ngbTooltip", "Tooltip on top", 1, "btn", "btn-secondary"], ["type", "button", "placement", "right", "ngbTooltip", "Tooltip on right", 1, "btn", "btn-secondary"], ["type", "button", "placement", "bottom", "ngbTooltip", "Tooltip on bottom", 1, "btn", "btn-secondary"], ["type", "button", "placement", "left", "ngbTooltip", "Tooltip on left", 1, "btn", "btn-secondary"], ["tipContent", ""], ["type", "button", 1, "btn", "btn-secondary", 3, "ngbTooltip"], ["type", "button", "ngbTooltip", "You see, I show up on click!", "triggers", "click:blur", 1, "btn", "btn-outline-secondary"], ["type", "button", "ngbTooltip", "What a great tip!", "triggers", "manual", 1, "btn", "btn-outline-secondary", "mr-2", 3, "autoClose", "click"], ["t", "ngbTooltip"], ["type", "button", "triggers", "click", "ngbTooltip", "Click inside or press Escape to close", 1, "btn", "btn-outline-secondary", 3, "autoClose"], ["type", "button", "triggers", "click", "ngbTooltip", "Click outside or press Escape to close", 1, "btn", "btn-outline-secondary", 3, "autoClose"], ["type", "button", "triggers", "click", "ngbTooltip", "Click anywhere or press Escape to close (try the toggling element too)", 1, "btn", "btn-outline-secondary", 3, "autoClose"], ["tooltip3", "ngbTooltip"], ["type", "button", "triggers", "manual", 1, "btn", "btn-outline-secondary", "mr-2", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], ["t2", "ngbTooltip"], ["t3", "ngbTooltip"], ["type", "button", "ngbTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-outline-secondary", "mb-2"], ["type", "button", "ngbTooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "container", "body", 1, "btn", "btn-outline-secondary"], ["type", "button", "ngbTooltip", "Nice class!", "tooltipClass", "my-custom-class", 1, "btn", "btn-outline-secondary"]],
        template: function NgbdPopTooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Quick and easy popovers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic popovers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Popover on top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Popover on right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Popover on bottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Popover on left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "HTML and bindings in popovers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Popovers can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "<ng-template>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, NgbdPopTooltipComponent_ng_template_27_Template, 4, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " I've got markup and bindings in my popover! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Custom triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " You can easily override open and close triggers by specifying event names (separated by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, ") in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Hover over me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Alternatively you can take full manual control over popover opening / closing events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_53_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);

              return _r2.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Click me to open a popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_56_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);

              return _r2.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Click me to close a popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Automatic closing with keyboard and mouse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " As for some other popup-based widgets, you can set the popover to close automatically upon some events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " click inside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " click outside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " all clicks: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "button", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_80_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](77);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Click to toggle the external popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Context and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " You can optionally pass in a context when manually triggering a popover. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](89, NgbdPopTooltipComponent_ng_template_89_Template, 4, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " How would you like to greet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "strong", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_97_listener() {
              return ctx.changeGreeting({
                greeting: "Bonjour"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " French ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_99_listener() {
              return ctx.changeGreeting({
                greeting: "Gutentag"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " German ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_101_listener() {
              return ctx.changeGreeting({
                greeting: "Hello"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Popover Visibility Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " You can optionally pass in a context when manually triggering a popover. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "button", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("shown", function NgbdPopTooltipComponent_Template_button_shown_110_listener() {
              return ctx.recordShown();
            })("hidden", function NgbdPopTooltipComponent_Template_button_hidden_110_listener() {
              return ctx.recordHidden();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " Open Popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Popover is currently: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " Last shown at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](123, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " Last hidden at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](128, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Append popover in the body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "overflow: hidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " Default popover ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " Popover appended to body ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Open and close delays ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, " When using non-manual triggers, you can control the delay to open and close the popover through the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "openDelay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "closeDelay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " properties. Note that the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "autoClose");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, " feature does not use the close delay, it closes the popover immediately. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " Hover 300ms here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, " Hover 1s here ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Tooltips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Custom and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " You can easily override open and close triggers by specifying event names (separated by :) in the triggers property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " Click me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Quick and easy tooltips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "This is Quick and easy tooltips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " Tooltip on top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, " Tooltip on right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, " Tooltip on bottom ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, " Tooltip on left ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "HTML and bindings in tooltips");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](209, NgbdPopTooltipComponent_ng_template_209_Template, 4, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, " I've got markup and bindings in my tooltip! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "Custom and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, " You can easily override open and close triggers by specifying event names (separated by :) in the triggers property. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, " Click me! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](222, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "button", 41, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_223_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](224);

              return _r10.open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, " Click me to open a tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_226_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](224);

              return _r10.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " Click me to close a tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Automatic closing with keyboard and mouse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, " As for some other popup-based widgets, you can set the tooltip to close automatically upon some events. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, " click inside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, " click outside: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, " all clicks: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "button", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Click to toggle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_250_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](247);

              return _r11.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " Click to toggle the external tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Context and manual triggers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, " You can optionally pass in a context when manually triggering a tooltip. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](259, NgbdPopTooltipComponent_ng_template_259_Template, 4, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "button", 47, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_261_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](262);

              return ctx.toggleWithGreeting(_r14, "Bonjour");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, " French ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "button", 47, 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_264_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](265);

              return ctx.toggleWithGreeting(_r15, "Gutentag");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, " German ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "button", 47, 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdPopTooltipComponent_Template_button_click_267_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

              var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](268);

              return ctx.toggleWithGreeting(_r16, "Hello");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, " English ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Append tooltip in the body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, " Set the container property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e. overflow: hidden). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, " Default tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " Tooltip appended to body ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Tooltip with custom class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, " You can optionally pass in a custom class via tooltipClass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, " Tooltip with custom class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](111);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](210);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbPopover", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", "inside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", "outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbPopover", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_r7.isOpen() ? "open" : "closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](123, 21, ctx.lastShown, "h:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](128, 24, ctx.lastHidden, "h:mm:ss"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("openDelay", 300)("closeDelay", 500);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("openDelay", 1000)("closeDelay", 2000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbTooltip", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", "inside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", "outside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autoClose", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbTooltip", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbTooltip", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbTooltip", _r8);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["\n\t\t\t.card {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.my-custom-class {\n\t\t\t\tfont-size: 125%;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip > .tooltip-inner {\n\t\t\t\tbackground-color: darkgreen;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip .arrow::before {\n\t\t\t\tborder-top-color: darkgreen;\n\t\t\t}\n\t\t"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdPopTooltipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-popover-tooltip',
            templateUrl: './popover-tooltip.component.html',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["\n\t\t\t.card {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.my-custom-class {\n\t\t\t\tfont-size: 125%;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip > .tooltip-inner {\n\t\t\t\tbackground-color: darkgreen;\n\t\t\t}\n\t\t\t.my-custom-class.tooltip .arrow::before {\n\t\t\t\tborder-top-color: darkgreen;\n\t\t\t}\n\t\t"]
          }]
        }], null, {
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['p', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/component/progressbar/progressbar.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/component/progressbar/progressbar.component.ts ***!
      \****************************************************************/

    /*! exports provided: NgbdpregressbarBasicComponent */

    /***/
    function srcAppComponentProgressbarProgressbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdpregressbarBasicComponent", function () {
        return NgbdpregressbarBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var NgbdpregressbarBasicComponent = function NgbdpregressbarBasicComponent(config) {
        _classCallCheck(this, NgbdpregressbarBasicComponent);

        this.height = '20px'; // customize default values of progress bars used by this component tree

        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
      };

      NgbdpregressbarBasicComponent.??fac = function NgbdpregressbarBasicComponent_Factory(t) {
        return new (t || NgbdpregressbarBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]));
      };

      NgbdpregressbarBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdpregressbarBasicComponent,
        selectors: [["app-ngbd-progressbar"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])],
        decls: 111,
        vars: 42,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["type", "success", 3, "value"], ["type", "info", 3, "value"], ["type", "primary", 3, "value", "max"], ["type", "inverse", 3, "value", "max"], ["type", "warning", 3, "value"], ["type", "danger", 3, "value"], ["showValue", "true", "type", "success", 3, "value"], ["type", "info", 3, "showValue", "value"], ["showValue", "true", "type", "primary", 3, "value", "max"], ["type", "inverse", 3, "showValue", "value", "max"], ["showValue", "true", "type", "warning", 3, "value", "max"], ["type", "danger", 3, "showValue", "value", "max"], ["type", "success", 3, "value", "striped"], ["type", "info", 3, "value", "striped"], ["type", "warning", 3, "value", "striped"], ["type", "danger", 3, "value", "striped"], ["type", "warning", 3, "value", "striped", "animated"], [1, "col-md-12"], ["type", "info", "height", "10px", 3, "value"], ["type", "warning", "height", ".5rem", 3, "value"], ["type", "danger", 3, "value", "height"], ["value", "250"], ["value", "500", "type", "info"]],
        template: function NgbdpregressbarBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic Progressbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is Basic Progressbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "ngb-progressbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "ngb-progressbar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "ngb-progressbar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "ngb-progressbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "ngb-progressbar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Progress bars with current value labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "This is Progress bars with current value labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "ngb-progressbar", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "ngb-progressbar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "ngb-progressbar", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "ngb-progressbar", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "ngb-progressbar", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "ngb-progressbar", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Striped progress bars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "This is Striped progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "ngb-progressbar", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "ngb-progressbar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "ngb-progressbar", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "ngb-progressbar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Progress bars with custom labels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "This is basic Default pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "ngb-progressbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Copying file ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "2 of 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "ngb-progressbar", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "50%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "ngb-progressbar", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Completed!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Progress bars with heights");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "This is basic Default pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "ngb-progressbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "ngb-progressbar", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "10px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "ngb-progressbar", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, ".5rem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "ngb-progressbar", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Global configuration of progress bars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "This is Global configuration of progress bars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "This progress bar uses the customized default values.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "ngb-progressbar", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "This progress bar uses the customized default values, but changes the type using an input.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "ngb-progressbar", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 150)("max", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 150)("max", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showValue", true)("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 150)("max", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showValue", true)("value", 150)("max", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 150)("max", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showValue", true)("value", 150)("max", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 25)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 100)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75)("striped", true)("animated", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 100)("striped", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", 100)("height", ctx.height);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.height);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdpregressbarBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-progressbar',
            templateUrl: './progressbar.component.html',
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/rating/rating.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/component/rating/rating.component.ts ***!
      \******************************************************/

    /*! exports provided: NgbdratingBasicComponent */

    /***/
    function srcAppComponentRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdratingBasicComponent", function () {
        return NgbdratingBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgbdratingBasicComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2605");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fill_r5 = ctx.fill;
          var index_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("filled", fill_r5 === 100)("bad", index_r6 < 3);
        }
      }

      function NgbdratingBasicComponent_ng_template_53_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdratingBasicComponent_ng_template_53_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u2665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdratingBasicComponent_ng_template_53_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u2665");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u2665 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var fill_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().fill;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("width", fill_r7, "%");
        }
      }

      function NgbdratingBasicComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, NgbdratingBasicComponent_ng_template_53_span_0_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgbdratingBasicComponent_ng_template_53_span_1_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgbdratingBasicComponent_ng_template_53_span_2_Template, 4, 2, "span", 20);
        }

        if (rf & 2) {
          var fill_r7 = ctx.fill;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", fill_r7 === 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", fill_r7 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", fill_r7 < 100 && fill_r7 > 0);
        }
      }

      function NgbdratingBasicComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Thanks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdratingBasicComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please rate us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NgbdratingBasicComponent = /*#__PURE__*/function () {
        function NgbdratingBasicComponent() {
          _classCallCheck(this, NgbdratingBasicComponent);

          this.currentRate = 8;
          this.currentRate2 = 2;
          this.selected = 0;
          this.hovered = 0;
          this.readonly = false; // for form integration

          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }

        _createClass(NgbdratingBasicComponent, [{
          key: "toggle",
          value: function toggle() {
            if (this.ctrl.disabled) {
              this.ctrl.enable();
            } else {
              this.ctrl.disable();
            }
          }
        }]);

        return NgbdratingBasicComponent;
      }();

      NgbdratingBasicComponent.??fac = function NgbdratingBasicComponent_Factory(t) {
        return new (t || NgbdratingBasicComponent)();
      };

      NgbdratingBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdratingBasicComponent,
        selectors: [["app-ngbd-rating"]],
        decls: 85,
        vars: 29,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [3, "rate", "rateChange"], [1, "m-t-10"], [1, "badge", "badge-success", "text-white"], [3, "rate", "readonly", "rateChange", "hover", "leave"], [3, "click"], ["t", ""], ["max", "5", 3, "rate", "starTemplate", "readonly", "rateChange"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "form-group"], [3, "formControl"], [1, "form-control-feedback"], [4, "ngIf"], [1, "star"], ["class", "heart full", 4, "ngIf"], ["class", "heart", 4, "ngIf"], [1, "heart", "full"], [1, "heart"], [1, "half"]],
        template: function NgbdratingBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Basic demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function NgbdratingBasicComponent_Template_ngb_rating_rateChange_8_listener($event) {
              return ctx.currentRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Custom star template ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Custom rating template provided as child element");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ngb-rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function NgbdratingBasicComponent_Template_ngb_rating_rateChange_22_listener($event) {
              return ctx.currentRate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, NgbdratingBasicComponent_ng_template_23_Template, 2, 4, "ng-template");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Events and readonly ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "This is demo for readonly ratings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "ngb-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function NgbdratingBasicComponent_Template_ngb_rating_rateChange_35_listener($event) {
              return ctx.selected = $event;
            })("hover", function NgbdratingBasicComponent_Template_ngb_rating_hover_35_listener($event) {
              return ctx.hovered = $event;
            })("leave", function NgbdratingBasicComponent_Template_ngb_rating_leave_35_listener() {
              return ctx.hovered = 0;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Selected: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Hovered: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdratingBasicComponent_Template_button_click_44_listener() {
              return ctx.readonly = !ctx.readonly;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Custom decimal rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Custom rating template provided via a variable. Shows fine-grained rating display");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, NgbdratingBasicComponent_ng_template_53_Template, 3, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ngb-rating", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("rateChange", function NgbdratingBasicComponent_Template_ngb_rating_rateChange_55_listener($event) {
              return ctx.currentRate2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Rate: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdratingBasicComponent_Template_button_click_60_listener() {
              return ctx.currentRate2 = 1.5;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "1.50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdratingBasicComponent_Template_button_click_62_listener() {
              return ctx.currentRate2 = 4.72;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "4.72");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Form integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "NgModel and reactive forms can be used without the 'rate' binding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "ngb-rating", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, NgbdratingBasicComponent_div_74_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](75, NgbdratingBasicComponent_div_75_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Model: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdratingBasicComponent_Template_button_click_81_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdratingBasicComponent_Template_button_click_83_listener() {
              return ctx.ctrl.setValue(null);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("This is basic demo for rating ", ctx.currentRate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentRate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.selected)("readonly", ctx.readonly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.hovered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("btn btn-sm m-t-10 btn-outline-", ctx.readonly ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.readonly ? "readonly" : "editable", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rate", ctx.currentRate2)("starTemplate", _r1)("readonly", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.currentRate2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("has-success", ctx.ctrl.valid)("has-danger", ctx.ctrl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControl", ctx.ctrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ctrl.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.ctrl.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("btn btn-sm btn-outline-", ctx.ctrl.disabled ? "danger" : "success", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.ctrl.disabled ? "control disabled" : " control enabled", " ");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".star[_ngcontent-%COMP%] {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\tcolor: #b0c4de;\n\t\t\t}\n\t\t\t.filled[_ngcontent-%COMP%] {\n\t\t\t\tcolor: #1e90ff;\n\t\t\t}\n\t\t\t.heart[_ngcontent-%COMP%] {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tcolor: #d3d3d3;\n\t\t\t}\n\t\t\t.full[_ngcontent-%COMP%] {\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.half[_ngcontent-%COMP%] {\n\t\t\t\tposition: absolute;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.bad[_ngcontent-%COMP%] {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad[_ngcontent-%COMP%] {\n\t\t\tcolor: #ff1e1e;\n\t\t}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdratingBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-rating',
            templateUrl: './rating.component.html',
            styles: ["\n\t\t\t.star {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t\tcolor: #b0c4de;\n\t\t\t}\n\t\t\t.filled {\n\t\t\t\tcolor: #1e90ff;\n\t\t\t}\n\t\t\t.heart {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tcolor: #d3d3d3;\n\t\t\t}\n\t\t\t.full {\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.half {\n\t\t\t\tposition: absolute;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\toverflow: hidden;\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t\t.bad {\n\t\t\tcolor: #deb0b0;\n\t\t}\n\t\t.filled.bad {\n\t\t\tcolor: #ff1e1e;\n\t\t}\n\t\t"]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/tabs/tabs.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/component/tabs/tabs.component.ts ***!
      \**************************************************/

    /*! exports provided: NgbdtabsBasicComponent */

    /***/
    function srcAppComponentTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdtabsBasicComponent", function () {
        return NgbdtabsBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function NgbdtabsBasicComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " title");
        }
      }

      function NgbdtabsBasicComponent_ng_template_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " title");
        }
      }

      function NgbdtabsBasicComponent_ng_template_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " title");
        }
      }

      function NgbdtabsBasicComponent_ng_template_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtabsBasicComponent_ng_template_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NgbdtabsBasicComponent = /*#__PURE__*/function () {
        function NgbdtabsBasicComponent() {
          _classCallCheck(this, NgbdtabsBasicComponent);

          this.currentJustify = 'start';
          this.currentOrientation = 'horizontal';
        }

        _createClass(NgbdtabsBasicComponent, [{
          key: "beforeChange",
          value: function beforeChange($event) {
            if ($event.nextId === 'tab-preventchange2') {
              $event.preventDefault();
            }
          }
        }]);

        return NgbdtabsBasicComponent;
      }();

      NgbdtabsBasicComponent.??fac = function NgbdtabsBasicComponent_Factory(t) {
        return new (t || NgbdtabsBasicComponent)();
      };

      NgbdtabsBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdtabsBasicComponent,
        selectors: [["app-ngbd-tabs"]],
        decls: 113,
        vars: 7,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["title", "Simple"], ["ngbTabContent", ""], ["ngbTabTitle", ""], ["title", "Disabled", 3, "disabled"], ["type", "pills"], ["t", "ngbTabset"], ["id", "tab-selectbyid1", "title", "Simple"], ["id", "tab-selectbyid2"], [1, "btn", "btn-outline-primary", 3, "click"], [3, "tabChange"], ["id", "tab-preventchange1", "title", "Simple"], ["id", "tab-preventchange2", "title", "I can't be selected..."], ["title", "But I can!"], [1, "col-md-12"], [3, "justify"], ["title", "A very long nav title"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", "m-t-20", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn-primary", "btn-sm"], ["ngbButton", "", "type", "radio", "value", "start"], ["ngbButton", "", "type", "radio", "value", "center"], ["ngbButton", "", "type", "radio", "value", "end"], ["ngbButton", "", "type", "radio", "value", "fill"], ["ngbButton", "", "type", "radio", "value", "justified"], ["type", "pills", 3, "orientation"], ["ngbRadioGroup", "", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButton", "", "type", "radio", "value", "horizontal"], ["ngbButton", "", "type", "radio", "value", "vertical"], [1, "p-t-20"]],
        template: function NgbdtabsBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Default Tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic Default pagination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, NgbdtabsBasicComponent_ng_template_10_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, NgbdtabsBasicComponent_ng_template_12_Template, 2, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, NgbdtabsBasicComponent_ng_template_13_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, NgbdtabsBasicComponent_ng_template_15_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Pills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "This is Pills demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "ngb-tabset", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, NgbdtabsBasicComponent_ng_template_25_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, NgbdtabsBasicComponent_ng_template_27_Template, 2, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, NgbdtabsBasicComponent_ng_template_28_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, NgbdtabsBasicComponent_ng_template_30_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Select an active tab by id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "This is Pagination size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ngb-tabset", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "ngb-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, NgbdtabsBasicComponent_ng_template_41_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "ngb-tab", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, NgbdtabsBasicComponent_ng_template_43_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, NgbdtabsBasicComponent_ng_template_44_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdtabsBasicComponent_Template_button_click_46_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r23);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

              return _r8.select("tab-selectbyid2");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Selected tab with \"tab-selectbyid2\" id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Prevent tab change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "This is Prevent tab change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "ngb-tabset", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("tabChange", function NgbdtabsBasicComponent_Template_ngb_tabset_tabChange_55_listener($event) {
              return ctx.beforeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "ngb-tab", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, NgbdtabsBasicComponent_ng_template_57_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "ngb-tab", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, NgbdtabsBasicComponent_ng_template_59_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ngb-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, NgbdtabsBasicComponent_ng_template_61_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Nav Justification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "This is Prevent tab change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "ngb-tabset", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, NgbdtabsBasicComponent_ng_template_71_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, NgbdtabsBasicComponent_ng_template_73_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](74, NgbdtabsBasicComponent_ng_template_74_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "ngb-tab", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](76, NgbdtabsBasicComponent_ng_template_76_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtabsBasicComponent_Template_div_ngModelChange_77_listener($event) {
              return ctx.currentJustify = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Start ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Center ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "End ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Fill ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Justified ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Nav Orientation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "ngb-tabset", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "ngb-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](100, NgbdtabsBasicComponent_ng_template_100_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](102, NgbdtabsBasicComponent_ng_template_102_Template, 3, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](103, NgbdtabsBasicComponent_ng_template_103_Template, 3, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](105, NgbdtabsBasicComponent_ng_template_105_Template, 2, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtabsBasicComponent_Template_div_ngModelChange_106_listener($event) {
              return ctx.currentOrientation = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Horizontal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Vertical ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("justify", ctx.currentJustify);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.currentJustify);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("orientation", ctx.currentOrientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.currentOrientation);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdtabsBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-tabs',
            templateUrl: './tabs.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/timepicker/timepicker.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/component/timepicker/timepicker.component.ts ***!
      \**************************************************************/

    /*! exports provided: NgbTimeStringAdapter, NgbdtimepickerBasicComponent */

    /***/
    function srcAppComponentTimepickerTimepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbTimeStringAdapter", function () {
        return NgbTimeStringAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdtimepickerBasicComponent", function () {
        return NgbdtimepickerBasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgbdtimepickerBasicComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Great choice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtimepickerBasicComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Select some time during lunchtime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtimepickerBasicComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Oh no, it's way too late");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgbdtimepickerBasicComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "It's a bit too early");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var NgbTimeStringAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
        _inherits(NgbTimeStringAdapter, _ng_bootstrap_ng_boot2);

        var _super2 = _createSuper(NgbTimeStringAdapter);

        function NgbTimeStringAdapter() {
          _classCallCheck(this, NgbTimeStringAdapter);

          return _super2.apply(this, arguments);
        }

        _createClass(NgbTimeStringAdapter, [{
          key: "fromModel",
          value: function fromModel(value) {
            if (!value) {
              return null;
            }

            var split = value.split(':');
            return {
              hour: parseInt(split[0], 10),
              minute: parseInt(split[1], 10),
              second: parseInt(split[2], 10)
            };
          }
        }, {
          key: "toModel",
          value: function toModel(time1) {
            if (!time1) {
              return null;
            }

            return "".concat(this.pad(time1.hour), ":").concat(this.pad(time1.minute), ":").concat(this.pad(time1.second));
          }
        }, {
          key: "pad",
          value: function pad(i) {
            return i < 10 ? "0".concat(i) : "".concat(i);
          }
        }]);

        return NgbTimeStringAdapter;
      }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"]);

      NgbTimeStringAdapter.??fac = function NgbTimeStringAdapter_Factory(t) {
        return ??NgbTimeStringAdapter_BaseFactory(t || NgbTimeStringAdapter);
      };

      NgbTimeStringAdapter.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: NgbTimeStringAdapter,
        factory: NgbTimeStringAdapter.??fac
      });

      var ??NgbTimeStringAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](NgbTimeStringAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbTimeStringAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var NgbdtimepickerBasicComponent = /*#__PURE__*/function () {
        function NgbdtimepickerBasicComponent() {
          _classCallCheck(this, NgbdtimepickerBasicComponent);

          this.time = {
            hour: 13,
            minute: 30
          };
          this.meridian = true; // This is for the seconds

          this.seconds = true; // This is for the spinners

          this.spinners = true; // This is for the column step

          this.time2 = {
            hour: 13,
            minute: 30,
            second: 0
          };
          this.hourStep = 1;
          this.minuteStep = 15;
          this.secondStep = 30;
          this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', function (control) {
            var value = control.value;

            if (!value) {
              return null;
            }

            if (value.hour < 12) {
              return {
                tooEarly: true
              };
            }

            if (value.hour > 13) {
              return {
                tooLate: true
              };
            }

            return null;
          });
        }

        _createClass(NgbdtimepickerBasicComponent, [{
          key: "toggleMeridian",
          value: function toggleMeridian() {
            this.meridian = !this.meridian;
          }
        }, {
          key: "toggleSeconds",
          value: function toggleSeconds() {
            this.seconds = !this.seconds;
          }
        }, {
          key: "toggleSpinners",
          value: function toggleSpinners() {
            this.spinners = !this.spinners;
          }
        }]);

        return NgbdtimepickerBasicComponent;
      }();

      NgbdtimepickerBasicComponent.??fac = function NgbdtimepickerBasicComponent_Factory(t) {
        return new (t || NgbdtimepickerBasicComponent)();
      };

      NgbdtimepickerBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgbdtimepickerBasicComponent,
        selectors: [["app-ngbd-timepicker"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([{
          provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
          useClass: NgbTimeStringAdapter
        }])],
        decls: 103,
        vars: 54,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [3, "ngModel", "ngModelChange"], [3, "ngModel", "spinners", "ngModelChange"], [3, "click"], [3, "ngModel", "meridian", "ngModelChange"], [3, "ngModel", "seconds", "ngModelChange"], [1, "col-md-12"], [3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"], [1, "col-md-3"], ["for", "changeHourStep"], ["id", "changeHourStep", "type", "number", 1, "form-control", "form-control", 3, "ngModel", "ngModelChange"], ["for", "changeMinuteStep"], ["id", "changeMinuteStep", "type", "number", 1, "form-control", "form-control", 3, "ngModel", "ngModelChange"], ["for", "changeSecondStep"], ["id", "changeSecondStep", "type", "number", 1, "form-control", "form-control", 3, "ngModel", "ngModelChange"], [1, "m-t-20"], [1, "form-group"], ["required", "", 3, "ngModel", "formControl", "ngModelChange"], [1, "form-control-feedback"], [4, "ngIf"]],
        template: function NgbdtimepickerBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Timepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is basic Timepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-timepicker", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_8_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Spinners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "This is Spinners");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ngb-timepicker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_19_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdtimepickerBasicComponent_Template_button_click_20_listener() {
              return ctx.toggleSpinners();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Meridian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "This is Meridian Timepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "ngb-timepicker", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_29_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdtimepickerBasicComponent_Template_button_click_30_listener() {
              return ctx.toggleMeridian();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Seconds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "This is Seconds with the on off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ngb-timepicker", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_43_listener($event) {
              return ctx.time = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NgbdtimepickerBasicComponent_Template_button_click_44_listener() {
              return ctx.toggleSeconds();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](49, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Custom steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "This is Custom steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "ngb-timepicker", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_57_listener($event) {
              return ctx.time2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Hour Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_input_ngModelChange_62_listener($event) {
              return ctx.hourStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Minute Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_input_ngModelChange_66_listener($event) {
              return ctx.minuteStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Second Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_input_ngModelChange_70_listener($event) {
              return ctx.secondStep = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "pre", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](73, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Custom validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Illustrates custom validation, you have to select time between 12:00 and 13:59");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "ngb-timepicker", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_82_listener($event) {
              return ctx.time3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](84, NgbdtimepickerBasicComponent_div_84_Template, 2, 0, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](85, NgbdtimepickerBasicComponent_div_85_Template, 2, 0, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](86, NgbdtimepickerBasicComponent_div_86_Template, 2, 0, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](87, NgbdtimepickerBasicComponent_div_87_Template, 2, 0, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](91, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Custom time adapter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "This timepicker uses a custom Time adapter that lets you use your own model implementation. In this example we are converting from and to an ISO string (with the format HH:mm:ss)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "ngb-timepicker", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgbdtimepickerBasicComponent_Template_ngb_timepicker_ngModelChange_99_listener($event) {
              return ctx.time1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 44, ctx.time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time)("spinners", ctx.spinners);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("m-t-1 m-t-10 btn btn-sm btn-outline-", ctx.spinners ? "success" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Spinners - ", ctx.spinners ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time)("meridian", ctx.meridian);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("btn btn-sm btn-outline-", ctx.meridian ? "success" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Meridian - ", ctx.meridian ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 46, ctx.time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time)("seconds", ctx.seconds);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("btn btn-sm btn-outline-", ctx.seconds ? "success" : "danger", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Seconds - ", ctx.seconds ? "ON" : "OFF", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](49, 48, ctx.time), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time2)("seconds", true)("hourStep", ctx.hourStep)("minuteStep", ctx.minuteStep)("secondStep", ctx.secondStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.hourStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.minuteStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.secondStep);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](73, 50, ctx.time2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("has-success", ctx.ctrl.valid)("has-danger", !ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time3)("formControl", ctx.ctrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ctrl.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ctrl.errors && ctx.ctrl.errors["required"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ctrl.errors && ctx.ctrl.errors["tooLate"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.ctrl.errors && ctx.ctrl.errors["tooEarly"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](91, 52, ctx.time3), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.time1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Selected time: ", ctx.time1, "");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgbdtimepickerBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ngbd-timepicker',
            templateUrl: './timepicker.component.html',
            providers: [{
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTimeAdapter"],
              useClass: NgbTimeStringAdapter
            }]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/toast/toast-container.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/toast/toast-container.ts ***!
      \****************************************************/

    /*! exports provided: ToastsContainer */

    /***/
    function srcAppComponentToastToastContainerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastsContainer", function () {
        return ToastsContainer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/component/toast/toast.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function ToastsContainer_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) {}

      function ToastsContainer_ngb_toast_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ToastsContainer_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngTemplateOutlet", toast_r1.textOrTpl);
        }
      }

      function ToastsContainer_ngb_toast_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](toast_r1.textOrTpl);
        }
      }

      function ToastsContainer_ngb_toast_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-toast", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("hide", function ToastsContainer_ngb_toast_0_Template_ngb_toast_hide_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var toast_r1 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.toastService.remove(toast_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ToastsContainer_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ToastsContainer_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var toast_r1 = ctx.$implicit;

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](toast_r1.classname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autohide", true)("delay", toast_r1.delay || 5000);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
        }
      }

      var ToastsContainer = /*#__PURE__*/function () {
        function ToastsContainer(toastService) {
          _classCallCheck(this, ToastsContainer);

          this.toastService = toastService;
        }

        _createClass(ToastsContainer, [{
          key: "isTemplate",
          value: function isTemplate(toast) {
            return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
          }
        }]);

        return ToastsContainer;
      }();

      ToastsContainer.??fac = function ToastsContainer_Factory(t) {
        return new (t || ToastsContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      ToastsContainer.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ToastsContainer,
        selectors: [["app-toasts"]],
        hostVars: 2,
        hostBindings: function ToastsContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("ngb-toasts", true);
          }
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hide"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]],
        template: function ToastsContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ToastsContainer_ngb_toast_0_Template, 4, 6, "ngb-toast", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.toastService.toasts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastsContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toasts',
            template: "\n    <ngb-toast\n      *ngFor=\"let toast of toastService.toasts\"\n      [class]=\"toast.classname\"\n      [autohide]=\"true\"\n      [delay]=\"toast.delay || 5000\"\n      (hide)=\"toastService.remove(toast)\"\n    >\n      <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n        <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n      </ng-template>\n\n      <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n    </ngb-toast>\n  ",
            host: {
              '[class.ngb-toasts]': 'true'
            }
          }]
        }], function () {
          return [{
            type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/toast/toast.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/component/toast/toast.component.ts ***!
      \****************************************************/

    /*! exports provided: ToastComponent */

    /***/
    function srcAppComponentToastToastComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
        return ToastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/component/toast/toast.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _toast_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./toast-container */
      "./src/app/component/toast/toast-container.ts");

      function ToastComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "svg", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Fancy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "header here ");
        }
      }

      function ToastComponent_ngb_toast_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-toast", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("hide", function ToastComponent_ngb_toast_31_Template_ngb_toast_hide_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " If you close me, I will automatically re-appear after a few seconds. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autohide", false);
        }
      }

      function ToastComponent_p_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "I'll be back!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ToastComponent_hr_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "hr");
        }
      }

      function ToastComponent_ngb_toast_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Try to mouse hover me. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ToastComponent_ngb_toast_43_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " I will remain visible until you leave again. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ToastComponent_ngb_toast_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngb-toast", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("mouseenter", function ToastComponent_ngb_toast_43_Template_ngb_toast_mouseenter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.autohide = false;
          })("mouseleave", function ToastComponent_ngb_toast_43_Template_ngb_toast_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r13.autohide = true;
          })("hide", function ToastComponent_ngb_toast_43_Template_ngb_toast_hide_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            ctx_r14.showauto = false;
            return ctx_r14.autohide = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ToastComponent_ngb_toast_43_div_1_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ToastComponent_ngb_toast_43_div_2_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("bg-warning", !ctx_r4.autohide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("delay", 5000)("autohide", ctx_r4.autohide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.autohide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r4.autohide);
        }
      }

      function ToastComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "svg", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Danger Danger ! ");
        }
      }

      var ToastComponent = /*#__PURE__*/function () {
        function ToastComponent(toastService) {
          _classCallCheck(this, ToastComponent);

          this.toastService = toastService;
          this.show = true;
          this.showauto = false;
          this.autohide = true;
        }

        _createClass(ToastComponent, [{
          key: "close",
          value: function close() {
            var _this17 = this;

            this.show = false;
            setTimeout(function () {
              return _this17.show = true;
            }, 5000);
          }
        }, {
          key: "showStandard",
          value: function showStandard() {
            this.toastService.show('I am a standard toast');
          }
        }, {
          key: "showSuccess",
          value: function showSuccess() {
            this.toastService.show('I am a success toast', {
              classname: 'bg-success text-light',
              delay: 10000
            });
          }
        }, {
          key: "showDanger",
          value: function showDanger(dangerTpl) {
            this.toastService.show(dangerTpl, {
              classname: 'bg-danger text-light',
              delay: 15000
            });
          }
        }]);

        return ToastComponent;
      }();

      ToastComponent.??fac = function ToastComponent_Factory(t) {
        return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      ToastComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ToastComponent,
        selectors: [["app-ng-toasts"]],
        decls: 61,
        vars: 7,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "mt-3"], ["header", "Hello", 3, "autohide"], ["type", "secondary", 3, "dismissible"], ["ngbToastHeader", ""], ["header", "Click my close icon \u2192", 3, "autohide", "hide", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["header", "Autohide can be cancelled", 3, "delay", "autohide", "bg-warning", "mouseenter", "mouseleave", "hide", 4, "ngIf"], ["ngbTooltip", "Will disappear in 5s", 1, "btn", "btn-primary", 3, "click"], ["ngbTooltip", "Will disappear in 10s", 1, "btn", "btn-success", 3, "click"], ["dangerTpl", ""], ["ngbTooltip", "Will disappear in 15s", 1, "btn", "btn-danger", 3, "click"], ["aria-live", "polite", "aria-atomic", "true"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24"], ["d", "M16.896 10l-4.896-8-4.896 8-7.104-4 3 11v5h18v-5l3-11-7.104 4zm-11.896 10v-2h14v2h-14zm14.2-4h-14.4l-1.612-5.909 4.615 2.598 4.197-6.857 4.197 6.857 4.615-2.598-1.612 5.909z"], [1, "mx-1"], ["header", "Click my close icon \u2192", 3, "autohide", "hide"], ["header", "Autohide can be cancelled", 3, "delay", "autohide", "mouseenter", "mouseleave", "hide"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#fff", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M10.872 6.831l1.695 3.904 3.654-1.561-1.79 3.426 3.333.954-3.417 1.338 2.231 4.196-4.773-2.582-2.869 2.287.413-3.004-3.792-.726 2.93-1.74-1.885-2.512 3.427.646.843-4.626zm-.786-6.831l-1.665 9.119-6.512-1.228 3.639 4.851-5.548 3.294 7.108 1.361-.834 6.076 5.742-4.577 9.438 5.104-4.288-8.064 6.834-2.677-6.661-1.907 3.25-6.22-6.98 2.982-3.523-8.114z"]],
        template: function ToastComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Declarative usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Body only");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ngb-toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " I am a simple static toast. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "With a text header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ngb-toast", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " I am a simple static toast with a header. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Clicking on the close icon won't do anything in this example.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Using a Template as header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ngb-toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ToastComponent_ng_template_22_Template, 5, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Hello, I am toast. Have you noticed my header has been generated from a Template? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ngb-alert", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Clicking on the close icon won't do anything in this example.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Closeable toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, ToastComponent_ngb_toast_31_Template, 2, 1, "ngb-toast", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, ToastComponent_p_32_Template, 2, 0, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Prevent autohide on mouseover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " In this demo, you can show a toast by clicking the button below. It will hide itself after a 5 seconds delay unless you simply hover it with your mouse. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToastComponent_Template_button_click_40_listener() {
              return ctx.showauto = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Click me to show a toast ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, ToastComponent_hr_42_Template, 1, 0, "hr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ToastComponent_ngb_toast_43_Template, 3, 6, "ngb-toast", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Toast management service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToastComponent_Template_button_click_49_listener() {
              return ctx.showStandard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Standard toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToastComponent_Template_button_click_52_listener() {
              return ctx.showSuccess();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Success toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, ToastComponent_ng_template_55_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ToastComponent_Template_button_click_57_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](56);

              return ctx.showDanger(_r5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Danger toast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "app-toasts", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("autohide", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dismissible", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showauto);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showauto);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbToastHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _toast_container__WEBPACK_IMPORTED_MODULE_4__["ToastsContainer"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ng-toasts',
            templateUrl: 'toast.component.html'
          }]
        }], function () {
          return [{
            type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/toast/toast.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/component/toast/toast.service.ts ***!
      \**************************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppComponentToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService() {
          _classCallCheck(this, ToastService);

          this.toasts = [];
        }

        _createClass(ToastService, [{
          key: "show",
          value: function show(textOrTpl) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.toasts.push(Object.assign({
              textOrTpl: textOrTpl
            }, options));
          }
        }, {
          key: "remove",
          value: function remove(toast) {
            this.toasts = this.toasts.filter(function (t) {
              return t !== toast;
            });
          }
        }]);

        return ToastService;
      }();

      ToastService.??fac = function ToastService_Factory(t) {
        return new (t || ToastService)();
      };

      ToastService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ToastService,
        factory: ToastService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/component/typehead/typehead.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/component/typehead/typehead.component.ts ***!
      \**********************************************************/

    /*! exports provided: WikipediaService, NgbdtypeheadBasicComponent */

    /***/
    function srcAppComponentTypeheadTypeheadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WikipediaService", function () {
        return WikipediaService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdtypeheadBasicComponent", function () {
        return NgbdtypeheadBasicComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["instance"];

      function NgbdtypeheadBasicComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
        }

        if (rf & 2) {
          var r_r5 = ctx.result;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/" + r_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", r_r5.name, " ");
        }
      }

      function NgbdtypeheadBasicComponent_span_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "searching...");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function NgbdtypeheadBasicComponent_div_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Sorry, suggestions could not be loaded.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
      var PARAMS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]({
        fromObject: {
          action: 'opensearch',
          format: 'json',
          origin: '*'
        }
      });
      var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
      var statesWithFlags = [{
        name: 'Alabama',
        flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
      }, {
        name: 'Alaska',
        flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
      }, {
        name: 'Arizona',
        flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
      }, {
        name: 'Arkansas',
        flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
      }, {
        name: 'California',
        flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
      }, {
        name: 'Colorado',
        flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
      }, {
        name: 'Connecticut',
        flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
      }, {
        name: 'Delaware',
        flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
      }, {
        name: 'Florida',
        flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
      }, {
        name: 'Georgia',
        flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
      }, {
        name: 'Hawaii',
        flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
      }, {
        name: 'Idaho',
        flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'
      }, {
        name: 'Illinois',
        flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
      }, {
        name: 'Indiana',
        flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
      }, {
        name: 'Iowa',
        flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'
      }, {
        name: 'Kansas',
        flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
      }, {
        name: 'Kentucky',
        flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
      }, {
        name: 'Louisiana',
        flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
      }, {
        name: 'Maine',
        flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'
      }, {
        name: 'Maryland',
        flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
      }, {
        name: 'Massachusetts',
        flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
      }, {
        name: 'Michigan',
        flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
      }, {
        name: 'Minnesota',
        flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
      }, {
        name: 'Mississippi',
        flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
      }, {
        name: 'Missouri',
        flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
      }, {
        name: 'Montana',
        flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
      }, {
        name: 'Nebraska',
        flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
      }, {
        name: 'Nevada',
        flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
      }, {
        name: 'New Hampshire',
        flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
      }, {
        name: 'New Jersey',
        flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
      }, {
        name: 'New Mexico',
        flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
      }, {
        name: 'New York',
        flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
      }, {
        name: 'North Carolina',
        flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
      }, {
        name: 'North Dakota',
        flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
      }, {
        name: 'Ohio',
        flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'
      }, {
        name: 'Oklahoma',
        flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
      }, {
        name: 'Oregon',
        flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
      }, {
        name: 'Pennsylvania',
        flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
      }, {
        name: 'Rhode Island',
        flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
      }, {
        name: 'South Carolina',
        flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
      }, {
        name: 'South Dakota',
        flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
      }, {
        name: 'Tennessee',
        flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
      }, {
        name: 'Texas',
        flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'
      }, {
        name: 'Utah',
        flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'
      }, {
        name: 'Vermont',
        flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
      }, {
        name: 'Virginia',
        flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
      }, {
        name: 'Washington',
        flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
      }, {
        name: 'West Virginia',
        flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
      }, {
        name: 'Wisconsin',
        flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
      }, {
        name: 'Wyoming',
        flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
      }];

      var WikipediaService = /*#__PURE__*/function () {
        function WikipediaService(http) {
          _classCallCheck(this, WikipediaService);

          this.http = http;
        }

        _createClass(WikipediaService, [{
          key: "search",
          value: function search(term) {
            if (term === '') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }

            return this.http.get(WIKI_URL, {
              params: PARAMS.set('search', term)
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response[1];
            }));
          }
        }]);

        return WikipediaService;
      }();

      WikipediaService.??fac = function WikipediaService_Factory(t) {
        return new (t || WikipediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      WikipediaService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: WikipediaService,
        factory: WikipediaService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](WikipediaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();

      var NgbdtypeheadBasicComponent = function NgbdtypeheadBasicComponent(_service) {
        var _this18 = this;

        _classCallCheck(this, NgbdtypeheadBasicComponent);

        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        this.search1 = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return term.length < 2 ? [] : states.filter(function (v) {
              return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }).slice(0, 10);
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.search2 = function (text$) {
          var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());

          var clicksWithClosedPopup$ = _this18.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () {
            return !_this18.instance.isPopupOpen();
          }));

          var inputFocus$ = _this18.focus$;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return (term === '' ? states : states.filter(function (v) {
              return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
            })).slice(0, 10);
          })); // tslint:disable-next-line:semicolon
        };

        this.formatter = function (result) {
          return result.toUpperCase();
        };

        this.search3 = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return term === '' ? [] : states.filter(function (v) {
              return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }).slice(0, 10);
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            return _this18.searching = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (term) {
            return _this18._service.search(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              return _this18.searchFailed = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () {
              _this18.searchFailed = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            return _this18.searching = false;
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.search5 = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
            return term === '' ? [] : statesWithFlags.filter(function (v) {
              return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }).slice(0, 10);
          }) // tslint:disable-next-line:semicolon
          );
        };

        this.formatter5 = function (x) {
          return x.name;
        };
      };

      NgbdtypeheadBasicComponent.??fac = function NgbdtypeheadBasicComponent_Factory(t) {
        return new (t || NgbdtypeheadBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](WikipediaService));
      };

      NgbdtypeheadBasicComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: NgbdtypeheadBasicComponent,
        selectors: [["app-ngbd-typehead"]],
        viewQuery: function NgbdtypeheadBasicComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.instance = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????ProvidersFeature"]([WikipediaService])],
        decls: 76,
        vars: 32,
        consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], ["for", "typeahead-basic"], ["id", "typeahead-basic", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [1, "m-t-10"], ["for", "typeahead-format"], ["id", "typeahead-format", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultFormatter", "ngModelChange"], ["rt", ""], ["for", "typeahead-template"], ["id", "typeahead-template", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange"], ["for", "typeahead-focus"], ["id", "typeahead-focus", "type", "text", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange", "focus", "click"], ["instance", "ngbTypeahead"], [1, "form-group"], ["for", "typeahead-http"], ["id", "typeahead-http", "type", "text", "placeholder", "Wikipedia search", 1, "form-control", 3, "ngModel", "ngbTypeahead", "ngModelChange"], [4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["width", "16", 3, "src"], [1, "invalid-feedback"]],
        template: function NgbdtypeheadBasicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Simple Typeahead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "A typeahead example that gets values from a static string");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Search for a USA state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function NgbdtypeheadBasicComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.model1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](13, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Formatted results");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "A typeahead example that uses a formatter function for string results");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function NgbdtypeheadBasicComponent_Template_input_ngModelChange_23_listener($event) {
              return ctx.model3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](24, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](27, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, "Template for results");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "A typeahead example that uses custom template for results display and uses object as a model");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, NgbdtypeheadBasicComponent_ng_template_35_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function NgbdtypeheadBasicComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.model5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](43, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](47, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](48, "Open on Focus");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](50, "It is possible to get the focus events with the current input value");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, "Search for a state:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function NgbdtypeheadBasicComponent_Template_input_ngModelChange_53_listener($event) {
              return ctx.model2 = $event;
            })("focus", function NgbdtypeheadBasicComponent_Template_input_focus_53_listener($event) {
              return ctx.focus$.next($event.target.value);
            })("click", function NgbdtypeheadBasicComponent_Template_input_click_53_listener($event) {
              return ctx.click$.next($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](55, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](58, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](59, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](63, "Wikipedia search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](65, "It is possible to get the focus events with the current input value");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](66, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](68, "Search for a wiki page:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function NgbdtypeheadBasicComponent_Template_input_ngModelChange_69_listener($event) {
              return ctx.model1 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](70, NgbdtypeheadBasicComponent_span_70_Template, 2, 0, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](71, NgbdtypeheadBasicComponent_div_71_Template, 2, 0, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](75, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.model1)("ngbTypeahead", ctx.search1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](13, 22, ctx.model1), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.model3)("ngbTypeahead", ctx.search3)("resultFormatter", ctx.formatter);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](27, 24, ctx.model3), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.model5)("ngbTypeahead", ctx.search5)("resultTemplate", _r0)("inputFormatter", ctx.formatter5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](43, 26, ctx.model5), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.model2)("ngbTypeahead", ctx.search2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](58, 28, ctx.model2), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("is-invalid", ctx.searchFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.model1)("ngbTypeahead", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.searching);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.searchFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](75, 30, ctx.model1), "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
        styles: [".form-control[_ngcontent-%COMP%] {\n        width: 300px;\n        display: inline;\n      }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](NgbdtypeheadBasicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-ngbd-typehead',
            templateUrl: './typehead.component.html',
            providers: [WikipediaService],
            styles: ["\n      .form-control {\n        width: 300px;\n        display: inline;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: WikipediaService
          }];
        }, {
          instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['instance', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=component-component-module-es5.js.map