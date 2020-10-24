(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_modules-admin_dashboard-admin-dashboard-modules"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"admin\">\n  <div class=\"col-md-2 dash\">\n    <ul class=\"nav nav-pills flex-column dash-nav\">\n      <li class=\"nav-item\"><a class=\"nav-link\" [ngClass]=\"{active:tab === 'editDashboards'}\"\n                              (click)=\"navigateToTab('editDashboards')\">Edit Dashboards</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [ngClass]=\"{active:tab === 'users'}\"\n                              (click)=\"navigateToTab('users')\">Manage Admins</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [ngClass]=\"{active:tab === 'apitokens'}\"\n                              (click)=\"navigateToTab('apitokens')\">Generate ApiTokens</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [ngClass]=\"{active:tab === 'auditconfig'}\"\n                              (click)=\"navigateToTab('auditconfig')\">Audit Configurations</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [ngClass]=\"{active:tab === 'featureflags'}\"\n                              (click)=\"navigateToTab('featureflags')\">Feature Flags</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [ngClass]=\"{active:tab === 'propertiesconfig'}\"\n                              (click)=\"navigateToTab('propertiesconfig')\">Properties Configuration</a></li>\n    </ul>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"col-md-9 dashcon\">\n      <div *ngIf=\"tab === 'editDashboards'\">\n        <app-edit-dashboard></app-edit-dashboard>\n      </div>\n      <div *ngIf=\"tab === 'templates'\">\n      </div>\n      <div *ngIf=\"tab === 'users'\">\n        <app-manage-admins></app-manage-admins>\n      </div>\n      <div *ngIf=\"tab === 'apitokens'\">\n        <app-generate-tokens></app-generate-tokens>\n      </div>\n      <div *ngIf=\"tab === 'configurations'\">\n      </div>\n      <div *ngIf=\"tab === 'auditconfig'\">\n        <app-service-accounts></app-service-accounts>\n      </div>\n      <div *ngIf=\"tab === 'featureflags'\">\n        <app-feature-flags></app-feature-flags>\n      </div>\n      <div *ngIf=\"tab === 'propertiesconfig'\">\n        <app-properties-builder></app-properties-builder>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"widget-modal\">\n        <div class=\"widget-modal-heading\">\n            Rename/Delete<br><br>Dashboard\n        </div>\n        <div class=\"widget-modal-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12 \">\n                    <input type=\"search\" name=\"collectorItemId\" class=\"form-control\"\n                        placeholder=\"Type to find dashboard\" [(ngModel)]=\"searchDashboard\" (change)=\"filterByTitle(searchDashboard)\" required>\n                </div>\n                <div class=\"col-md-8 col-push \">\n                    <div class=\"text-center\" [hidden]=\"dashboards\">Loading Dashboards...</div>\n\n                    <div class=\"list-animate\">\n                        <div class=\"dash-modal-row delete-dashboard-row clearfix\"\n                            *ngFor=\"let item of dashboards | generalFilter:{name:searchDashboard} | generalOrderBy: 'name' as filteredDashboards \">\n                            <div title=\"{{item.name}}\" class=\"btn-block\">{{item.name }}\n                                <a (click)=\"deleteDashboard(item)\">\n                                    <app-dash-trash class=\"clickable pull-right\"></app-dash-trash>\n                                </a>\n                                <app-dash-edit class=\"clickable pull-right\" (click)=\"editDashboard(item)\">\n                                </app-dash-edit>\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <app-pagination *ngIf=\"dashboards && dashboards.length\" [totalSize]=\"totalItems\"\n                            (pageChange)=\"getNextPage($event, false)\"></app-pagination>\n                    </div>\n                    <br />\n                    <div class=\"text-center\" [hidden]=\"!(dashboards && !dashboards.length)\">\n                        No results\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"widget-modal\">\n    <div class=\"widget-modal-heading\">\n      Feature Flags\n    </div>\n    <div class = \"table-content\">\n      <span class=\"col-xs-6\"><button type=\"button\" class=\"btn btn-dark btn-lg pull-right mb-2\" (click)=\"addNewFeatureFlag()\">New</button></span>\n      <input type=\"text\" class=\"form-control\" id=\"featureFlagsSearch\" placeholder=\"Filter Feature Flags\"\n             [(ngModel)]=\"featureFlagsSearch\">\n      <div class=\"dash-modal-row delete-dashboard-row clearfix\" style=\"font-size: 20px;\" *ngFor=\"let item of this.featureFlags | generalFilter:{name:featureFlagsSearch} | generalOrderBy:'name' | paginate: { itemsPerPage: 5, currentPage: p }\">\n        <div class=\"each-result\">\n          <div ng-hide=\"!ctrl.featureFlags\">\n            <a  (click)=\"deleteFeatureFlag(item)\">\n              <app-dash-trash class=\"clickable pull-right\"></app-dash-trash>\n            </a>\n            <app-dash-edit class=\"clickable pull-right\" (click)=\"editFeatureFlag(item)\"></app-dash-edit>\n          </div>\n          <h6>Name: {{item?.name}}</h6>\n          <h6>Description: {{item?.description}}</h6>\n          <div class=\"flags\">\n            <h6>Flags: </h6>\n            <div class=\"table-row\" *ngFor=\"let currFlag of flagKeys(item?.flags)\">\n              <div class=\"individual\">\n                <p>{{currFlag}}: {{item?.flags[currFlag]}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer pb-0 pt-3\">\n        <pagination-controls totalItems=this.featureFlags.length previousLabel=\"\"\n                             nextLabel=\"\" maxSize=\"4\" (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-modal\">\n    <div class=\"widget-modal-heading\">\n        Generate<br><br>Api Tokens\n    </div>\n    <div class=\"widget-modal-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"text-center\" [hidden]=\"apitokens\">Loading Api Tokens...</div>\n                <div [hidden]=\"!error\">\n                    {{error.data}}\n                </div>\n                <div>\n                    <div>\n                        <div class=\"btn-block1 row\">\n                            <span class=\"col-md-3\">\n                                <h3>Api User</h3>\n                            </span>\n                            <span class=\"col-md-3\">\n                                <h3>Expiration Date</h3>\n                            </span>\n                            <span class=\"col-md-6\" style=\"margin-bottom: 10px;\"><button type=\"button\"\n                                    class=\"btn btn-primary btn-wide pull-right\" (click)=\"generateToken()\">New</button>\n                            </span>\n                        </div>\n\n                        <input type=\"text\" class=\"form-control\" id=\"tokenSearch\" placeholder=\"Filter Api Users\"\n                            [(ngModel)]=\"tokenSearch\">\n                        <div class=\"dash-modal-row delete-dashboard-row clearfix\" style=\"font-size: 20px;\"\n                            *ngFor=\"let apitoken of apitokens | generalFilter:{apiUser:tokenSearch} | generalOrderBy:'apiUser' | paginate: { itemsPerPage: 15, currentPage: p }\">\n                            <div class=\"btn-block1 row\">\n                                <span class=\"col-md-3\">{{apitoken.apiUser}}</span>\n                                <span class=\"col-md-3\">{{apitoken.expirationDt | date:'MM/dd/yyyy HH:mm:ss'}}</span>\n                                <div class=\"col-md-6\">\n                                    <a (click)=\"deleteToken(apitoken)\">\n                                        <app-dash-trash class=\"clickable pull-right\"></app-dash-trash>\n                                    </a>\n                                    <app-dash-edit class=\"clickable pull-right\" (click)=\"editToken(apitoken)\"></app-dash-edit>\n                                </div>\n                            </div>\n                        </div>\n                      <div class=\"card-footer pb-0 pt-3\">\n                        <pagination-controls totalItems=apitokens.length previousLabel=\"\"\n                                             nextLabel=\"\" maxSize=\"4\" (pageChange)=\"p = $event\"></pagination-controls>\n                      </div>\n                    </div>\n                </div>\n\n                <div class=\"text-center\" [hidden]=\"!(apitokens && !apitokens.length)\">\n                    No results\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"widget-modal\">\n    <div class=\"widget-modal-heading\">\n      Manage Admins\n    </div>\n    <div class=\"widget-modal-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"text-center\" [hidden]=\"users\">Loading Users...</div>\n          <div [hidden]=\"error\">\n            {{error.data}}\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <h3>Users</h3>\n              <input type=\"text\" class=\"form-control\" id=\"userSearch\" placeholder=\"Filter Users\"\n                [(ngModel)]=\"userSearch\">\n              <div class=\"dash-modal-row delete-dashboard-row clearfix\"\n                *ngFor=\"let user of users | generalFilter:{username:userSearch, authorities:'!ROLE_ADMIN'} | generalOrderBy:'username' | paginate: { itemsPerPage: 20, currentPage: p }\">\n                <div class=\"btn-block\">\n                  <span class=\"badge badge-primary\" [hidden]=\"!(user.authType === authType && user.username === username)\">You</span>\n                  {{user.username}}\n                  <span class=\"badge badge-secondary\">{{user.authType}}</span>\n                  <div title=\"Promote User\" class=\"clickable pull-right\" (click)=\"promoteUserToAdmin(user)\">\n                    <span class=\"clickable fa fa-stack\">\n                      <span class=\"fa-circle-thin fa-stack-2x text-success\"></span>\n                      <span class=\"fa-angle-right fa-stack-1x text-success\"></span>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer pb-0 pt-3\">\n                <pagination-controls totalItems=users.length previousLabel=\"\"\n                                     nextLabel=\"\" maxSize=\"4\" (pageChange)=\"p = $event\"></pagination-controls>\n              </div>\n            </div>\n            <div class=\"col-push col-md-5\">\n              <h3>Admins</h3>\n              <div class=\"dash-modal-row delete-dashboard-row clearfix\"\n                *ngFor=\"let user of users | generalFilter:{authorities:'ROLE_ADMIN'} | generalOrderBy:'username' as filteredAdmins  \">\n                <div class=\"btn-block\">\n                  <span class=\"badge badge-primary\" [hidden]=\"!(user.authType === authType && user.username === username)\">You</span>\n                  {{user.username}}\n                  <span class=\"badge badge-secondary\" >{{user.authType}}</span>\n                  <div title=\"Demote User\"  class=\"clickable pull-right\"\n                    (click)=\"demoteUserFromAdmin(user)\">\n                    <span class=\"clickable fa fa-stack\">\n                      <span class=\"fa-circle-thin fa-stack-2x text-danger\"></span>\n                      <span class=\"fa-angle-left fa-stack-1x text-danger\"></span>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"text-center\" [hidden]=\"!(users && !users.length)\">\n            No results\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Api Audit Properties Configuration</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div>\n      <form name=\"cdf\" [formGroup]=\"apiAuditPropertiesForm\" class=\"form\"  novalidate>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Api Audit Properties Name (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input type=\"text\" *ngIf=\"this.disableName\" class= \"form-control\" placeholder=\"Api Audit Properties Name\" formControlName=\"name\" disabled required/>\n            <input type=\"text\" *ngIf=\"!this.disableName\" class= \"form-control\" placeholder=\"Api Audit Properties Name\" formControlName=\"name\" required/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Properties JSON (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input id= \"description\" value= \"{{this.propertiesJSON}}\" type=\"text\" class= \"form-control\" placeholder=\"Properties JSON\" formControlName=\"properties\" required/>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\" (click)=\"activeModal.dismiss()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!apiAuditPropertiesForm.valid\" (click)=\"submit()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- (click)=\"activeModal.close('Close click')\" -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Api Properties Configuration</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div>\n      <form name=\"cdf\" [formGroup]=\"apiPropertiesForm\" class=\"form\"  novalidate>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Api Properties Name (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input type=\"text\" *ngIf=\"this.disableName\" class= \"form-control\" placeholder=\"Api Properties Name\" formControlName=\"name\" disabled required/>\n            <input type=\"text\" *ngIf=\"!this.disableName\" class= \"form-control\" placeholder=\"Api Properties Name\" formControlName=\"name\" required/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Properties JSON (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input id= \"description\" value= \"{{this.propertiesJSON}}\" type=\"text\" class= \"form-control\" placeholder=\"Properties JSON\" formControlName=\"properties\" required/>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\"  (click)=\"activeModal.dismiss()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!apiPropertiesForm.valid\" (click)=\"submit()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Feature Flags</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div>\n      <form name=\"cdf\" [formGroup]=\"featureFlagForm\" class=\"form\"  novalidate>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Feature Flags Name (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input type=\"text\" *ngIf=\"this.disableName\" class= \"form-control\" placeholder=\"Feature Flags Name\" formControlName=\"name\" disabled required/>\n            <input type=\"text\" *ngIf=\"!this.disableName\" class= \"form-control\" placeholder=\"Feature Flags Name\" formControlName=\"name\" required/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\" for=\"description\">Feature Flags Description (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input id= \"description\" type=\"text\" class= \"form-control\" placeholder=\"Feature Flags Description\" aria-label=\"description\" formControlName=\"description\" required/>\n          </div>\n        </div>\n\n        <label class=\"col-form-label\">Flags <ng-template #tipContent><b>Flags to auto-discover (true/false)</b></ng-template>\n          <i class=\"fa fa-info-circle\" aria-hidden=\"true\" [ngbTooltip]=\"tipContent\"></i>: </label>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              agile\n              <label class=\"switch\">\n                <input id = \"agileTool\" type=\"checkbox\" name=\"agileTool\" ng-change=\"reload()\" formControlName=\"agileTool\">\n                <span class=\"slider round\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                artifact\n                <label class=\"switch\">\n                  <input id = \"artifact\" type=\"checkbox\" name=\"artifact\" ng-change=\"reload()\" formControlName=\"artifact\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                build\n                <label class=\"switch\">\n                  <input id = \"build\" type=\"checkbox\" name=\"build\" ng-change=\"reload()\" formControlName=\"build\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                codeQuality\n                <label class=\"switch\">\n                  <input id = \"codeQuality\" type=\"checkbox\" name=\"codeQuality\" ng-change=\"reload()\" formControlName=\"codeQuality\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                deployment\n                <label class=\"switch\">\n                  <input id = \"deployment\" type=\"checkbox\" name=\"deployment\" ng-change=\"reload()\" formControlName=\"deployment\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                libraryPolicy\n                <label class=\"switch\">\n                  <input id = \"libraryPolicy\" type=\"checkbox\" name=\"libraryPolicy\" ng-change=\"reload()\" formControlName=\"libraryPolicy\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                scm\n                <label class=\"switch\">\n                  <input id = \"scm\" type=\"checkbox\" name=\"scm\" ng-change=\"reload()\" formControlName=\"scm\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                staticSecurityScan\n                <label class=\"switch\">\n                  <input id = \"staticSecurityScan\" type=\"checkbox\" name=\"staticSecurityScan\" ng-change=\"reload()\" formControlName=\"staticSecurityScan\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xs-offset-3 col-xs-6\">\n              <div class=\"form-group checkbox\">\n                test\n                <label class=\"switch\">\n                  <input id = \"test\" type=\"checkbox\" name=\"test\" ng-change=\"reload()\" formControlName=\"test\">\n                  <span class=\"slider round\"></span>\n                </label>\n              </div>\n            </div>\n          </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!featureFlagForm.valid\" (click)=\"submit()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Service Account</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div>\n      <form name=\"cdf\" [formGroup]=\"serviceAccountForm\" class=\"form\"  novalidate>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\">Service Account Name (Required):</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input type=\"text\" *ngIf=\"this.disableName\" class= \"form-control\" placeholder=\"Service Account Name\" formControlName=\"serviceAccountName\" disabled required/>\n            <input type=\"text\" *ngIf=\"!this.disableName\" class= \"form-control\" placeholder=\"Service Account Name\" formControlName=\"serviceAccountName\" required/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-form-label\" for=\"fileNames\">File Names (Required) <ng-template #tipContent><b>Enter files (separated by ,)</b></ng-template>\n            <i class=\"fa fa-info-circle\" aria-hidden=\"true\" [ngbTooltip]=\"tipContent\"></i>:</label>\n          <div class=\"col-xs-offset-3 col-xs-6\">\n            <input id= \"fileNames\" type=\"text\" class= \"form-control\" placeholder=\"File Names\" aria-label=\"fileNames\" formControlName=\"fileNames\" required/>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-outline-secondary mr-2\" type=\"button\" (click)=\"activeModal.dismiss()\">Cancel</button>\n        <button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!serviceAccountForm.valid\" (click)=\"submit()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title \">Administer Api Token</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"token-from\">\n      <form name=\"cdf\" [formGroup]=\"apiEditForm\" class=\"form\" novalidate>\n        <label class=\"modal-label\">Api User</label>\n        <input type=\"text\" name=\"apiUser\" class=\"form-control\" placeholder=\"Api User\" formControlName=\"apiUser\"\n          [ngClass]=\"{ 'is-invalid': f.apiUser.touched && f.apiUser.errors }\" autocomplete=\"off\" />\n        <div *ngIf=\"f.apiUser.touched && f.apiUser.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.apiUser.errors.required\">Api user name is required</div>\n          <div *ngIf=\"f.apiUser.errors.minlength\">Min length of 6 characters</div>\n          <div *ngIf=\"f.apiUser.errors.maxlength\">Max length of 50 characters</div>\n          <div *ngIf=\"f.apiUser.errors.pattern\">Special character(s) found. Please enter only letters, numbers or\n            spaces.\n          </div>\n        </div>\n        <div *ngIf=\"apiTokenError\" class=\"invalid-feedback\">Error updating api token.</div>\n        <br />\n        <label class=\"modal-label\" id=\"dtLabel\">Expiration Date</label>\n\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"expDt\" placeholder=\"yyyy-mm-dd\" #d=\"ngbDatepicker\" ngbDatepicker\n            formControlName=\"date\" />\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"><i\n                class=\"fa fa-calendar\"></i></button>\n          </div>\n        </div>\n        <div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer text-center\">\n      <button type=\"button\" class=\"btn btn-primary btn-wide\" (click)=\"submit()\">Save</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"modal-content \">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Generate Api Token</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"token-from\">\n            <form name=\"cdf\" [formGroup]=\"apiForm\" class=\"form\" novalidate>\n                <div class=\"form-group\">\n                    <label class=\"col-form-label\">Api User</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" formControlName=\"apiUser\" name=\"apiUser\" class=\"form-control\"\n                            placeholder=\"Api User\" autocomplete=\"off\"\n                            [ngClass]=\"{ 'is-invalid': f.apiUser.touched && f.apiUser.errors }\" />\n                        <div *ngIf=\"f.apiUser.touched && f.apiUser.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.apiUser.errors.required\">Api user name is required</div>\n                            <div *ngIf=\"f.apiUser.errors.minlength\">Min length of 6 characters</div>\n                            <div *ngIf=\"f.apiUser.errors.maxlength\">Max length of 50 characters</div>\n                            <div *ngIf=\"f.apiUser.errors.pattern\">Special character(s) found. Please enter only letters,\n                                numbers or spaces.\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"apiTokenError==true\" class=\"error\">\n                        <div>\n                            Error updating api token.\n                        </div>\n                    </div>\n\n                    <br>\n                    <label class=\"col-form-label\" id=\"dtLabel\">Expiration Date</label>\n\n                    <div class=\"input-group\">\n                        <input type=\"text\" name=\"expDt\" placeholder=\"yyyy-mm-dd\" #d=\"ngbDatepicker\" ngbDatepicker\n                            formControlName=\"date\" />\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><i\n                                    class=\"fa fa-calendar\"></i></button>\n                        </div>\n                    </div>\n                    <br />\n                    <label class=\"col-form-label\">Api Key</label>\n                    <div class=\"input-group\">\n                        <input type=\"text\" name=\"apiKey\" class=\"form-control\"\n                            placeholder=\"Api Key will only be visible till this dialog box is open\"\n                            formControlName=\"apiKey\" maxlength=\"100\" autocomplete=\"off\"\n                            [ngClass]=\"{ 'is-invalid': f.apiKey.errors }\" />\n                        <div *ngIf=\" f.apiKey.errors\" class=\"invalid-feedback\">\n                            <div>Error generating api token</div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"modal-footer text-center\">\n          <div class=\"col text-center\">\n            <button class=\"btn btn-outline-secondary mr-2\" type=\"button\" (click)=\"activeModal.dismiss()\">Cancel</button>\n            <button class=\"btn btn-primary\" type=\"button\" class=\"btn btn-primary btn-wide\" (click)=\"submit()\">Create</button>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"widget-modal\">\n    <div class=\"panel-heading pointerCursor\">\n      <h3 class=\"panel-title\" (click)=\"panelExpandedApi = !panelExpandedApi\">Api Properties Builder <i class=\"fa fa-caret-down\"></i></h3>\n    </div>\n    <div class = \"table-content\" *ngIf=\"panelExpandedApi\">\n      <span class=\"col-xs-6\"><button type=\"button\" class=\"btn btn-dark btn-lg pull-right mb-2\" (click)=\"addNewApiPropertiesBuilder()\">New</button></span>\n      <input type=\"text\" class=\"form-control\" id=\"apiPropertiesSearch\" placeholder=\"Filter Api Properties\"\n             [(ngModel)]=\"apiPropertiesSearch\">\n      <div class=\"dash-modal-row delete-dashboard-row clearfix\" style=\"font-size: 20px;\" *ngFor=\"let apiProperty of this.apiProperties | generalFilter:{name:apiPropertiesSearch} | generalOrderBy:'name' |  paginate: { itemsPerPage: 10, currentPage: p }\">\n        <div>\n          <div ng-hide=\"!ctrl.apiProperties\">\n            <a  (click)=\"deleteProperties(apiProperty)\">\n              <app-dash-trash class=\"clickable pull-right\"></app-dash-trash>\n            </a>\n            <app-dash-edit class=\"clickable pull-right\" (click)=\"editApiPropertiesBuilder(apiProperty)\"></app-dash-edit>\n          </div>\n          <h6>Name: {{apiProperty?.name}}</h6>\n          <h6>Properties: </h6>\n          <div class=\"table-row\" *ngFor=\"let currProperties of properKeys(apiProperty?.properties)\">\n            <div class=\"individual\">\n              <h6>{{currProperties}}: {{stringifyObj(apiProperty?.properties[currProperties])}}</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer pb-0 pt-3\">\n        <pagination-controls *ngIf=\"this.apiProperties && this.apiProperties.length > 0\" totalItems=this.apiProperties.length previousLabel=\"\"\n                             nextLabel=\"\" maxSize=\"4\" (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n    </div>\n\n    <div class=\"panel-heading pointerCursor\">\n      <h3 class=\"panel-title\" (click)=\"panelExpandedApiAudit = !panelExpandedApiAudit\">Api Audit Properties Builder <i class=\"fa fa-caret-down\"></i></h3>\n    </div>\n    <div class = \"table-content\" *ngIf=\"panelExpandedApiAudit\">\n      <span class=\"col-xs-6\"><button type=\"button\" class=\"btn btn-dark btn-lg pull-right mb-2\" (click)=\"addNewApiAuditPropertiesBuilder()\">New</button></span>\n      <input type=\"text\" class=\"form-control\" id=\"apiAuditPropertiesSearch\" placeholder=\"Filter Api Audit Properties\"\n             [(ngModel)]=\"apiAuditPropertiesSearch\">\n      <div class=\"dash-modal-row delete-dashboard-row clearfix\" style=\"font-size: 20px;\" *ngFor=\"let apiAuditProperty of this.apiAuditProperties | generalFilter:{name:apiAuditPropertiesSearch} | generalOrderBy:'name' |  paginate: { itemsPerPage: 10, currentPage: p }\">\n        <div>\n          <div ng-hide=\"!ctrl.apiProperties\">\n            <a  (click)=\"deleteProperties(apiAuditProperty?.id)\">\n              <app-dash-trash class=\"clickable pull-right\"></app-dash-trash>\n            </a>\n            <app-dash-edit class=\"clickable pull-right\" (click)=\"editApiAuditPropertiesBuilder(apiAuditProperty)\"></app-dash-edit>\n          </div>\n          <h6>Name: {{apiAuditProperty?.name}}</h6>\n          <h6>Properties: </h6>\n          <div class=\"table-row\" *ngFor=\"let currProperties of properKeys(apiAuditProperty?.properties)\">\n            <div class=\"individual\">\n              <h6>{{currProperties}}: {{stringifyObj(apiAuditProperty?.properties[currProperties])}}</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer pb-0 pt-3\">\n        <pagination-controls *ngIf=\"this.apiProperties && this.apiProperties.length > 0\" totalItems=this.apiProperties.length previousLabel=\"\"\n                             nextLabel=\"\" maxSize=\"4\" (pageChange)=\"p = $event\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-modal\">\n  <div class=\"widget-modal-heading\">\n    Service Accounts\n  </div>\n  <div class = \"table-content\">\n    <span class=\"col-xs-6\"><button type=\"button\" class=\"btn btn-primary btn-wide pull-right\" (click)=\"createAccount()\">New</button></span>\n    <input type=\"text\" class=\"form-control\" id=\"serviceAccountSearch\" placeholder=\"Filter Service Accounts\"\n           [(ngModel)]=\"serviceAccountSearch\">\n    <div class=\"dash-modal-row delete-dashboard-row clearfix\" style=\"font-size: 20px;\" *ngFor=\"let serviceAccount of this.serviceAccounts | generalFilter:{serviceAccountName:serviceAccountSearch} | generalOrderBy:'serviceAccountName' | paginate: { itemsPerPage: 10, currentPage: p }\">\n      <div>\n        <div ng-hide=\"!ctrl.serviceAccounts\">\n          <a  (click)=\"deleteServiceAccount(serviceAccount)\">\n            <app-dash-trash class=\"clickable pull-right\"></app-dash-trash>\n          </a>\n          <app-dash-edit class=\"clickable pull-right\" (click)=\"updateAccount(serviceAccount)\"></app-dash-edit>\n        </div>\n        <h6>Service Account: {{serviceAccount?.serviceAccountName}}</h6>\n        <h6>File Types: {{serviceAccount?.fileNames}}</h6>\n      </div>\n    </div>\n    <div class=\"card-footer pb-0 pt-3\">\n      <pagination-controls totalItems=this.serviceAccounts.length previousLabel=\"\"\n                           nextLabel=\"\" maxSize=\"4\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/admin-dashboard-modules.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/admin-dashboard-modules.ts ***!
  \**************************************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_dashboard_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard-routing */ "./src/app/admin_modules/admin_dashboard/admin-dashboard-routing.ts");
/* harmony import */ var _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/admin-dashboard/admin-dashboard.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_admin_dashboard_generate_api_tokens_generate_api_tokens_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_admin_dashboard_manage_admins_manage_admins_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/admin-dashboard/manage-admins/manage-admins.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_modal_edit_token_modal_edit_token_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_admin_dashboard_modal_generate_api_token_modal_generate_api_token_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_modal_create_or_update_feature_flags_create_or_update_feature_flags_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_feature_flags_feature_flags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/admin-dashboard/feature-flags/feature-flags.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_admin_dashboard_service_accounts_service_accounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/admin-dashboard/service-accounts/service-accounts.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_modal_create_or_update_service_account_create_or_update_service_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/dashboard-data.service */ "./src/app/admin_modules/admin_dashboard/services/dashboard-data.service.ts");
/* harmony import */ var _services_pagination_wrapper_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/pagination-wrapper.service */ "./src/app/admin_modules/admin_dashboard/services/pagination-wrapper.service.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/admin_modules/admin_dashboard/services/dashboard.service.ts");
/* harmony import */ var _dashboard_admin_dashboard_edit_dashboard_edit_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/core/interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _dashboard_admin_dashboard_properties_builder_properties_builder_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/admin-dashboard/properties-builder/properties-builder.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_modal_create_or_update_api_properties_create_or_update_api_properties_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_modal_create_or_update_api_audit_properties_create_or_update_api_audit_properties_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.ts");












// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length




// tslint:disable-next-line:max-line-length








// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

var AdminDashboardModule = /** @class */ (function () {
    function AdminDashboardModule() {
    }
    AdminDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"],
                _dashboard_admin_dashboard_generate_api_tokens_generate_api_tokens_component__WEBPACK_IMPORTED_MODULE_5__["GenerateApiTokensComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_feature_flags_create_or_update_feature_flags_component__WEBPACK_IMPORTED_MODULE_13__["CreateOrUpdateFeatureFlagsComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_service_account_create_or_update_service_account_component__WEBPACK_IMPORTED_MODULE_17__["CreateOrUpdateServiceAccountComponent"],
                _dashboard_admin_dashboard_manage_admins_manage_admins_component__WEBPACK_IMPORTED_MODULE_9__["ManageAdminsComponent"],
                _dashboard_admin_dashboard_modal_edit_token_modal_edit_token_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditTokenModalComponent"],
                _dashboard_admin_dashboard_modal_generate_api_token_modal_generate_api_token_modal_component__WEBPACK_IMPORTED_MODULE_12__["GenerateApiTokenModalComponent"],
                _dashboard_admin_dashboard_feature_flags_feature_flags_component__WEBPACK_IMPORTED_MODULE_14__["FeatureFlagsComponent"],
                _dashboard_admin_dashboard_service_accounts_service_accounts_component__WEBPACK_IMPORTED_MODULE_16__["ServiceAccountsComponent"],
                _dashboard_admin_dashboard_edit_dashboard_edit_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["EditDashboardComponent"],
                _dashboard_admin_dashboard_properties_builder_properties_builder_component__WEBPACK_IMPORTED_MODULE_24__["PropertiesBuilderComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_api_properties_create_or_update_api_properties_component__WEBPACK_IMPORTED_MODULE_25__["CreateOrUpdateApiPropertiesComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_api_audit_properties_create_or_update_api_audit_properties_component__WEBPACK_IMPORTED_MODULE_26__["CreateOrUpdateApiAuditPropertiesComponent"]
            ],
            providers: [_services_user_data_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"], _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_18__["DashboardDataService"], _services_pagination_wrapper_service__WEBPACK_IMPORTED_MODULE_19__["PaginationWrapperService"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_20__["AdminDashboardService"],
                src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: src_app_core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
                    multi: true,
                }],
            imports: [
                _admin_dashboard_routing__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            ],
            entryComponents: [
                _dashboard_admin_dashboard_modal_create_or_update_feature_flags_create_or_update_feature_flags_component__WEBPACK_IMPORTED_MODULE_13__["CreateOrUpdateFeatureFlagsComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_service_account_create_or_update_service_account_component__WEBPACK_IMPORTED_MODULE_17__["CreateOrUpdateServiceAccountComponent"],
                _dashboard_admin_dashboard_modal_edit_token_modal_edit_token_modal_component__WEBPACK_IMPORTED_MODULE_10__["EditTokenModalComponent"],
                _dashboard_admin_dashboard_modal_generate_api_token_modal_generate_api_token_modal_component__WEBPACK_IMPORTED_MODULE_12__["GenerateApiTokenModalComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_api_properties_create_or_update_api_properties_component__WEBPACK_IMPORTED_MODULE_25__["CreateOrUpdateApiPropertiesComponent"],
                _dashboard_admin_dashboard_modal_create_or_update_api_audit_properties_create_or_update_api_audit_properties_component__WEBPACK_IMPORTED_MODULE_26__["CreateOrUpdateApiAuditPropertiesComponent"]
            ],
        })
    ], AdminDashboardModule);
    return AdminDashboardModule;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/admin-dashboard-routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/admin-dashboard-routing.ts ***!
  \**************************************************************************/
/*! exports provided: AdminDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardRoutingModule", function() { return AdminDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/admin-dashboard/admin-dashboard.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.ts");




var routes = [
    { path: 'dashboard', component: _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"] }
];
var AdminDashboardRoutingModule = /** @class */ (function () {
    function AdminDashboardRoutingModule() {
    }
    AdminDashboardRoutingModule.components = [_dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]];
    AdminDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminDashboardRoutingModule);
    return AdminDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashcon {\n  float: left;\n  padding-left: 5%;\n}\n\n.dash {\n  float: left;\n}\n\n.dash-nav {\n  padding-top: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFxhZG1pbl9tb2R1bGVzXFxhZG1pbl9kYXNoYm9hcmRcXGRhc2hib2FyZFxcYWRtaW4tZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGNvbntcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNSVcbn1cblxuLmRhc2h7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuXG4uZGFzaC1uYXZ7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG59IiwiLmRhc2hjb24ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmRhc2gge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRhc2gtbmF2IHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
        this.tab = 'editDashboards';
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent.prototype.navigateToTab = function (tab) {
        this.tab = tab;
    };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/admin-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-push {\n  left: 16%;\n}\n\n.widget {\n  padding: 2.5rem 3rem;\n}\n\n.widget .widget {\n  margin-bottom: 2rem;\n}\n\n.widget .widget-heading {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-heading-performance {\n  border-bottom: 0px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading-performance .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading-performance .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-body .widget {\n  padding: 0;\n}\n\n.widget .widget-body .widget .widget-heading {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n}\n\n.widget .widget-body-config {\n  background: rgba(255, 255, 255, 0.15);\n  border: 0.5rem dashed rgba(255, 255, 255, 0.6);\n  border-radius: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  margin: 1rem 0;\n  padding: 2rem;\n  text-align: center;\n}\n\n.widget .widget-body-config .fa {\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.75rem;\n  padding: 0.6rem 0.5rem;\n  border-radius: 50%;\n  transition: border-color 300ms linear;\n}\n\n.widget.configure .widget-settings-icon {\n  display: none;\n}\n\n.widget.configure .widget-body-main {\n  display: none;\n}\n\n.widget.configure .widget-body-config {\n  display: block;\n}\n\n.widget.configure .widget-body-config:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.8);\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.widget.configure .widget-body-config:hover .fa {\n  border-color: rgba(255, 255, 255, 0.8);\n}\n\n.cicd-modal-content {\n  margin-left: 10%;\n}\n\n.widget-modal {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-modal .widget-modal-close {\n  background: transparent;\n  cursor: pointer;\n  color: #C8C8C8;\n  font-weight: bold;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 3rem;\n  height: 3rem;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  opacity: 0.7;\n  font-size: 1.5em;\n  line-height: 1em;\n  transition: opacity 0.2s linear;\n}\n\n.widget-modal .widget-modal-close:hover {\n  opacity: 1;\n}\n\n.widget-modal .widget-modal-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-heading-markup {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  padding-bottom: 8px;\n}\n\n.widget-modal .text-danger {\n  color: #c75e5e !important;\n}\n\n.widget-modal .text-success {\n  color: #28a745 !important !important;\n}\n\n.widget-modal .fa {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-modal .btn .fa, .widget-modal .btn {\n  color: inherit;\n}\n\n.widget-modal .widget-modal-body .modal-label {\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-body .widget-modal-divider, .widget-modal .widget-modal-body hr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 1px;\n}\n\n.widget-detail {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-detail .widget-detail-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 3rem;\n  padding: 1rem;\n}\n\n.widget-detail .widget-detail-body .table {\n  border-collapse: separate;\n}\n\n.widget-detail .widget-detail-body .table th {\n  padding: 4px;\n  font-weight: 900;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  table-layout: fixed;\n}\n\n.widget-detail .widget-detail-body .table td {\n  padding: 4px;\n  word-wrap: break-word;\n}\n\n.widget-detail .detail-close {\n  position: absolute;\n  right: 0.4rem;\n  top: 0.4rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-detail .detail-close:hover {\n  color: rgba(128, 128, 128, 0.5);\n}\n\ntr.dash-row > td {\n  border-top: none !important;\n  padding: 0 !important;\n  line-height: 3.25rem;\n  vertical-align: middle !important;\n}\n\n.dash-row {\n  line-height: 3.25rem;\n  vertical-align: middle;\n}\n\n.dash-row .fa {\n  line-height: 3.25rem;\n  margin-right: 0.5rem;\n}\n\n.dash-row.clickable:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.dash-overflow {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.dash-modal-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.8rem 0;\n}\n\n.dash-modal-row:first-of-type {\n  border-top: none;\n}\n\n.dash-progress-bar > div {\n  float: left;\n  height: 3rem;\n  z-index: 2;\n}\n\n.dash-progress-bar > div:first-child {\n  z-index: 3;\n}\n\n.dash-progress-bar > div:last-child {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.h3 {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n\n.btn-primary {\n  font-weight: 700;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background: #152131;\n  border-color: #152131;\n}\n\n.btn-primary {\n  background-image: linear-gradient(to bottom, #384250 0, #152131 100%);\n  background-repeat: repeat-x;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n  transition: color 0.2s linear;\n  font-weight: 600;\n  padding: 10px 24px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9) !important;\n  background-color: #152131;\n  border-color: #152131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9lZGl0LWRhc2hib2FyZC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFxhZG1pbl9tb2R1bGVzXFxhZG1pbl9kYXNoYm9hcmRcXGRhc2hib2FyZFxcYWRtaW4tZGFzaGJvYXJkXFxlZGl0LWRhc2hib2FyZFxcZWRpdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvZWRpdC1kYXNoYm9hcmQvZWRpdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtBQ0VKOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURDSTtFQUNJLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDQ1I7O0FERVk7RUFDSSxXQUFBO0FDQWhCOztBREdRO0VBQ0ksaUJBQUE7QUNEWjs7QURJSTtFQUNJLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDRlI7O0FES1k7RUFDSSxXQUFBO0FDSGhCOztBRE1RO0VBQ0ksaUJBQUE7QUNKWjs7QURPSTtFQUNJLFVBQUE7QUNMUjs7QURPUTtFQUNJLDhDQUFBO0VBQ0EseUJBQUE7QUNMWjs7QURTSTtFQUNJLHFDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNQUjs7QURTUTtFQUNJLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEscUNBQUE7QUNSWjs7QURhUTtFQUNJLGFBQUE7QUNYWjs7QURjUTtFQUNJLGFBQUE7QUNaWjs7QURlUTtFQUNJLGNBQUE7QUNiWjs7QURlWTtFQUNJLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtBQ2JoQjs7QURlZ0I7RUFDSSxzQ0FBQTtBQ2JwQjs7QURxQkE7RUFDRSxnQkFBQTtBQ2xCRjs7QURvQkE7RUFDSSx1QkFBQTtBQ2pCSjs7QURtQkk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNqQlI7O0FEbUJRO0VBQ0ksVUFBQTtBQ2pCWjs7QURxQkk7RUFDSSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNuQlI7O0FEc0JJO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQ3BCUjs7QUR1Qkk7RUFDSSx5QkFBQTtBQ3JCUjs7QUR3Qkk7RUFDSSxvQ0FBQTtBQ3RCUjs7QUR5Qkk7RUFDSSx5QkFBQTtBQ3ZCUjs7QUQwQkk7RUFDSSxjQUFBO0FDeEJSOztBRDRCUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDMUJaOztBRDZCUTtFQUNJLDRDQUFBO0VBQ0EsV0FBQTtBQzNCWjs7QURnQ0E7RUFDSSx1QkFBQTtBQzdCSjs7QUQrQkk7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQzdCUjs7QURpQ1E7RUFDSSx5QkFBQTtBQy9CWjs7QURnQ1k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDOUJoQjs7QURnQ1k7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUM5QmhCOztBRG1DSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2pDUjs7QURrQ1E7RUFDSSwrQkFBQTtBQ2hDWjs7QURxQ0E7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtBQ2xDSjs7QURxQ0E7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0FDbENKOztBRG9DSTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNsQ1I7O0FEcUNJO0VBQ0ksMkNBQUE7QUNuQ1I7O0FEdUNBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDcENKOztBRHVDQTtFQUNJLHdDQUFBO0VBQ0EsaUJBQUE7QUNwQ0o7O0FEc0NJO0VBQ0ksZ0JBQUE7QUNwQ1I7O0FEeUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDdENSOztBRHdDUTtFQUNJLFVBQUE7QUN0Q1o7O0FEeUNRO0VBQ0ksVUFBQTtFQUNBLDJDQUFBO0FDdkNaOztBRDhDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQzNDSjs7QUQrQ0E7RUFDSSxnQkFBQTtBQzVDSjs7QUQ2Q0k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQzNDUjs7QUQrQ0E7RUFDSSxxRUFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDNUNKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9lZGl0LWRhc2hib2FyZC9lZGl0LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtcHVzaCB7XG4gICAgbGVmdDogMTYlO1xufVxuLndpZGdldCB7XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XG5cbiAgICAud2lkZ2V0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAud2lkZ2V0LWhlYWRpbmcge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICAgICAgICAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGFzdC11cGRhdGVkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG5cbiAgICAgICAgLndpZGdldC1zZXR0aW5ncy1pY29uIHtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAgI2ZmZiA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxhc3QtdXBkYXRlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2lkZ2V0LWJvZHkgLndpZGdldCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLndpZGdldC1oZWFkaW5nIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpIDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDtcbiAgICAgICAgYm9yZGVyOiAuNXJlbSBkYXNoZWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBjb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmZhIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC42cmVtIC41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czooNTAlKTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjooYm9yZGVyLWNvbG9yIDMwMG1zIGxpbmVhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvbmZpZ3VyZSB7XG4gICAgICAgIC53aWRnZXQtc2V0dGluZ3MtaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpZGdldC1ib2R5LW1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aWRnZXQtYm9keS1jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMwKTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcblxuICAgICAgICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5jaWNkLW1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLndpZGdldC1tb2RhbCB7XG4gICAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG5cbiAgICAud2lkZ2V0LW1vZGFsLWNsb3NlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICNDOEM4Qzg7O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgIHRyYW5zaXRpb246KG9wYWNpdHkgLjJzIGxpbmVhcik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndpZGdldC1tb2RhbC1oZWFkaW5nIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAud2lkZ2V0LW1vZGFsLWhlYWRpbmctbWFya3VwIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAudGV4dC1kYW5nZXIge1xuICAgICAgICBjb2xvcjogI2M3NWU1ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogICMyOGE3NDUgIWltcG9ydGFudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5mYXtcbiAgICAgICAgY29sb3I6ICByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICB9XG5cbiAgICAuYnRuIC5mYSwgLmJ0biAge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAud2lkZ2V0LW1vZGFsLWJvZHkge1xuICAgICAgICAubW9kYWwtbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpZGdldC1tb2RhbC1kaXZpZGVyLCBociB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ud2lkZ2V0LWRldGFpbCB7XG4gICAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG5cbiAgICAud2lkZ2V0LWRldGFpbC1oZWFkaW5nIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAud2lkZ2V0LWRldGFpbC1ib2R5IHtcbiAgICAgICAgLnRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbC1jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC40cmVtO1xuICAgICAgICB0b3A6IC40cmVtO1xuICAgICAgICBjb2xvcjogIHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKHJnYmEoMCwgMCwgMCwgLjUpLCA1MCUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG50ci5kYXNoLXJvdyA+IHRkIHtcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtcm93IHtcbiAgICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgLmZhIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfVxuXG4gICAgJi5jbGlja2FibGU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xuICAgIH1cbn1cblxuLmRhc2gtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhc2gtbW9kYWwtcm93IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIHJnYmEoMCwgMCwgMCwgLjEpO1xuICAgIHBhZGRpbmc6IC44cmVtIDA7XG5cbiAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbn1cblxuLmRhc2gtcHJvZ3Jlc3MtYmFyIHtcbiAgICA+IGRpdiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuLmgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG4uYnRuLXByaW1hcnkge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTUyMTMxO1xuICAgICAgICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG4gICAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzM4NDI1MCAwLCMxNTIxMzEgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLC4zNSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGxpbmVhcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMTMxO1xuICAgIGJvcmRlci1jb2xvcjogIzE1MjEzMTtcbn1cbiIsIi5jb2wtcHVzaCB7XG4gIGxlZnQ6IDE2JTtcbn1cblxuLndpZGdldCB7XG4gIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xufVxuLndpZGdldCAud2lkZ2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nIC53aWRnZXQtc2V0dGluZ3MtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmcgLmxhc3QtdXBkYXRlZCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2Uge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2UgLndpZGdldC1zZXR0aW5ncy1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSAubGFzdC11cGRhdGVkIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keSAud2lkZ2V0IHtcbiAgcGFkZGluZzogMDtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5IC53aWRnZXQgLndpZGdldC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5LWNvbmZpZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogMC41cmVtIGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5LWNvbmZpZyAuZmEge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDMwMG1zIGxpbmVhcjtcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtc2V0dGluZ3MtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktbWFpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktY29uZmlnOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtYm9keS1jb25maWc6aG92ZXIgLmZhIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5jaWNkLW1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ud2lkZ2V0LW1vZGFsIHtcbiAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0M4QzhDODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWhlYWRpbmctbWFya3VwIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ud2lkZ2V0LW1vZGFsIC50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjYzc1ZTVlICFpbXBvcnRhbnQ7XG59XG4ud2lkZ2V0LW1vZGFsIC50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50ICFpbXBvcnRhbnQ7XG59XG4ud2lkZ2V0LW1vZGFsIC5mYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ud2lkZ2V0LW1vZGFsIC5idG4gLmZhLCAud2lkZ2V0LW1vZGFsIC5idG4ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1ib2R5IC5tb2RhbC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSAud2lkZ2V0LW1vZGFsLWRpdmlkZXIsIC53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1ib2R5IGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGhlaWdodDogMXB4O1xufVxuXG4ud2lkZ2V0LWRldGFpbCB7XG4gIHBhZGRpbmc6IDFyZW0gNXJlbSAzcmVtO1xufVxuLndpZGdldC1kZXRhaWwgLndpZGdldC1kZXRhaWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLndpZGdldC1kZXRhaWwgLndpZGdldC1kZXRhaWwtYm9keSAudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xufVxuLndpZGdldC1kZXRhaWwgLndpZGdldC1kZXRhaWwtYm9keSAudGFibGUgdGgge1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLndpZGdldC1kZXRhaWwgLndpZGdldC1kZXRhaWwtYm9keSAudGFibGUgdGQge1xuICBwYWRkaW5nOiA0cHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi53aWRnZXQtZGV0YWlsIC5kZXRhaWwtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjRyZW07XG4gIHRvcDogMC40cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLndpZGdldC1kZXRhaWwgLmRldGFpbC1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG59XG5cbnRyLmRhc2gtcm93ID4gdGQge1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtcm93IHtcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGFzaC1yb3cgLmZhIHtcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmRhc2gtcm93LmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5kYXNoLW92ZXJmbG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kYXNoLW1vZGFsLXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xufVxuLmRhc2gtbW9kYWwtcm93OmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uZGFzaC1wcm9ncmVzcy1iYXIgPiBkaXYge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAyO1xufVxuLmRhc2gtcHJvZ3Jlc3MtYmFyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgei1pbmRleDogMztcbn1cbi5kYXNoLXByb2dyZXNzLWJhciA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbn1cblxuLmgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxNTIxMzE7XG4gIGJvcmRlci1jb2xvcjogIzE1MjEzMTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM4NDI1MCAwLCAjMTUyMTMxIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGxpbmVhcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMTMxO1xuICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: EditDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDashboardComponent", function() { return EditDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pagination_wrapper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pagination-wrapper.service */ "./src/app/admin_modules/admin_dashboard/services/pagination-wrapper.service.ts");
/* harmony import */ var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/dashboard-data.service */ "./src/app/admin_modules/admin_dashboard/services/dashboard-data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_modals_edit_dashboard_modal_edit_dashboard_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/modals/edit-dashboard-modal/edit-dashboard-modal.component */ "./src/app/shared/modals/edit-dashboard-modal/edit-dashboard-modal.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/modals/general-delete-modal/general-delete-modal.component */ "./src/app/shared/modals/general-delete-modal/general-delete-modal.component.ts");








var EditDashboardComponent = /** @class */ (function () {
    function EditDashboardComponent(dashboardData, paginationWrapperService, modalService) {
        var _this = this;
        this.dashboardData = dashboardData;
        this.paginationWrapperService = paginationWrapperService;
        this.modalService = modalService;
        this.dashboards = [];
        this.pageSize = 10;
        this.searchDashboard = '';
        this.processDashboardResponse = function (data) {
            _this.dashboards = _this.page.processDashboardResponse(data);
        };
        this.page = paginationWrapperService;
    }
    EditDashboardComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    EditDashboardComponent.prototype.loadData = function () {
        var _this = this;
        this.dashboardData.getPageSize().subscribe(function (data) {
            _this.pullDashboards(undefined);
        });
    };
    EditDashboardComponent.prototype.pullDashboards = function (type) {
        var _this = this;
        this.dashboardData.searchByPage({ search: '', type: type, size: this.getPageSize(), page: 0 })
            .subscribe(this.processDashboardResponse, this.processDashboardError);
        this.paginationWrapperService.calculateTotalItems(type)
            .subscribe(function () {
            _this.totalItems = _this.paginationWrapperService.getTotalItems();
        });
    };
    EditDashboardComponent.prototype.processDashboardError = function (data) {
        this.dashboards = this.paginationWrapperService.processDashboardError(data);
    };
    EditDashboardComponent.prototype.getPageSize = function () {
        return this.paginationWrapperService.getPageSize();
    };
    EditDashboardComponent.prototype.editDashboard = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(_shared_modals_edit_dashboard_modal_edit_dashboard_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditDashboardModalComponent"]);
        modalRef.componentInstance.dashboardItem = item;
        modalRef.result.then(function (newConfig) {
            _this.loadData();
        }).catch(function (error) {
            _this.loadData();
        });
    };
    EditDashboardComponent.prototype.pageChangeHandler = function (pageNumber) {
        var _this = this;
        this.paginationWrapperService.pageChangeHandler(pageNumber, this.dashboardType)
            .subscribe(function (response) {
            _this.dashboards = _this.paginationWrapperService.getDashboards();
        });
    };
    EditDashboardComponent.prototype.getNextPage = function (params, isMyDashboard) {
        this.pageChangeHandler(params.page);
    };
    EditDashboardComponent.prototype.deleteDashboard = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(_shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__["GeneralDeleteComponent"]);
        modalRef.componentInstance.title = item.name;
        modalRef.result.then(function (newConfig) {
            _this.dashboardData.deleteDashboard(item.id).subscribe(function (response) {
                _this.loadData();
            });
        }).catch(function (error) {
            console.log('delete error newConfig :' + error);
        });
    };
    EditDashboardComponent.prototype.filterByTitle = function (title) {
        var _this = this;
        var promises = this.paginationWrapperService.filterByTitle(title, this.dashboardType);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promises).subscribe(function (response) {
            _this.dashboards = _this.paginationWrapperService.getDashboards();
            _this.totalItems = _this.paginationWrapperService.getTotalItems();
        });
    };
    EditDashboardComponent.ctorParameters = function () { return [
        { type: _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"] },
        { type: _services_pagination_wrapper_service__WEBPACK_IMPORTED_MODULE_2__["PaginationWrapperService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditDashboardComponent.prototype, "dashboardItem", void 0);
    EditDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-dashboard',
            template: __webpack_require__(/*! raw-loader!./edit-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./edit-dashboard.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/edit-dashboard/edit-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"], _services_pagination_wrapper_service__WEBPACK_IMPORTED_MODULE_2__["PaginationWrapperService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], EditDashboardComponent);
    return EditDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  display: table;\n}\n\n.table-row {\n  display: table-row;\n}\n\n.each-result {\n  box-shadow: 0px 2px 24px 2px black;\n  padding: 8px;\n}\n\np {\n  display: table-cell;\n  padding: 4px;\n}\n\nh6 {\n  padding: 1px;\n}\n\n.individual {\n  width: 100%;\n}\n\n.flags {\n  box-shadow: 0px 2px 24px 2px black;\n  padding: 8px;\n}\n\napp-dash-edit {\n  cursor: pointer;\n}\n\napp-dash-trash {\n  cursor: pointer;\n}\n\n.widget-modal {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-modal .widget-modal-close {\n  background: transparent;\n  cursor: pointer;\n  color: #C8C8C8;\n  font-weight: bold;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 3rem;\n  height: 3rem;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  opacity: 0.7;\n  font-size: 1.5em;\n  line-height: 1em;\n  transition: opacity 0.2s linear;\n}\n\n.widget-modal .widget-modal-close:hover {\n  opacity: 1;\n}\n\n.widget-modal .widget-modal-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-heading-markup {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  padding-bottom: 8px;\n}\n\n.widget-modal .text-danger {\n  color: #c75e5e !important;\n}\n\n.widget-modal .fa {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-modal .btn .fa, .widget-modal .btn {\n  color: inherit;\n}\n\n.widget-modal .widget-modal-body .modal-label {\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-body .widget-modal-divider, .widget-modal .widget-modal-body hr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 1px;\n}\n\ntr.dash-row > td {\n  border-top: none !important;\n  padding: 0 !important;\n  line-height: 3.25rem;\n  vertical-align: middle !important;\n}\n\n.dash-modal-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.8rem 0;\n}\n\n.dash-modal-row:first-of-type {\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9mZWF0dXJlLWZsYWdzL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXGZlYXR1cmUtZmxhZ3NcXGZlYXR1cmUtZmxhZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvZmVhdHVyZS1mbGFncy9mZWF0dXJlLWZsYWdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBRENFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxVQUFBO0FDQ047O0FER0U7RUFDRSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJRTtFQUNFLDRDQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLHlCQUFBO0FDSEo7O0FETUU7RUFDRSx5QkFBQTtBQ0pKOztBRE9FO0VBQ0UsY0FBQTtBQ0xKOztBRFNJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNQTjs7QURVSTtFQUNFLDRDQUFBO0VBQ0EsV0FBQTtBQ1JOOztBRGFBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7QUNWRjs7QURhQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7QUNWRjs7QURZRTtFQUNFLGdCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL2ZlYXR1cmUtZmxhZ3MvZmVhdHVyZS1mbGFncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4uZWFjaC1yZXN1bHQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMnB4IHJnYigwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbmg2IHtcbiAgcGFkZGluZzogMXB4XG59XG5cbi5pbmRpdmlkdWFsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGFncyB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMjRweCAycHggcmdiKDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuYXBwLWRhc2gtZWRpdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXBwLWRhc2gtdHJhc2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53aWRnZXQtbW9kYWwge1xuICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcblxuICAud2lkZ2V0LW1vZGFsLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNDOEM4Qzg7O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdHJhbnNpdGlvbjoob3BhY2l0eSAuMnMgbGluZWFyKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAud2lkZ2V0LW1vZGFsLWhlYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53aWRnZXQtbW9kYWwtaGVhZGluZy1tYXJrdXAge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgfVxuXG4gIC50ZXh0LWRhbmdlciB7XG4gICAgY29sb3I6ICNjNzVlNWUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mYXtcbiAgICBjb2xvcjogIHJnYmEoMCwgMCwgMCwgLjUpO1xuICB9XG5cbiAgLmJ0biAuZmEsIC5idG4gIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC53aWRnZXQtbW9kYWwtYm9keSB7XG4gICAgLm1vZGFsLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAud2lkZ2V0LW1vZGFsLWRpdmlkZXIsIGhyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgfVxuICB9XG59XG5cbnRyLmRhc2gtcm93ID4gdGQge1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtbW9kYWwtcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgcGFkZGluZzogLjhyZW0gMDtcblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbn1cbiIsIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuXG4uZWFjaC1yZXN1bHQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMnB4IGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbmg2IHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uaW5kaXZpZHVhbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxhZ3Mge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMnB4IGJsYWNrO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmFwcC1kYXNoLWVkaXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFwcC1kYXNoLXRyYXNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0LW1vZGFsIHtcbiAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0M4QzhDODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWhlYWRpbmctbWFya3VwIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ud2lkZ2V0LW1vZGFsIC50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjYzc1ZTVlICFpbXBvcnRhbnQ7XG59XG4ud2lkZ2V0LW1vZGFsIC5mYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ud2lkZ2V0LW1vZGFsIC5idG4gLmZhLCAud2lkZ2V0LW1vZGFsIC5idG4ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1ib2R5IC5tb2RhbC1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSAud2lkZ2V0LW1vZGFsLWRpdmlkZXIsIC53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1ib2R5IGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGhlaWdodDogMXB4O1xufVxuXG50ci5kYXNoLXJvdyA+IHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLW1vZGFsLXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xufVxuLmRhc2gtbW9kYWwtcm93OmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: FeatureFlagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureFlagsComponent", function() { return FeatureFlagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_create_or_update_feature_flags_create_or_update_feature_flags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/create-or-update-feature-flags/create-or-update-feature-flags.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.ts");
/* harmony import */ var _shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/modals/general-delete-modal/general-delete-modal.component */ "./src/app/shared/modals/general-delete-modal/general-delete-modal.component.ts");






var FeatureFlagsComponent = /** @class */ (function () {
    function FeatureFlagsComponent(userData, modalService) {
        this.userData = userData;
        this.modalService = modalService;
        this.error = {};
        this.featureFlags = [];
        this.featureFlagsSearch = '';
        this.p = 1;
    }
    FeatureFlagsComponent.prototype.ngOnInit = function () {
        this.loadFeatureFlags();
    };
    FeatureFlagsComponent.prototype.loadFeatureFlags = function () {
        var _this = this;
        this.userData.getFeatureFlagsData().subscribe(function (response) {
            _this.featureFlags = response;
        });
    };
    FeatureFlagsComponent.prototype.flagKeys = function (obj) {
        return Object.keys(obj);
    };
    FeatureFlagsComponent.prototype.addNewFeatureFlag = function () {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_feature_flags_create_or_update_feature_flags_component__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdateFeatureFlagsComponent"]);
        modalRef.result.then(function (newConfig) {
            _this.loadFeatureFlags();
        });
    };
    FeatureFlagsComponent.prototype.editFeatureFlag = function (featureFlagObj) {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_feature_flags_create_or_update_feature_flags_component__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdateFeatureFlagsComponent"]);
        modalRef.componentInstance.id = featureFlagObj.id;
        modalRef.componentInstance.name = featureFlagObj.name;
        modalRef.componentInstance.description = featureFlagObj.description;
        modalRef.componentInstance.flags = featureFlagObj.flags;
        modalRef.result.then(function (newConfig) {
            _this.loadFeatureFlags();
        });
    };
    FeatureFlagsComponent.prototype.deleteFeatureFlag = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(_shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["GeneralDeleteComponent"]);
        modalRef.componentInstance.title = item.name;
        modalRef.result.then(function (newConfig) {
            _this.userData.deleteFeatureFlags(item.id).subscribe(function (response) {
                _this.loadFeatureFlags();
            });
        });
    };
    FeatureFlagsComponent.ctorParameters = function () { return [
        { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    FeatureFlagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-flags',
            template: __webpack_require__(/*! raw-loader!./feature-flags.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.html"),
            styles: [__webpack_require__(/*! ./feature-flags.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/feature-flags/feature-flags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], FeatureFlagsComponent);
    return FeatureFlagsComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".widget {\n  padding: 2.5rem 3rem;\n}\n.widget .widget {\n  margin-bottom: 2rem;\n}\n.widget .widget-heading {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n.widget .widget-heading .widget-settings-icon:hover {\n  color: #fff;\n}\n.widget .widget-heading .last-updated {\n  font-size: 1.1rem;\n}\n.widget .widget-heading-performance {\n  border-bottom: 0px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n.widget .widget-heading-performance .widget-settings-icon:hover {\n  color: #fff;\n}\n.widget .widget-heading-performance .last-updated {\n  font-size: 1.1rem;\n}\n.widget .widget-body .widget {\n  padding: 0;\n}\n.widget .widget-body .widget .widget-heading {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n}\n.widget .widget-body-config {\n  background: rgba(255, 255, 255, 0.15);\n  border: 0.5rem dashed rgba(255, 255, 255, 0.6);\n  border-radius: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  margin: 1rem 0;\n  padding: 2rem;\n  text-align: center;\n}\n.widget .widget-body-config .fa {\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.75rem;\n  padding: 0.6rem 0.5rem;\n  border-radius: 50%;\n  transition: border-color 300ms linear;\n}\n.widget.configure .widget-settings-icon {\n  display: none;\n}\n.widget.configure .widget-body-main {\n  display: none;\n}\n.widget.configure .widget-body-config {\n  display: block;\n}\n.widget.configure .widget-body-config:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.8);\n  color: rgba(255, 255, 255, 0.8);\n}\n.widget.configure .widget-body-config:hover .fa {\n  border-color: rgba(255, 255, 255, 0.8);\n}\n.cicd-modal-content {\n  margin-left: 10%;\n}\n.widget-modal {\n  padding: 1rem 5rem 3rem;\n}\n.widget-modal .widget-modal-close {\n  background: transparent;\n  cursor: pointer;\n  color: #C8C8C8;\n  font-weight: bold;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 3rem;\n  height: 3rem;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  opacity: 0.7;\n  font-size: 1.5em;\n  line-height: 1em;\n  transition: opacity 0.2s linear;\n}\n.widget-modal .widget-modal-close:hover {\n  opacity: 1;\n}\n.widget-modal .widget-modal-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  text-align: center;\n}\n.widget-modal .widget-modal-heading-markup {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  padding-bottom: 8px;\n}\n.widget-modal .text-danger {\n  color: #c75e5e !important;\n}\n.widget-modal .text-success {\n  color: #28a745 !important !important;\n}\n.widget-modal .fa {\n  color: rgba(0, 0, 0, 0.5);\n}\n.widget-modal .btn .fa, .widget-modal .btn {\n  color: inherit;\n}\n.widget-modal .widget-modal-body .modal-label {\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n.widget-modal .widget-modal-body .widget-modal-divider, .widget-modal .widget-modal-body hr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 1px;\n}\n.widget-detail {\n  padding: 1rem 5rem 3rem;\n}\n.widget-detail .widget-detail-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 3rem;\n  padding: 1rem;\n}\n.widget-detail .widget-detail-body .table {\n  border-collapse: separate;\n}\n.widget-detail .widget-detail-body .table th {\n  padding: 4px;\n  font-weight: 900;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  table-layout: fixed;\n}\n.widget-detail .widget-detail-body .table td {\n  padding: 4px;\n  word-wrap: break-word;\n}\n.widget-detail .detail-close {\n  position: absolute;\n  right: 0.4rem;\n  top: 0.4rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n.widget-detail .detail-close:hover {\n  color: rgba(128, 128, 128, 0.5);\n}\ntr.dash-row > td {\n  border-top: none !important;\n  padding: 0 !important;\n  line-height: 3.25rem;\n  vertical-align: middle !important;\n}\n.dash-row {\n  line-height: 3.25rem;\n  vertical-align: middle;\n}\n.dash-row .fa {\n  line-height: 3.25rem;\n  margin-right: 0.5rem;\n}\n.dash-row.clickable:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.dash-overflow {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dash-modal-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.8rem 0;\n}\n.dash-modal-row:first-of-type {\n  border-top: none;\n}\n.dash-progress-bar > div {\n  float: left;\n  height: 3rem;\n  z-index: 2;\n}\n.dash-progress-bar > div:first-child {\n  z-index: 3;\n}\n.dash-progress-bar > div:last-child {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n.h3 {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n.btn-primary {\n  font-weight: 700;\n}\n.btn-primary:hover {\n  color: #fff;\n  background: #152131;\n  border-color: #152131;\n}\n.btn-primary {\n  background-image: linear-gradient(to bottom, #384250 0, #152131 100%);\n  background-repeat: repeat-x;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n  transition: color 0.2s linear;\n  font-weight: 600;\n  padding: 10px 24px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9) !important;\n  background-color: #152131;\n  border-color: #152131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9nZW5lcmF0ZS1hcGktdG9rZW5zL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXGdlbmVyYXRlLWFwaS10b2tlbnNcXGdlbmVyYXRlLWFwaS10b2tlbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvZ2VuZXJhdGUtYXBpLXRva2Vucy9nZW5lcmF0ZS1hcGktdG9rZW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7QUNBSjtBREVJO0VBQ0ksbUJBQUE7QUNBUjtBREdJO0VBQ0ksaURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNEUjtBRElZO0VBQ0ksV0FBQTtBQ0ZoQjtBREtRO0VBQ0ksaUJBQUE7QUNIWjtBRE1JO0VBQ0ksaURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNKUjtBRE9ZO0VBQ0ksV0FBQTtBQ0xoQjtBRFFRO0VBQ0ksaUJBQUE7QUNOWjtBRFNJO0VBQ0ksVUFBQTtBQ1BSO0FEU1E7RUFDSSw4Q0FBQTtFQUNBLHlCQUFBO0FDUFo7QURXSTtFQUNJLHFDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFdRO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQ0FBQTtBQ1ZaO0FEZVE7RUFDSSxhQUFBO0FDYlo7QURnQlE7RUFDSSxhQUFBO0FDZFo7QURpQlE7RUFDSSxjQUFBO0FDZlo7QURpQlk7RUFDSSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7QUNmaEI7QURpQmdCO0VBQ0ksc0NBQUE7QUNmcEI7QUR1QkE7RUFDRSxnQkFBQTtBQ3BCRjtBRHNCQTtFQUNJLHVCQUFBO0FDbkJKO0FEcUJJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDbkJSO0FEcUJRO0VBQ0ksVUFBQTtBQ25CWjtBRHVCSTtFQUNJLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3JCUjtBRHdCSTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7QUN0QlI7QUR5Qkk7RUFDSSx5QkFBQTtBQ3ZCUjtBRDBCSTtFQUNJLG9DQUFBO0FDeEJSO0FEMkJJO0VBQ0kseUJBQUE7QUN6QlI7QUQ0Qkk7RUFDSSxjQUFBO0FDMUJSO0FEOEJRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM1Qlo7QUQrQlE7RUFDSSw0Q0FBQTtFQUNBLFdBQUE7QUM3Qlo7QURrQ0E7RUFDSSx1QkFBQTtBQy9CSjtBRGlDSTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDL0JSO0FEbUNRO0VBQ0kseUJBQUE7QUNqQ1o7QURrQ1k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDaENoQjtBRGtDWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ2hDaEI7QURxQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNuQ1I7QURvQ1E7RUFDSSwrQkFBQTtBQ2xDWjtBRHVDQTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FDcENKO0FEdUNBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQ3BDSjtBRHNDSTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUNwQ1I7QUR1Q0k7RUFDSSwyQ0FBQTtBQ3JDUjtBRHlDQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ3RDSjtBRHlDQTtFQUNJLHdDQUFBO0VBQ0EsaUJBQUE7QUN0Q0o7QUR3Q0k7RUFDSSxnQkFBQTtBQ3RDUjtBRDJDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3hDUjtBRDBDUTtFQUNJLFVBQUE7QUN4Q1o7QUQyQ1E7RUFDSSxVQUFBO0VBQ0EsMkNBQUE7QUN6Q1o7QURnREE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUM3Q0o7QURpREE7RUFDSSxnQkFBQTtBQzlDSjtBRCtDSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDN0NSO0FEaURBO0VBQ0kscUVBQUE7RUFDQSwyQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQzlDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvZ2VuZXJhdGUtYXBpLXRva2Vucy9nZW5lcmF0ZS1hcGktdG9rZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud2lkZ2V0IHtcbiAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcblxuICAgIC53aWRnZXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgIC53aWRnZXQtaGVhZGluZyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gICAgICAgIC53aWRnZXQtc2V0dGluZ3MtaWNvbiB7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5sYXN0LXVwZGF0ZWQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLndpZGdldC1oZWFkaW5nLXBlcmZvcm1hbmNlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcblxuICAgICAgICAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICAjZmZmIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGFzdC11cGRhdGVkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC53aWRnZXQtYm9keSAud2lkZ2V0IHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAud2lkZ2V0LWhlYWRpbmcge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSkgO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53aWRnZXQtYm9keS1jb25maWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgO1xuICAgICAgICBib3JkZXI6IC41cmVtIGRhc2hlZCAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIGNvbG9yOiAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuZmEge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogLjZyZW0gLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOig1MCUpO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uOihib3JkZXItY29sb3IgMzAwbXMgbGluZWFyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuY29uZmlndXJlIHtcbiAgICAgICAgLndpZGdldC1zZXR0aW5ncy1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud2lkZ2V0LWJvZHktbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpZGdldC1ib2R5LWNvbmZpZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMzApO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuXG4gICAgICAgICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLmNpY2QtbW9kYWwtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ud2lkZ2V0LW1vZGFsIHtcbiAgICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcblxuICAgIC53aWRnZXQtbW9kYWwtY2xvc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogI0M4QzhDODs7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgdHJhbnNpdGlvbjoob3BhY2l0eSAuMnMgbGluZWFyKTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2lkZ2V0LW1vZGFsLWhlYWRpbmcge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC53aWRnZXQtbW9kYWwtaGVhZGluZy1tYXJrdXAge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWRhbmdlciB7XG4gICAgICAgIGNvbG9yOiAjYzc1ZTVlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRleHQtc3VjY2VzcyB7XG4gICAgICAgIGNvbG9yOiAgIzI4YTc0NSAhaW1wb3J0YW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZhe1xuICAgICAgICBjb2xvcjogIHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgIH1cblxuICAgIC5idG4gLmZhLCAuYnRuICB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC53aWRnZXQtbW9kYWwtYm9keSB7XG4gICAgICAgIC5tb2RhbC1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAud2lkZ2V0LW1vZGFsLWRpdmlkZXIsIGhyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53aWRnZXQtZGV0YWlsIHtcbiAgICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcblxuICAgIC53aWRnZXQtZGV0YWlsLWhlYWRpbmcge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cblxuICAgIC53aWRnZXQtZGV0YWlsLWJvZHkge1xuICAgICAgICAudGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICAgICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlsLWNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLjRyZW07XG4gICAgICAgIHRvcDogLjRyZW07XG4gICAgICAgIGNvbG9yOiAgcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4ocmdiYSgwLCAwLCAwLCAuNSksIDUwJSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnRyLmRhc2gtcm93ID4gdGQge1xuICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC1yb3cge1xuICAgIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAuZmEge1xuICAgICAgICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICB9XG5cbiAgICAmLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSk7XG4gICAgfVxufVxuXG4uZGFzaC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFzaC1tb2RhbC1yb3cge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAuMSk7XG4gICAgcGFkZGluZzogLjhyZW0gMDtcblxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxufVxuXG4uZGFzaC1wcm9ncmVzcy1iYXIge1xuICAgID4gZGl2IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG4uaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbi5idG4tcHJpbWFyeSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNTIxMzE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzE1MjEzMTtcbiAgICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjMzg0MjUwIDAsIzE1MjEzMSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsLjM1KTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgbGluZWFyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIxMzE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xufVxuXG5cbiIsIi53aWRnZXQge1xuICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcbn1cbi53aWRnZXQgLndpZGdldCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZyAud2lkZ2V0LXNldHRpbmdzLWljb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nIC5sYXN0LXVwZGF0ZWQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nLXBlcmZvcm1hbmNlIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nLXBlcmZvcm1hbmNlIC53aWRnZXQtc2V0dGluZ3MtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2UgLmxhc3QtdXBkYXRlZCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWJvZHkgLndpZGdldCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keSAud2lkZ2V0IC53aWRnZXQtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keS1jb25maWcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDAuNXJlbSBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keS1jb25maWcgLmZhIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjZyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAzMDBtcyBsaW5lYXI7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LW1haW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LWNvbmZpZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LWNvbmZpZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktY29uZmlnOmhvdmVyIC5mYSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uY2ljZC1tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLndpZGdldC1tb2RhbCB7XG4gIHBhZGRpbmc6IDFyZW0gNXJlbSAzcmVtO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWNsb3NlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1oZWFkaW5nLW1hcmt1cCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLndpZGdldC1tb2RhbCAudGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2M3NWU1ZSAhaW1wb3J0YW50O1xufVxuLndpZGdldC1tb2RhbCAudGV4dC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudCAhaW1wb3J0YW50O1xufVxuLndpZGdldC1tb2RhbCAuZmEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLndpZGdldC1tb2RhbCAuYnRuIC5mYSwgLndpZGdldC1tb2RhbCAuYnRuIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSAubW9kYWwtbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWJvZHkgLndpZGdldC1tb2RhbC1kaXZpZGVyLCAud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSBociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLndpZGdldC1kZXRhaWwge1xuICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogNHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ud2lkZ2V0LWRldGFpbCAuZGV0YWlsLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC40cmVtO1xuICB0b3A6IDAuNHJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi53aWRnZXQtZGV0YWlsIC5kZXRhaWwtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xufVxuXG50ci5kYXNoLXJvdyA+IHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLXJvdyB7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRhc2gtcm93IC5mYSB7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5kYXNoLXJvdy5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4uZGFzaC1vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFzaC1tb2RhbC1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cbi5kYXNoLW1vZGFsLXJvdzpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmRhc2gtcHJvZ3Jlc3MtYmFyID4gZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMjtcbn1cbi5kYXNoLXByb2dyZXNzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHotaW5kZXg6IDM7XG59XG4uZGFzaC1wcm9ncmVzcy1iYXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMTUyMTMxO1xuICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzODQyNTAgMCwgIzE1MjEzMSAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjEzMTtcbiAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: GenerateApiTokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateApiTokensComponent", function() { return GenerateApiTokensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_edit_token_modal_edit_token_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/edit-token-modal/edit-token-modal.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.ts");
/* harmony import */ var _modal_generate_api_token_modal_generate_api_token_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/generate-api-token-modal/generate-api-token-modal.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.ts");
/* harmony import */ var _shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/modals/general-delete-modal/general-delete-modal.component */ "./src/app/shared/modals/general-delete-modal/general-delete-modal.component.ts");







var GenerateApiTokensComponent = /** @class */ (function () {
    function GenerateApiTokensComponent(userData, modalService) {
        this.userData = userData;
        this.modalService = modalService;
        this.error = {};
        this.apitokens = [];
        this.tokenSearch = '';
        this.p = 1;
    }
    GenerateApiTokensComponent.prototype.ngOnInit = function () {
        this.loadApiToken();
    };
    GenerateApiTokensComponent.prototype.loadApiToken = function () {
        var _this = this;
        this.userData.apitokens().subscribe(function (response) {
            _this.apitokens = response;
        });
    };
    GenerateApiTokensComponent.prototype.editToken = function (apitoken) {
        this.openModal(apitoken);
    };
    GenerateApiTokensComponent.prototype.generateToken = function () {
        var _this = this;
        var modalRef = this.modalService.open(_modal_generate_api_token_modal_generate_api_token_modal_component__WEBPACK_IMPORTED_MODULE_5__["GenerateApiTokenModalComponent"]);
        modalRef.result.then(function (newConfig) {
        }).catch(function (error) {
            _this.loadApiToken();
        });
    };
    GenerateApiTokensComponent.prototype.deleteToken = function (apiToken) {
        var _this = this;
        var modalRef = this.modalService.open(_shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["GeneralDeleteComponent"]);
        modalRef.componentInstance.title = apiToken.apiUser;
        modalRef.result.then(function (newConfig) {
            _this.userData.deleteToken(apiToken.id).subscribe(function (response) {
                _this.loadApiToken();
            });
        }).catch(function (error) {
            console.log('delete error newConfig :' + error);
        });
    };
    GenerateApiTokensComponent.prototype.openModal = function (item) {
        var _this = this;
        var modalRef = this.modalService.open(_modal_edit_token_modal_edit_token_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditTokenModalComponent"]);
        modalRef.componentInstance.tokenItem = item;
        modalRef.componentInstance.apiUser = item.apiUser;
        modalRef.componentInstance.date = this.parseNgbDate(item.expirationDt);
        modalRef.result.then(function (newConfig) {
            _this.loadApiToken();
        }).catch(function (error) {
            _this.loadApiToken();
        });
    };
    GenerateApiTokensComponent.prototype.parseNgbDate = function (value) {
        if (value) {
            var date = new Date(value);
            return {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()
            };
        }
        return null;
    };
    GenerateApiTokensComponent.ctorParameters = function () { return [
        { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    GenerateApiTokensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-tokens',
            template: __webpack_require__(/*! raw-loader!./generate-api-tokens.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.html"),
            styles: [__webpack_require__(/*! ./generate-api-tokens.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/generate-api-tokens/generate-api-tokens.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], GenerateApiTokensComponent);
    return GenerateApiTokensComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-push {\n  left: 16%;\n}\n\n.col-push {\n  left: 16%;\n}\n\n.widget {\n  padding: 2.5rem 3rem;\n}\n\n.widget .widget {\n  margin-bottom: 2rem;\n}\n\n.widget .widget-heading {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-heading-performance {\n  border-bottom: 0px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading-performance .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading-performance .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-body .widget {\n  padding: 0;\n}\n\n.widget .widget-body .widget .widget-heading {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n}\n\n.widget .widget-body-config {\n  background: rgba(255, 255, 255, 0.15);\n  border: 0.5rem dashed rgba(255, 255, 255, 0.6);\n  border-radius: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  margin: 1rem 0;\n  padding: 2rem;\n  text-align: center;\n}\n\n.widget .widget-body-config .fa {\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.75rem;\n  padding: 0.6rem 0.5rem;\n  border-radius: 50%;\n  transition: border-color 300ms linear;\n}\n\n.widget.configure .widget-settings-icon {\n  display: none;\n}\n\n.widget.configure .widget-body-main {\n  display: none;\n}\n\n.widget.configure .widget-body-config {\n  display: block;\n}\n\n.widget.configure .widget-body-config:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.8);\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.widget.configure .widget-body-config:hover .fa {\n  border-color: rgba(255, 255, 255, 0.8);\n}\n\n.cicd-modal-content {\n  margin-left: 10%;\n}\n\n.widget-modal {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-modal .widget-modal-close {\n  background: transparent;\n  cursor: pointer;\n  color: #C8C8C8;\n  font-weight: bold;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 3rem;\n  height: 3rem;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  opacity: 0.7;\n  font-size: 1.5em;\n  line-height: 1em;\n  transition: opacity 0.2s linear;\n}\n\n.widget-modal .widget-modal-close:hover {\n  opacity: 1;\n}\n\n.widget-modal .widget-modal-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-heading-markup {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  padding-bottom: 8px;\n}\n\n.widget-modal .text-danger {\n  color: #c75e5e !important;\n}\n\n.widget-modal .text-success {\n  color: #28a745 !important;\n}\n\n.widget-modal .fa {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-modal .btn .fa, .widget-modal .btn {\n  color: inherit;\n}\n\n.widget-modal .widget-modal-body .modal-label {\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-body .widget-modal-divider, .widget-modal .widget-modal-body hr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 1px;\n}\n\n.widget-detail {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-detail .widget-detail-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 3rem;\n  padding: 1rem;\n}\n\n.widget-detail .widget-detail-body .table {\n  border-collapse: separate;\n}\n\n.widget-detail .widget-detail-body .table th {\n  padding: 4px;\n  font-weight: 900;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  table-layout: fixed;\n}\n\n.widget-detail .widget-detail-body .table td {\n  padding: 4px;\n  word-wrap: break-word;\n}\n\n.widget-detail .detail-close {\n  position: absolute;\n  right: 0.4rem;\n  top: 0.4rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-detail .detail-close:hover {\n  color: rgba(128, 128, 128, 0.5);\n}\n\ntr.dash-row > td {\n  border-top: none !important;\n  padding: 0 !important;\n  line-height: 3.25rem;\n  vertical-align: middle !important;\n}\n\n.dash-row {\n  line-height: 3.25rem;\n  vertical-align: middle;\n}\n\n.dash-row .fa {\n  line-height: 3.25rem;\n  margin-right: 0.5rem;\n}\n\n.dash-row.clickable:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.dash-overflow {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.dash-modal-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.8rem 0;\n}\n\n.dash-modal-row:first-of-type {\n  border-top: none;\n}\n\n.dash-progress-bar > div {\n  float: left;\n  height: 3rem;\n  z-index: 2;\n}\n\n.dash-progress-bar > div:first-child {\n  z-index: 3;\n}\n\n.dash-progress-bar > div:last-child {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.h3 {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n\n.btn-primary {\n  font-weight: 700;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background: #152131;\n  border-color: #152131;\n}\n\n.btn-primary {\n  background-image: linear-gradient(to bottom, #384250 0, #152131 100%);\n  background-repeat: repeat-x;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n  transition: color 0.2s linear;\n  font-weight: 600;\n  padding: 10px 24px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9) !important;\n  background-color: #152131;\n  border-color: #152131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tYW5hZ2UtYWRtaW5zL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXG1hbmFnZS1hZG1pbnNcXG1hbmFnZS1hZG1pbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvbWFuYWdlLWFkbWlucy9tYW5hZ2UtYWRtaW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURFSTtFQUNJLG1CQUFBO0FDQVI7O0FER0k7RUFDSSxpREFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0RSOztBRElZO0VBQ0ksV0FBQTtBQ0ZoQjs7QURLUTtFQUNJLGlCQUFBO0FDSFo7O0FETUk7RUFDSSxpREFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0pSOztBRE9ZO0VBQ0ksV0FBQTtBQ0xoQjs7QURRUTtFQUNJLGlCQUFBO0FDTlo7O0FEU0k7RUFDSSxVQUFBO0FDUFI7O0FEU1E7RUFDSSw4Q0FBQTtFQUNBLHlCQUFBO0FDUFo7O0FEV0k7RUFDSSxxQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDVFI7O0FEV1E7RUFDSSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFDQUFBO0FDVlo7O0FEZVE7RUFDSSxhQUFBO0FDYlo7O0FEZ0JRO0VBQ0ksYUFBQTtBQ2RaOztBRGlCUTtFQUNJLGNBQUE7QUNmWjs7QURpQlk7RUFDSSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7QUNmaEI7O0FEaUJnQjtFQUNJLHNDQUFBO0FDZnBCOztBRHVCQTtFQUNFLGdCQUFBO0FDcEJGOztBRHNCQTtFQUNJLHVCQUFBO0FDbkJKOztBRHFCSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ25CUjs7QURxQlE7RUFDSSxVQUFBO0FDbkJaOztBRHVCSTtFQUNJLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3JCUjs7QUR3Qkk7RUFDSSw0Q0FBQTtFQUNBLG1CQUFBO0FDdEJSOztBRHlCSTtFQUNJLHlCQUFBO0FDdkJSOztBRDBCSTtFQUNJLHlCQUFBO0FDeEJSOztBRDJCSTtFQUNJLHlCQUFBO0FDekJSOztBRDRCSTtFQUNJLGNBQUE7QUMxQlI7O0FEOEJRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUM1Qlo7O0FEK0JRO0VBQ0ksNENBQUE7RUFDQSxXQUFBO0FDN0JaOztBRGtDQTtFQUNJLHVCQUFBO0FDL0JKOztBRGlDSTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDL0JSOztBRG1DUTtFQUNJLHlCQUFBO0FDakNaOztBRGtDWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUNoQ2hCOztBRGtDWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ2hDaEI7O0FEcUNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDbkNSOztBRG9DUTtFQUNJLCtCQUFBO0FDbENaOztBRHVDQTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FDcENKOztBRHVDQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUNwQ0o7O0FEc0NJO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtBQ3BDUjs7QUR1Q0k7RUFDSSwyQ0FBQTtBQ3JDUjs7QUR5Q0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUN0Q0o7O0FEeUNBO0VBQ0ksd0NBQUE7RUFDQSxpQkFBQTtBQ3RDSjs7QUR3Q0k7RUFDSSxnQkFBQTtBQ3RDUjs7QUQyQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUN4Q1I7O0FEMENRO0VBQ0ksVUFBQTtBQ3hDWjs7QUQyQ1E7RUFDSSxVQUFBO0VBQ0EsMkNBQUE7QUN6Q1o7O0FEZ0RBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDN0NKOztBRGlEQTtFQUNJLGdCQUFBO0FDOUNKOztBRCtDSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDN0NSOztBRGlEQTtFQUNJLHFFQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUM5Q0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21hbmFnZS1hZG1pbnMvbWFuYWdlLWFkbWlucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtcHVzaHtcbiAgICBsZWZ0OiAxNiU7XG59XG5cbi5jb2wtcHVzaHtcbiAgICBsZWZ0OiAxNiU7XG59XG5cblxuLndpZGdldCB7XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XG5cbiAgICAud2lkZ2V0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAud2lkZ2V0LWhlYWRpbmcge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICAgICAgICAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubGFzdC11cGRhdGVkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG5cbiAgICAgICAgLndpZGdldC1zZXR0aW5ncy1pY29uIHtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAgI2ZmZiA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxhc3QtdXBkYXRlZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAud2lkZ2V0LWJvZHkgLndpZGdldCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgLndpZGdldC1oZWFkaW5nIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpIDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDtcbiAgICAgICAgYm9yZGVyOiAuNXJlbSBkYXNoZWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBjb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmZhIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC42cmVtIC41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czooNTAlKTtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjooYm9yZGVyLWNvbG9yIDMwMG1zIGxpbmVhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvbmZpZ3VyZSB7XG4gICAgICAgIC53aWRnZXQtc2V0dGluZ3MtaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpZGdldC1ib2R5LW1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aWRnZXQtYm9keS1jb25maWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMwKTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcblxuICAgICAgICAgICAgICAgIC5mYSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5jaWNkLW1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLndpZGdldC1tb2RhbCB7XG4gICAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG5cbiAgICAud2lkZ2V0LW1vZGFsLWNsb3NlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICNDOEM4Qzg7O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDFyZW07XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgIHRyYW5zaXRpb246KG9wYWNpdHkgLjJzIGxpbmVhcik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndpZGdldC1tb2RhbC1oZWFkaW5nIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAud2lkZ2V0LW1vZGFsLWhlYWRpbmctbWFya3VwIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjM1KTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAudGV4dC1kYW5nZXIge1xuICAgICAgICBjb2xvcjogI2M3NWU1ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogICMyOGE3NDUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZmF7XG4gICAgICAgIGNvbG9yOiAgcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgfVxuXG4gICAgLmJ0biAuZmEsIC5idG4gIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLndpZGdldC1tb2RhbC1ib2R5IHtcbiAgICAgICAgLm1vZGFsLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aWRnZXQtbW9kYWwtZGl2aWRlciwgaHIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLndpZGdldC1kZXRhaWwge1xuICAgIHBhZGRpbmc6IDFyZW0gNXJlbSAzcmVtO1xuXG4gICAgLndpZGdldC1kZXRhaWwtaGVhZGluZyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLndpZGdldC1kZXRhaWwtYm9keSB7XG4gICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWwtY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAuNHJlbTtcbiAgICAgICAgdG9wOiAuNHJlbTtcbiAgICAgICAgY29sb3I6ICByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbihyZ2JhKDAsIDAsIDAsIC41KSwgNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudHIuZGFzaC1yb3cgPiB0ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLXJvdyB7XG4gICAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgIC5mYSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cblxuICAgICYuY2xpY2thYmxlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KTtcbiAgICB9XG59XG5cbi5kYXNoLW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kYXNoLW1vZGFsLXJvdyB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBwYWRkaW5nOiAuOHJlbSAwO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB9XG59XG5cbi5kYXNoLXByb2dyZXNzLWJhciB7XG4gICAgPiBkaXYge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cbi5oMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzE1MjEzMTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xuICAgIH1cbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMzODQyNTAgMCwjMTUyMTMxIDEwMCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwuMzUpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBsaW5lYXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjEzMTtcbiAgICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG59XG4iLCIuY29sLXB1c2gge1xuICBsZWZ0OiAxNiU7XG59XG5cbi5jb2wtcHVzaCB7XG4gIGxlZnQ6IDE2JTtcbn1cblxuLndpZGdldCB7XG4gIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xufVxuLndpZGdldCAud2lkZ2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nIC53aWRnZXQtc2V0dGluZ3MtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmcgLmxhc3QtdXBkYXRlZCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2Uge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2UgLndpZGdldC1zZXR0aW5ncy1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSAubGFzdC11cGRhdGVkIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keSAud2lkZ2V0IHtcbiAgcGFkZGluZzogMDtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5IC53aWRnZXQgLndpZGdldC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5LWNvbmZpZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGJvcmRlcjogMC41cmVtIGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5LWNvbmZpZyAuZmEge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDMwMG1zIGxpbmVhcjtcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtc2V0dGluZ3MtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktbWFpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktY29uZmlnOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtYm9keS1jb25maWc6aG92ZXIgLmZhIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5jaWNkLW1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ud2lkZ2V0LW1vZGFsIHtcbiAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI0M4QzhDODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWhlYWRpbmctbWFya3VwIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ud2lkZ2V0LW1vZGFsIC50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjYzc1ZTVlICFpbXBvcnRhbnQ7XG59XG4ud2lkZ2V0LW1vZGFsIC50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuLndpZGdldC1tb2RhbCAuZmEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLndpZGdldC1tb2RhbCAuYnRuIC5mYSwgLndpZGdldC1tb2RhbCAuYnRuIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSAubW9kYWwtbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWJvZHkgLndpZGdldC1tb2RhbC1kaXZpZGVyLCAud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSBociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLndpZGdldC1kZXRhaWwge1xuICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogNHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ud2lkZ2V0LWRldGFpbCAuZGV0YWlsLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC40cmVtO1xuICB0b3A6IDAuNHJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi53aWRnZXQtZGV0YWlsIC5kZXRhaWwtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xufVxuXG50ci5kYXNoLXJvdyA+IHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLXJvdyB7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRhc2gtcm93IC5mYSB7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5kYXNoLXJvdy5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4uZGFzaC1vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFzaC1tb2RhbC1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cbi5kYXNoLW1vZGFsLXJvdzpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmRhc2gtcHJvZ3Jlc3MtYmFyID4gZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMjtcbn1cbi5kYXNoLXByb2dyZXNzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHotaW5kZXg6IDM7XG59XG4uZGFzaC1wcm9ncmVzcy1iYXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMTUyMTMxO1xuICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzODQyNTAgMCwgIzE1MjEzMSAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjEzMTtcbiAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ManageAdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminsComponent", function() { return ManageAdminsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var ManageAdminsComponent = /** @class */ (function () {
    function ManageAdminsComponent(userData, authService) {
        this.userData = userData;
        this.authService = authService;
        this.error = {};
        this.users = [];
        this.userSearch = '';
        this.p = 1;
        this.authType = this.authService.getAuthType();
        this.username = this.authService.getUserName();
    }
    ManageAdminsComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    ManageAdminsComponent.prototype.loadUser = function () {
        var _this = this;
        this.userData.users().subscribe(function (response) {
            _this.users = response;
        });
    };
    ManageAdminsComponent.prototype.promoteUserToAdmin = function (user) {
        var _this = this;
        this.userData.promoteUserToAdmin(user).subscribe(function (response) {
            var index = _this.users.indexOf(user);
            _this.users[index] = response.data;
            _this.loadUser();
        }, function (error) {
            _this.error = error;
        });
    };
    ManageAdminsComponent.prototype.demoteUserFromAdmin = function (user) {
        var _this = this;
        this.userData.demoteUserFromAdmin(user).subscribe(function (response) {
            var index = _this.users.indexOf(user);
            _this.users[index] = response.data;
            _this.loadUser();
        }, function (error) {
            _this.error = error;
        });
    };
    ManageAdminsComponent.ctorParameters = function () { return [
        { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ManageAdminsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-admins',
            template: __webpack_require__(/*! raw-loader!./manage-admins.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.html"),
            styles: [__webpack_require__(/*! ./manage-admins.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/manage-admins/manage-admins.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ManageAdminsComponent);
    return ManageAdminsComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  padding: 10px;\n}\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 43px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.1s;\n  height: 22px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9jcmVhdGUtb3ItdXBkYXRlLWFwaS1hdWRpdC1wcm9wZXJ0aWVzL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXG1vZGFsXFxjcmVhdGUtb3ItdXBkYXRlLWFwaS1hdWRpdC1wcm9wZXJ0aWVzXFxjcmVhdGUtb3ItdXBkYXRlLWFwaS1hdWRpdC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2NyZWF0ZS1vci11cGRhdGUtYXBpLWF1ZGl0LXByb3BlcnRpZXMvY3JlYXRlLW9yLXVwZGF0ZS1hcGktYXVkaXQtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQSwyQ0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUEsK0JBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQSxlQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0NGOztBREVBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2NyZWF0ZS1vci11cGRhdGUtYXBpLWF1ZGl0LXByb3BlcnRpZXMvY3JlYXRlLW9yLXVwZGF0ZS1hcGktYXVkaXQtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQzcHg7XG59XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjFzO1xuICB0cmFuc2l0aW9uOiAuMXM7XG4gIGhlaWdodDogMjJweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCIuZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0M3B4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMXM7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIGhlaWdodDogMjJweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: CreateOrUpdateApiAuditPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrUpdateApiAuditPropertiesComponent", function() { return CreateOrUpdateApiAuditPropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin_modules/admin_dashboard/services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");





var CreateOrUpdateApiAuditPropertiesComponent = /** @class */ (function () {
    function CreateOrUpdateApiAuditPropertiesComponent(activeModal, formBuilder, userData) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.userData = userData;
        this.propertiesJSON = '';
        this.disableName = false;
        this.createForm();
    }
    CreateOrUpdateApiAuditPropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.apiAuditPropertiesForm.get('name').setValue(_this.name);
            _this.apiAuditPropertiesForm.get('properties').setValue(_this.properties);
            _this.propertiesJSON = JSON.stringify(_this.properties);
            if (_this.name) {
                _this.disableName = true;
            }
        });
    };
    CreateOrUpdateApiAuditPropertiesComponent.prototype.createForm = function () {
        this.apiAuditPropertiesForm = this.formBuilder.group({
            name: '',
            properties: ''
        });
    };
    CreateOrUpdateApiAuditPropertiesComponent.prototype.submit = function () {
        var _this = this;
        var collector = {};
        if (this.id) {
            // Edit
            try {
                collector = {
                    id: this.id,
                    name: this.apiAuditPropertiesForm.get('name').value,
                    collectorType: 'ApiAudit',
                    properties: JSON.parse(this.apiAuditPropertiesForm.get('properties').value),
                };
            }
            catch (e) {
            }
        }
        else {
            // Post
            try {
                collector = {
                    name: this.apiAuditPropertiesForm.get('name').value,
                    collectorType: 'ApiAudit',
                    properties: JSON.parse(this.apiAuditPropertiesForm.get('properties').value),
                };
            }
            catch (e) {
            }
        }
        this.userData
            .createOrUpdatePropertiesBuilder(collector)
            .subscribe(function (response) {
            _this.activeModal.close('close');
        }, function (error) {
            console.log(error);
        });
    };
    CreateOrUpdateApiAuditPropertiesComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateOrUpdateApiAuditPropertiesComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateOrUpdateApiAuditPropertiesComponent.prototype, "properties", void 0);
    CreateOrUpdateApiAuditPropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-or-update-api-audit-properties',
            template: __webpack_require__(/*! raw-loader!./create-or-update-api-audit-properties.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.html"),
            styles: [__webpack_require__(/*! ./create-or-update-api-audit-properties.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]])
    ], CreateOrUpdateApiAuditPropertiesComponent);
    return CreateOrUpdateApiAuditPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  padding: 10px;\n}\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 43px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.1s;\n  height: 22px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9jcmVhdGUtb3ItdXBkYXRlLWFwaS1wcm9wZXJ0aWVzL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXG1vZGFsXFxjcmVhdGUtb3ItdXBkYXRlLWFwaS1wcm9wZXJ0aWVzXFxjcmVhdGUtb3ItdXBkYXRlLWFwaS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2NyZWF0ZS1vci11cGRhdGUtYXBpLXByb3BlcnRpZXMvY3JlYXRlLW9yLXVwZGF0ZS1hcGktcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQSwyQ0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUEsK0JBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQSxlQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0NGOztBREVBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2NyZWF0ZS1vci11cGRhdGUtYXBpLXByb3BlcnRpZXMvY3JlYXRlLW9yLXVwZGF0ZS1hcGktcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQzcHg7XG59XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjFzO1xuICB0cmFuc2l0aW9uOiAuMXM7XG4gIGhlaWdodDogMjJweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCIuZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0M3B4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMXM7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIGhlaWdodDogMjJweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: CreateOrUpdateApiPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrUpdateApiPropertiesComponent", function() { return CreateOrUpdateApiPropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin_modules/admin_dashboard/services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");





var CreateOrUpdateApiPropertiesComponent = /** @class */ (function () {
    function CreateOrUpdateApiPropertiesComponent(activeModal, formBuilder, userData) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.userData = userData;
        this.propertiesJSON = '';
        this.disableName = false;
        this.createForm();
    }
    CreateOrUpdateApiPropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.apiPropertiesForm.get('name').setValue(_this.name);
            _this.apiPropertiesForm.get('properties').setValue(_this.properties);
            _this.propertiesJSON = JSON.stringify(_this.properties);
            if (_this.name) {
                _this.disableName = true;
            }
        });
    };
    CreateOrUpdateApiPropertiesComponent.prototype.createForm = function () {
        this.apiPropertiesForm = this.formBuilder.group({
            name: '',
            properties: ''
        });
    };
    CreateOrUpdateApiPropertiesComponent.prototype.submit = function () {
        var _this = this;
        var collector = {};
        if (this.id) {
            // Edit
            try {
                collector = {
                    id: this.id,
                    name: this.apiPropertiesForm.get('name').value,
                    collectorType: 'Api',
                    properties: JSON.parse(this.apiPropertiesForm.get('properties').value),
                };
            }
            catch (e) {
            }
        }
        else {
            // Post
            try {
                collector = {
                    name: this.apiPropertiesForm.get('name').value,
                    collectorType: 'Api',
                    properties: JSON.parse(this.apiPropertiesForm.get('properties').value),
                };
            }
            catch (e) {
            }
        }
        this.userData
            .createOrUpdatePropertiesBuilder(collector)
            .subscribe(function (response) {
            _this.activeModal.close('close');
        }, function (error) {
            console.log(error);
        });
    };
    CreateOrUpdateApiPropertiesComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateOrUpdateApiPropertiesComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateOrUpdateApiPropertiesComponent.prototype, "properties", void 0);
    CreateOrUpdateApiPropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-or-update-api-properties',
            template: __webpack_require__(/*! raw-loader!./create-or-update-api-properties.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.html"),
            styles: [__webpack_require__(/*! ./create-or-update-api-properties.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]])
    ], CreateOrUpdateApiPropertiesComponent);
    return CreateOrUpdateApiPropertiesComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  padding: 10px;\n}\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 43px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: dimgrey;\n  transition: 0.1s;\n  height: 22px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9jcmVhdGUtb3ItdXBkYXRlLWZlYXR1cmUtZmxhZ3MvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcYWRtaW5fbW9kdWxlc1xcYWRtaW5fZGFzaGJvYXJkXFxkYXNoYm9hcmRcXGFkbWluLWRhc2hib2FyZFxcbW9kYWxcXGNyZWF0ZS1vci11cGRhdGUtZmVhdHVyZS1mbGFnc1xcY3JlYXRlLW9yLXVwZGF0ZS1mZWF0dXJlLWZsYWdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2NyZWF0ZS1vci11cGRhdGUtZmVhdHVyZS1mbGFncy9jcmVhdGUtb3ItdXBkYXRlLWZlYXR1cmUtZmxhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUEsMkNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUEsZUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNDRjs7QURFQSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9jcmVhdGUtb3ItdXBkYXRlLWZlYXR1cmUtZmxhZ3MvY3JlYXRlLW9yLXVwZGF0ZS1mZWF0dXJlLWZsYWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDNweDtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMXM7XG4gIHRyYW5zaXRpb246IC4xcztcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsIi5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQzcHg7XG59XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xcztcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: CreateOrUpdateFeatureFlagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrUpdateFeatureFlagsComponent", function() { return CreateOrUpdateFeatureFlagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin_modules/admin_dashboard/services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");





var CreateOrUpdateFeatureFlagsComponent = /** @class */ (function () {
    function CreateOrUpdateFeatureFlagsComponent(activeModal, formBuilder, userData) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.userData = userData;
        this.flags = {
            agileTool: '',
            artifact: '',
            build: '',
            codeQuality: '',
            deployment: '',
            libraryPolicy: '',
            scm: '',
            staticSecurityScan: '',
            test: '',
        };
        this.disableName = false;
        this.createForm();
    }
    CreateOrUpdateFeatureFlagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var e_1, _a;
            _this.featureFlagForm.get('name').setValue(_this.name);
            _this.featureFlagForm.get('description').setValue(_this.description);
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.entries(_this.flags)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), currFlag = _d[0], value = _d[1];
                    if (value) {
                        _this.featureFlagForm.get(currFlag).setValue(true);
                    }
                    else {
                        _this.featureFlagForm.get(currFlag).setValue(false);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (_this.name) {
                _this.disableName = true;
            }
        });
    };
    CreateOrUpdateFeatureFlagsComponent.prototype.createForm = function () {
        this.featureFlagForm = this.formBuilder.group({
            name: '',
            description: '',
            agileTool: Boolean,
            artifact: Boolean,
            build: Boolean,
            codeQuality: Boolean,
            deployment: Boolean,
            libraryPolicy: Boolean,
            scm: Boolean,
            staticSecurityScan: Boolean,
            test: Boolean
        });
    };
    Object.defineProperty(CreateOrUpdateFeatureFlagsComponent.prototype, "f", {
        get: function () { return this.featureFlagForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateOrUpdateFeatureFlagsComponent.prototype.submit = function () {
        var _this = this;
        var featureFlagUpdateObj = {};
        if (this.featureFlagForm.valid) {
            var flags = {
                agileTool: this.featureFlagForm.get('agileTool').value,
                artifact: this.featureFlagForm.get('artifact').value,
                build: this.featureFlagForm.get('build').value,
                codeQuality: this.featureFlagForm.get('codeQuality').value,
                deployment: this.featureFlagForm.get('deployment').value,
                libraryPolicy: this.featureFlagForm.get('libraryPolicy').value,
                scm: this.featureFlagForm.get('scm').value,
                staticSecurityScan: this.featureFlagForm.get('staticSecurityScan').value,
                test: this.featureFlagForm.get('test').value
            };
            if (this.id) {
                // Edit
                featureFlagUpdateObj = {
                    id: this.id,
                    name: this.featureFlagForm.get('name').value,
                    description: this.featureFlagForm.get('description').value,
                    flags: flags
                };
            }
            else {
                // Post
                featureFlagUpdateObj = {
                    name: this.featureFlagForm.get('name').value,
                    description: this.featureFlagForm.get('description').value,
                    flags: flags
                };
            }
            this.userData
                .createOrUpdateFeatureFlags(JSON.stringify(featureFlagUpdateObj))
                .subscribe(function (response) {
                _this.activeModal.close('close');
            }, function (error) {
                console.log(error);
            });
        }
    };
    CreateOrUpdateFeatureFlagsComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateOrUpdateFeatureFlagsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateOrUpdateFeatureFlagsComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateOrUpdateFeatureFlagsComponent.prototype, "flags", void 0);
    CreateOrUpdateFeatureFlagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-or-update-feature-flags',
            template: __webpack_require__(/*! raw-loader!./create-or-update-feature-flags.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.html"),
            styles: [__webpack_require__(/*! ./create-or-update-feature-flags.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-feature-flags/create-or-update-feature-flags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]])
    ], CreateOrUpdateFeatureFlagsComponent);
    return CreateOrUpdateFeatureFlagsComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9jcmVhdGUtb3ItdXBkYXRlLXNlcnZpY2UtYWNjb3VudC9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFxhZG1pbl9tb2R1bGVzXFxhZG1pbl9kYXNoYm9hcmRcXGRhc2hib2FyZFxcYWRtaW4tZGFzaGJvYXJkXFxtb2RhbFxcY3JlYXRlLW9yLXVwZGF0ZS1zZXJ2aWNlLWFjY291bnRcXGNyZWF0ZS1vci11cGRhdGUtc2VydmljZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2NyZWF0ZS1vci11cGRhdGUtc2VydmljZS1hY2NvdW50L2NyZWF0ZS1vci11cGRhdGUtc2VydmljZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9jcmVhdGUtb3ItdXBkYXRlLXNlcnZpY2UtYWNjb3VudC9jcmVhdGUtb3ItdXBkYXRlLXNlcnZpY2UtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiIsIi5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: CreateOrUpdateServiceAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrUpdateServiceAccountComponent", function() { return CreateOrUpdateServiceAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin_modules/admin_dashboard/services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");





var CreateOrUpdateServiceAccountComponent = /** @class */ (function () {
    function CreateOrUpdateServiceAccountComponent(activeModal, formBuilder, userData) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.userData = userData;
        this.disableName = false;
        this.createForm();
    }
    CreateOrUpdateServiceAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.serviceAccountForm.get('serviceAccountName').setValue(_this.serviceAccountName);
            _this.serviceAccountForm.get('fileNames').setValue(_this.fileNames);
        });
        if (this.serviceAccountName) {
            this.disableName = true;
        }
    };
    CreateOrUpdateServiceAccountComponent.prototype.createForm = function () {
        this.serviceAccountForm = this.formBuilder.group({
            serviceAccountName: '',
            fileNames: ''
        });
    };
    CreateOrUpdateServiceAccountComponent.prototype.submit = function () {
        var _this = this;
        if (this.serviceAccountForm.valid) {
            var accountObj = {
                serviceAccount: this.serviceAccountForm.get('serviceAccountName').value,
                fileNames: this.serviceAccountForm.get('fileNames').value
            };
            if (this.id) {
                // Edit
                this.userData
                    .updateAccount(accountObj, this.id)
                    .subscribe(function (response) {
                    _this.activeModal.close('close');
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                // Post
                this.userData
                    .createAccount(accountObj)
                    .subscribe(function (response) {
                    _this.activeModal.close('close');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    CreateOrUpdateServiceAccountComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateOrUpdateServiceAccountComponent.prototype, "serviceAccountName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateOrUpdateServiceAccountComponent.prototype, "fileNames", void 0);
    CreateOrUpdateServiceAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-or-update-service-account',
            template: __webpack_require__(/*! raw-loader!./create-or-update-service-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.html"),
            styles: [__webpack_require__(/*! ./create-or-update-service-account.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"]])
    ], CreateOrUpdateServiceAccountComponent);
    return CreateOrUpdateServiceAccountComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".token-from {\n  padding-left: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n\n.modal-content {\n  background-color: #ececec;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9lZGl0LXRva2VuLW1vZGFsL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXG1vZGFsXFxlZGl0LXRva2VuLW1vZGFsXFxlZGl0LXRva2VuLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2VkaXQtdG9rZW4tbW9kYWwvZWRpdC10b2tlbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0YsaUJBQUE7RUFDQSxvQkFBQTtFQUFzQixtQkFBQTtBQ0V4Qjs7QURDQTtFQUNFLHlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2VkaXQtdG9rZW4tbW9kYWwvZWRpdC10b2tlbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2tlbi1mcm9te1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubW9kYWwtY29udGVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cbiIsIi50b2tlbi1mcm9tIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: EditTokenModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTokenModalComponent", function() { return EditTokenModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin_modules/admin_dashboard/services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");




// @ts-ignore


var EditTokenModalComponent = /** @class */ (function () {
    function EditTokenModalComponent(activeModal, formBuilder, userData) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.userData = userData;
        this.apiUser = '';
        this.apiTokenError = false;
    }
    EditTokenModalComponent.prototype.toDateModel = function (date) {
        return date ? date.month + '/' + date.day + '/' + date.year : null;
    };
    EditTokenModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiEditForm = this.formBuilder.group({
            apiUser: [{ value: '', disabled: true },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
            date: [{ value: '' }]
        });
        setTimeout(function () {
            _this.apiEditForm.get('apiUser').setValue(_this.apiUser);
            _this.apiEditForm.get('date').setValue(_this.date);
        }, 100);
    };
    Object.defineProperty(EditTokenModalComponent.prototype, "f", {
        get: function () { return this.apiEditForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTokenModalComponent.prototype.submit = function () {
        var _this = this;
        this.apiTokenError = true;
        if (this.apiEditForm.valid) {
            var id = this.tokenItem.id;
            var momentSelectedDt = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.toDateModel(this.apiEditForm.get('date').value));
            var timemsendOfDay = momentSelectedDt.endOf('day').valueOf();
            var apitoken = {
                apiUser: this.apiEditForm.get('apiUser').value,
                expirationDt: timemsendOfDay
            };
            this.userData
                .updateToken(apitoken, id)
                .subscribe(function (response) {
                _this.apiTokenError = false;
                _this.activeModal.close('close');
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditTokenModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditTokenModalComponent.prototype, "apiUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditTokenModalComponent.prototype, "date", void 0);
    EditTokenModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-token-modal',
            template: __webpack_require__(/*! raw-loader!./edit-token-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-token-modal.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/edit-token-modal/edit-token-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__["UserDataService"]])
    ], EditTokenModalComponent);
    return EditTokenModalComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".token-from {\n  padding: 10px 10px 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9nZW5lcmF0ZS1hcGktdG9rZW4tbW9kYWwvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcYWRtaW5fbW9kdWxlc1xcYWRtaW5fZGFzaGJvYXJkXFxkYXNoYm9hcmRcXGFkbWluLWRhc2hib2FyZFxcbW9kYWxcXGdlbmVyYXRlLWFwaS10b2tlbi1tb2RhbFxcZ2VuZXJhdGUtYXBpLXRva2VuLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL21vZGFsL2dlbmVyYXRlLWFwaS10b2tlbi1tb2RhbC9nZW5lcmF0ZS1hcGktdG9rZW4tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9tb2RhbC9nZW5lcmF0ZS1hcGktdG9rZW4tbW9kYWwvZ2VuZXJhdGUtYXBpLXRva2VuLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRva2VuLWZyb217XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIwcHg7XG59XG5cbiIsIi50b2tlbi1mcm9tIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: GenerateApiTokenModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateApiTokenModalComponent", function() { return GenerateApiTokenModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin_modules/admin_dashboard/services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);





// @ts-ignore

var GenerateApiTokenModalComponent = /** @class */ (function () {
    function GenerateApiTokenModalComponent(activeModal, formBuilder, userData, calendar) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.userData = userData;
        this.calendar = calendar;
        this.apiTokenError = false;
    }
    GenerateApiTokenModalComponent.prototype.ngOnInit = function () {
        this.apiForm = this.formBuilder.group({
            apiUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-Z0-9 ]*$/)]],
            date: [this.calendar.getToday()],
            apiKey: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]]
        });
    };
    Object.defineProperty(GenerateApiTokenModalComponent.prototype, "f", {
        get: function () { return this.apiForm.controls; },
        enumerable: true,
        configurable: true
    });
    GenerateApiTokenModalComponent.prototype.toDateModel = function (date) {
        return date ? date.month + '/' + date.day + '/' + date.year : null;
    };
    GenerateApiTokenModalComponent.prototype.submit = function () {
        var _this = this;
        this.apiTokenError = true;
        if (this.apiForm.valid) {
            var momentSelectedDt = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.toDateModel(this.apiForm.get('date').value));
            var timemsendOfDay = momentSelectedDt.endOf('day').valueOf();
            var apitoken = {
                apiUser: this.apiForm.get('apiUser').value,
                expirationDt: timemsendOfDay
            };
            this.userData
                .createToken(apitoken)
                .subscribe(function (response) {
                _this.apiForm.get('apiKey').setValue(response);
                _this.apiTokenError = false;
            }, function (error) {
                _this.apiTokenError = true;
            });
        }
    };
    GenerateApiTokenModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }
    ]; };
    GenerateApiTokenModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-api-token-modal',
            template: __webpack_require__(/*! raw-loader!./generate-api-token-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.html"),
            styles: [__webpack_require__(/*! ./generate-api-token-modal.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/generate-api-token-modal/generate-api-token-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_admin_modules_admin_dashboard_services_user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], GenerateApiTokenModalComponent);
    return GenerateApiTokenModalComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-content {\n  width: 100%;\n  display: table;\n}\n\n.table-heading {\n  display: table-row;\n  margin: 0px;\n  padding: 0px;\n}\n\n.fa {\n  color: white !important;\n}\n\n.panel-title {\n  box-shadow: 0px 2px 24px 2px black;\n  padding: 5px;\n  text-align: center;\n}\n\n.pointerCursor {\n  cursor: pointer;\n}\n\n.table-row {\n  display: table-row;\n}\n\n.each-result {\n  border: 1px solid grey;\n  padding: 8px;\n}\n\np {\n  display: table-cell;\n  padding: 4px;\n}\n\nh6 {\n  padding: 1px;\n}\n\n.individual {\n  width: 100%;\n}\n\n.flags {\n  border: 1px solid lightgrey;\n  padding: 8px;\n}\n\napp-dash-edit {\n  cursor: pointer;\n}\n\napp-dash-trash {\n  cursor: pointer;\n}\n\n.widget {\n  padding: 2.5rem 3rem;\n}\n\n.widget .widget {\n  margin-bottom: 2rem;\n}\n\n.widget .widget-heading {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-heading-performance {\n  border-bottom: 0px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading-performance .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading-performance .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-body .widget {\n  padding: 0;\n}\n\n.widget .widget-body .widget .widget-heading {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n}\n\n.widget .widget-body-config {\n  background: rgba(255, 255, 255, 0.15);\n  border: 0.5rem dashed rgba(255, 255, 255, 0.6);\n  border-radius: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  margin: 1rem 0;\n  padding: 2rem;\n  text-align: center;\n}\n\n.widget .widget-body-config .fa {\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.75rem;\n  padding: 0.6rem 0.5rem;\n  border-radius: 50%;\n  transition: border-color 300ms linear;\n}\n\n.widget.configure .widget-settings-icon {\n  display: none;\n}\n\n.widget.configure .widget-body-main {\n  display: none;\n}\n\n.widget.configure .widget-body-config {\n  display: block;\n}\n\n.widget.configure .widget-body-config:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.8);\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.widget.configure .widget-body-config:hover .fa {\n  border-color: rgba(255, 255, 255, 0.8);\n}\n\n.cicd-modal-content {\n  margin-left: 10%;\n}\n\n.widget-modal {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-modal .widget-modal-close {\n  background: transparent;\n  cursor: pointer;\n  color: #C8C8C8;\n  font-weight: bold;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 3rem;\n  height: 3rem;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  opacity: 0.7;\n  font-size: 1.5em;\n  line-height: 1em;\n  transition: opacity 0.2s linear;\n}\n\n.widget-modal .widget-modal-close:hover {\n  opacity: 1;\n}\n\n.widget-modal .widget-modal-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-heading-markup {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  padding-bottom: 8px;\n}\n\n.widget-modal .text-danger {\n  color: #c75e5e !important;\n}\n\n.widget-modal .fa {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-modal .btn .fa, .widget-modal .btn {\n  color: inherit;\n}\n\n.widget-modal .widget-modal-body .modal-label {\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-body .widget-modal-divider, .widget-modal .widget-modal-body hr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 1px;\n}\n\n.widget-detail {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-detail .widget-detail-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 3rem;\n  padding: 1rem;\n}\n\n.widget-detail .widget-detail-body .table {\n  border-collapse: separate;\n}\n\n.widget-detail .widget-detail-body .table th {\n  padding: 4px;\n  font-weight: 900;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  table-layout: fixed;\n}\n\n.widget-detail .widget-detail-body .table td {\n  padding: 4px;\n  word-wrap: break-word;\n}\n\n.widget-detail .detail-close {\n  position: absolute;\n  right: 0.4rem;\n  top: 0.4rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-detail .detail-close:hover {\n  color: rgba(128, 128, 128, 0.5);\n}\n\ntr.dash-row > td {\n  border-top: none !important;\n  padding: 0 !important;\n  line-height: 3.25rem;\n  vertical-align: middle !important;\n}\n\n.dash-row {\n  line-height: 3.25rem;\n  vertical-align: middle;\n}\n\n.dash-row .fa {\n  line-height: 3.25rem;\n  margin-right: 0.5rem;\n}\n\n.dash-row.clickable:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.dash-overflow {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.dash-modal-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.8rem 0;\n}\n\n.dash-modal-row:first-of-type {\n  border-top: none;\n}\n\n.dash-progress-bar > div {\n  float: left;\n  height: 3rem;\n  z-index: 2;\n}\n\n.dash-progress-bar > div:first-child {\n  z-index: 3;\n}\n\n.dash-progress-bar > div:last-child {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.h3 {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n\n.btn-primary {\n  font-weight: 700;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background: #152131;\n  border-color: #152131;\n}\n\n.btn-primary {\n  background-image: linear-gradient(to bottom, #384250 0, #152131 100%);\n  background-repeat: repeat-x;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n  transition: color 0.2s linear;\n  font-weight: 600;\n  padding: 10px 24px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9) !important;\n  background-color: #152131;\n  border-color: #152131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9wcm9wZXJ0aWVzLWJ1aWxkZXIvQzpcXFVzZXJzXFxyYXZpdFxcRG93bmxvYWRzXFxIeWdpZWlhbmV3XFxVSS9zcmNcXGFwcFxcYWRtaW5fbW9kdWxlc1xcYWRtaW5fZGFzaGJvYXJkXFxkYXNoYm9hcmRcXGFkbWluLWRhc2hib2FyZFxccHJvcGVydGllcy1idWlsZGVyXFxwcm9wZXJ0aWVzLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvcHJvcGVydGllcy1idWlsZGVyL3Byb3BlcnRpZXMtYnVpbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER007RUFDRSxXQUFBO0FDRFI7O0FESUk7RUFDRSxpQkFBQTtBQ0ZOOztBREtFO0VBQ0UsaURBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURNTTtFQUNFLFdBQUE7QUNKUjs7QURPSTtFQUNFLGlCQUFBO0FDTE47O0FEUUU7RUFDRSxVQUFBO0FDTko7O0FEUUk7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FDTk47O0FEVUU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDUko7O0FEVUk7RUFDRSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLHFDQUFBO0FDVE47O0FEY0k7RUFDRSxhQUFBO0FDWk47O0FEZUk7RUFDRSxhQUFBO0FDYk47O0FEZ0JJO0VBQ0UsY0FBQTtBQ2ROOztBRGdCTTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSwrQkFBQTtBQ2RSOztBRGdCUTtFQUNFLHNDQUFBO0FDZFY7O0FEc0JBO0VBQ0UsZ0JBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsdUJBQUE7QUNsQkY7O0FEb0JFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDbEJKOztBRG9CSTtFQUNFLFVBQUE7QUNsQk47O0FEc0JFO0VBQ0UsNENBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDcEJKOztBRHVCRTtFQUNFLDRDQUFBO0VBQ0EsbUJBQUE7QUNyQko7O0FEd0JFO0VBQ0UseUJBQUE7QUN0Qko7O0FEeUJFO0VBQ0UseUJBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsY0FBQTtBQ3hCSjs7QUQ0Qkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQzFCTjs7QUQ2Qkk7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7QUMzQk47O0FEZ0NBO0VBQ0UsdUJBQUE7QUM3QkY7O0FEK0JFO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUM3Qko7O0FEaUNJO0VBQ0UseUJBQUE7QUMvQk47O0FEZ0NNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQzlCUjs7QURnQ007RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUM5QlI7O0FEbUNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDakNKOztBRGtDSTtFQUNFLCtCQUFBO0FDaENOOztBRHFDQTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FDbENGOztBRHFDQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNsQ0Y7O0FEb0NFO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtBQ2xDSjs7QURxQ0U7RUFDRSwyQ0FBQTtBQ25DSjs7QUR1Q0E7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNwQ0Y7O0FEdUNBO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtBQ3BDRjs7QURzQ0U7RUFDRSxnQkFBQTtBQ3BDSjs7QUR5Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUN0Q0o7O0FEd0NJO0VBQ0UsVUFBQTtBQ3RDTjs7QUR5Q0k7RUFDRSxVQUFBO0VBQ0EsMkNBQUE7QUN2Q047O0FEOENBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDM0NGOztBRCtDQTtFQUNFLGdCQUFBO0FDNUNGOztBRDZDRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDM0NKOztBRCtDQTtFQUNFLHFFQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUM1Q0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbl9tb2R1bGVzL2FkbWluX2Rhc2hib2FyZC9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL3Byb3BlcnRpZXMtYnVpbGRlci9wcm9wZXJ0aWVzLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRhYmxlLWhlYWRpbmcge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5mYSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwtdGl0bGUge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMnB4IHJnYigwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvaW50ZXJDdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG5cbi5lYWNoLXJlc3VsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuaDYge1xuICBwYWRkaW5nOiAxcHhcbn1cblxuLmluZGl2aWR1YWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsYWdzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmFwcC1kYXNoLWVkaXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFwcC1kYXNoLXRyYXNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0IHtcbiAgcGFkZGluZzogMi41cmVtIDNyZW07XG5cbiAgLndpZGdldCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC53aWRnZXQtaGVhZGluZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbiAgICAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICAgIC5sYXN0LXVwZGF0ZWQge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICB9XG4gIC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcblxuICAgIC53aWRnZXQtc2V0dGluZ3MtaWNvbiB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICAjZmZmIDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxhc3QtdXBkYXRlZCB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cbiAgLndpZGdldC1ib2R5IC53aWRnZXQge1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAud2lkZ2V0LWhlYWRpbmcge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSkgO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gIH1cblxuICAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgO1xuICAgIGJvcmRlcjogLjVyZW0gZGFzaGVkICByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGNvbG9yOiAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5mYSB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gICAgICBwYWRkaW5nOiAuNnJlbSAuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6KDUwJSk7XG5cbiAgICAgIHRyYW5zaXRpb246KGJvcmRlci1jb2xvciAzMDBtcyBsaW5lYXIpO1xuICAgIH1cbiAgfVxuXG4gICYuY29uZmlndXJlIHtcbiAgICAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAud2lkZ2V0LWJvZHktbWFpbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC53aWRnZXQtYm9keS1jb25maWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zMCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcblxuICAgICAgICAuZmEge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4uY2ljZC1tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi53aWRnZXQtbW9kYWwge1xuICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcblxuICAud2lkZ2V0LW1vZGFsLWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNDOEM4Qzg7O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdHJhbnNpdGlvbjoob3BhY2l0eSAuMnMgbGluZWFyKTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAud2lkZ2V0LW1vZGFsLWhlYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC53aWRnZXQtbW9kYWwtaGVhZGluZy1tYXJrdXAge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zNSk7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgfVxuXG4gIC50ZXh0LWRhbmdlciB7XG4gICAgY29sb3I6ICNjNzVlNWUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mYXtcbiAgICBjb2xvcjogIHJnYmEoMCwgMCwgMCwgLjUpO1xuICB9XG5cbiAgLmJ0biAuZmEsIC5idG4gIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC53aWRnZXQtbW9kYWwtYm9keSB7XG4gICAgLm1vZGFsLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAud2lkZ2V0LW1vZGFsLWRpdmlkZXIsIGhyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgfVxuICB9XG59XG5cbi53aWRnZXQtZGV0YWlsIHtcbiAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG5cbiAgLndpZGdldC1kZXRhaWwtaGVhZGluZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAud2lkZ2V0LWRldGFpbC1ib2R5IHtcbiAgICAudGFibGUge1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICAgIH1cbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAuNHJlbTtcbiAgICB0b3A6IC40cmVtO1xuICAgIGNvbG9yOiAgcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogbGlnaHRlbihyZ2JhKDAsIDAsIDAsIC41KSwgNTAlKTtcbiAgICB9XG4gIH1cbn1cblxudHIuZGFzaC1yb3cgPiB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC1yb3cge1xuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAuZmEge1xuICAgIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gIH1cblxuICAmLmNsaWNrYWJsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KTtcbiAgfVxufVxuXG4uZGFzaC1vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFzaC1tb2RhbC1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIHJnYmEoMCwgMCwgMCwgLjEpO1xuICBwYWRkaW5nOiAuOHJlbSAwO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxufVxuXG4uZGFzaC1wcm9ncmVzcy1iYXIge1xuICA+IGRpdiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpO1xuICAgIH1cblxuICB9XG59XG5cblxuLmgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbi5idG4tcHJpbWFyeSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMxNTIxMzE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xuICB9XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIzM4NDI1MCAwLCMxNTIxMzEgMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsLjM1KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGxpbmVhcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIxMzE7XG4gIGJvcmRlci1jb2xvcjogIzE1MjEzMTtcbn1cbiIsIi50YWJsZS1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGFibGUtaGVhZGluZyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmZhIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5wYW5lbC10aXRsZSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMjRweCAycHggYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9pbnRlckN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cblxuLmVhY2gtcmVzdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG5oNiB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmluZGl2aWR1YWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsYWdzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbmFwcC1kYXNoLWVkaXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFwcC1kYXNoLXRyYXNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2lkZ2V0IHtcbiAgcGFkZGluZzogMi41cmVtIDNyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmcgLndpZGdldC1zZXR0aW5ncy1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZyAubGFzdC11cGRhdGVkIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZy1wZXJmb3JtYW5jZSAud2lkZ2V0LXNldHRpbmdzLWljb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nLXBlcmZvcm1hbmNlIC5sYXN0LXVwZGF0ZWQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1ib2R5IC53aWRnZXQge1xuICBwYWRkaW5nOiAwO1xufVxuLndpZGdldCAud2lkZ2V0LWJvZHkgLndpZGdldCAud2lkZ2V0LWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLndpZGdldCAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYm9yZGVyOiAwLjVyZW0gZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMi40cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldCAud2lkZ2V0LWJvZHktY29uZmlnIC5mYSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgcGFkZGluZzogMC42cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMzAwbXMgbGluZWFyO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1zZXR0aW5ncy1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtYm9keS1tYWluIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtYm9keS1jb25maWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53aWRnZXQuY29uZmlndXJlIC53aWRnZXQtYm9keS1jb25maWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LWNvbmZpZzpob3ZlciAuZmEge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmNpY2QtbW9kYWwtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi53aWRnZXQtbW9kYWwge1xuICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1jbG9zZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjQzhDOEM4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWNsb3NlOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtaGVhZGluZy1tYXJrdXAge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi53aWRnZXQtbW9kYWwgLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNjNzVlNWUgIWltcG9ydGFudDtcbn1cbi53aWRnZXQtbW9kYWwgLmZhIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi53aWRnZXQtbW9kYWwgLmJ0biAuZmEsIC53aWRnZXQtbW9kYWwgLmJ0biB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWJvZHkgLm1vZGFsLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1ib2R5IC53aWRnZXQtbW9kYWwtZGl2aWRlciwgLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWJvZHkgaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgaGVpZ2h0OiAxcHg7XG59XG5cbi53aWRnZXQtZGV0YWlsIHtcbiAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG59XG4ud2lkZ2V0LWRldGFpbCAud2lkZ2V0LWRldGFpbC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ud2lkZ2V0LWRldGFpbCAud2lkZ2V0LWRldGFpbC1ib2R5IC50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG4ud2lkZ2V0LWRldGFpbCAud2lkZ2V0LWRldGFpbC1ib2R5IC50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4ud2lkZ2V0LWRldGFpbCAud2lkZ2V0LWRldGFpbC1ib2R5IC50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLndpZGdldC1kZXRhaWwgLmRldGFpbC1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNHJlbTtcbiAgdG9wOiAwLjRyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ud2lkZ2V0LWRldGFpbCAuZGV0YWlsLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcbn1cblxudHIuZGFzaC1yb3cgPiB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaC1yb3cge1xuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5kYXNoLXJvdyAuZmEge1xuICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uZGFzaC1yb3cuY2xpY2thYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbn1cblxuLmRhc2gtb3ZlcmZsb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhc2gtbW9kYWwtcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMC44cmVtIDA7XG59XG4uZGFzaC1tb2RhbC1yb3c6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5kYXNoLXByb2dyZXNzLWJhciA+IGRpdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDNyZW07XG4gIHotaW5kZXg6IDI7XG59XG4uZGFzaC1wcm9ncmVzcy1iYXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICB6LWluZGV4OiAzO1xufVxuLmRhc2gtcHJvZ3Jlc3MtYmFyID4gZGl2Omxhc3QtY2hpbGQge1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4uaDMge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzE1MjEzMTtcbiAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzg0MjUwIDAsICMxNTIxMzEgMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgbGluZWFyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIxMzE7XG4gIGJvcmRlci1jb2xvcjogIzE1MjEzMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PropertiesBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesBuilderComponent", function() { return PropertiesBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/modals/general-delete-modal/general-delete-modal.component */ "./src/app/shared/modals/general-delete-modal/general-delete-modal.component.ts");
/* harmony import */ var _modal_create_or_update_api_properties_create_or_update_api_properties_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/create-or-update-api-properties/create-or-update-api-properties.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-properties/create-or-update-api-properties.component.ts");
/* harmony import */ var _modal_create_or_update_api_audit_properties_create_or_update_api_audit_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-api-audit-properties/create-or-update-api-audit-properties.component.ts");





// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

var PropertiesBuilderComponent = /** @class */ (function () {
    function PropertiesBuilderComponent(userData, modalService) {
        this.userData = userData;
        this.modalService = modalService;
        this.error = {};
        this.apiPropertiesSearch = '';
        this.apiAuditPropertiesSearch = '';
        this.p = 1;
        this.panelExpandedApi = false;
        this.panelExpandedApiAudit = false;
    }
    PropertiesBuilderComponent.prototype.ngOnInit = function () {
        this.loadProperties();
    };
    PropertiesBuilderComponent.prototype.loadProperties = function () {
        var _this = this;
        this.userData.getPropertiesBuilderData('Api').subscribe(function (response) {
            _this.apiProperties = response;
        });
        this.userData.getPropertiesBuilderData('ApiAudit').subscribe(function (response) {
            _this.apiAuditProperties = response;
        });
    };
    PropertiesBuilderComponent.prototype.stringifyObj = function (obj) {
        return JSON.stringify(obj);
    };
    PropertiesBuilderComponent.prototype.properKeys = function (obj) {
        return Object.keys(obj);
    };
    PropertiesBuilderComponent.prototype.addNewApiPropertiesBuilder = function () {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_api_properties_create_or_update_api_properties_component__WEBPACK_IMPORTED_MODULE_5__["CreateOrUpdateApiPropertiesComponent"]);
        modalRef.result.then(function (newConfig) {
            _this.loadProperties();
        });
    };
    PropertiesBuilderComponent.prototype.editApiPropertiesBuilder = function (collector) {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_api_properties_create_or_update_api_properties_component__WEBPACK_IMPORTED_MODULE_5__["CreateOrUpdateApiPropertiesComponent"]);
        modalRef.componentInstance.id = collector.id;
        modalRef.componentInstance.name = collector.name;
        modalRef.componentInstance.properties = collector.properties;
        modalRef.result.then(function (newConfig) {
            _this.loadProperties();
        });
    };
    PropertiesBuilderComponent.prototype.addNewApiAuditPropertiesBuilder = function () {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_api_audit_properties_create_or_update_api_audit_properties_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrUpdateApiAuditPropertiesComponent"]);
        modalRef.result.then(function (newConfig) {
            _this.loadProperties();
        });
    };
    PropertiesBuilderComponent.prototype.editApiAuditPropertiesBuilder = function (collector) {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_api_audit_properties_create_or_update_api_audit_properties_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrUpdateApiAuditPropertiesComponent"]);
        modalRef.componentInstance.id = collector.id;
        modalRef.componentInstance.name = collector.name;
        modalRef.componentInstance.properties = collector.properties;
        modalRef.result.then(function (newConfig) {
            _this.loadProperties();
        });
    };
    PropertiesBuilderComponent.prototype.deleteProperties = function (collector) {
        var _this = this;
        var modalRef = this.modalService.open(_shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["GeneralDeleteComponent"]);
        modalRef.componentInstance.title = collector.name;
        modalRef.result.then(function (newConfig) {
            _this.userData.deleteProperties(collector.id).subscribe(function (response) {
                _this.loadProperties();
            });
        });
    };
    PropertiesBuilderComponent.ctorParameters = function () { return [
        { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    PropertiesBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-properties-builder',
            template: __webpack_require__(/*! raw-loader!./properties-builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.html"),
            styles: [__webpack_require__(/*! ./properties-builder.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/properties-builder/properties-builder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], PropertiesBuilderComponent);
    return PropertiesBuilderComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-dash-edit {\n  cursor: pointer;\n}\n\napp-dash-trash {\n  cursor: pointer;\n}\n\n.widget {\n  padding: 2.5rem 3rem;\n}\n\n.widget .widget {\n  margin-bottom: 2rem;\n}\n\n.widget .widget-heading {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-heading-performance {\n  border-bottom: 0px solid rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.1rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 1.75rem;\n}\n\n.widget .widget-heading-performance .widget-settings-icon:hover {\n  color: #fff;\n}\n\n.widget .widget-heading-performance .last-updated {\n  font-size: 1.1rem;\n}\n\n.widget .widget-body .widget {\n  padding: 0;\n}\n\n.widget .widget-body .widget .widget-heading {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n  text-transform: uppercase;\n}\n\n.widget .widget-body-config {\n  background: rgba(255, 255, 255, 0.15);\n  border: 0.5rem dashed rgba(255, 255, 255, 0.6);\n  border-radius: 1rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n  font-size: 2rem;\n  line-height: 2.4rem;\n  margin: 1rem 0;\n  padding: 2rem;\n  text-align: center;\n}\n\n.widget .widget-body-config .fa {\n  border: 2px solid rgba(255, 255, 255, 0.6);\n  margin-bottom: 0.75rem;\n  padding: 0.6rem 0.5rem;\n  border-radius: 50%;\n  transition: border-color 300ms linear;\n}\n\n.widget.configure .widget-settings-icon {\n  display: none;\n}\n\n.widget.configure .widget-body-main {\n  display: none;\n}\n\n.widget.configure .widget-body-config {\n  display: block;\n}\n\n.widget.configure .widget-body-config:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.8);\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.widget.configure .widget-body-config:hover .fa {\n  border-color: rgba(255, 255, 255, 0.8);\n}\n\n.cicd-modal-content {\n  margin-left: 10%;\n}\n\n.widget-modal {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-modal .widget-modal-close {\n  background: transparent;\n  cursor: pointer;\n  color: #C8C8C8;\n  font-weight: bold;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 3rem;\n  height: 3rem;\n  border: 0;\n  background-clip: padding-box;\n  text-align: center;\n  opacity: 0.7;\n  font-size: 1.5em;\n  line-height: 1em;\n  transition: opacity 0.2s linear;\n}\n\n.widget-modal .widget-modal-close:hover {\n  opacity: 1;\n}\n\n.widget-modal .widget-modal-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  padding: 1rem;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-heading-markup {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.35);\n  padding-bottom: 8px;\n}\n\n.widget-modal .text-danger {\n  color: #c75e5e !important;\n}\n\n.widget-modal .fa {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-modal .btn .fa, .widget-modal .btn {\n  color: inherit;\n}\n\n.widget-modal .widget-modal-body .modal-label {\n  font-weight: 600;\n  width: 100%;\n  text-align: center;\n}\n\n.widget-modal .widget-modal-body .widget-modal-divider, .widget-modal .widget-modal-body hr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 1px;\n}\n\n.widget-detail {\n  padding: 1rem 5rem 3rem;\n}\n\n.widget-detail .widget-detail-heading {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 3rem;\n  padding: 1rem;\n}\n\n.widget-detail .widget-detail-body .table {\n  border-collapse: separate;\n}\n\n.widget-detail .widget-detail-body .table th {\n  padding: 4px;\n  font-weight: 900;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  table-layout: fixed;\n}\n\n.widget-detail .widget-detail-body .table td {\n  padding: 4px;\n  word-wrap: break-word;\n}\n\n.widget-detail .detail-close {\n  position: absolute;\n  right: 0.4rem;\n  top: 0.4rem;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.widget-detail .detail-close:hover {\n  color: rgba(128, 128, 128, 0.5);\n}\n\ntr.dash-row > td {\n  border-top: none !important;\n  padding: 0 !important;\n  line-height: 3.25rem;\n  vertical-align: middle !important;\n}\n\n.dash-row {\n  line-height: 3.25rem;\n  vertical-align: middle;\n}\n\n.dash-row .fa {\n  line-height: 3.25rem;\n  margin-right: 0.5rem;\n}\n\n.dash-row.clickable:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.dash-overflow {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.dash-modal-row {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 0.8rem 0;\n}\n\n.dash-modal-row:first-of-type {\n  border-top: none;\n}\n\n.dash-progress-bar > div {\n  float: left;\n  height: 3rem;\n  z-index: 2;\n}\n\n.dash-progress-bar > div:first-child {\n  z-index: 3;\n}\n\n.dash-progress-bar > div:last-child {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n.h3 {\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n\n.btn-primary {\n  font-weight: 700;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background: #152131;\n  border-color: #152131;\n}\n\n.btn-primary {\n  background-image: linear-gradient(to bottom, #384250 0, #152131 100%);\n  background-repeat: repeat-x;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n  transition: color 0.2s linear;\n  font-weight: 600;\n  padding: 10px 24px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9) !important;\n  background-color: #152131;\n  border-color: #152131;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9zZXJ2aWNlLWFjY291bnRzL0M6XFxVc2Vyc1xccmF2aXRcXERvd25sb2Fkc1xcSHlnaWVpYW5ld1xcVUkvc3JjXFxhcHBcXGFkbWluX21vZHVsZXNcXGFkbWluX2Rhc2hib2FyZFxcZGFzaGJvYXJkXFxhZG1pbi1kYXNoYm9hcmRcXHNlcnZpY2UtYWNjb3VudHNcXHNlcnZpY2UtYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluX21vZHVsZXMvYWRtaW5fZGFzaGJvYXJkL2Rhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQvc2VydmljZS1hY2NvdW50cy9zZXJ2aWNlLWFjY291bnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxpREFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdNO0VBQ0UsV0FBQTtBQ0RSOztBRElJO0VBQ0UsaUJBQUE7QUNGTjs7QURLRTtFQUNFLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FETU07RUFDRSxXQUFBO0FDSlI7O0FET0k7RUFDRSxpQkFBQTtBQ0xOOztBRFFFO0VBQ0UsVUFBQTtBQ05KOztBRFFJO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBQ05OOztBRFVFO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ1JKOztBRFVJO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQ0FBQTtBQ1ROOztBRGNJO0VBQ0UsYUFBQTtBQ1pOOztBRGVJO0VBQ0UsYUFBQTtBQ2JOOztBRGdCSTtFQUNFLGNBQUE7QUNkTjs7QURnQk07RUFDRSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7QUNkUjs7QURnQlE7RUFDRSxzQ0FBQTtBQ2RWOztBRHNCQTtFQUNFLGdCQUFBO0FDbkJGOztBRHFCQTtFQUNFLHVCQUFBO0FDbEJGOztBRG9CRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ2xCSjs7QURvQkk7RUFDRSxVQUFBO0FDbEJOOztBRHNCRTtFQUNFLDRDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0FDckJKOztBRHdCRTtFQUNFLHlCQUFBO0FDdEJKOztBRHlCRTtFQUNFLHlCQUFBO0FDdkJKOztBRDBCRTtFQUNFLGNBQUE7QUN4Qko7O0FENEJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMxQk47O0FENkJJO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0FDM0JOOztBRGdDQTtFQUNFLHVCQUFBO0FDN0JGOztBRCtCRTtFQUNFLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDN0JKOztBRGlDSTtFQUNFLHlCQUFBO0FDL0JOOztBRGdDTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUM5QlI7O0FEZ0NNO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDOUJSOztBRG1DRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2pDSjs7QURrQ0k7RUFDRSwrQkFBQTtBQ2hDTjs7QURxQ0E7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtBQ2xDRjs7QURxQ0E7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDbENGOztBRG9DRTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7QUNsQ0o7O0FEcUNFO0VBQ0UsMkNBQUE7QUNuQ0o7O0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDcENGOztBRHVDQTtFQUNFLHdDQUFBO0VBQ0EsaUJBQUE7QUNwQ0Y7O0FEc0NFO0VBQ0UsZ0JBQUE7QUNwQ0o7O0FEeUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDdENKOztBRHdDSTtFQUNFLFVBQUE7QUN0Q047O0FEeUNJO0VBQ0UsVUFBQTtFQUNBLDJDQUFBO0FDdkNOOztBRDhDQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQzNDRjs7QUQrQ0E7RUFDRSxnQkFBQTtBQzVDRjs7QUQ2Q0U7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQzNDSjs7QUQrQ0E7RUFDRSxxRUFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDNUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5fbW9kdWxlcy9hZG1pbl9kYXNoYm9hcmQvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9zZXJ2aWNlLWFjY291bnRzL3NlcnZpY2UtYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZGFzaC1lZGl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hcHAtZGFzaC10cmFzaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndpZGdldCB7XG4gIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xuXG4gIC53aWRnZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAud2lkZ2V0LWhlYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gICAgLndpZGdldC1zZXR0aW5ncy1pY29uIHtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgICAubGFzdC11cGRhdGVkIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2Uge1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG5cbiAgICAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAgI2ZmZiA7XG4gICAgICB9XG4gICAgfVxuICAgIC5sYXN0LXVwZGF0ZWQge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICB9XG4gIC53aWRnZXQtYm9keSAud2lkZ2V0IHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLndpZGdldC1oZWFkaW5nIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpIDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG5cbiAgLndpZGdldC1ib2R5LWNvbmZpZyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDtcbiAgICBib3JkZXI6IC41cmVtIGRhc2hlZCAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBjb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZmEge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xuICAgICAgcGFkZGluZzogLjZyZW0gLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOig1MCUpO1xuXG4gICAgICB0cmFuc2l0aW9uOihib3JkZXItY29sb3IgMzAwbXMgbGluZWFyKTtcbiAgICB9XG4gIH1cblxuICAmLmNvbmZpZ3VyZSB7XG4gICAgLndpZGdldC1zZXR0aW5ncy1pY29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLndpZGdldC1ib2R5LW1haW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAud2lkZ2V0LWJvZHktY29uZmlnIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMzApO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XG5cbiAgICAgICAgLmZhIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuLmNpY2QtbW9kYWwtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ud2lkZ2V0LW1vZGFsIHtcbiAgcGFkZGluZzogMXJlbSA1cmVtIDNyZW07XG5cbiAgLndpZGdldC1tb2RhbC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjQzhDOEM4OztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHRyYW5zaXRpb246KG9wYWNpdHkgLjJzIGxpbmVhcik7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLndpZGdldC1tb2RhbC1oZWFkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAud2lkZ2V0LW1vZGFsLWhlYWRpbmctbWFya3VwIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMzUpO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIH1cblxuICAudGV4dC1kYW5nZXIge1xuICAgIGNvbG9yOiAjYzc1ZTVlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmF7XG4gICAgY29sb3I6ICByZ2JhKDAsIDAsIDAsIC41KTtcbiAgfVxuXG4gIC5idG4gLmZhLCAuYnRuICB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAud2lkZ2V0LW1vZGFsLWJvZHkge1xuICAgIC5tb2RhbC1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLndpZGdldC1tb2RhbC1kaXZpZGVyLCBociB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIHJnYmEoMCwgMCwgMCwgLjI1KTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbiAgfVxufVxuXG4ud2lkZ2V0LWRldGFpbCB7XG4gIHBhZGRpbmc6IDFyZW0gNXJlbSAzcmVtO1xuXG4gIC53aWRnZXQtZGV0YWlsLWhlYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLndpZGdldC1kZXRhaWwtYm9keSB7XG4gICAgLnRhYmxlIHtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICB9XG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLjRyZW07XG4gICAgdG9wOiAuNHJlbTtcbiAgICBjb2xvcjogIHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGxpZ2h0ZW4ocmdiYSgwLCAwLCAwLCAuNSksIDUwJSk7XG4gICAgfVxuICB9XG59XG5cbnRyLmRhc2gtcm93ID4gdGQge1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuLmRhc2gtcm93IHtcbiAgbGluZS1oZWlnaHQ6IDMuMjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgLmZhIHtcbiAgICBsaW5lLWhlaWdodDogMy4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICB9XG5cbiAgJi5jbGlja2FibGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSk7XG4gIH1cbn1cblxuLmRhc2gtb3ZlcmZsb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRhc2gtbW9kYWwtcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgcGFkZGluZzogLjhyZW0gMDtcblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbn1cblxuLmRhc2gtcHJvZ3Jlc3MtYmFyIHtcbiAgPiBkaXYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjE1KTtcbiAgICB9XG5cbiAgfVxufVxuXG5cbi5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG4uYnRuLXByaW1hcnkge1xuICBmb250LXdlaWdodDogNzAwO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMTUyMTMxO1xuICAgIGJvcmRlci1jb2xvcjogIzE1MjEzMTtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCMzODQyNTAgMCwjMTUyMTMxIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLC4zNSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycyBsaW5lYXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMTMxO1xuICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG59XG5cblxuIiwiYXBwLWRhc2gtZWRpdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXBwLWRhc2gtdHJhc2gge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53aWRnZXQge1xuICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcbn1cbi53aWRnZXQgLndpZGdldCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG59XG4ud2lkZ2V0IC53aWRnZXQtaGVhZGluZyAud2lkZ2V0LXNldHRpbmdzLWljb246aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nIC5sYXN0LXVwZGF0ZWQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nLXBlcmZvcm1hbmNlIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbn1cbi53aWRnZXQgLndpZGdldC1oZWFkaW5nLXBlcmZvcm1hbmNlIC53aWRnZXQtc2V0dGluZ3MtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLndpZGdldCAud2lkZ2V0LWhlYWRpbmctcGVyZm9ybWFuY2UgLmxhc3QtdXBkYXRlZCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLndpZGdldCAud2lkZ2V0LWJvZHkgLndpZGdldCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keSAud2lkZ2V0IC53aWRnZXQtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keS1jb25maWcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICBib3JkZXI6IDAuNXJlbSBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2lkZ2V0IC53aWRnZXQtYm9keS1jb25maWcgLmZhIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjZyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAzMDBtcyBsaW5lYXI7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LXNldHRpbmdzLWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LW1haW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LWNvbmZpZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndpZGdldC5jb25maWd1cmUgLndpZGdldC1ib2R5LWNvbmZpZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4ud2lkZ2V0LmNvbmZpZ3VyZSAud2lkZ2V0LWJvZHktY29uZmlnOmhvdmVyIC5mYSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uY2ljZC1tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLndpZGdldC1tb2RhbCB7XG4gIHBhZGRpbmc6IDFyZW0gNXJlbSAzcmVtO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWNsb3NlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53aWRnZXQtbW9kYWwgLndpZGdldC1tb2RhbC1oZWFkaW5nLW1hcmt1cCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLndpZGdldC1tb2RhbCAudGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2M3NWU1ZSAhaW1wb3J0YW50O1xufVxuLndpZGdldC1tb2RhbCAuZmEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLndpZGdldC1tb2RhbCAuYnRuIC5mYSwgLndpZGdldC1tb2RhbCAuYnRuIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSAubW9kYWwtbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndpZGdldC1tb2RhbCAud2lkZ2V0LW1vZGFsLWJvZHkgLndpZGdldC1tb2RhbC1kaXZpZGVyLCAud2lkZ2V0LW1vZGFsIC53aWRnZXQtbW9kYWwtYm9keSBociB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLndpZGdldC1kZXRhaWwge1xuICBwYWRkaW5nOiAxcmVtIDVyZW0gM3JlbTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWhlYWRpbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHRoIHtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi53aWRnZXQtZGV0YWlsIC53aWRnZXQtZGV0YWlsLWJvZHkgLnRhYmxlIHRkIHtcbiAgcGFkZGluZzogNHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ud2lkZ2V0LWRldGFpbCAuZGV0YWlsLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMC40cmVtO1xuICB0b3A6IDAuNHJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi53aWRnZXQtZGV0YWlsIC5kZXRhaWwtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xufVxuXG50ci5kYXNoLXJvdyA+IHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoLXJvdyB7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRhc2gtcm93IC5mYSB7XG4gIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5kYXNoLXJvdy5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xufVxuXG4uZGFzaC1vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGFzaC1tb2RhbC1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cbi5kYXNoLW1vZGFsLXJvdzpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmRhc2gtcHJvZ3Jlc3MtYmFyID4gZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMjtcbn1cbi5kYXNoLXByb2dyZXNzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHotaW5kZXg6IDM7XG59XG4uZGFzaC1wcm9ncmVzcy1iYXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG5cbi5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMTUyMTMxO1xuICBib3JkZXItY29sb3I6ICMxNTIxMzE7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzODQyNTAgMCwgIzE1MjEzMSAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBsaW5lYXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjEzMTtcbiAgYm9yZGVyLWNvbG9yOiAjMTUyMTMxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ServiceAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceAccountsComponent", function() { return ServiceAccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user-data.service */ "./src/app/admin_modules/admin_dashboard/services/user-data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_create_or_update_service_account_create_or_update_service_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/create-or-update-service-account/create-or-update-service-account.component */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/modal/create-or-update-service-account/create-or-update-service-account.component.ts");
/* harmony import */ var _shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/modals/general-delete-modal/general-delete-modal.component */ "./src/app/shared/modals/general-delete-modal/general-delete-modal.component.ts");






var ServiceAccountsComponent = /** @class */ (function () {
    function ServiceAccountsComponent(userData, modalService) {
        this.userData = userData;
        this.modalService = modalService;
        this.error = {};
        this.serviceAccounts = [];
        this.serviceAccountSearch = '';
        this.p = 1;
    }
    ServiceAccountsComponent.prototype.ngOnInit = function () {
        this.loadServiceAccounts();
    };
    ServiceAccountsComponent.prototype.loadServiceAccounts = function () {
        var _this = this;
        this.userData.getServiceAccounts().subscribe(function (response) {
            _this.serviceAccounts = response;
        });
    };
    ServiceAccountsComponent.prototype.createAccount = function () {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_service_account_create_or_update_service_account_component__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdateServiceAccountComponent"]);
        modalRef.result.then(function (newConfig) {
            _this.loadServiceAccounts();
        });
    };
    ServiceAccountsComponent.prototype.updateAccount = function (serviceAccountObj) {
        var _this = this;
        var modalRef = this.modalService.open(_modal_create_or_update_service_account_create_or_update_service_account_component__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdateServiceAccountComponent"]);
        modalRef.componentInstance.id = serviceAccountObj.id;
        modalRef.componentInstance.serviceAccountName = serviceAccountObj.serviceAccountName;
        modalRef.componentInstance.fileNames = serviceAccountObj.fileNames;
        modalRef.result.then(function (newConfig) {
            _this.loadServiceAccounts();
        });
    };
    ServiceAccountsComponent.prototype.deleteServiceAccount = function (serviceAccount) {
        var _this = this;
        var modalRef = this.modalService.open(_shared_modals_general_delete_modal_general_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["GeneralDeleteComponent"]);
        modalRef.componentInstance.title = serviceAccount.serviceAccountName;
        modalRef.result.then(function (newConfig) {
            _this.userData.deleteServiceAccount(serviceAccount.id).subscribe(function (response) {
                _this.loadServiceAccounts();
            });
        });
    };
    ServiceAccountsComponent.ctorParameters = function () { return [
        { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
    ]; };
    ServiceAccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-accounts',
            template: __webpack_require__(/*! raw-loader!./service-accounts.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.html"),
            styles: [__webpack_require__(/*! ./service-accounts.component.scss */ "./src/app/admin_modules/admin_dashboard/dashboard/admin-dashboard/service-accounts/service-accounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ServiceAccountsComponent);
    return ServiceAccountsComponent;
}());



/***/ }),

/***/ "./src/app/admin_modules/admin_dashboard/services/pagination-wrapper.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin_modules/admin_dashboard/services/pagination-wrapper.service.ts ***!
  \**************************************************************************************/
/*! exports provided: PaginationWrapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationWrapperService", function() { return PaginationWrapperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-data.service */ "./src/app/admin_modules/admin_dashboard/services/dashboard-data.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/admin_modules/admin_dashboard/services/dashboard.service.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PaginationWrapperService = /** @class */ (function () {
    function PaginationWrapperService(authService, dashboardData, dashboardService) {
        var _this = this;
        this.authService = authService;
        this.dashboardData = dashboardData;
        this.dashboardService = dashboardService;
        this.currentPage = 0;
        this.pageSize = 10;
        this.currentPageMyDash = 0;
        this.searchFilter = '';
        this.DashboardType = {
            PRODUCT: 'product',
            TEAM: 'team'
        };
        this.pageChangeHandlerForMyDash = function (pageNumber, type) {
            _this.currentPageMyDash = pageNumber;
            if (_this.searchFilter === '') {
                return _this.dashboardData.searchMyDashboardsByPage({ size: _this.pageSize, page: pageNumber - 1, username: _this.username, type: type })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.processMyDashboardError))
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.processMyDashboardResponse));
            }
            else {
                return _this.dashboardData.filterMyDashboardsByTitle({ search: _this.searchFilter, size: _this.pageSize, page: pageNumber - 1 })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.processFilterMyDashboardResponse))
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.processMyDashboardResponse));
            }
        };
        this.processDashboardResponse = function (response) {
            var data = response.data;
            var type = response.type;
            // add dashboards to list
            _this.dashboards = [];
            var dashboardsLocal = [];
            data.forEach(function (v, x) {
                var board = {
                    id: data[x].id,
                    name: _this.dashboardService.getDashboardTitle(data[x]),
                    type: data[x].type,
                    validServiceName: data[x].validServiceName,
                    validAppName: data[x].validAppName,
                    configurationItemBusServName: data[x].configurationItemBusServName,
                    configurationItemBusAppName: data[x].configurationItemBusAppName,
                    isProduct: data[x].type && data[x].type.toLowerCase() === _this.DashboardType.PRODUCT.toLowerCase(),
                    scoreEnabled: data[x].scoreEnabled,
                    scoreDisplay: data[x].scoreDisplay
                };
                if (board.isProduct) {
                }
                dashboardsLocal.push(board);
            });
            _this.dashboards = dashboardsLocal;
            _this.dashboardData.count(type).subscribe(function (result) {
                _this.totalItems = result;
            });
            return dashboardsLocal;
        };
        this.processDashboardFilterResponse = function (response) {
            var data = response.data;
            var type = response.type;
            _this.dashboards = [];
            var dashboardsLocal = [];
            data.forEach(function (v, x) {
                var board = {
                    id: data[x].id,
                    name: _this.dashboardService.getDashboardTitle(data[x]),
                    isProduct: data[x].type && data[x].type.toLowerCase() === _this.DashboardType.PRODUCT.toLowerCase()
                };
                if (board.isProduct) {
                }
                dashboardsLocal.push(board);
            });
            _this.dashboards = dashboardsLocal;
            if (_this.searchFilter === '') {
                _this.dashboardData.count(type).subscribe(function (result) {
                    _this.totalItems = result;
                });
            }
            return dashboardsLocal;
        };
        this.processDashboardError = function (data) {
            _this.dashboards = [];
            return _this.dashboards;
        };
        this.processMyDashboardResponse = function (response) {
            var mydata = response.data;
            var type = response.type;
            // add dashboards to list
            _this.mydash = [];
            var dashboardsLocal = [];
            mydata.forEach(function (v, x) {
                var showErrorVal = _this.getInvalidAppOrCompError(mydata[x]);
                dashboardsLocal.push({
                    id: mydata[x].id,
                    name: _this.dashboardService.getDashboardTitle(mydata[x]),
                    type: mydata[x].type,
                    isProduct: mydata[x].type && mydata[x].type.toLowerCase() === _this.DashboardType.PRODUCT.toLowerCase(),
                    validServiceName: mydata[x].validServiceName,
                    validAppName: mydata[x].validAppName,
                    configurationItemBusServName: mydata[x].configurationItemBusServName,
                    configurationItemBusAppName: mydata[x].configurationItemBusAppName,
                    showError: showErrorVal,
                    scoreEnabled: mydata[x].scoreEnabled,
                    scoreDisplay: mydata[x].scoreDisplay
                });
            });
            _this.mydash = dashboardsLocal;
            _this.dashboardData.myDashboardsCount(type).subscribe(function (data) {
                _this.totalItemsMyDash = data;
            });
            return dashboardsLocal;
        };
        this.processFilterMyDashboardResponse = function (response) {
            var mydata = response.data;
            var type = response.type;
            // add dashboards to list
            _this.mydash = [];
            var dashboardsLocal = [];
            mydata.forEach(function (v, x) {
                var showErrorVal = _this.getInvalidAppOrCompError(mydata[x]);
                dashboardsLocal.push({
                    id: mydata[x].id,
                    name: _this.dashboardService.getDashboardTitle(mydata[x]),
                    type: mydata[x].type,
                    isProduct: mydata[x].type && mydata[x].type.toLowerCase() === _this.DashboardType.PRODUCT.toLowerCase(),
                    validServiceName: mydata[x].validServiceName,
                    validAppName: mydata[x].validAppName,
                    configurationItemBusServName: mydata[x].configurationItemBusServName,
                    configurationItemBusAppName: mydata[x].configurationItemBusAppName,
                    showError: showErrorVal,
                    scoreEnabled: mydata[x].scoreEnabled,
                    scoreDisplay: mydata[x].scoreDisplay
                });
            });
            _this.mydash = dashboardsLocal;
            if (_this.searchFilter === '') {
                _this.dashboardData.myDashboardsCount(type).subscribe(function (result) {
                    _this.totalItemsMyDash = result;
                });
            }
            return dashboardsLocal;
        };
        this.processMyDashboardError = function (data) {
            _this.mydash = [];
            return _this.mydash;
        };
        this.filterByTitle = function (title, type) {
            _this.currentPage = 0;
            _this.currentPageMyDash = 0;
            _this.searchFilter = title;
            var promises = [];
            if (title === '') {
                promises.push(_this.dashboardData.searchByPage({ search: '', size: _this.pageSize, page: 0, type: type })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.processDashboardError))
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.processDashboardResponse)));
                promises.push(_this.dashboardData.searchMyDashboardsByPage({ username: _this.username, type: type, size: _this.pageSize, page: 0 })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.processMyDashboardError))
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.processMyDashboardResponse)));
            }
            else {
                promises.push(_this.dashboardData.filterCount(title, type)
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
                    _this.totalItems = data;
                    return data;
                })));
                promises.push(_this.dashboardData.filterByTitle({ search: title, type: type, size: _this.pageSize, page: 0 })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.processDashboardError))
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.processDashboardFilterResponse)));
                promises.push(_this.dashboardData.filterMyDashboardCount(title, type)
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
                    _this.totalItemsMyDash = data;
                    return data;
                })));
                promises.push(_this.dashboardData.filterMyDashboardsByTitle({ search: title, type: type, size: _this.pageSize, page: 0 })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(_this.processMyDashboardError))
                    .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(_this.processFilterMyDashboardResponse)));
            }
            return promises;
        };
        this.username = this.authService.getUserName();
    }
    PaginationWrapperService.prototype.calculateTotalItems = function (type) {
        var _this = this;
        return this.dashboardData.count(type)
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            _this.totalItems = data;
            return data;
        }));
    };
    PaginationWrapperService.prototype.calculateTotalItemsMyDash = function (type) {
        var _this = this;
        return this.dashboardData.myDashboardsCount(type).subscribe(function (data) {
            _this.totalItemsMyDash = data;
        });
    };
    PaginationWrapperService.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    PaginationWrapperService.prototype.getTotalItemsMyDash = function () {
        return this.totalItemsMyDash;
    };
    PaginationWrapperService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    PaginationWrapperService.prototype.getPageSize = function () {
        return this.pageSize;
    };
    PaginationWrapperService.prototype.getDashboards = function () {
        return this.dashboards;
    };
    PaginationWrapperService.prototype.getMyDashboards = function () {
        return this.mydash;
    };
    PaginationWrapperService.prototype.setDashboards = function (paramDashboards) {
        this.dashboards = paramDashboards;
    };
    PaginationWrapperService.prototype.getInvalidAppOrCompError = function (data) {
        var showError = false;
        if ((data.configurationItemBusServName !== undefined && !data.validServiceName)
            || (data.configurationItemBusAppName !== undefined && !data.validAppName)) {
            showError = true;
        }
        return showError;
    };
    PaginationWrapperService.prototype.pageChangeHandler = function (pageNumber, type) {
        this.currentPage = pageNumber;
        if (this.searchFilter === '') {
            return this.dashboardData.searchByPage({ search: '', size: this.pageSize, page: pageNumber - 1, type: type })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.processDashboardError))
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(this.processDashboardResponse));
        }
        else {
            return this.dashboardData.filterByTitle({ search: this.searchFilter, size: this.pageSize, page: pageNumber - 1, type: type })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.processDashboardError))
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(this.processDashboardFilterResponse));
        }
    };
    PaginationWrapperService.ctorParameters = function () { return [
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"] },
        { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardService"] }
    ]; };
    PaginationWrapperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardService"]])
    ], PaginationWrapperService);
    return PaginationWrapperService;
}());



/***/ })

}]);
//# sourceMappingURL=admin_modules-admin_dashboard-admin-dashboard-modules.js.map