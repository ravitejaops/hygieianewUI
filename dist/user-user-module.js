(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-6\">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" [class.active]=\"isStandLogin()\" (click)=\"setActiveTab('STANDARD')\">Standard</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" *ngIf=\"authenticationProviders && authenticationProviders.includes('LDAP')\" [class.active]=\"isLdapLogin()\" (click)=\"setActiveTab('LDAP')\">LDAP</a>\n          </li>\n        </ul>\n        <header>\n          <h3> {{ authName |  titlecase }} Login</h3>\n        </header>\n        <br />\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm)\" class=\"login-form\" novalidate>\n          <div class=\"login\">\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                Username:\n              </div>\n              <div class=\"col-md-10\">\n                <input type=\"username\" name=\"username\" id=\"username\" class=\"form-control\" formControlName=\"username\" />\n                <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.username.untouched || loginForm.controls.username.valid\">\n                  A valid username address is required\n                </div>\n              </div>\n            </div>\n            <br />\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                Password:\n              </div>\n              <div class=\"col-md-10\">\n                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" />\n                <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.password.untouched || loginForm.controls.password.valid\">\n                  Password is required (6 or more characters with at least one number)\n                </div>\n              </div>\n            </div>\n            <br />\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\n              </div>\n            </div>\n            <br />\n            <div class=\"statusRow\">\n              <br />\n              <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{ errorMessage }}</div>\n            </div>\n            <div class=\"gap text-center\" [hidden]=\"!isStandLogin()\">\n              <p>Don't have an account?</p>\n              <div class=\"btn btn-link btn-wide\"\n                   (click)=\"signUp()\" >\n                <span class=\"fa fa-lg fa-key\"></span>\n                Sign up\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <div class=\"container\">\n    <header>\n      <h3>  Please Sign Up</h3>\n    </header>\n    <br />\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submit(signupForm)\" class=\"login-form\" novalidate>\n      <div class=\"login\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            username:\n          </div>\n          <div class=\"col-md-10\">\n            <input type=\"username\" id=\"username\" name=\"username\" class=\"form-control\" formControlName=\"username\"\n                   [ngClass]=\"{'is-invalid': (signupForm.get('username').touched ||\n                                            signupForm.get('username').dirty) &&\n                                            !signupForm.get('username').valid }\" />\n            <span class=\"invalid-feedback\">\n              <span *ngIf=\"signupForm.get('username').errors?.required\">\n                A valid username address is required\n              </span>\n            </span>\n          </div>\n        </div>\n        <br />\n        <div formGroupName=\"passwordGroup\">\n        <div class=\"row\">\n\n            <div class=\"col-md-2\">\n              Password:\n            </div>\n            <div class=\"col-md-10\">\n              <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\"\n                     [ngClass]=\"{'is-invalid': signupForm.get('passwordGroup').errors ||\n                                             ((signupForm.get('passwordGroup.password').touched ||\n                                              signupForm.get('passwordGroup.password').dirty) &&\n                                              !signupForm.get('passwordGroup.password').valid) }\" />\n              <span class=\"invalid-feedback\">\n              <span *ngIf=\"signupForm.get('passwordGroup.confirmPassword').errors?.required\">\n                Password is required (6 or more characters with at least one number)\n              </span>\n            </span>\n            </div>\n        </div>\n          <br />\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              Confirm Password:\n            </div>\n            <div class=\"col-md-10\">\n              <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" class=\"form-control\" formControlName=\"confirmPassword\"\n                     [ngClass]=\"{'is-invalid': signupForm.get('passwordGroup').errors ||\n                                             ((signupForm.get('passwordGroup.confirmPassword').touched ||\n                                              signupForm.get('passwordGroup.confirmPassword').dirty) &&\n                                              !signupForm.get('passwordGroup.confirmPassword').valid) }\" />\n\n              <span class=\"invalid-feedback\">\n              <span *ngIf=\"signupForm.get('passwordGroup.confirmPassword').errors?.required\">\n                Please confirm your password.\n              </span>\n              <span *ngIf=\"signupForm.get('passwordGroup').errors?.match\">\n                The confirmation does not match the password.\n              </span>\n            </span>\n            </div>\n          </div>\n\n        </div>\n        <br />\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signupForm.valid\">Sign Up!</button>\n          </div>\n        </div>\n        <br />\n        <div class=\"statusRow\">\n          <br />\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{ errorMessage }}</div>\n        </div>\n        <div class=\"gap text-center\">\n          <p>Already have an account?</p>\n\n          <div class=\"btn btn-link btn-wide\" (click)=\"login()\">\n            <span class=\"fa fa-lg fa-key\"></span>\n            Log in\n          </div>\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9DOlxcVXNlcnNcXHJhdml0XFxEb3dubG9hZHNcXEh5Z2llaWFuZXdcXFVJL3NyY1xcYXBwXFx1c2VyXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




// local imports

var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.buildForm();
        this.getAuthProviders();
    };
    LoginComponent.prototype.getAuthProviders = function () {
        var _this = this;
        this.authService.getAuthenticationProviders().subscribe(function (data) {
            _this.setActiveTab(data[0]);
            _this.authenticationProviders = data;
        });
    };
    LoginComponent.prototype.isStandLogin = function () {
        return this.activeTab === 'STANDARD';
    };
    LoginComponent.prototype.isLdapLogin = function () {
        return this.activeTab === 'LDAP';
    };
    LoginComponent.prototype.setActiveTab = function (tab) {
        if (tab) {
            this.activeTab = tab;
            this.authName = tab;
        }
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    LoginComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value;
        var login;
        if (this.isStandLogin()) {
            login = this.authService.login(value);
        }
        else {
            login = this.authService.loginLdap(value);
        }
        login.subscribe(function (status) {
            if (status) {
                if (_this.authService.redirectUrl) {
                    var redirectUrl = _this.authService.redirectUrl;
                    _this.authService.redirectUrl = '';
                    _this.router.navigate([redirectUrl]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        }, function (err) {
            _this.errorMessage = err.error.message;
        });
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigate(['/user/signup']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




// local imports

function passwordMatcher(c) {
    var passwordControl = c.get('password');
    var confirmControl = c.get('confirmPassword');
    if (passwordControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { match: true };
}
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.authService.logout();
    };
    SignupComponent.prototype.buildForm = function () {
        this.signupForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            passwordGroup: this.formBuilder.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }, { validator: passwordMatcher }),
        });
    };
    SignupComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value;
        var data = {
            username: value.username,
            password: value.passwordGroup.password
        };
        this.authService.register(data).subscribe(function (status) {
            if (status) {
                if (_this.authService.redirectUrl) {
                    var redirectUrl = _this.authService.redirectUrl;
                    _this.authService.redirectUrl = '';
                    _this.router.navigate([redirectUrl]);
                }
                else {
                    _this.router.navigate(['/']);
                }
            }
        }, function (err) {
            _this.errorMessage = 'User already exists';
        });
    };
    SignupComponent.prototype.login = function () {
        this.router.navigate(['/user/login']);
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/user/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");






var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule.components = [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]];
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");




var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"].components],
            imports: [
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map