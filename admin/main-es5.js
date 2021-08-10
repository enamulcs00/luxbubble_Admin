(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function src$$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: Approutes */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Approutes", function () {
        return Approutes;
      });
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var _services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/authguard.guard */
      "./src/app/services/authguard.guard.ts");

      var Approutes = [{
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | dashboards-dashboard-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./dashboards/dashboard.module */
            "./src/app/dashboards/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'starter',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | starter-starter-module */
            "starter-starter-module").then(__webpack_require__.bind(null,
            /*! ./starter/starter.module */
            "./src/app/starter/starter.module.ts")).then(function (m) {
              return m.StarterModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | component-component-module */
            "component-component-module").then(__webpack_require__.bind(null,
            /*! ./component/component.module */
            "./src/app/component/component.module.ts")).then(function (m) {
              return m.ComponentsModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'cards',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | cards-cards-module */
            "cards-cards-module").then(__webpack_require__.bind(null,
            /*! ./cards/cards.module */
            "./src/app/cards/cards.module.ts")).then(function (m) {
              return m.CardsModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | icons-icons-module */
            "icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./icons/icons.module */
            "./src/app/icons/icons.module.ts")).then(function (m) {
              return m.IconsModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | form-forms-module */
            [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("form-forms-module")]).then(__webpack_require__.bind(null,
            /*! ./form/forms.module */
            "./src/app/form/forms.module.ts")).then(function (m) {
              return m.FormModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'auth',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | authentication-authentication-module */
            "authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | table-tables-module */
            [__webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null,
            /*! ./table/tables.module */
            "./src/app/table/tables.module.ts")).then(function (m) {
              return m.TablesModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | charts-charts-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null,
            /*! ./charts/charts.module */
            "./src/app/charts/charts.module.ts")).then(function (m) {
              return m.ChartModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | widgets-widgets-module */
            "widgets-widgets-module").then(__webpack_require__.bind(null,
            /*! ./widgets/widgets.module */
            "./src/app/widgets/widgets.module.ts")).then(function (m) {
              return m.WidgetsModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'ecom',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | ecommerce-ecom-module */
            "ecommerce-ecom-module").then(__webpack_require__.bind(null,
            /*! ./ecommerce/ecom.module */
            "./src/app/ecommerce/ecom.module.ts")).then(function (m) {
              return m.EcomModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'timeline',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | timeline-timeline-module */
            "timeline-timeline-module").then(__webpack_require__.bind(null,
            /*! ./timeline/timeline.module */
            "./src/app/timeline/timeline.module.ts")).then(function (m) {
              return m.TimelineModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'extra-component',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | extra-component-extra-component-module */
            "extra-component-extra-component-module").then(__webpack_require__.bind(null,
            /*! ./extra-component/extra-component.module */
            "./src/app/extra-component/extra-component.module.ts")).then(function (m) {
              return m.ExtraComponentModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'apps',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | apps-apps-module */
            [__webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~form-forms-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null,
            /*! ./apps/apps.module */
            "./src/app/apps/apps.module.ts")).then(function (m) {
              return m.AppsModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'apps/email',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | apps-email-mail-module */
            "apps-email-mail-module").then(__webpack_require__.bind(null,
            /*! ./apps/email/mail.module */
            "./src/app/apps/email/mail.module.ts")).then(function (m) {
              return m.MailModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'maps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | maps-maps-module */
            "maps-maps-module").then(__webpack_require__.bind(null,
            /*! ./maps/maps.module */
            "./src/app/maps/maps.module.ts")).then(function (m) {
              return m.MapsModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }, {
          path: 'pages',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-pages-module */
            [__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~apps-apps-module~dashboards-dashboard-module~pages-pages-module"), __webpack_require__.e("default~dashboards-dashboard-module~pages-pages-module~table-tables-module"), __webpack_require__.e("default~apps-apps-module~pages-pages-module"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null,
            /*! ./pages/pages.module */
            "./src/app/pages/pages.module.ts")).then(function (m) {
              return m.PagesModule;
            });
          },
          canActivate: [_services_authguard_guard__WEBPACK_IMPORTED_MODULE_2__["AuthguardGuard"]]
        }]
      }, {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"],
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | authentication-authentication-module */
            "authentication-authentication-module").then(__webpack_require__.bind(null,
            /*! ./authentication/authentication.module */
            "./src/app/authentication/authentication.module.ts")).then(function (m) {
              return m.AuthenticationModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: '/authentication/404'
      }];
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
      /* harmony import */


      var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/full/full.component */
      "./src/app/layouts/full/full.component.ts");
      /* harmony import */


      var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/blank/blank.component */
      "./src/app/layouts/blank/blank.component.ts");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./shared/spinner.component */
      "./src/app/shared/spinner.component.ts");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _services_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/auth-interceptor.interceptor */
      "./src/app/services/auth-interceptor.interceptor.ts");
      /* harmony import */


      var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./services/error.interceptor */
      "./src/app/services/error.interceptor.ts");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__);

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _services_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
          timeOut: 1000
        }), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], {
          useHash: false
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
        }), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_25__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_25__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
              timeOut: 1000
            }), _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["Approutes"], {
              useHash: false
            }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'
            }), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_25__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"]],
            providers: [{
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
              useClass: _services_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptorInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
              useClass: _services_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/blank/blank.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/layouts/blank/blank.component.ts ***!
      \**************************************************/

    /*! exports provided: BlankComponent */

    /***/
    function srcAppLayoutsBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var BlankComponent = function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      };

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank-layout"]],
        decls: 1,
        vars: 0,
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank-layout',
            templateUrl: './blank.component.html',
            styleUrls: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/full/full.component.ts":
    /*!************************************************!*\
      !*** ./src/app/layouts/full/full.component.ts ***!
      \************************************************/

    /*! exports provided: FullComponent */

    /***/
    function srcAppLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
        return FullComponent;
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


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/header-navigation/navigation.component */
      "./src/app/shared/header-navigation/navigation.component.ts");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
      /* harmony import */


      var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/sidebar/sidebar.component */
      "./src/app/shared/sidebar/sidebar.component.ts");
      /* harmony import */


      var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/breadcrumb/breadcrumb.component */
      "./src/app/shared/breadcrumb/breadcrumb.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function FullComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
        }
      }

      function FullComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Layout Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.options.theme = ctx_r2.options.theme == "light" ? "dark" : "light";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dark Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.options.sidebarpos = ctx_r4.options.sidebarpos == "fixed" ? "absolute" : "fixed";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fixed Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.options.headerpos = ctx_r5.options.headerpos == "fixed" ? "absolute" : "fixed";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fixed Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.options.boxed = ctx_r6.options.boxed == "full" ? "boxed" : "full";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Boxed Layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FullComponent_ng_template_31_Template_input_change_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.options.dir = ctx_r7.options.dir == "rtl" ? "ltr" : "rtl";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RTL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sidebar Types");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.options.sidebartype = "mini-sidebar";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mini Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.options.sidebartype = "iconbar";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Icon Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.options.sidebartype = "overlay";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Overlay Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FullComponent_ng_template_31_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.options.sidebartype = $event;
          })("change", function FullComponent_ng_template_31_Template_input_change_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.options.sidebartype = "full";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Full Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Logo Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.options.logobg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.options.logobg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.options.logobg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.options.logobg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.options.logobg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.options.logobg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Navbar Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.options.navbarbg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_65_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.options.navbarbg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.options.navbarbg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.options.navbarbg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.options.navbarbg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.options.navbarbg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sidebar Backgrounds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.options.sidebarbg = "skin1";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.options.sidebarbg = "skin2";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.options.sidebarbg = "skin3";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.options.sidebarbg = "skin4";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_87_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.options.sidebarbg = "skin5";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_ng_template_31_Template_a_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.options.sidebarbg = "skin6";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.theme == "dark" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.sidebarpos == "fixed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.headerpos == "fixed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.boxed == "boxed" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r1.options.dir == "rtl" ? "checked" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.options.sidebartype);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-sidebar": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "show-service-panel": a0
        };
      };

      var FullComponent = /*#__PURE__*/function () {
        function FullComponent(router) {
          _classCallCheck(this, FullComponent);

          this.router = router;
          this.config = {};
          this.tabStatus = 'justified';
          this.isCollapsed = false;
          this.showSettings = false;
          this.showMobileMenu = false;
          this.expandLogo = false;
          this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin6',
            sidebarbg: 'skin5',
            logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)

          };
        }

        _createClass(FullComponent, [{
          key: "Logo",
          value: function Logo() {
            this.expandLogo = !this.expandLogo;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.router.url === '/') {
              this.router.navigate(['/dashboard']);
            }

            this.defaultSidebar = this.options.sidebartype;
            this.handleSidebar();
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.handleSidebar();
          }
        }, {
          key: "handleSidebar",
          value: function handleSidebar() {
            this.innerWidth = window.innerWidth;

            switch (this.defaultSidebar) {
              case 'full':
              case 'iconbar':
                if (this.innerWidth < 1170) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              case 'overlay':
                if (this.innerWidth < 767) {
                  this.options.sidebartype = 'mini-sidebar';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }, {
          key: "toggleSidebarType",
          value: function toggleSidebarType() {
            switch (this.options.sidebartype) {
              case 'full':
              case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;

              case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;

              case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                  this.options.sidebartype = 'full';
                } else {
                  this.options.sidebartype = this.defaultSidebar;
                }

                break;

              default:
            }
          }
        }]);

        return FullComponent;
      }();

      FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullComponent,
        selectors: [["app-full-layout"]],
        hostBindings: function FullComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 33,
        vars: 25,
        consts: [["id", "main-wrapper", "data-layout", "vertical", "data-sidebartype", "full", 3, "ngClass", "dir"], [1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-md", 3, "ngClass"], [1, "navbar-header", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-md-none", 3, "click"], [3, "ngClass"], ["routerLink", "javascript:void()", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/favicon.png", "alt", "homepage", 1, "light-logo", "logo-sidebar", "img-fluid"], [1, "logo-text"], ["src", "assets/images/logo-text.png", "alt", "homepage", 1, "logo-content"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], [1, "w-100", 3, "toggleSidebar"], [1, "left-sidebar", "sidebar-bg", 3, "mouseover", "mouseout"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [1, "page-wrapper"], [1, "container-fluid"], [1, "footer", "text-center"], [1, "customizer", "d-none", 3, "ngClass"], ["href", "javascript:void(0)", 1, "service-panel-toggle", 3, "click"], [1, "fa", "fa-spin", "fa-cog"], [1, "customizer-body", "custom-pills", 3, "perfectScrollbar"], ["type", "pills", 3, "justify"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [1, "chat-windows"], [1, "mdi", "mdi-wrench", "font-20"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-20", "m-t-10"], [1, "custom-control", "custom-checkbox", "m-t-10"], ["type", "checkbox", "name", "theme-view", "id", "theme-view", 1, "custom-control-input", 3, "change"], ["for", "theme-view", 1, "custom-control-label"], ["type", "checkbox", "name", "sidebar-position", "id", "sidebar-position", 1, "custom-control-input", 3, "change"], ["for", "sidebar-position", 1, "custom-control-label"], ["type", "checkbox", "name", "header-position", "id", "header-position", 1, "custom-control-input", 3, "change"], ["for", "header-position", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "change"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "rtl-layout", "id", "rtl-layout", 1, "custom-control-input", 3, "change"], ["for", "rtl-layout", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "m-t-10"], ["type", "radio", "name", "sidebar", "value", "mini-sidebar", "id", "minisidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "minisidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "iconbar", "id", "iconsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "iconsidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "overlay", "id", "overlaysidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "overlaysidebar", 1, "custom-control-label"], ["type", "radio", "name", "sidebar", "value", "full", "id", "fullsidebar", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "fullsidebar", 1, "custom-control-label"], [1, "theme-color"], [1, "theme-item"], ["href", "javascript:void(0)", "data-logobg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-logobg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-navbarbg", "skin6", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin1", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin2", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin3", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin4", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin5", 1, "theme-link", 3, "click"], ["href", "javascript:void(0)", "data-sidebarbg", "skin6", 1, "theme-link", 3, "click"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() {
              return ctx.showMobileMenu = !ctx.showMobileMenu;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_11_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-navigation", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_14_listener() {
              return ctx.toggleSidebarType();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aside", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_15_listener() {
              return ctx.Logo();
            })("mouseout", function FullComponent_Template_aside_mouseout_15_listener() {
              return ctx.Logo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Copyright ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "aside", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_a_click_25_listener() {
              return ctx.showSettings = !ctx.showSettings;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-tabset", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FullComponent_ng_template_30_Template, 1, 0, "ng-template", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FullComponent_ng_template_31_Template, 90, 9, "ng-template", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.showMobileMenu))("dir", ctx.options.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-theme", ctx.options.theme)("data-layout", ctx.options.layout)("data-sidebartype", ctx.options.sidebartype)("data-sidebar-position", ctx.options.sidebarpos)("data-header-position", ctx.options.headerpos)("data-boxed-layout", ctx.options.boxed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.options.navbarbg == "skin6" ? "navbar-light" : "navbar-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-logobg", ctx.options.logobg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sidebarbg", ctx.options.sidebarbg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.showSettings));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("justify", ctx.tabStatus);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
        styles: [".logo-svg[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-right: 5px;\n}\n\n.logo-svg[_ngcontent-%COMP%]   .st0[_ngcontent-%COMP%] {\n  fill: #FBB03B;\n}\n\n.logo-content[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUN6Qjs7QUFKSTtFQUlTLGFBQVk7QUFJekI7O0FBQUk7RUFDSSxZQUFXO0FBR25CIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9mdWxsL2Z1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmxvZ28tc3Zne1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgLnN0MHtmaWxsOiNGQkIwM0I7XG4gICAgfVxuICAgIFxuICAgIH1cbiAgICAubG9nby1jb250ZW50e1xuICAgICAgICB3aWR0aDoxMjBweDtcbiAgICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full.component.html',
            styleUrls: ['./full.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/services/api.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./url.service */
      "./src/app/services/url.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(url, http, router) {
          _classCallCheck(this, ApiService);

          this.url = url;
          this.http = http;
          this.router = router;
          this.ImageUrl = "http://dev.webdevelopmentsolution.net:3008";
          this.baseUrl = "http://dev.webdevelopmentsolution.net:3008";
          this.regx = /^[',-\.0-9A-Z_a-z]+( [',-\.0-9A-Z_a-z]+)*$/; //Prevent white space between words

          this.search_value = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        }

        _createClass(ApiService, [{
          key: "httplogin",
          value: function httplogin(body) {
            return this.http.post(this.url.login, body);
          }
        }, {
          key: "httpforget",
          value: function httpforget(body) {
            return this.http.post(this.url.forgetpassword, body);
          }
        }, {
          key: "httpchange",
          value: function httpchange(body) {
            return this.http.post(this.url.changepassword, body);
          }
        }, {
          key: "httpgetprofile",
          value: function httpgetprofile() {
            return this.http.get(this.url.getprofile);
          }
        }, {
          key: "httpupdateprofile",
          value: function httpupdateprofile(body) {
            return this.http.put(this.url.updateprofile, body);
          }
        }, {
          key: "httpgetuser",
          value: function httpgetuser(body) {
            return this.http.post(this.url.getuser, body);
          }
        }, {
          key: "httpgetsevice",
          value: function httpgetsevice(body, page, count) {
            return this.http.post("".concat(this.url.serviceprovider, "?page=").concat(page, "&limit=").concat(count), body);
          }
        }, {
          key: "httpuploadfile",
          value: function httpuploadfile(body) {
            return this.http.post(this.url.file, body);
          }
        }, {
          key: "httpupdateuser",
          value: function httpupdateuser(body, id) {
            return this.http.put(this.url.updateuser + id, body);
          }
        }, {
          key: "HttpDeleteUser",
          value: function HttpDeleteUser(id) {
            return this.http["delete"](this.url.deleteuser + id);
          }
        }, {
          key: "HttpGetOneUser",
          value: function HttpGetOneUser(id) {
            return this.http.get(this.url.GetOneUser + id);
          }
        }, {
          key: "HttpUpdateServiceProvider",
          value: function HttpUpdateServiceProvider(body, id) {
            return this.http.put(this.url.updateServiceprovider + id, body);
          }
        }, {
          key: "searchdata",
          value: function searchdata() {
            this.search_value.next(true);
          }
        }, {
          key: "postApi",
          value: function postApi(url, data) {
            return this.http.post(this.url.baseUrl + url, data);
          }
        }, {
          key: "putApi",
          value: function putApi(endPointURL, body) {
            return this.http.put(this.url.baseUrl + endPointURL, body);
          }
        }, {
          key: "deleteApi",
          value: function deleteApi(endPointURL) {
            return this.http["delete"](this.url.baseUrl + endPointURL);
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.removeItem("accessToken");
            this.router.navigate(['/login']);
          }
        }, {
          key: "getApi",
          value: function getApi(url) {
            return this.http.get(this.url.baseUrl + url);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            return new Date().toISOString().split('T')[0];
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/auth-interceptor.interceptor.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/auth-interceptor.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: AuthInterceptorInterceptor */

    /***/
    function srcAppServicesAuthInterceptorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptorInterceptor", function () {
        return AuthInterceptorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

      var AuthInterceptorInterceptor = /*#__PURE__*/function () {
        function AuthInterceptorInterceptor(spinner) {
          _classCallCheck(this, AuthInterceptorInterceptor);

          this.spinner = spinner;
        }

        _createClass(AuthInterceptorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this = this;

            this.token = sessionStorage.getItem('accessToken');
            this.spinner.show();
            var tokenizedReq = req.clone({
              setHeaders: {
                Authorization: "".concat(this.token)
              }
            });
            return next.handle(tokenizedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
              return _this.spinner.hide();
            }));
          }
        }]);

        return AuthInterceptorInterceptor;
      }();

      AuthInterceptorInterceptor.ɵfac = function AuthInterceptorInterceptor_Factory(t) {
        return new (t || AuthInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
      };

      AuthInterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptorInterceptor,
        factory: AuthInterceptorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/authguard.guard.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/authguard.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthguardGuard */

    /***/
    function srcAppServicesAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
        return AuthguardGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthguardGuard = /*#__PURE__*/function () {
        function AuthguardGuard(router) {
          _classCallCheck(this, AuthguardGuard);

          this.router = router;
        }

        _createClass(AuthguardGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (sessionStorage.getItem('accessToken')) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthguardGuard;
      }();

      AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) {
        return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthguardGuard,
        factory: AuthguardGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/error.interceptor.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/error.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppServicesErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(accountService, toastr, modalService) {
          _classCallCheck(this, ErrorInterceptor);

          this.accountService = accountService;
          this.toastr = toastr;
          this.modalService = modalService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this2 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (evt) {
              //   console.log('All response of apu',evt);
              if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                //     console.log('Response instance',evt);
                if ([401, 403].includes(evt.body.statusCode)) {
                  _this2.toastr.clear();

                  _this2.toastr.error('Please login', 'Session expired', {
                    timeOut: 3000
                  });

                  _this2.accountService.logout();

                  _this2.modalService.dismissAll();
                } else if (![401, 403, 200].includes(evt.body.statusCode)) {
                  _this2.toastr.clear();

                  _this2.toastr.error(evt.body.message || evt.statusText);
                }
              }
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/url.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/url.service.ts ***!
      \*****************************************/

    /*! exports provided: UrlService */

    /***/
    function srcAppServicesUrlServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlService", function () {
        return UrlService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UrlService = function UrlService() {
        _classCallCheck(this, UrlService);

        this.baseUrl = "http://dev.webdevelopmentsolution.net:3008";
        this.login = this.baseUrl + "/api/v1/admin/login";
        this.forgetpassword = this.baseUrl + "/api/v1/admin/forgotPassword";
        this.changepassword = this.baseUrl + "/api/v1/admin/changePassword";
        this.getprofile = this.baseUrl + "/api/v1/admin/getProfile";
        this.updateprofile = this.baseUrl + "/api/v1/admin/updateProfile";
        this.getuser = this.baseUrl + "/api/v1/admin/getUser";
        this.file = this.baseUrl + "/api/v1/admin/uploadFile";
        this.updateuser = this.baseUrl + "/api/v1/admin/updateUser/";
        this.deleteuser = this.baseUrl + "/api/v1/admin/deleteUser/";
        this.serviceprovider = this.baseUrl + "/api/v1/admin/getServiceprovider";
        this.GetOneUser = this.baseUrl + "/api/v1/admin/getUser/";
        this.updateServiceprovider = this.baseUrl + "/api/v1/admin/updateServiceprovider/";
      };

      UrlService.ɵfac = function UrlService_Factory(t) {
        return new (t || UrlService)();
      };

      UrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UrlService,
        factory: UrlService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/breadcrumb/breadcrumb.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
      \***********************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function srcAppSharedBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(router, activatedRoute, titleService) {
          var _this3 = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this3.activatedRoute;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) {
            return route.outlet === 'primary';
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (event) {
            _this3.titleService.setTitle(event['title']);

            _this3.pageInfo = event;
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          layout: "layout"
        },
        decls: 10,
        vars: 1,
        consts: [[1, "page-breadcrumb"], [1, "row"], [1, "col-5", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center"], [1, "col-7", "align-self-center"], [1, "d-flex", "no-block", "justify-content-end", "align-items-center"], ["aria-label", "breadcrumb"], [1, "breadcrumb"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ol", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageInfo == null ? null : ctx.pageInfo.title);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, {
          layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/header-navigation/navigation.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
      \******************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function srcAppSharedHeaderNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "./src/app/services/api.service.ts");

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent(router, modalService, apiservice) {
          _classCallCheck(this, NavigationComponent);

          this.router = router;
          this.modalService = modalService;
          this.apiservice = apiservice;
          this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.config = {};
          this.showSearch = false; // This is for Notifications

          this.notifications = [{
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
          }, {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
          }, {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
          }, {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }]; // This is for Mymessages

          this.mymessages = [{
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
          }, {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
          }, {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
          }];
          this.getData();
        }

        _createClass(NavigationComponent, [{
          key: "getData",
          value: function getData() {
            var _this4 = this;

            this.apiservice.httpgetprofile().subscribe(function (res) {
              _this4.firstname = res.data.firstName;
              _this4.lastname = res.data.lastName;
              _this4.fullName = res.data.fullName;
              _this4.email = res.data.email;
              _this4.image = "http://dev.webdevelopmentsolution.net:3008" + res.data.image;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.apiservice.search_value.subscribe(function (res) {
              if (res == true) {
                _this5.getData();
              }
            });
          }
        }, {
          key: "addBikeModal",
          value: function addBikeModal(addBike) {
            this.modalService.open(addBike, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg',
              backdrop: "static"
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "openBox",
          value: function openBox() {
            var element = document.getElementById("notification");
            element.classList.toggle("sidebar_slide");
          }
        }, {
          key: "closeBox",
          value: function closeBox() {
            var element1 = document.getElementById("arrow-close").parentElement;
            element1.classList.remove("sidebar_slide");
          }
        }, {
          key: "Logout",
          value: function Logout() {
            sessionStorage.removeItem("accessToken");
            this.router.navigate(['/login']);
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
        return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationComponent,
        selectors: [["app-navigation"]],
        outputs: {
          toggleSidebar: "toggleSidebar"
        },
        decls: 35,
        vars: 4,
        consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block"], ["href", "javascript:void(0)", "data-sidebartype", "mini-sidebar", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "sl-icon-menu", "font-20"], [1, "navbar-nav", "float-right"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["alt", "user", "height", "31", "width", "31", 1, "rounded-circle", 3, "src"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "user-dd"], [1, "with-arrow"], [1, "bg-primary"], [1, "d-flex", "no-block", "align-items-center", "p-15", "bg-primary", "text-white", "m-b-10"], [1, ""], ["alt", "user", "height", "60", "width", "60", 1, "img-circle", 3, "src"], [1, "m-l-10"], [1, "m-b-0"], ["routerLink", "pages/profile", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], ["routerLink", "/changepassword", 1, "dropdown-item"], [1, "fas", "fa-lock", "m-r-5", "m-l-5"], ["routerLink", "/login", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], [1, "dropdown-divider"], ["id", "notification", 1, "aside-box", "mailbox", "shadow"], ["href", "javascript:void(0)", "id", "arrow-close", 3, "click"], [1, "mdi", "mdi-close", "font-20"], [1, "list-style-none"]],
        template: function NavigationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_2_listener() {
              return ctx.toggleSidebar.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_26_listener() {
              return ctx.Logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "aside", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_31_listener() {
              return ctx.closeBox();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\");\n\n\n\n\n\n\n\n\n\n\n\n\n.aside-box[_ngcontent-%COMP%] {\n  width: 275px;\n  height: 100vh;\n  position: absolute;\n  background-color: #fff;\n  z-index: 999;\n  right: 0;\n  padding: 10px;\n  transform: translateX(285px);\n  transition: 0.3s ease-in-out;\n}\n.aside-box.sidebar_slide[_ngcontent-%COMP%] {\n  transform: translateX(0px);\n}\n.aside-box[_ngcontent-%COMP%]   .message-center[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLW5hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsa0ZBQVk7QUFOWixnQ0FBQTtBQUlBLGdDQUFBO0FBSUEsZUFBQTtBQWVBLGdCQUFBO0FBU0EsaUJBQUE7QUFlQSxxQkFBQTtBQUlBLFNBQUE7QUFPQSxnQkFBQTtBQUlBLHdCQUFBO0FBc0JBLGtDQUFBO0FBSUEsa0NBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O21CQ2hFbUI7QUExQm5CO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JEd0dRO0VDdkdSLFlBQVc7RUFDYixRQUFRO0VBQ04sYUFBYTtFQUNiLDRCQUE2QjtFQUM3Qiw0QkFBNEI7QUE0QmhDO0FBckNBO0VBV1EsMEJBQTJCO0FBOEJuQztBQXpDQTtFQWNZLGFBQWE7QUErQnpCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci1uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gQ3VzdG9tIFZhcmlhYmxlc1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAnKTtcblxuLypUaGVtZSBDb2xvcnMqL1xuXG4kdGhlbWVjb2xvcjogI0QzODZBRDtcbiR0aGVtZWNvbG9yLWRhcms6ICMwMjhlZTE7XG4kdGhlbWVjb2xvci1hbHQ6ICMyNmM2ZGE7XG4kdGhlbWUtbGlnaHQ6ICNmZmY7XG4kdGhlbWUtZGFyazogIzIxMjUyOTtcbiRza2luMTogIzM1ODdkODtcbiRza2luMjogI2Q4MzkzOTtcbiRza2luMzogIzE3YTk5MTtcbiRza2luNDogIzY2NTlmNztcbiRza2luNSA6I0QzODZBRDtcbjtcbiRza2luNjogI2ZmZjtcblxuLypUb3BiYXIgQ29sb3JzKi9cblxuJHRvcGJhcjogJHRoZW1lLWxpZ2h0O1xuJHRvcGJhci1oZWlnaHQ6IDY0cHg7XG4kdG9wYmFyLW5hdmxpbmstcGFkZGluZzogMHB4IDE1cHg7XG4kdG9wYmFyLW5hdmxpbmstZm9udC1zaXplOiAwLjg3NXJlbTtcbiR0b3BiYXItbmF2bGluay1oZWlnaHQ6IDY0cHg7XG4kdG9wYmFyLW5hdmJyYW5kLXBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG5cbi8qU2lkZWJhciBDb2xvcnMqL1xuXG4kc2lkZWJhcjogJHRoZW1lLWRhcms7XG4kc2lkZWJhci1hbHQ6ICNlOGVmZjA7XG4kc2lkZWJhci10ZXh0OiAjZmZmO1xuJHNpZGViYXItaWNvbnM6IHJnYigwLFxuMCxcbjApO1xuJHNpZGViYXItdGV4dC1kYXJrOiAjMjEyNTI5O1xuJHNpZGViYXItdGV4dC1kYXJrOiAjMjEyNTI5O1xuJHNpZGViYXItaWNvbnMtZGFyazogIzRmNTQ2NztcbiRzaWRlYmFyLXdpZHRoLWZ1bGw6IDI1MHB4O1xuJHNpZGViYXItd2lkdGgtaWNvbmJhcjogMTgwcHg7XG4kc2lkZWJhci13aWR0aC1taW5pOiA3MHB4O1xuXG4vKkJveGVkIGxheW91dCB3aWR0aCovXG5cbiRib3hlZC13aWR0aDogMTIwMHB4O1xuXG4vKlNoYWRvdyovXG5cbiRzaGFkb3c6IDFweCAwcHggMjBweCByZ2JhKDAsXG4wLFxuMCxcbjAuMDgpO1xuXG4vKiB0cmFuc2l0aW9ucyAqL1xuXG4kdHJhbnNpdGlvbnM6IDAuMnMgZWFzZS1pbjtcblxuLyogRGFyayB0cmFuc3BhcmVudCBiZyAqL1xuXG4kdHJhbnNwYXJlbnQtZGFyay1iZzogcmdiYSgwLFxuMCxcbjAsXG4wLjA1KTtcbiRsZnQ6IGxlZnQ7XG4kcmd0OiByaWdodDtcbiRjYXJkLWFsdDogI2U0ZTllZjtcbiVzcXVhcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuJXJvdGF0ZTQ1IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8gQm9vdHN0cmFwIG92ZXJyaWRlc1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cbi8qICpcbiAqIFRhYmxlIE9mIENvbnRlbnRcbiAqXG4gKiAgMS4gQ29sb3Igc3lzdGVtXG4gKiAgMi4gT3B0aW9uc1xuICogIDMuIEJvZHlcbiAqICA0LiBUeXBvZ3JhcGh5XG4gKiAgNS4gQnJlYWRjcnVtYnNcbiAqICA2LiBDYXJkc1xuICogIDcuIERyb3Bkb3duc1xuICogIDguIEJ1dHRvbnNcbiAqICA5LiBUeXBvZ3JhcGh5XG4gKiAgMTAuIFByb2dyZXNzIGJhcnNcbiAqICAxMS4gVGFibGVzXG4gKiAgMTIuIEZvcm1zXG4gKiAgMTQuIENvbXBvbmVudCAqL1xuXG4vL0NvbG9yIHN5c3RlbVxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYTFhYWIyICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNGY1NDY3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAjMDAwICFkZWZhdWx0O1xuJGJsdWU6ICNmYmIwM2IgIWRlZmF1bHQ7XG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogIzc0NjBlZSAhZGVmYXVsdDtcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogI2VmNmU2ZSAhZGVmYXVsdDtcbiRsaWdodC1pbmZvOiAjZTZmMmZhICFkZWZhdWx0O1xuJGxpZ2h0LWRhbmdlcjogI2ZhZTZlNiAhZGVmYXVsdDtcbiRsaWdodC1zdWNjZXNzOiAjZTlmOWY3ICFkZWZhdWx0O1xuJGxpZ2h0LXdhcm5pbmc6ICNmOGVmZDcgIWRlZmF1bHQ7XG4kb3JhbmdlOiAjZmI4YzAwICFkZWZhdWx0O1xuJHllbGxvdzogI2ZmYmMzNCAhZGVmYXVsdDtcbiRncmVlbjogIzIyYzZhYiAhZGVmYXVsdDtcbiRncmVlbjE6ICM1YWU1MGUgIWRlZmF1bHQ7XG4kdGVhbDogIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAjMDFjMGM4ICFkZWZhdWx0O1xuJHByaW1hcnk6I0QzODZBRCAhZGVmYXVsdDtcbiR0ZXh0LW11dGVkOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kWWVsbG93LUdyZWVuOiNjZWRmNmE7XG4kY29sb3JzOiAoIGJsdWU6ICRibHVlLFxuaW5kaWdvOiAkaW5kaWdvLFxucHVycGxlOiAkcHVycGxlLFxucGluazogJHBpbmssXG5yZWQ6ICRyZWQsXG5vcmFuZ2U6ICRvcmFuZ2UsXG55ZWxsb3c6ICR5ZWxsb3csXG5ncmVlbjogJGdyZWVuLFxudGVhbDogJHRlYWwsXG5jeWFuOiAkY3lhbixcbndoaXRlOiAkd2hpdGUsXG5ncmF5OiAkZ3JheS02MDAsXG5ncmF5LWRhcms6ICRncmF5LTgwMCxcbmxpZ2h0LWluZm86ICRsaWdodC1pbmZvLFxubGlnaHQtZGFuZ2VyOiAkbGlnaHQtZGFuZ2VyLFxubGlnaHQtc3VjY2VzczogJGxpZ2h0LXN1Y2Nlc3MsXG5saWdodC13YXJuaW5nOiAkbGlnaHQtd2FybmluZyk7XG4kcHJpbWFyeTogJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICRibHVlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktODAwICFkZWZhdWx0O1xuJGN5YW46ICRjeWFuICFkZWZhdWx0O1xuJG9yYW5nZTogJG9yYW5nZSAhZGVmYXVsdDtcbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKCAoICdwcmltYXJ5JzogJHByaW1hcnksICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LCAnc3VjY2Vzcyc6ICRzdWNjZXNzLCAnaW5mbyc6ICRpbmZvLCAnd2FybmluZyc6ICR3YXJuaW5nLCAnZGFuZ2VyJzogJGRhbmdlciwgJ2xpZ2h0JzogJGxpZ2h0LCAnZGFyayc6ICRkYXJrLCAnY3lhbic6ICRjeWFuLCAnb3JhbmdlJzogJG9yYW5nZSwgJ3B1cnBsZSc6ICRwdXJwbGUsICdsaWdodC1pbmZvJzogJGxpZ2h0LWluZm8sICdsaWdodC1kYW5nZXInOiAkbGlnaHQtZGFuZ2VyLCAnbGlnaHQtc3VjY2Vzcyc6ICRsaWdodC1zdWNjZXNzLCAnbGlnaHQtd2FybmluZyc6ICRsaWdodC13YXJuaW5nKSxcbiR0aGVtZS1jb2xvcnMpO1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuJGVuYWJsZS1jYXJldDogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiB0cnVlICFkZWZhdWx0O1xuLy8gQm9keVxuLy8gU2V0dGluZ3MgZm9yIHRoZSAgZWxlbWVudC5cbiRtYWluLWJvZHktYmc6ICNmZmYgIWRlZmF1bHQ7XG4kYm9keS1iZzogI2ZmZjtcbiRib2R5LWNvbG9yOiAjM2U1NTY5ICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAyMHB4ICFkZWZhdWx0O1xuLy8gVHlwb2dyYXBoeVxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG4kZm9udC1zaXplLWJhc2U6IDAuODc1cmVtO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdQb3BwaW5zJyxcbnNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6IDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiA2MDAgIWRlZmF1bHQ7XG4kaDEtZm9udC1zaXplOiAzNnB4ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogMzBweCAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAxOHB4ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6IDE0cHggIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogKDFyZW0gLyAyKSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLWJnOiAkYm9keS1iZztcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206IDEuNXJlbTtcbi8vIENhcmRzXG4kY2FyZC1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogJGdyYXktMjAwICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogMHB4ICFkZWZhdWx0O1xuLy8gRHJvcGRvd25zXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuNjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMTAwO1xuLy8gQnV0dG9uc1xuJGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAkZ3JheS0zMDA7XG4vLyBQcm9ncmVzcyBiYXJzXG4kcHJvZ3Jlc3MtYmc6ICRncmF5LTEwMDtcbi8vIFRhYmxlc1xuJHRhYmxlLWJnLWFjY2VudDogJGdyYXktMTAwO1xuJHRhYmxlLWJnLWhvdmVyOiAkZ3JheS0xMDA7XG4kdGFibGUtaG92ZXItYmc6ICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7XG4kdGFibGUtYmctbGV2ZWw6IC0xMCAhZGVmYXVsdDtcbiR0YWJsZS1iZy1sZXZlbDI6IDEgIWRlZmF1bHQ7XG4kdGFibGUtYmctbGV2ZWwzOiAtNSAhZGVmYXVsdDtcbi8vIENvbXBvbmVudHNcbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogJHRoZW1lY29sb3IgIWRlZmF1bHQ7XG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuMmVtICFkZWZhdWx0O1xuJGJhZGdlLXBpbGwtcGFkZGluZy15OiAxZW0gIWRlZmF1bHQ7XG4vLyBGb3Jtc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAkZ3JheS0xMDA7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKDAsXG4wLFxuMCxcbjAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogcmdiYSgwLFxuMCxcbjAsXG4wLjI1KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiByZ2JhKDAsXG4wLFxuMCxcbjM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2N1c3RvbS1zZWxlY3QucG5nKSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogc3RyLXJlcGxhY2UodXJsKCcnKSxcbiclMjMnKSAhZGVmYXVsdDtcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICRncmF5LTIwMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzOiAycHggIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogMnB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206IDFweCAhZGVmYXVsdDtcbi8vIFByb2dyZXNzIGJhcnNcbiRwcm9ncmVzcy1oZWlnaHQ6IDVweCAhZGVmYXVsdDtcbi8vIFRhYnNcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogJHdoaXRlICFkZWZhdWx0O1xuLy8gR3JpZCBicmVha3BvaW50c1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG4kZ3JpZC1icmVha3BvaW50czogKCB4czogMCxcbnNtOiA1NzZweCxcbm1kOiA3NjhweCxcbmxnOiA5OTJweCxcbnhsOiAxNjAwcHgpICFkZWZhdWx0O1xuLy8gTmF2YmFyXG4kbmF2YmFyLWRhcmstY29sb3I6IHJnYmEoJHdoaXRlLFxuMC44KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogcmdiYSgkd2hpdGUsXG4xKSAhZGVmYXVsdDsiLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZS5zY3NzJztcbi5hc2lkZS1ib3h7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB6LWluZGV4Ojk5OTtcbiAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoIDI4NXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICYuc2lkZWJhcl9zbGlkZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCAwcHgpO1xuICAgIH1cbiAgICAgLm1lc3NhZ2UtY2VudGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, {
          toggleSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/sidebar/menu-items.ts":
    /*!**********************************************!*\
      !*** ./src/app/shared/sidebar/menu-items.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES */

    /***/
    function srcAppSharedSidebarMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [// {
      //     path: '',
      //     title: 'Personal',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/users',
        title: 'Users',
        icon: 'sl-icon-user',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/vendors',
        title: 'Services Providers',
        icon: 'icon-Add-UserStar',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/vendorcategory',
        title: 'Categories',
        icon: 'sl-icon-grid',
        "class": '',
        extralink: false,
        submenu: []
      }, //     {
      //         path: '',
      //         title: 'Vendors',
      //         icon: 'icon-Car-Wheel',
      //         class: 'has-arrow',
      //         extralink: false,
      //         submenu: [
      //     {
      //         path: '/pages/vendors',
      //         title: 'Vendors',
      //         icon: 'sl-icon-user',
      //         class: '',
      //         extralink: false,
      //         submenu: [ ]
      //     },
      //     {
      //         path: '/pages/vendorbusiness',
      //         title: 'Business',
      //         icon: 'sl-icon-user',
      //         class: '',
      //         extralink: false,
      //         submenu: [ ]
      //     },
      //     {
      //         path: '/pages/vendorcategory',
      //         title: 'Categories',
      //         icon: 'sl-icon-user',
      //         class: '',
      //         extralink: false,
      //         submenu: [ ]
      //     },
      //     {
      //         path: '/pages/vendororder',
      //         title: 'Orders',
      //         icon: 'sl-icon-user',
      //         class: '',
      //         extralink: false,
      //         submenu: [ ]
      //     },
      // ]
      //     },
      // {
      //     path: '',
      //     title: 'Trucks',
      //     icon: 'icon-Car-Wheel',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/pages/trucks',
      //             title: 'Trucks List',
      //             icon: 'mdi mdi-truck',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/pages/truckscategory',
      //             title: 'Category',
      //             icon: 'mdi mdi-truck',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //     ]
      // },
      // {
      //     path: '/pages/drivers',
      //     title: 'Drivers',
      //     icon: 'mdi mdi-truck',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/foodcategories',
      //     title: 'Food Categories',
      //     icon: 'mdi mdi-bowl',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //   path: '/pages/fooditem',
      //   title: 'Food Items',
      //   icon: 'mdi mdi-bowl',
      //   class: '',
      //   extralink: false,
      //   submenu: []
      //  },
      //  {
      //     path: '/pages/orderlist',
      //     title: 'Order List',
      //     icon: ' far fa-list-alt',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '/pages/banner',
        title: 'Banner',
        icon: 'far fa-images',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/rewards',
        title: 'Coupons',
        icon: 'ti-gift',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //     path: '/pages/Inventory',
      //     title: 'Inventory',
      //     icon: 'mdi mdi-calendar-text',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '/pages/revenue',
        title: 'Revenue',
        icon: 'mdi mdi-chart-areaspline',
        "class": '',
        extralink: false,
        submenu: []
      }, {
        path: '/pages/reviews',
        title: 'Reviews',
        icon: 'mdi mdi-account-star-variant',
        "class": '',
        extralink: false,
        submenu: []
      }, // {
      //     path: '/pages/calculator',
      //     title: 'Calculator',
      //     icon: 'mdi mdi-calculator',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/promocode',
      //     title: 'Promo',
      //     icon: 'fas fa-percent',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/notification',
      //     title: 'Broadcast Notification',
      //     icon: 'sl-icon-bell',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/analytics',
      //     title: 'Analytics',
      //     icon: 'mdi mdi-chart-arc',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/support',
      //     title: 'Support',
      //     icon: 'fas fa-headphones',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/geofencelist',
      //     title: 'Geofence',
      //     icon: 'mdi mdi-google-maps',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/manage_admin',
      //     title: 'Admin',
      //     icon: 'mdi mdi-chart-arc',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Apps',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/apps/email',
      //     title: 'Email',
      //     icon: 'icon-Mailbox-Empty',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Ticket',
      //     icon: 'icon-Ticket',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/apps/ticketlist',
      //             title: 'Ticket List',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/apps/ticketdetails',
      //             title: 'Ticket Details',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Extra',
      //     icon: 'icon-Sunglasses-Smiley',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/apps/chat',
      //             title: 'Chat App',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/apps/fullcalendar',
      //             title: 'Calendar',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/apps/taskboard',
      //             title: '',
      //             icon: 'mdi mdi-bulletin-board',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'UI',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'UI Elements',
      //     icon: 'icon-Paint-Brush',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/component/accordion',
      //             title: 'Accordion',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/alert',
      //             title: 'Alert',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/carousel',
      //             title: 'Carousel',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/dropdown',
      //             title: 'Dropdown',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/modal',
      //             title: 'Modal',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/pagination',
      //             title: 'Pagination',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/poptool',
      //             title: 'Popover & Tooltip',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/progressbar',
      //             title: 'Progressbar',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/rating',
      //             title: 'Ratings',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/tabs',
      //             title: 'Tabs',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/timepicker',
      //             title: 'Timepicker',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/buttons',
      //             title: 'Button',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/notifier',
      //             title: 'Notifier',
      //             icon: 'mdi mdi-bandcamp',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Cards',
      //     icon: 'icon-Folder-Add',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/cards/basiccards',
      //             title: 'Basic Cards',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/cards/customcards',
      //             title: 'Custom Cards',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/cards/weathercards',
      //             title: 'Weather Cards',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Extra Components',
      //     icon: 'icon-Idea-5',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/extra-component/toastr',
      //             title: 'Toastr',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/extra-component/editor',
      //             title: 'Editor',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/extra-component/dragndrop',
      //             title: 'Drag n Drop',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Widgets',
      //     icon: 'icon-Wrench',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/widgets/apps',
      //             title: 'Widget Apps',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/widgets/data',
      //             title: 'Widget Data',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Forms',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Form Elements',
      //     icon: 'icon-Receipt-4',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/forms/forminputs',
      //             title: 'Form Inputs',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/inputgroups',
      //             title: 'Input Groups',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/inputgrid',
      //             title: 'Input Grid',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/checkboxandradio',
      //             title: 'Checkbox & Radio',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/multiselect',
      //             title: 'Multiselect',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Form Layouts',
      //     icon: 'icon-Receipt-2',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/forms/formbasic',
      //             title: 'Basic Forms',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formhorizontal',
      //             title: 'Horizontal Forms',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formactions',
      //             title: 'Form Actions',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formrowseparator',
      //             title: 'Row Separator',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formstripedrows',
      //             title: 'Striped Rows',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/formdetail',
      //             title: 'Detail Forms',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Form Addons',
      //     icon: 'icon-Add',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/forms/formvalidation',
      //             title: 'Form Validation',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/typehead',
      //             title: 'Form Typehead',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/datepicker',
      //             title: 'Datepicker',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/component/language-datepicker',
      //             title: 'Language Datepicker',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/forms/ngx',
      //             title: 'Form Wizard / Steps',
      //             icon: 'mdi mdi-attachment',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Tables',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Bootstrap Tables',
      //     icon: 'mdi mdi-border-none',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/tables/basictables',
      //             title: 'Basic Tables',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/tables/darktables',
      //             title: 'Dark Basic Tables',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/tables/colortables',
      //             title: 'Colored Tables',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/tables/tablesizing',
      //             title: 'Table Sizing',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '/tables/datatable',
      //     title: 'Data Tables',
      //     icon: 'mdi mdi-border-vertical',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Charts',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/charts/chartjs',
      //     title: 'Chart Js',
      //    icon: '',
      //      class: '',
      //       extralink: false,
      //       submenu: []
      //   },
      // {
      //     path: '',
      //     title: 'Charts',
      //     icon: 'icon-Pie-Chart',
      //     class: 'has-arrow',
      //     extralink: false,
      //     submenu: [
      //         {
      //             path: '/charts/chartjs',
      //             title: 'Chart Js',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/charts/chartistjs',
      //             title: 'Chartist Js',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         },
      //         {
      //             path: '/charts/ngxchart',
      //             title: 'Ngx Charts',
      //             icon: '',
      //             class: '',
      //             extralink: false,
      //             submenu: []
      //         }
      //     ]
      // },
      // {
      //     path: '',
      //     title: 'Maps',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/maps/google',
      //     title: 'Google Maps',
      //     icon: 'icon-Location-2',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '',
      //     title: 'Pages',
      //     icon: 'mdi mdi-dots-horizontal',
      //     class: 'nav-small-cap',
      //     extralink: true,
      //     submenu: []
      // },
      // {
      //     path: '/pages/tours',
      //     title: 'Tours',
      //     icon: 'sl-icon-globe',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/destination',
      //     title: 'Destination',
      //     icon: 'sl-icon-map',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      // {
      //     path: '/pages/hotels',
      //     title: 'Hotels',
      //     icon: 'mdi mdi-hospital-building',
      //     class: '',
      //     extralink: false,
      //     submenu: []
      // },
      {
        path: '',
        title: 'CMS Pages',
        icon: 'icon-Car-Wheel',
        "class": 'has-arrow',
        extralink: false,
        submenu: [{
          path: '/pages/about',
          title: 'About',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/contact',
          title: 'Contact',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, //         {
        //             path: '/pages/faq',
        //             title: 'Faq',
        //             icon: '',
        //             class: '',
        //             extralink: false,
        //             submenu: []
        // },
        {
          path: '/pages/privacy',
          title: 'Privcay',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }, {
          path: '/pages/terms',
          title: 'Terms',
          icon: '',
          "class": '',
          extralink: false,
          submenu: []
        }]
      }];
      /***/
    },

    /***/
    "./src/app/shared/sidebar/sidebar.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-items */
      "./src/app/shared/sidebar/menu-items.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
        }
      }

      function SidebarComponent_li_13_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addExpandClass(sidebarnavItem_r1.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavItem_r1["class"] === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1["class"]))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavItem_r1.title);
        }
      }

      function SidebarComponent_li_13_ul_3_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_13_ul_3_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r14.addActiveClass(sidebarnavSubItem_r11.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sidebarnavSubItem_r11.path))("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r11["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r11.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavSubItem_r11.title);
        }
      }

      function SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, sidebarnavSubsubItem_r19.path))("routerLinkActive", sidebarnavSubsubItem_r19.submenu.length > 0 ? "" : "router-link-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r19.icon));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebarnavSubsubItem_r19.title);
        }
      }

      function SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_a_1_Template, 4, 8, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubsubItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r19["class"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r19.extralink);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "in": a0
        };
      };

      function SidebarComponent_li_13_ul_3_li_1_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r13.showSubMenu === sidebarnavSubItem_r11.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r11.submenu);
        }
      }

      function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_a_1_Template, 4, 11, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_13_ul_3_li_1_ul_2_Template, 2, 4, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavSubItem_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r10.showSubMenu === sidebarnavSubItem_r11.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r11.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r11.submenu.length > 0);
        }
      }

      function SidebarComponent_li_13_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_ul_3_li_1_Template, 3, 5, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
        }
      }

      function SidebarComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_13_div_1_Template, 4, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_13_a_2_Template, 4, 11, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_13_ul_3_Template, 2, 4, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sidebarnavItem_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.showMenu === sidebarnavItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(modalService, router, route) {
          _classCallCheck(this, SidebarComponent);

          this.modalService = modalService;
          this.router = router;
          this.route = route;
          this.showMenu = '';
          this.showSubMenu = '';
        } // this is for the open close


        _createClass(SidebarComponent, [{
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "addActiveClass",
          value: function addActiveClass(element) {
            if (element === this.showSubMenu) {
              this.showSubMenu = '0';
            } else {
              this.showSubMenu = element;
            }
          } // End open close

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (sidebarnavItem) {
              return sidebarnavItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 14,
        vars: 1,
        consts: [[1, "sidebar-nav", "pt-3"], ["id", "sidebarnav"], ["ngbDropdown", "", 1, "user-profile", "m-t-20"], [1, "user-content", "hide-menu", "m-t-10"], ["aria-labelledby", "Userdd", "ngbDropdownMenu", "", 1, "animated", "flipInY"], ["routerLink", "pages/profile", 1, "dropdown-item"], [1, "ti-user", "m-r-5", "m-l-5"], [1, "dropdown-divider"], ["routerLink", "/login", 1, "dropdown-item"], [1, "fa", "fa-power-off", "m-r-5", "m-l-5"], ["class", "sidebar-item", 3, "selected", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "ngClass"], [1, "hide-menu"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click"], ["aria-expanded", "false", 1, "collapse", "second-level", 3, "ngClass"], ["class", "sidebar-item", "routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html'
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/spinner.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/spinner.component.ts ***!
      \*********************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function srcAppSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
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

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this6 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this6.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              _this6.isSpinnerVisible = false;
            }
          }, function () {
            _this6.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          backgroundColor: "backgroundColor"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 4, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }]
          }];
        }, {
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/apptunix/Desktop/Enamul/laxbubbal_admin/luxbubble_angular_superadmin/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map