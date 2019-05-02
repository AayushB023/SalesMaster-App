module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports
;
    if (false) {}


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html"),
            styles: [__webpack_require__("./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _modules_panel_Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/modules/panel/Components/home/home.component.ts");
/* harmony import */ var _modules_dashboard_Components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/modules/dashboard/Components/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_team_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./services/team-service.service.ts");
/* harmony import */ var _modules_team_Components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/modules/team/Components/edit-team/edit-team.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./services/share-data.service.ts");
/* harmony import */ var _modules_dashboard_Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/modules/dashboard/Components/footer/footer.component.ts");
/* harmony import */ var _modules_dashboard_Components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/modules/dashboard/Components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { HttpClientModule } from '@angular/common/http';





// Uncomment and add to NgModule imports if you need to use two-way binding


// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _modules_panel_Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _modules_dashboard_Components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _modules_team_Components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_11__["EditTeamComponent"],
                _modules_dashboard_Components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _modules_dashboard_Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                // HttpClientModule,
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_9__["NativeScriptHttpClientModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIListViewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                // NativeScriptRouterModule.forRoot(routes),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            providers: [_services_team_service_service__WEBPACK_IMPORTED_MODULE_10__["TeamServiceService"], _services_share_data_service__WEBPACK_IMPORTED_MODULE_12__["ShareDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationableComponents", function() { return navigationableComponents; });
/* harmony import */ var _modules_dashboard_Components_list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/modules/dashboard/Components/list/list.component.ts");
/* harmony import */ var _modules_panel_Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/modules/panel/Components/home/home.component.ts");
/* harmony import */ var _modules_team_Components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/modules/team/Components/edit-team/edit-team.component.ts");
/* harmony import */ var _modules_dashboard_Components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/modules/dashboard/Components/header/header.component.ts");
/* harmony import */ var _auth_authguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./auth/authguard.service.ts");





var routes = [
    { path: '', component: _modules_panel_Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'list', component: _modules_dashboard_Components_list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]] },
    { path: 'editList', component: _modules_team_Components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_2__["EditTeamComponent"] },
    { path: 'head', component: _modules_dashboard_Components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] }
];
var navigationableComponents = [
    _modules_panel_Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    _modules_dashboard_Components_list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"],
    _modules_team_Components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_2__["EditTeamComponent"],
    _modules_dashboard_Components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
];


/***/ }),

/***/ "./app/modules/dashboard/Components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n#footer{\n    border: 1px black;\n}"

/***/ }),

/***/ "./app/modules/dashboard/Components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<DockLayout>\n    <Label dock=\"bottom\" height=\"60\" id=\"footer\" backgroundColor=\"yellow\" text=\"{{total}}\"></Label>\n    <Label></Label>\n     \n  </DockLayout>"

/***/ }),

/***/ "./app/modules/dashboard/Components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./services/team-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(teamService) {
        this.teamService = teamService;
        this.total = 0;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeams().subscribe(function (response) {
            // console.log(response);
            if (response && response.status === 200) {
                _this.teams = response.data;
                for (var i = 0; i < _this.teams.length; i++) {
                    _this.total += _this.teams[i].amount;
                }
                console.log(_this.total);
            }
        });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./app/modules/dashboard/Components/footer/footer.component.html"),
            styles: [__webpack_require__("./app/modules/dashboard/Components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_team_service_service__WEBPACK_IMPORTED_MODULE_1__["TeamServiceService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/modules/dashboard/Components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n#a1{ \n    font-size: 16; \n    color: #39ace7; \n    } \n    \n    #a2{ \n    font-size: 20; \n    }"

/***/ }),

/***/ "./app/modules/dashboard/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"C\" class=\"action-bar\">\n    <GridLayout rows=\"*,auto\" columns=\"auto,*,auto\" padding=\"0 4 0 0\" height=\"100%\" width=\"100%\"> \n        <Label id=\"a1\" row=\"0\" col=\"0\" text=\"Logout\" class=\"action-item-left\" (tap)=\"Logout()\"></Label> \n        <Label row=\"0\" col=\"1\" class=\"action-bar-title\" text=\"Team's Revenue\" horizontalAlignment=\"center\"></Label>\n        <Label id=\"a1\" row=\"0\" col=\"2\" text=\"Add\" class=\"action-item-right\" (tap)=\"addTeam()\"> \n        </Label> \n        \n        </GridLayout> \n    </ActionBar>\n"

/***/ }),

/***/ "./app/modules/dashboard/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./services/team-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(getService, router) {
        this.getService = getService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.getService.logout().subscribe(function (response) {
            localStorage.removeItem('accessToken');
            _this.router.navigate(['/']);
        });
    };
    HeaderComponent.prototype.addTeam = function () {
        this.router.navigate(['/editList']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./app/modules/dashboard/Components/header/header.component.html"),
            styles: [__webpack_require__("./app/modules/dashboard/Components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_team_service_service__WEBPACK_IMPORTED_MODULE_1__["TeamServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./app/modules/dashboard/Components/list/list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n.nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n#footer{\n    border: 1px black;\n}\n#a1{ \n    font-size: 16; \n    color: #39ace7; \n    } \n    \n    #a2{ \n    font-size: 20; \n    }"

/***/ }),

/***/ "./app/modules/dashboard/Components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<RadListView class=\"list-group\" [items]=\"teams\" class=\"list-group\" (itemTap)=\"ItemSelected($event)\" (itemSwipeProgressEnded)=\"onSwipeCellFinished($event)\" \n(itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\" (itemSwipeProgressChanged)=\"onCellSwiping($event)\" swipeActions=\"true\">\n    <!-- <PullToRefresh (refresh)=\"refreshMe($event)\"> -->\n    <ng-template let-item=\"item\">\n        <StackLayout class=\"list-group-item\" orientation=\"vertical\" style=\"background-color:whitesmoke\" >\n            <GridLayout>\n                <Label [text]=\"item.team_name\" ></Label>\n                <Label [text]=\"item.amount\" style.textAlignment=\"right\" ></Label>\n            </GridLayout>\n            <StackLayout height=\"1\" backgroundColor =\"black\"></StackLayout>\n        </StackLayout>\n    </ng-template>\n    <GridLayout *tkListItemSwipeTemplate columns=\"*, auto\" class=\"gridLayoutLayout\" > \n        <StackLayout id=\"delete-view\" col=\"1\" class=\"deleteViewStackLayout\" (tap)=\"onRightSwipeClick($event)\" style=\"background-color: red\"> \n        <Label text=\"delete\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\" ></Label> \n        </StackLayout> \n        </GridLayout> \n    <!-- </PullToRefresh> -->\n</RadListView>\n<DockLayout>\n    <Label dock=\"bottom\" height=\"60\" id=\"footer\" backgroundColor=\"yellow\" text=\"{{total}}\"></Label>\n    <Label></Label>\n     \n  </DockLayout>\n\n"

/***/ }),

/***/ "./app/modules/dashboard/Components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./services/team-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./services/share-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// class Team {
//   constructor (public id: Number, public name: string, public revenue: number){ }
// }
var ListComponent = /** @class */ (function () {
    function ListComponent(fromBuilder, teamService, router, shareData) {
        this.fromBuilder = fromBuilder;
        this.teamService = teamService;
        this.router = router;
        this.shareData = shareData;
        this.teamArray = this.fromBuilder.array([]);
        this.parentFormGroup = this.fromBuilder.group({
            teamArray: this.fromBuilder.array([])
        });
        this.logout = function () {
            var _this = this;
            this.teamService.logout().subscribe(function (response) {
                localStorage.removeItem('accessToken');
                _this.router.navigate(['/home']);
            });
        };
        this.openModal = function () {
            this.router.navigate(['/editList']);
        };
        // shareData.setOption('team_name', JSON.stringify(this.teams.team_name));
        // shareData.setOption('amount', JSON.stringify(this.teams.amount));
    }
    ListComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().subscribe(function (response) {
            console.log(response);
            if (response && response.status === 200) {
                _this.teams = response.data;
                // tslint:disable-next-line: prefer-const
                // let teamArray = this.teams.map(team => this.fromBuilder.group({
                //   name: this.fromBuilder.control(team.team_name, [Validators.required]),
                //   amount: this.fromBuilder.control(team.amount, [Validators.required, Validators.pattern('[0-9]*')])
                // }));
                // this.teamArray = this.fromBuilder.array(teamArray);
                // this.parentFormGroup = this.fromBuilder.group({
                //   teamArray: this.teamArray
                // });
            }
            else if (response && response.status === 401) {
                _this.logout();
            }
        });
    };
    ListComponent.prototype.ItemSelected = function (args) {
        console.log('Hi');
        this.selected = this.teams[args.index];
        this.shareData.setOption('team_name', JSON.stringify(this.selected));
        // item.selected = true;
        this.router.navigate(['/editList']);
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    ListComponent.prototype.addTeam = function () {
        this.router.navigate(['/addTeam']);
    };
    ListComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        if (args.data.x < -200) {
            console.log('Notify perform right action');
        }
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = rightItem.getMeasuredWidth(); // 2; 
    };
    ListComponent.prototype.onSwipeCellFinished = function (args) {
    };
    ListComponent.prototype.onRightSwipeClick = function (args) {
        console.log('Right swipe click');
        console.log(args.id);
        this.teams.splice(this.teams.indexOf(args.object.bindingContext), 1);
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("./app/modules/dashboard/Components/list/list.component.html"),
            styles: [__webpack_require__("./app/modules/dashboard/Components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_team_service_service__WEBPACK_IMPORTED_MODULE_1__["TeamServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./app/modules/panel/Components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".page {\n    align-items: center;\n    flex-direction: column;\n  }\n  .form {\n    margin-left: 30;\n    margin-right: 30;\n    vertical-align: middle;\n  }\n  TextField{\n    margin-left: 16;\n    margin-right: 16;\n    margin-bottom: 10;\n    color: black;\n  }\n  Image {\n    margin-top: 10%;\n}"

/***/ }),

/***/ "./app/modules/panel/Components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Sales Master\"></Label>\n</ActionBar>\n\n<Image src=\"res://favicon\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n  <StackLayout class=\"form\" [formGroup]=\"signUpForm\" >\n      \n    <TextField class=\"input\" formControlName=\"email\"  hint=\"Email Address\" keyboardType=\"email\" autocorrect=\"false\"\n      autocapitalizationType=\"none\"></TextField>\n    <TextField class=\"input\" formControlName=\"password\" hint=\"Password\" secure=\"true\"></TextField>\n    <Button text=\"Log In\" class=\"btn btn-primary m-t-20\" (tap)=\"submit(signUpForm.value)\"></Button>\n  </StackLayout>\n"

/***/ }),

/***/ "./app/modules/panel/Components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_team_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./services/team-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as localStorage from 'nativescript-localstorage';
// var Sqlite = require('nativescript-sqlite');
var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, teamService, router) {
        this.fb = fb;
        this.teamService = teamService;
        this.router = router;
        this.title = 'app-name';
        this.signUpForm = this.fb.group({
            email: ['saral@jungleworks.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['123456', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.submit = function (data) {
            var _this = this;
            // tslint:disable-next-line: no-shadowed-variable
            this.teamService.login(this.signUpForm.value).subscribe(function (data) {
                _this.userdata = data;
                console.log(_this.userdata);
                // tslint:disable-next-line: triple-equals
                if (_this.userdata && _this.userdata.status == 200) {
                    console.log('Sorryif');
                    __webpack_require__("../node_modules/nativescript-localstorage/localstorage.js");
                    localStorage.setItem('accessToken', data.body.access_token);
                    _this.router.navigate(['/list']);
                }
                else {
                    console.log('Sorryelse');
                }
            });
        };
        // this.people = [];
        // (new Sqlite("my.db").then(db => {
        //   db.execSQL("Create Table (id INTEGER PRIMARY KEY AUTO")
        // }))
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./app/modules/panel/Components/home/home.component.html"),
            styles: [__webpack_require__("./app/modules/panel/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_team_service_service__WEBPACK_IMPORTED_MODULE_3__["TeamServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/modules/team/Components/edit-team/edit-team.component.css":
/***/ (function(module, exports) {

module.exports = ".page {\n  align-items: center;\n  flex-direction: column;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  vertical-align: middle;\n}\nTextField{\n  margin-left: 16;\n  margin-right: 16;\n  margin-bottom: 10;\n  color: black;\n}\nImage {\n  margin-top: 10%;\n}\ninput{ \nborder:none; \nborder-bottom: 1px solid black; \nwidth: 300px; \nheight: 40px; \n} \n#but{ \nwidth: 300px; \nheight: 40px; \nbackground-color: blue; \ncolor: white; \nborder: 2px solid blue; \nborder-radius: 10px; \n}  \n\nh1{ \ntext-align: center; \n} \ncenter{ \ntext-align: center; \nmargin: 0 auto; \n}"

/***/ }),

/***/ "./app/modules/team/Components/edit-team/edit-team.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" tap=\"onNavBtnTap\"></NavigationButton>\n    <Label class=\"action-bar-title\" text=\"Team's Record\"></Label>\n</ActionBar>\n\n<StackLayout class=\"form\" [formGroup]=\"TeamForm\">\n      \n  <TextField hint=\"Team Name\" class=\"input-input-border\" [(NgModel)]=\"team_name\" formControlName=\"team_name\" [text]=\"team_name\"></TextField>\n  <TextField hint=\"Amount\" class=\"input-input-border\" [(NgModel)]=\"amount\" formControlName=\"amount\" [text]=\"amount\"></TextField>\n  <Button text=\"Save\" class=\"btn btn-primary m-t-20\" (tap)=\"submit(TeamForm.value)\"></Button>\n  <Button text=\"Delete\" class=\"btn btn-primary m-t-20\" (tap)=\"delete()\"></Button>\n</StackLayout>\n"

/***/ }),

/***/ "./app/modules/team/Components/edit-team/edit-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamComponent", function() { return EditTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./services/share-data.service.ts");
/* harmony import */ var _services_team_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./services/team-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTeamComponent = /** @class */ (function () {
    function EditTeamComponent(fb, shareData, teamService, router) {
        this.fb = fb;
        this.shareData = shareData;
        this.teamService = teamService;
        this.router = router;
        this.teams = [];
        this.TeamForm = this.fb.group({
            team_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.submit = function (id, teams) {
            var _this = this;
            console.log('jra h');
            var data = {
                team_id: this.id,
                team_name: this.TeamForm.get('team_name').value,
                amount: this.TeamForm.get('amount').value
            };
            console.log(data.team_name);
            this.teamService.updateTeam(data).subscribe(function (response) {
                // console.log(response && response.status == 200);
                if (response && response.status === 200) {
                    console.log('H121');
                    alert('Hello World');
                    _this.router.navigate(['/list']);
                    _this.teams[id].team_name = data.team_name;
                    _this.teams[id].amount = data.amount;
                }
            });
            // console.log(id, teams);
        };
        this.delete = function () {
            var _this = this;
            console.log('jra h');
            var data = {
                team_id: this.id,
            };
            console.log(data.team_id);
            this.teamService.deleteTeam(data).subscribe(function (response) {
                console.log(response);
                if (response && response.status == 200) {
                    console.log('H121');
                    //  alert('Hello World');
                    _this.router.navigate(['/list']);
                }
            });
            // console.log(id, teams);
        };
    }
    EditTeamComponent.prototype.ngOnInit = function () {
        this.teams = this.shareData.getOption();
        this.id = JSON.parse(this.teams).team_id;
        this.team_name = JSON.parse(this.teams).team_name;
        this.amount = JSON.parse(this.teams).amount;
        console.log(this.teams);
    };
    EditTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-team',
            template: __webpack_require__("./app/modules/team/Components/edit-team/edit-team.component.html"),
            styles: [__webpack_require__("./app/modules/team/Components/edit-team/edit-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_share_data_service__WEBPACK_IMPORTED_MODULE_1__["ShareDataService"],
            _services_team_service_service__WEBPACK_IMPORTED_MODULE_2__["TeamServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditTeamComponent);
    return EditTeamComponent;
}());



/***/ }),

/***/ "./auth/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('accessToken')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://13.233.150.141:3001/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc"},"main":"main.js","name":"migration-ng","version":"4.1.0"};

/***/ }),

/***/ "./services/share-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShareDataService = /** @class */ (function () {
    function ShareDataService() {
        this.data = [];
    }
    ShareDataService.prototype.setOption = function (option, value) {
        // debugger;
        this.data = value;
        console.log(this.data);
    };
    ShareDataService.prototype.getOption = function () {
        return this.data;
    };
    ShareDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ShareDataService);
    return ShareDataService;
}());



/***/ }),

/***/ "./services/team-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamServiceService", function() { return TeamServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamServiceService = /** @class */ (function () {
    function TeamServiceService(http) {
        this.http = http;
    }
    TeamServiceService.prototype.getTeams = function () {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/get', { 'access_token': accessToken });
    };
    TeamServiceService.prototype.login = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'user/login', data);
    };
    TeamServiceService.prototype.logout = function () {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'user/logout', { 'access_token': accessToken });
    };
    TeamServiceService.prototype.updateTeam = function (data) {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/edit', Object.assign({ 'access_token': accessToken }, data));
    };
    TeamServiceService.prototype.addTeam = function (data) {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/add', Object.assign({ 'access_token': accessToken }, data));
    };
    TeamServiceService.prototype.deleteTeam = function (data) {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/delete', Object.assign({ 'access_token': accessToken }, data));
    };
    TeamServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamServiceService);
    return TeamServiceService;
}());



/***/ })

/******/ });