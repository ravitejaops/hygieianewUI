(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screen_modules-team-dashboard-team-dashboard-module"],{

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/dasboard-navbar/dasboard-navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/dasboard-navbar/dasboard-navbar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n    <nav class=\"navbar navbar-inverse navbar-expand-lg fixed-top\">\n       <div class=\"divNavBar\" >\n        <a class=\"dashboard-logo dashboard-logo-inverse\" id=\"hygieiaLogo\" routerLink=\"/\"></a>\n            <h4 class=\"dash-title\" title=\"{{title}}\"> {{title}} </h4>\n         <a class=\"viewer\" id=\"collectorItemViewer\" routerLink=\"/collectorItem/viewer\">Collector Items Viewer</a>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"dashboard\">\n    <a routerLink=\"/collectorItem/viewer\" (click)=\"openCollectorViewer()\"><h4>{{dashboardTitle}} <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></h4></a>\n    <ng-template appTemplates></ng-template>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"deployConfigForm\" [formGroup]=\"deployConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\" for=\"deployJob\">Deployment Application <span class=\"required-text\"> *</span></label>\n        <div class=\"col-md-9\">\n          <input id=\"deployJob\" type=\"search\" class=\"form-control\"\n                 [class.is-invalid]=\"((configForm.deployJob.dirty || configForm.deployJob.touched) && configForm.deployJob.errors) || searchFailed\"\n                 formControlName=\"deployJob\"\n                 [ngbTypeahead]=\"typeAheadResults\"\n                 [inputFormatter]=\"getDeployJob\"\n                 [resultFormatter]=\"getDeployJob\"\n                 placeholder=\"Search for a deployment application\" />\n          <span *ngIf=\"searching\">searching...</span>\n          <div class=\"invalid-feedback\" *ngIf=\"!searchFailed || configForm.deployJob.value === ''\">Please provide a deploy job.</div>\n          <div class=\"invalid-feedback\" *ngIf=\"searchFailed && !searching && configForm.deployJob.value !== ''\">Sorry, suggestions could not be loaded.</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\">Ignore Environment Failures Pattern</label>\n        <div class=\"col-sm-9\">\n          <div class=\"input-group mb-3\">\n            <input id=\"deployRegex\" type=\"text\" class=\"form-control\" placeholder=\"Enter Regex\" aria-label=\"deployRegex\"\n                   formControlName=\"deployRegex\" >\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group checkbox\">\n        <label title=\"If true deployments with the same name and ID that processed in different servers will grouped together\">\n          <input id = \"deployAggregateServer\" type=\"checkbox\" name=\"deployAggregateServer\" ng-model=\"deployConfig.deployAggregateServer\" ng-change=\"reload()\" formControlName=\"deployAggregateServer\">\n          Aggregate Servers\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\" [disabled]=\"!deployConfigForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"deployDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!deployDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class =\"table-content\" modalTypeTag>\n    <thead>\n      <tr>\n        <th>Component</th>\n        <th>Time</th>\n        <th>Version</th>\n        <th>Deployment Agent Name</th>\n      </tr>\n    </thead>\n    <tr>\n      <td>{{data?.name}}</td>\n      <td>{{data?.lastUpdated | date : 'medium'}}</td>\n      <td>{{data?.version}}</td>\n      <td><a href=\"{{data?.url}}\">{{data?.regex}}</a></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"featureConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n      <div class=\"form-group row\">\n        <label for=\"featureTool\" class=\"col-sm-3 col-form-label\">Feature Tool <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <select formControlName=\"featureTool\" id=\"featureTool\" class=\"form-control\">\n            <option *ngFor=\"let currFeature of featureTool\" [value]=\"currFeature.type\">\n            {{currFeature.type}}\n          </option>\n        </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"projectName\">Project Name <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <input id=\"projectName\" type=\"search\" class=\"form-control\"\n                 [class.is-invalid]=\"((configForm.projectName.dirty || configForm.projectName.touched) && configForm.projectName.errors) || searchProjectFailed\"\n                 formControlName=\"projectName\"\n                 [ngbTypeahead]=\"typeAheadResultsProject\"\n                 [inputFormatter]=\"getProjectName\"\n                 [resultFormatter]=\"getProjectName\"\n                 placeholder=\"Project Name\" required/>\n          <span *ngIf=\"searchingProject\">searching...</span>\n          <div class=\"invalid-feedback\" *ngIf=\"!searchProjectFailed || configForm.projectName.value === ''\">Please provide a project name.</div>\n          <div class=\"invalid-feedback\" *ngIf=\"searchProjectFailed && !searchingProject && configForm.projectName.value !== ''\">Sorry, suggestions could not be loaded.</div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"teamName\">Team Name <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <input id=\"teamName\" type=\"search\" class=\"form-control\"\n                 [class.is-invalid]=\"((configForm.teamName.dirty || configForm.teamName.touched) && configForm.teamName.errors) || searchTeamFailed\"\n                 formControlName=\"teamName\"\n                 [ngbTypeahead]=\"typeAheadResultsTeam\"\n                 [inputFormatter]=\"getTeamName\"\n                 [resultFormatter]=\"getTeamName\"\n                 placeholder=\"Team Name\" required/>\n          <span *ngIf=\"searchingTeam\">searching...</span>\n          <div class=\"invalid-feedback\" *ngIf=\"!searchTeamFailed || configForm.teamName.value === ''\">Please provide a team name.</div>\n          <div class=\"invalid-feedback\" *ngIf=\"searchTeamFailed && !searchingTeam && configForm.teamName.value !== ''\">Sorry, suggestions could not be loaded.</div>\n        </div>\n      </div>\n      <div class=\"form-group row \">\n        <label class=\"col-sm-3 col-form-label\" for=\"sprintType\">Sprint Type <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <select formControlName=\"sprintType\" id=\"sprintType\" class=\"form-control\">\n            <option *ngFor=\"let currSprint of sprintType\" [value]=\"currSprint.type\">\n              {{currSprint.value}}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"listType\">List Type <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <select formControlName=\"listType\" id=\"listType\" class=\"form-control\">\n            <option *ngFor=\"let currList of listType\" [value]=\"currList.type\">\n              {{currList.value}}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"estimateMetricType\">Metric Type <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <select formControlName=\"estimateMetricType\" id=\"estimateMetricType\" class=\"form-control\">\n            <option *ngFor=\"let currEstimateMetric of estimateMetricType\" [value]=\"currEstimateMetric.type\">\n              {{currEstimateMetric.value}}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n  <div class=\"modal-footer\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <button class=\"btn btn-primary\" [disabled]=\"!featureConfigForm.valid\">Save</button>\n        </div>\n      </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"featureDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!featureDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-detail/feature-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/feature/feature-detail/feature-detail.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class =\"table-content\" modalTypeTag>\n    <tr>\n      <th>{{data?.type}} Number</th>\n      <th>Jira</th>\n      <th>Story Points</th>\n      <th>Date</th>\n      <th>Status</th>\n    </tr>\n    <tr>\n      <td>{{data?.number}}</td>\n      <td><a href=\"{{data?.url}}\" target=\"_blank\">{{data?.type}} Link</a></td>\n      <td>{{data?.time}}</td>\n      <td>{{data?.date}}</td>\n      <td>{{data?.progressStatus}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-widget/feature-widget.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/feature/feature-widget/feature-widget.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"ossConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"ossJob\">Open Source Scan <span class=\"required-text\"> *</span></label>\n        <input id=\"ossJob\" type=\"search\" class=\"form-control\"\n               [class.is-invalid]=\"((configForm.ossJob.dirty || configForm.ossJob.touched) && configForm.ossJob.errors) || searchFailed\"\n               formControlName=\"ossJob\"\n               [ngbTypeahead]=\"typeAheadResults\"\n               [inputFormatter]=\"getOssTitle\"\n               [resultFormatter]=\"getOssTitle\"\n               placeholder=\"Enter Open Source Library\" required/>\n        <span *ngIf=\"searching\">searching...</span>\n        <div class=\"invalid-feedback\" *ngIf=\"!searchFailed || configForm.ossJob.value === ''\">Please provide an oss job.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"searchFailed && !searching && configForm.ossJob.value !== ''\">Sorry, suggestions could not be loaded.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\" [disabled]=\"!ossConfigForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"ossDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!ossDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table *ngFor=\"let level of this.data\" class =\"table-content\">\n      <tr>\n        <th>{{level?.title}}\n          <div class=\"col-md-2 view-in-tool pull-right\">\n            <a href=\"{{level?.url}}\" target=\"_blank\" rel=\"noopener noreferrer\">View Report\n              <span class=\"fa fa-angle-right\"></span>\n            </a>\n          </div>\n        </th>\n      </tr>\n      <tr *ngFor=\"let comp of level?.components\">\n        <td>{{comp}}</td>\n      </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 0px\">\n    <table class =\"table-content\">\n      <tr>\n        <th>Url</th>\n      </tr>\n      <tr><a href=\"{{data?.url}}\" target=\"_blank\">{{data?.url}}</a></tr>\n      <tr>\n        <th>Last Updated</th>\n      </tr>\n      <tr>{{toDate(data?.lastUpdated)}}</tr>\n      <tr>\n        <th>Components</th>\n      </tr>\n      <tr *ngFor=\"let item of this.data?.components\">\n        <td>{{item}}</td>\n      </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"repoConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"scm\">Repo Type <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <select class=\"form-control\" formControlName=\"scm\" id=\"scm\">\n            <option *ngFor=\"let currSCM of scm\" [value]=\"currSCM.type\">\n              {{currSCM.type}}\n            </option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\" for=\"url\">Repo URL <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n            <input id=\"url\" type=\"text\" class=\"form-control\" placeholder=\"Enter repo URL\" aria-label=\"url\" formControlName=\"url\"\n                   [class.is-invalid]=\"((configForm.url.dirty || configForm.url.touched) && configForm.url.errors)\" required>\n            <div class=\"invalid-feedback\" *ngIf=\"configForm.url.value === ''\">Please provide a repo url.</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\" for=\"branch\">Branch <span class=\"required-text\"> *</span></label>\n        <div class=\"col-sm-9\">\n          <div class=\"input-group mb-3\">\n            <input id=\"branch\" type=\"text\" class=\"form-control\" placeholder=\"Enter Branch\" aria-label=\"branch\" formControlName=\"branch\"\n                   [class.is-invalid]=\"((configForm.branch.dirty || configForm.branch.touched) && configForm.branch.errors)\" required>\n            <div class=\"invalid-feedback\" *ngIf=\"configForm.branch.value === ''\">Please provide a branch.</div>\n          </div>\n        </div>\n      </div>\n\n      <h5>Credentials <small class=\"text-muted\">Optional but required for private repos</small></h5>\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\" for=\"userID\">Username</label>\n        <div class=\"col-sm-9\">\n            <input id=\"userID\" type=\"text\" class=\"form-control\" placeholder=\"Enter your repo username\" aria-label=\"userID\" formControlName=\"userID\" >\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-form-label col-sm-3\" for=\"password\">Password</label>\n        <div class=\"col-sm-9\">\n          <div class=\"input-group mb-3\">\n            <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Enter your repo password\" aria-label=\"password\" formControlName=\"password\" >\n          </div>\n        </div>\n      </div>\n\n      <h5>OR</h5>\n      <div class=\"form-group row\" for=\"personalAccessToken\">\n        <label class=\"col-form-label col-sm-3\">Personal Access Token:</label>\n        <div class=\"col-sm-9\">\n          <div class=\"input-group mb-3\">\n            <input id=\"personalAccessToken\" type=\"password\" class=\"form-control\" placeholder=\"Enter your Github personal access token\" aria-label=\"personalAccessToken\" formControlName=\"personalAccessToken\" >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\" [disabled]=\"!repoConfigForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"repoDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!repoDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-detail/repo-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/repo/repo-detail/repo-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class =\"table-content\">\n      <tr>\n        <th>Number</th>\n        <th>Author</th>\n        <th>Message</th>\n        <th>Time</th>\n      </tr>\n      <tr *ngFor=\"let item of this.data\">\n        <td>{{item?.number}}</td>\n        <td>{{item?.author}}</td>\n        <td>{{item?.message}}</td>\n        <td>{{item?.time | date:'medium'}}</td>\n      </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-widget/repo-widget.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/repo/repo-widget/repo-widget.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"securityConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"sJob\">Security Scan <span class=\"required-text\"> *</span></label>\n        <input id=\"sJob\" type=\"search\" class=\"form-control\"\n               [class.is-invalid]=\"((configForm.sJob.dirty || configForm.sJob.touched) && configForm.sJob.errors) || searchFailed\"\n               formControlName=\"sJob\"\n               [ngbTypeahead]=\"typeAheadResults\"\n               [inputFormatter]=\"getSecurityJobTitle\"\n               [resultFormatter]=\"getSecurityJobTitle\"\n               placeholder=\"Search Security Analysis Job...\" required/>\n        <span *ngIf=\"searching\">searching...</span>\n        <div class=\"invalid-feedback\" *ngIf=\"!searchFailed || configForm.sJob.value === ''\">Please provide a security job.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"searchFailed && !searching && configForm.sJob.value !== ''\">Sorry, suggestions could not be loaded.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\" [disabled]=\"!securityConfigForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"securityDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!securityDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"staticAnalysisDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!staticAnalysisDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <table class = \"table-content\">\n      <thead>\n      <tr>\n        <th>Project Name</th>\n        <th>Last Activity</th>\n        <th>Url</th>\n      </tr>\n      </thead>\n      <tr>\n        <td>{{data?.name}}</td>\n        <td>{{isDate(data?.timestamp) ? formatDate(data?.timestamp.getTime()) : data?.timestamp.toString()}}</td>\n        <td><a href=\"{{data?.url}}\" target=\"_blank\" rel=\"noopener noreferrer\">View in Sonar</a></td>\n      </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"staticAnalysisConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"staticAnalysisJob\">Static Analysis Project <span class=\"required-text\"> *</span></label>\n        <input id=\"staticAnalysisJob\" type=\"search\" class=\"form-control\"\n               [class.is-invalid]=\"((configForm.staticAnalysisJob.dirty || configForm.staticAnalysisJob.touched) && configForm.staticAnalysisJob.errors) || searchFailed\"\n               formControlName=\"staticAnalysisJob\"\n       [ngbTypeahead]=\"typeAheadResults\" [inputFormatter]=\"getStaticAnalysisTitle\" [resultFormatter]=\"getStaticAnalysisTitle\" placeholder=\"Enter Sonar Project\" required/>\n        <span *ngIf=\"searching\">searching...</span>\n        <div class=\"invalid-feedback\" *ngIf=\"!searchFailed || configForm.staticAnalysisJob.value === ''\">Please provide a static analysis job.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"searchFailed && !searching && configForm.staticAnalysisJob.value !== ''\">Sorry, suggestions could not be loaded.</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\" [disabled]=\"!staticAnalysisConfigForm.valid\">\n            Save\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-config-form/test-config-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/test/test-config-form/test-config-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"testConfigForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"modal-body\">\n    <div class=\"container\">\n\n      <!-- Functional tests -->\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"ftest\">Functional Test</label>\n        <div formArrayName=\"functionalTests\">\n          <div *ngFor=\"let test of functionalTests.controls; let i=index\" [formGroupName]=\"i\">\n            <div class=\"input-group mb-3\">\n              <input id=\"ftest\" type=\"search\" class=\"form-control\"\n                     [class.is-invalid]=\"((test.dirty || test.touched) && test.errors) || searchFunctionalFailed\"\n                     formControlName=\"test\"\n              [ngbTypeahead]=\"typeAheadResultsFunctional\" [inputFormatter]=\"getTestResultTitle\" [resultFormatter]=\"getTestResultTitle\"\n                     placeholder=\"Search for a functional test\" required>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-secondary fa fa-trash \" type=\"button\" (click)=\"deleteFunctionalTest(i)\"></button>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"!searchFunctionalFailed || test.value === ''\">Please provide a functional test.</div>\n              <div class=\"invalid-feedback\" *ngIf=\"searchFunctionalFailed && !searchingFunctional && test.value !== ''\">Sorry, suggestions could not be loaded.</div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col text-center\">\n              <button type=\"button\" class=\"fa fa-plus-circle fa-2x btn btn-secondary btn-sm\" (click)=\"addFunctionalTest()\"></button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Performance tests -->\n      <div class=\"form-group\">\n        <label class=\"col-form-label\" for=\"ptest\">Performance Test</label>\n        <div formArrayName=\"performanceTests\">\n          <div *ngFor=\"let test of performanceTests.controls; let i=index\" [formGroupName]=\"i\">\n            <div class=\"input-group mb-3\">\n              <input id=\"ptest\" type=\"search\" class=\"form-control\"\n                     [class.is-invalid]=\"((test.dirty || test.touched) && test.errors) || searchPerformanceFailed\"\n                     formControlName=\"test\"\n              [ngbTypeahead]=\"typeAheadResultsPerformance\" [inputFormatter]=\"getTestResultTitle\" [resultFormatter]=\"getTestResultTitle\"\n                     placeholder=\"Search for a performance test\" required>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-secondary fa fa-trash\" type=\"button\" (click)=\"deletePerformanceTest(i)\"></button>\n              </div>\n              <div class=\"invalid-feedback\" *ngIf=\"!searchPerformanceFailed || test.value === ''\">Please provide a performance test.</div>\n              <div class=\"invalid-feedback\" *ngIf=\"searchPerformanceFailed && !searchingPerformance && test.value !== ''\">Sorry, suggestions could not be loaded.</div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col text-center\">\n              <button type=\"button\" class=\"fa fa-plus-circle fa-2x btn btn-secondary btn-sm\" (click)=\"addPerformanceTest()\"></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Save -->\n  <div class=\"modal-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col text-center\">\n          <button class=\"btn btn-primary\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-delete-form/test-delete-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/test/test-delete-form/test-delete-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"testDeleteForm\" (ngSubmit)=\"submitDeleteForm()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"col-form-label\">{{message}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <div class=\"col text-center\">\n      <button class=\"btn btn-outline-secondary mr-3\" (click)=\"activeModal.dismiss()\">Cancel</button>\n      <button class=\"btn btn-danger\" [disabled]=\"!testDeleteForm.valid || !widgetConfigId\">Delete</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-detail/test-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/test/test-detail/test-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- No data -->\n<ng-template #no_data>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      No data found.\n    </div>\n  </div>  \n</ng-template>\n<div class=\"body\" *ngIf=\"this.hasData(); else no_data\">\n  <div #other_content>\n\n    <!-- First level-->\n    <ngb-accordion [closeOthers]=\"true\" >\n      <div *ngFor=\"let test of this.data.testCapabilities; let i = index;\">\n        <ngb-panel  id=\"{{i}}\" title=\"{{test.description}}\">\n          <ng-template ngbPanelHeader>\n            <div class=\"d-flex align-items-center justify-content-between\">\n              <div class=\"column overflow-auto testCapabilityDescription\">{{test.description}}</div>\n              <div class=\"column\">Passed: {{test.successTestSuiteCount}}</div>\n              <div class=\"column\">Failed: {{test.failedTestSuiteCount}}</div>\n              <div class=\"column\">Skipped: {{test.skippedTestSuiteCount}}</div>\n              <button ngbPanelToggle class=\"btn fa fa-chevron-down\"></button>\n            </div>\n          </ng-template>\n          <ng-template ngbPanelContent>\n\n            <!-- Second level-->\n            <ngb-accordion  [closeOthers]=\"true\" >\n              <div *ngFor=\"let testSuite of test.testSuites; let j = index\">\n                <ngb-panel id=\"{{j}}\"  class=\"level1\"  title=\"{{testSuite.description}}\">\n                  <ng-template ngbPanelHeader>\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                      <div class=\"column overflow-auto testCapabilityDescription\">{{testSuite.description}}</div>\n                      <div class=\"column\">Passed: {{testSuite.successTestCaseCount}}</div>\n                      <div class=\"column\">Failed: {{testSuite.failedTestCaseCount}}</div>\n                      <div class=\"column\">Skipped: {{testSuite.skippedTestCaseCount}}</div>\n                      <button ngbPanelToggle class=\"btn fa fa-chevron-down\"></button>\n                    </div>\n                  </ng-template>\n                  <ng-template ngbPanelContent>\n                    \n                    <!-- Third level -->\n                    <ngb-accordion [closeOthers]=\"true\" >\n                      <div *ngFor=\"let testCase of testSuite.testCases; let k = index\">\n                        <ngb-panel id=\"{{k}}\" title=\"{{testCase.description}}\">\n                          <ng-template ngbPanelHeader>\n                            <div class=\"d-flex align-items-center justify-content-between\">\n                              <div class=\"column overflow-auto testCapabilityDescription\">{{testCase.description}}</div>\n                              <div class=\"column\">Passed: {{testCase.successTestStepCount}}</div>\n                              <div class=\"column\">Failed: {{testCase.failedTestStepCount}}</div>\n                              <div class=\"column\">Skipped: {{testCase.skippedTestStepCount}}</div>\n                              <button ngbPanelToggle class=\"btn fa fa-chevron-down\"></button>\n                            </div>\n                          </ng-template>\n                          <ng-template ngbPanelContent>\n                            \n                            <!-- Fourth level -->\n                            <table>\n                              <div *ngFor=\"let testStep of testCase.testSteps\">\n                                <tr id=\"testStep.description\">\n                                  <td *ngIf=\"testStep.status == 'Success'\">\n                                    <span class=\"fa fa-check\"></span>\n                                  </td> \n                                  <td *ngIf=\"testStep.status == 'Failure'\">\n                                    <span class=\"fa fa-times\"></span>\n                                  </td> \n                                  <td *ngIf=\"testStep.status == 'Skipped'\">\n                                    <span class=\"fa fa-warning\"></span>\n                                  </td> \n                                  <td class=\"level4_id\"> {{testStep.id}}: </td>\n                                  <td class=\"level4_desc\">{{testStep.description}}</td>\n                                </tr>\n                              </div>\n                            </table>\n\n\n                          </ng-template>\n                        </ngb-panel>\n                      </div>\n                    </ngb-accordion>\n\n\n                  </ng-template>\n                </ngb-panel>\n              </div>\n            </ngb-accordion>\n\n\n          </ng-template>\n        </ngb-panel>\n      </div>\n    </ngb-accordion>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-widget/test-widget.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widget_modules/test/test-widget/test-widget.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template appLayout></ng-template>\n"

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/core/dasboard-navbar/dasboard-navbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/core/dasboard-navbar/dasboard-navbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divNavBar {\n  width: 100%;\n  text-align: center;\n  margin: 10px;\n}\n\n#header {\n  text-align: center;\n  position: relative;\n}\n\n#header .dashboard-logo {\n  background: url('Hygieia_Logo.png') no-repeat center center;\n  background-size: contain;\n  display: inline-block;\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 135px;\n  height: 35px;\n}\n\n#header .dashboard-logo.dashboard-logo-inverse {\n  background-image: url('Hygieia_Logo.png');\n}\n\nh4.dash-title {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  display: inline-block;\n}\n\na.viewer {\n  display: inline-block;\n  color: #08b;\n  float: right;\n}\n\n.navbar-default .nav > li > a,\n.navbar-default .nav > li > a:focus {\n  color: #08b;\n}\n\n.navbar-default .nav > li > a,\n.navbar-default .nav > li > a:hover {\n  color: #08b;\n}\n\n.navbar-default .nav > li > a,\n.navbar-default .nav > li > a:focus:hover {\n  color: #08b;\n}\n\n.navbar-fixed-top .navbar-nav {\n  height: 60px;\n}\n\n.navbar-fixed-top .navbar-brand {\n  height: 60px;\n}\n\n.navbar-header {\n  height: auto;\n}\n\n.navbar-inverse {\n  background-color: white;\n  border-color: #a79f9f;\n}\n\n#navbar-brand {\n  margin-left: 20%;\n}\n\n.navtext {\n  font-size: 10px;\n}\n\n.welcome-header {\n  position: relative;\n}\n\n.welcome-header .fa-stack {\n  cursor: pointer;\n}\n\n.welcome-header .fa-stack .fa-circle {\n  color: black;\n  opacity: 0;\n}\n\n.welcome-header .fa-stack:hover .fa-circle {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9kYXNib2FyZC1uYXZiYXIvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcY29yZVxcZGFzYm9hcmQtbmF2YmFyXFxkYXNib2FyZC1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvZGFzYm9hcmQtbmF2YmFyL2Rhc2JvYXJkLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixZQUFBO0FDR25DOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZFO0VBQ0UsMkRBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREhJO0VBQ0UseUNBQUE7QUNLTjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTs7RUFFRSxXQUFBO0FDR0Y7O0FEQUE7O0VBRUUsV0FBQTtBQ0dGOztBREFBOztFQUVFLFdBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGOztBRERFO0VBQ0UsZUFBQTtBQ0dKOztBRERJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNHTjs7QURDTTtFQUNFLFVBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzYm9hcmQtbmF2YmFyL2Rhc2JvYXJkLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZOYXZCYXJ7XG4gIHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMTBweDtcbn1cbiNoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuZGFzaGJvYXJkLWxvZ28ge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvSHlnaWVpYV9Mb2dvLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgICYuZGFzaGJvYXJkLWxvZ28taW52ZXJzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0h5Z2llaWFfTG9nby5wbmdcIik7XG4gICAgfVxuICB9XG59XG5cbmg0LmRhc2gtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmEudmlld2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzA4YjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdiA+IGxpID4gYSxcbi5uYXZiYXItZGVmYXVsdCAubmF2ID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICMwOGI7XG59XG5cbi5uYXZiYXItZGVmYXVsdCAubmF2ID4gbGkgPiBhLFxuLm5hdmJhci1kZWZhdWx0IC5uYXYgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogIzA4Yjtcbn1cblxuLm5hdmJhci1kZWZhdWx0IC5uYXYgPiBsaSA+IGEsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdiA+IGxpID4gYTpmb2N1czpob3ZlciB7XG4gIGNvbG9yOiAjMDhiO1xufVxuXG4ubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLW5hdiB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLm5hdmJhci1maXhlZC10b3AgLm5hdmJhci1icmFuZCB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLm5hdmJhci1oZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE2NywgMTU5LCAxNTkpO1xufVxuXG4jbmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLm5hdnRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ud2VsY29tZS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxuICAuZmEtc3RhY2sge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5mYS1jaXJjbGUge1xuICAgICAgY29sb3I6IGRhcmtlbigjMjIyLCAyMCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5mYS1jaXJjbGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmRpdk5hdkJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2hlYWRlciAuZGFzaGJvYXJkLWxvZ28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL0h5Z2llaWFfTG9nby5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuI2hlYWRlciAuZGFzaGJvYXJkLWxvZ28uZGFzaGJvYXJkLWxvZ28taW52ZXJzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvSHlnaWVpYV9Mb2dvLnBuZ1wiKTtcbn1cblxuaDQuZGFzaC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYS52aWV3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMDhiO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uYXZiYXItZGVmYXVsdCAubmF2ID4gbGkgPiBhLFxuLm5hdmJhci1kZWZhdWx0IC5uYXYgPiBsaSA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzA4Yjtcbn1cblxuLm5hdmJhci1kZWZhdWx0IC5uYXYgPiBsaSA+IGEsXG4ubmF2YmFyLWRlZmF1bHQgLm5hdiA+IGxpID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjMDhiO1xufVxuXG4ubmF2YmFyLWRlZmF1bHQgLm5hdiA+IGxpID4gYSxcbi5uYXZiYXItZGVmYXVsdCAubmF2ID4gbGkgPiBhOmZvY3VzOmhvdmVyIHtcbiAgY29sb3I6ICMwOGI7XG59XG5cbi5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItbmF2IHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubmF2YmFyLWZpeGVkLXRvcCAubmF2YmFyLWJyYW5kIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubmF2YmFyLWhlYWRlciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5hdmJhci1pbnZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogI2E3OWY5Zjtcbn1cblxuI25hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5uYXZ0ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ud2VsY29tZS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2VsY29tZS1oZWFkZXIgLmZhLXN0YWNrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndlbGNvbWUtaGVhZGVyIC5mYS1zdGFjayAuZmEtY2lyY2xlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwO1xufVxuLndlbGNvbWUtaGVhZGVyIC5mYS1zdGFjazpob3ZlciAuZmEtY2lyY2xlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/dasboard-navbar/dasboard-navbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/dasboard-navbar/dasboard-navbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: DasboardNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DasboardNavbarComponent", function() { return DasboardNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DasboardNavbarComponent = /** @class */ (function () {
    function DasboardNavbarComponent() {
        this.title = '';
    }
    DasboardNavbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DasboardNavbarComponent.prototype, "title", void 0);
    DasboardNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dasboard-navbar',
            template: __webpack_require__(/*! raw-loader!./dasboard-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/dasboard-navbar/dasboard-navbar.component.html"),
            styles: [__webpack_require__(/*! ./dasboard-navbar.component.scss */ "./src/app/core/dasboard-navbar/dasboard-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DasboardNavbarComponent);
    return DasboardNavbarComponent;
}());



/***/ }),

/***/ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard {\n  color: rgba(255, 255, 255, 0.8);\n  background-size: cover;\n}\n#dashboard h4 {\n  padding-bottom: 0.5em;\n  text-align: center;\n  color: lightgray;\n}\n#dashboard .dashboard-widgets {\n  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);\n}\n#dashboard .dashboard-widgets .alert {\n  text-shadow: none;\n}\n#dashboard .dashboard-widgets .popover,\n#dashboard .dashboard-widgets .tooltip,\n#dashboard .dashboard-widgets .dash-status-fail {\n  text-shadow: none;\n}\n#dashboard .widget.alert .widget-heading,\n#dashboard .widget.alert .environment-name,\n#dashboard .widget.alert .deploy-view td:not(.servers-up):not(:first-child):not(.servers-down) {\n  color: black;\n}\n#dashboard .dash-status-fail {\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);\n}\n#dashboard .pipeline-view .pipeline-environment-header span:before {\n  border-left-color: rgba(0, 0, 0, 0.75);\n}\n#dashboard .server-count {\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVuX21vZHVsZXMvdGVhbS1kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXcvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcc2NyZWVuX21vZHVsZXNcXHRlYW0tZGFzaGJvYXJkXFxkYXNoYm9hcmQtdmlld1xcZGFzaGJvYXJkLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NjcmVlbl9tb2R1bGVzL3RlYW0tZGFzaGJvYXJkL2Rhc2hib2FyZC12aWV3L0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxzdHlsZXNcXGNzc1xcZGFzaHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zY3JlZW5fbW9kdWxlcy90ZWFtLWRhc2hib2FyZC9kYXNoYm9hcmQtdmlldy9kYXNoYm9hcmQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLCtCQ2dCb0I7RURmcEIsc0JBQUE7QUVERjtBRkdFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FFREo7QUZJRTtFQUNFLHlDQUFBO0FFRko7QUZJSTtFQUNFLGlCQUFBO0FFRk47QUZNSTs7O0VBR0UsaUJBQUE7QUVKTjtBRmFJOzs7RUFHRSxZQUFBO0FFWE47QUZnQkU7RUFDRSw4Q0FBQTtBRWRKO0FGbUJFO0VBQ0Usc0NDckNhO0FDb0JqQjtBRm9CRTtFQUNFLFdBQUE7QUVsQkoiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5fbW9kdWxlcy90ZWFtLWRhc2hib2FyZC9kYXNoYm9hcmQtdmlldy9kYXNoYm9hcmQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9jc3MvZGFzaHZhcmlhYmxlcy5zY3NzJztcblxuI2Rhc2hib2FyZCB7XG4gIGNvbG9yOiAkZGFzaC1kYXNoYm9hcmQtdGV4dDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBoNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogbGlnaHRncmF5O1xuICB9XG5cbiAgLmRhc2hib2FyZC13aWRnZXRzIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcblxuICAgIC5hbGVydCB7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICAvLyBleGNlcHRpb25zXG4gICAgLnBvcG92ZXIsXG4gICAgLnRvb2x0aXAsXG4gICAgLmRhc2gtc3RhdHVzLWZhaWwge1xuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gb3ZlcnJpZGUgdGhlIGJhc2ljIGFsZXJ0IHN0YXRlIHZhbHVlc1xuICAud2lkZ2V0LmFsZXJ0IHtcbiAgICAkYmxhY2s6ICMwMDA7XG5cbiAgICAvLyAjZ3JhZGllbnQgPiBAaW5jbHVkZSB2ZXJ0aWNhbCgjZmZiMWFlLCAjZmZhMDljKTtcbiAgICAud2lkZ2V0LWhlYWRpbmcsXG4gICAgLmVudmlyb25tZW50LW5hbWUsXG4gICAgLmRlcGxveS12aWV3IHRkOm5vdCguc2VydmVycy11cCk6bm90KDpmaXJzdC1jaGlsZCk6bm90KC5zZXJ2ZXJzLWRvd24pIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgYSBoYWxvIGFyb3VuZCB0aGUgYWxlcnQgaWNvblxuICAuZGFzaC1zdGF0dXMtZmFpbCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICB9XG5cbiAgLy8gdGhlIHdpZGdldCB1c2VzICRkYXNoLWRhc2hib2FyZC1iZyB0byBzdHlsZSBiZXR3ZWVuIGhlYWRlciBhcnJvd3NcbiAgLy8gc28gb3ZlcnJpZGUgdGhlIHZhbHVlIHRvIHVzZSBhIGJsYWNrXG4gIC5waXBlbGluZS12aWV3IC5waXBlbGluZS1lbnZpcm9ubWVudC1oZWFkZXIgc3BhbjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYmctcmVwbGFjZW1lbnQ7XG4gIH1cblxuICAuc2VydmVyLWNvdW50IHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9cIjtcblxuXG4vLyBMT0NBTCBWQVJJQUJMRVMgRk9SIFRISVMgVEhFTUVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiR3aGl0ZTogI2ZmZjtcbiRjaGFydC1ncmVlbjogIzA1YWM0NTtcbiRjaGFydC1yZWQ6ICNkODUxNGQ7XG4kYmctcmVwbGFjZW1lbnQ6IHJnYmEoMCwgMCwgMCwgLjc1KTtcblxuJGRhc2gtaW1hZ2UtcGF0aDogXCJhc3NldHMvaW1nL1wiO1xuXG5cbi8vIERBU0ggVkFSSUFCTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4kZGFzaC10ZXh0OiAjMTUyMTMxO1xuJGRhc2gtZGFzaGJvYXJkLWJnOiAjMDYwNjEwO1xuJGRhc2gtZGFzaGJvYXJkLXRleHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuJGRhc2gtZGFzaGJvYXJkLXRleHQtaG92ZXI6ICR3aGl0ZTtcblxuJGRhc2gtZGFzaGJvYXJkLXRleHQtbGlnaHQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgLjcpO1xuXG4kZGFzaC1kaXZpZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41MCk7XG4kZGFzaC1kaXZpZGVyLWxpZ2h0OiByZ2JhKDAsIDAsIDAsIC4xKTtcbiRkYXNoLXdpZGdldC1zZWN0aW9uLWhpZ2hsaWdodDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xuXG4kZGFzaC1oZWFkZXItYmc6ICR3aGl0ZTtcbiRkYXNoLWhlYWRlci10ZXh0OiAkZGFzaC10ZXh0O1xuJGRhc2gtd2lkZ2V0LWhlYWRpbmctYm9yZGVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiRkYXNoLXdpZGdldC1zdWItaGVhZGluZy1ib3JkZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcblxuJGRhc2gtbW9kYWwtYmc6ICNlY2VjZWM7XG4kZGFzaC1tb2RhbC1oZWFkaW5nLXRleHQ6ICRkYXNoLXRleHQ7XG4kZGFzaC1tb2RhbC1oZWFkaW5nLWJvcmRlcjogcmdiYSgwLCAwLCAwLCAuMzUpO1xuJGRhc2gtbW9kYWwtZGl2aWRlcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuJGRhc2gtbW9kYWwtaWNvbi10ZXh0OiByZ2JhKDAsIDAsIDAsIC41KTtcblxuJGRhc2gtZGV0YWlsLWhlYWRpbmctdGV4dDogJGRhc2gtdGV4dDtcbiRkYXNoLWRldGFpbC1oZWFkaW5nLWJvcmRlcjogcmdiYSgwLCAwLCAwLCAuMzUpO1xuJGRhc2gtZGV0YWlsLWljb24tdGV4dDogcmdiYSgwLCAwLCAwLCAuNSk7XG4kZGFzaC1kZXRhaWwtZGl2aWRlcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xuXG4kZGFzaC13aWRnZXQtYWxlcnQtYmc6ICNmZjVkNTY7XG4kZGFzaC13aWRnZXQtYWxlcnQtdGV4dDogIzAwMDtcbiRkYXNoLXdpZGdldC1hbGVydC1oZWFkaW5nLWJvcmRlcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4kZGFzaC13aWRnZXQtcGFzczogcmdiKDAsIDI1NSwgMCk7XG4kZGFzaC13aWRnZXQtZmFpbDogcmdiKDI1NSwgMCwgMCk7XG5cbiRkYXNoLXN0YXR1cy1wYXNzOiByZ2IoMCwgMjA0LCA3NSk7XG4kZGFzaC1zdGF0dXMtd2FybjogcmdiKDI1NSwgMTg5LCA1Myk7XG4kZGFzaC1zdGF0dXMtZmFpbDogcmdiKDI1NSwgOTMsIDg2KTtcbiRkYXNoLXN0YXR1cy1mYWlsLWJvcmRlcjogIzAwMDtcbiRkYXNoLXN0YXR1cy1mYWlsLXRleHQ6ICMzMzM7XG4kZGFzaC1zdGF0dXMtaWdub3JlOiAkZ3JheS01MDA7XG4kZGFzaC1zdGF0dXMtaWdub3JlLWJvcmRlcjogZGFya2VuKCRkYXNoLXN0YXR1cy1pZ25vcmUsIDMwJSk7XG4kZGFzaC1zdGF0dXMtaWdub3JlLXRleHQ6IGNvbnRyYXN0KCRkYXNoLXN0YXR1cy1pZ25vcmUpO1xuXG4kZGFzaC1zdGF0dXMtYWxlcnQtcGFzczogIzAwYTMzYztcbiRkYXNoLXN0YXR1cy1hbGVydC1mYWlsOiAjY2M0YTQ1O1xuJGRhc2gtc3RhdHVzLWFsZXJ0LWlnbm9yZTogJGRhc2gtc3RhdHVzLWlnbm9yZTtcbiRkYXNoLXN0YXR1cy1hbGVydC13YXJuOiAkZGFzaC1zdGF0dXMtd2FybjtcblxuJGRhc2gtc3RhdGUtY29uZmlnLXRleHQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuJGRhc2gtc3RhdGUtY29uZmlnLXRleHQtaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuJGRhc2gtc3RhdGUtY29uZmlnLWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSk7XG4kZGFzaC1zdGF0ZS1jb25maWctYmctaG92ZXI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMwKTtcblxuJGN0LXNlcmllcy1jb2xvcnM6ICRjaGFydC1ncmVlbixcbiRjaGFydC1yZWQsXG4kZGFzaC1zdGF0dXMtd2FybixcbiR3aGl0ZTtcbiRkYXNoLWNoYXJ0LWFsdC1jb2xvcjogI2RmZmFmZjtcbiRkYXNoLWNoYXJ0LWFsdC1maWxsOiAjNjViN2M5O1xuJGRhc2gtY2hhcnQtaGFsby1jb2xvcjogJHdoaXRlO1xuJGRhc2gtY2hhcnQtYXJlYS1vcGFjaXR5OiAxO1xuJGRhc2gtY2hhcnQtcG9pbnQtc2l6ZTogNXB4O1xuJGRhc2gtY2hhcnQtZ3JpZDogJGRhc2gtZGl2aWRlcjtcblxuJHN0YXRlLWRhbmdlci10ZXh0OiAkZGFzaC1zdGF0dXMtYWxlcnQtZmFpbDtcbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICRkYXNoLXN0YXR1cy1hbGVydC1wYXNzO1xuXG5cbiRkYXNoLXRleHQtc3RhbmRhcmQtc2l6ZTogMS4xO1xuJGRhc2gtdGV4dC1zdGFuZGFyZC1saW5lLWhlaWdodDogMS4yO1xuXG4vLyB3aGVuIHdpZGdldCBpcyBpbiBhbGVydCBzdGF0ZVxuJGRhc2gtd2lkZ2V0LWFsZXJ0LWJnOiAkZGFuZ2VyO1xuJGRhc2gtd2lkZ2V0LWFsZXJ0LXRleHQ6ICNhOTQ0NDI7XG4kZGFzaC13aWRnZXQtYWxlcnQtaGVhZGluZy1ib3JkZXI6ICNhOTQ0NDI7XG5cbi8vIHdpZGdldCBzZXR0aW5nc1xuJGRhc2gtd2lkZ2V0LWJvcmRlci1yYWRpdXM6IC41ZW07XG4kZGFzaC13aWRnZXQtaGVhZGluZy10ZXh0OiAkZGFzaC1kYXNoYm9hcmQtdGV4dDtcblxuLy8gd2lkZ2V0IHdoZW4gaW4gY29uZmlndXJlIHN0YXRlXG4kZGFzaC1zdGF0ZS1jb25maWctYmc6ICRkYXNoLXdpZGdldC1zZWN0aW9uLWhpZ2hsaWdodDtcbi8vJGRhc2gtc3RhdGUtY29uZmlnLWJnLWhvdmVyOiAkZGFzaC1zdGF0ZS1jb25maWctYmc7XG4kZGFzaC1zdGF0ZS1jb25maWctdGV4dDogJGRhc2gtZGFzaGJvYXJkLXRleHQ7XG4kZGFzaC1zdGF0ZS1jb25maWctdGV4dC1ob3ZlcjogJGRhc2gtc3RhdGUtY29uZmlnLXRleHQ7XG4iLCIjZGFzaGJvYXJkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNkYXNoYm9hcmQgaDQge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbiNkYXNoYm9hcmQgLmRhc2hib2FyZC13aWRnZXRzIHtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4jZGFzaGJvYXJkIC5kYXNoYm9hcmQtd2lkZ2V0cyAuYWxlcnQge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbiNkYXNoYm9hcmQgLmRhc2hib2FyZC13aWRnZXRzIC5wb3BvdmVyLFxuI2Rhc2hib2FyZCAuZGFzaGJvYXJkLXdpZGdldHMgLnRvb2x0aXAsXG4jZGFzaGJvYXJkIC5kYXNoYm9hcmQtd2lkZ2V0cyAuZGFzaC1zdGF0dXMtZmFpbCB7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuI2Rhc2hib2FyZCAud2lkZ2V0LmFsZXJ0IC53aWRnZXQtaGVhZGluZyxcbiNkYXNoYm9hcmQgLndpZGdldC5hbGVydCAuZW52aXJvbm1lbnQtbmFtZSxcbiNkYXNoYm9hcmQgLndpZGdldC5hbGVydCAuZGVwbG95LXZpZXcgdGQ6bm90KC5zZXJ2ZXJzLXVwKTpub3QoOmZpcnN0LWNoaWxkKTpub3QoLnNlcnZlcnMtZG93bikge1xuICBjb2xvcjogYmxhY2s7XG59XG4jZGFzaGJvYXJkIC5kYXNoLXN0YXR1cy1mYWlsIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbiNkYXNoYm9hcmQgLnBpcGVsaW5lLXZpZXcgLnBpcGVsaW5lLWVudmlyb25tZW50LWhlYWRlciBzcGFuOmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuI2Rhc2hib2FyZCAuc2VydmVyLWNvdW50IHtcbiAgY29sb3I6ICM3Nzc7XG59Il19 */"

/***/ }),

/***/ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DashboardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardViewComponent", function() { return DashboardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var src_app_shared_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dashboard/dashboard.component */ "./src/app/shared/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_shared_templates_templates_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.directive */ "./src/app/shared/templates/templates.directive.ts");
/* harmony import */ var _capone_template_capone_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../capone-template/capone-template.component */ "./src/app/screen_modules/team-dashboard/capone-template/capone-template.component.ts");
/* harmony import */ var _dashboard_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-view */ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.ts");








var DashboardViewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DashboardViewComponent, _super);
    function DashboardViewComponent(componentFactoryResolver, cdr, route, dashboardService, router) {
        var _this = _super.call(this, componentFactoryResolver, cdr) || this;
        _this.route = route;
        _this.dashboardService = dashboardService;
        _this.router = router;
        _this.title = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        _this.dashboardTitle = '';
        _this.widgetsAll = _dashboard_view__WEBPACK_IMPORTED_MODULE_7__["widgetsAll"];
        return _this;
    }
    DashboardViewComponent.prototype.ngOnInit = function () {
        this.dashboardService.clearDashboard();
        this.dashboardId = this.route.snapshot.paramMap.get('id');
        this.loadDashboard(this.dashboardId);
        this.baseTemplate = _capone_template_capone_template_component__WEBPACK_IMPORTED_MODULE_6__["CaponeTemplateComponent"];
    };
    DashboardViewComponent.prototype.loadDashboard = function (dashboardId) {
        var _this = this;
        this.dashboardService.getDashboard(dashboardId)
            .subscribe(function (res) {
            _this.dashboardService.dashboardSubject.next(res);
            _this.dashboardService.loadDashboardAudits();
            _this.dashboardService.subscribeDashboardRefresh();
        }, function (err) { return _this.handleError(err); });
    };
    DashboardViewComponent.prototype.ngAfterViewInit = function () {
        this.loadWidgets();
    };
    DashboardViewComponent.prototype.loadWidgets = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.subscribe(function (dashboard) {
            _this.dashboardTitle = [dashboard.title, dashboard.configurationItemBusAppName, dashboard.configurationItemBusServName]
                .filter(Boolean).join(' - ');
            var activeWidgets = new Set();
            dashboard.widgets.forEach(function (widget) { return activeWidgets.add(widget.name); });
            if (dashboard.activeWidgets && dashboard.activeWidgets.length) {
                dashboard.activeWidgets.forEach(function (wName) { return activeWidgets.add(wName); });
            }
            var widgets = [];
            activeWidgets.forEach(function (widgetName) {
                var fWidget = _this.widgetsAll.find(function (widget) {
                    return widget.title.join().toLowerCase().replace(/\s/g, '').includes(widgetName);
                });
                if (fWidget) {
                    widgets.push(fWidget);
                }
            });
            _this.widgets = widgets;
            _super.prototype.loadComponent.call(_this, _this.childTemplateTag);
        });
    };
    DashboardViewComponent.prototype.openCollectorViewer = function () {
        this.router.navigate(['/collectorItem/viewer', { title: this.dashboardTitle.split('-')[0].trim() }]);
    };
    DashboardViewComponent.prototype.handleError = function (err) {
        if (err.status === 401) {
            this.router.navigate(['/user/login']);
        }
    };
    DashboardViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardViewComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_templates_templates_directive__WEBPACK_IMPORTED_MODULE_5__["TemplatesDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_templates_templates_directive__WEBPACK_IMPORTED_MODULE_5__["TemplatesDirective"])
    ], DashboardViewComponent.prototype, "childTemplateTag", void 0);
    DashboardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-view',
            template: __webpack_require__(/*! raw-loader!./dashboard-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-view.component.scss */ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardViewComponent);
    return DashboardViewComponent;
}(src_app_shared_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]));



/***/ }),

/***/ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.ts":
/*!********************************************************************************!*\
  !*** ./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.ts ***!
  \********************************************************************************/
/*! exports provided: widgetsAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widgetsAll", function() { return widgetsAll; });
/* harmony import */ var _widget_modules_feature_feature_widget_feature_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget_modules/feature/feature-widget/feature-widget.component */ "./src/app/widget_modules/feature/feature-widget/feature-widget.component.ts");
/* harmony import */ var _widget_modules_feature_feature_config_form_feature_config_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../widget_modules/feature/feature-config-form/feature-config-form.component */ "./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.ts");
/* harmony import */ var _widget_modules_feature_feature_delete_form_feature_delete_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../widget_modules/feature/feature-delete-form/feature-delete-form.component */ "./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.ts");
/* harmony import */ var _widget_modules_build_build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../widget_modules/build/build-widget/build-widget.component */ "./src/app/widget_modules/build/build-widget/build-widget.component.ts");
/* harmony import */ var _widget_modules_build_build_config_form_build_config_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../widget_modules/build/build-config-form/build-config-form.component */ "./src/app/widget_modules/build/build-config-form/build-config-form.component.ts");
/* harmony import */ var _widget_modules_build_build_delete_form_build_delete_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../widget_modules/build/build-delete-form/build-delete-form.component */ "./src/app/widget_modules/build/build-delete-form/build-delete-form.component.ts");
/* harmony import */ var _widget_modules_deploy_deploy_widget_deploy_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widget_modules/deploy/deploy-widget/deploy-widget.component */ "./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.ts");
/* harmony import */ var _widget_modules_deploy_deploy_config_form_deploy_config_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../widget_modules/deploy/deploy-config-form/deploy-config-form.component */ "./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.ts");
/* harmony import */ var _widget_modules_deploy_deploy_delete_form_deploy_delete_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widget_modules/deploy/deploy-delete-form/deploy-delete-form.component */ "./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.ts");
/* harmony import */ var _widget_modules_repo_repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../widget_modules/repo/repo-widget/repo-widget.component */ "./src/app/widget_modules/repo/repo-widget/repo-widget.component.ts");
/* harmony import */ var _widget_modules_repo_repo_config_form_repo_config_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../widget_modules/repo/repo-config-form/repo-config-form.component */ "./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.ts");
/* harmony import */ var _widget_modules_repo_repo_delete_form_repo_delete_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../widget_modules/repo/repo-delete-form/repo-delete-form.component */ "./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.ts");
/* harmony import */ var _widget_modules_static_analysis_static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component */ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.ts");
/* harmony import */ var _widget_modules_security_scan_security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../widget_modules/security-scan/security-scan-widget/security-scan-widget.component */ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.ts");
/* harmony import */ var _widget_modules_opensource_scan_oss_widget_oss_widget_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../widget_modules/opensource-scan/oss-widget/oss-widget.component */ "./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.ts");
/* harmony import */ var _widget_modules_test_test_widget_test_widget_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../widget_modules/test/test-widget/test-widget.component */ "./src/app/widget_modules/test/test-widget/test-widget.component.ts");
/* harmony import */ var _widget_modules_static_analysis_static_anaylsis_config_form_static_analysis_config_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component */ "./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.ts");
/* harmony import */ var _widget_modules_security_scan_security_scan_config_security_scan_config_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../widget_modules/security-scan/security-scan-config/security-scan-config.component */ "./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.ts");
/* harmony import */ var _widget_modules_opensource_scan_oss_config_form_oss_config_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../widget_modules/opensource-scan/oss-config-form/oss-config-form.component */ "./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.ts");
/* harmony import */ var _widget_modules_test_test_config_form_test_config_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../widget_modules/test/test-config-form/test-config-form.component */ "./src/app/widget_modules/test/test-config-form/test-config-form.component.ts");
/* harmony import */ var _widget_modules_static_analysis_static_analysis_delete_form_static_analysis_delete_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component */ "./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.ts");
/* harmony import */ var _widget_modules_security_scan_security_scan_delete_form_security_scan_delete_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component */ "./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.ts");
/* harmony import */ var _widget_modules_opensource_scan_oss_delete_form_oss_delete_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component */ "./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.ts");
/* harmony import */ var _widget_modules_test_test_delete_form_test_delete_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../widget_modules/test/test-delete-form/test-delete-form.component */ "./src/app/widget_modules/test/test-delete-form/test-delete-form.component.ts");












// tslint:disable-next-line:max-line-length




// tslint:disable-next-line:max-line-length




// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length



var widgetsAll = [
    {
        title: ['Feature'],
        component: [_widget_modules_feature_feature_widget_feature_widget_component__WEBPACK_IMPORTED_MODULE_0__["FeatureWidgetComponent"]],
        status: 'Success',
        widgetSize: 'col-xl-4',
        configForm: [_widget_modules_feature_feature_config_form_feature_config_form_component__WEBPACK_IMPORTED_MODULE_1__["FeatureConfigFormComponent"]],
        deleteForm: [_widget_modules_feature_feature_delete_form_feature_delete_form_component__WEBPACK_IMPORTED_MODULE_2__["FeatureDeleteFormComponent"]]
    },
    {
        title: ['Build'],
        component: [_widget_modules_build_build_widget_build_widget_component__WEBPACK_IMPORTED_MODULE_3__["BuildWidgetComponent"]],
        status: 'Success',
        widgetSize: 'col-xl-6',
        configForm: [_widget_modules_build_build_config_form_build_config_form_component__WEBPACK_IMPORTED_MODULE_4__["BuildConfigFormComponent"]],
        deleteForm: [_widget_modules_build_build_delete_form_build_delete_form_component__WEBPACK_IMPORTED_MODULE_5__["BuildDeleteFormComponent"]],
    },
    {
        title: ['Deploy'],
        component: [_widget_modules_deploy_deploy_widget_deploy_widget_component__WEBPACK_IMPORTED_MODULE_6__["DeployWidgetComponent"]],
        status: 'Success',
        widgetSize: 'col-xl-2',
        configForm: [_widget_modules_deploy_deploy_config_form_deploy_config_form_component__WEBPACK_IMPORTED_MODULE_7__["DeployConfigFormComponent"]],
        deleteForm: [_widget_modules_deploy_deploy_delete_form_deploy_delete_form_component__WEBPACK_IMPORTED_MODULE_8__["DeployDeleteFormComponent"]]
    },
    {
        title: ['Code Repo'],
        component: [_widget_modules_repo_repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_9__["RepoWidgetComponent"]],
        status: 'Success',
        widgetSize: 'col-xl-4',
        configForm: [_widget_modules_repo_repo_config_form_repo_config_form_component__WEBPACK_IMPORTED_MODULE_10__["RepoConfigFormComponent"]],
        deleteForm: [_widget_modules_repo_repo_delete_form_repo_delete_form_component__WEBPACK_IMPORTED_MODULE_11__["RepoDeleteFormComponent"]]
    },
    // Quality Widget
    {
        title: ['Static Code Analysis', 'Security Analysis', 'Open Source', 'Test'],
        component: [_widget_modules_static_analysis_static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_12__["StaticAnalysisWidgetComponent"], _widget_modules_security_scan_security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_13__["SecurityScanWidgetComponent"], _widget_modules_opensource_scan_oss_widget_oss_widget_component__WEBPACK_IMPORTED_MODULE_14__["OSSWidgetComponent"], _widget_modules_test_test_widget_test_widget_component__WEBPACK_IMPORTED_MODULE_15__["TestWidgetComponent"]],
        status: 'Success',
        widgetSize: 'col-xl-6',
        configForm: [_widget_modules_static_analysis_static_anaylsis_config_form_static_analysis_config_form_component__WEBPACK_IMPORTED_MODULE_16__["StaticAnalysisConfigFormComponent"], _widget_modules_security_scan_security_scan_config_security_scan_config_component__WEBPACK_IMPORTED_MODULE_17__["SecurityScanConfigComponent"], _widget_modules_opensource_scan_oss_config_form_oss_config_form_component__WEBPACK_IMPORTED_MODULE_18__["OSSConfigFormComponent"], _widget_modules_test_test_config_form_test_config_form_component__WEBPACK_IMPORTED_MODULE_19__["TestConfigFormComponent"]],
        deleteForm: [_widget_modules_static_analysis_static_analysis_delete_form_static_analysis_delete_form_component__WEBPACK_IMPORTED_MODULE_20__["StaticAnalysisDeleteFormComponent"], _widget_modules_security_scan_security_scan_delete_form_security_scan_delete_form_component__WEBPACK_IMPORTED_MODULE_21__["SecurityScanDeleteFormComponent"], _widget_modules_opensource_scan_oss_delete_form_oss_delete_form_component__WEBPACK_IMPORTED_MODULE_22__["OSSDeleteFormComponent"], _widget_modules_test_test_delete_form_test_delete_form_component__WEBPACK_IMPORTED_MODULE_23__["TestDeleteFormComponent"]]
    },
];


/***/ }),

/***/ "./src/app/screen_modules/team-dashboard/team-dashboard-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/screen_modules/team-dashboard/team-dashboard-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TeamDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDashboardRoutingModule", function() { return TeamDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-view/dashboard-view.component */ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.ts");




var routes = [
    { path: 'dashboard-view/:id', component: _dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_3__["DashboardViewComponent"] }
];
var TeamDashboardRoutingModule = /** @class */ (function () {
    function TeamDashboardRoutingModule() {
    }
    TeamDashboardRoutingModule.components = [_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_3__["DashboardViewComponent"]];
    TeamDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeamDashboardRoutingModule);
    return TeamDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/screen_modules/team-dashboard/team-dashboard.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/screen_modules/team-dashboard/team-dashboard.module.ts ***!
  \************************************************************************/
/*! exports provided: TeamDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDashboardModule", function() { return TeamDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-view/dashboard-view.component */ "./src/app/screen_modules/team-dashboard/dashboard-view/dashboard-view.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _team_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-dashboard-routing.module */ "./src/app/screen_modules/team-dashboard/team-dashboard-routing.module.ts");
/* harmony import */ var src_app_core_dasboard_navbar_dasboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/dasboard-navbar/dasboard-navbar.component */ "./src/app/core/dasboard-navbar/dasboard-navbar.component.ts");
/* harmony import */ var _widget_modules_security_scan_security_scan_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widget_modules/security-scan/security-scan.module */ "./src/app/widget_modules/security-scan/security-scan.module.ts");
/* harmony import */ var _widget_modules_static_analysis_static_analysis_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widget_modules/static-analysis/static-analysis.module */ "./src/app/widget_modules/static-analysis/static-analysis.module.ts");
/* harmony import */ var _widget_modules_opensource_scan_opensource_scan_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widget_modules/opensource-scan/opensource-scan.module */ "./src/app/widget_modules/opensource-scan/opensource-scan.module.ts");
/* harmony import */ var _widget_modules_test_test_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widget_modules/test/test.module */ "./src/app/widget_modules/test/test.module.ts");
/* harmony import */ var _widget_modules_build_build_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widget_modules/build/build.module */ "./src/app/widget_modules/build/build.module.ts");
/* harmony import */ var _widget_modules_repo_repo_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widget_modules/repo/repo.module */ "./src/app/widget_modules/repo/repo.module.ts");
/* harmony import */ var _widget_modules_deploy_deploy_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widget_modules/deploy/deploy.module */ "./src/app/widget_modules/deploy/deploy.module.ts");
/* harmony import */ var _widget_modules_feature_feature_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../widget_modules/feature/feature.module */ "./src/app/widget_modules/feature/feature.module.ts");














var TeamDashboardModule = /** @class */ (function () {
    function TeamDashboardModule() {
    }
    TeamDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_2__["DashboardViewComponent"],
                src_app_core_dasboard_navbar_dasboard_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DasboardNavbarComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _team_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["TeamDashboardRoutingModule"],
                _widget_modules_security_scan_security_scan_module__WEBPACK_IMPORTED_MODULE_6__["SecurityScanModule"],
                _widget_modules_static_analysis_static_analysis_module__WEBPACK_IMPORTED_MODULE_7__["StaticAnalysisModule"],
                _widget_modules_opensource_scan_opensource_scan_module__WEBPACK_IMPORTED_MODULE_8__["OpensourceScanModule"],
                _widget_modules_test_test_module__WEBPACK_IMPORTED_MODULE_9__["TestModule"],
                _widget_modules_build_build_module__WEBPACK_IMPORTED_MODULE_10__["BuildModule"],
                _widget_modules_repo_repo_module__WEBPACK_IMPORTED_MODULE_11__["RepoModule"],
                _widget_modules_deploy_deploy_module__WEBPACK_IMPORTED_MODULE_12__["DeployModule"],
                _widget_modules_feature_feature_module__WEBPACK_IMPORTED_MODULE_13__["FeatureModule"],
            ],
            entryComponents: []
        })
    ], TeamDashboardModule);
    return TeamDashboardModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZGVwbG95L2RlcGxveS1jb25maWctZm9ybS9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xcZGVwbG95XFxkZXBsb3ktY29uZmlnLWZvcm1cXGRlcGxveS1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZGVwbG95L2RlcGxveS1jb25maWctZm9ybS9kZXBsb3ktY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9kZXBsb3kvZGVwbG95LWNvbmZpZy1mb3JtL2RlcGxveS1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjaywgLnJlcXVpcmVkLXRleHQge1xuICBjb2xvcjpvcmFuZ2VyZWQ7XG59XG4iLCIubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeployConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployConfigFormComponent", function() { return DeployConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var DeployConfigFormComponent = /** @class */ (function () {
    function DeployConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.searching = false;
        this.searchFailed = false;
        this.getDeployJob = function (deployItem) {
            if (!deployItem) {
                return '';
            }
            var description = deployItem.description;
            return description;
        };
        this.createForm();
    }
    Object.defineProperty(DeployConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.deployConfigForm.get('deployRegex').setValue(widgetConfig.options.deployRegex);
            if (widgetConfig.options.deployAggregateServer) {
                this.deployConfigForm.get('deployAggregateServer').setValue(widgetConfig.options.deployAggregateServer);
            }
            else {
                this.deployConfigForm.get('deployAggregateServer').setValue(false);
            }
        },
        enumerable: true,
        configurable: true
    });
    DeployConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeAheadResults = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItemsBySearchField('Deployment', term, 'description').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (val) {
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
        this.loadSavedDeployJobs();
        this.getDashboardComponent();
    };
    DeployConfigFormComponent.prototype.createForm = function () {
        this.deployConfigForm = this.formBuilder.group({
            deployRegex: [''],
            deployJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deployAggregateServer: Boolean
        });
    };
    DeployConfigFormComponent.prototype.submitForm = function () {
        if (this.deployConfigForm.invalid) {
            return;
        }
        var newConfig = {
            name: 'deploy',
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'deploy0',
                deployRegex: this.deployConfigForm.value.deployRegex,
                deployAggregateServer: this.deployConfigForm.value.deployAggregateServer
            },
            componentId: this.componentId,
            collectorItemId: this.deployConfigForm.value.deployJob.id
        };
        this.activeModal.close(newConfig);
    };
    DeployConfigFormComponent.prototype.loadSavedDeployJobs = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var deployCollector = dashboard.application.components[0].collectorItems.Deployment;
            var savedCollectorDeploymentJob = deployCollector ? deployCollector[0].description : null;
            if (savedCollectorDeploymentJob) {
                var deployId = deployCollector[0].id;
                return deployId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (deployId) {
            if (deployId) {
                return _this.collectorService.getItemsById(deployId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.deployConfigForm.get('deployJob').setValue(collectorData);
        });
    };
    DeployConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(DeployConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.deployConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    DeployConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DeployConfigFormComponent.prototype, "widgetConfig", null);
    DeployConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deploy-config-form',
            template: __webpack_require__(/*! raw-loader!./deploy-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.html"),
            styles: [__webpack_require__(/*! ./deploy-config-form.component.scss */ "./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], DeployConfigFormComponent);
    return DeployConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2RlcGxveS9kZXBsb3ktZGVsZXRlLWZvcm0vZGVwbG95LWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeployDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployDeleteFormComponent", function() { return DeployDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var DeployDeleteFormComponent = /** @class */ (function () {
    function DeployDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This Deploy item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(DeployDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.deployDeleteForm.get('deployRegex').setValue(widgetConfig.options.deployRegex);
            if (widgetConfig.options.deployAggregateServer) {
                this.deployDeleteForm.get('deployAggregateServer').setValue(widgetConfig.options.deployAggregateServer);
            }
            else {
                this.deployDeleteForm.get('deployAggregateServer').setValue(false);
            }
        },
        enumerable: true,
        configurable: true
    });
    DeployDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedDeployJob();
        this.getDashboardComponent();
    };
    DeployDeleteFormComponent.prototype.createDeleteForm = function () {
        this.deployDeleteForm = this.formBuilder.group({
            deployRegex: [''],
            deployJob: [''],
            deployAggregateServer: Boolean
        });
    };
    DeployDeleteFormComponent.prototype.getSavedDeployJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var deployCollector = dashboard.application.components[0].collectorItems.Deployment;
            var savedCollectorDeploymentJob = deployCollector ? deployCollector[0].description : null;
            if (savedCollectorDeploymentJob) {
                var deployId = deployCollector[0].id;
                return deployId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (deployId) {
            if (deployId) {
                return _this.collectorService.getItemsById(deployId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.deployDeleteForm.get('deployJob').setValue(collectorData);
        });
    };
    DeployDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'deploy',
            options: {
                id: this.widgetConfigId,
                deployRegex: this.deployDeleteForm.value.deployRegex,
                deployAggregateServer: this.deployDeleteForm.value.deployAggregateServer
            },
            componentId: this.componentId,
            collectorItemId: this.deployDeleteForm.value.deployJob.id
        };
        this.activeModal.close(deleteConfig);
    };
    DeployDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    DeployDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeployDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DeployDeleteFormComponent.prototype, "widgetConfig", null);
    DeployDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deploy-delete-form',
            template: __webpack_require__(/*! raw-loader!./deploy-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./deploy-delete-form.component.scss */ "./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], DeployDeleteFormComponent);
    return DeployDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZGVwbG95L2RlcGxveS1kZXRhaWwvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcd2lkZ2V0X21vZHVsZXNcXGRlcGxveVxcZGVwbG95LWRldGFpbFxcZGVwbG95LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZGVwbG95L2RlcGxveS1kZXRhaWwvZGVwbG95LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZGVwbG95L2RlcGxveS1kZXRhaWwvZGVwbG95LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgcGFkZGluZzogMS41ZW07XG59XG4iLCIudGFibGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIHBhZGRpbmc6IDEuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeployDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployDetailComponent", function() { return DeployDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DeployDetailComponent = /** @class */ (function () {
    function DeployDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DeployDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(DeployDetailComponent.prototype, "detailData", {
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    DeployDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], DeployDetailComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DeployDetailComponent.prototype, "detailData", null);
    DeployDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deploy-detail',
            template: __webpack_require__(/*! raw-loader!./deploy-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.html"),
            styles: [__webpack_require__(/*! ./deploy-detail.component.scss */ "./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], DeployDetailComponent);
    return DeployDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-widget/deploy-charts.ts":
/*!**********************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-widget/deploy-charts.ts ***!
  \**********************************************************************/
/*! exports provided: DEPLOY_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPLOY_CHARTS", function() { return DEPLOY_CHARTS; });
/* harmony import */ var src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");

var DEPLOY_CHARTS = [
    {
        title: 'Last 10 Deployments',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
];


/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2RlcGxveS9kZXBsb3ktd2lkZ2V0L2RlcGxveS13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeployWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployWidgetComponent", function() { return DeployWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_widget_modules_deploy_deploy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/widget_modules/deploy/deploy.service */ "./src/app/widget_modules/deploy/deploy.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_widget_modules_deploy_deploy_widget_deploy_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/widget_modules/deploy/deploy-widget/deploy-charts */ "./src/app/widget_modules/deploy/deploy-widget/deploy-charts.ts");
/* harmony import */ var src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dash-status/DashStatus */ "./src/app/shared/dash-status/DashStatus.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var src_app_widget_modules_deploy_deploy_detail_deploy_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/widget_modules/deploy/deploy-detail/deploy-detail.component */ "./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.ts");
/* harmony import */ var src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var src_app_shared_layouts_one_chart_layout_one_chart_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/layouts/one-chart-layout/one-chart-layout.component */ "./src/app/shared/layouts/one-chart-layout/one-chart-layout.component.ts");
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");













var DeployWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeployWidgetComponent, _super);
    // tslint:disable-next-line:no-shadowed-variable
    function DeployWidgetComponent(ComponentFactoryResolver, cdr, dashboardService, deployService) {
        var _this = _super.call(this, ComponentFactoryResolver, cdr, dashboardService) || this;
        _this.deployService = deployService;
        return _this;
    }
    DeployWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'deploy0';
        this.layout = src_app_shared_layouts_one_chart_layout_one_chart_layout_component__WEBPACK_IMPORTED_MODULE_11__["OneChartLayoutComponent"];
        // Chart configuration moved to external file
        this.charts = src_app_widget_modules_deploy_deploy_widget_deploy_charts__WEBPACK_IMPORTED_MODULE_4__["DEPLOY_CHARTS"];
        this.auditType = 'DEPLOY';
        this.init();
    };
    // tslint:disable-next-line:use-lifecycle-interface
    DeployWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    DeployWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(-1), // Refresh this widget seperate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
            _this.widgetConfigExists = true;
            _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_12__["WidgetState"].READY;
            // this.TimeThreshold = 1000 * 60 * widgetConfig.options.deployDurationThreshold;
            return _this.deployService.fetchDetails(widgetConfig.componentId);
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
    DeployWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    DeployWidgetComponent.prototype.loadCharts = function (result) {
        this.generateLatestDeployData(result);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    DeployWidgetComponent.prototype.generateLatestDeployData = function (result) {
        var sorted = result.sort(function (a, b) {
            return a.units[0].lastUpdated - b.units[0].lastUpdated;
        }).reverse().slice(0, 10);
        var latestDeployData = sorted.map(function (deploy) {
            var deployStatusText = '';
            var regexText = '';
            var deployStatus = deploy.units[0].deployed ?
                src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_5__["DashStatus"].PASS : src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_5__["DashStatus"].FAIL;
            if (deployStatus === src_app_shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_5__["DashStatus"].FAIL) {
                deployStatusText = '!';
            }
            if (deploy.url) {
                regexText = deploy.url.match(new RegExp('^(https?:\/\/)?(?:www.)?([^\/]+)'))[0];
            }
            else {
                regexText = 'N/A';
                deploy.url = '';
            }
            return {
                status: deployStatus,
                statusText: deployStatusText,
                title: deploy.name,
                subtitles: [],
                url: deploy.url,
                version: deploy.units[0].version,
                name: deploy.units[0].name,
                lastUpdated: deploy.units[0].lastUpdated,
                regex: regexText
            };
        });
        this.charts[0].data = {
            items: latestDeployData,
            clickableContent: src_app_widget_modules_deploy_deploy_detail_deploy_detail_component__WEBPACK_IMPORTED_MODULE_7__["DeployDetailComponent"],
            clickableHeader: src_app_widget_modules_deploy_deploy_detail_deploy_detail_component__WEBPACK_IMPORTED_MODULE_7__["DeployDetailComponent"],
        };
    };
    DeployWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (!this.hasData) {
            this.charts[0].data = { items: [{ title: 'No Data Found' }] };
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    DeployWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"] },
        { type: src_app_widget_modules_deploy_deploy_service__WEBPACK_IMPORTED_MODULE_2__["DeployService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_10__["LayoutDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_10__["LayoutDirective"])
    ], DeployWidgetComponent.prototype, "childLayoutTag", void 0);
    DeployWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deploy-widget',
            template: __webpack_require__(/*! raw-loader!./deploy-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.html"),
            styles: [__webpack_require__(/*! ./deploy-widget.component.scss */ "./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"],
            src_app_widget_modules_deploy_deploy_service__WEBPACK_IMPORTED_MODULE_2__["DeployService"]])
    ], DeployWidgetComponent);
    return DeployWidgetComponent;
}(src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_8__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy.module.ts":
/*!********************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy.module.ts ***!
  \********************************************************/
/*! exports provided: DeployModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployModule", function() { return DeployModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _deploy_config_form_deploy_config_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deploy-config-form/deploy-config-form.component */ "./src/app/widget_modules/deploy/deploy-config-form/deploy-config-form.component.ts");
/* harmony import */ var _deploy_detail_deploy_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deploy-detail/deploy-detail.component */ "./src/app/widget_modules/deploy/deploy-detail/deploy-detail.component.ts");
/* harmony import */ var _deploy_widget_deploy_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deploy-widget/deploy-widget.component */ "./src/app/widget_modules/deploy/deploy-widget/deploy-widget.component.ts");
/* harmony import */ var _deploy_delete_form_deploy_delete_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deploy-delete-form/deploy-delete-form.component */ "./src/app/widget_modules/deploy/deploy-delete-form/deploy-delete-form.component.ts");









var DeployModule = /** @class */ (function () {
    function DeployModule() {
    }
    DeployModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_deploy_widget_deploy_widget_component__WEBPACK_IMPORTED_MODULE_7__["DeployWidgetComponent"], _deploy_config_form_deploy_config_form_component__WEBPACK_IMPORTED_MODULE_5__["DeployConfigFormComponent"], _deploy_detail_deploy_detail_component__WEBPACK_IMPORTED_MODULE_6__["DeployDetailComponent"], _deploy_delete_form_deploy_delete_form_component__WEBPACK_IMPORTED_MODULE_8__["DeployDeleteFormComponent"]],
            entryComponents: [_deploy_widget_deploy_widget_component__WEBPACK_IMPORTED_MODULE_7__["DeployWidgetComponent"], _deploy_config_form_deploy_config_form_component__WEBPACK_IMPORTED_MODULE_5__["DeployConfigFormComponent"], _deploy_detail_deploy_detail_component__WEBPACK_IMPORTED_MODULE_6__["DeployDetailComponent"], _deploy_delete_form_deploy_delete_form_component__WEBPACK_IMPORTED_MODULE_8__["DeployDeleteFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: []
        })
    ], DeployModule);
    return DeployModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/deploy/deploy.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/widget_modules/deploy/deploy.service.ts ***!
  \*********************************************************/
/*! exports provided: DeployService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeployService", function() { return DeployService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DeployService = /** @class */ (function () {
    function DeployService(http) {
        this.http = http;
        this.deployDetailRoute = '/api/deploy/status/';
    }
    DeployService.prototype.fetchDetails = function (componentId) {
        return this.http.get(this.deployDetailRoute + componentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.result; }));
    };
    DeployService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DeployService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeployService);
    return DeployService;
}());



/***/ }),

/***/ "./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  background-color: lightgray;\n  border: none;\n}\n\n.modal-header {\n  background-color: lightgray;\n  border: none;\n  color: white;\n}\n\n.model-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n  border: none;\n  justify-content: center;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZmVhdHVyZS9mZWF0dXJlLWNvbmZpZy1mb3JtL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXHdpZGdldF9tb2R1bGVzXFxmZWF0dXJlXFxmZWF0dXJlLWNvbmZpZy1mb3JtXFxmZWF0dXJlLWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9mZWF0dXJlL2ZlYXR1cmUtY29uZmlnLWZvcm0vZmVhdHVyZS1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZmVhdHVyZS9mZWF0dXJlLWNvbmZpZy1mb3JtL2ZlYXR1cmUtY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGVsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlcjogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrLCAucmVxdWlyZWQtdGV4dCB7XG4gIGNvbG9yOm9yYW5nZXJlZDtcbn1cbiIsIi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kZWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FeatureConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureConfigFormComponent", function() { return FeatureConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var FeatureConfigFormComponent = /** @class */ (function () {
    function FeatureConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.featureTool = [];
        this.estimateMetricType = [];
        this.sprintType = [];
        this.listType = [];
        this.submitted = false;
        this.searchingProject = false;
        this.searchingTeam = false;
        this.searchProjectFailed = false;
        this.searchTeamFailed = false;
        this.getProjectName = function (collectorItem) {
            if (!collectorItem) {
                return '';
            }
            var projectName = collectorItem.options.projectName;
            return projectName;
        };
        this.getTeamName = function (collectorItem) {
            if (!collectorItem) {
                return '';
            }
            var teamName = collectorItem.options.teamName;
            return teamName;
        };
        this.createForm();
    }
    Object.defineProperty(FeatureConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.featureConfigForm.get('featureTool').setValue(widgetConfig.options.featureTool);
            this.featureConfigForm.get('sprintType').setValue(widgetConfig.options.sprintType);
            this.featureConfigForm.get('listType').setValue(widgetConfig.options.listType);
            this.featureConfigForm.get('estimateMetricType').setValue(widgetConfig.options.estimateMetricType);
        },
        enumerable: true,
        configurable: true
    });
    FeatureConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeAheadResultsProject = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searchingProject = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItemsBySearchField('AgileTool', term, 'options.projectName').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchProjectFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                        }
                        _this.searchProjectFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                        _this.searchProjectFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searchingProject = false; }));
        };
        this.typeAheadResultsTeam = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searchingTeam = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItemsBySearchField('AgileTool', term, 'options.teamName').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchTeamFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                        }
                        _this.searchTeamFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                        _this.searchTeamFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searchingTeam = false; }));
        };
        this.loadSavedFeatures();
        this.getDashboardComponent();
    };
    FeatureConfigFormComponent.prototype.createForm = function () {
        this.featureConfigForm = this.formBuilder.group({
            featureTool: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            teamName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sprintType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            listType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estimateMetricType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getAgileTools();
        this.estimateMetricType = this.getEstimateMetricTypes();
        this.listType = this.getListTypes();
        this.sprintType = this.getSprintTypes();
    };
    FeatureConfigFormComponent.prototype.getAgileTools = function () {
        var _this = this;
        this.collectorService.collectorsByType('AgileTool').subscribe(function (agileCollectors) {
            var e_1, _a;
            var featureTools = agileCollectors.map(function (currAgileTool) { return currAgileTool.name; });
            var result = [];
            try {
                for (var featureTools_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](featureTools), featureTools_1_1 = featureTools_1.next(); !featureTools_1_1.done; featureTools_1_1 = featureTools_1.next()) {
                    var currTool = featureTools_1_1.value;
                    result.push({ type: currTool });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (featureTools_1_1 && !featureTools_1_1.done && (_a = featureTools_1.return)) _a.call(featureTools_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.featureTool = result;
        });
    };
    FeatureConfigFormComponent.prototype.submitForm = function () {
        this.submitted = true;
        if (this.featureConfigForm.invalid) {
            return;
        }
        var newConfig = {
            name: 'feature',
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'feature0',
                featureTool: this.featureConfigForm.value.featureTool,
                teamName: this.featureConfigForm.value.teamName.options.teamName,
                teamId: this.teamId,
                projectName: this.featureConfigForm.value.projectName.options.projectName,
                projectId: this.projectId,
                estimateMetricType: this.featureConfigForm.value.estimateMetricType,
                sprintType: this.featureConfigForm.value.sprintType,
                listType: this.featureConfigForm.value.listType,
            },
            componentId: this.componentId,
            collectorItemId: this.featureConfigForm.value.projectName.id
        };
        this.activeModal.close(newConfig);
    };
    FeatureConfigFormComponent.prototype.getEstimateMetricTypes = function () {
        return [
            { type: 'hours', value: 'Hours' },
            { type: 'storypoints', value: 'Story Points' },
            { type: 'count', value: 'Issue Count' }
        ];
    };
    FeatureConfigFormComponent.prototype.getListTypes = function () {
        return [{ type: 'epics', value: 'Epics' }, { type: 'issues', value: 'Issues' }];
    };
    FeatureConfigFormComponent.prototype.getSprintTypes = function () {
        return [{ type: 'scrum', value: 'Scrum' }, { type: 'kanban', value: 'Kanban' }, { type: 'scrumkanban', value: 'Both' }];
    };
    FeatureConfigFormComponent.prototype.loadSavedFeatures = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var featureCollector = dashboard.application.components[0].collectorItems.AgileTool;
            if (featureCollector[0].id) {
                var featureId = featureCollector[0].id;
                return featureId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (featureId) {
            if (featureId) {
                return _this.collectorService.getItemsById(featureId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.teamId = collectorData.options.teamId;
            _this.projectId = collectorData.options.projectId;
            _this.featureConfigForm.get('projectName').setValue(collectorData);
            _this.featureConfigForm.get('teamName').setValue(collectorData);
        });
    };
    FeatureConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(FeatureConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.featureConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    FeatureConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FeatureConfigFormComponent.prototype, "widgetConfig", null);
    FeatureConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-config-form',
            template: __webpack_require__(/*! raw-loader!./feature-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.html"),
            styles: [__webpack_require__(/*! ./feature-config-form.component.scss */ "./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], FeatureConfigFormComponent);
    return FeatureConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2ZlYXR1cmUvZmVhdHVyZS1kZWxldGUtZm9ybS9mZWF0dXJlLWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FeatureDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDeleteFormComponent", function() { return FeatureDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var FeatureDeleteFormComponent = /** @class */ (function () {
    function FeatureDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This feature item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(FeatureDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.featureDeleteForm.get('featureTool').setValue(widgetConfig.options.featureTool);
            this.featureDeleteForm.get('sprintType').setValue(widgetConfig.options.sprintType);
            this.featureDeleteForm.get('listType').setValue(widgetConfig.options.listType);
            this.featureDeleteForm.get('estimateMetricType').setValue(widgetConfig.options.estimateMetricType);
        },
        enumerable: true,
        configurable: true
    });
    FeatureDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedFeatures();
        this.getDashboardComponent();
    };
    FeatureDeleteFormComponent.prototype.createDeleteForm = function () {
        this.featureDeleteForm = this.formBuilder.group({
            featureTool: '',
            projectName: '',
            teamName: '',
            sprintType: '',
            listType: '',
            estimateMetricType: '',
        });
    };
    FeatureDeleteFormComponent.prototype.getSavedFeatures = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var featureCollector = dashboard.application.components[0].collectorItems.AgileTool;
            if (featureCollector[0].id) {
                var featureId = featureCollector[0].id;
                return featureId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (featureId) {
            if (featureId) {
                return _this.collectorService.getItemsById(featureId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.teamId = collectorData.options.teamId;
            _this.projectId = collectorData.options.projectId;
            _this.featureDeleteForm.get('projectName').setValue(collectorData);
            _this.featureDeleteForm.get('teamName').setValue(collectorData);
        });
    };
    FeatureDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'feature',
            options: {
                id: this.widgetConfigId,
                featureTool: this.featureDeleteForm.value.featureTool,
                teamName: this.featureDeleteForm.value.teamName.options.teamName,
                teamId: this.teamId,
                projectName: this.featureDeleteForm.value.projectName.options.projectName,
                projectId: this.projectId,
                estimateMetricType: this.featureDeleteForm.value.estimateMetricType,
                sprintType: this.featureDeleteForm.value.sprintType,
                listType: this.featureDeleteForm.value.listType,
            },
            componentId: this.componentId,
            collectorItemId: this.featureDeleteForm.value.projectName.id
        };
        this.activeModal.close(deleteConfig);
    };
    FeatureDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    FeatureDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeatureDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FeatureDeleteFormComponent.prototype, "widgetConfig", null);
    FeatureDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-delete-form',
            template: __webpack_require__(/*! raw-loader!./feature-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./feature-delete-form.component.scss */ "./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], FeatureDeleteFormComponent);
    return FeatureDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/feature/feature-detail/feature-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-detail/feature-detail.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvZmVhdHVyZS9mZWF0dXJlLWRldGFpbC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xcZmVhdHVyZVxcZmVhdHVyZS1kZXRhaWxcXGZlYXR1cmUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9mZWF0dXJlL2ZlYXR1cmUtZGV0YWlsL2ZlYXR1cmUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9mZWF0dXJlL2ZlYXR1cmUtZGV0YWlsL2ZlYXR1cmUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBwYWRkaW5nOiAxLjVlbTtcbn1cbiIsIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgcGFkZGluZzogMS41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/widget_modules/feature/feature-detail/feature-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-detail/feature-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FeatureDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDetailComponent", function() { return FeatureDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var FeatureDetailComponent = /** @class */ (function () {
    function FeatureDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    FeatureDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FeatureDetailComponent.prototype, "detailData", {
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    FeatureDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], FeatureDetailComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FeatureDetailComponent.prototype, "detailData", null);
    FeatureDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-detail',
            template: __webpack_require__(/*! raw-loader!./feature-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-detail/feature-detail.component.html"),
            styles: [__webpack_require__(/*! ./feature-detail.component.scss */ "./src/app/widget_modules/feature/feature-detail/feature-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], FeatureDetailComponent);
    return FeatureDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/feature/feature-widget/feature-charts.ts":
/*!*************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-widget/feature-charts.ts ***!
  \*************************************************************************/
/*! exports provided: FEATURE_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_CHARTS", function() { return FEATURE_CHARTS; });
/* harmony import */ var src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");
/* harmony import */ var _shared_charts_rotation_rotation_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/charts/rotation/rotation-chart.component */ "./src/app/shared/charts/rotation/rotation-chart.component.ts");


var FEATURE_CHARTS = [
    {
        title: 'Iteration Summary',
        component: _shared_charts_rotation_rotation_chart_component__WEBPACK_IMPORTED_MODULE_1__["RotationChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: 'Project Details',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    }
];


/***/ }),

/***/ "./src/app/widget_modules/feature/feature-widget/feature-widget.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-widget/feature-widget.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL2ZlYXR1cmUvZmVhdHVyZS13aWRnZXQvZmVhdHVyZS13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/feature/feature-widget/feature-widget.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/widget_modules/feature/feature-widget/feature-widget.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FeatureWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureWidgetComponent", function() { return FeatureWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feature.service */ "./src/app/widget_modules/feature/feature.service.ts");
/* harmony import */ var _feature_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature-charts */ "./src/app/widget_modules/feature/feature-widget/feature-charts.ts");
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");
/* harmony import */ var _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../feature-detail/feature-detail.component */ "./src/app/widget_modules/feature/feature-detail/feature-detail.component.ts");
/* harmony import */ var _shared_layouts_two_by_one_layout_two_by_one_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/layouts/two-by-one-layout/two-by-one-layout.component */ "./src/app/shared/layouts/two-by-one-layout/two-by-one-layout.component.ts");












var FeatureWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeatureWidgetComponent, _super);
    function FeatureWidgetComponent(componentFactoryResolver, cdr, dashboardService, featureService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.featureService = featureService;
        _this.backlog = [];
        _this.inProg = [];
        _this.done = [];
        return _this;
    }
    // Initialize the widget and set layout and charts.
    FeatureWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'feature0';
        this.layout = _shared_layouts_two_by_one_layout_two_by_one_layout_component__WEBPACK_IMPORTED_MODULE_11__["TwoByOneLayoutComponent"];
        // Chart configuration moved to external file
        this.charts = _feature_charts__WEBPACK_IMPORTED_MODULE_8__["FEATURE_CHARTS"];
        this.auditType = '';
        this.init();
    };
    // After the view is ready start the refresh interval.
    FeatureWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    FeatureWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    // Start a subscription to the widget configuration for this widget and refresh the graphs each
    // cycle.
    FeatureWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(-1), // Refresh this widget seperate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            _this.widgetConfigExists = true;
            _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_9__["WidgetState"].READY;
            _this.params = {
                id: widgetConfig.options.id,
                featureTool: widgetConfig.options.featureTool,
                teamName: widgetConfig.options.teamName,
                projectName: widgetConfig.options.projectName,
                component: widgetConfig.componentId,
                teamId: widgetConfig.options.teamId,
                projectId: widgetConfig.options.projectId,
                sprintType: widgetConfig.options.sprintType,
                listType: widgetConfig.options.listType,
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(_this.featureService.fetchFeatureWip(_this.params.component, _this.params.teamId, _this.params.projectId, 'scrum').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.featureService.fetchFeatureWip(_this.params.component, _this.params.teamId, _this.params.projectId, 'kanban').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.featureService.fetchAggregateSprintEstimates(_this.params.component, _this.params.teamId, _this.params.projectId, 'scrum').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.featureService.fetchAggregateSprintEstimates(_this.params.component, _this.params.teamId, _this.params.projectId, 'kanban').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.featureService.fetchIterations(_this.params.component, _this.params.teamId, _this.params.projectId, 'scrum').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.featureService.fetchIterations(_this.params.component, _this.params.teamId, _this.params.projectId, 'kanban').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })));
        })).subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 6), wipScrum = _b[0], wipKanban = _b[1], estimatesScrum = _b[2], estimatesKanban = _b[3], iterationsScrum = _b[4], iterationsKanban = _b[5];
            _this.loadCharts([wipScrum, wipKanban], [estimatesScrum, estimatesKanban], [iterationsScrum, iterationsKanban]);
        });
    };
    FeatureWidgetComponent.prototype.loadCharts = function (wipArray, estimatesArray, iterationsArray) {
        if (this.params.listType === 'epics') {
            this.generateFeatureSummary(wipArray, this.params);
        }
        else {
            this.generateFeatureSummary(iterationsArray, this.params);
        }
        this.generateIterationSummary(estimatesArray);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    // Unsubscribe from the widget refresh observable, which stops widget updating.
    FeatureWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    // ********************** FEATURE SUMMARY ***************************
    FeatureWidgetComponent.prototype.generateFeatureSummary = function (content, params) {
        var _this = this;
        if (!content) {
            return;
        }
        var items = [
            {
                status: null,
                statusText: '',
                title: 'Feature Tool',
                subtitles: [params.featureTool],
            },
            {
                status: null,
                statusText: '',
                title: 'Project Name',
                subtitles: [typeof (params.projectName) === 'string' ? params.projectName : params.projectName.options.projectName],
            },
            {
                status: null,
                statusText: '',
                title: 'Team Name',
                subtitles: [typeof (params.teamName) === 'string' ? params.teamName : params.teamName.options.teamName],
            },
        ];
        if (params.listType === 'issues') {
            content.forEach(function (currSprintType) {
                _this.backlog.push(currSprintType.filter(function (curr) { return curr.sStatus === 'Backlog'; }).length);
                _this.inProg.push(currSprintType.filter(function (curr) { return curr.sStatus === 'In Progress'; }).length);
                _this.done.push(currSprintType.filter(function (curr) { return curr.sStatus === 'Done'; }).length);
            });
        }
        this.featureWip = this.processFeatureWipResponse(content, params.listType);
        this.charts[1].data = {
            items: items,
            clickableContent: null,
            clickableHeader: null
        };
    };
    // *********************** ITERATION SUMMARY ************************
    // Displays Sprint information for Open, WIP, Done
    FeatureWidgetComponent.prototype.generateIterationSummary = function (result) {
        var scrumItems;
        var kanbanItems;
        if (!result) {
            return;
        }
        scrumItems = [
            {
                agileType: this.params.sprintType,
                type: 'Scrum',
                title: 'OPEN',
                subtitles: [result[0].openEstimate],
                status: [{ Backlog: this.backlog[0], 'In Progress': this.inProg[0], Done: this.done[0] }],
                rotationData: this.featureWip[0]
            },
            {
                agileType: this.params.sprintType,
                type: 'Scrum',
                title: 'WIP',
                subtitles: [result[0].inProgressEstimate],
                rotationData: this.featureWip[0],
            },
            {
                agileType: this.params.sprintType,
                type: 'Scrum',
                title: 'DONE',
                subtitles: [result[0].completeEstimate],
                rotationData: this.featureWip[0],
            },
        ];
        kanbanItems = [
            {
                agileType: this.params.sprintType,
                type: 'Kanban',
                title: 'OPEN',
                subtitles: [result[1].openEstimate],
                status: [{ Backlog: this.backlog[1], 'In Progress': this.inProg[1], Done: this.done[1] }],
                rotationData: this.featureWip[1]
            },
            {
                agileType: this.params.sprintType,
                type: 'Kanban',
                title: 'WIP',
                subtitles: [result[1].inProgressEstimate],
                rotationData: this.featureWip[1],
            }
        ];
        if (this.params.sprintType === 'scrumkanban') {
            this.charts[0].data = {
                items: [scrumItems, kanbanItems],
                clickableContent: _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_10__["FeatureDetailComponent"],
                clickableHeader: null
            };
        }
        else if (this.params.sprintType === 'scrum') {
            this.charts[0].data = {
                items: [scrumItems],
                clickableContent: _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_10__["FeatureDetailComponent"],
                clickableHeader: null
            };
        }
        else {
            this.charts[0].data = {
                items: [kanbanItems],
                clickableContent: _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_10__["FeatureDetailComponent"],
                clickableHeader: null
            };
        }
    };
    // **************************** EPICS/ISSUES *******************************
    FeatureWidgetComponent.prototype.processFeatureWipResponse = function (data, issueOrEpic) {
        var items = [this.issueOrEpicBreakdown(data[0], issueOrEpic), this.issueOrEpicBreakdown(data[1], issueOrEpic)];
        return items;
    };
    FeatureWidgetComponent.prototype.issueOrEpicBreakdown = function (issueOrEpicCollection, issueOrEpic) {
        if (issueOrEpic === 'issues') {
            issueOrEpicCollection = issueOrEpicCollection.sort(function (a, b) {
                return a.changeDate > b.changeDate ? 1 : -1;
            }).reverse().slice(0, 10);
        }
        return issueOrEpicCollection.map(function (curr) {
            if (issueOrEpic === 'epics') {
                return {
                    title: curr.sEpicName,
                    name: curr.sEpicName,
                    url: curr.sEpicUrl,
                    number: curr.sEpicNumber,
                    progressStatus: 'N/A',
                    type: 'Epic',
                    date: 'N/A',
                    time: curr.sEstimate
                };
            }
            else {
                var regexText = curr.changeDate.match(new RegExp('^([^T]*);*'))[0];
                return {
                    title: curr.sName,
                    name: curr.sName,
                    url: curr.sUrl,
                    number: curr.sNumber,
                    progressStatus: curr.sStatus,
                    type: 'Issue',
                    date: regexText,
                    time: curr.sEstimateTime
                };
            }
        });
    };
    FeatureWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: _feature_service__WEBPACK_IMPORTED_MODULE_7__["FeatureService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"])
    ], FeatureWidgetComponent.prototype, "childLayoutTag", void 0);
    FeatureWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-widget',
            template: __webpack_require__(/*! raw-loader!./feature-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/feature/feature-widget/feature-widget.component.html"),
            styles: [__webpack_require__(/*! ./feature-widget.component.scss */ "./src/app/widget_modules/feature/feature-widget/feature-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _feature_service__WEBPACK_IMPORTED_MODULE_7__["FeatureService"]])
    ], FeatureWidgetComponent);
    return FeatureWidgetComponent;
}(src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_6__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/feature/feature.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/widget_modules/feature/feature.module.ts ***!
  \**********************************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _feature_widget_feature_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-widget/feature-widget.component */ "./src/app/widget_modules/feature/feature-widget/feature-widget.component.ts");
/* harmony import */ var _feature_config_form_feature_config_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-config-form/feature-config-form.component */ "./src/app/widget_modules/feature/feature-config-form/feature-config-form.component.ts");
/* harmony import */ var _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature-detail/feature-detail.component */ "./src/app/widget_modules/feature/feature-detail/feature-detail.component.ts");
/* harmony import */ var _feature_delete_form_feature_delete_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feature-delete-form/feature-delete-form.component */ "./src/app/widget_modules/feature/feature-delete-form/feature-delete-form.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_feature_widget_feature_widget_component__WEBPACK_IMPORTED_MODULE_3__["FeatureWidgetComponent"], _feature_config_form_feature_config_form_component__WEBPACK_IMPORTED_MODULE_4__["FeatureConfigFormComponent"], _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_5__["FeatureDetailComponent"], _feature_delete_form_feature_delete_form_component__WEBPACK_IMPORTED_MODULE_6__["FeatureDeleteFormComponent"]],
            entryComponents: [_feature_widget_feature_widget_component__WEBPACK_IMPORTED_MODULE_3__["FeatureWidgetComponent"], _feature_config_form_feature_config_form_component__WEBPACK_IMPORTED_MODULE_4__["FeatureConfigFormComponent"], _feature_detail_feature_detail_component__WEBPACK_IMPORTED_MODULE_5__["FeatureDetailComponent"], _feature_delete_form_feature_delete_form_component__WEBPACK_IMPORTED_MODULE_6__["FeatureDeleteFormComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"]
            ]
        })
    ], FeatureModule);
    return FeatureModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/feature/feature.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/widget_modules/feature/feature.service.ts ***!
  \***********************************************************/
/*! exports provided: FeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return FeatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FeatureService = /** @class */ (function () {
    function FeatureService(http) {
        this.http = http;
        this.featureAggregateSprintEstimates = '/api/feature/estimates/aggregatedsprints/';
        this.featureWip = '/api/feature/estimates/super/';
        this.featureIterations = '/api/iteration';
    }
    FeatureService.prototype.fetchAggregateSprintEstimates = function (component, teamId, projectId, agileType) {
        var params = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('component', component).set('teamId', teamId).set('projectId', projectId).set('agileType', agileType)
        };
        return this.http.get(this.featureAggregateSprintEstimates, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    FeatureService.prototype.fetchFeatureWip = function (component, teamId, projectId, agileType) {
        var params = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('component', component).set('teamId', teamId).set('projectId', projectId).set('agileType', agileType)
        };
        return this.http.get(this.featureWip, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    FeatureService.prototype.fetchIterations = function (component, teamId, projectId, agileType) {
        var params = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('component', component).set('teamId', teamId).set('projectId', projectId).set('agileType', agileType)
        };
        return this.http.get(this.featureIterations, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    FeatureService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FeatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FeatureService);
    return FeatureService;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/opensource-scan.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/opensource-scan.module.ts ***!
  \**************************************************************************/
/*! exports provided: OpensourceScanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpensourceScanModule", function() { return OpensourceScanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _oss_widget_oss_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oss-widget/oss-widget.component */ "./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.ts");
/* harmony import */ var _oss_detail_oss_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oss-detail/oss-detail.component */ "./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.ts");
/* harmony import */ var _oss_config_form_oss_config_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oss-config-form/oss-config-form.component */ "./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _oss_detail_all_oss_detail_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oss-detail-all/oss-detail-all.component */ "./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.ts");
/* harmony import */ var _oss_delete_form_oss_delete_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oss-delete-form/oss-delete-form.component */ "./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.ts");










var OpensourceScanModule = /** @class */ (function () {
    function OpensourceScanModule() {
    }
    OpensourceScanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_oss_widget_oss_widget_component__WEBPACK_IMPORTED_MODULE_3__["OSSWidgetComponent"], _oss_detail_oss_detail_component__WEBPACK_IMPORTED_MODULE_4__["OSSDetailComponent"], _oss_config_form_oss_config_form_component__WEBPACK_IMPORTED_MODULE_5__["OSSConfigFormComponent"], _oss_detail_all_oss_detail_all_component__WEBPACK_IMPORTED_MODULE_8__["OSSDetailAllComponent"], _oss_delete_form_oss_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["OSSDeleteFormComponent"]],
            entryComponents: [_oss_widget_oss_widget_component__WEBPACK_IMPORTED_MODULE_3__["OSSWidgetComponent"], _oss_detail_oss_detail_component__WEBPACK_IMPORTED_MODULE_4__["OSSDetailComponent"], _oss_config_form_oss_config_form_component__WEBPACK_IMPORTED_MODULE_5__["OSSConfigFormComponent"], _oss_detail_all_oss_detail_all_component__WEBPACK_IMPORTED_MODULE_8__["OSSDetailAllComponent"], _oss_delete_form_oss_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["OSSDeleteFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
        })
    ], OpensourceScanModule);
    return OpensourceScanModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/opensource-scan.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/opensource-scan.service.ts ***!
  \***************************************************************************/
/*! exports provided: OpensourceScanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpensourceScanService", function() { return OpensourceScanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var OpensourceScanService = /** @class */ (function () {
    function OpensourceScanService(http) {
        this.http = http;
        this.detailRoute = '/api/libraryPolicy/';
    }
    OpensourceScanService.prototype.fetchDetails = function (componentId, maxCnt) {
        var params = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('componentId', componentId).set('max', maxCnt.toFixed(0))
        };
        return this.http.get(this.detailRoute, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    OpensourceScanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OpensourceScanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OpensourceScanService);
    return OpensourceScanService;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1jb25maWctZm9ybS9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xcb3BlbnNvdXJjZS1zY2FuXFxvc3MtY29uZmlnLWZvcm1cXG9zcy1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1jb25maWctZm9ybS9vc3MtY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9vcGVuc291cmNlLXNjYW4vb3NzLWNvbmZpZy1mb3JtL29zcy1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjaywgLnJlcXVpcmVkLXRleHQge1xuICBjb2xvcjpvcmFuZ2VyZWQ7XG59XG4iLCIubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OSSConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSConfigFormComponent", function() { return OSSConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var _shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var OSSConfigFormComponent = /** @class */ (function () {
    function OSSConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.searching = false;
        this.searchFailed = false;
        this.getOssTitle = function (collectorItem) {
            if (!collectorItem) {
                return '';
            }
            var description = collectorItem.description;
            return description;
        };
        this.createForm();
    }
    Object.defineProperty(OSSConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.ossConfigForm.get('ossJob').setValue(widgetConfig.collectorItemId);
        },
        enumerable: true,
        configurable: true
    });
    OSSConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeAheadResults = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]) :
                    _this.collectorService.searchItems('LibraryPolicy', term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                        }
                        _this.searchFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
                        _this.searchFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.searching = false; }));
        };
        this.loadSavedOssJob();
        this.getDashboardComponent();
    };
    OSSConfigFormComponent.prototype.createForm = function () {
        this.ossConfigForm = this.formBuilder.group({
            ossJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    OSSConfigFormComponent.prototype.submitForm = function () {
        var newConfig = {
            name: 'codeanalysis',
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'codeanalysis0',
            },
            componentId: this.componentId,
            collectorItemId: this.ossConfigForm.value.ossJob.id
        };
        this.activeModal.close(newConfig);
    };
    OSSConfigFormComponent.prototype.loadSavedOssJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dashboard) {
            var ossCollector = dashboard.application.components[0].collectorItems.LibraryPolicy;
            var savedCollectorOSS = ossCollector ? ossCollector[0].description : null;
            if (savedCollectorOSS) {
                var ossId = ossCollector[0].id;
                return ossId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (ossId) {
            if (ossId) {
                return _this.collectorService.getItemsById(ossId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.ossConfigForm.get('ossJob').setValue(collectorData);
        });
    };
    OSSConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(OSSConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.ossConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    OSSConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], OSSConfigFormComponent.prototype, "widgetConfig", null);
    OSSConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-config-form',
            template: __webpack_require__(/*! raw-loader!./oss-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.html"),
            styles: [__webpack_require__(/*! ./oss-config-form.component.scss */ "./src/app/widget_modules/opensource-scan/oss-config-form/oss-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]])
    ], OSSConfigFormComponent);
    return OSSConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL29wZW5zb3VyY2Utc2Nhbi9vc3MtZGVsZXRlLWZvcm0vb3NzLWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OSSDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSDeleteFormComponent", function() { return OSSDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var OSSDeleteFormComponent = /** @class */ (function () {
    function OSSDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This OSS item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(OSSDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.ossDeleteForm.get('ossJob').setValue(widgetConfig.collectorItemId);
        },
        enumerable: true,
        configurable: true
    });
    OSSDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedOSSJob();
        this.getDashboardComponent();
    };
    OSSDeleteFormComponent.prototype.createDeleteForm = function () {
        this.ossDeleteForm = this.formBuilder.group({
            ossJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    OSSDeleteFormComponent.prototype.getSavedOSSJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var ossCollector = dashboard.application.components[0].collectorItems.LibraryPolicy;
            var savedCollectorOSS = ossCollector ? ossCollector[0].description : null;
            if (savedCollectorOSS) {
                var ossId = ossCollector[0].id;
                return ossId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (ossId) {
            if (ossId) {
                return _this.collectorService.getItemsById(ossId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.ossDeleteForm.get('ossJob').setValue(collectorData);
        });
    };
    OSSDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'codeanalysis',
            options: {
                id: this.widgetConfigId,
            },
            componentId: this.componentId,
            collectorItemId: this.ossDeleteForm.value.ossJob.id
        };
        this.activeModal.close(deleteConfig);
    };
    OSSDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    OSSDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OSSDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], OSSDeleteFormComponent.prototype, "widgetConfig", null);
    OSSDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-delete-form',
            template: __webpack_require__(/*! raw-loader!./oss-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./oss-delete-form.component.scss */ "./src/app/widget_modules/opensource-scan/oss-delete-form/oss-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], OSSDeleteFormComponent);
    return OSSDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1kZXRhaWwtYWxsL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXHdpZGdldF9tb2R1bGVzXFxvcGVuc291cmNlLXNjYW5cXG9zcy1kZXRhaWwtYWxsXFxvc3MtZGV0YWlsLWFsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1kZXRhaWwtYWxsL29zcy1kZXRhaWwtYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9vcGVuc291cmNlLXNjYW4vb3NzLWRldGFpbC1hbGwvb3NzLWRldGFpbC1hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuIiwiLnRhYmxlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBwYWRkaW5nOiAxLjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OSSDetailAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSDetailAllComponent", function() { return OSSDetailAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var OSSDetailAllComponent = /** @class */ (function () {
    function OSSDetailAllComponent(activeModal) {
        this.activeModal = activeModal;
    }
    OSSDetailAllComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(OSSDetailAllComponent.prototype, "detailData", {
        set: function (data) {
            if (data) {
                this.data = data.items;
            }
            else {
                this.data = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    OSSDetailAllComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], OSSDetailAllComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], OSSDetailAllComponent.prototype, "detailData", null);
    OSSDetailAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-detail-all',
            template: __webpack_require__(/*! raw-loader!./oss-detail-all.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.html"),
            styles: [__webpack_require__(/*! ./oss-detail-all.component.scss */ "./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], OSSDetailAllComponent);
    return OSSDetailAllComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1kZXRhaWwvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcd2lkZ2V0X21vZHVsZXNcXG9wZW5zb3VyY2Utc2Nhblxcb3NzLWRldGFpbFxcb3NzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1kZXRhaWwvb3NzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvb3BlbnNvdXJjZS1zY2FuL29zcy1kZXRhaWwvb3NzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgcGFkZGluZzogMS41ZW07XG59XG4iLCIudGFibGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIHBhZGRpbmc6IDEuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OSSDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSDetailComponent", function() { return OSSDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var OSSDetailComponent = /** @class */ (function () {
    function OSSDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    OSSDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(OSSDetailComponent.prototype, "detailData", {
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    OSSDetailComponent.prototype.toDate = function (lastUpdated) {
        return new Date(lastUpdated).toDateString();
    };
    OSSDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], OSSDetailComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], OSSDetailComponent.prototype, "detailData", null);
    OSSDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-detail',
            template: __webpack_require__(/*! raw-loader!./oss-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.html"),
            styles: [__webpack_require__(/*! ./oss-detail.component.scss */ "./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], OSSDetailComponent);
    return OSSDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-widget/oss-charts.ts":
/*!*************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-widget/oss-charts.ts ***!
  \*************************************************************************/
/*! exports provided: OSS_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSS_CHARTS", function() { return OSS_CHARTS; });
/* harmony import */ var src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");

var OSS_CHARTS = [
    {
        title: 'License',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: 'Security',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    }
];


/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL29wZW5zb3VyY2Utc2Nhbi9vc3Mtd2lkZ2V0L29zcy13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OSSWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSSWidgetComponent", function() { return OSSWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var _opensource_scan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../opensource-scan.service */ "./src/app/widget_modules/opensource-scan/opensource-scan.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var _oss_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oss-charts */ "./src/app/widget_modules/opensource-scan/oss-widget/oss-charts.ts");
/* harmony import */ var _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/dash-status/DashStatus */ "./src/app/shared/dash-status/DashStatus.ts");
/* harmony import */ var _oss_detail_oss_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../oss-detail/oss-detail.component */ "./src/app/widget_modules/opensource-scan/oss-detail/oss-detail.component.ts");
/* harmony import */ var _shared_layouts_two_by_one_layout_two_by_one_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/layouts/two-by-one-layout/two-by-one-layout.component */ "./src/app/shared/layouts/two-by-one-layout/two-by-one-layout.component.ts");
/* harmony import */ var _oss_detail_all_oss_detail_all_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../oss-detail-all/oss-detail-all.component */ "./src/app/widget_modules/opensource-scan/oss-detail-all/oss-detail-all.component.ts");
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");














var OSSWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OSSWidgetComponent, _super);
    function OSSWidgetComponent(componentFactoryResolver, cdr, dashboardService, ossService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.ossService = ossService;
        _this.OSS_MAX_CNT = 1;
        return _this;
    }
    OSSWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'codeanalysis0';
        this.layout = _shared_layouts_two_by_one_layout_two_by_one_layout_component__WEBPACK_IMPORTED_MODULE_11__["TwoByOneLayoutComponent"];
        this.charts = _oss_charts__WEBPACK_IMPORTED_MODULE_8__["OSS_CHARTS"];
        this.auditType = 'LIBRARY_POLICY';
        this.init();
    };
    // After the view is ready start the refresh interval.
    OSSWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    OSSWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    // Start a subscription to the widget configuration for this widget
    // and refresh the charts
    OSSWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(-1), // Refresh this widget seperate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                _this.widgetConfigExists = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])([]);
            }
            _this.widgetConfigExists = true;
            // check if collector item type is tied to dashboard
            // if true, set state to READY, otherwise keep at default CONFIGURE
            if (_this.dashboardService.checkCollectorItemTypeExist('LibraryPolicy')) {
                _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_13__["WidgetState"].READY;
            }
            return _this.ossService.fetchDetails(widgetConfig.componentId, _this.OSS_MAX_CNT);
        })).subscribe(function (result) {
            _this.hasData = result && result.length > 0;
            if (_this.hasData) {
                _this.loadCharts(result[0]);
            }
            else {
                _this.setDefaultIfNoData();
            }
        });
        // for quality widget, subscribe to updates from other quality components
        this.dashboardService.dashboardQualityConfig$.subscribe(function (result) {
            if (result) {
                _this.widgetConfigSubject.next(result);
            }
            else {
                _this.widgetConfigSubject.next();
            }
        });
    };
    // Unsubscribe from the widget refresh observable, which stops widget updating.
    OSSWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    OSSWidgetComponent.prototype.loadCharts = function (result) {
        this.generateLicenseDetails(result);
        this.generateSecurityDetails(result);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    OSSWidgetComponent.prototype.generateLicenseDetails = function (result) {
        var _this = this;
        if (!result || !result.threats || !result.threats.License) {
            this.charts[0].data = [];
            return;
        }
        var count = 0;
        var openCount = 0;
        var sorted = result.threats.License.sort(function (a, b) {
            return _this.getDashStatus(a.level) - _this.getDashStatus(b.level);
        }).reverse();
        var latestDetails = sorted.map(function (oss) {
            var ossStatus = _this.getDashStatus(oss.level);
            var open = (oss.dispositionCounts.Open) ? oss.dispositionCounts.Open : 0;
            var ossStatusTitle = oss.level + ' (' + open + '/' + oss.count + ')';
            count += oss.count;
            openCount += open;
            return {
                status: ossStatus,
                statusText: oss.level,
                title: ossStatusTitle,
                subtitles: [],
                url: result.reportUrl,
                components: oss.components,
                lastUpdated: result.timestamp
            };
        });
        this.charts[0].title = 'License (' + openCount + '/' + count + ')';
        this.charts[0].data = {
            items: latestDetails,
            clickableContent: _oss_detail_oss_detail_component__WEBPACK_IMPORTED_MODULE_10__["OSSDetailComponent"],
            clickableHeader: _oss_detail_all_oss_detail_all_component__WEBPACK_IMPORTED_MODULE_12__["OSSDetailAllComponent"]
        };
    };
    OSSWidgetComponent.prototype.generateSecurityDetails = function (result) {
        var _this = this;
        if (!result || !result.threats || !result.threats.Security) {
            this.charts[1].data = [];
            return;
        }
        var count = 0;
        var openCount = 0;
        var sorted = result.threats.Security.sort(function (a, b) {
            return _this.getDashStatus(a.level) - _this.getDashStatus(b.level);
        }).reverse();
        var latestDetails = sorted.map(function (oss) {
            var ossStatus = _this.getDashStatus(oss.level);
            var open = (oss.dispositionCounts.Open) ? oss.dispositionCounts.Open : 0;
            var ossStatusTitle = oss.level + ' (' + open + '/' + oss.count + ')';
            count += oss.count;
            openCount += open;
            return {
                status: ossStatus,
                statusText: oss.level,
                title: ossStatusTitle,
                subtitles: [],
                url: result.reportUrl,
                components: oss.components,
                lastUpdated: result.timestamp
            };
        });
        this.charts[1].title = 'Security (' + openCount + '/' + count + ')';
        this.charts[1].data = {
            items: latestDetails,
            clickableContent: _oss_detail_oss_detail_component__WEBPACK_IMPORTED_MODULE_10__["OSSDetailComponent"],
            clickableHeader: _oss_detail_all_oss_detail_all_component__WEBPACK_IMPORTED_MODULE_12__["OSSDetailAllComponent"]
        };
    };
    OSSWidgetComponent.prototype.getDashStatus = function (level) {
        switch (level.toLowerCase()) {
            case 'critical':
                return _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_9__["DashStatus"].CRITICAL;
            case 'high':
                return _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_9__["DashStatus"].UNAUTH;
            case 'medium':
                return _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_9__["DashStatus"].WARN;
            case 'low':
                return _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_9__["DashStatus"].IN_PROGRESS;
            default:
                return _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_9__["DashStatus"].PASS;
        }
    };
    OSSWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (!this.hasData) {
            this.charts[0].data = { items: [{ title: 'No Data Found' }] };
            this.charts[1].data = { items: [{ title: 'No Data Found' }] };
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    OSSWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
        { type: _opensource_scan_service__WEBPACK_IMPORTED_MODULE_4__["OpensourceScanService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_7__["LayoutDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_7__["LayoutDirective"])
    ], OSSWidgetComponent.prototype, "childLayoutTag", void 0);
    OSSWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oss-widget',
            template: __webpack_require__(/*! raw-loader!./oss-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.html"),
            styles: [__webpack_require__(/*! ./oss-widget.component.scss */ "./src/app/widget_modules/opensource-scan/oss-widget/oss-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"],
            _opensource_scan_service__WEBPACK_IMPORTED_MODULE_4__["OpensourceScanService"]])
    ], OSSWidgetComponent);
    return OSSWidgetComponent;
}(_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n}\n\nselect {\n  padding: 7px;\n  border-radius: 4px;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n\nh5 {\n  color: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvcmVwby9yZXBvLWNvbmZpZy1mb3JtL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXHdpZGdldF9tb2R1bGVzXFxyZXBvXFxyZXBvLWNvbmZpZy1mb3JtXFxyZXBvLWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9yZXBvL3JlcG8tY29uZmlnLWZvcm0vcmVwby1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvcmVwby9yZXBvLWNvbmZpZy1mb3JtL3JlcG8tY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrLCAucmVxdWlyZWQtdGV4dCB7XG4gIGNvbG9yOm9yYW5nZXJlZDtcbn1cblxuaDUge1xuICBjb2xvcjogIzQ0NDQ0NDtcbn1cbiIsIi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuaDUge1xuICBjb2xvcjogIzQ0NDQ0NDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: RepoConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoConfigFormComponent", function() { return RepoConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");







var RepoConfigFormComponent = /** @class */ (function () {
    function RepoConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.scm = [];
        this.createForm();
    }
    Object.defineProperty(RepoConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.repoConfigForm.get('scm').setValue(widgetConfig.options.scm ? widgetConfig.options.scm.name : '');
            this.repoConfigForm.get('url').setValue(widgetConfig.options.url);
            this.repoConfigForm.get('branch').setValue(widgetConfig.options.branch);
            this.repoConfigForm.get('userID').setValue(widgetConfig.options.userID);
            this.repoConfigForm.get('password').setValue(widgetConfig.options.password);
            this.repoConfigForm.get('personalAccessToken').setValue(widgetConfig.options.personalAccessToken);
        },
        enumerable: true,
        configurable: true
    });
    RepoConfigFormComponent.prototype.ngOnInit = function () {
        this.getDashboardComponent();
    };
    RepoConfigFormComponent.prototype.createForm = function () {
        var _this = this;
        this.repoConfigForm = this.formBuilder.group({
            scm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userID: '',
            password: '',
            personalAccessToken: ''
        });
        this.collectorService.collectorsByType('SCM').subscribe(function (scmCollectors) {
            var e_1, _a;
            var scmTools = scmCollectors.map(function (currSCMTool) { return currSCMTool.name; });
            var result = [];
            try {
                for (var scmTools_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](scmTools), scmTools_1_1 = scmTools_1.next(); !scmTools_1_1.done; scmTools_1_1 = scmTools_1.next()) {
                    var currTool = scmTools_1_1.value;
                    result.push({ type: currTool });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (scmTools_1_1 && !scmTools_1_1.done && (_a = scmTools_1.return)) _a.call(scmTools_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.scm = result;
        });
    };
    RepoConfigFormComponent.prototype.submitForm = function () {
        var newConfig = {
            name: 'repo',
            componentId: this.componentId,
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'repo0',
                scm: {
                    name: this.repoConfigForm.value.scm,
                    value: this.repoConfigForm.value.scm,
                },
                url: this.repoConfigForm.value.url,
                branch: this.repoConfigForm.value.branch,
                userID: this.repoConfigForm.value.userID,
                password: this.repoConfigForm.value.password,
                personalAccessToken: this.repoConfigForm.value.personalAccessToken
            },
        };
        this.activeModal.close(newConfig);
    };
    RepoConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(RepoConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.repoConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    RepoConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_5__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], RepoConfigFormComponent.prototype, "widgetConfig", null);
    RepoConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repo-config-form',
            template: __webpack_require__(/*! raw-loader!./repo-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.html"),
            styles: [__webpack_require__(/*! ./repo-config-form.component.scss */ "./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_5__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]])
    ], RepoConfigFormComponent);
    return RepoConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3JlcG8vcmVwby1kZWxldGUtZm9ybS9yZXBvLWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: RepoDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoDeleteFormComponent", function() { return RepoDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");







var RepoDeleteFormComponent = /** @class */ (function () {
    function RepoDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This repo item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(RepoDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.repoDeleteForm.get('scm').setValue(widgetConfig.options.scm);
            this.repoDeleteForm.get('url').setValue(widgetConfig.options.url);
            this.repoDeleteForm.get('branch').setValue(widgetConfig.options.branch);
            this.repoDeleteForm.get('userID').setValue(widgetConfig.options.userID);
            this.repoDeleteForm.get('password').setValue(widgetConfig.options.password);
            this.repoDeleteForm.get('personalAccessToken').setValue(widgetConfig.options.personalAccessToken);
        },
        enumerable: true,
        configurable: true
    });
    RepoDeleteFormComponent.prototype.ngOnInit = function () {
        this.getDashboardComponent();
    };
    RepoDeleteFormComponent.prototype.createDeleteForm = function () {
        this.repoDeleteForm = this.formBuilder.group({
            scm: '',
            url: '',
            branch: '',
            userID: '',
            password: '',
            personalAccessToken: ''
        });
    };
    RepoDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'repo',
            componentId: this.componentId,
            options: {
                id: this.widgetConfigId,
                scm: this.repoDeleteForm.value.scm,
                url: this.repoDeleteForm.value.url,
                branch: this.repoDeleteForm.value.branch,
                userID: this.repoDeleteForm.value.userID,
                password: this.repoDeleteForm.value.password,
                personalAccessToken: this.repoDeleteForm.value.personalAccessToken
            },
        };
        this.activeModal.close(deleteConfig);
    };
    RepoDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    RepoDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_5__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RepoDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], RepoDeleteFormComponent.prototype, "widgetConfig", null);
    RepoDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repo-delete-form',
            template: __webpack_require__(/*! raw-loader!./repo-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./repo-delete-form.component.scss */ "./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_5__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]])
    ], RepoDeleteFormComponent);
    return RepoDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/repo/repo-detail/repo-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-detail/repo-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvcmVwby9yZXBvLWRldGFpbC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xccmVwb1xccmVwby1kZXRhaWxcXHJlcG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9yZXBvL3JlcG8tZGV0YWlsL3JlcG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9yZXBvL3JlcG8tZGV0YWlsL3JlcG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBwYWRkaW5nOiAxLjVlbTtcbn1cbiIsIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgcGFkZGluZzogMS41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/widget_modules/repo/repo-detail/repo-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-detail/repo-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: RepoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoDetailComponent", function() { return RepoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var RepoDetailComponent = /** @class */ (function () {
    function RepoDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    RepoDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RepoDetailComponent.prototype, "detailData", {
        set: function (data) {
            this.data = data.data;
        },
        enumerable: true,
        configurable: true
    });
    RepoDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], RepoDetailComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], RepoDetailComponent.prototype, "detailData", null);
    RepoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repo-detail',
            template: __webpack_require__(/*! raw-loader!./repo-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-detail/repo-detail.component.html"),
            styles: [__webpack_require__(/*! ./repo-detail.component.scss */ "./src/app/widget_modules/repo/repo-detail/repo-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], RepoDetailComponent);
    return RepoDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/repo/repo-routing-module.ts":
/*!************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-routing-module.ts ***!
  \************************************************************/
/*! exports provided: RepoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoRoutingModule", function() { return RepoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repo-widget/repo-widget.component */ "./src/app/widget_modules/repo/repo-widget/repo-widget.component.ts");




var routes = [];
var RepoRoutingModule = /** @class */ (function () {
    function RepoRoutingModule() {
    }
    RepoRoutingModule.components = [_repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_3__["RepoWidgetComponent"]];
    RepoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RepoRoutingModule);
    return RepoRoutingModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/repo/repo-widget/repo-charts.ts":
/*!****************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-widget/repo-charts.ts ***!
  \****************************************************************/
/*! exports provided: REPO_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPO_CHARTS", function() { return REPO_CHARTS; });
/* harmony import */ var src_app_shared_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/charts/line-chart/line-chart.component */ "./src/app/shared/charts/line-chart/line-chart.component.ts");
/* harmony import */ var _repo_detail_repo_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repo-detail/repo-detail.component */ "./src/app/widget_modules/repo/repo-detail/repo-detail.component.ts");
/* harmony import */ var _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/charts/plain-text-chart/plain-text-chart.component */ "./src/app/shared/charts/plain-text-chart/plain-text-chart.component.ts");



var REPO_CHARTS = [
    {
        title: 'Issues, Pulls and Commits Per Day',
        component: src_app_shared_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_0__["LineChartComponent"],
        data: {
            areaChart: true,
            detailComponent: _repo_detail_repo_detail_component__WEBPACK_IMPORTED_MODULE_1__["RepoDetailComponent"],
            dataPoints: [
                {
                    name: 'Commits',
                    series: []
                },
                {
                    name: 'Pulls',
                    series: []
                },
                {
                    name: 'Issues',
                    series: []
                },
            ]
        },
        xAxisLabel: 'Date',
        yAxisLabel: 'Commits, Pull Requests, and Issues',
        colorScheme: {
            domain: ['blue', 'green', 'red']
        }
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: '',
        component: _shared_charts_plain_text_chart_plain_text_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlainTextChartComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
];


/***/ }),

/***/ "./src/app/widget_modules/repo/repo-widget/repo-widget.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-widget/repo-widget.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3JlcG8vcmVwby13aWRnZXQvcmVwby13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/repo/repo-widget/repo-widget.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget_modules/repo/repo-widget/repo-widget.component.ts ***!
  \**************************************************************************/
/*! exports provided: RepoWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoWidgetComponent", function() { return RepoWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var _repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repo.service */ "./src/app/widget_modules/repo/repo.service.ts");
/* harmony import */ var _repo_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repo-charts */ "./src/app/widget_modules/repo/repo-widget/repo-charts.ts");
/* harmony import */ var _shared_collector_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_layouts_one_by_two_layout_table_chart_one_by_two_layout_table_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/layouts/one-by-two-layout-table-chart/one-by-two-layout-table-chart.component */ "./src/app/shared/layouts/one-by-two-layout-table-chart/one-by-two-layout-table-chart.component.ts");
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");










// @ts-ignore


// tslint:disable-next-line:max-line-length


var RepoWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RepoWidgetComponent, _super);
    function RepoWidgetComponent(componentFactoryResolver, cdr, dashboardService, collectorService, repoService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.repoService = repoService;
        _this.REPO_PER_DAY_TIME_RANGE = 14;
        _this.TOTAL_REPO_COUNTS_TIME_RANGES = [7, 14];
        return _this;
    }
    // Initialize the widget and set layout and charts.
    RepoWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'repo0';
        this.layout = _shared_layouts_one_by_two_layout_table_chart_one_by_two_layout_table_chart_component__WEBPACK_IMPORTED_MODULE_12__["OneByTwoLayoutTableChartComponent"];
        this.charts = _repo_charts__WEBPACK_IMPORTED_MODULE_8__["REPO_CHARTS"];
        this.auditType = 'CODE_REVIEW';
        this.init();
    };
    // After the view is ready start the refresh interval.
    RepoWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    RepoWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    RepoWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(-1), // Refresh this widget separate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        // tslint:disable-next-line:no-shadowed-variable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            _this.widgetConfigExists = true;
            _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_13__["WidgetState"].READY;
            _this.params = {
                componentId: widgetConfig.componentId,
                numberOfDays: 14
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(_this.repoService.fetchCommits(_this.params.componentId, _this.params.numberOfDays).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.repoService.fetchPullRequests(_this.params.componentId, _this.params.numberOfDays).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })), _this.repoService.fetchIssues(_this.params.componentId, _this.params.numberOfDays).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err); })));
        })).subscribe(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 3), commits = _b[0], pulls = _b[1], issues = _b[2];
            if ((commits || pulls || issues) && (commits.length > 0 || pulls.length > 0 || issues.length > 0)) {
                _this.hasData = true;
                _this.loadCharts(commits, pulls, issues);
            }
            else {
                _this.hasData = false;
                _this.setDefaultIfNoData();
            }
        });
    };
    RepoWidgetComponent.prototype.loadCharts = function (commits, pulls, issues) {
        this.generateRepoPerDay(commits, pulls, issues);
        this.generateTotalRepoCounts(commits, pulls, issues);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    // Unsubscribe from the widget refresh observable, which stops widget updating.
    RepoWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    // *********************** REPO STATS PER DAY ************************
    RepoWidgetComponent.prototype.generateRepoPerDay = function (commitResult, pullResult, issueResult) {
        var _this = this;
        if (!commitResult || !pullResult || !issueResult) {
            return;
        }
        var startDate = this.toMidnight(new Date());
        startDate.setDate(startDate.getDate() - this.REPO_PER_DAY_TIME_RANGE + 1);
        var allCommits = commitResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.scmCommitTimestamp, startDate); });
        var allPulls = pullResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, startDate); });
        var allIssues = issueResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, startDate); });
        this.charts[0].data.dataPoints[0].series = this.collectDataArray(this.collectRepoCommits(allCommits));
        this.charts[0].data.dataPoints[1].series = this.collectDataArray(this.collectRepoPulls(allPulls));
        this.charts[0].data.dataPoints[2].series = this.collectDataArray(this.collectRepoIssues(allIssues));
    };
    RepoWidgetComponent.prototype.collectContributorCount = function (allResults, type) {
        var _this = this;
        var lastDayCount = 0;
        var lastSevenDayCount = 0;
        var lastFourteenDayCount = 0;
        var lastDayContributors = [];
        var lastSevenDayContributors = [];
        var lastFourteenDayContributors = [];
        var today = this.toMidnight(new Date());
        var sevenDays = this.toMidnight(new Date());
        var fourteenDays = this.toMidnight(new Date());
        sevenDays.setDate(sevenDays.getDate() - 7);
        fourteenDays.setDate(fourteenDays.getDate() - 14);
        var timestamp;
        var user;
        // Setting values for commuters, contributors, and ideators
        allResults.forEach(function (currResult) {
            if (type === 'commit') {
                timestamp = currResult.scmCommitTimestamp;
                user = currResult.scmAuthor;
            }
            else {
                timestamp = currResult.timestamp;
                user = currResult.userId;
            }
            if (_this.checkRepoAfterDate(timestamp, today)) {
                lastDayCount++;
                if (lastDayContributors.indexOf(user) === -1) {
                    lastDayContributors.push(user);
                }
            }
            if (_this.checkRepoAfterDate(timestamp, sevenDays)) {
                lastSevenDayCount++;
                if (lastSevenDayContributors.indexOf(user) === -1) {
                    lastSevenDayContributors.push(user);
                }
            }
            if (_this.checkRepoAfterDate(timestamp, fourteenDays)) {
                lastFourteenDayCount++;
                if (lastFourteenDayContributors.indexOf(user) === -1) {
                    lastFourteenDayContributors.push(user);
                }
            }
        });
        return [lastDayContributors.length, lastSevenDayContributors.length, lastFourteenDayContributors.length];
    };
    RepoWidgetComponent.prototype.collectRepoCommits = function (commitRepo) {
        var dataArray = commitRepo.map(function (repo) {
            return {
                number: repo.scmRevisionNumber.match(new RegExp('^.{0,7}'))[0],
                author: repo.scmAuthor,
                message: repo.scmCommitLog,
                time: repo.scmCommitTimestamp
            };
        });
        return dataArray;
    };
    RepoWidgetComponent.prototype.collectRepoPulls = function (pullRepo) {
        var dataArray = pullRepo.map(function (repo) {
            return {
                number: repo.number,
                author: repo.mergeAuthor,
                message: repo.scmCommitLog,
                time: repo.timestamp
            };
        });
        return dataArray;
    };
    RepoWidgetComponent.prototype.collectRepoIssues = function (issueRepo) {
        var dataArray = issueRepo.map(function (repo) {
            return {
                number: repo.scmRevisionNumber,
                author: repo.userId,
                message: repo.scmCommitLog,
                time: repo.timestamp
            };
        });
        return dataArray;
    };
    RepoWidgetComponent.prototype.collectDataArray = function (content) {
        var e_1, _a;
        var dataArrayToSend = [];
        var groupedResults = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["groupBy"])(content, function (result) { return moment__WEBPACK_IMPORTED_MODULE_10___default()(new Date(result.time), 'DD/MM/YYYY').startOf('day'); });
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
    // *********************** TOTAL REPO COUNTS ************************
    RepoWidgetComponent.prototype.generateTotalRepoCounts = function (commitResult, pullResult, issueResult) {
        var _this = this;
        if (!commitResult || !pullResult || !issueResult) {
            return;
        }
        var today = this.toMidnight(new Date());
        var bucketOneStartDate = this.toMidnight(new Date());
        var bucketTwoStartDate = this.toMidnight(new Date());
        bucketOneStartDate.setDate(bucketOneStartDate.getDate() - this.TOTAL_REPO_COUNTS_TIME_RANGES[0] + 1);
        bucketTwoStartDate.setDate(bucketTwoStartDate.getDate() - this.TOTAL_REPO_COUNTS_TIME_RANGES[1] + 1);
        var commitToday = commitResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.scmCommitTimestamp, today); }).length;
        var commit7 = commitResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.scmCommitTimestamp, bucketOneStartDate); }).length;
        var commit14 = commitResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.scmCommitTimestamp, bucketTwoStartDate); }).length;
        var pullToday = pullResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, today); }).length;
        var pull7 = pullResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, bucketOneStartDate); }).length;
        var pull14 = pullResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, bucketTwoStartDate); }).length;
        var issueToday = issueResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, today); }).length;
        var issue7 = issueResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, bucketOneStartDate); }).length;
        var issue14 = issueResult.filter(function (repo) { return _this.checkRepoAfterDate(repo.timestamp, bucketTwoStartDate); }).length;
        var commuters = this.collectContributorCount(commitResult, 'commit');
        var contributors = this.collectContributorCount(pullResult, 'pull');
        var ideators = this.collectContributorCount(issueResult, 'issue');
        this.charts[1].data = commitToday.toString();
        this.charts[2].data = commit7.toString();
        this.charts[3].data = commit14.toString();
        this.charts[4].data = pullToday.toString();
        this.charts[5].data = pull7.toString();
        this.charts[6].data = pull14.toString();
        this.charts[7].data = issueToday.toString();
        this.charts[8].data = issue7.toString();
        this.charts[9].data = issue14.toString();
        this.charts[10].data = commuters[0].toString();
        this.charts[11].data = commuters[1].toString();
        this.charts[12].data = commuters[2].toString();
        this.charts[13].data = contributors[0].toString();
        this.charts[14].data = contributors[1].toString();
        this.charts[15].data = contributors[2].toString();
        this.charts[16].data = ideators[0].toString();
        this.charts[17].data = ideators[1].toString();
        this.charts[18].data = ideators[2].toString();
    };
    //// *********************** HELPER UTILS *********************
    RepoWidgetComponent.prototype.toMidnight = function (date) {
        date.setHours(0, 0, 0, 0);
        return date;
    };
    RepoWidgetComponent.prototype.checkRepoAfterDate = function (repoTime, date) {
        return new Date(repoTime) >= date;
    };
    RepoWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (this.hasData === false) {
            this.charts[0].data.dataPoints[0].series = [{ name: new Date(), value: 0, data: 'Commits' }];
            this.charts[0].data.dataPoints[1].series = [{ name: new Date(), value: 0, data: 'Pulls' }];
            this.charts[0].data.dataPoints[2].series = [{ name: new Date(), value: 0, data: 'Issues' }];
            this.charts[1].data = '0';
            this.charts[2].data = '0';
            this.charts[3].data = '0';
            this.charts[4].data = '0';
            this.charts[5].data = '0';
            this.charts[6].data = '0';
            this.charts[7].data = '0';
            this.charts[8].data = '0';
            this.charts[9].data = '0';
            this.charts[10].data = '0';
            this.charts[11].data = '0';
            this.charts[12].data = '0';
            this.charts[13].data = '0';
            this.charts[14].data = '0';
            this.charts[15].data = '0';
            this.charts[16].data = '0';
            this.charts[17].data = '0';
            this.charts[18].data = '0';
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    RepoWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: _shared_collector_service__WEBPACK_IMPORTED_MODULE_9__["CollectorService"] },
        { type: _repo_service__WEBPACK_IMPORTED_MODULE_7__["RepoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"])
    ], RepoWidgetComponent.prototype, "childLayoutTag", void 0);
    RepoWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repo-widget',
            template: __webpack_require__(/*! raw-loader!./repo-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/repo/repo-widget/repo-widget.component.html"),
            styles: [__webpack_require__(/*! ./repo-widget.component.scss */ "./src/app/widget_modules/repo/repo-widget/repo-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _shared_collector_service__WEBPACK_IMPORTED_MODULE_9__["CollectorService"],
            _repo_service__WEBPACK_IMPORTED_MODULE_7__["RepoService"]])
    ], RepoWidgetComponent);
    return RepoWidgetComponent;
}(src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_6__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/repo/repo.module.ts":
/*!****************************************************!*\
  !*** ./src/app/widget_modules/repo/repo.module.ts ***!
  \****************************************************/
/*! exports provided: RepoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoModule", function() { return RepoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _repo_config_form_repo_config_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repo-config-form/repo-config-form.component */ "./src/app/widget_modules/repo/repo-config-form/repo-config-form.component.ts");
/* harmony import */ var _repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repo-widget/repo-widget.component */ "./src/app/widget_modules/repo/repo-widget/repo-widget.component.ts");
/* harmony import */ var _repo_detail_repo_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repo-detail/repo-detail.component */ "./src/app/widget_modules/repo/repo-detail/repo-detail.component.ts");
/* harmony import */ var _repo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repo-routing-module */ "./src/app/widget_modules/repo/repo-routing-module.ts");
/* harmony import */ var _repo_delete_form_repo_delete_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repo-delete-form/repo-delete-form.component */ "./src/app/widget_modules/repo/repo-delete-form/repo-delete-form.component.ts");










var RepoModule = /** @class */ (function () {
    function RepoModule() {
    }
    RepoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_6__["RepoWidgetComponent"], _repo_config_form_repo_config_form_component__WEBPACK_IMPORTED_MODULE_5__["RepoConfigFormComponent"], _repo_detail_repo_detail_component__WEBPACK_IMPORTED_MODULE_7__["RepoDetailComponent"], _repo_delete_form_repo_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["RepoDeleteFormComponent"]],
            entryComponents: [_repo_widget_repo_widget_component__WEBPACK_IMPORTED_MODULE_6__["RepoWidgetComponent"], _repo_config_form_repo_config_form_component__WEBPACK_IMPORTED_MODULE_5__["RepoConfigFormComponent"], _repo_detail_repo_detail_component__WEBPACK_IMPORTED_MODULE_7__["RepoDetailComponent"], _repo_delete_form_repo_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["RepoDeleteFormComponent"]],
            imports: [
                _repo_routing_module__WEBPACK_IMPORTED_MODULE_8__["RepoRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: []
        })
    ], RepoModule);
    return RepoModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc2VjdXJpdHktc2Nhbi9zZWN1cml0eS1zY2FuLWNvbmZpZy9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xcc2VjdXJpdHktc2Nhblxcc2VjdXJpdHktc2Nhbi1jb25maWdcXHNlY3VyaXR5LXNjYW4tY29uZmlnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9zZWN1cml0eS1zY2FuL3NlY3VyaXR5LXNjYW4tY29uZmlnL3NlY3VyaXR5LXNjYW4tY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc2VjdXJpdHktc2Nhbi9zZWN1cml0eS1zY2FuLWNvbmZpZy9zZWN1cml0eS1zY2FuLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjaywgLnJlcXVpcmVkLXRleHQge1xuICBjb2xvcjpvcmFuZ2VyZWQ7XG59XG4iLCIubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SecurityScanConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityScanConfigComponent", function() { return SecurityScanConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_collector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var SecurityScanConfigComponent = /** @class */ (function () {
    function SecurityScanConfigComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.searching = false;
        this.searchFailed = false;
        this.getSecurityJobTitle = function (collectorItem) {
            if (!collectorItem) {
                return '';
            }
            var description = collectorItem.description;
            return collectorItem.collector.name + ' : ' + description;
        };
        this.createForm();
    }
    Object.defineProperty(SecurityScanConfigComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.securityConfigForm.get('sJob').setValue(widgetConfig.options.sJob);
        },
        enumerable: true,
        configurable: true
    });
    SecurityScanConfigComponent.prototype.createForm = function () {
        this.securityConfigForm = this.formBuilder.group({
            sJob: ''
        });
    };
    SecurityScanConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeAheadResults = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]) :
                    _this.collectorService.searchItems('StaticSecurityScan', term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
                        }
                        _this.searchFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
                        _this.searchFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.searching = false; }));
        };
        this.loadSavedSecurityJob();
        this.getDashboardComponent();
    };
    SecurityScanConfigComponent.prototype.submitForm = function () {
        var newConfig = {
            name: 'codeanalysis',
            componentId: this.componentId,
            collectorItemId: this.securityConfigForm.value.sJob.id,
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'codeanalysis0',
            },
        };
        this.activeModal.close(newConfig);
    };
    SecurityScanConfigComponent.prototype.loadSavedSecurityJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (dashboard) {
            var securityCollector = dashboard.application.components[0].collectorItems.StaticSecurityScan;
            var savedCollectorSecurityJob = securityCollector ? securityCollector[0].description : null;
            if (savedCollectorSecurityJob) {
                var securityId = securityCollector[0].id;
                return securityId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (securityId) {
            if (securityId) {
                return _this.collectorService.getItemsById(securityId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        })).subscribe(function (collectorData) {
            if (collectorData) {
                _this.securityConfigForm.get('sJob').setValue(collectorData);
            }
        });
    };
    SecurityScanConfigComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(SecurityScanConfigComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.securityConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    SecurityScanConfigComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_collector_service__WEBPACK_IMPORTED_MODULE_4__["CollectorService"] },
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SecurityScanConfigComponent.prototype, "widgetConfig", null);
    SecurityScanConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-scan-config',
            template: __webpack_require__(/*! raw-loader!./security-scan-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.html"),
            styles: [__webpack_require__(/*! ./security-scan-config.component.scss */ "./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_collector_service__WEBPACK_IMPORTED_MODULE_4__["CollectorService"],
            _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]])
    ], SecurityScanConfigComponent);
    return SecurityScanConfigComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3NlY3VyaXR5LXNjYW4vc2VjdXJpdHktc2Nhbi1kZWxldGUtZm9ybS9zZWN1cml0eS1zY2FuLWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SecurityScanDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityScanDeleteFormComponent", function() { return SecurityScanDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var SecurityScanDeleteFormComponent = /** @class */ (function () {
    function SecurityScanDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This security scan item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(SecurityScanDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.securityDeleteForm.get('sJob').setValue(widgetConfig.options.sJob);
        },
        enumerable: true,
        configurable: true
    });
    SecurityScanDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedSecurityJob();
        this.getDashboardComponent();
    };
    SecurityScanDeleteFormComponent.prototype.createDeleteForm = function () {
        this.securityDeleteForm = this.formBuilder.group({
            sJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SecurityScanDeleteFormComponent.prototype.getSavedSecurityJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var securityCollector = dashboard.application.components[0].collectorItems.StaticSecurityScan;
            var savedCollectorSecurityJob = securityCollector ? securityCollector[0].description : null;
            if (savedCollectorSecurityJob) {
                var securityId = securityCollector[0].id;
                return securityId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (securityId) {
            if (securityId) {
                return _this.collectorService.getItemsById(securityId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            if (collectorData) {
                _this.securityDeleteForm.get('sJob').setValue(collectorData);
            }
        });
    };
    SecurityScanDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'codeanalysis',
            componentId: this.componentId,
            collectorItemId: this.securityDeleteForm.value.sJob.id,
            options: {
                id: this.widgetConfigId,
            },
        };
        this.activeModal.close(deleteConfig);
    };
    SecurityScanDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    SecurityScanDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SecurityScanDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SecurityScanDeleteFormComponent.prototype, "widgetConfig", null);
    SecurityScanDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-scan-delete-form',
            template: __webpack_require__(/*! raw-loader!./security-scan-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./security-scan-delete-form.component.scss */ "./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], SecurityScanDeleteFormComponent);
    return SecurityScanDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SecurityScanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityScanRoutingModule", function() { return SecurityScanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-scan-widget/security-scan-widget.component */ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.ts");




var routes = [];
var SecurityScanRoutingModule = /** @class */ (function () {
    function SecurityScanRoutingModule() {
    }
    SecurityScanRoutingModule.components = [_security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_3__["SecurityScanWidgetComponent"]];
    SecurityScanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SecurityScanRoutingModule);
    return SecurityScanRoutingModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-charts.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-widget/security-scan-charts.ts ***!
  \*******************************************************************************************/
/*! exports provided: SECURITY_SCAN_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURITY_SCAN_CHARTS", function() { return SECURITY_SCAN_CHARTS; });
/* harmony import */ var _shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");

var SECURITY_SCAN_CHARTS = [
    {
        title: 'Security Scan',
        component: _shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
];


/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.sass":
/*!*******************************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.sass ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3NlY3VyaXR5LXNjYW4vc2VjdXJpdHktc2Nhbi13aWRnZXQvc2VjdXJpdHktc2Nhbi13aWRnZXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SecurityScanWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityScanWidgetComponent", function() { return SecurityScanWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var _security_scan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security-scan.service */ "./src/app/widget_modules/security-scan/security-scan.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _security_scan_widget_security_scan_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../security-scan-widget/security-scan-charts */ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-charts.ts");
/* harmony import */ var _shared_layouts_one_chart_layout_one_chart_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/layouts/one-chart-layout/one-chart-layout.component */ "./src/app/shared/layouts/one-chart-layout/one-chart-layout.component.ts");
/* harmony import */ var _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/dash-status/DashStatus */ "./src/app/shared/dash-status/DashStatus.ts");
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");












var SecurityScanWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SecurityScanWidgetComponent, _super);
    function SecurityScanWidgetComponent(componentFactoryResolver, cdr, dashboardService, securityService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.securityService = securityService;
        return _this;
    }
    SecurityScanWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'codeanalysis0';
        this.layout = _shared_layouts_one_chart_layout_one_chart_layout_component__WEBPACK_IMPORTED_MODULE_9__["OneChartLayoutComponent"];
        this.charts = _security_scan_widget_security_scan_charts__WEBPACK_IMPORTED_MODULE_8__["SECURITY_SCAN_CHARTS"];
        this.auditType = 'STATIC_SECURITY_ANALYSIS';
        this.init();
    };
    SecurityScanWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    SecurityScanWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    SecurityScanWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(-1), // Refresh this widget separate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        // tslint:disable-next-line:no-shadowed-variable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                _this.widgetConfigExists = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([]);
            }
            _this.widgetConfigExists = true;
            // check if collector item type is tied to dashboard
            // if true, set state to READY, otherwise keep at default CONFIGURE
            if (_this.dashboardService.checkCollectorItemTypeExist('StaticSecurityScan')) {
                _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_11__["WidgetState"].READY;
            }
            _this.params = {
                componentId: widgetConfig.componentId,
                max: 1
            };
            return _this.securityService.getSecurityScanDetails(_this.params.componentId, _this.params.max)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(err); }));
            // );
        })).subscribe(function (result) {
            _this.hasData = (result && result.length > 0);
            if (_this.hasData) {
                _this.loadCharts(result);
            }
            else {
                _this.setDefaultIfNoData();
            }
            _super.prototype.loadComponent.call(_this, _this.childLayoutTag);
        });
        // for quality widget, subscribe to updates from other quality components
        this.dashboardService.dashboardQualityConfig$.subscribe(function (result) {
            if (result) {
                _this.widgetConfigSubject.next(result);
            }
            else {
                _this.widgetConfigSubject.next();
            }
        });
    };
    SecurityScanWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    SecurityScanWidgetComponent.prototype.loadCharts = function (result) {
        this.generateSecurityScanData(result);
    };
    SecurityScanWidgetComponent.prototype.generateSecurityScanData = function (result) {
        var sData = result[0].metrics.map(function (metric) {
            var riskStatus = metric.name === 'High' ? _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_10__["DashStatus"].CRITICAL : (metric.name === 'Medium' ?
                _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_10__["DashStatus"].WARN : _shared_dash_status_DashStatus__WEBPACK_IMPORTED_MODULE_10__["DashStatus"].PASS);
            return {
                title: metric.name,
                subtitles: [metric.value],
                status: riskStatus,
                statusText: metric.status,
            };
        });
        this.charts[0].data = {
            items: sData,
            clickableContent: null,
            clickableHeader: null
        };
    };
    SecurityScanWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (!this.hasData) {
            this.charts[0].data = { items: [{ title: 'No Data Found' }] };
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    SecurityScanWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] },
        { type: _security_scan_service__WEBPACK_IMPORTED_MODULE_4__["SecurityScanService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_6__["LayoutDirective"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_6__["LayoutDirective"])
    ], SecurityScanWidgetComponent.prototype, "childLayoutTag", void 0);
    SecurityScanWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-scan-widget',
            template: __webpack_require__(/*! raw-loader!./security-scan-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.html"),
            styles: [__webpack_require__(/*! ./security-scan-widget.component.sass */ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"],
            _security_scan_service__WEBPACK_IMPORTED_MODULE_4__["SecurityScanService"]])
    ], SecurityScanWidgetComponent);
    return SecurityScanWidgetComponent;
}(_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan.module.ts ***!
  \**********************************************************************/
/*! exports provided: SecurityScanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityScanModule", function() { return SecurityScanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _security_scan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-scan-routing.module */ "./src/app/widget_modules/security-scan/security-scan-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-scan-widget/security-scan-widget.component */ "./src/app/widget_modules/security-scan/security-scan-widget/security-scan-widget.component.ts");
/* harmony import */ var _security_scan_config_security_scan_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./security-scan-config/security-scan-config.component */ "./src/app/widget_modules/security-scan/security-scan-config/security-scan-config.component.ts");
/* harmony import */ var _security_scan_delete_form_security_scan_delete_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./security-scan-delete-form/security-scan-delete-form.component */ "./src/app/widget_modules/security-scan/security-scan-delete-form/security-scan-delete-form.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");










var SecurityScanModule = /** @class */ (function () {
    function SecurityScanModule() {
    }
    SecurityScanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_6__["SecurityScanWidgetComponent"], _security_scan_config_security_scan_config_component__WEBPACK_IMPORTED_MODULE_7__["SecurityScanConfigComponent"], _security_scan_delete_form_security_scan_delete_form_component__WEBPACK_IMPORTED_MODULE_8__["SecurityScanDeleteFormComponent"]],
            entryComponents: [_security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_6__["SecurityScanWidgetComponent"], _security_scan_config_security_scan_config_component__WEBPACK_IMPORTED_MODULE_7__["SecurityScanConfigComponent"], _security_scan_delete_form_security_scan_delete_form_component__WEBPACK_IMPORTED_MODULE_8__["SecurityScanDeleteFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _security_scan_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityScanRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"]
            ],
            exports: [_security_scan_widget_security_scan_widget_component__WEBPACK_IMPORTED_MODULE_6__["SecurityScanWidgetComponent"], _security_scan_config_security_scan_config_component__WEBPACK_IMPORTED_MODULE_7__["SecurityScanConfigComponent"]]
        })
    ], SecurityScanModule);
    return SecurityScanModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/security-scan/security-scan.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/widget_modules/security-scan/security-scan.service.ts ***!
  \***********************************************************************/
/*! exports provided: SecurityScanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityScanService", function() { return SecurityScanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SecurityScanService = /** @class */ (function () {
    function SecurityScanService(http) {
        this.http = http;
        this.securityScanDetailEndPoint = '/api/quality/security-analysis';
    }
    SecurityScanService.prototype.getSecurityScanDetails = function (componentId, max) {
        return this.http.get(this.securityScanDetailEndPoint, this.getHttpParams(componentId, max))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    SecurityScanService.prototype.getHttpParams = function (componentId, max) {
        return { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('componentId', componentId).set('max', max.toString()) };
    };
    SecurityScanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SecurityScanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SecurityScanService);
    return SecurityScanService;
}());



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3N0YXRpYy1hbmFseXNpcy9zdGF0aWMtYW5hbHlzaXMtZGVsZXRlLWZvcm0vc3RhdGljLWFuYWx5c2lzLWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StaticAnalysisDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisDeleteFormComponent", function() { return StaticAnalysisDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var StaticAnalysisDeleteFormComponent = /** @class */ (function () {
    function StaticAnalysisDeleteFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This static analysis item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(StaticAnalysisDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.staticAnalysisDeleteForm.get('staticAnalysisJob').setValue(widgetConfig.collectorItemId);
        },
        enumerable: true,
        configurable: true
    });
    StaticAnalysisDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedCodeQualityJob();
        this.getDashboardComponent();
    };
    StaticAnalysisDeleteFormComponent.prototype.createDeleteForm = function () {
        this.staticAnalysisDeleteForm = this.formBuilder.group({
            staticAnalysisJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    StaticAnalysisDeleteFormComponent.prototype.getSavedCodeQualityJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var sonarCollector = dashboard.application.components[0].collectorItems.CodeQuality;
            var savedCollectorCodeQuality = sonarCollector ? sonarCollector[0].description : null;
            if (savedCollectorCodeQuality) {
                var codeQualityId = sonarCollector[0].id;
                return codeQualityId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (codeQualityId) {
            if (codeQualityId) {
                return _this.collectorService.getItemsById(codeQualityId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.staticAnalysisDeleteForm.get('staticAnalysisJob').setValue(collectorData);
        });
    };
    StaticAnalysisDeleteFormComponent.prototype.submitDeleteForm = function () {
        var deleteConfig = {
            name: 'codeanalysis',
            options: {
                id: this.widgetConfigId,
            },
            componentId: this.componentId,
            collectorItemId: this.staticAnalysisDeleteForm.value.staticAnalysisJob.id
        };
        this.activeModal.close(deleteConfig);
    };
    StaticAnalysisDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    StaticAnalysisDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StaticAnalysisDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], StaticAnalysisDeleteFormComponent.prototype, "widgetConfig", null);
    StaticAnalysisDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-analysis-delete-form',
            template: __webpack_require__(/*! raw-loader!./static-analysis-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./static-analysis-delete-form.component.scss */ "./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], StaticAnalysisDeleteFormComponent);
    return StaticAnalysisDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  word-break: break-all;\n  border-collapse: separate;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc3RhdGljLWFuYWx5c2lzL3N0YXRpYy1hbmFseXNpcy1kZXRhaWwvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcd2lkZ2V0X21vZHVsZXNcXHN0YXRpYy1hbmFseXNpc1xcc3RhdGljLWFuYWx5c2lzLWRldGFpbFxcc3RhdGljLWFuYWx5c2lzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc3RhdGljLWFuYWx5c2lzL3N0YXRpYy1hbmFseXNpcy1kZXRhaWwvc3RhdGljLWFuYWx5c2lzLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc3RhdGljLWFuYWx5c2lzL3N0YXRpYy1hbmFseXNpcy1kZXRhaWwvc3RhdGljLWFuYWx5c2lzLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgcGFkZGluZzogMS41ZW07XG59XG4iLCIudGFibGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIHBhZGRpbmc6IDEuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StaticAnalysisDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisDetailComponent", function() { return StaticAnalysisDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaticAnalysisDetailComponent = /** @class */ (function () {
    function StaticAnalysisDetailComponent() {
    }
    StaticAnalysisDetailComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(StaticAnalysisDetailComponent.prototype, "detailData", {
        // click list header details
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    StaticAnalysisDetailComponent.prototype.isDate = function (obj) {
        return obj instanceof Date;
    };
    StaticAnalysisDetailComponent.prototype.formatDate = function (date) {
        return new Date(date).toUTCString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], StaticAnalysisDetailComponent.prototype, "detailData", null);
    StaticAnalysisDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-build-detail',
            template: __webpack_require__(/*! raw-loader!./static-analysis-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.html"),
            styles: [__webpack_require__(/*! ./static-analysis-detail.component.scss */ "./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StaticAnalysisDetailComponent);
    return StaticAnalysisDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-routing-module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-routing-module.ts ***!
  \**********************************************************************************/
/*! exports provided: StaticAnalysisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisRoutingModule", function() { return StaticAnalysisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-analysis-widget/static-analysis-widget.component */ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.ts");




var routes = [];
var StaticAnalysisRoutingModule = /** @class */ (function () {
    function StaticAnalysisRoutingModule() {
    }
    StaticAnalysisRoutingModule.components = [_static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_3__["StaticAnalysisWidgetComponent"]];
    StaticAnalysisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaticAnalysisRoutingModule);
    return StaticAnalysisRoutingModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-charts.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-charts.ts ***!
  \*************************************************************************************************/
/*! exports provided: STATICANALYSIS_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATICANALYSIS_CHARTS", function() { return STATICANALYSIS_CHARTS; });
/* harmony import */ var _shared_charts_number_card_chart_number_card_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/charts/number-card-chart/number-card-chart.component */ "./src/app/shared/charts/number-card-chart/number-card-chart.component.ts");
/* harmony import */ var _shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");
/* harmony import */ var _shared_charts_pie_grid_chart_pie_grid_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/charts/pie-grid-chart/pie-grid-chart.component */ "./src/app/shared/charts/pie-grid-chart/pie-grid-chart.component.ts");



var STATICANALYSIS_CHARTS = [
    {
        title: 'Project Details',
        component: _shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_1__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: '',
    },
    {
        title: 'Coverage',
        component: _shared_charts_pie_grid_chart_pie_grid_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieGridChartComponent"],
        data: {
            results: [
                {
                    name: '',
                    value: 0,
                }
            ],
            designatedTotal: 100.0,
            label: 'Lines of Code',
            useCustomLabelValue: true,
            customLabelValue: 0,
        },
        xAxisLabel: '',
        yAxisLabel: '',
        scaleFactor: 0.85,
        colorScheme: 'forest',
    },
    {
        title: 'Issues',
        component: _shared_charts_number_card_chart_number_card_chart_component__WEBPACK_IMPORTED_MODULE_0__["NumberCardChartComponent"],
        data: [
            {
                name: 'Blocker Violations',
                value: 0,
            },
            {
                name: 'Critical Violations',
                value: 0,
            },
            {
                name: 'Major Violations',
                value: 0,
            },
            {
                name: 'Total Issues',
                value: 0,
            }
        ],
        xAxisLabel: '',
        yAxisLabel: '',
        scaleFactor: 0.55,
        colorScheme: 'flame',
    },
    {
        title: 'Unit Test Metrics',
        component: _shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_1__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: '',
    },
];


/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3N0YXRpYy1hbmFseXNpcy9zdGF0aWMtYW5hbHlzaXMtd2lkZ2V0L3N0YXRpYy1hbmFseXNpcy13aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: StaticAnalysisWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisWidgetComponent", function() { return StaticAnalysisWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var src_app_shared_layouts_two_by_two_layout_two_by_two_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/layouts/two-by-two-layout/two-by-two-layout.component */ "./src/app/shared/layouts/two-by-two-layout/two-by-two-layout.component.ts");
/* harmony import */ var src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var _static_analysis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static-analysis.service */ "./src/app/widget_modules/static-analysis/static-analysis.service.ts");
/* harmony import */ var _static_analysis_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static-analysis-charts */ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-charts.ts");
/* harmony import */ var _static_analysis_detail_static_analysis_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static-analysis-detail/static-analysis-detail.component */ "./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");













var StaticAnalysisWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StaticAnalysisWidgetComponent, _super);
    function StaticAnalysisWidgetComponent(componentFactoryResolver, cdr, dashboardService, staticAnalysisService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.staticAnalysisService = staticAnalysisService;
        // Code Quality Metric Field Names
        _this.staticAnalysisMetrics = {
            // quality gate
            qualityGateDetails: 'quality_gate_details',
            alertStatus: 'alert_status',
            techDebt: 'sqale_index',
            // violations
            totalIssues: 'violations',
            blockerViolations: 'blocker_violations',
            criticalViolations: 'critical_violations',
            majorViolations: 'major_violations',
            // coverage
            codeCoverage: 'coverage',
            lineCoverage: 'line_coverage',
            numCodeLines: 'ncloc',
            // vulnerabilities
            newVulnerabilities: 'new_vulnerabilities',
            // unit test metrics
            testSuccesses: 'test_success_density',
            testFailures: 'test_failures',
            testErrors: 'test_errors',
            totalTests: 'tests',
        };
        // Code Quality Quality Gate Status Names
        _this.qualityGateStatuses = {
            OK: 'OK',
            WARN: 'WARN',
            FAILED: 'ERROR',
        };
        return _this;
    }
    // Initialize the widget and set layout and charts.
    StaticAnalysisWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'codeanalysis0';
        this.layout = src_app_shared_layouts_two_by_two_layout_two_by_two_layout_component__WEBPACK_IMPORTED_MODULE_6__["TwoByTwoLayoutComponent"];
        this.charts = _static_analysis_charts__WEBPACK_IMPORTED_MODULE_9__["STATICANALYSIS_CHARTS"];
        this.auditType = 'CODE_QUALITY';
        this.init();
    };
    // After the view is ready start the refresh interval.
    StaticAnalysisWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    StaticAnalysisWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    // Start a subscription to the widget configuration for this widget and refresh the graphs each
    // cycle.
    StaticAnalysisWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(-1), // Refresh this widget seperate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                _this.widgetConfigExists = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            _this.widgetConfigExists = true;
            // check if collector item type is tied to dashboard
            // if true, set state to READY, otherwise keep at default CONFIGURE
            if (_this.dashboardService.checkCollectorItemTypeExist('CodeQuality')) {
                _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_12__["WidgetState"].READY;
            }
            return _this.staticAnalysisService.fetchStaticAnalysis(widgetConfig.componentId, 1);
        })).subscribe(function (result) {
            _this.hasData = result && result.length > 0;
            if (_this.hasData) {
                _this.loadCharts(result[0]);
            }
            else {
                // code quality collector item could not be found
                _this.setDefaultIfNoData();
            }
        });
        // for quality widget, subscribe to updates from other quality components
        this.dashboardService.dashboardQualityConfig$.subscribe(function (result) {
            if (result) {
                _this.widgetConfigSubject.next(result);
            }
            else {
                _this.widgetConfigSubject.next();
            }
        });
    };
    // Unsubscribe from the widget refresh observable, which stops widget updating.
    StaticAnalysisWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    StaticAnalysisWidgetComponent.prototype.loadCharts = function (result) {
        this.generateProjectDetails(result);
        this.generateViolations(result);
        this.generateCoverage(result);
        this.generateUnitTestMetrics(result);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    // *********************** DETAILS/QUALITY *********************
    StaticAnalysisWidgetComponent.prototype.generateProjectDetails = function (result) {
        var _this = this;
        var qualityGate = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.alertStatus; });
        var techDebt = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.techDebt; });
        var latestDetails = [
            {
                status: null,
                statusText: '',
                title: 'Name',
                subtitles: [result.name],
            },
            {
                status: null,
                statusText: '',
                title: 'Version',
                subtitles: [result.version],
            },
            {
                status: null,
                statusText: '',
                title: 'Quality Gate',
                subtitles: [Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(qualityGate) ? '' : qualityGate.value],
            },
            {
                status: null,
                statusText: '',
                title: 'Technical Debt',
                subtitles: [Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(techDebt) ? '' : techDebt.formattedValue],
            },
        ];
        this.charts[0].data = {
            items: latestDetails,
            clickableContent: null,
            clickableHeader: _static_analysis_detail_static_analysis_detail_component__WEBPACK_IMPORTED_MODULE_10__["StaticAnalysisDetailComponent"],
            url: result.url,
            version: result.version,
            name: result.name,
            timestamp: new Date(result.timestamp),
        };
    };
    // *********************** COVERAGE (CODE) ****************************
    StaticAnalysisWidgetComponent.prototype.generateCoverage = function (result) {
        var _this = this;
        var coverage = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.codeCoverage; });
        var loc = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.numCodeLines; });
        this.charts[1].data.results[0].value = Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(coverage) ? 0 : parseFloat(coverage.value);
        this.charts[1].data.customLabelValue = Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(loc) ? 0 : parseFloat(loc.value);
    };
    // *********************** VIOLATIONS *****************************
    StaticAnalysisWidgetComponent.prototype.generateViolations = function (result) {
        var _this = this;
        var blocker = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.blockerViolations; });
        var critical = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.criticalViolations; });
        var major = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.majorViolations; });
        var total = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.totalIssues; });
        this.charts[2].data[0].value = Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(blocker) ? 0 : parseFloat(blocker.value);
        this.charts[2].data[1].value = Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(critical) ? 0 : parseFloat(critical.value);
        this.charts[2].data[2].value = Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(major) ? 0 : parseFloat(major.value);
        this.charts[2].data[3].value = Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(total) ? 0 : parseFloat(total.value);
    };
    // *********************** UNIT TEST METRICS ****************************
    StaticAnalysisWidgetComponent.prototype.generateUnitTestMetrics = function (result) {
        var _this = this;
        var testSuccesses = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.testSuccesses; });
        var testFailures = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.testFailures; });
        var testErrors = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.testErrors; });
        var totalTests = result.metrics.find(function (metric) { return metric.name === _this.staticAnalysisMetrics.totalTests; });
        var latestDetails = [
            {
                status: null,
                statusText: '',
                title: 'Success',
                subtitles: [Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(testSuccesses) ? '' : (parseFloat(testSuccesses.value) / 100) * parseInt(totalTests.value, 10)],
            },
            {
                status: null,
                statusText: '',
                title: 'Failures',
                subtitles: [Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(testFailures) ? '' : testFailures.value],
            },
            {
                status: null,
                statusText: '',
                title: 'Errors',
                subtitles: [Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(testErrors) ? '' : testErrors.value],
            },
            {
                status: null,
                statusText: '',
                title: 'Total Tests',
                subtitles: [Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(totalTests) ? '' : totalTests.value],
            },
        ];
        this.charts[3].data = {
            items: latestDetails,
            clickableContent: null,
            clickableHeader: null,
        };
    };
    StaticAnalysisWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (!this.hasData) {
            this.charts[0].data = { items: [{ title: 'No Data Found' }] };
            this.charts[1].data.results[0].value = 0;
            this.charts[1].data.customLabelValue = 0;
            this.charts[2].data[0].value = 0;
            this.charts[2].data[1].value = 0;
            this.charts[2].data[2].value = 0;
            this.charts[2].data[3].value = 0;
            this.charts[3].data = { items: [{ title: 'No Data Found' }] };
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    StaticAnalysisWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
        { type: _static_analysis_service__WEBPACK_IMPORTED_MODULE_8__["StaticAnalysisService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"])
    ], StaticAnalysisWidgetComponent.prototype, "childLayoutTag", void 0);
    StaticAnalysisWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-analysis-widget',
            template: __webpack_require__(/*! raw-loader!./static-analysis-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.html"),
            styles: [__webpack_require__(/*! ./static-analysis-widget.component.scss */ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _static_analysis_service__WEBPACK_IMPORTED_MODULE_8__["StaticAnalysisService"]])
    ], StaticAnalysisWidgetComponent);
    return StaticAnalysisWidgetComponent;
}(src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_7__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis.module.ts ***!
  \**************************************************************************/
/*! exports provided: StaticAnalysisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisModule", function() { return StaticAnalysisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _static_anaylsis_config_form_static_analysis_config_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static-anaylsis-config-form/static-analysis-config-form.component */ "./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.ts");
/* harmony import */ var _static_analysis_detail_static_analysis_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static-analysis-detail/static-analysis-detail.component */ "./src/app/widget_modules/static-analysis/static-analysis-detail/static-analysis-detail.component.ts");
/* harmony import */ var _static_analysis_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static-analysis-routing-module */ "./src/app/widget_modules/static-analysis/static-analysis-routing-module.ts");
/* harmony import */ var _static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static-analysis-widget/static-analysis-widget.component */ "./src/app/widget_modules/static-analysis/static-analysis-widget/static-analysis-widget.component.ts");
/* harmony import */ var _static_analysis_delete_form_static_analysis_delete_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static-analysis-delete-form/static-analysis-delete-form.component */ "./src/app/widget_modules/static-analysis/static-analysis-delete-form/static-analysis-delete-form.component.ts");










var StaticAnalysisModule = /** @class */ (function () {
    function StaticAnalysisModule() {
    }
    StaticAnalysisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_8__["StaticAnalysisWidgetComponent"], _static_anaylsis_config_form_static_analysis_config_form_component__WEBPACK_IMPORTED_MODULE_5__["StaticAnalysisConfigFormComponent"], _static_analysis_detail_static_analysis_detail_component__WEBPACK_IMPORTED_MODULE_6__["StaticAnalysisDetailComponent"],
                _static_analysis_delete_form_static_analysis_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["StaticAnalysisDeleteFormComponent"]],
            entryComponents: [_static_analysis_widget_static_analysis_widget_component__WEBPACK_IMPORTED_MODULE_8__["StaticAnalysisWidgetComponent"], _static_anaylsis_config_form_static_analysis_config_form_component__WEBPACK_IMPORTED_MODULE_5__["StaticAnalysisConfigFormComponent"], _static_analysis_detail_static_analysis_detail_component__WEBPACK_IMPORTED_MODULE_6__["StaticAnalysisDetailComponent"],
                _static_analysis_delete_form_static_analysis_delete_form_component__WEBPACK_IMPORTED_MODULE_9__["StaticAnalysisDeleteFormComponent"]],
            imports: [
                _static_analysis_routing_module__WEBPACK_IMPORTED_MODULE_7__["StaticAnalysisRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            exports: [],
        })
    ], StaticAnalysisModule);
    return StaticAnalysisModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-analysis.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-analysis.service.ts ***!
  \***************************************************************************/
/*! exports provided: StaticAnalysisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisService", function() { return StaticAnalysisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var StaticAnalysisService = /** @class */ (function () {
    function StaticAnalysisService(http) {
        this.http = http;
        this.staticAnalysisRoute = '/api/quality/static-analysis';
    }
    StaticAnalysisService.prototype.getParams = function (componentId, max) {
        return {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('componentId', componentId).set('max', max.toString())
        };
    };
    StaticAnalysisService.prototype.fetchStaticAnalysis = function (componentId, max) {
        return this.http.get(this.staticAnalysisRoute, this.getParams(componentId, max)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.result; }));
    };
    StaticAnalysisService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    StaticAnalysisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StaticAnalysisService);
    return StaticAnalysisService;
}());



/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc3RhdGljLWFuYWx5c2lzL3N0YXRpYy1hbmF5bHNpcy1jb25maWctZm9ybS9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xcc3RhdGljLWFuYWx5c2lzXFxzdGF0aWMtYW5heWxzaXMtY29uZmlnLWZvcm1cXHN0YXRpYy1hbmFseXNpcy1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvc3RhdGljLWFuYWx5c2lzL3N0YXRpYy1hbmF5bHNpcy1jb25maWctZm9ybS9zdGF0aWMtYW5hbHlzaXMtY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRfbW9kdWxlcy9zdGF0aWMtYW5hbHlzaXMvc3RhdGljLWFuYXlsc2lzLWNvbmZpZy1mb3JtL3N0YXRpYy1hbmFseXNpcy1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjaywgLnJlcXVpcmVkLXRleHQge1xuICBjb2xvcjpvcmFuZ2VyZWQ7XG59XG4iLCIubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2ssIC5yZXF1aXJlZC10ZXh0IHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StaticAnalysisConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticAnalysisConfigFormComponent", function() { return StaticAnalysisConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");








var StaticAnalysisConfigFormComponent = /** @class */ (function () {
    function StaticAnalysisConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.searching = false;
        this.searchFailed = false;
        this.getStaticAnalysisTitle = function (collectorItem) {
            if (!collectorItem) {
                return '';
            }
            var description = collectorItem.description;
            return collectorItem.niceName + ' : ' + description;
        };
        this.createForm();
    }
    Object.defineProperty(StaticAnalysisConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
            this.staticAnalysisConfigForm.get('staticAnalysisJob').setValue(widgetConfig.collectorItemId);
        },
        enumerable: true,
        configurable: true
    });
    StaticAnalysisConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.typeAheadResults = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.searching = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (term) {
                return term.length < 2 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItems('codequality', term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (val) {
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
        this.loadSavedCodeQualityJob();
        this.getDashboardComponent();
    };
    StaticAnalysisConfigFormComponent.prototype.createForm = function () {
        this.staticAnalysisConfigForm = this.formBuilder.group({
            staticAnalysisJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    StaticAnalysisConfigFormComponent.prototype.submitForm = function () {
        var newConfig = {
            name: 'codeanalysis',
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'codeanalysis0',
            },
            componentId: this.componentId,
            collectorItemId: this.staticAnalysisConfigForm.value.staticAnalysisJob.id
        };
        this.activeModal.close(newConfig);
    };
    StaticAnalysisConfigFormComponent.prototype.loadSavedCodeQualityJob = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            var sonarCollector = dashboard.application.components[0].collectorItems.CodeQuality;
            var savedCollectorCodeQuality = sonarCollector ? sonarCollector[0].description : null;
            if (savedCollectorCodeQuality) {
                var codeQualityId = sonarCollector[0].id;
                return codeQualityId;
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (codeQualityId) {
            if (codeQualityId) {
                return _this.collectorService.getItemsById(codeQualityId);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        })).subscribe(function (collectorData) {
            _this.staticAnalysisConfigForm.get('staticAnalysisJob').setValue(collectorData);
        });
    };
    StaticAnalysisConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(StaticAnalysisConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.staticAnalysisConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    StaticAnalysisConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], StaticAnalysisConfigFormComponent.prototype, "widgetConfig", null);
    StaticAnalysisConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-static-analysis-config-form',
            template: __webpack_require__(/*! raw-loader!./static-analysis-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.html"),
            styles: [__webpack_require__(/*! ./static-analysis-config-form.component.scss */ "./src/app/widget_modules/static-analysis/static-anaylsis-config-form/static-analysis-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_6__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]])
    ], StaticAnalysisConfigFormComponent);
    return StaticAnalysisConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/test/interfaces.ts":
/*!***************************************************!*\
  !*** ./src/app/widget_modules/test/interfaces.ts ***!
  \***************************************************/
/*! exports provided: TestType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestType", function() { return TestType; });
var TestType;
(function (TestType) {
    TestType["Functional"] = "Functional";
    TestType["Performance"] = "Performance";
})(TestType || (TestType = {}));


/***/ }),

/***/ "./src/app/widget_modules/test/test-config-form/test-config-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-config-form/test-config-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n  background-color: lightgray;\n}\n\n.modal-footer {\n  background-color: lightgray;\n}\n\n.invalid-feedback, .required-text {\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvdGVzdC90ZXN0LWNvbmZpZy1mb3JtL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXHdpZGdldF9tb2R1bGVzXFx0ZXN0XFx0ZXN0LWNvbmZpZy1mb3JtXFx0ZXN0LWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy90ZXN0L3Rlc3QtY29uZmlnLWZvcm0vdGVzdC1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3Rlc3QvdGVzdC1jb25maWctZm9ybS90ZXN0LWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrLCAucmVxdWlyZWQtdGV4dCB7XG4gIGNvbG9yOm9yYW5nZXJlZDtcbn1cbiIsIi5tb2RhbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uaW52YWxpZC1mZWVkYmFjaywgLnJlcXVpcmVkLXRleHQge1xuICBjb2xvcjogb3JhbmdlcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget_modules/test/test-config-form/test-config-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-config-form/test-config-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: TestConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestConfigFormComponent", function() { return TestConfigFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/collector.service */ "./src/app/shared/collector.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interfaces */ "./src/app/widget_modules/test/interfaces.ts");









var TestConfigFormComponent = /** @class */ (function () {
    function TestConfigFormComponent(activeModal, formBuilder, collectorService, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.collectorService = collectorService;
        this.dashboardService = dashboardService;
        this.COLLECTOR_ITEM_TYPE = 'Test';
        this.searchingFunctional = false;
        this.searchingPerformance = false;
        this.searchFunctionalFailed = false;
        this.searchPerformanceFailed = false;
        this.createForm();
    }
    // Format test result title
    TestConfigFormComponent.prototype.getTestResultTitle = function (collectorItem) {
        return collectorItem ? collectorItem.niceName + ' : ' + collectorItem.description : '';
    };
    Object.defineProperty(TestConfigFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
        },
        enumerable: true,
        configurable: true
    });
    TestConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadSavedTestResults();
        this.getDashboardComponent();
        this.typeAheadResultsPerformance = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchingPerformance = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return term.length < 1 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItems(_this.COLLECTOR_ITEM_TYPE, term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchPerformanceFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                        }
                        _this.searchPerformanceFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                        _this.searchPerformanceFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchingPerformance = false; }));
        };
        this.typeAheadResultsFunctional = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchingFunctional = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) {
                return term.length < 1 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]) :
                    _this.collectorService.searchItems(_this.COLLECTOR_ITEM_TYPE, term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) {
                        if (!val || val.length === 0) {
                            _this.searchFunctionalFailed = true;
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                        }
                        _this.searchFunctionalFailed = false;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
                        _this.searchFunctionalFailed = true;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
                    }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.searchingFunctional = false; }));
        };
    };
    TestConfigFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    // Create forms for each test collector item and load them into respective form arrays
    TestConfigFormComponent.prototype.loadSavedTestResults = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (dashboard) {
            var e_1, _a;
            var testCollectorItems = dashboard.application.components[0].collectorItems.Test;
            if (!testCollectorItems) {
                return;
            }
            var functionalTestCount = 0;
            var performanceTestCount = 0;
            try {
                for (var testCollectorItems_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](testCollectorItems), testCollectorItems_1_1 = testCollectorItems_1.next(); !testCollectorItems_1_1.done; testCollectorItems_1_1 = testCollectorItems_1.next()) {
                    var testCollectorItem = testCollectorItems_1_1.value;
                    if (testCollectorItem.options.testType === _interfaces__WEBPACK_IMPORTED_MODULE_8__["TestType"].Functional.toString()) {
                        _this.addFunctionalTest();
                        _this.functionalTests.controls[functionalTestCount].get('test').setValue(testCollectorItem);
                        functionalTestCount++;
                    }
                    else if (testCollectorItem.options.testType === _interfaces__WEBPACK_IMPORTED_MODULE_8__["TestType"].Performance.toString()) {
                        _this.addPerformanceTest();
                        _this.performanceTests.controls[performanceTestCount].get('test').setValue(testCollectorItem);
                        performanceTestCount++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (testCollectorItems_1_1 && !testCollectorItems_1_1.done && (_a = testCollectorItems_1.return)) _a.call(testCollectorItems_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    TestConfigFormComponent.prototype.createForm = function () {
        this.testConfigForm = this.formBuilder.group({
            functionalTests: this.formBuilder.array([]),
            performanceTests: this.formBuilder.array([]),
        });
    };
    Object.defineProperty(TestConfigFormComponent.prototype, "functionalTests", {
        get: function () {
            return this.testConfigForm.get('functionalTests');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestConfigFormComponent.prototype, "performanceTests", {
        get: function () {
            return this.testConfigForm.get('performanceTests');
        },
        enumerable: true,
        configurable: true
    });
    TestConfigFormComponent.prototype.addFunctionalTest = function () {
        var test = this.formBuilder.group({
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.functionalTests.push(test);
    };
    TestConfigFormComponent.prototype.addPerformanceTest = function () {
        var test = this.formBuilder.group({
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
        this.performanceTests.push(test);
    };
    TestConfigFormComponent.prototype.deleteFunctionalTest = function (i) {
        this.functionalTests.removeAt(i);
    };
    TestConfigFormComponent.prototype.deletePerformanceTest = function (i) {
        this.performanceTests.removeAt(i);
    };
    // Create new config which will be posted to database
    TestConfigFormComponent.prototype.submitForm = function () {
        var e_2, _a, e_3, _b;
        var newConfig = {
            name: 'codeanalysis',
            options: {
                id: this.widgetConfigId ? this.widgetConfigId : 'codeanalysis0'
            },
            componentId: this.componentId,
            collectorItemIds: []
        };
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.functionalTests.controls), _d = _c.next(); !_d.done; _d = _c.next()) {
                var control = _d.value;
                if (control.value.test.id !== undefined) {
                    newConfig.collectorItemIds.push(control.value.test.id);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.performanceTests.controls), _f = _e.next(); !_f.done; _f = _e.next()) {
                var control = _f.value;
                if (control.value.test.id !== undefined) {
                    newConfig.collectorItemIds.push(control.value.test.id);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.activeModal.close(newConfig);
    };
    Object.defineProperty(TestConfigFormComponent.prototype, "configForm", {
        // convenience getter for easy access to form fields
        get: function () { return this.testConfigForm.controls; },
        enumerable: true,
        configurable: true
    });
    TestConfigFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_7__["CollectorService"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TestConfigFormComponent.prototype, "widgetConfig", null);
    TestConfigFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-config-form',
            template: __webpack_require__(/*! raw-loader!./test-config-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-config-form/test-config-form.component.html"),
            styles: [__webpack_require__(/*! ./test-config-form.component.scss */ "./src/app/widget_modules/test/test-config-form/test-config-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_shared_collector_service__WEBPACK_IMPORTED_MODULE_7__["CollectorService"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], TestConfigFormComponent);
    return TestConfigFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/test/test-delete-form/test-delete-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-delete-form/test-delete-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3Rlc3QvdGVzdC1kZWxldGUtZm9ybS90ZXN0LWRlbGV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/widget_modules/test/test-delete-form/test-delete-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-delete-form/test-delete-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: TestDeleteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDeleteFormComponent", function() { return TestDeleteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interfaces */ "./src/app/widget_modules/test/interfaces.ts");







var TestDeleteFormComponent = /** @class */ (function () {
    function TestDeleteFormComponent(activeModal, formBuilder, dashboardService) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.dashboardService = dashboardService;
        // buttons
        this.confirm = 'Confirm';
        this.cancel = 'Cancel';
        this.message = 'This test item will be deleted immediately. Would you like to delete?';
        this.createDeleteForm();
    }
    Object.defineProperty(TestDeleteFormComponent.prototype, "widgetConfig", {
        set: function (widgetConfig) {
            if (!widgetConfig) {
                return;
            }
            this.widgetConfigId = widgetConfig.options.id;
        },
        enumerable: true,
        configurable: true
    });
    TestDeleteFormComponent.prototype.ngOnInit = function () {
        this.getSavedTestResults();
        this.getDashboardComponent();
    };
    TestDeleteFormComponent.prototype.createDeleteForm = function () {
        this.testDeleteForm = this.formBuilder.group({
            functionalTests: this.formBuilder.array([]),
            performanceTests: this.formBuilder.array([]),
        });
    };
    TestDeleteFormComponent.prototype.getSavedTestResults = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (dashboard) {
            var e_1, _a;
            var testCollectorItems = dashboard.application.components[0].collectorItems.Test;
            if (!testCollectorItems) {
                return;
            }
            var functionalTestCount = 0;
            var performanceTestCount = 0;
            try {
                for (var testCollectorItems_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](testCollectorItems), testCollectorItems_1_1 = testCollectorItems_1.next(); !testCollectorItems_1_1.done; testCollectorItems_1_1 = testCollectorItems_1.next()) {
                    var testCollectorItem = testCollectorItems_1_1.value;
                    if (testCollectorItem.options.testType === _interfaces__WEBPACK_IMPORTED_MODULE_6__["TestType"].Functional.toString()) {
                        _this.addFunctionalTest();
                        _this.functionalTests.controls[functionalTestCount].get('test').setValue(testCollectorItem);
                        functionalTestCount++;
                    }
                    else if (testCollectorItem.options.testType === _interfaces__WEBPACK_IMPORTED_MODULE_6__["TestType"].Performance.toString()) {
                        _this.addPerformanceTest();
                        _this.performanceTests.controls[performanceTestCount].get('test').setValue(testCollectorItem);
                        performanceTestCount++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (testCollectorItems_1_1 && !testCollectorItems_1_1.done && (_a = testCollectorItems_1.return)) _a.call(testCollectorItems_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    TestDeleteFormComponent.prototype.submitDeleteForm = function () {
        var e_2, _a, e_3, _b;
        var deleteConfig = {
            name: 'codeanalysis',
            options: {
                id: this.widgetConfigId
            },
            componentId: this.componentId,
            collectorItemIds: []
        };
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.functionalTests.controls), _d = _c.next(); !_d.done; _d = _c.next()) {
                var control = _d.value;
                if (control.value.test.id !== undefined) {
                    deleteConfig.collectorItemIds.push(control.value.test.id);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.performanceTests.controls), _f = _e.next(); !_f.done; _f = _e.next()) {
                var control = _f.value;
                if (control.value.test.id !== undefined) {
                    deleteConfig.collectorItemIds.push(control.value.test.id);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.activeModal.close(deleteConfig);
    };
    TestDeleteFormComponent.prototype.getDashboardComponent = function () {
        var _this = this;
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dashboard) {
            return dashboard.application.components[0].id;
        })).subscribe(function (componentId) { return _this.componentId = componentId; });
    };
    Object.defineProperty(TestDeleteFormComponent.prototype, "functionalTests", {
        get: function () {
            return this.testDeleteForm.get('functionalTests');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestDeleteFormComponent.prototype, "performanceTests", {
        get: function () {
            return this.testDeleteForm.get('performanceTests');
        },
        enumerable: true,
        configurable: true
    });
    TestDeleteFormComponent.prototype.addFunctionalTest = function () {
        var test = this.formBuilder.group({
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.functionalTests.push(test);
    };
    TestDeleteFormComponent.prototype.addPerformanceTest = function () {
        var test = this.formBuilder.group({
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.performanceTests.push(test);
    };
    TestDeleteFormComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TestDeleteFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TestDeleteFormComponent.prototype, "widgetConfig", null);
    TestDeleteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-delete-form',
            template: __webpack_require__(/*! raw-loader!./test-delete-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-delete-form/test-delete-form.component.html"),
            styles: [__webpack_require__(/*! ./test-delete-form.component.scss */ "./src/app/widget_modules/test/test-delete-form/test-delete-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]])
    ], TestDeleteFormComponent);
    return TestDeleteFormComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/test/test-detail/test-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-detail/test-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-check {\n  color: #49d626;\n}\n\n.fa-times {\n  color: red;\n}\n\n.fa-warning {\n  color: orange;\n}\n\n.testCapabilityDescription {\n  width: 65%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvdGVzdC90ZXN0LWRldGFpbC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx3aWRnZXRfbW9kdWxlc1xcdGVzdFxcdGVzdC1kZXRhaWxcXHRlc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93aWRnZXRfbW9kdWxlcy90ZXN0L3Rlc3QtZGV0YWlsL3Rlc3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdBO0VBQ0UsVUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0X21vZHVsZXMvdGVzdC90ZXN0LWRldGFpbC90ZXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1jaGVjayB7XG4gIGNvbG9yOiAjNDlkNjI2XG59XG5cbi5mYS10aW1lcyB7XG4gIGNvbG9yOiByZWRcbn1cblxuLmZhLXdhcm5pbmcge1xuICBjb2xvcjogb3JhbmdlXG59XG5cblxuLnRlc3RDYXBhYmlsaXR5RGVzY3JpcHRpb24ge1xuICB3aWR0aDogNjUlO1xufVxuIiwiLmZhLWNoZWNrIHtcbiAgY29sb3I6ICM0OWQ2MjY7XG59XG5cbi5mYS10aW1lcyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mYS13YXJuaW5nIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnRlc3RDYXBhYmlsaXR5RGVzY3JpcHRpb24ge1xuICB3aWR0aDogNjUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/widget_modules/test/test-detail/test-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-detail/test-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailComponent", function() { return TestDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var TestDetailComponent = /** @class */ (function () {
    function TestDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    TestDetailComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TestDetailComponent.prototype, "detailData", {
        set: function (data) {
            this.data = data.data;
        },
        enumerable: true,
        configurable: true
    });
    TestDetailComponent.prototype.hasData = function () {
        return this.data !== undefined;
    };
    TestDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"])
    ], TestDetailComponent.prototype, "detailView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TestDetailComponent.prototype, "detailData", null);
    TestDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-detail',
            template: __webpack_require__(/*! raw-loader!./test-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-detail/test-detail.component.html"),
            styles: [__webpack_require__(/*! ./test-detail.component.scss */ "./src/app/widget_modules/test/test-detail/test-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], TestDetailComponent);
    return TestDetailComponent;
}());



/***/ }),

/***/ "./src/app/widget_modules/test/test-widget/test-charts.ts":
/*!****************************************************************!*\
  !*** ./src/app/widget_modules/test/test-widget/test-charts.ts ***!
  \****************************************************************/
/*! exports provided: TEST_CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_CHARTS", function() { return TEST_CHARTS; });
/* harmony import */ var src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/charts/click-list/click-list.component */ "./src/app/shared/charts/click-list/click-list.component.ts");

var TEST_CHARTS = [
    {
        title: 'Functional',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    },
    {
        title: 'Performance',
        component: src_app_shared_charts_click_list_click_list_component__WEBPACK_IMPORTED_MODULE_0__["ClickListComponent"],
        data: [],
        xAxisLabel: '',
        yAxisLabel: '',
        colorScheme: {}
    }
];


/***/ }),

/***/ "./src/app/widget_modules/test/test-widget/test-widget.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-widget/test-widget.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldF9tb2R1bGVzL3Rlc3QvdGVzdC13aWRnZXQvdGVzdC13aWRnZXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/widget_modules/test/test-widget/test-widget.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/widget_modules/test/test-widget/test-widget.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestWidgetComponent", function() { return TestWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/widget/widget.component */ "./src/app/shared/widget/widget.component.ts");
/* harmony import */ var src_app_shared_layouts_one_by_two_layout_one_by_two_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/layouts/one-by-two-layout/one-by-two-layout.component */ "./src/app/shared/layouts/one-by-two-layout/one-by-two-layout.component.ts");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../test.service */ "./src/app/widget_modules/test/test.service.ts");
/* harmony import */ var src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dashboard.service */ "./src/app/shared/dashboard.service.ts");
/* harmony import */ var _test_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-charts */ "./src/app/widget_modules/test/test-widget/test-charts.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/layouts/layout.directive */ "./src/app/shared/layouts/layout.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../interfaces */ "./src/app/widget_modules/test/interfaces.ts");
/* harmony import */ var _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../test-detail/test-detail.component */ "./src/app/widget_modules/test/test-detail/test-detail.component.ts");
/* harmony import */ var _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/widget-header/widget-state */ "./src/app/shared/widget-header/widget-state.ts");













var TestWidgetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TestWidgetComponent, _super);
    function TestWidgetComponent(componentFactoryResolver, cdr, dashboardService, testService) {
        var _this = _super.call(this, componentFactoryResolver, cdr, dashboardService) || this;
        _this.testService = testService;
        return _this;
    }
    TestWidgetComponent.prototype.ngOnInit = function () {
        this.widgetId = 'codeanalysis0';
        this.layout = src_app_shared_layouts_one_by_two_layout_one_by_two_layout_component__WEBPACK_IMPORTED_MODULE_3__["OneByTwoLayoutComponent"];
        this.charts = _test_charts__WEBPACK_IMPORTED_MODULE_6__["TEST_CHARTS"];
        this.auditType = ['TEST_RESULT', 'PERF_TEST'];
        this.init();
    };
    TestWidgetComponent.prototype.ngAfterViewInit = function () {
        this.startRefreshInterval();
    };
    TestWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopRefreshInterval();
    };
    TestWidgetComponent.prototype.startRefreshInterval = function () {
        var _this = this;
        this.intervalRefreshSubscription = this.dashboardService.dashboardRefresh$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(-1), // Refresh this widget seperate from dashboard (ex. config is updated)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), // If dashboard is loaded the first time, ignore widget double refresh
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (_) { return _this.getCurrentWidgetConfig(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (widgetConfig) {
            if (!widgetConfig) {
                _this.widgetConfigExists = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])([]);
            }
            _this.widgetConfigExists = true;
            // check if collector item type is tied to dashboard
            // if true, set state to READY, otherwise keep at default CONFIGURE
            if (_this.dashboardService.checkCollectorItemTypeExist('Test')) {
                _this.state = _shared_widget_header_widget_state__WEBPACK_IMPORTED_MODULE_12__["WidgetState"].READY;
            }
            var funcTest$ = _this.testService.fetchTestResults(widgetConfig.componentId, 1, 4, [_interfaces__WEBPACK_IMPORTED_MODULE_10__["TestType"].Functional]);
            var perfTest$ = _this.testService.fetchTestResults(widgetConfig.componentId, 1, 4, [_interfaces__WEBPACK_IMPORTED_MODULE_10__["TestType"].Performance]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])([funcTest$, perfTest$]);
        })).subscribe(function (result) {
            var tests = Array.prototype.concat.apply([], result);
            _this.hasData = (tests && tests.length > 0);
            if (_this.hasData) {
                _this.loadCharts(tests);
            }
            else {
                _this.setDefaultIfNoData();
            }
        });
        // for quality widget, subscribe to updates from other quality components
        this.dashboardService.dashboardQualityConfig$.subscribe(function (result) {
            if (result) {
                _this.widgetConfigSubject.next(result);
            }
            else {
                _this.widgetConfigSubject.next();
            }
        });
    };
    TestWidgetComponent.prototype.stopRefreshInterval = function () {
        if (this.intervalRefreshSubscription) {
            this.intervalRefreshSubscription.unsubscribe();
        }
    };
    TestWidgetComponent.prototype.loadCharts = function (tests) {
        this.generateTestChart(tests);
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    // ************************* Generate chart *************************
    TestWidgetComponent.prototype.generateTestChart = function (tests) {
        var _this = this;
        var chartItems = {};
        // Generate chart item for each TEST collector item
        this.dashboardService.dashboardConfig$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (dashboard) {
            var e_1, _a;
            var testCollectorItems = dashboard.application.components[0].collectorItems.Test;
            if (!testCollectorItems) {
                return;
            }
            var _loop_1 = function (testCollectorItem) {
                var type = testCollectorItem.options.testType;
                var tmp = tests.filter(function (test) { return test.collectorItemId === testCollectorItem.id; });
                var chartItem = _this.generateTestClickListChartItem(tmp, testCollectorItem.description);
                if (chartItems[type] === undefined) {
                    chartItems[type] = [];
                }
                chartItems[type].push(chartItem);
            };
            try {
                for (var testCollectorItems_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](testCollectorItems), testCollectorItems_1_1 = testCollectorItems_1.next(); !testCollectorItems_1_1.done; testCollectorItems_1_1 = testCollectorItems_1.next()) {
                    var testCollectorItem = testCollectorItems_1_1.value;
                    _loop_1(testCollectorItem);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (testCollectorItems_1_1 && !testCollectorItems_1_1.done && (_a = testCollectorItems_1.return)) _a.call(testCollectorItems_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        // Load chart items into charts
        this.charts[0].data = {
            items: chartItems[_interfaces__WEBPACK_IMPORTED_MODULE_10__["TestType"].Functional],
            clickableContent: _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_11__["TestDetailComponent"]
        };
        this.charts[1].data = {
            items: chartItems[_interfaces__WEBPACK_IMPORTED_MODULE_10__["TestType"].Performance],
            clickableContent: _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_11__["TestDetailComponent"]
        };
    };
    // ************************* Generate individual chart item *************************
    TestWidgetComponent.prototype.generateTestClickListChartItem = function (tests, title) {
        if (tests === undefined || tests.length === 0) {
            return {
                title: this.formatTitle(title, 100),
                subtitles: [
                    'No data found',
                    ''
                ]
            };
        }
        var test = tests[0];
        var successRate = ((test.successCount / test.totalCount) * 100).toFixed(0) + '%';
        return {
            title: this.formatTitle(title, 100),
            subtitles: [
                successRate,
                new Date(test.timestamp),
            ],
            data: test
        };
    };
    // ************************* HELPER FUNCTIONS *************************
    TestWidgetComponent.prototype.formatTitle = function (title, length) {
        var fit = title.length < length;
        return fit ? title : title.slice(0, length - 3) + '...';
    };
    TestWidgetComponent.prototype.setDefaultIfNoData = function () {
        if (!this.hasData) {
            this.charts[0].data = { items: [{ title: 'No Data Found' }] };
            this.charts[1].data = { items: [{ title: 'No Data Found' }] };
        }
        _super.prototype.loadComponent.call(this, this.childLayoutTag);
    };
    TestWidgetComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] },
        { type: _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_8__["LayoutDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_layouts_layout_directive__WEBPACK_IMPORTED_MODULE_8__["LayoutDirective"])
    ], TestWidgetComponent.prototype, "childLayoutTag", void 0);
    TestWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-widget',
            template: __webpack_require__(/*! raw-loader!./test-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/widget_modules/test/test-widget/test-widget.component.html"),
            styles: [__webpack_require__(/*! ./test-widget.component.sass */ "./src/app/widget_modules/test/test-widget/test-widget.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_shared_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"],
            _test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"]])
    ], TestWidgetComponent);
    return TestWidgetComponent;
}(src_app_shared_widget_widget_component__WEBPACK_IMPORTED_MODULE_2__["WidgetComponent"]));



/***/ }),

/***/ "./src/app/widget_modules/test/test.module.ts":
/*!****************************************************!*\
  !*** ./src/app/widget_modules/test/test.module.ts ***!
  \****************************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _test_config_form_test_config_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-config-form/test-config-form.component */ "./src/app/widget_modules/test/test-config-form/test-config-form.component.ts");
/* harmony import */ var _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-detail/test-detail.component */ "./src/app/widget_modules/test/test-detail/test-detail.component.ts");
/* harmony import */ var _test_widget_test_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-widget/test-widget.component */ "./src/app/widget_modules/test/test-widget/test-widget.component.ts");
/* harmony import */ var _test_delete_form_test_delete_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-delete-form/test-delete-form.component */ "./src/app/widget_modules/test/test-delete-form/test-delete-form.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_test_config_form_test_config_form_component__WEBPACK_IMPORTED_MODULE_3__["TestConfigFormComponent"], _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_4__["TestDetailComponent"], _test_widget_test_widget_component__WEBPACK_IMPORTED_MODULE_5__["TestWidgetComponent"], _test_delete_form_test_delete_form_component__WEBPACK_IMPORTED_MODULE_6__["TestDeleteFormComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"]
            ],
            entryComponents: [_test_widget_test_widget_component__WEBPACK_IMPORTED_MODULE_5__["TestWidgetComponent"], _test_detail_test_detail_component__WEBPACK_IMPORTED_MODULE_4__["TestDetailComponent"], _test_config_form_test_config_form_component__WEBPACK_IMPORTED_MODULE_3__["TestConfigFormComponent"], _test_delete_form_test_delete_form_component__WEBPACK_IMPORTED_MODULE_6__["TestDeleteFormComponent"]]
        })
    ], TestModule);
    return TestModule;
}());



/***/ }),

/***/ "./src/app/widget_modules/test/test.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/widget_modules/test/test.service.ts ***!
  \*****************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
        this.testDetailRoute = '/api/quality/test';
    }
    TestService.prototype.fetchTestResults = function (componentId, max, depth, type) {
        var params = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('componentId', componentId)
                .set('depth', depth.toFixed(0))
                .set('types', type.toString())
                .set('max', max.toFixed(0))
        };
        return this.http.get(this.testDetailRoute, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.result; }));
    };
    TestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ })

}]);
//# sourceMappingURL=screen_modules-team-dashboard-team-dashboard-module.js.map