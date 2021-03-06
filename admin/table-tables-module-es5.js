(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-tables-module"], {
    /***/
    "./src/app/table/basic/basic.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/basic/basic.component.ts ***!
      \************************************************/

    /*! exports provided: BasictableComponent */

    /***/
    function srcAppTableBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasictableComponent", function () {
        return BasictableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BasictableComponent = function BasictableComponent() {
        _classCallCheck(this, BasictableComponent);
      };

      BasictableComponent.??fac = function BasictableComponent_Factory(t) {
        return new (t || BasictableComponent)();
      };

      BasictableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BasictableComponent,
        selectors: [["ng-component"]],
        decls: 880,
        vars: 0,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "card-title", "m-t-40"], [1, "m-r-5", "font-18", "mdi", "mdi-numeric-1-box-multiple-outline"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"], [1, "m-r-5", "font-18", "mdi", "mdi-numeric-2-box-multiple-outline"], [1, "thead-light"], [1, "table", "table-striped"], [1, "table", "table-bordered"], ["colspan", "2"], [1, "table", "table-hover"], [1, "table-active"], [1, "table-primary"], [1, "table-success"], [1, "table-danger"], [1, "table-info"], [1, "table-responsive", "m-t-20"], [1, "table", "table-bordered", "table-responsive-lg"], [1, "table-responsive-sm"], [1, "table-responsive-md"], [1, "table-responsive-lg"], [1, "table-responsive-xl"]],
        template: function BasictableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Default Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Using the most basic table markup, here\u2019s how ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h6", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Table With Outside Padding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Table Without Outside Padding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Table Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Similar to tables, use the modifier classes .thead-light to make ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "s appear light.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "thead", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Striped rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, ".table-striped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " to add zebra-striping to any table row within the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Boredered Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, ".table-bordered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, " for borders on all sides of the table and cells.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "table", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "Hoverable Rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, ".table-hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, " to enable a hover state on table rows within a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Contextual Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "Use contextual classes to color table rows or individual cells.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](331, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "Primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](335, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](336, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "Secondary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](358, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](359, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](372, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](373, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Light");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](382, "Dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](388, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "Table With Caption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](392, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](393, "A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](394, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, "<caption>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "caption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](400, "List of users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](404, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](405, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](406, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](416, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](417, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](418, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](419, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](420, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](425, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](426, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](427, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](428, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](429, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, "Responsive tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, ".table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, " with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, ".table-responsive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, ". Or, pick a maximum breakpoint with which to have a responsive table up to by using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](452, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](454, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](456, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](459, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](461, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](462, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](463, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](491, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](492, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](493, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](494, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](495, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](496, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](497, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](499, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](506, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](507, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](508, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](522, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](528, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](538, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](539, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](540, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](545, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](546, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](552, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](553, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](554, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](555, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](557, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](559, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](560, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](561, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](562, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](563, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](564, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](568, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](569, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](570, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](575, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](577, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](583, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](585, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](587, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, "Table header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "Table header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "Table header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "Table header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](597, "Table header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](598, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](599, "Table header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](600, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](602, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](603, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](604, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](605, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](615, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](620, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](622, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](623, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](624, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](625, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](626, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](628, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](629, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](630, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](631, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](633, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](634, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](635, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](637, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](639, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](641, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](645, "Table cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](646, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](647, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](649, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](650, "Breakpoint Specific");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](651, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](652, "Use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](653, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](654, ".table-responsive(-sm|-md|-lg|-xl)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](655, " as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](656, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](658, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](659, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](660, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](661, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](662, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](663, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](665, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](666, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](667, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](668, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](669, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](675, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](676, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](677, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](678, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](679, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](681, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](682, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](683, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](684, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](685, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](687, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](688, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](689, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](690, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](692, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](693, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](694, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](696, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](697, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](698, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](699, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](700, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](701, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](703, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](704, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](705, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](706, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](707, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](708, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](709, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](710, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](711, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](713, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](714, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](715, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](716, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](717, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](718, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](719, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](721, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](722, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](723, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](724, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](725, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](726, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](727, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](728, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](730, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](731, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](732, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](733, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](734, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](735, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](736, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](737, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](738, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](739, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](740, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](741, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](742, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](743, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](744, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](745, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](746, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](747, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](748, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](749, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](750, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](751, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](752, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](753, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](754, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](755, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](756, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](757, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](758, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](759, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](760, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](761, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](762, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](763, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](764, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](765, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](766, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](767, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](768, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](769, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](770, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](771, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](772, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](773, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](774, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](775, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](776, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](777, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](778, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](779, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](780, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](781, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](782, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](783, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](784, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](785, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](786, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](787, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](788, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](789, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](790, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](791, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](792, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](793, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](794, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](795, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](796, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](797, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](798, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](799, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](800, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](801, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](802, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](803, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](804, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](805, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](806, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](807, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](808, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](809, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](810, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](811, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](812, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](813, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](814, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](815, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](816, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](817, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](818, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](819, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](820, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](821, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](822, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](823, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](824, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](825, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](826, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](827, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](828, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](829, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](830, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](831, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](832, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](833, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](834, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](835, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](836, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](837, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](838, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](839, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](840, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](841, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](842, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](843, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](844, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](845, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](846, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](847, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](848, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](849, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](850, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](851, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](852, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](853, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](854, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](855, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](856, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](857, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](858, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](859, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](860, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](861, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](862, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](863, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](864, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](865, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](866, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](867, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](868, "th", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](869, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](870, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](871, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](872, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](873, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](874, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](875, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](876, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](877, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](878, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](879, "Cell");

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
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BasictableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './basic.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/color-table/color.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/table/color-table/color.component.ts ***!
      \******************************************************/

    /*! exports provided: ColortableComponent */

    /***/
    function srcAppTableColorTableColorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColortableComponent", function () {
        return ColortableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ColortableComponent = function ColortableComponent() {
        _classCallCheck(this, ColortableComponent);
      };

      ColortableComponent.??fac = function ColortableComponent_Factory(t) {
        return new (t || ColortableComponent)();
      };

      ColortableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ColortableComponent,
        selectors: [["ng-component"]],
        decls: 999,
        vars: 0,
        consts: [[1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "table-responsive"], [1, "table"], [1, "bg-primary", "text-white"], [1, "bg-success", "text-white"], [1, "bg-info", "text-white"], [1, "bg-warning", "text-white"], [1, "bg-danger", "text-white"], [1, "bg-inverse", "text-white"], [1, "border", "border-primary"], [1, "border", "border-success"], [1, "border", "border-info"], [1, "border", "border-warning"], [1, "border", "border-danger"], [1, "border", "border-dark"], [1, "table", "table-hover", "table-primary"], ["scope", "col"], ["scope", "row"], ["colspan", "2"], [1, "table", "table-hover", "table-success"], [1, "table", "table-hover", "table-info"], [1, "table", "table-hover", "table-warning"], [1, "table", "table-hover", "table-danger"], [1, "table", "table-hover", "table-dark"], [1, "bg-dark", "text-white"]],
        template: function ColortableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Primary Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, ".bg-primary .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Success Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, ".bg-success .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "thead", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Info Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, ".bg-info .text-whit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "thead", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Warning Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, ".bg-warning .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "thead", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Danger Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, ".bg-danger .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "thead", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](252, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](256, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, ".bg-inverse .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "thead", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](302, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](314, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](315, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](316, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](320, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](323, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](325, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](326, "Primary Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](327, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](328, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](329, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](330, ".bg-primary .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](334, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, ".border .border-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](337, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](338, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](339, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](340, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](342, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](344, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](345, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](346, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](347, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](348, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](349, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](350, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](351, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](352, "tbody", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](354, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](355, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](356, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](357, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](363, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](364, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](365, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](366, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](367, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](368, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](370, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](371, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](381, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](383, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](384, "Success Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](385, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](386, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, ".bg-success .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](389, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](390, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](391, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, ".border .border-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](395, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](396, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](397, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](399, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "thead", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](402, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](403, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](407, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](408, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](409, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](410, "tbody", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](412, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](413, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](414, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](415, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](421, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](422, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](423, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](424, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](430, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](431, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](432, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](433, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](434, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](435, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](436, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](437, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](438, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](440, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](442, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](443, "Info Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](444, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](445, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](446, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](447, ".bg-info .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](451, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](452, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](453, ".border .border-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](458, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "thead", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](460, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](464, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](465, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](466, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](467, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](468, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](469, "tbody", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](471, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](472, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](473, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](474, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](475, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](476, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](477, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](478, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](479, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](489, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](490, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](498, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](500, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](501, "Warning Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](502, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](503, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](504, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](505, ".bg-warning .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](509, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](510, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](511, ".border .border-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](512, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](513, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](514, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](515, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](517, "thead", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](519, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](520, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](521, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](522, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](523, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](524, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](525, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](526, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](527, "tbody", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](529, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](530, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](531, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](532, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](535, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](536, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](537, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](541, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](542, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](543, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](544, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](545, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](547, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](548, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](549, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](550, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](551, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](552, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](553, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](554, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](555, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](556, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](557, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](558, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](559, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](560, "Danger Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](561, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](562, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](563, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](564, ".bg-danger .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](565, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](566, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](567, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](568, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](569, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](570, ".border .border-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](571, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](572, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](573, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](574, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](575, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](576, "thead", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](577, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](578, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](579, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](580, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](581, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](582, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](583, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](584, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](585, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](586, "tbody", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](587, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](588, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](589, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](590, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](591, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](592, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](593, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](594, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](595, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](596, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](597, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](598, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](599, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](600, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](601, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](602, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](603, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](604, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](605, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](606, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](607, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](608, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](609, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](610, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](611, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](612, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](613, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](614, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](615, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](616, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](617, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](618, "Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](619, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](620, "To use add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](621, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](622, ".bg-dark .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](623, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](624, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](625, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](626, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](627, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](628, ".border .border-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](629, " in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](630, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](631, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](632, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](633, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](634, "thead", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](635, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](636, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](637, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](638, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](639, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](640, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](641, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](642, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](643, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](644, "tbody", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](645, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](646, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](647, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](648, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](649, "Nigam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](650, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](651, "Eichmann");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](652, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](653, "@Sonu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](654, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](655, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](656, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](657, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](658, "Deshmukh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](659, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](660, "Prohaska");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](661, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](662, "@Genelia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](663, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](664, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](665, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](666, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](667, "Roshan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](668, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](669, "Rogahn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](670, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](671, "@Hritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](672, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](673, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](674, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](675, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](676, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](677, "Primary Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](678, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](679, "To use add class in the table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](680, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](681, ".table-hover .table-primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](682, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](683, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](684, ".bg-primary .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](685, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](686, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](687, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](688, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](689, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](690, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](691, "thead", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](692, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](693, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](694, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](695, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](696, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](697, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](698, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](699, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](700, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](701, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](702, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](703, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](704, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](705, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](706, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](707, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](708, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](709, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](710, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](711, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](712, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](713, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](714, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](715, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](716, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](717, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](718, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](719, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](720, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](721, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](722, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](723, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](724, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](725, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](726, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](727, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](728, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](729, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](730, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](731, "Success Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](732, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](733, "To use add class in the table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](734, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](735, ".table-hover .table-success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](736, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](737, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](738, ".bg-success .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](739, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](740, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](741, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](742, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](743, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](744, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](745, "thead", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](746, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](747, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](748, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](749, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](750, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](751, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](752, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](753, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](754, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](755, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](756, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](757, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](758, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](759, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](760, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](761, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](762, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](763, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](764, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](765, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](766, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](767, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](768, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](769, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](770, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](771, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](772, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](773, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](774, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](775, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](776, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](777, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](778, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](779, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](780, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](781, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](782, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](783, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](784, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](785, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](786, "Info Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](787, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](788, "To use add class in the table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](789, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](790, ".table-hover .table-info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](791, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](792, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](793, ".bg-info .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](794, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](795, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](796, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](797, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](798, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](799, "table", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](800, "thead", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](801, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](802, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](803, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](804, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](805, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](806, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](807, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](808, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](809, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](810, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](811, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](812, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](813, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](814, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](815, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](816, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](817, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](818, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](819, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](820, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](821, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](822, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](823, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](824, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](825, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](826, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](827, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](828, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](829, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](830, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](831, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](832, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](833, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](834, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](835, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](836, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](837, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](838, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](839, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](840, "Warning Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](841, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](842, "To use add class in the table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](843, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](844, ".table-hover .table-warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](845, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](846, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](847, ".bg-warning .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](848, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](849, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](850, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](851, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](852, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](853, "table", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](854, "thead", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](855, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](856, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](857, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](858, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](859, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](860, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](861, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](862, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](863, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](864, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](865, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](866, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](867, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](868, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](869, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](870, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](871, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](872, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](873, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](874, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](875, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](876, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](877, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](878, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](879, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](880, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](881, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](882, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](883, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](884, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](885, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](886, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](887, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](888, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](889, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](890, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](891, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](892, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](893, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](894, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](895, "Danger Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](896, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](897, "To use add class in the table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](898, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](899, ".table-hover .table-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](900, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](901, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](902, ".bg-danger .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](903, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](904, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](905, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](906, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](907, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](908, "table", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](909, "thead", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](910, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](911, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](912, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](913, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](914, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](915, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](916, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](917, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](918, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](919, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](920, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](921, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](922, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](923, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](924, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](925, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](926, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](927, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](928, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](929, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](930, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](931, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](932, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](933, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](934, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](935, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](936, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](937, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](938, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](939, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](940, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](941, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](942, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](943, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](944, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](945, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](946, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](947, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](948, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](949, "Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](950, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](951, "To use add class in the table ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](952, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](953, ".table-hover .table-dark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](954, " and add class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](955, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](956, ".bg-dark .text-white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](957, " in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](958, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](959, "<thead>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](960, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](961, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](962, "table", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](963, "thead", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](964, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](965, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](966, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](967, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](968, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](969, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](970, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](971, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](972, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](973, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](974, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](975, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](976, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](977, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](978, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](979, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](980, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](981, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](982, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](983, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](984, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](985, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](986, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](987, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](988, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](989, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](990, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](991, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](992, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](993, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](994, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](995, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](996, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](997, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](998, "@twitter");

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
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ColortableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './color.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/dark-basic/dark.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/table/dark-basic/dark.component.ts ***!
      \****************************************************/

    /*! exports provided: DarktableComponent */

    /***/
    function srcAppTableDarkBasicDarkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarktableComponent", function () {
        return DarktableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DarktableComponent = function DarktableComponent() {
        _classCallCheck(this, DarktableComponent);
      };

      DarktableComponent.??fac = function DarktableComponent_Factory(t) {
        return new (t || DarktableComponent)();
      };

      DarktableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DarktableComponent,
        selectors: [["ng-component"]],
        decls: 230,
        vars: 0,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "table-responsive"], [1, "table", "table-dark", "m-b-0"], ["scope", "col"], ["scope", "row"], [1, "table", "table-striped", "table-dark", "m-b-0"], [1, "table", "table-bordered", "table-dark", "m-b-0"], ["colspan", "2"], [1, "bg-primary"], [1, "bg-success"], [1, "bg-info"], [1, "bg-warning"], [1, "bg-danger"]],
        template: function DarktableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " .table-inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Striped with Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Use .table-striped to add zebra-striping to any table row within the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "<tbody>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Bordered with Inverse Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, ".table-bordered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " for borders on all sides of the table and cells.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "@twitter");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Contextual classes inverse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Regular table background variants are not available with the dark table, however, you may use text or background utilities to achieve similar styles.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Heading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Cell");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DarktableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './dark.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/data-table/company.json":
    /*!***********************************************!*\
      !*** ./src/app/table/data-table/company.json ***!
      \***********************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */

    /***/
    function srcAppTableDataTableCompanyJson(module) {
      module.exports = JSON.parse("[{\"name\":\"Ethel Price\",\"gender\":\"female\",\"company\":\"Johnson, Johnson and Partners, LLC CMP DDC\",\"age\":22},{\"name\":\"Claudine Neal\",\"gender\":\"female\",\"company\":\"Sealoud\",\"age\":55},{\"name\":\"Beryl Rice\",\"gender\":\"female\",\"company\":\"Velity\",\"age\":67},{\"name\":\"Wilder Gonzales\",\"gender\":\"male\",\"company\":\"Geekko\"},{\"name\":\"Georgina Schultz\",\"gender\":\"female\",\"company\":\"Suretech\"},{\"name\":\"Carroll Buchanan\",\"gender\":\"male\",\"company\":\"Ecosys\"},{\"name\":\"Valarie Atkinson\",\"gender\":\"female\",\"company\":\"Hopeli\"},{\"name\":\"Schroeder Mathews\",\"gender\":\"male\",\"company\":\"Polarium\"},{\"name\":\"Lynda Mendoza\",\"gender\":\"female\",\"company\":\"Dogspa\"},{\"name\":\"Sarah Massey\",\"gender\":\"female\",\"company\":\"Bisba\"},{\"name\":\"Robles Boyle\",\"gender\":\"male\",\"company\":\"Comtract\"},{\"name\":\"Evans Hickman\",\"gender\":\"male\",\"company\":\"Parleynet\"},{\"name\":\"Dawson Barber\",\"gender\":\"male\",\"company\":\"Dymi\"},{\"name\":\"Bruce Strong\",\"gender\":\"male\",\"company\":\"Xyqag\"},{\"name\":\"Nellie Whitfield\",\"gender\":\"female\",\"company\":\"Exospace\"},{\"name\":\"Jackson Macias\",\"gender\":\"male\",\"company\":\"Aquamate\"},{\"name\":\"Pena Pena\",\"gender\":\"male\",\"company\":\"Quarx\"},{\"name\":\"Lelia Gates\",\"gender\":\"female\",\"company\":\"Proxsoft\"},{\"name\":\"Letitia Vasquez\",\"gender\":\"female\",\"company\":\"Slumberia\"},{\"name\":\"Trevino Moreno\",\"gender\":\"male\",\"company\":\"Conjurica\"},{\"name\":\"Barr Page\",\"gender\":\"male\",\"company\":\"Apex\"},{\"name\":\"Kirkland Merrill\",\"gender\":\"male\",\"company\":\"Utara\"},{\"name\":\"Blanche Conley\",\"gender\":\"female\",\"company\":\"Imkan\"},{\"name\":\"Atkins Dunlap\",\"gender\":\"male\",\"company\":\"Comveyor\"},{\"name\":\"Everett Foreman\",\"gender\":\"male\",\"company\":\"Maineland\"},{\"name\":\"Gould Randolph\",\"gender\":\"male\",\"company\":\"Intergeek\"},{\"name\":\"Kelli Leon\",\"gender\":\"female\",\"company\":\"Verbus\"},{\"name\":\"Freda Mason\",\"gender\":\"female\",\"company\":\"Accidency\"},{\"name\":\"Tucker Maxwell\",\"gender\":\"male\",\"company\":\"Lumbrex\"},{\"name\":\"Yvonne Parsons\",\"gender\":\"female\",\"company\":\"Zolar\"},{\"name\":\"Woods Key\",\"gender\":\"male\",\"company\":\"Bedder\"},{\"name\":\"Stephens Reilly\",\"gender\":\"male\",\"company\":\"Acusage\"},{\"name\":\"Mcfarland Sparks\",\"gender\":\"male\",\"company\":\"Comvey\"},{\"name\":\"Jocelyn Sawyer\",\"gender\":\"female\",\"company\":\"Fortean\"},{\"name\":\"Renee Barr\",\"gender\":\"female\",\"company\":\"Kiggle\"},{\"name\":\"Gaines Beck\",\"gender\":\"male\",\"company\":\"Sequitur\"},{\"name\":\"Luisa Farrell\",\"gender\":\"female\",\"company\":\"Cinesanct\"},{\"name\":\"Robyn Strickland\",\"gender\":\"female\",\"company\":\"Obones\"},{\"name\":\"Roseann Jarvis\",\"gender\":\"female\",\"company\":\"Aquazure\"},{\"name\":\"Johnston Park\",\"gender\":\"male\",\"company\":\"Netur\"},{\"name\":\"Wong Craft\",\"gender\":\"male\",\"company\":\"Opticall\"},{\"name\":\"Merritt Cole\",\"gender\":\"male\",\"company\":\"Techtrix\"},{\"name\":\"Dale Byrd\",\"gender\":\"female\",\"company\":\"Kneedles\"},{\"name\":\"Sara Delgado\",\"gender\":\"female\",\"company\":\"Netagy\"},{\"name\":\"Alisha Myers\",\"gender\":\"female\",\"company\":\"Intradisk\"},{\"name\":\"Felecia Smith\",\"gender\":\"female\",\"company\":\"Futurity\"},{\"name\":\"Neal Harvey\",\"gender\":\"male\",\"company\":\"Pyramax\"},{\"name\":\"Nola Miles\",\"gender\":\"female\",\"company\":\"Sonique\"},{\"name\":\"Herring Pierce\",\"gender\":\"male\",\"company\":\"Geeketron\"},{\"name\":\"Shelley Rodriquez\",\"gender\":\"female\",\"company\":\"Bostonic\"},{\"name\":\"Cora Chase\",\"gender\":\"female\",\"company\":\"Isonus\"},{\"name\":\"Mckay Santos\",\"gender\":\"male\",\"company\":\"Amtas\"},{\"name\":\"Hilda Crane\",\"gender\":\"female\",\"company\":\"Jumpstack\"},{\"name\":\"Jeanne Lindsay\",\"gender\":\"female\",\"company\":\"Genesynk\"},{\"name\":\"Frye Sharpe\",\"gender\":\"male\",\"company\":\"Eplode\"},{\"name\":\"Velma Fry\",\"gender\":\"female\",\"company\":\"Ronelon\"},{\"name\":\"Reyna Espinoza\",\"gender\":\"female\",\"company\":\"Prismatic\"},{\"name\":\"Spencer Sloan\",\"gender\":\"male\",\"company\":\"Comverges\"},{\"name\":\"Graham Marsh\",\"gender\":\"male\",\"company\":\"Medifax\"},{\"name\":\"Hale Boone\",\"gender\":\"male\",\"company\":\"Digial\"},{\"name\":\"Wiley Hubbard\",\"gender\":\"male\",\"company\":\"Zensus\"},{\"name\":\"Blackburn Drake\",\"gender\":\"male\",\"company\":\"Frenex\"},{\"name\":\"Franco Hunter\",\"gender\":\"male\",\"company\":\"Rockabye\"},{\"name\":\"Barnett Case\",\"gender\":\"male\",\"company\":\"Norali\"},{\"name\":\"Alexander Foley\",\"gender\":\"male\",\"company\":\"Geekosis\"},{\"name\":\"Lynette Stein\",\"gender\":\"female\",\"company\":\"Macronaut\"},{\"name\":\"Anthony Joyner\",\"gender\":\"male\",\"company\":\"Senmei\"},{\"name\":\"Garrett Brennan\",\"gender\":\"male\",\"company\":\"Bluegrain\"},{\"name\":\"Betsy Horton\",\"gender\":\"female\",\"company\":\"Zilla\"},{\"name\":\"Patton Small\",\"gender\":\"male\",\"company\":\"Genmex\"},{\"name\":\"Lakisha Huber\",\"gender\":\"female\",\"company\":\"Insource\"},{\"name\":\"Lindsay Avery\",\"gender\":\"female\",\"company\":\"Unq\"},{\"name\":\"Ayers Hood\",\"gender\":\"male\",\"company\":\"Accuprint\"},{\"name\":\"Torres Durham\",\"gender\":\"male\",\"company\":\"Uplinx\"},{\"name\":\"Vincent Hernandez\",\"gender\":\"male\",\"company\":\"Talendula\"},{\"name\":\"Baird Ryan\",\"gender\":\"male\",\"company\":\"Aquasseur\"},{\"name\":\"Georgia Mercer\",\"gender\":\"female\",\"company\":\"Skyplex\"},{\"name\":\"Francesca Elliott\",\"gender\":\"female\",\"company\":\"Nspire\"},{\"name\":\"Lyons Peters\",\"gender\":\"male\",\"company\":\"Quinex\"},{\"name\":\"Kristi Brewer\",\"gender\":\"female\",\"company\":\"Oronoko\"},{\"name\":\"Tonya Bray\",\"gender\":\"female\",\"company\":\"Insuron\"},{\"name\":\"Valenzuela Huff\",\"gender\":\"male\",\"company\":\"Applideck\"},{\"name\":\"Tiffany Anderson\",\"gender\":\"female\",\"company\":\"Zanymax\"},{\"name\":\"Jerri King\",\"gender\":\"female\",\"company\":\"Eventex\"},{\"name\":\"Rocha Meadows\",\"gender\":\"male\",\"company\":\"Goko\"},{\"name\":\"Marcy Green\",\"gender\":\"female\",\"company\":\"Pharmex\"},{\"name\":\"Kirk Cross\",\"gender\":\"male\",\"company\":\"Portico\"},{\"name\":\"Hattie Mullen\",\"gender\":\"female\",\"company\":\"Zilencio\"},{\"name\":\"Deann Bridges\",\"gender\":\"female\",\"company\":\"Equitox\"},{\"name\":\"Chaney Roach\",\"gender\":\"male\",\"company\":\"Qualitern\"},{\"name\":\"Consuelo Dickson\",\"gender\":\"female\",\"company\":\"Poshome\"},{\"name\":\"Billie Rowe\",\"gender\":\"female\",\"company\":\"Cemention\"},{\"name\":\"Bean Donovan\",\"gender\":\"male\",\"company\":\"Mantro\"},{\"name\":\"Lancaster Patel\",\"gender\":\"male\",\"company\":\"Krog\"},{\"name\":\"Rosa Dyer\",\"gender\":\"female\",\"company\":\"Netility\"},{\"name\":\"Christine Compton\",\"gender\":\"female\",\"company\":\"Bleeko\"},{\"name\":\"Milagros Finch\",\"gender\":\"female\",\"company\":\"Handshake\"},{\"name\":\"Ericka Alvarado\",\"gender\":\"female\",\"company\":\"Lyrichord\"},{\"name\":\"Sylvia Sosa\",\"gender\":\"female\",\"company\":\"Circum\"},{\"name\":\"Humphrey Curtis\",\"gender\":\"male\",\"company\":\"Corepan\"}]");
      /***/
    },

    /***/
    "./src/app/table/data-table/data-table.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/table/data-table/data-table.component.ts ***!
      \**********************************************************/

    /*! exports provided: DatatableComponent */

    /***/
    function srcAppTableDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
        return DatatableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DatatableComponent_ng_template_21_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dblclick", function DatatableComponent_ng_template_21_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

            var rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().rowIndex;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r10.editing[rowIndex_r5 + "-name"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", value_r6, " ");
        }
      }

      function DatatableComponent_ng_template_21_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("blur", function DatatableComponent_ng_template_21_input_1_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15);

            var rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().rowIndex;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r14.updateValue($event, "name", rowIndex_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", value_r6);
        }
      }

      function DatatableComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DatatableComponent_ng_template_21_span_0_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DatatableComponent_ng_template_21_input_1_Template, 1, 1, "input", 17);
        }

        if (rf & 2) {
          var rowIndex_r5 = ctx.rowIndex;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r2.editing[rowIndex_r5 + "-name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.editing[rowIndex_r5 + "-name"]);
        }
      }

      function DatatableComponent_ng_template_23_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dblclick", function DatatableComponent_ng_template_23_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

            var rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().rowIndex;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r23.editing[rowIndex_r18 + "-gender"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", value_r20, " ");
        }
      }

      function DatatableComponent_ng_template_23_select_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function DatatableComponent_ng_template_23_select_1_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28);

            var rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().rowIndex;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r27.updateValue($event, "gender", rowIndex_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var value_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", value_r20);
        }
      }

      function DatatableComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DatatableComponent_ng_template_23_span_0_Template, 2, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DatatableComponent_ng_template_23_select_1_Template, 5, 1, "select", 20);
        }

        if (rf & 2) {
          var rowIndex_r18 = ctx.rowIndex;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.editing[rowIndex_r18 + "-gender"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.editing[rowIndex_r18 + "-gender"]);
        }
      }

      function DatatableComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0);
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", value_r31, " ");
        }
      }

      var data = __webpack_require__(
      /*! ./company.json */
      "./src/app/table/data-table/company.json");

      var DatatableComponent = /*#__PURE__*/function () {
        function DatatableComponent() {
          var _this = this;

          _classCallCheck(this, DatatableComponent);

          this.editing = {};
          this.rows = [];
          this.temp = _toConsumableArray(data);
          this.loadingIndicator = true;
          this.reorderable = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }, {
            name: 'Company'
          }];
          this.rows = data;
          this.temp = _toConsumableArray(data);
          setTimeout(function () {
            _this.loadingIndicator = false;
          }, 1500);
        }

        _createClass(DatatableComponent, [{
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.rows = temp; // Whenever the filter changes, always go back to the first page

            this.table = data;
          }
        }, {
          key: "updateValue",
          value: function updateValue(event, cell, rowIndex) {
            console.log('inline editing rowIndex', rowIndex);
            this.editing[rowIndex + '-' + cell] = false;
            this.rows[rowIndex][cell] = event.target.value;
            this.rows = _toConsumableArray(this.rows);
            console.log('UPDATED!', this.rows[rowIndex][cell]);
          }
        }]);

        return DatatableComponent;
      }();

      DatatableComponent.??fac = function DatatableComponent_Factory(t) {
        return new (t || DatatableComponent)();
      };

      DatatableComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DatatableComponent,
        selectors: [["app-data-table"]],
        viewQuery: function DatatableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](DatatableComponent, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 26,
        vars: 13,
        consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "w-50", "m-b-30"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "form-control", 3, "keyup"], [1, "material", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["table", ""], [1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Gender"], ["name", "Age"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "change", 4, "ngIf"], [3, "value", "change"], ["value", "male"], ["value", "female"]],
        template: function DatatableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Filter Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "This is the filerable Data table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function DatatableComponent_Template_input_keyup_9_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Editing Option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "This is the editing Data table option you can double click on text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "ngx-datatable", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, DatatableComponent_ng_template_21_Template, 2, 2, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, DatatableComponent_ng_template_23_Template, 2, 2, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, DatatableComponent_ng_template_25_Template, 1, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("headerHeight", 50)("limit", 5)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows);
          }
        },
        directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DatatableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.css']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DatatableComponent, {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/table/sizing/size.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/sizing/size.component.ts ***!
      \************************************************/

    /*! exports provided: TablesizeComponent */

    /***/
    function srcAppTableSizingSizeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesizeComponent", function () {
        return TablesizeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TablesizeComponent = function TablesizeComponent() {
        _classCallCheck(this, TablesizeComponent);
      };

      TablesizeComponent.??fac = function TablesizeComponent_Factory(t) {
        return new (t || TablesizeComponent)();
      };

      TablesizeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TablesizeComponent,
        selectors: [["ng-component"]],
        decls: 173,
        vars: 0,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table", "m-b-0"], ["scope", "col"], ["scope", "row"], [1, "table", "table-dark", "m-b-0"], [1, "table", "table-sm", "m-b-0"], ["colspan", "2"], [1, "table", "table-sm", "table-dark", "m-b-0"]],
        template: function TablesizeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Default Size Light Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Default Size Dark Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Larry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Small Size Light Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "@twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Small Size Dark Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Handle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Mark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Otto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "@mdo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Jacob");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Thornton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "@fat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Larry the Bird");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "@twitter");

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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TablesizeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './size.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/tables.module.ts":
    /*!****************************************!*\
      !*** ./src/app/table/tables.module.ts ***!
      \****************************************/

    /*! exports provided: TablesModule */

    /***/
    function srcAppTableTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _tables_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tables.routing */
      "./src/app/table/tables.routing.ts");
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");
      /* harmony import */


      var _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dark-basic/dark.component */
      "./src/app/table/dark-basic/dark.component.ts");
      /* harmony import */


      var _color_table_color_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./color-table/color.component */
      "./src/app/table/color-table/color.component.ts");
      /* harmony import */


      var _sizing_size_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sizing/size.component */
      "./src/app/table/sizing/size.component.ts");

      var TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      TablesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: TablesModule
      });
      TablesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function TablesModule_Factory(t) {
          return new (t || TablesModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TablesRoutes"]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TablesModule, {
          declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasictableComponent"], _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_7__["DarktableComponent"], _color_table_color_component__WEBPACK_IMPORTED_MODULE_8__["ColortableComponent"], _sizing_size_component__WEBPACK_IMPORTED_MODULE_9__["TablesizeComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_4__["TablesRoutes"]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]],
            declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasictableComponent"], _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_7__["DarktableComponent"], _color_table_color_component__WEBPACK_IMPORTED_MODULE_8__["ColortableComponent"], _sizing_size_component__WEBPACK_IMPORTED_MODULE_9__["TablesizeComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/table/tables.routing.ts":
    /*!*****************************************!*\
      !*** ./src/app/table/tables.routing.ts ***!
      \*****************************************/

    /*! exports provided: TablesRoutes */

    /***/
    function srcAppTableTablesRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutes", function () {
        return TablesRoutes;
      });
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");
      /* harmony import */


      var _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dark-basic/dark.component */
      "./src/app/table/dark-basic/dark.component.ts");
      /* harmony import */


      var _color_table_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./color-table/color.component */
      "./src/app/table/color-table/color.component.ts");
      /* harmony import */


      var _sizing_size_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sizing/size.component */
      "./src/app/table/sizing/size.component.ts");

      var TablesRoutes = [{
        path: '',
        children: [{
          path: 'datatable',
          component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DatatableComponent"],
          data: {
            title: 'Data Table',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Data Table'
            }]
          }
        }, {
          path: 'basictables',
          component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasictableComponent"],
          data: {
            title: 'Basic Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Basic Tables'
            }]
          }
        }, {
          path: 'darktables',
          component: _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_2__["DarktableComponent"],
          data: {
            title: 'Dark Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Dark Tables'
            }]
          }
        }, {
          path: 'colortables',
          component: _color_table_color_component__WEBPACK_IMPORTED_MODULE_3__["ColortableComponent"],
          data: {
            title: 'Color Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Color Tables'
            }]
          }
        }, {
          path: 'tablesizing',
          component: _sizing_size_component__WEBPACK_IMPORTED_MODULE_4__["TablesizeComponent"],
          data: {
            title: 'Table Sizing',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Table Sizing'
            }]
          }
        }]
      }];
      /***/
    }
  }]);
})();
//# sourceMappingURL=table-tables-module-es5.js.map