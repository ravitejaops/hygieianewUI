(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing_page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing_page/dashboard-create/dashboard-create.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing_page/dashboard-create/dashboard-create.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nb-card size=\"large\">\n    <nb-card-header><h4>New Dashboard</h4></nb-card-header>\n    <nb-card-body>\n      <nb-stepper disableStepNavigation=\"true\" orientation=\"vertical\" [linear]=\"true\">\n        <nb-step label=\"Dashboard\">\n          <div>\n            <form (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n              <div class=\"form-group\">\n                <select class=\"custom-select\" required name=\"dType\" id=\"dType\" [(ngModel)]=\"dType\">\n                  <option disabled>Select type</option>\n                  <option value=\"Team\">Team</option>\n                  <option value=\"Product\" disabled>Product</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"custom-select\" id=\"dLayout\" name=\"dLayout\" required [(ngModel)]=\"dLayout\">\n                  <option disabled>Select layout</option>\n                  <option value=\"Widgets\">Widgets</option>\n                  <option value=\"Templates\">Templates</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Dashboard Title (6+)\" [(ngModel)]=\"title\" name=\"title\" required minlength=\"6\"></div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" status=\"basic\" placeholder=\"Enter Application Name (6+)\" [(ngModel)]=\"appName\" name=\"appName\" required minlength=\"6\"></div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Business Service (Optional)\"\n                       [(ngModel)]=\"busService\" id=\"busService\" name=\"busService\" [ngbTypeahead]=\"typeAheadBAItems\" [inputFormatter]=\"getBusServiceInput\" [resultFormatter]=\"getBusService\">\n                <small for=\"busService\" *ngIf=\"searching\" class=\"form-text\">searching...</small>\n                <small for=\"busService\" *ngIf=\"searchFailed\" class=\"form-text\">unable to find value...</small>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Business Application (Optional)\"\n                       [(ngModel)]=\"busApp\" id=\"busApp\" name=\"busApp\" [ngbTypeahead]=\"typeAheadBCItems\" [inputFormatter]=\"getBusAppInput\" [resultFormatter]=\"getBusApp\">\n              </div>\n              <button nbButton nbStepperNext type=\"submit\" style=\"float: right\" (click)=\"clear()\" [disabled]=\"!myForm.form.valid\">Next</button>\n            </form>\n          </div>\n        </nb-step>\n        <nb-step label=\"Widgets / Templates\">\n          <nb-card>\n            <nb-card-header>Select {{dLayout}}</nb-card-header>\n            <nb-card-body>\n              <div *ngIf=\"dLayout === 'Widgets'\" style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 1em\">\n                <button name=\"widget\" status=\"basic\" nbButton size=\"medium\" *ngFor=\"let widget of widgets\"\n                        (click)=\"widget.status = !widget.status; onClick(widget);\" [appearance]=\"widget.status ? 'filled' : ''\">{{widget.name.toUpperCase()}}</button>\n              </div>\n              <div *ngIf=\"dLayout === 'Templates'\" style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 1em\">\n                <button name=\"template\" status=\"basic\" nbButton size=\"medium\" *ngFor=\"let template of templates\"\n                        (click)=\"template.status = !template.status; onClick(template)\" [appearance]=\"template.status ? 'filled' : ''\">{{template.name.toUpperCase()}}</button>\n              </div>\n            </nb-card-body>\n            <nb-card-footer>\n              <div style=\"display: flex; flex-direction: row; justify-content: space-between\">\n                <button nbButton nbStepperPrevious>prev</button>\n                <button nbButton outline (click)=\"createDashboard()\" [disabled]=\"!isAnySelected\" status=\"success\">Create Dashboard</button>\n              </div>\n              <small *ngIf=\"createErrorMsg\" class=\"form-text text-danger\">{{createErrorMsg}}</small>\n            </nb-card-footer>\n          </nb-card>\n        </nb-step>\n      </nb-stepper>\n    </nb-card-body>\n    <nb-card-footer style=\"text-align: end\">\n      <button class=\"btn btn-outline-light\" (click)=\"close()\">Close</button>\n    </nb-card-footer>\n  </nb-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-charts-advanced-pie-chart id=\"d-pie\" *ngIf=\"dCount.length > 0\"\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"dCount\"\n  [gradient]=\"gradient\"\n  [label]=\"label\">\n</ngx-charts-advanced-pie-chart>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing_page/dashboard-list/dashboard-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing_page/dashboard-list/dashboard-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div>\n    <h1 class=\"display-4\"> Welcome to Hygieia</h1>\n    <p>A configurable DevOps dashboard that provides a near real-time consolidated view of entire application release pipeline</p>\n  </div>\n  <div>\n    <app-dashboard-count></app-dashboard-count>\n  </div>\n</div>\n<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-12 col-xl-9\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <input nbInput type=\"search\" id=\"dSearch\" name=\"dSearch\" placeholder=\"Search dashboard by title or application component name\" shape=\"round\" fieldSize=\"large\"\n                     fullWidth [formControl]=\"queryField\">\n            </div>\n            <div *ngIf=\"myDashboards\" style=\"padding-left: 0\">\n              <button id=\"createBtn\" class=\"btn btn-outline-secondary badge-pill\" (click)=\"createDashboard()\"><nb-icon size=\"large\" icon=\"plus-circle\"></nb-icon>\n                <span class=\"new-dbd-lbl\"> New Dashboard</span></button>\n            </div>\n          </div>\n          <div class=\"col\">\n            <nb-tabset fullWidth (changeTab)=\"tabChange($event)\">\n              <nb-tab tabTitle=\"All\" tabId=\"\"></nb-tab>\n              <nb-tab tabTitle=\"Team\" tabId=\"Team\"></nb-tab>\n              <nb-tab tabTitle=\"Product\" tabId=\"Product\"></nb-tab>\n            </nb-tabset>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"allDashboards\">\n            <ng-container>\n              <div>\n                <nb-card size=\"giant\">\n                  <nb-card-header>\n                    <h4>{{ dashboardType }} Dashboards</h4>\n                  </nb-card-header>\n                  <nb-list >\n                    <nb-list-item *ngFor=\"let dashboard of allDashboards\" routerLink=\"/dashboard/dashboard-view/{{dashboard.id}}\">\n                      <span class=\"fa fa-lg left-icon\" [ngClass]=\"{'fa-cubes' : dashboard.type === 'Product','fa-slideshare': dashboard.type === 'Team'}\"></span>\n                      <span class=\"d-name\">{{dashboardName(dashboard)}}</span>\n                    </nb-list-item>\n                  </nb-list>\n                  <nb-card-footer>\n                    <div class=\"text-center\" *ngIf=\"!allDashboards.length\">\n                      No results\n                    </div>\n                    <app-pagination *ngIf=\"allDashboards.length\" [totalSize]=\"dashboardCollectionSize\"\n                                    (pageChange)=\"getNextPage($event, false)\"></app-pagination>\n                  </nb-card-footer>\n                </nb-card>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"col-12 col-xl-6 justify-content-center\" *ngIf=\"myDashboards\">\n            <ng-container>\n              <div>\n                <nb-card size=\"giant\">\n                  <nb-card-header>\n                    <h4> My {{ dashboardType }} Dashboards</h4>\n                    <ng-template></ng-template>\n                  </nb-card-header>\n                  <nb-list>\n                    <nb-list-item  class=\"user-dl\" *ngFor=\"let dashboard of myDashboards\" (click)=\"routeDashboard(dashboard, $event)\">\n                        <div>\n                          <span class=\"fa fa-lg left-icon\" [ngClass]=\"{'fa-cubes' : dashboard.type === 'Product','fa-slideshare': dashboard.type === 'Team'}\"></span>\n                          <span class=\"d-name\">{{dashboardName(dashboard)}}</span>\n                        </div>\n                        <div>\n                          <a (click)=\"deleteDashboard(dashboard, $event)\"><app-dash-trash class=\"clickable pull-right\"></app-dash-trash></a>\n                          <app-dash-edit (click)=\"editDashboard(dashboard, $event)\" class=\"clickable pull-right\"></app-dash-edit>\n                        </div>\n                    </nb-list-item>\n                  </nb-list>\n                  <nb-card-footer>\n                    <div class=\"text-center\" *ngIf=\"!myDashboards.length\">\n                      No results\n                    </div>\n                    <app-pagination *ngIf=\"myDashboards.length\" [totalSize]=\"myDashboardCollectionSize\"\n                                    (pageChange)=\"getNextPage($event, true)\"></app-pagination>\n                  </nb-card-footer>\n                </nb-card>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"col\">\n            <ng-container>\n              <div>\n                <nb-card size=\"giant\">\n                  <nb-card-header><h4>Reports & Tools</h4></nb-card-header>\n                  <nb-list>\n                    <nb-list-item (click)=\"goToAuditReport()\">\n                      <span class=\"fa fa-bar-chart-o fa-lg left-icon\"></span>\n                      <span class=\"d-name\">Application Audit Result Metrics</span>\n                    </nb-list-item>\n                    <nb-list-item (click)=\"goToCollectorItemMetrics()\">\n                      <span class=\"fa fa-bar-chart-o fa-lg left-icon\"></span>\n                      <span class=\"d-name\">Application Collector Detail Viewer</span>\n                    </nb-list-item>\n                  </nb-list>\n                </nb-card>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing_page/landing-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing_page/landing-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard-list ></app-dashboard-list>\n"

/***/ }),

/***/ "./src/app/landing_page/dashboard-create/dashboard-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/landing_page/dashboard-create/dashboard-create.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-card {\n  background-color: dimgrey;\n}\nnb-card nb-card-header {\n  background-color: #2D2D2D;\n  font-family: \"Lucida Grande\", sans-serif;\n  font-weight: 500;\n  line-height: 1;\n}\nnb-card select {\n  width: 30em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ19wYWdlL2Rhc2hib2FyZC1jcmVhdGUvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcbGFuZGluZ19wYWdlXFxkYXNoYm9hcmQtY3JlYXRlXFxkYXNoYm9hcmQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nX3BhZ2UvZGFzaGJvYXJkLWNyZWF0ZS9kYXNoYm9hcmQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0U7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nX3BhZ2UvZGFzaGJvYXJkLWNyZWF0ZS9kYXNoYm9hcmQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XG4gIG5iLWNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQyRDJEO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwZW07XG4gIH1cbn1cbiIsIm5iLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5O1xufVxubmItY2FyZCBuYi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRDJEMkQ7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5uYi1jYXJkIHNlbGVjdCB7XG4gIHdpZHRoOiAzMGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/landing_page/dashboard-create/dashboard-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/landing_page/dashboard-create/dashboard-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCreateComponent", function() { return DashboardCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _admin_modules_admin_dashboard_services_cmdb_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../admin_modules/admin_dashboard/services/cmdb-data.service */ "./src/app/admin_modules/admin_dashboard/services/cmdb-data.service.ts");








var Widget = /** @class */ (function () {
    function Widget(name, status) {
        this.name = name;
        this.status = status;
    }
    Widget.ctorParameters = function () { return [
        { type: String },
        { type: Boolean }
    ]; };
    return Widget;
}());
var DTemplate = /** @class */ (function () {
    function DTemplate(name, status) {
        this.name = name;
        this.status = status;
    }
    DTemplate.ctorParameters = function () { return [
        { type: String },
        { type: Boolean }
    ]; };
    return DTemplate;
}());
var DashboardCreateComponent = /** @class */ (function () {
    function DashboardCreateComponent(dashboardService, router, dialogRef, cmdbService) {
        this.dashboardService = dashboardService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.cmdbService = cmdbService;
        this.searching = false;
        this.searchFailed = false;
        this.selectedLayoutItems = [];
        this.dType = 'Team';
        this.dLayout = 'Templates';
        this.widgetNames = ['feature', 'build', 'repo', 'codeanalysis', 'deploy'];
        this.templateNames = ['CapOne'];
        this.widgets = [];
        this.templates = [];
        this.isValidTitle = function (title) { return (title && title.trim().length >= 6); };
        this.isValidAppName = function (appName) { return (appName && appName.trim().length >= 6); };
        this.isValidType = function (dType) { return dType; };
        this.isValidTemplate = function (template) { return template; };
        this.getBusService = function (cmdb) { return cmdb ? cmdb.configurationItem + ' : ' + cmdb.commonName : ''; };
        this.getBusServiceInput = function (cmdb) { return cmdb ? cmdb.configurationItem : ''; };
        this.getBusApp = function (cmdb) { return cmdb ? cmdb.configurationItem + ' : ' + cmdb.commonName : ''; };
        this.getBusAppInput = function (cmdb) { return cmdb ? cmdb.configurationItem : ''; };
    }
    DashboardCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetNames.forEach(function (name) { return _this.widgets.push(new Widget(name, false)); });
        this.templateNames.forEach(function (name) { return _this.templates.push(new DTemplate(name, false)); });
        this.lookUpBusinessItems();
    };
    DashboardCreateComponent.prototype.createDashboard = function () {
        var _this = this;
        this.selectedLayoutItems = this.getSelectedLayoutItems();
        var submitData = {
            template: this.dLayout,
            title: this.title,
            type: this.dType,
            applicationName: this.appName,
            componentName: this.appName,
            configurationItemBusServName: this.busService,
            configurationItemBusAppName: this.busApp,
            scoreEnabled: false,
            scoreDisplay: false,
            activeWidgets: this.selectedLayoutItems
        };
        this.dashboardService.createDashboard(submitData).subscribe(function (response) {
            _this.router.navigate(["dashboard/dashboard-view/" + response.id, { activeWidgets: _this.selectedLayoutItems }]);
            _this.close();
        }, function (error) { _this.createErrorMsg = 'Error creating dashboard, invalid request'; });
    };
    DashboardCreateComponent.prototype.onSubmit = function () {
    };
    DashboardCreateComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DashboardCreateComponent.prototype.getSelectedLayoutItems = function () {
        if (this.dLayout === 'Widgets') {
            return this.getSelectedWidgets();
        }
        if (this.dLayout === 'Templates') {
            return this.getSelectedTemplate();
        }
        return [];
    };
    DashboardCreateComponent.prototype.getSelectedWidgets = function () {
        var selectedWidgets = this.widgets.filter(function (widget) { return widget.status === true; }).map(function (widget) { return widget.name; });
        if (!selectedWidgets || selectedWidgets.length === 0) {
            selectedWidgets.push.apply(selectedWidgets, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.widgetNames));
        }
        return selectedWidgets;
    };
    DashboardCreateComponent.prototype.getSelectedTemplate = function () {
        var selectedTemplate = this.templates.find(function (template) { return template.status === true; });
        if (selectedTemplate && selectedTemplate.name === 'CapOne') {
            return this.widgetNames;
        }
    };
    DashboardCreateComponent.prototype.onClick = function (item) {
        var dItems = [];
        if (item instanceof Widget) {
            dItems = this.widgets;
        }
        if (item instanceof DTemplate) {
            this.templates.forEach(function (template) {
                if (template.name !== item.name) {
                    template.status = false;
                }
            });
            dItems = this.templates;
        }
        this.isAnySelected = dItems.find(function (dItem) { return dItem.status === true; });
    };
    DashboardCreateComponent.prototype.clear = function () {
        this.isAnySelected = false;
        this.createErrorMsg = '';
        this.widgets.forEach(function (widget) { return widget.status = false; });
        this.templates.forEach(function (template) { return template.status = false; });
    };
    DashboardCreateComponent.prototype.lookUpBusinessItems = function () {
        var _this = this;
        this.typeAheadBAItems = function (text$) { return _this.getConfigItems(text$, 'app'); };
        this.typeAheadBCItems = function (text$) { return _this.getConfigItems(text$, 'component'); };
    };
    DashboardCreateComponent.prototype.getConfigItems = function (text$, itemType) {
        var _this = this;
        return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (term) {
            return _this.cmdbService.getConfigItems(itemType, { search: term, size: 10 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.searchFailed = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
                _this.searchFailed = true;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.searching = false; }));
    };
    DashboardCreateComponent.ctorParameters = function () { return [
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"] },
        { type: _admin_modules_admin_dashboard_services_cmdb_data_service__WEBPACK_IMPORTED_MODULE_7__["CmdbDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DashboardCreateComponent.prototype, "title", void 0);
    DashboardCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-create',
            template: __webpack_require__(/*! raw-loader!./dashboard-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing_page/dashboard-create/dashboard-create.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-create.component.scss */ "./src/app/landing_page/dashboard-create/dashboard-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"], _admin_modules_admin_dashboard_services_cmdb_data_service__WEBPACK_IMPORTED_MODULE_7__["CmdbDataService"]])
    ], DashboardCreateComponent);
    return DashboardCreateComponent;
}());



/***/ }),

/***/ "./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#d-pie ::ng-deep .advanced-pie-legend {\n  line-height: 1.35;\n}\n#d-pie ::ng-deep .advanced-pie-legend .total-value {\n  font-size: 28px;\n  color: #98C5AB;\n}\n#d-pie ::ng-deep .advanced-pie-legend .total-label {\n  font-size: 20px;\n  margin-bottom: 5px;\n  color: lightgray;\n}\n#d-pie ::ng-deep .advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value {\n  color: #98C5AB;\n}\n#d-pie ::ng-deep .advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label {\n  color: lightgray;\n}\n#d-pie ::ng-deep .advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent {\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ19wYWdlL2Rhc2hib2FyZC1saXN0L2Rhc2hib2FyZC1jb3VudC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFxsYW5kaW5nX3BhZ2VcXGRhc2hib2FyZC1saXN0XFxkYXNoYm9hcmQtY291bnRcXGRhc2hib2FyZC1jb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZ19wYWdlL2Rhc2hib2FyZC1saXN0L2Rhc2hib2FyZC1jb3VudC9kYXNoYm9hcmQtY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQ0FKO0FERUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESU07RUFDRSxjQUFBO0FDRlI7QURJTTtFQUNFLGdCQUFBO0FDRlI7QURJTTtFQUNFLGdCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nX3BhZ2UvZGFzaGJvYXJkLWxpc3QvZGFzaGJvYXJkLWNvdW50L2Rhc2hib2FyZC1jb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkLXBpZSB7XG4gIDo6bmctZGVlcCAuYWR2YW5jZWQtcGllLWxlZ2VuZCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XG5cbiAgICAudG90YWwtdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgY29sb3I6ICM5OEM1QUI7XG4gICAgfVxuXG4gICAgLnRvdGFsLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5sZWdlbmQtaXRlbXMtY29udGFpbmVyIC5sZWdlbmQtaXRlbXMgLmxlZ2VuZC1pdGVtIHtcbiAgICAgIC5pdGVtLXZhbHVlIHtcbiAgICAgICAgY29sb3I6ICM5OEM1QUI7XG4gICAgICB9XG4gICAgICAuaXRlbS1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICB9XG4gICAgICAuaXRlbS1wZXJjZW50IHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiNkLXBpZSA6Om5nLWRlZXAgLmFkdmFuY2VkLXBpZS1sZWdlbmQge1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cbiNkLXBpZSA6Om5nLWRlZXAgLmFkdmFuY2VkLXBpZS1sZWdlbmQgLnRvdGFsLXZhbHVlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogIzk4QzVBQjtcbn1cbiNkLXBpZSA6Om5nLWRlZXAgLmFkdmFuY2VkLXBpZS1sZWdlbmQgLnRvdGFsLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4jZC1waWUgOjpuZy1kZWVwIC5hZHZhbmNlZC1waWUtbGVnZW5kIC5sZWdlbmQtaXRlbXMtY29udGFpbmVyIC5sZWdlbmQtaXRlbXMgLmxlZ2VuZC1pdGVtIC5pdGVtLXZhbHVlIHtcbiAgY29sb3I6ICM5OEM1QUI7XG59XG4jZC1waWUgOjpuZy1kZWVwIC5hZHZhbmNlZC1waWUtbGVnZW5kIC5sZWdlbmQtaXRlbXMtY29udGFpbmVyIC5sZWdlbmQtaXRlbXMgLmxlZ2VuZC1pdGVtIC5pdGVtLWxhYmVsIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbiNkLXBpZSA6Om5nLWRlZXAgLmFkdmFuY2VkLXBpZS1sZWdlbmQgLmxlZ2VuZC1pdGVtcy1jb250YWluZXIgLmxlZ2VuZC1pdGVtcyAubGVnZW5kLWl0ZW0gLml0ZW0tcGVyY2VudCB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DashboardCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCountComponent", function() { return DashboardCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DashboardCountComponent = /** @class */ (function () {
    function DashboardCountComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.dCount = [];
        this.view = [450, 200];
        // options
        this.gradient = true;
        this.showLegend = false;
        this.label = ' Total dashboards';
        this.colorScheme = {
            domain: ['green', 'brown']
        };
        this.loadCounts();
    }
    DashboardCountComponent.prototype.ngOnInit = function () { };
    DashboardCountComponent.prototype.loadCounts = function () {
        var _this = this;
        var counts = new Set();
        this.dashboardService.dashboardCountConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2)).subscribe(function (count) {
            counts.add(count);
            _this.dCount = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](counts);
        });
    };
    DashboardCountComponent.ctorParameters = function () { return [
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
    ]; };
    DashboardCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-count',
            template: __webpack_require__(/*! raw-loader!./dashboard-count.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-count.component.scss */ "./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], DashboardCountComponent);
    return DashboardCountComponent;
}());



/***/ }),

/***/ "./src/app/landing_page/dashboard-list/dashboard-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/landing_page/dashboard-list/dashboard-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gap {\n  margin-top: 3.5rem;\n}\n\n.jumbotron {\n  background: linear-gradient(to right, transparent, black);\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0px 1px 2px 1px #000001;\n  margin-bottom: 2em;\n  padding: 0 2rem;\n}\n\n.jumbotron .container {\n  background-color: transparent;\n}\n\n.jumbotron h1 {\n  z-index: -1;\n  color: lightgray;\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 36px;\n}\n\n.jumbotron p {\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n  color: dimgrey;\n}\n\n#dSearch {\n  background: #353535;\n  box-shadow: 8px 16px 6px rgba(0, 0, 0, 0.2);\n  color: lightgray;\n}\n\ninput#dSearch::-webkit-input-placeholder {\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 1.5;\n  color: lightgray;\n}\n\ninput#dSearch::-moz-placeholder {\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 1.5;\n  color: lightgray;\n}\n\ninput#dSearch::-ms-input-placeholder {\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 1.5;\n  color: lightgray;\n}\n\ninput#dSearch::placeholder {\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 1.5;\n  color: lightgray;\n}\n\n#createBtn {\n  line-height: 2;\n  color: lightgray;\n  background: #353535;\n}\n\nnb-card-header {\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 1.5;\n  color: lightgray;\n}\n\nnb-list-item {\n  color: dimgrey;\n}\n\nnb-list-item .d-name {\n  margin-left: 1em;\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 1.5;\n  color: lightgray;\n}\n\nnb-list-item.user-dl {\n  display: flex;\n  justify-content: space-between;\n}\n\nnb-list-item:hover {\n  cursor: pointer;\n  line-height: 2;\n  font-size: 19px;\n  color: #3366ff;\n  box-shadow: 2px 0px 8px 2px grey;\n}\n\nnb-list-item:hover .d-name {\n  font-size: 19px;\n}\n\nnb-card {\n  background-color: transparent;\n  box-shadow: 0px 2px 24px 2px black;\n}\n\nh4 {\n  color: lightgray;\n  font-family: \"Optimist\", Optimist, Arial, sans-serif;\n  font-weight: 400;\n  font-size: 28px;\n}\n\n@media (max-width: 767.98px) {\n  .jumbotron h1, p {\n    display: none;\n  }\n\n  #createBtn .new-dbd-lbl {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZ19wYWdlL2Rhc2hib2FyZC1saXN0L0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGxhbmRpbmdfcGFnZVxcZGFzaGJvYXJkLWxpc3RcXGRhc2hib2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nX3BhZ2UvZGFzaGJvYXJkLWxpc3QvZGFzaGJvYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmdfcGFnZS9kYXNoYm9hcmQtbGlzdC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNFLGtCQUFBO0FDaEJGOztBRG1CQTtFQUNFLHlEQUFBO0VBQ0EsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNmRjs7QURnQkU7RUFDRSw2QkFBQTtBQ2RKOztBRGdCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZEo7O0FEZ0JFO0VBQ0Usb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZEo7O0FEa0JBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FDZkY7O0FEa0JBO0VBeENFLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzBCRjs7QURVQTtFQXhDRSxvREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUMwQkY7O0FEVUE7RUF4Q0Usb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDMEJGOztBRFVBO0VBeENFLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzBCRjs7QURjQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEY0E7RUFsREUsb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDd0NGOztBRFNBO0VBQ0UsY0FBQTtBQ05GOztBRE9FO0VBQ0UsZ0JBQUE7RUF4REYsb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDb0RGOztBREtBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURJQTtFQUNFLDZCQUFBO0VBQ0Esa0NBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QUN0Qkk7RUYyQkY7SUFDRSxhQUFBO0VDREY7O0VES0U7SUFDRSxhQUFBO0VDRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmdfcGFnZS9kYXNoYm9hcmQtbGlzdC9kYXNoYm9hcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvYnJlYWtwb2ludHNcIjtcblxuQG1peGluIGJveC1zaGFkb3cgKCR2MSwgJHYyLCAkdjMsICR2NCwgJHY1KXtcbiAgLW1vei1ib3gtc2hhZG93OiAkdjEgJHYyICR2MyAkdjQgJHY1O1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICR2MSAkdjIgJHYzICR2NCAkdjU7XG4gIGJveC1zaGFkb3c6ICR2MSAkdjIgJHYzICR2NCAkdjU7XG59XG5cbkBtaXhpbiBmb250LXN0eWxlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3B0aW1pc3RcIiwgT3B0aW1pc3QsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4uZ2FwIHtcbiAgbWFyZ2luLXRvcDogMy41cmVtO1xufVxuXG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCBibGFjayk7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4IHJnYigwLCAwLCAwLjUpO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgaDEge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgZm9udC1mYW1pbHk6ICdPcHRpbWlzdCcsIE9wdGltaXN0LCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuICBwIHtcbiAgICBmb250LWZhbWlseTogJ09wdGltaXN0JywgT3B0aW1pc3QsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBkaW1ncmV5O1xuICB9XG59XG5cbiNkU2VhcmNoIHtcbiAgYmFja2dyb3VuZDogIzM1MzUzNTtcbiAgYm94LXNoYWRvdzogOHB4IDE2cHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG5pbnB1dCNkU2VhcmNoOjpwbGFjZWhvbGRlciB7XG4gIEBpbmNsdWRlIGZvbnQtc3R5bGVcbn1cblxuI2NyZWF0ZUJ0biB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kOiAjMzUzNTM1O1xufVxuXG5uYi1jYXJkLWhlYWRlciB7XG4gIEBpbmNsdWRlIGZvbnQtc3R5bGVcbn1cbm5iLWxpc3QtaXRlbSB7XG4gIGNvbG9yOiBkaW1ncmV5O1xuICAuZC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIEBpbmNsdWRlIGZvbnQtc3R5bGVcbiAgfVxufVxuXG5uYi1saXN0LWl0ZW0udXNlci1kbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubmItbGlzdC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzMzNjZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDBweCA4cHggMnB4IGdyZXk7XG4gIC5kLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxufVxubmItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMnB4IHJnYigwLCAwLCAwLjEpO1xufVxuXG5oNCB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtZmFtaWx5OiAnT3B0aW1pc3QnLCBPcHRpbWlzdCwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gIC5qdW1ib3Ryb24gaDEsIHAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjY3JlYXRlQnRuIHtcbiAgICAubmV3LWRiZC1sYmwge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi5nYXAge1xuICBtYXJnaW4tdG9wOiAzLjVyZW07XG59XG5cbi5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCBibGFjayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMXB4ICMwMDAwMDE7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLmp1bWJvdHJvbiAuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uanVtYm90cm9uIGgxIHtcbiAgei1pbmRleDogLTE7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wdGltaXN0XCIsIE9wdGltaXN0LCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmp1bWJvdHJvbiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiT3B0aW1pc3RcIiwgT3B0aW1pc3QsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBkaW1ncmV5O1xufVxuXG4jZFNlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICMzNTM1MzU7XG4gIGJveC1zaGFkb3c6IDhweCAxNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbmlucHV0I2RTZWFyY2g6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3B0aW1pc3RcIiwgT3B0aW1pc3QsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNjcmVhdGVCdG4ge1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZDogIzM1MzUzNTtcbn1cblxubmItY2FyZC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJPcHRpbWlzdFwiLCBPcHRpbWlzdCwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxubmItbGlzdC1pdGVtIHtcbiAgY29sb3I6IGRpbWdyZXk7XG59XG5uYi1saXN0LWl0ZW0gLmQtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wdGltaXN0XCIsIE9wdGltaXN0LCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG5uYi1saXN0LWl0ZW0udXNlci1kbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxubmItbGlzdC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzMzNjZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDBweCA4cHggMnB4IGdyZXk7XG59XG5uYi1saXN0LWl0ZW06aG92ZXIgLmQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxubmItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMnB4IGJsYWNrO1xufVxuXG5oNCB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtZmFtaWx5OiBcIk9wdGltaXN0XCIsIE9wdGltaXN0LCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmp1bWJvdHJvbiBoMSwgcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNjcmVhdGVCdG4gLm5ldy1kYmQtbGJsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/landing_page/dashboard-list/dashboard-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing_page/dashboard-list/dashboard-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardListComponent", function() { return DashboardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dashboard_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-list.service */ "./src/app/landing_page/dashboard-list/dashboard-list.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard-create/dashboard-create.component */ "./src/app/landing_page/dashboard-create/dashboard-create.component.ts");
/* harmony import */ var _shared_modals_edit_dashboard_modal_edit_dashboard_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/modals/edit-dashboard-modal/edit-dashboard-modal.component */ "./src/app/shared/modals/edit-dashboard-modal/edit-dashboard-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _admin_modules_admin_dashboard_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../admin_modules/admin_dashboard/services/dashboard-data.service */ "./src/app/admin_modules/admin_dashboard/services/dashboard-data.service.ts");
/* harmony import */ var _shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/modals/general-delete-modal/general-delete-modal.component */ "./src/app/shared/modals/general-delete-modal/general-delete-modal.component.ts");













var DashboardListComponent = /** @class */ (function () {
    function DashboardListComponent(landingPageService, router, dialogService, modalService, dashboardData) {
        this.landingPageService = landingPageService;
        this.router = router;
        this.dialogService = dialogService;
        this.modalService = modalService;
        this.dashboardData = dashboardData;
        this.dashboardType = '';
        this.queryField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.myDashboards = [];
        this.allDashboards = [];
        this.defaultPageSize = '10';
    }
    DashboardListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDash();
        // Query for pull filtered owner dashboards
        this.queryField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.landingPageService.getMyDashboards(_this.paramBuilder(0, _this.defaultPageSize));
        })).subscribe(function (response) {
            _this.myDashboards = response.data;
            _this.myDashboardCollectionSize = response.total;
        });
        // Query for pull filtered 'All' dashboards
        this.queryField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.landingPageService.getAllDashboards(_this.paramBuilder(0, _this.defaultPageSize));
        }))
            .subscribe(function (response) {
            _this.allDashboards = response.data;
            _this.dashboardCollectionSize = response.total;
        });
    };
    // Default function call for pulling users dashboards
    DashboardListComponent.prototype.findMyDashboards = function (params) {
        var _this = this;
        this.landingPageService.getMyDashboards(params).subscribe(function (response) {
            _this.myDashboards = response.data;
            _this.myDashboardCollectionSize = response.total;
        }, function (error) { return console.log(error); });
    };
    DashboardListComponent.prototype.findAllDashboards = function (params) {
        var _this = this;
        this.landingPageService.getAllDashboards(params).subscribe(function (response) {
            _this.allDashboards = response.data;
            _this.dashboardCollectionSize = response.total;
        }, function (error) { return console.log(error); });
    };
    DashboardListComponent.prototype.getNextPage = function (params, isMyDashboard) {
        if (isMyDashboard) {
            this.findMyDashboards(this.paramBuilder(params.page - 1, params.pageSize));
        }
        else {
            this.findAllDashboards(this.paramBuilder(params.page - 1, params.pageSize));
        }
    };
    DashboardListComponent.prototype.navigateToTeamDashboard = function (id) {
        this.router.navigate(['/dashboard/dashboardView']);
    };
    DashboardListComponent.prototype.setDashboardType = function (type) {
        this.dashboardType = type;
        this.findMyDashboards(this.paramBuilder(0, this.defaultPageSize));
        this.findAllDashboards(this.paramBuilder(0, this.defaultPageSize));
    };
    DashboardListComponent.prototype.paramBuilder = function (page, pageSize) {
        var query = (this.queryField.value) ? this.queryField.value : '';
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', page.toString())
            .set('size', pageSize)
            .set('search', query)
            .set('type', this.dashboardType);
    };
    DashboardListComponent.prototype.goToAuditReport = function () {
        this.router.navigate(['/audits/nfrr']);
    };
    DashboardListComponent.prototype.dashboardName = function (dashboard) {
        var dName = [dashboard.title, dashboard.configurationItemBusAppName, dashboard.configurationItemBusServName]
            .filter(Boolean).join(' - ');
        return dName;
    };
    DashboardListComponent.prototype.tabChange = function ($event) {
        this.setDashboardType($event.tabId);
    };
    DashboardListComponent.prototype.deleteDashboard = function (dashboard, $event) {
        var _this = this;
        $event.stopPropagation();
        var modalRef = this.modalService.open(_shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_12__["GeneralDeleteComponent"]);
        var dashName = this.dashboardName(dashboard);
        modalRef.componentInstance.title = dashName;
        modalRef.result.then(function (newConfig) {
            _this.dashboardData.deleteDashboard(dashboard.id).subscribe(function (response) {
                _this.loadDash();
            });
        }).catch(function (error) {
            console.log('delete error deleteDashboard :' + error);
        });
    };
    DashboardListComponent.prototype.editDashboard = function (item, $event) {
        $event.stopPropagation();
        var modalRef = this.modalService.open(_shared_modals_edit_dashboard_modal_edit_dashboard_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditDashboardModalComponent"]);
        modalRef.componentInstance.dashboardItem = item;
        modalRef.result.then(function (newConfig) {
        }).catch(function (error) {
            console.log('edit error newConfig :' + error);
        });
    };
    DashboardListComponent.prototype.createDashboard = function () {
        this.dialogService.open(_dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_8__["DashboardCreateComponent"]);
    };
    DashboardListComponent.prototype.goToCollectorItemMetrics = function () {
        this.router.navigate(['/collectorItem/viewer']);
    };
    DashboardListComponent.prototype.loadDash = function () {
        this.findMyDashboards(this.paramBuilder(0, this.defaultPageSize));
        this.findAllDashboards(this.paramBuilder(0, this.defaultPageSize));
    };
    DashboardListComponent.prototype.routeDashboard = function (dashboard, $event) {
        this.router.navigate(['/dashboard/dashboard-view/' + dashboard.id]);
    };
    DashboardListComponent.ctorParameters = function () { return [
        { type: _dashboard_list_service__WEBPACK_IMPORTED_MODULE_6__["DashboardListService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] },
        { type: _admin_modules_admin_dashboard_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_11__["DashboardDataService"] }
    ]; };
    DashboardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard-list',
            template: __webpack_require__(/*! raw-loader!./dashboard-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing_page/dashboard-list/dashboard-list.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-list.component.scss */ "./src/app/landing_page/dashboard-list/dashboard-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_list_service__WEBPACK_IMPORTED_MODULE_6__["DashboardListService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"],
            _admin_modules_admin_dashboard_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_11__["DashboardDataService"]])
    ], DashboardListComponent);
    return DashboardListComponent;
}());



/***/ }),

/***/ "./src/app/landing_page/dashboard-list/dashboard-list.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing_page/dashboard-list/dashboard-list.service.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardListService", function() { return DashboardListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");






var DashboardListService = /** @class */ (function () {
    function DashboardListService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    DashboardListService.prototype.getMyDashboards = function (params) {
        // Checking Auth so that we don't make unnecessary api calls
        if (this.authService.isAuthenticated()) {
            var path = '/api/dashboard/mydashboard/page/filter';
            return this.get(params, path);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }
    };
    DashboardListService.prototype.getAllDashboards = function (params) {
        var path = ' /api/dashboard/page/filter';
        return this.get(params, path);
    };
    DashboardListService.prototype.get = function (params, path) {
        return this.http.get(path, { params: params, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return {
                data: data.body,
                total: data.headers.get('totalentities')
            };
        }));
    };
    DashboardListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    DashboardListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], DashboardListService);
    return DashboardListService;
}());



/***/ }),

/***/ "./src/app/landing_page/landing-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/landing_page/landing-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/landing_page/landing-page.component.ts");



// local imports

var routes = [
    {
        path: '',
        component: _landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }
];
var LandingPageRoutingModule = /** @class */ (function () {
    function LandingPageRoutingModule() {
    }
    LandingPageRoutingModule.components = [_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]];
    LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LandingPageRoutingModule);
    return LandingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing_page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing_page/landing-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmdfcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/landing_page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing_page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.dashboardService.loadCounts();
    };
    LandingPageComponent.ctorParameters = function () { return [
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
    ]; };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing_page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing_page/landing-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/landing_page/landing-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing_page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page-routing.module */ "./src/app/landing_page/landing-page-routing.module.ts");
/* harmony import */ var _dashboard_list_dashboard_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.service */ "./src/app/landing_page/dashboard-list/dashboard-list.service.ts");
/* harmony import */ var _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-list/dashboard-list.component */ "./src/app/landing_page/dashboard-list/dashboard-list.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-create/dashboard-create.component */ "./src/app/landing_page/dashboard-create/dashboard-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_list_dashboard_count_dashboard_count_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-list/dashboard-count/dashboard-count.component */ "./src/app/landing_page/dashboard-list/dashboard-count/dashboard-count.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");












var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageRoutingModule"].components,
                _dashboard_list_dashboard_list_component__WEBPACK_IMPORTED_MODULE_5__["DashboardListComponent"],
                _dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_7__["DashboardCreateComponent"],
                _dashboard_list_dashboard_count_dashboard_count_component__WEBPACK_IMPORTED_MODULE_10__["DashboardCountComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingPageRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTabsetModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSearchModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTableModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTreeGridModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbRadioModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbStepperModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["PieChartModule"],
            ],
            entryComponents: [_dashboard_create_dashboard_create_component__WEBPACK_IMPORTED_MODULE_7__["DashboardCreateComponent"]],
            providers: [_dashboard_list_dashboard_list_service__WEBPACK_IMPORTED_MODULE_4__["DashboardListService"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=landing_page-landing-page-module.js.map