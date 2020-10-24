(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~screen_modules-team-dashboard-team-dashboard-module~widget_modules-build-build-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-config-form/build-config-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/build/build-config-form/build-config-form.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"buildConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"buildJob\">Build Job <span class=\"required-text\"> *</span></label>\n        <input id=\"buildJob\" type=\"search\" class=\"form-control\"\n               [class.is-invalid]=\"((configForm.buildJob.dirty || configForm.buildJob.touched) && configForm.buildJob.errors) || searchFailed\"\n               formControlName=\"buildJob\"\n               [ngbTypeahead]=\"typeAheadResults\"\n               [inputFormatter]=\"getBuildTitle\"\n               [resultFormatter]=\"getBuildTitle\"\n               placeholder=\"Build Job\" required/>\n        <span *ngIf=\"searching\">searching...</span>\n        <div class=\"invalid-feedback\" *ngIf=\"!searchFailed || configForm.buildJob.value === ''\">Please provide a build job.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"searchFailed && !searching && configForm.buildJob.value !== ''\">Sorry, suggestions could not be loaded.</div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"buildDurationThreshold\">Build Duration Threshold <span class=\"required-text\"> *</span></label>\n        <div class=\"input-group mb-3\">\n          <input id=\"buildDurationThreshold\" type=\"text\" class=\"form-control\" placeholder=\"Build Duration Threshold\" aria-label=\"Build Duration Threshold\"\n            aria-describedby=\"minutes-label\" formControlName=\"buildDurationThreshold\"\n                 [class.is-invalid]=\"((configForm.buildDurationThreshold.dirty || configForm.buildDurationThreshold.touched) && configForm.buildDurationThreshold.errors)\"\n                 required>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"minutes-label\">minutes</span>\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"configForm.buildDurationThreshold.value === ''\">Please provide a build duration threshold.</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"consecutive-failure-threshold\">Alert Takeover Criteria <span class=\"required-text\"> *</span></label>\n        <div class=\"input-group mb-3\">\n          <input id=\"consecutive-failure-threshold\" type=\"text\" class=\"form-control\" placeholder=\"Alert Takeover Criteria\" aria-label=\"Alert Takeover Criteria\"\n            aria-describedby=\"consecutive-build-fails\" formControlName=\"consecutiveFailureThreshold\"\n                 [class.is-invalid]=\"((configForm.consecutiveFailureThreshold.dirty\n                  || configForm.consecutiveFailureThreshold.touched)\n                   && configForm.consecutiveFailureThreshold.errors)\"\n                 required>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" id=\"consecutive-build-fails\">consecutive build fails</span>\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"configForm.consecutiveFailureThreshold.value === ''\">Please provide a consecutive failure threshold.</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\" [disabled]=\"!buildConfigForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-delete-form/build-delete-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/build/build-delete-form/build-delete-form.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"buildDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!buildDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-detail/build-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/build/build-detail/build-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table-content\">\n    <thead>\n    <tr>\n      <th>Build Job</th>\n      <th>Date</th>\n    </tr>\n    </thead>\n    <tr *ngFor=\"let item of this.data\">\n      <td><a href=\"{{item?.url}}\" target=\"_blank\">{{item?.number}}</a></td>\n      <td>{{item?.subtitles | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-widget/build-widget.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/build/build-widget/build-widget.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./src/app/shared/collector.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/collector.service.ts ***!
  \*********************************************/
/*! exports provided: CollectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorService", function() { return CollectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CollectorService = /** @class */ (function () {
    function CollectorService(http) {
        this.http = http;
        // URL for items by type
        this.itemsByTypeRoute = '/api/collector/item/type/';
        this.itemsByTypeRouteBySearchField = '/api/collector/item/type/searchField/';
        // URL for items by id
        this.itemRoute = '/api/collector/item/';
        this.collectorsByTypeRoute = '/api/collector/type/';
    }
    CollectorService.prototype.getItemsByType = function (type, params) {
        return this.http.get(this.itemsByTypeRoute + type, { params: params });
    };
    CollectorService.prototype.getItemsByTypeBySearchField = function (type, params) {
        return this.http.get(this.itemsByTypeRouteBySearchField + type, { params: params });
    };
    CollectorService.prototype.searchItems = function (type, filter) {
        return this.getItemsByType(type, { search: filter, size: 20 });
    };
    CollectorService.prototype.searchItemsBySearchField = function (type, filter, searchFieldInput) {
        return this.getItemsByTypeBySearchField(type, { search: filter, searchField: searchFieldInput, size: 20 });
    };
    CollectorService.prototype.getItemsById = function (id) {
        return this.http.get(this.itemRoute + id);
    };
    CollectorService.prototype.collectorsByType = function (collectorType) {
        return this.http.get(this.collectorsByTypeRoute + collectorType);
    };
    CollectorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CollectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CollectorService);
    return CollectorService;
}());



/***/ }),

/***/ "./src/app/widget_modules/build/build-config-form/build-config-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-config-form/build-config-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvYnVpbGQvYnVpbGQtY29uZmlnLWZvcm0vQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcd2lkZ2V0X21vZHVsZXNcXGJ1aWxkXFxidWlsZC1jb25maWctZm9ybVxcYnVpbGQtY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2J1aWxkL2J1aWxkLWNvbmZpZy1mb3JtL2J1aWxkLWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2J1aWxkL2J1aWxkLWNvbmZpZy1mb3JtL2J1aWxkLWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6b3JhbmdlcmVkO1xufVxuIiwiLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/build/build-config-form/build-config-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-config-form/build-config-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BuildConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildConfigFormComponent", function() { return BuildConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var BuildConfigFormComponent = /** @class */ (function () {
    function BuildConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.searching = false;
        this.searchFailed = false;
        this.getBuildTitle = function (collectorItem) {
            if (!collectorItem) {
                return '';
            }
            var description = collectorItem.description;
            return collectorItem.niceName + ' : ' + description;
        };
        this.createForm();
    }
    Object.defineProperty(BuildConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.buildConfigForm.get('buildDurationThreshold').setValue(widgetConfig.options.buildDurationThreshold);
            this.buildConfigForm.get('consecutiveFailureThreshold').setValue(widgetConfig.options.consecutiveFailureThreshold);
        },
        enumerable: true,
        configurable: true
    });
    BuildConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeAheadResults = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItems('build', term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                        }
                        _this.searchFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                        _this.searchFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searching = false; }));
        };
        this.loadSavedBuildJob();
        this.getDashboardComponent();
    };
    BuildConfigFormComponent.prototype.createForm = function () {
        this.buildConfigForm = this.formBuilder.group({
            buildDurationThreshold: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            consecutiveFailureThreshold: '',
            buildJob: ''
        });
    };
    BuildConfigFormComponent.prototype.submitForm = function () {
        var newConfig = {
            name: 'build',
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'build0',
                buildDurationThreshold: +this.buildConfigForm.value.buildDurationThreshold,
                consecutiveFailureThreshold: +this.buildConfigForm.value.consecutiveFailureThreshold
            },
            componentId: this.componentId,
            collectorItemId: this.buildConfigForm.value.buildJob.id
        };
        this.activeModal.close(newConfig);
    };
    BuildConfigFormComponent.prototype.loadSavedBuildJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var buildCollector = dashboard.application.components[0].collectorItems.Build;
            var savedCollectorBuildJob = buildCollector ? buildCollector[0].description : null;
            if (savedCollectorBuildJob) {
                var buildId = buildCollector[0].id;
                return buildId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (buildId) {
            if (buildId) {
                return _this.collectorService.getItemsById(buildId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.buildConfigForm.get('buildJob').setValue(collectorData);
        });
    };
    BuildConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(BuildConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.buildConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    BuildConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], BuildConfigFormComponent.prototype, "widgetConfig", null);
    BuildConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-build-config-form',
            template: __webpack_require__(/*! raw-loader!./build-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-config-form/build-config-form.component.html"),
            styles: [__webpack_require__(/*! ./build-config-form.component.scss */ "./src/app/widget_modules/build/build-config-form/build-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], BuildConfigFormComponent);
    return BuildConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/build/build-delete-form/build-delete-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-delete-form/build-delete-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2J1aWxkL2J1aWxkLWRlbGV0ZS1mb3JtL2J1aWxkLWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/build/build-delete-form/build-delete-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-delete-form/build-delete-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BuildDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildDeleteFormComponent", function() { return BuildDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var BuildDeleteFormComponent = /** @class */ (function () {
    function BuildDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This build item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(BuildDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.buildDeleteForm.get('buildDurationThreshold').setValue(widgetConfig.options.buildDurationThreshold);
            this.buildDeleteForm.get('consecutiveFailureThreshold').setValue(widgetConfig.options.consecutiveFailureThreshold);
        },
        enumerable: true,
        configurable: true
    });
    BuildDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedBuildJob();
        this.getDashboardComponent();
    };
    BuildDeleteFormComponent.prototype.createDeleteForm = function () {
        this.buildDeleteForm = this.formBuilder.group({
            buildDurationThreshold: '',
            consecutiveFailureThreshold: '',
            buildJob: ''
        });
    };
    BuildDeleteFormComponent.prototype.getSavedBuildJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var buildCollector = dashboard.application.components[0].collectorItems.Build;
            var savedCollectorBuildJob = buildCollector ? buildCollector[0].description : null;
            if (savedCollectorBuildJob) {
                var buildId = buildCollector[0].id;
                return buildId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (buildId) {
            if (buildId) {
                return _this.collectorService.getItemsById(buildId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.buildDeleteForm.get('buildJob').setValue(collectorData);
        });
    };
    BuildDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'build',
            options: {
                id: this.widgetConfigId,
                buildDurationThreshold: +this.buildDeleteForm.value.buildDurationThreshold,
                consecutiveFailureThreshold: +this.buildDeleteForm.value.consecutiveFailureThreshold
            },
            componentId: this.componentId,
            collectorItemId: this.buildDeleteForm.value.buildJob.id
        };
        this.activeModal.close(deleteConfig);
    };
    BuildDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    BuildDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BuildDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], BuildDeleteFormComponent.prototype, "widgetConfig", null);
    BuildDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-build-delete-form',
            template: __webpack_require__(/*! raw-loader!./build-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-delete-form/build-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./build-delete-form.component.scss */ "./src/app/widget_modules/build/build-delete-form/build-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], BuildDeleteFormComponent);
    return BuildDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/build/build-detail/build-detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-detail/build-detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvYnVpbGQvYnVpbGQtZGV0YWlsL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXHdpZGdldF9tb2R1bGVzXFxidWlsZFxcYnVpbGQtZGV0YWlsXFxidWlsZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2J1aWxkL2J1aWxkLWRldGFpbC9idWlsZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2J1aWxkL2J1aWxkLWRldGFpbC9idWlsZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuIiwiLnRhYmxlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBwYWRkaW5nOiAxLjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/build/build-detail/build-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-detail/build-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuildDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildDetailComponent", function() { return BuildDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var BuildDetailComponent = /** @class */ (function () {
    function BuildDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    BuildDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BuildDetailComponent.prototype, "detailData", {
        set: function (data) {
            if (data.data) {
                this.data = data.data;
            }
            else {
                this.data = [data];
            }
        },
        enumerable: true,
        configurable: true
    });
    BuildDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], BuildDetailComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], BuildDetailComponent.prototype, "detailData", null);
    BuildDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-build-detail',
            template: __webpack_require__(/*! raw-loader!./build-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-detail/build-detail.component.html"),
            styles: [__webpack_require__(/*! ./build-detail.component.scss */ "./src/app/widget_modules/build/build-detail/build-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], BuildDetailComponent);
    return BuildDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/build/build-routing-module.ts":
/*!**************************************************************!*\
  !*** ./src/app/widget_modules/build/build-routing-module.ts ***!
  \**************************************************************/
/*! exports provided: BuildRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildRoutingModule", function() { return BuildRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build-widget/build-widget.component */ "./src/app/widget_modules/build/build-widget/build-widget.component.ts");




var routes = [];
var BuildRoutingModule = /** @class */ (function () {
    function BuildRoutingModule() {
    }
    BuildRoutingModule.components = [_build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_3__["BuildWidgetComponent"]];
    BuildRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BuildRoutingModule);
    return BuildRoutingModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/build/build-widget/build-charts.ts":
/*!*******************************************************************!*\
  !*** ./src/app/widget_modules/build/build-widget/build-charts.ts ***!
  \*******************************************************************/
/*! exports provided: BUILD_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILD_CHARTS", function() { return BUILD_CHARTS; });
/* harmony import */ var src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");
/* harmony import */ var src_app_shared_charts_combo_chart_combo_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/charts/combo-chart/combo-chart.component */ "./src/app/shared/charts/combo-chart/combo-chart.component.ts");
/* harmony import */ var src_app_shared_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/charts/line-chart/line-chart.component */ "./src/app/shared/charts/line-chart/line-chart.component.ts");
/* harmony import */ var src_app_shared_charts_number_card_chart_number_card_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/charts/number-card-chart/number-card-chart.component */ "./src/app/shared/charts/number-card-chart/number-card-chart.component.ts");
/* harmony import */ var _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../build-detail/build-detail.component */ "./src/app/widget_modules/build/build-detail/build-detail.component.ts");





var BUILD_CHARTS = [
    {
        title: 'Builds Per Day',
        component: src_app_shared_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"],
        data: {
            areaChart: true,
            detailComponent: _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_4__["BuildDetailComponent"],
            dataPoints: [
                {
                    name: 'All Builds',
                    series: []
                },
                {
                    name: 'Failed Builds',
                    series: []
                }
            ]
        },
        xAxisLabel: 'Days',
        yAxisLabel: 'Builds',
        colorScheme: {
            domain: ['green', 'red']
        }
    },
    {
        title: 'Latest Builds',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: 'Average Build Duration',
        component: src_app_shared_charts_combo_chart_combo_chart_component__WEBPACK_IMPORTED_MODULE_1__["ComboChartComponent"],
        data: [
            [],
            [{
                    name: 'Threshold Line',
                    series: []
                }]
        ],
        xAxisLabel: 'Days',
        yAxisLabel: 'Build Duration',
        colorScheme: {}
    },
    {
        title: 'Total Builds',
        component: src_app_shared_charts_number_card_chart_number_card_chart_component__WEBPACK_IMPORTED_MODULE_3__["NumberCardChartComponent"],
        data: [
            {
                name: 'Today',
                value: 0
            },
            {
                name: 'Last 7 Days',
                value: 0
            },
            {
                name: 'Last 14 Days',
                value: 0
            }
        ],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: 'vivid'
    },
];


/***/ }),

/***/ "./src/app/widget_modules/build/build-widget/build-widget.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-widget/build-widget.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2J1aWxkL2J1aWxkLXdpZGdldC9idWlsZC13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/build/build-widget/build-widget.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/widget_modules/build/build-widget/build-widget.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuildWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildWidgetComponent", function() { return BuildWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dash-status/DashStatus */ "./src/app/shared/dash-status/DashStatus.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var src_app_shared_layouts_two_by_two_layout_two_by_two_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/layouts/two-by-two-layout/two-by-two-layout.component */ "./src/app/shared/layouts/two-by-two-layout/two-by-two-layout.component.ts");
/* harmony import */ var src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../build-detail/build-detail.component */ "./src/app/widget_modules/build/build-detail/build-detail.component.ts");
/* harmony import */ var _build_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../build.service */ "./src/app/widget_modules/build/build.service.ts");
/* harmony import */ var _build_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./build-charts */ "./src/app/widget_modules/build/build-widget/build-charts.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");












// @ts-ignore



var BuildWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BuildWidgetComponent, _super);
    function BuildWidgetComponent(componentFactoryResolver, cdr, dashboardService, buildService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.buildService = buildService;
        _this.BUILDS_PER_DAY_TIME_RANGE = 14;
        _this.TOTAL_BUILD_COUNTS_TIME_RANGES = [7, 14];
        // Default build time threshold
        _this.BUILD_TIME_THRESHOLD = 900000;
        return _this;
    }
    // Initialize the widget and set layout and charts.
    BuildWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'build0';
        this.layout = src_app_shared_layouts_two_by_two_layout_two_by_two_layout_component__WEBPACK_IMPORTED_MODULE_7__["TwoByTwoLayoutComponent"];
        // Chart configuration moved to external file
        this.charts = _build_charts__WEBPACK_IMPORTED_MODULE_11__["BUILD_CHARTS"];
        this.auditType = '';
        this.init();
    };
    // After the view is ready start the refresh interval.
    BuildWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    BuildWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    // Start a subscription to the widget configuration for this widget and refresh the graphs each
    // cycle.
    BuildWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(-1), // Refresh this widget separate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            _this.widgetConfigExists = true;
            _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_14__["WidgetState"].READY;
            _this.buildTimeThreshold = 1000 * 60 * widgetConfig.options.buildDurationThreshold;
            return _this.buildService.fetchDetails(widgetConfig.componentId, _this.BUILDS_PER_DAY_TIME_RANGE);
        })).subscribe(function (result) {
            _this.hasData = (result && result.length > 0);
            if (_this.hasData) {
                _this.loadCharts(result);
            }
            else {
                _this.setDefaultIfNoData();
            }
        });
    };
    // Unsubscribe from the widget refresh observable, which stops widget updating.
    BuildWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    BuildWidgetComponent.prototype.loadCharts = function (result) {
        this.generateBuildsPerDay(result);
        this.generateTotalBuildCounts(result);
        this.generateAverageBuildDuration(result);
        this.generateLatestBuilds(result);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    // *********************** BUILDS PER DAY ****************************
    BuildWidgetComponent.prototype.generateBuildsPerDay = function (result) {
        var _this = this;
        var startDate = this.toMidnight(new Date());
        startDate.setDate(startDate.getDate() - this.BUILDS_PER_DAY_TIME_RANGE + 1);
        var allBuilds = result.filter(function (build) { return _this.checkBuildAfterDate(build, startDate)
            && !_this.checkBuildStatus(build, 'InProgress'); });
        var failedBuilds = result.filter(function (build) { return _this.checkBuildAfterDate(build, startDate)
            && !_this.checkBuildStatus(build, 'InProgress') && !_this.checkBuildStatus(build, 'Success'); });
        this.charts[0].data.dataPoints[0].series = this.collectDataArray(this.countBuildsPerDay(allBuilds));
        this.charts[0].data.dataPoints[1].series = this.collectDataArray(this.countBuildsPerDay(failedBuilds));
    };
    BuildWidgetComponent.prototype.countBuildsPerDay = function (builds) {
        var dataArray = builds.map(function (build) {
            return {
                statusText: build.buildStatus,
                subtitles: [
                    new Date(build.endTime)
                ],
                time: (build.endTime),
                url: build.buildUrl,
                number: build.number
            };
        });
        return dataArray;
    };
    BuildWidgetComponent.prototype.collectDataArray = function (content) {
        var e_1, _a;
        var dataArrayToSend = [];
        var groupedResults = Object(lodash__WEBPACK_IMPORTED_MODULE_13__["groupBy"])(content, function (result) { return moment__WEBPACK_IMPORTED_MODULE_12___default()(new Date(result.time), 'DD/MM/YYYY').startOf('day'); });
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(groupedResults)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                dataArrayToSend.push({
                    name: new Date(key),
                    value: groupedResults[key].length,
                    data: groupedResults[key]
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return dataArrayToSend;
    };
    // *********************** LATEST BUILDS *****************************
    BuildWidgetComponent.prototype.generateLatestBuilds = function (result) {
        var sorted = result.sort(function (a, b) {
            return a.endTime - b.endTime;
        }).reverse().slice(0, 5);
        var buildStatusTable = {
            success: src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_4__["DashStatus"].PASS,
            inprogress: src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_4__["DashStatus"].IN_PROGRESS
        };
        var latestBuildData = sorted.map(function (build) {
            var buildStatus = buildStatusTable[build.buildStatus.toLowerCase()] ?
                buildStatusTable[build.buildStatus.toLowerCase()] : src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_4__["DashStatus"].FAIL;
            var statusTextFitted = src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_4__["DashStatus"].FAIL ? '!' : build.buildStatus;
            return {
                status: buildStatus,
                statusText: statusTextFitted,
                title: build.number,
                subtitles: [
                    new Date(build.endTime)
                ],
                url: build.buildUrl,
                number: build.number
            };
        });
        this.charts[1].data = {
            items: latestBuildData,
            clickableContent: _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_9__["BuildDetailComponent"],
            clickableHeader: null
        };
    };
    // *********************** TOTAL BUILD COUNTS ************************
    BuildWidgetComponent.prototype.generateTotalBuildCounts = function (result) {
        var _this = this;
        var today = this.toMidnight(new Date());
        var bucketOneStartDate = this.toMidnight(new Date());
        var bucketTwoStartDate = this.toMidnight(new Date());
        bucketOneStartDate.setDate(bucketOneStartDate.getDate() - this.TOTAL_BUILD_COUNTS_TIME_RANGES[0] + 1);
        bucketTwoStartDate.setDate(bucketTwoStartDate.getDate() - this.TOTAL_BUILD_COUNTS_TIME_RANGES[1] + 1);
        var todayCount = result.filter(function (build) { return _this.checkBuildAfterDate(build, today); }).length;
        var bucketOneCount = result.filter(function (build) { return _this.checkBuildAfterDate(build, bucketOneStartDate); }).length;
        var bucketTwoCount = result.filter(function (build) { return _this.checkBuildAfterDate(build, bucketTwoStartDate); }).length;
        this.charts[3].data[0].value = todayCount;
        this.charts[3].data[1].value = bucketOneCount;
        this.charts[3].data[2].value = bucketTwoCount;
    };
    // *********************** AVERAGE BUILD DURATION *********************
    BuildWidgetComponent.prototype.generateAverageBuildDuration = function (result) {
        var _this = this;
        var startDate = this.toMidnight(new Date());
        // Get threshold from the configuration, or use default
        var threshold = this.buildTimeThreshold ? this.buildTimeThreshold : this.BUILD_TIME_THRESHOLD;
        startDate.setDate(startDate.getDate() - this.BUILDS_PER_DAY_TIME_RANGE + 1);
        var successBuilds = result.filter(function (build) { return _this.checkBuildAfterDate(build, startDate)
            && _this.checkBuildStatus(build, 'Success'); });
        var averagedData = this.getAveragesByThreshold(successBuilds, startDate, threshold);
        var thresholdLine = this.getConstantLineSeries(startDate, threshold);
        this.charts[2].data[0] = averagedData.series;
        this.charts[2].colorScheme.domain = averagedData.colors;
        this.charts[2].data[1][0].series = thresholdLine;
    };
    BuildWidgetComponent.prototype.getAveragesByThreshold = function (builds, startDate, threshold) {
        var _this = this;
        var dataBucket = {};
        var date = new Date(startDate.getTime());
        for (var i = 0; i < this.BUILDS_PER_DAY_TIME_RANGE; i++) {
            dataBucket[this.toMidnight(date).getTime()] = [];
            date.setDate(date.getDate() + 1);
        }
        // Group by build time
        builds.forEach(function (build) {
            var index = _this.toMidnight(new Date(build.endTime)).getTime();
            dataBucket[index].push(build.duration);
        });
        return this.getAveragesSeries(dataBucket, threshold);
    };
    BuildWidgetComponent.prototype.getAveragesSeries = function (dataBucket, threshold) {
        var e_2, _a;
        var series = [];
        var colors = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(dataBucket)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var data = dataBucket[key];
                var value = 0;
                if (data && data.length) {
                    value = data.reduce(function (a, b) {
                        return a + b;
                    }) / data.length;
                }
                series.push({
                    name: new Date(+key),
                    value: value
                });
                if (value > threshold) {
                    colors.push('red');
                }
                else {
                    colors.push('green');
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { series: series, colors: colors };
    };
    BuildWidgetComponent.prototype.getConstantLineSeries = function (startDate, threshold) {
        var date = new Date(startDate.getTime());
        var series = [];
        for (var i = 0; i < this.BUILDS_PER_DAY_TIME_RANGE; i++) {
            series.push({
                name: new Date(date.getTime()),
                value: threshold
            });
            date.setDate(date.getDate() + 1);
        }
        return series;
    };
    //// *********************** HELPER UTILS *********************
    BuildWidgetComponent.prototype.toMidnight = function (date) {
        date.setHours(0, 0, 0, 0);
        return date;
    };
    BuildWidgetComponent.prototype.checkBuildAfterDate = function (build, date) {
        return (build.endTime) >= date.getTime();
    };
    BuildWidgetComponent.prototype.checkBuildStatus = function (build, status) {
        return build.buildStatus === status;
    };
    BuildWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (!this.hasData) {
            this.charts[0].data.dataPoints[0].series = [{ name: new Date(), value: 0, data: 'All Builds' }];
            this.charts[0].data.dataPoints[1].series = [{ name: new Date(), value: 0, data: 'Failed Builds' }];
            this.charts[1].data = { items: [{ title: 'No Data Found' }] };
            this.charts[2].data[0] = [{ name: new Date(), value: 0 }];
            this.charts[2].colorScheme.domain = ['red'];
            this.charts[2].data[1][0].series = [{ name: 'No Data Found', value: 0 }];
            this.charts[3].data[0].value = 0;
            this.charts[3].data[1].value = 0;
            this.charts[3].data[2].value = 0;
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    BuildWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] },
        { type: _build_service__WEBPACK_IMPORTED_MODULE_10__["BuildService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_6__["LayoutDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_6__["LayoutDirective"])
    ], BuildWidgetComponent.prototype, "childLayoutTag", void 0);
    BuildWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-build-widget',
            template: __webpack_require__(/*! raw-loader!./build-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/build/build-widget/build-widget.component.html"),
            styles: [__webpack_require__(/*! ./build-widget.component.scss */ "./src/app/widget_modules/build/build-widget/build-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _build_service__WEBPACK_IMPORTED_MODULE_10__["BuildService"]])
    ], BuildWidgetComponent);
    return BuildWidgetComponent;
}(src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_8__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/build/build.module.ts":
/*!******************************************************!*\
  !*** ./src/app/widget_modules/build/build.module.ts ***!
  \******************************************************/
/*! exports provided: BuildModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildModule", function() { return BuildModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _build_config_form_build_config_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./build-config-form/build-config-form.component */ "./src/app/widget_modules/build/build-config-form/build-config-form.component.ts");
/* harmony import */ var _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./build-detail/build-detail.component */ "./src/app/widget_modules/build/build-detail/build-detail.component.ts");
/* harmony import */ var _build_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./build-routing-module */ "./src/app/widget_modules/build/build-routing-module.ts");
/* harmony import */ var _build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./build-widget/build-widget.component */ "./src/app/widget_modules/build/build-widget/build-widget.component.ts");
/* harmony import */ var _build_delete_form_build_delete_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./build-delete-form/build-delete-form.component */ "./src/app/widget_modules/build/build-delete-form/build-delete-form.component.ts");










var BuildModule = /** @class */ (function () {
    function BuildModule() {
    }
    BuildModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_8__["BuildWidgetComponent"], _build_config_form_build_config_form_component__WEBPACK_IMPORTED_MODULE_5__["BuildConfigFormComponent"], _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_6__["BuildDetailComponent"], _build_delete_form_build_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["BuildDeleteFormComponent"]],
            entryComponents: [_build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_8__["BuildWidgetComponent"], _build_config_form_build_config_form_component__WEBPACK_IMPORTED_MODULE_5__["BuildConfigFormComponent"], _build_detail_build_detail_component__WEBPACK_IMPORTED_MODULE_6__["BuildDetailComponent"], _build_delete_form_build_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["BuildDeleteFormComponent"]],
            imports: [
                _build_routing_module__WEBPACK_IMPORTED_MODULE_7__["BuildRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            exports: []
        })
    ], BuildModule);
    return BuildModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/build/build.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/widget_modules/build/build.service.ts ***!
  \*******************************************************/
/*! exports provided: BuildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildService", function() { return BuildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BuildService = /** @class */ (function () {
    function BuildService(http) {
        this.http = http;
        this.buildDetailRoute = '/api/build/';
    }
    BuildService.prototype.fetchDetails = function (componentId, numberOfDays) {
        var params = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('componentId', componentId).set('numberOfDays', numberOfDays.toFixed(0))
        };
        return this.http.get(this.buildDetailRoute, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    BuildService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BuildService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuildService);
    return BuildService;
}());



/***/ })

}]);
//# sourceMappingURL=default~screen_modules-team-dashboard-team-dashboard-module~widget_modules-build-build-module.js.map