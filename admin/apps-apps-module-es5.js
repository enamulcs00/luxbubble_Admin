(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-apps-module"], {
    /***/
    "./src/app/apps/apps.module.ts":
    /*!*************************************!*\
      !*** ./src/app/apps/apps.module.ts ***!
      \*************************************/

    /*! exports provided: AppsModule */

    /***/
    function srcAppAppsAppsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsModule", function () {
        return AppsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar */
      "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _apps_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./apps.routing */
      "./src/app/apps/apps.routing.ts");
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./chat/chat.component */
      "./src/app/apps/chat/chat.component.ts");
      /* harmony import */


      var _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./ticketlist/ticketlist.component */
      "./src/app/apps/ticketlist/ticketlist.component.ts");
      /* harmony import */


      var _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ticketdetails/ticketdetails.component */
      "./src/app/apps/ticketdetails/ticketdetails.component.ts");
      /* harmony import */


      var _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./taskboard/taskboard.component */
      "./src/app/apps/taskboard/taskboard.component.ts");
      /* harmony import */


      var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./fullcalendar/fullcalendar.component */
      "./src/app/apps/fullcalendar/fullcalendar.component.ts");

      var AppsModule = function AppsModule() {
        _classCallCheck(this, AppsModule);
      };

      AppsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppsModule
      });
      AppsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppsModule_Factory(t) {
          return new (t || AppsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
        }), ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_apps_routing__WEBPACK_IMPORTED_MODULE_9__["AppsRoutes"]), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppsModule, {
          declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"], _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_11__["TicketlistComponent"], _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_12__["TicketdetailsComponent"], _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_13__["TaskboardComponent"], _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_14__["FullcalendarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
              provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
              useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
            }), ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_apps_routing__WEBPACK_IMPORTED_MODULE_9__["AppsRoutes"]), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"]],
            declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"], _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_11__["TicketlistComponent"], _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_12__["TicketdetailsComponent"], _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_13__["TaskboardComponent"], _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_14__["FullcalendarComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/apps.routing.ts":
    /*!**************************************!*\
      !*** ./src/app/apps/apps.routing.ts ***!
      \**************************************/

    /*! exports provided: AppsRoutes */

    /***/
    function srcAppAppsAppsRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsRoutes", function () {
        return AppsRoutes;
      });
      /* harmony import */


      var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chat/chat.component */
      "./src/app/apps/chat/chat.component.ts");
      /* harmony import */


      var _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ticketlist/ticketlist.component */
      "./src/app/apps/ticketlist/ticketlist.component.ts");
      /* harmony import */


      var _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ticketdetails/ticketdetails.component */
      "./src/app/apps/ticketdetails/ticketdetails.component.ts");
      /* harmony import */


      var _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./taskboard/taskboard.component */
      "./src/app/apps/taskboard/taskboard.component.ts");
      /* harmony import */


      var _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fullcalendar/fullcalendar.component */
      "./src/app/apps/fullcalendar/fullcalendar.component.ts");

      var AppsRoutes = [{
        path: '',
        children: [{
          path: 'chat',
          component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__["ChatComponent"],
          data: {
            title: 'Chat App',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Chat App'
            }]
          }
        }, {
          path: 'ticketlist',
          component: _ticketlist_ticketlist_component__WEBPACK_IMPORTED_MODULE_1__["TicketlistComponent"],
          data: {
            title: 'Ticket List',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Ticket List'
            }]
          }
        }, {
          path: 'ticketdetails',
          component: _ticketdetails_ticketdetails_component__WEBPACK_IMPORTED_MODULE_2__["TicketdetailsComponent"],
          data: {
            title: 'Ticket Details',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Ticket Details'
            }]
          }
        }, {
          path: 'taskboard',
          component: _taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardComponent"],
          data: {
            title: 'Taskboard',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Taskboard'
            }]
          }
        }, {
          path: 'fullcalendar',
          component: _fullcalendar_fullcalendar_component__WEBPACK_IMPORTED_MODULE_4__["FullcalendarComponent"],
          data: {
            title: 'Full-Calendar',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Full-Calendar'
            }]
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/apps/chat/chat.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/apps/chat/chat.component.ts ***!
      \*********************************************/

    /*! exports provided: ChatComponent */

    /***/
    function srcAppAppsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      function ChatComponent_a_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_a_16_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var user_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.onSelect(user_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", user_r1.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("profile-status ", user_r1.status, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r1.lastmsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r1.time);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-panel": a0
        };
      };

      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent() {
          _classCallCheck(this, ChatComponent);

          this.config = {};
          this.showSidebar = false;
          this.users = [{
            name: 'Steve Rogers',
            avtar: 'assets/images/users/1.jpg',
            status: 'online',
            lastmsg: 'Hey Banner, where are you?',
            time: '9:30 AM'
          }, {
            name: 'Tony Stark',
            avtar: 'assets/images/users/2.jpg',
            status: 'busy',
            lastmsg: 'Thanos is coming.',
            time: '9:30 AM'
          }, {
            name: 'Buckey Barnes',
            avtar: 'assets/images/users/3.jpg',
            status: 'away',
            lastmsg: 'I did not kill your father.',
            time: '9:30 AM'
          }, {
            name: 'Natasha Romanoff',
            avtar: 'assets/images/users/4.jpg',
            status: 'offline',
            lastmsg: 'I am multitasking.',
            time: '9:30 AM'
          }, {
            name: 'Maria Hill',
            avtar: 'assets/images/users/5.jpg',
            status: 'online',
            lastmsg: 'We are not at war.',
            time: '9:30 AM'
          }, {
            name: 'Wanda Maximoff',
            avtar: 'assets/images/users/6.jpg',
            status: 'busy',
            lastmsg: 'We have to save Vision.',
            time: '9:30 AM'
          }, {
            name: 'Carol Danevars',
            avtar: 'assets/images/users/7.jpg',
            status: 'away',
            lastmsg: 'I am coming.',
            time: '9:30 AM'
          }];
          this.selectedUser = this.users[1];
        }

        _createClass(ChatComponent, [{
          key: "mobileSidebar",
          value: function mobileSidebar() {
            this.showSidebar = !this.showSidebar;
          }
        }, {
          key: "onSelect",
          value: function onSelect(user) {
            this.selectedUser = user;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return ChatComponent;
      }();

      ChatComponent.??fac = function ChatComponent_Factory(t) {
        return new (t || ChatComponent)();
      };

      ChatComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ChatComponent,
        selectors: [["ng-component"]],
        decls: 88,
        vars: 15,
        consts: [[1, "left-part", "bg-white", "fixed-left-part", 2, "overflow", "hidden", 3, "ngClass"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "show-left-part", "d-block", "d-md-none", 3, "ngClass", "click"], [1, "position-relative", 2, "height", "100%"], [1, "p-l-15", "p-r-25", "p-t-25", "p-b-25", "d-flex", "align-items-center"], ["src", "assets/images/users/8.jpg", "width", "45", "alt", "user", 1, "rounded-circle"], [1, "text-dark", "m-b-0", "m-l-15", "font-18"], [1, "m-b-0", "font-12"], [1, "fa", "fa-circle", "text-success", "font-10", "m-r-5"], [1, "m-t-0"], [1, "mailbox", "list-style-none"], [1, "message-center", 2, "height", "calc(100vh - 215px)", 3, "perfectScrollbar"], ["href", "javascript:void(0)", "class", "message-item", "id", "chat_user_1", 3, "click", 4, "ngFor", "ngForOf"], [1, "right-part"], [1, "card"], [1, "p-l-20", "p-r-25", "p-t-25", "p-b-25", "bg-info", "d-flex", "align-items-center"], ["width", "45", "alt", "user", 1, "rounded-circle", 3, "src"], [1, "text-white", "m-b-0", "m-l-15", "font-18"], [1, "ml-auto"], ["ngbDropdown", "", "placement", "bottom-right"], ["ngbDropdownToggle", "", "href", "javascript: void(0)", "id", "dropdownMenuLink", 1, "text-white"], [1, "mdi", "mdi-dots-vertical", "font-20"], ["ngbDropdownMenu", ""], ["href", "#", 1, "dropdown-item"], [1, "card-body", "p-t-0", "p-r-0"], [1, "chat-box", "p-r-15", 2, "height", "calc(100vh - 300px)", "position", "relative", 3, "perfectScrollbar"], [1, "chat-list"], [1, "chat-item"], [1, "chat-img"], ["alt", "user", 3, "src"], [1, "chat-content"], [1, "font-medium"], [1, "box", "bg-light-info"], [1, "chat-time"], [1, "odd", "chat-item"], [1, "box", "bg-light-inverse"], [1, "card-body", "border-top"], [1, "row"], [1, "col-9"], [1, "input-field", "m-t-0", "m-b-0"], ["id", "textarea1", "placeholder", "Type and enter", "type", "text", 1, "form-control", "border-0"], [1, "col-3"], ["href", "javascript:void(0)", 1, "btn-circle", "btn-lg", "btn-cyan", "float-right", "text-white"], [1, "fas", "fa-paper-plane"], ["href", "javascript:void(0)", "id", "chat_user_1", 1, "message-item", 3, "click"], [1, "user-img"], ["alt", "user", 1, "rounded-circle", 3, "src"], [1, "mail-contnet"], [1, "message-title"], [1, "mail-desc"], [1, "time"]],
        template: function ChatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_Template_a_click_1_listener() {
              return ctx.mobileSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Bruce Banner ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, ChatComponent_a_16_Template, 11, 7, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Contact Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Mute Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Delete Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ul", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h6", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Lorem Ipsum is simply dummy text of the printing & type setting industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "10:56 am");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h6", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "It\u2019s Great opportunity to work.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "10:57 am");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "I would love to join the team.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Whats budget of the new project.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "10:59 am");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h6", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Well we have good budget for the project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "11:00 am");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c0, ctx.showSidebar));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.showSidebar ? "ti-close" : "ti-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.selectedUser.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedUser.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.selectedUser.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedUser.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.selectedUser.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedUser.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.selectedUser.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.selectedUser.name);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './chat.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/fullcalendar/fullcalendar.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/apps/fullcalendar/fullcalendar.component.ts ***!
      \*************************************************************/

    /*! exports provided: FullcalendarComponent */

    /***/
    function srcAppAppsFullcalendarFullcalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullcalendarComponent", function () {
        return FullcalendarComponent;
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


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      "./node_modules/date-fns/esm/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar */
      "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["modalContent"];

      function FullcalendarComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Event action occurred");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FullcalendarComponent_ng_template_2_Template_button_click_3_listener() {
            var close_r5 = ctx.close;
            return close_r5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Action: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Event: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FullcalendarComponent_ng_template_2_Template_button_click_17_listener() {
            var close_r5 = ctx.close;
            return close_r5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.modalData == null ? null : ctx_r1.modalData.action);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 2, ctx_r1.modalData == null ? null : ctx_r1.modalData.event));
        }
      }

      function FullcalendarComponent_mwl_calendar_month_view_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-month-view", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dayClicked", function FullcalendarComponent_mwl_calendar_month_view_27_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r8.dayClicked($event.day);
          })("eventClicked", function FullcalendarComponent_mwl_calendar_month_view_27_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_month_view_27_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r11.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh)("activeDayIsOpen", ctx_r2.activeDayIsOpen);
        }
      }

      function FullcalendarComponent_mwl_calendar_week_view_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-week-view", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("eventClicked", function FullcalendarComponent_mwl_calendar_week_view_28_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r12.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_week_view_28_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("refresh", ctx_r3.refresh);
        }
      }

      function FullcalendarComponent_mwl_calendar_day_view_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mwl-calendar-day-view", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("eventClicked", function FullcalendarComponent_mwl_calendar_day_view_29_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r15.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function FullcalendarComponent_mwl_calendar_day_view_29_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r17.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx_r4.viewDate)("events", ctx_r4.events)("refresh", ctx_r4.refresh);
        }
      }

      var colors = {
        red: {
          primary: '#ad2121',
          secondary: '#FAE3E3'
        },
        blue: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        yellow: {
          primary: '#e3bc08',
          secondary: '#FDF1BA'
        }
      };

      var FullcalendarComponent = /*#__PURE__*/function () {
        function FullcalendarComponent(modal) {
          var _this = this;

          _classCallCheck(this, FullcalendarComponent);

          this.modal = modal;
          this.view = 'month';
          this.viewDate = new Date();
          this.actions = [{
            label: '<i class="fa fa-fw fa-pencil text-white"></i>',
            onClick: function onClick(_ref) {
              var event = _ref.event;

              _this.handleEvent('Edited', event);
            }
          }, {
            label: '<i class="fa fa-fw fa-times  text-white"></i>',
            onClick: function onClick(_ref2) {
              var event = _ref2.event;
              _this.events = _this.events.filter(function (iEvent) {
                return iEvent !== event;
              });

              _this.handleEvent('Deleted', event);
            }
          }];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.events = [{
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
            title: 'A 3 day event',
            color: colors.red,
            actions: this.actions
          }, {
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
            title: 'An event with no end date',
            color: colors.yellow,
            actions: this.actions
          }, {
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: colors.blue
          }, {
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
            end: new Date(),
            title: 'A draggable and resizable event',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
              beforeStart: true,
              afterEnd: true
            },
            draggable: true
          }];
          this.activeDayIsOpen = true;
        }

        _createClass(FullcalendarComponent, [{
          key: "dayClicked",
          value: function dayClicked(_ref3) {
            var date = _ref3.date,
                events = _ref3.events;

            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
              if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
                this.activeDayIsOpen = false;
              } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
              }
            }
          }
        }, {
          key: "eventTimesChanged",
          value: function eventTimesChanged(_ref4) {
            var event = _ref4.event,
                newStart = _ref4.newStart,
                newEnd = _ref4.newEnd;
            event.start = newStart;
            event.end = newEnd;
            this.handleEvent('Dropped or resized', event);
            this.refresh.next();
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(action, event) {
            this.modalData = {
              event: event,
              action: action
            };
            this.modal.open(this.modalContent, {
              size: 'lg'
            });
          }
        }, {
          key: "addEvent",
          value: function addEvent() {
            this.events.push({
              title: 'New event',
              start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
              end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
              color: colors.red,
              draggable: true,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            });
            this.refresh.next();
          }
        }]);

        return FullcalendarComponent;
      }();

      FullcalendarComponent.??fac = function FullcalendarComponent_Factory(t) {
        return new (t || FullcalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      FullcalendarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FullcalendarComponent,
        selectors: [["app-fullcalendar"]],
        viewQuery: function FullcalendarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        decls: 30,
        vars: 20,
        consts: [[1, "card"], [1, "card-body"], ["modalContent", ""], [1, "row"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-success", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-info", 3, "view", "viewDate", "viewDateChange"], [1, "col-md-4", "text-center"], [1, "col-md-4", "text-right"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]],
        template: function FullcalendarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, FullcalendarComponent_ng_template_2_Template, 19, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_7_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_7_listener() {
              return ctx.activeDayIsOpen = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Previous ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_9_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_11_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function FullcalendarComponent_Template_div_viewDateChange_11_listener() {
              return ctx.activeDayIsOpen = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FullcalendarComponent_Template_div_click_19_listener() {
              return ctx.view = "month";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FullcalendarComponent_Template_div_click_21_listener() {
              return ctx.view = "week";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FullcalendarComponent_Template_div_click_23_listener() {
              return ctx.view = "day";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Day ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, FullcalendarComponent_mwl_calendar_month_view_27_Template, 1, 4, "mwl-calendar-month-view", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, FullcalendarComponent_mwl_calendar_week_view_28_Template, 1, 3, "mwl-calendar-week-view", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, FullcalendarComponent_mwl_calendar_day_view_29_Template, 1, 3, "mwl-calendar-day-view", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](16, 16, ctx.viewDate, ctx.view + "ViewTitle", "en"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx.view === "day");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitchCase", "day");
          }
        },
        directives: [angular_calendar__WEBPACK_IMPORTED_MODULE_4__["??f"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["??h"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["??g"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarDayViewComponent"]],
        pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_4__["??i"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvZnVsbGNhbGVuZGFyL2Z1bGxjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FullcalendarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-fullcalendar',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            templateUrl: './fullcalendar.component.html',
            styleUrls: ['./fullcalendar.component.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, {
          modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modalContent', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/apps/taskboard/taskboard.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/apps/taskboard/taskboard.component.ts ***!
      \*******************************************************/

    /*! exports provided: TaskboardComponent */

    /***/
    function srcAppAppsTaskboardTaskboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function () {
        return TaskboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function TaskboardComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var todo_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("", todo_r4["class"], " taskboard-task cursor-pointer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](todo_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](todo_r4.desc);
        }
      }

      function TaskboardComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var inprocess_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("", inprocess_r5["class"], " taskboard-task cursor-pointer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](inprocess_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](inprocess_r5.desc);
        }
      }

      function TaskboardComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var pendingtask_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("", pendingtask_r6["class"], " taskboard-task cursor-pointer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](pendingtask_r6.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](pendingtask_r6.desc);
        }
      }

      function TaskboardComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var taskdone_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("", taskdone_r7["class"], " taskboard-task cursor-pointer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](taskdone_r7.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](taskdone_r7.desc);
        }
      }

      var TaskboardComponent = /*#__PURE__*/function () {
        function TaskboardComponent() {
          _classCallCheck(this, TaskboardComponent);

          this.todos = [{
            title: 'QA Testing',
            desc: 'Etiam porta sem malesuada magna mollis euismod.',
            "class": ''
          }, {
            title: 'Layout design',
            desc: 'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            "class": 'task-status-danger'
          }, {
            title: 'Fix navigation menu',
            desc: 'Donec sed odio dui.',
            "class": 'task-status-info'
          }, {
            title: 'Update bootstrap 4',
            desc: 'Aenean lacinia bibendum nulla sed consectetur.',
            "class": ''
          }, {
            title: 'Run build tools',
            desc: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
            "class": ''
          }, {
            title: 'List article ideas',
            desc: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
            "class": 'task-status-success'
          }, {
            title: 'Reactjs fixes',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            "class": ''
          }, {
            title: 'Implement SSL',
            desc: 'Etiam porta sem malesuada magna mollis euismod.',
            "class": 'task-status-warning'
          }];
          this.process = [{
            title: 'QOS Assessment',
            desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
            "class": ''
          }, {
            title: 'Schedule new tasks',
            desc: 'Sed posuere consectetur est at lobortis.',
            "class": 'task-status-warning'
          }, {
            title: 'Add dashboard variants',
            desc: 'Nulla vitae elit libero, a pharetra augue.',
            "class": ''
          }, {
            title: 'Extended color scheme support',
            desc: 'Morbi leo risus, porta ac consectetur ac, vestibulum ateros.',
            "class": ''
          }, {
            title: 'Merge unit tests',
            desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
            "class": 'task-status-info'
          }, {
            title: 'Test final version',
            desc: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
            "class": ''
          }];
          this.pendings = [{
            title: 'Integrate Angular 4',
            desc: 'Nulla vitae elit libero, a pharetra augue.',
            "class": ''
          }, {
            title: 'Additional fields',
            desc: 'Donec id elit non mi porta gravida at eget metus.',
            "class": ''
          }, {
            title: 'Draggable task board',
            desc: 'Sed posuere consectetur est at lobortis.',
            "class": 'task-status-danger'
          }, {
            title: 'Setup CI server',
            desc: 'Maecenas faucibus mollis interdum.',
            "class": 'task-status-danger'
          }, {
            title: 'Assign new tasks',
            desc: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
            "class": ''
          }, {
            title: 'Contact administrator',
            desc: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
            "class": ''
          }, {
            title: 'Commit changes',
            desc: 'Aenean lacinia bibendum nulla sed consectetur.',
            "class": ''
          }];
          this.done = [{
            title: 'Store new files',
            desc: 'Sed posuere consectetur est at lobortis.',
            "class": 'task-status-info'
          }, {
            title: 'Build landing page',
            desc: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
            "class": ''
          }, {
            title: 'Setup basic layout',
            desc: 'Vestibulum id ligula porta felis euismod semper.',
            "class": ''
          }, {
            title: 'Graphical fixes',
            desc: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            "class": ''
          }, {
            title: 'Email alerts',
            desc: 'Donec sed odio dui.',
            "class": 'task-status-warning'
          }];
        }

        _createClass(TaskboardComponent, [{
          key: "drop",
          value: function drop(event) {
            if (event.previousContainer === event.container) {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            } else {
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
          }
        }]);

        return TaskboardComponent;
      }();

      TaskboardComponent.??fac = function TaskboardComponent_Factory(t) {
        return new (t || TaskboardComponent)();
      };

      TaskboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TaskboardComponent,
        selectors: [["app-taskboard"]],
        decls: 27,
        vars: 4,
        consts: [[1, "card"], ["cdkDropListGroup", "", 1, "card-body"], [1, "taskboard", "page-height"], [1, "taskboard-wrapper"], [1, "taskboard-list"], [1, "taskboard-header"], ["cdkDropList", "", 1, "taskboard-cards", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "class", 4, "ngFor", "ngForOf"], ["cdkDrag", ""], [1, "taskboard-task-title"], [1, "card-text", "text-muted"]],
        template: function TaskboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Todos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function TaskboardComponent_Template_div_cdkDropListDropped_7_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, TaskboardComponent_div_8_Template, 5, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "In Process");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function TaskboardComponent_Template_div_cdkDropListDropped_13_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, TaskboardComponent_div_14_Template, 5, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Pending todos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function TaskboardComponent_Template_div_cdkDropListDropped_19_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, TaskboardComponent_div_20_Template, 5, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Task Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("cdkDropListDropped", function TaskboardComponent_Template_div_cdkDropListDropped_25_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, TaskboardComponent_div_26_Template, 5, 5, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.todos);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.process);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.pendings);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.done);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["[_nghost-%COMP%] {\n  padding: 0 !important;\n  height: 100%;\n}\n\n.gu-mirror[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 0.125rem;\n  padding: 0.5rem;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy90YXNrYm9hcmQvdGFza2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcHMvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ndS1taXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgb3BhY2l0eTogMTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TaskboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-taskboard',
            templateUrl: './taskboard.component.html',
            styleUrls: ['./taskboard.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/ticketdetails/ticketdetails.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/apps/ticketdetails/ticketdetails.component.ts ***!
      \***************************************************************/

    /*! exports provided: TicketdetailsComponent */

    /***/
    function srcAppAppsTicketdetailsTicketdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketdetailsComponent", function () {
        return TicketdetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! c3 */
      "./node_modules/c3/c3.js");
      /* harmony import */


      var c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");

      var _c0 = function _c0() {
        return {
          height: "200px"
        };
      };

      var TicketdetailsComponent = /*#__PURE__*/function () {
        function TicketdetailsComponent() {
          _classCallCheck(this, TicketdetailsComponent);
        }

        _createClass(TicketdetailsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var chart = c3__WEBPACK_IMPORTED_MODULE_1__["generate"]({
              bindto: '#visitor',
              data: {
                columns: [['Open', 4], ['Closed', 2], ['In progress', 2], ['Other', 0]],
                type: 'donut'
              },
              donut: {
                label: {
                  show: false
                },
                title: 'Tickets',
                width: 35
              },
              legend: {
                hide: true
              },
              color: {
                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
              }
            });
          }
        }]);

        return TicketdetailsComponent;
      }();

      TicketdetailsComponent.??fac = function TicketdetailsComponent_Factory(t) {
        return new (t || TicketdetailsComponent)();
      };

      TicketdetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TicketdetailsComponent,
        selectors: [["ng-component"]],
        decls: 128,
        vars: 3,
        consts: [[1, "row"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "list-unstyled", "m-t-40"], [1, "media"], ["src", "assets/images/users/2.jpg", "width", "60", "alt", "Generic placeholder image", 1, "m-r-15"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "media", "my-4"], ["src", "assets/images/users/1.jpg", "width", "60", "alt", "Generic placeholder image", 1, "m-r-15"], [1, "m-b-20"], ["method", "post"], ["type", "button", 1, "m-t-20", "m-r-5", "btn", "waves-effect", "waves-light", "btn-success"], ["type", "button", 1, "m-t-20", "btn", "waves-effect", "waves-light", "btn-info"], [1, "col-lg-4"], [1, "card-body", "bg-light"], [1, "row", "text-center"], [1, "col-6", "m-t-10", "m-b-10"], [1, "label", "label-warning"], [1, "p-t-20"], [1, "m-t-30"], ["type", "button", 1, "m-t-20", "btn", "waves-effect", "waves-light", "btn-success"], [1, "card-body", "text-center"], [1, "profile-pic", "m-b-20", "m-t-20"], ["src", "assets/images/users/5.jpg", "width", "150", "alt", "user", 1, "rounded-circle"], [1, "m-t-20", "m-b-0"], ["href", "mailto:danielkristeen@gmail.com"], [1, "row", "text-center", "m-t-40"], [1, "col-4"], [1, "font-bold"], [1, "p-25", "border-top", "m-t-15"], [1, "col-6", "border-right"], ["href", "#", 1, "link", "d-flex", "align-items-center", "justify-content-center", "font-medium"], [1, "mdi", "mdi-message", "font-20", "m-r-5"], [1, "col-6"], [1, "mdi", "mdi-developer-board", "font-20", "m-r-5"], ["id", "visitor", 1, "m-t-20", 2, "height", "290px", "width", "100%"]],
        template: function TicketdetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Ticket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Hi There, i was wondering, do you provide a service to build custom pages. I need some pages for a ticket system similar to the one you have. Please advise if you provide this service and i will send through my requirements. Regards. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Ticket Replies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Agent Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Agent Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Write a reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "quill-editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Reply & close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Ticket Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "In Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " May 2, 2018 9:49 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h5", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Ticket Creator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h5", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Support Staff");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Agent Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "User Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h4", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Daniel Kristeen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "danielkristeen@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h3", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h3", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h3", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Ticket Statestics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillEditorComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicketdetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './ticketdetails.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/apps/ticketlist/ticketlist.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/apps/ticketlist/ticketlist.component.ts ***!
      \*********************************************************/

    /*! exports provided: TicketlistComponent */

    /***/
    function srcAppAppsTicketlistTicketlistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TicketlistComponent", function () {
        return TicketlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TicketlistComponent = /*#__PURE__*/function () {
        function TicketlistComponent() {
          _classCallCheck(this, TicketlistComponent);
        }

        _createClass(TicketlistComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return TicketlistComponent;
      }();

      TicketlistComponent.??fac = function TicketlistComponent_Factory(t) {
        return new (t || TicketlistComponent)();
      };

      TicketlistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TicketlistComponent,
        selectors: [["ng-component"]],
        decls: 322,
        vars: 0,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "m-t-20"], [1, "col-md-6", "col-lg-3", "col-xlg-3"], [1, "card", "card-hover"], [1, "box", "bg-info", "text-center"], [1, "font-light", "text-white"], [1, "text-white"], [1, "box", "bg-primary", "text-center"], [1, "box", "bg-success", "text-center"], [1, "box", "bg-dark", "text-center"], [1, "table-responsive"], ["id", "zero_config", 1, "table", "table-striped", "table-bordered", "no-wrap"], [1, "label", "label-warning"], ["href", "ticket-detail.html", 1, "font-medium", "link"], ["href", "ticket-detail.html", 1, "font-bold", "link"], [1, "label", "label-danger"], [1, "label", "label-success"], [1, "pagination", "float-right"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "page-link"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], [1, "page-item"], [1, "sr-only"]],
        template: function TicketlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Support Tickets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "2,064");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Total Tickets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "1,738");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Responded");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "1100");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Resolve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "964");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Created by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Agent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "In Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Elegant Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "276377");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Elegant Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Eric Pratt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "2018/05/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Fazz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "AdminX Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "1234251");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "AdminX Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Nirav Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "2018/05/11");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Steve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Opened");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Admin-Pro Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "1020345");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Admin-Pro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Vishal Bhatt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "2018/04/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "In Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Elegant Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "7810203");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Elegant Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Eric Pratt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "2018/01/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Fazz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "In Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "AdminX Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "2103450");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "AdminX Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Nirav Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "2018/05/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "In Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Admin-Pro Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "2140530");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Admin-Pro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Vishal Bhatt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "2018/07/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Steve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Opened");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Elegant Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "4500123");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Elegant Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Eric Pratt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "2018/05/10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Fazz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Elegant Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "1230450");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Elegant Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Eric Pratt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "2018/05/14");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "AdminX Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "1240503");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "AdminX Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Nirav Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "2018/02/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Steve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Opened");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Admin-Pro Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "1250304");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Admin-Pro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Vishal Bhatt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "2018/05/21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Fazz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Opened");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Elegant Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "1470250");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Elegant Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Eric Pratt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "2018/05/11");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "Closed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "Admin-Pro Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "1450023");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Admin-Pro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Vishal Bhatt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "2018/05/13");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Steve");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "In Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "AdminX Theme Side Menu Open OnClick");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "1420530");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "AdminX Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "Nirav Joshi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "2018/10/01");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Fazz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "tfoot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, "Created by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Agent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "li", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](310, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "(current)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TicketlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './ticketlist.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=apps-apps-module-es5.js.map