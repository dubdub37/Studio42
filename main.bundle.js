webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aboutNav {\r\n  height: 600px;\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullW.png\");\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.mainWelcomePort {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  font-size: 2em;\r\n  color: black;\r\n  text-align: center;\r\n  font-family: futura;\r\n}\r\n\r\n.example-card {\r\n  width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('http://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.example-button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.historyDiv {\r\n  padding-left: 500px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.historyDiv2 {\r\n  padding-left: 100px;\r\n}\r\n\r\n/*.hisDivs {*/\r\n  /*position: absolute;*/\r\n  /*left: 50%;*/\r\n  /*transform: translate(-50%, -50%);*/\r\n/*}*/\r\n@media only screen and (max-width: 1910px){\r\n  .historyDiv {\r\n    padding-left: 500px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1869px){\r\n  .historyDiv {\r\n    padding-left: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1819px){\r\n  .historyDiv {\r\n    padding-left: 450px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1700px){\r\n  .historyDiv {\r\n    padding-left: 425px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1665px){\r\n  .historyDiv {\r\n    padding-left: 400px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1600px){\r\n  .historyDiv {\r\n    padding-left: 375px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1560px){\r\n  .historyDiv {\r\n    padding-left: 350px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1540px){\r\n  .historyDiv {\r\n    padding-left: 320px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1493px){\r\n  .historyDiv {\r\n    padding-left: 300px;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1320px){\r\n\r\n  .historyDiv {\r\n    padding-left: 200px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1120px){\r\n\r\n  .historyDiv {\r\n    padding-left: 100px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .historyDiv {\r\n    padding-left: 0px;\r\n  }\r\n\r\n  .example-card {\r\n    width: auto;\r\n  }\r\n\r\n  .historyDiv2 {\r\n    padding-left: 0px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"aboutNav\">\n<div class=\"mainWelcomePort\">\n  About Us\n</div>\n  <div class=\"hisDivs\">\n  <div class=\"historyDiv\" style=\"display: inline-block;\">\n  <mat-card class=\"example-card\">\n  <img mat-card-image src=\"assets/img/fam.png\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <div style=\"font-family: futura; text-align: center; font-size: 15px;\">..A Brief History</div>\n    <div>\n      <div class=\"button-row\" style=\"text-align: center; padding-top: 10px;\">\n        <button mat-fab style=\"background-color: darkred\" (click)=\"openDialog1()\"><span style=\"color: white\">Read</span></button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n  </div>\n  <div class=\"historyDiv2\" style=\"display: inline-block;\">\n  <mat-card class=\"example-card\">\n    <img mat-card-image src=\"assets/img/imageShp.png\">\n    <mat-card-content>\n     <div style=\"font-family: futura; text-align: center;  font-size: 15px;\">Studio 42</div>\n      <div>\n          <div class=\"button-row\" style=\"text-align: center; padding-top: 10px;\">\n          <button mat-fab style=\"background-color: darkred\" (click)=\"openDialog2()\"><span style=\"color: white\">Read</span></button>\n        </div>\n      </div>\n    </mat-card-content>\n  </mat-card>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thestudioinfo_thestudioinfo_component__ = __webpack_require__("../../../../../src/app/thestudioinfo/thestudioinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__briefhistory_briefhistory_component__ = __webpack_require__("../../../../../src/app/briefhistory/briefhistory.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(dialog) {
        this.dialog = dialog;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.openDialog2 = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__thestudioinfo_thestudioinfo_component__["a" /* ThestudioinfoComponent */]);
    };
    AboutComponent.prototype.openDialog1 = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__briefhistory_briefhistory_component__["a" /* BriefhistoryComponent */]);
    };
    AboutComponent.prototype.onClick = function () {
        this.animationClicked = true;
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-subnav></app-subnav>\n<app-main-nav></app-main-nav>\n<app-nav3></app-nav3>\n<app-nav4></app-nav4>\n<app-artists></app-artists>\n<app-artist2></app-artist2>\n<app-artist3></app-artist3>\n<app-theshop></app-theshop>\n<app-about></app-about>\n<app-faq></app-faq>\n<app-footer></app-footer>\n<!--<router-outlet></router-outlet>-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subnav_subnav_component__ = __webpack_require__("../../../../../src/app/subnav/subnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_nav_main_nav_component__ = __webpack_require__("../../../../../src/app/main-nav/main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav3_nav3_component__ = __webpack_require__("../../../../../src/app/nav3/nav3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav4_nav4_component__ = __webpack_require__("../../../../../src/app/nav4/nav4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_siema__ = __webpack_require__("../../../../ngx-siema/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__artists_artists_component__ = __webpack_require__("../../../../../src/app/artists/artists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__artist2_artist2_component__ = __webpack_require__("../../../../../src/app/artist2/artist2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__theshop_theshop_component__ = __webpack_require__("../../../../../src/app/theshop/theshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__port1images_port1images_component__ = __webpack_require__("../../../../../src/app/port1images/port1images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__port2images_port2images_component__ = __webpack_require__("../../../../../src/app/port2images/port2images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__thestudioinfo_thestudioinfo_component__ = __webpack_require__("../../../../../src/app/thestudioinfo/thestudioinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__briefhistory_briefhistory_component__ = __webpack_require__("../../../../../src/app/briefhistory/briefhistory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__artist3_artist3_component__ = __webpack_require__("../../../../../src/app/artist3/artist3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__faq_q_faq_q_component__ = __webpack_require__("../../../../../src/app/faq-q/faq-q.component.ts");
/* unused harmony export galleryConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var galleryConfig = {};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__subnav_subnav_component__["a" /* SubnavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_nav_main_nav_component__["a" /* MainNavComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nav3_nav3_component__["a" /* Nav3Component */],
            __WEBPACK_IMPORTED_MODULE_7__nav4_nav4_component__["a" /* Nav4Component */],
            __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__faq_faq_component__["a" /* FaqComponent */],
            __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__artists_artists_component__["a" /* ArtistsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__artist2_artist2_component__["a" /* Artist2Component */],
            __WEBPACK_IMPORTED_MODULE_14__theshop_theshop_component__["a" /* TheshopComponent */],
            __WEBPACK_IMPORTED_MODULE_21__port1images_port1images_component__["a" /* Port1imagesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__port2images_port2images_component__["a" /* Port2imagesComponent */],
            __WEBPACK_IMPORTED_MODULE_27__thestudioinfo_thestudioinfo_component__["a" /* ThestudioinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__briefhistory_briefhistory_component__["a" /* BriefhistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_29__artist3_artist3_component__["a" /* Artist3Component */],
            __WEBPACK_IMPORTED_MODULE_30__faq_q_faq_q_component__["a" /* FaqQComponent */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__port1images_port1images_component__["a" /* Port1imagesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__port2images_port2images_component__["a" /* Port2imagesComponent */],
            __WEBPACK_IMPORTED_MODULE_27__thestudioinfo_thestudioinfo_component__["a" /* ThestudioinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__briefhistory_briefhistory_component__["a" /* BriefhistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_30__faq_q_faq_q_component__["a" /* FaqQComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["b" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["a" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_siema__["a" /* NgxSiemaModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_26_ngx_gallery__["a" /* NgxGalleryModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_25_ng_gallery__["a" /* GalleryModule */].forRoot(galleryConfig),
            __WEBPACK_IMPORTED_MODULE_20_primeng_primeng__["LightboxModule"],
            __WEBPACK_IMPORTED_MODULE_19__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_24__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_router__["RouterModule"].forRoot([
                { path: 'port1imgs', component: __WEBPACK_IMPORTED_MODULE_21__port1images_port1images_component__["a" /* Port1imagesComponent */] },
                { path: 'port2imgs', component: __WEBPACK_IMPORTED_MODULE_22__port2images_port2images_component__["a" /* Port2imagesComponent */] },
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/artist2/artist2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".artistNav {\r\n  height: 500px;\r\n  /*background-color: white  ;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullW.png\");\r\n  padding-top: 100px;\r\n;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.headshot {\r\n  float: left;\r\n  padding-top: 15px;\r\n  padding-right: 120px;\r\n}\r\n\r\n.artisthead {\r\n  padding-left: 500px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 800px;\r\n  margin-top: -650px;\r\n  float: left;\r\n  font-size: 150px;\r\n}\r\n\r\n.artistText {\r\n  padding-left: 600px;\r\n  font-size: 16px;\r\n  margin-top: -500px;\r\n  padding-right: 25px;\r\n  font-family: futura;\r\n  padding-top: 30px;\r\n  /*font-weight: bold;*/\r\n}\r\n\r\n\r\n@media only screen and (max-width: 736px) {\r\n  img {\r\n    height: 80%;\r\n    width: 95%;\r\n  }\r\n\r\n  .artistNav {\r\n    padding-top: 200px;\r\n\r\n  }\r\n\r\n  element.style {\r\n    font-family: james;\r\n    font-size: 65px !important;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 280px;\r\n    margin-top: -400px;\r\n    /* float: left; */\r\n    font-size: 75px;\r\n  }\r\n\r\n  .artistText {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n    margin-top: -15px;\r\n    padding-right: 25px;\r\n    font-family: futura;\r\n    /*padding-top: 50px;*/\r\n  }\r\n\r\n\r\n\r\n}\r\n@media only screen and (max-width: 575px) {\r\n\r\n  img {\r\n    height: 80%;\r\n    width: 95%;\r\n  }\r\n\r\n  .artistNav {\r\n    padding-top: 200px;\r\n\r\n  }\r\n\r\n  element.style {\r\n    font-family: james;\r\n    font-size: 65px !important;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 280px;\r\n    margin-top: -400px;\r\n    /* float: left; */\r\n    font-size: 75px;\r\n  }\r\n\r\n  .artistText {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n    margin-top: -15px;\r\n    padding-right: 25px;\r\n    font-family: futura;\r\n    /*padding-top: 50px;*/\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .artisthead2 {\r\n    padding-left: 250px;\r\n    margin-top: -350px;\r\n    /* float: left; */\r\n    font-size: 75px;\r\n  }\r\n\r\n  img {\r\n    height: 80%;\r\n    width: 95%;\r\n  }\r\n\r\n  .artistNav {\r\n    padding-top: 165px;\r\n\r\n  }\r\n\r\n  element.style {\r\n    font-family: james;\r\n    font-size: 65px !important;\r\n  }\r\n\r\n  .artistText {\r\n    padding-left: 25px;\r\n    font-size: 12px;\r\n    margin-top: -15px;\r\n    padding-right: 25px;\r\n    font-family: futura;\r\n    text-align: center;\r\n    /*padding-top: 50px;*/\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist2/artist2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"oz\" class=\"artistNav\">\n  <div>\n    <img class=\"headshot2\" src=\"assets/img/Headshotmale.png\">\n  </div>\n  <!--<div class=\"artisthead\" style=\"font-family: futura; font-size: 50px;\">-->\n    <!--Artist-->\n  <!--</div>-->\n  <div class=\"artisthead2\">\n   <img src=\"assets/img/ozText.png\">\n  </div>\n  <div class=\"artistText\">\n    ﻿Glenn,﻿ aka OZ, is not just another black shirt wearing tattoo artist. He likes green. He has been tattooing for 16 years and piercing 18. He likes tattooing all styles and hopes to be considered a well rounded artist by his peers. Designs with bold color and shapes that fit the body’s curves are always sharp looking in his book. In his spare time he fabricates handmade tattoo machines, for the industry and friends. When he is not behind the desk drawing or working on a client you can usually find him in the machine shop with his head down and sparks flying. Currently, he is working on redefining the title “Artist.\" Exploring and training in many techniques and mediums of the creative universe, with focuses on the practical aspects of tattooing today.  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artist2/artist2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Artist2Component = (function () {
    function Artist2Component() {
    }
    Artist2Component.prototype.ngOnInit = function () {
    };
    return Artist2Component;
}());
Artist2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-artist2',
        template: __webpack_require__("../../../../../src/app/artist2/artist2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist2/artist2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Artist2Component);

//# sourceMappingURL=artist2.component.js.map

/***/ }),

/***/ "../../../../../src/app/artist3/artist3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".artistNav {\r\n  height: 800px;\r\n  /*background-color: white;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullW.png\");\r\n  /*background-repeat: repeat;*/\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.headshot1{\r\n  float: right;\r\n  padding-top: 75px;\r\n  padding-right: 120px;\r\n}\r\n\r\n.artisthead {\r\n  padding-left: 500px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 800px;\r\n  padding-top: 370px;\r\n}\r\n\r\n.artistText {\r\n  padding: 10px 50px 50px 50px;\r\n  font-family: futura;\r\n  font-size: 16px;\r\n  /*font-weight: bold;*/\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 475px;\r\n    padding-right: 25px;\r\n    height: 50%;\r\n    width: 85%;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n    font-size: 60px;\r\n    /*padding-left: 50px;*/\r\n    /*padding-top: 450px;*/\r\n    margin-top: 540px;\r\n    padding-top: 0px;\r\n    position: absolute;\r\n    /*margin-left: 15px;*/\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: -20px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1540px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 50px;\r\n    padding-right: 120px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1526px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 70px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 700px;\r\n    padding-top: 370px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1426px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 215px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 500px;\r\n    padding-top: 370px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1226px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 215px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 300px;\r\n    padding-top: 370px;\r\n  }\r\n  .artistNav {\r\n    height: 525px;\r\n    background-color: white;\r\n    /*padding-top: 100px;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1196px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 20px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 300px;\r\n    padding-top: 530px;\r\n  }\r\n\r\n  .artistNav {\r\n    height: 830px;\r\n    background-color: white;\r\n    /*padding-top: 100px;*/\r\n  }\r\n}\r\n@media only screen and (max-width: 414px) {\r\n  .artisthead2 {\r\n    padding-left: 15px;\r\n    padding-top: 75px;\r\n  }\r\n\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 500px;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: -20px;\r\n    padding: 5px 5px 5px 50px;\r\n  }\r\n\r\n  .artistNav {\r\n    height: 1075px;\r\n    background-color: white;\r\n    /*padding-top: 100px;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: -20px;\r\n    padding: 5px 5px 5px 40px;\r\n    /*font-weight: bold;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 415px;\r\n    padding-right: 25px;\r\n    height: 50%;\r\n    width: 85%;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  img {\r\n    width: 70%;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n    font-size: 60px;\r\n    /*padding-left: 50px;*/\r\n    /*padding-top: 450px;*/\r\n    margin-top: 475px;\r\n    padding-top: 0px;\r\n    position: absolute;\r\n    /*margin-left: 15px;*/\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 12px;\r\n    margin-top: -20px;\r\n    padding: 10px 25px 5px 25px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist3/artist3.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"jen\" class=\"artistNav\">\n  <div>\n    <img class=\"headshot1\" src=\"assets/img/girlShot2.png\">\n  </div>\n  <!--<div class=\"artisthead\" style=\"font-family: futura; font-size: 50px;\">-->\n  <!--Artist-->\n  <!--</div>-->\n  <div class=\"artisthead2\">\n    <img src=\"assets/img/jenText.png\">\n  </div>\n  <div class=\"artistText\">\n    Jen is a renowned, award winning, female artist. She has been tattooing for over 20 years give or take. Her apprenticeship was served under Brian Williams of Skin Deep in Clarksville, TN. She specializes in fine line, portrait, and cover up work. Her other talents, such as painting acrylic, oil, and airbrush, have helped her refine the art she does on a daily basis. Not to mention, she is a fabulous cook and mother. Currently she is involved with animal charities. That’s right folks, she loves dogs as well as cats. She is also working towards her RYT500 in yoga. Oz calls her a yoga champion</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artist3/artist3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Artist3Component = (function () {
    function Artist3Component() {
    }
    Artist3Component.prototype.ngOnInit = function () {
    };
    return Artist3Component;
}());
Artist3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-artist3',
        template: __webpack_require__("../../../../../src/app/artist3/artist3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artist3/artist3.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Artist3Component);

//# sourceMappingURL=artist3.component.js.map

/***/ }),

/***/ "../../../../../src/app/artists/artists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".artistNav {\r\n  height: 500px;\r\n  /*background-color: white;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullW.png\");\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.headshot1{\r\n  float: right;\r\n  padding-top: 15px;\r\n  padding-right: 120px;\r\n}\r\n\r\n.artisthead {\r\n  padding-left: 500px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.cassieImg{\r\n  margin-top: 200px;\r\n  position: absolute;\r\n  left: 700px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 465px;\r\n  padding-top: 0px;\r\n}\r\n\r\n.artistText {\r\n  padding: 25px;\r\n  font-family: futura;\r\n  font-size: 16px;\r\n  position: absolute;\r\n  margin-top: 300px;\r\n  padding-right: 500px;\r\n  padding-left: 75px\r\n  /*font-weight: bold;*/\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n.headshot1 {\r\n  float: right;\r\n  padding-top: 15px;\r\n  padding-right: 10px;\r\n  height: 50%;\r\n  width: 65%;\r\n  margin-right: 20px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 0px;\r\n  position: relative;\r\n}\r\n\r\n  .cassieImg{\r\n    margin-top: 180px;\r\n    position: absolute;\r\n    left: 8px;\r\n  }\r\nimg {\r\n  width: 75%;\r\n}\r\n\r\n  .artistText {\r\n    padding: 25px;\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: 450px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1400px) {\r\n  .cassieImg {\r\n    margin-top: 200px;\r\n    position: absolute;\r\n    left: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n  }\r\n.artistText {\r\n  padding: 12px;\r\n}\r\n  .cassieImg{\r\n    margin-top: 180px;\r\n    position: absolute;\r\n    left: 0px;\r\n  }\r\n\r\n  img {\r\n    width: 70%;\r\n  }\r\n}\r\n@media only screen and (max-width: 414px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 15px;\r\n    padding-right: 10px;\r\n    height: 50%;\r\n    width: 65%;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 0px;\r\n    position: relative;\r\n  }\r\n\r\n  .cassieImg{\r\n    margin-top: 160px;\r\n    position: absolute;\r\n    left: 8px;\r\n  }\r\n  img {\r\n    width: 70%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 25px;\r\n    font-family: futura;\r\n    font-size: 12px;\r\n    margin-top: 450px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 15px;\r\n    padding-right: 10px;\r\n    height: 50%;\r\n    width: 65%;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 0px;\r\n    position: relative;\r\n  }\r\n\r\n  .cassieImg{\r\n    margin-top: 160px;\r\n    position: absolute;\r\n    left: 8px;\r\n  }\r\n  img {\r\n    width: 60%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 25px;\r\n    font-family: futura;\r\n    font-size: 12px;\r\n    margin-top: 360px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artists/artists.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"cassie\" class=\"artistNav\">\n  <div>\n    <img class=\"headshot1\" src=\"assets/img/girlShot.png\">\n  </div>\n  <!--<div class=\"artisthead\" style=\"font-family: futura; font-size: 50px;\">-->\n  <!--Artist-->\n  <!--</div>-->\n  <div class=\"cassieImg\">\n    <img src=\"assets/img/cassieText.png\">\n  </div>\n  <div class=\"artistText\">\n    Cassie is a renowned, award winning, female artist. She has been tattooing for over 20 years give or take. Her apprenticeship was served under Brian Williams of Skin Deep in Clarksville, TN. She specializes in fine line, portrait, and cover up work. Her other talents, such as painting acrylic, oil, and airbrush, have helped her refine the art she does on a daily basis. Not to mention, she is a fabulous cook and mother. Currently she is involved with animal charities. That’s right folks, she loves dogs as well as cats. She is also working towards her RYT500 in yoga. Oz calls her a yoga champion</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artists/artists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArtistsComponent = (function () {
    function ArtistsComponent() {
    }
    ArtistsComponent.prototype.ngOnInit = function () {
    };
    return ArtistsComponent;
}());
ArtistsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-artists',
        template: __webpack_require__("../../../../../src/app/artists/artists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/artists/artists.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArtistsComponent);

//# sourceMappingURL=artists.component.js.map

/***/ }),

/***/ "../../../../../src/app/briefhistory/briefhistory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/briefhistory/briefhistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: futura; text-align: center; font-size: 15px; border-color: darkred; border-style: solid; border-width: 5px; padding-right: 15px; padding-left: 15px;\">\n  <p>\n    <span style=\"font-size: 25px;\">..A brief history</span>\n    <br>\n    <br>\n    <span style=\"\">\n    Studio 42 was founded in 2001 by Cassie and Glenn Dillinger in North Sewickley, PA. <br>\n    Soon after the inception date, the studio grew out of its diapers and moved straight passed pull-ups to big kid pants.<br>\n    Laying down roots at its current location in Beaver Falls, PA at 1512 7th Ave, <br>\n    just a couple blocks down the street from our old place.<br>\n    It's easy to find, right across the street from Rite Aid, in the middle of town.\n      </span>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/briefhistory/briefhistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BriefhistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BriefhistoryComponent = (function () {
    function BriefhistoryComponent() {
    }
    BriefhistoryComponent.prototype.ngOnInit = function () {
    };
    return BriefhistoryComponent;
}());
BriefhistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-briefhistory',
        template: __webpack_require__("../../../../../src/app/briefhistory/briefhistory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/briefhistory/briefhistory.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BriefhistoryComponent);

//# sourceMappingURL=briefhistory.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq-q/faq-q.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq-q/faq-q.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <div style=\"font-family: futura; text-align: left; font-size: 15px; border-color: darkred; border-style: solid; border-width: 5px; padding-right: 15px; padding-left: 15px;\">\n\n<h3>FAQ</h3>\n<p>The following is a list of questions we are asked on a daily basis, as well as our company policies. We have tried to be thorough,\n  but if you can’t find what you are looking for, please feel free to ﻿contact us to clarify and answer more specific questions.﻿</p>\n\n  <p>We've had many policies over the years and we try to be fair to all parties involved.\n  Unfortunately, sometimes policies are made as a reflection of the times we live in and the things that have happened in the past.\n  Please understand, we want you to have the best experience in an environment that we can be proud of. Policy and pricing may change without notice, in order to ensure our safety as well as yours. ﻿</p>\n\n    <h3>Where are you located?</h3>\n<p>1512 7th Ave\n\nBeaver Falls, PA 15010\n\n  Directly across the street from Rite Aid.</p>\n\n    <h3>What are your hours?</h3>\n<p>Tuesday through Thursday we are open from 1 pm until 9ish\n\nFriday and Saturday we are open from 2 pm until 11ish.\n\nThe “ish” is because we try not to start projects during the last hour of the shop being open. Usually we close the service area, but are available for consultations and sales an hour before closing.\n\n  Sunday and Monday we are closed.</p>\n\n    <h3>How do I take care of my tattoo?</h3>\n<p>Tattoo Aftercare\n\nThese instructions are not medical advice, but based on common sense and practical experience. If you think your tattoo has become infected, consult your physician immediately.<br><br>\n\nThe aftercare of a new tattoo is extremely important! It only takes a few days of good care, and done properly, the tattoo will come out looking great.<br><br>\n\nWait 1 hour after your tattoo is finished to remove the bandage we applied. If it sticks to the tattoo, run clean water over the bandage until it loosens and then carefully remove. There is no need to re-bandage your tattoo.<br><br>\n\nWash your new tattoo with a scent/dye free soap such as Dial. Wash cloths are too harsh and could damage a new tattoo, just use your fingertips. Pat dry with a clean paper towel and apply a thin layer of ointment to cover the tattooed area. A&D, Aquaphor, Tattoo Goo or Bacitracin are recommended ointments. Do not use Neosporin or Vaseline. Continue to wash and apply ointment this way 3-5 times a day for the next 3 days.<br><br>\n\nThen, switch to a scent/dye free moisturizing lotion like Aveeno or Lubriderm, still washing your tattoo throughout the day. Keep using the lotion until the tattoo is fully healed, and the skin texture is back to normal.<br><br>\n\n**Always wash your hands before caring for your tattoo.<br><br>\n\n**Be very careful not to oversaturate your new tattoo with ointment. Like any healing wound, it needs to “breathe”, so only apply just enough to keep it from feeling dry and tight. If your tattoo starts to look pitted, you’re using too much ointment, and if it forms thick scabs, not enough.<br><br>\n\n**The tattoo should heal like a sunburn, with a thin layer of dead skin that flakes off, it should not scab. If scabs do form, they should be left alone to fall off naturally. A bare spot can occur if picked or scratched at. Healing tattoos have a tendency to itch, but a quick slap to the area will bring relief.<br><br>\n\n**A healing tattoo should not be submerged or excessively soaked with water.<br><br>\n\n**Do not expose a healing tattoo to direct sunlight. Apply sunscreen throughout the life of the tattoo to keep it looking good. Exposure to sunlight will degrade a tattoo and cause it to fade.<br><br>\n\n**If you will be exposed to dirt, grease, dust, etc. while your tattoo is healing, protective clothing may need to be worn. Any clothing that touches a new tattoo should be clean, soft and loose.<br><br>\n\n  Your tattoo is your responsibility once you leave Studio 42, and isn’t a work of art worth taking good care of? </p>\n\n    <h3>I was curious if you guys also do custom artwork other than tattooing?</h3>\n<p>We all work in other mediums besides tattooing, and some of us specialize in some mediums more than others, so it depends on what kind of art work you had in mind.\n  Most of the artwork we have hanging in the shop is done by our artists. Stop in and we can discuss your project.</p>\n\n    <h3>How much does a tattoo cost?</h3>\n<p>Pricing is not a standard set amount; there are many factors that go into calculating prices.\n  The final price is set after determining exact size, placement, color and style.\n  These factors will determine the time needed to finish the piece, so cost can only be set after the artist has designed or looked over the artwork.\n  The shop minimum is $60.00, our hourly rate is $100.00. Large, multi session pieces are considered 'half day' (roughly 3 hours) or 'full day' (roughly 6 hours) appointments.</p>\n\n    <h3>What is a Session?</h3>\n<p>Every tattoo service is defined in sessions, from the moment you begin your paperwork until you leave the studio.\n  A small tattoo that takes a half an hour is considered a ½ hour session. These smaller single session tattoos are subject to a by-the-piece pricing.\n\nTattoos that exceed the single session timeframe, fall into a category of multi-session work. Half day sessions are typically 3 hours and whole day sessions are 6 hours.\n\n  Extra time is scheduled for all sessions to leave room for paperwork, breaks, and the unexpected.﻿</p>\n\n    <h3>I was wondering, if I have a design in mind, could you guys work with that or not?</h3>\n<p>We can do just about anything within reason. It’s best to bring your design in, or any other reference or inspiration,\n  so we can get an idea of what you’re thinking.  You might even find more ideas from the designs we have at the shop. If needed,\n  we will set up a design request so the artist of your choice has all of your information and ideas to realize the design for you.</p>\n\n    <h3>What is a Design Request?</h3>\n<p>When we are asked to do custom work, we will ask you specific questions to fully understand what it is you want designed.\n  We'll also take tracings and pictures of the area you want tattooed.\n  This is to help the artist of your choice best design your unique idea, drawn specifically to fit you.\n  There is a nonrefundable deposit for each drawing, which goes towards the final cost of your tattoo.\n  Usually we can have the drawing done in a couple weeks.</p>\n\n    <h3>What is your policy on touchups for your work? I heard that touchups are free.</h3>\n<p>Depending on the reason for the touchup, there may be a fee. If the tattoo was damaged due to negligence during the healing process, there will be a fee.\n  If it has a minor blemish that can wait until you get your next tattoo, it would be best to wait until then.\n  Some tattooing will involve a follow-up session to tighten things that may have not settled well during the healing process.\n  Usually your artist will let you know before you leave if they feel that you may need a follow up.\n  If the tattoo is poorly done or not well executed and looks bad,\n  then you did not get it from us and we will be happy to fix it at our regular shop pricing.</p>\n\n    <h3>What is your appointment policy?</h3>\n    <p>We require state or federal photo ID for all clients in-order to perform any services.<br><br>\n\nAll appointments are set in person with a non-refundable deposit.<br><br>\n\nIf you are more than 15 minutes late, you will be required to set a new appointment and you forfeit your entire deposit.<br><br>\n\nIf you no call no show you will be required to pay in full to set a new appointment.<br><br>\n\nIf you are unprepared for your appointment, ie. you arrive without proper ID on the day of your appointment, you will have to set a new appointment with a new deposit.<br><br>\n\nIf you know you will be late or need to reschedule, please notify us within 24 hours of your appointment time to avoid penalties. This also applies to making changes to your tattoo design.<br><br>\n\nYou must speak to one of our staff directly by phone or in person during our regular business hours.<br><br>\n\nWe run back-to-back appointments, so any mishaps will upset our entire day.\n      Please be courteous to us and our other clients by being prompt and notifying us of any delay or inability to make your appointment.</p><br><br>\n\n    <h3>Do you tattoo / pierce minors?</h3>\n<p>We cannot work on minors under the age of 16.<br><br>\n\n-All minors must present a state or federal issued photo ID at the time of the service.<br><br>\n\n-Minors must present a birth certificate or valid guardianship papers at the time of the service.<br><br>\n\n-Minors must be accompanied by a legal guardian. The guardian must also present a state or federal issued photo ID and must stay with the minor for the duration of the service (PA House Bill No. 832).<br><br>\n\n  -We must follow these policies every time we work on a minor, regardless if they have had work done here before.</p><br><br>\n\n    <h3>How much do piercings cost?</h3>\n<p>Though we may not offer all variety of piercings this list is incomplete. For a complete list or more specific pricing,\n  call the shop 724-846-5002.\n\n\nPiercings prices are as follows:\n  <br>\n\n\nBelly Button.............$45\n  <br>\n\nLabret / Monroe......$45\n  <br>\n\nEyebrow..................$45\n  <br>\n\nTongue....................$50\n  <br>\n\nNose.......................$50\n  <br>\nTragus....................$55\n  <br>\nMicrodermal............$60\n  <br>\nSeptum...................$65\n  <br>\nIndustrial.................$70\n  <br>\nNipples (pair)..........$70\n  <br>\nGenitals..................$70\n  <br>\n\nMultiple and/or more difficult piercings will vary in price at the piercer's discretion\n  <br>\n    <h3>Do you do microdermals?</h3>\n<p>Yes, call the shop for more details.</p>\n\n    <h3>Do I need to make an appointment for a piercing?</h3>\n<p>If you have an exact date and time in mind, then yes you should.\n\nIf you want to get a walk-in piercing you can always call the shop for availabilitiy.\n\n  Piercing appointments require a $20.00 nonrefundable deposit.</p>\n\n    <h3>How do I take care of my piercing?</h3>\n\n<p>Piercing Aftercare<br>\n\nThese instructions are not medical advice, but based on common sense and practical experience. If you think your piercing has become infected, consult your physician immediately! Personal cleanliness is most important during the healing process. By following these instructions, your piercing should have a suitable environment to heal correctly. The piercer may give you more in-depth instructions for your specific piercing at the time of installation, so listen up!<br><br>\n\nImportant! First, wash your hands, even if you think they’re clean. Cause they’re not.<br><br>\n\nBody Piercings: Twice daily, piercings should be maintained. It is normal for the piercing to get “crusties” at its openings around the jewelry. Gently remove this debris with clean warm water, and then wash the piercing with a mild fragrance free soap. The jewelry can be rotated with soap suds on the area, and rotated again with just clean water to cleanse the piercing inside. Don’t be too aggressive with your cleaning routine, it could damage the new skin growing internally.<br><br>\n\nMicrodermals: Aftercare is mostly the same as a normal body piercing. Exceptions are that for the first few nights you should apply a small bandage over the piercing to keep it seated correctly, and you may want to use a Q-tip to clean as close to the piercing site as possible, below the head of the jewelry if you can. Don’t rotate the implant under the skin!<br><br>\n\nOral Piercings: For any piercing that is in or around the mouth, (tongue, lips, etc.) rinse twice a day with full strength Listerine. Throughout the day, if you have anything other than water, including smoking, it is necessary to rinse with a 50/50 solution of water and Listerine. We recommend using a bottle of your favorite drinking water, half full with equal amounts of Listerine and water to carry with you daily. Don’t forget your normal oral hygiene. For piercings that are both in and outside of the mouth, follow the body piercing instructions for the areas outside of the mouth.<br><br>\n\nCleaning is the only time you should be touching an unhealed piercing!!<br><br>\n\n-Ointments are not recommended to heal a piercing. If it seems like your piercing is producing more discharge than normal, sterile saline can be used between cleanings.<br><br>\n\n-4 weeks is the average wait time for a fresh piercing, before changing the jewelry to something more stylish.  Remember, there is new, very delicate skin still forming on the inside of a healing piercing, so it’s not recommended to change the jewelry very often for a few more months.<br><br>\n\n-It is normal for any piercing to take up to a year to be fully healed.<br><br>\n\n  Your piercing is your responsibility once you leave Studio 42, and worth taking good care of.</p>\n\n    <h3>Do you have gift cards?</h3>\n    <p>Yes. We have gift cards.</p>\n\n    <h3>Can I set up my appointment via the internet?﻿</h3>\n\n    <p>The short answer is “kind of”.﻿<br><br>\n\n\nNot everything can be done via e-mail and facebook. Payment information among other things really require a phone call or two. The following paragraphs will explain a little more and help us inform you as to the average process.  We know everyone is an individual with individual needs and we will do our best to accommodate. Thank you for understanding.﻿<br><br>\n\n\nIt is best to stop into the shop in person with any reference you may have to set up an appointment. Someone at the front desk will help you with the process. If you have a ready-made design or pick one that we already have, we will be able to set up your appointment on your first visit. If you want to have a custom made design tailored to you personally, you will have to fill out a \"design request\", a short questionnaire will help us get to know a little about what it is that you want. We will then collect a deposit, don't worry it goes towards the tattoo cost in the end. We will give you a date when the design will be finished, so you can stop back to approve the design and set up your appointment. We will have a price for you at that time. Our shop minimum is $60 and we charge $100 an hour. If you are getting a large, multi-session piece, we charge by the session. Half day and full day sessions are avaliable.<br><br>\n\nSo a couple of short visits and you will have a tattoo appointment.<br><br>\n\n\nIf you want to set up an appointment via e-mail there are a few more steps in the process and cover-ups via e-mail are a few more steps on top of all that.\n      Here is how the whole process goes via e-mail﻿.</p>\n\n\n\n<h3>Custom designs</h3>\n\n<p>You will need to send us your:\n<br>\n. Contact information (name, email, phone we can reach you at)\n  <br>\n. Description of what you want﻿﻿\n  <br>\n. References you may have﻿﻿\n  <br>\n. Good pictures of the whole body part you want it on\n  <br>\n. A tracing of the body part with measurements. Use tracing paper or press and seal, lay it on the body part and with a black or blue marker trace the parameter and any creases like elbows or knees. if you choose to use press and seal lay a few pieces of paper on the back of it afterward.﻿\n  <br>\nMost of the list can be transmitted via e-mail; it is best to postal mail the tracing.\n  If you want to e-mail the tracing you can take a picture or scan of the tracing, but we will need a scale so we can print it out,\n  so include a ruler or measuring stick in the picture or scan.﻿</p>\n\n\n<h3>Cover-up designs﻿</h3>\n\n<p>We would have to see the old tattoo to determine if we can cover it with what you want. You will need to send us your:\n<br>\n. Contact information (name, email, phone we can reach you at)﻿﻿\n  <br>\n. Description of what you want﻿\n  <br>\n. References you may have﻿\n  <br>\n. Three or four good pictures of the old tattoo﻿\n  <br>\n. ﻿Good pictures of the whole body part you want it on﻿\n  <br>\n. A tracing of the old tattoo﻿\n  <br>\n. A tracing of the body part with measurements. Use tracing paper or press and seal, lay it on the body part and with a black or blue marker trace the parameter and any creases like elbows or knees. if you choose to use press and seal lay a few pieces of paper on the back of it afterward.﻿\n  <br>\nMost of the list can be transmitted via e-mail; it is best to postal mail the tracing.\n  If you want to e-mail the tracing you can take a picture or scan of the tracing, but we will need a scale so we can print it out,\n  so include a ruler or measuring stick in the picture or scan.﻿</p>\n\n    <h3>Other requirements﻿</h3>\n\n<p>For us to draw up a design we will need a $100.00 deposit. We accept PayPal, credit card by phone (there is a $5 fee), or money orders (by certified mail) only NO personal checks. You can get our address from the website or you can call the shop at 724-846-5002. Once we have your payment and paperwork together, someone will call you with the date we will have your design ready. When the design is ready we will send you a copy to review with a final price. After you approve the design you can set your appointment. We will need a list of preferred days you are available, or we can pick a day and time that your preferred artists is available. Our shop minimum is $60 and we charge $100 an hour. For tattoos that require long sessions we give you the options of half day or full day appointments.\nThe process for long distance correspondence can be a lengthy one, so please be patient. There will be countless emails and phone calls back and forth until we can determine the best design suited for you.﻿\n<br>\nAll deposits and payments are NON REFUNDABLE﻿\n  <br>\n  This form is a work in progress and is subject to change without notice. Prices and individual experiences may vary.</p>\n    <br>\n\n    <h3>We hope to hear from you soon.﻿</h3>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/faq-q/faq-q.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqQComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqQComponent = (function () {
    function FaqQComponent() {
    }
    FaqQComponent.prototype.ngOnInit = function () {
    };
    return FaqQComponent;
}());
FaqQComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq-q',
        template: __webpack_require__("../../../../../src/app/faq-q/faq-q.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faq-q/faq-q.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FaqQComponent);

//# sourceMappingURL=faq-q.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".faqBack {\r\n  height: 400px;\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullGn.png\");\r\n  /*margin-top: 500px;*/\r\n}\r\n\r\n.faqImg {\r\npadding-left: 100px;\r\n  text-align: center;\r\n  margin-right: 105px;\r\n  cursor: pointer;\r\n}\r\n\r\n.faqText {\r\n  font-family: futura;\r\n  font-size: 25px;\r\n  padding-top: 15px;\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .faqText {\r\n    margin-top: 475px;\r\n  }\r\n\r\n  img {\r\n    height: 75%;\r\n    width: 75%;\r\n  }\r\n\r\n  .faqBack {\r\n    height: 300px;\r\n    padding-top: 55px;\r\n    /*margin-top: 500px;*/\r\n  }\r\n}\r\n@media only screen and (max-width: 414px) {\r\n  .faqText {\r\n    margin-top: 350px;\r\n  }\r\n\r\n  .faqBack {\r\n    height: 700px;\r\n    padding-top: 75px;\r\n    /*margin-top: 500px;*/\r\n  }\r\n  img {\r\n    height: 50%;\r\n    width: 50%;\r\n  }\r\n  .faqImg{\r\n    padding-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .faqText {\r\n    margin-top: 350px;\r\n  }\r\n\r\n  .faqBack {\r\n    height: 600px;\r\n    padding-top: 30px;\r\n    /*margin-top: 500px;*/\r\n  }\r\n  img {\r\n    height: 50%;\r\n    width: 50%;\r\n  }\r\n  .faqImg{\r\n    padding-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"faq\" class=\"faqBack\">\n<div class=\"faqImg\">\n  <div class=\"faqText\">\n    Got Questions?\n  </div>\n<img src=\"assets/img/faqIcon2.png\" (click)=\"openDialog1()\">\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_q_faq_q_component__ = __webpack_require__("../../../../../src/app/faq-q/faq-q.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqComponent = (function () {
    function FaqComponent(dialog) {
        this.dialog = dialog;
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent.prototype.openDialog1 = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__faq_q_faq_q_component__["a" /* FaqQComponent */]);
    };
    FaqComponent.prototype.onClick = function () {
        this.animationClicked = true;
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]) === "function" && _a || Object])
], FaqComponent);

var _a;
//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footerNav {\r\n  height: 200px;\r\n  background-color: black;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.footerText {\r\n  position: absolute;\r\n  font-family: futura;\r\n  color: white;\r\n  margin-top: 50px;\r\n  font-size: 13px;\r\n}\r\n\r\n.footerText2 {\r\n  /*position: absolute;*/\r\n  font-family: futura;\r\n  color: white;\r\n  text-align: right;\r\n  margin-top: 0px;\r\n  font-size: 13px;\r\n  padding-top: 80px;\r\n  padding-right: 10px;\r\n}\r\n.footerImg\r\n{\r\n  margin-top: -50px;\r\n  /*margin-right: 50px;*/\r\n  text-align: center;\r\n\r\n}\r\n@media only screen and (max-width: 1526px) {\r\n  .footerText {\r\n    position: absolute;\r\n    font-family: futura;\r\n    color: white;\r\n    margin-top: 50px;\r\n    font-size: 11px;\r\n    text-align: center;\r\n  }\r\n\r\n  .footerText2 {\r\n    /*position: absolute;*/\r\n    font-family: futura;\r\n    color: white;\r\n    text-align: right;\r\n    margin-top: 0px;\r\n    font-size: 11px;\r\n    padding-top: 80px;\r\n    padding-right: 10px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .footerNav {\r\n    height: 180px;\r\n    background-color: black;\r\n    margin-top: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n\r\n  .footerImg\r\n  {\r\n    padding-top: 75px;\r\n    margin-right: 0px;\r\n    text-align: center;\r\n\r\n  }\r\n\r\n  .footerNav {\r\n    height: 300px;\r\n    background-color: black;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .footerText[_ngcontent-c12] {\r\n    position: absolute;\r\n    font-family: futura;\r\n    color: white;\r\n    margin-top: 10px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n  .footerText2 {\r\n    /*position: absolute;*/\r\n    font-family: futura;\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 0px;\r\n    font-size: 13px;\r\n    padding-top: 150px;\r\n    padding-right: 0px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footerNav\">\n  <div class=\"footerText\">\n    <ul style=\"list-style-type: none; padding-left: 15px; padding-right: 15px;\">\n      <li>Phone Number: 724.846.5002 </li>\n      <li>Fax Number: 724.581.4046 </li>\n      <li>Address: 1512 7th Ave, Beaver Falls, PA 15010 United States</li>\n      <li>Email: info@42tattoos.com</li>\n      <li>Hours: Tuesday-Thursday 1pm to 9ish\n                  and Friday-Saturday 2pm to 11ish </li>\n    </ul>\n  </div>\n  <div class=\"footerText2\">\n    Copyright 2017 Studio 42. All rights reserved.\n  </div>\n  <div class=\"footerImg\">\n    <!--<img src=\"assets/img/studioLogoSm.png\">-->\n    <div style=\"font-family: futura; color: white; padding-bottom: 10px;\">\n      Check us out on social media.\n    </div>\n    <a href=\"https://www.facebook.com/studio42tattoos/\">\n    <img src=\"assets/img/facebookIcon.png\" style=\"padding-right: 10px\">\n    </a>\n    <a href=\"https://twitter.com/42tattoos\">\n    <img src=\"assets/img/twitterIcon.png\" style=\"padding-right: 10px\">\n    </a>\n    <a href=\"https://www.instagram.com/casdillinger/\">\n    <img src=\"assets/img/instagramIcon.png\" style=\"padding-right: 10px\">\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-nav/main-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainnav {\r\n  height: 500px;\r\n  background-color: #792727 ;\r\n  /*padding-top: 100px;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-nav/main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/main-nav/main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavComponent = (function () {
    function MainNavComponent() {
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    return MainNavComponent;
}());
MainNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-nav',
        template: __webpack_require__("../../../../../src/app/main-nav/main-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-nav/main-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainNavComponent);

//# sourceMappingURL=main-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav3/nav3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*#container{*/\r\n  /*width:100%;*/\r\n  /*margin: 5em auto;*/\r\n  /*padding: 0;*/\r\n  /*background: #fff;*/\r\n/*}*/\r\n\r\n/*.items {*/\r\n/*}*/\r\n\r\n/*#left, #right {*/\r\n  /*margin: 30px;*/\r\n\r\n/*}*/\r\n\r\n.thirdnav {\r\n  height: 500px;\r\n  /*background-color: darkred  ;*/\r\n  /*padding-top: 100px;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-full2.png\")\r\n}\r\n\r\n.mainWelcome {\r\n    /*width: 50%;*/\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    font-size: 3em;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n.studio42Image\r\n{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 50px;\r\n  max-width: 100%;\r\n  /*margin-top: -165px;*/\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .mainWelcome {\r\n\r\n    margin: 0 auto;\r\n    margin-top: 0px;\r\n    font-size: 2em;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n  .thirdnav {\r\n    height: 380px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav3/nav3.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"container\">-->\n  <!--<div ng2-carouselamos class=\"slides-wrapper\"-->\n       <!--[items]=\"items\"-->\n       <!--[width]=\"5000\"-->\n       <!--[$prev]=\"prev\"-->\n       <!--[$next]=\"next\"-->\n       <!--[$item]=\"item\">-->\n  <!--</div>-->\n\n  <!--<ng-template #prev>-->\n    <!--<img src='assets/img/leftArrow.png' id=\"left\">-->\n  <!--</ng-template>-->\n\n  <!--<ng-template #next>-->\n    <!--<img src='assets/img/rightArrow.png' id=\"right\">-->\n  <!--</ng-template>-->\n\n  <!--<ng-template #item let-item let-i=\"index\">-->\n\n    <!--<div class=\"items\" style=\"text-align: center\">-->\n      <!--<h2>This is my {{ item.name }} slide</h2>-->\n    <!--</div>-->\n\n  <!--</ng-template>-->\n<!--</div>-->\n\n\n<div class=\"container-fluid\" style=\"padding:0px\">\n  <div class=\"thirdnav col-lg-12\">\n    <div>\n      <div class=\"studio42Image\"><img class=\"animated bounce\" src=\"assets/img/shopname4.png\"  style=\"max-width: 100%\"></div>\n    </div>\n    <div class=\"mainWelcome\" style=\"font-family: futura\">\n      welcome to studio 42\n      <br>\n      please enjoy the site    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav3/nav3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Nav3Component = (function () {
    function Nav3Component() {
        this.items = [];
        this.items = [
            { name: 'first' },
            { name: 'second' },
            { name: 'third' },
            { name: 'fourth' },
            { name: 'fifth' },
            { name: 'sixth' },
        ];
    }
    return Nav3Component;
}());
Nav3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav3',
        template: __webpack_require__("../../../../../src/app/nav3/nav3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav3/nav3.component.css")],
    }),
    __metadata("design:paramtypes", [])
], Nav3Component);

//# sourceMappingURL=nav3.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav4/nav4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fournav {\r\n  height: 500px;\r\n  /*background-color: gainsboro  ;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullGn.png\");\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.portImg {\r\n\r\n}\r\n\r\n.mainWelcomePort {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  font-size: 2em;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.subnavPort {\r\n  /*height: 200px;*/\r\n  margin-top: 0px;\r\n  position: relative;\r\n  /*top: 35px;*/\r\n}\r\n\r\n.navIcon1\r\n {\r\n   display: inline-block;\r\n   margin-bottom: 0px;\r\n   margin-top: 0px;\r\n   padding-right: 0px;\r\n   cursor: pointer;\r\n }\r\n.navIcon2\r\n{\r\n  display: inline-block;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  padding-left: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.iconsNav {\r\n  text-align: center;\r\n\r\n}\r\n\r\n.portInfo\r\n{\r\n  text-align: center;\r\n  font-family: Mathilde;\r\n  font-size: 5em;\r\n  font-weight: 300;\r\n}\r\n\r\n.portData {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-family: futura;\r\n}\r\n@media only screen and (max-width: 736px)\r\n{\r\n  .fournav {\r\n    height: 860px;\r\n  }\r\n\r\n  .mainWelcomePort {\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n    font-size: 20px;\r\n    color: black;\r\n    text-align: center;\r\n  }\r\n\r\n  .iconsNav {\r\n    text-align: center;\r\n    margin-right: 100px;\r\n    margin-top: -20px;\r\n  }\r\n\r\n  .navIcon1 {\r\n    padding-right: 0px;\r\n\r\n  }\r\n\r\n  .navIcon2{\r\n    padding-left: 0px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .portImg {\r\n    height: 65%;\r\n    width: 65%;\r\n  }\r\n}\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .fournav {\r\n    height: 1000px;\r\n  }\r\n\r\n  .mainWelcomePort {\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n    font-size: 20px;\r\n    color: black;\r\n    text-align: center;\r\n  }\r\n\r\n  .iconsNav {\r\n    text-align: center;\r\n    margin-right: 100px;\r\n    margin-top: -20px;\r\n  }\r\n\r\n  .navIcon1 {\r\n    padding-right: 0px;\r\n\r\n  }\r\n\r\n  .navIcon2{\r\n    padding-left: 0px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .portImg {\r\n    height: 75% !important;\r\n    width: 75% !important;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav4/nav4.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolios\" class=\"container-fluid fournav\" style=\"padding:0px\">\n  <div class=\"col-lg-12\">\n<div class=\"mainWelcomePort\" style=\"font-family: 'futura'\">\n  PORTFOLIOS\n</div>\n    <br>\n    <br>\n    <!--<div class=\"artistsNav\">-->\n      <!--<div class=\"iconsNav\"><img src=\"assets/img/cassiePortfolio.png\">-->\n        <!--<div>-->\n          <!--<span style=\"font-family: 'Abril Fatface'; font-size: 30px\">Cassie</span>-->\n          <!--<br>-->\n          <!--<span style=\"font-family: 'futura'; font-size: 20px;\">check out some of Cassie's work. </span>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"artistsNav\">-->\n     <!--<div class=\"iconsNav\"><img src=\"assets/img/ozPortfolio.png\"></div>-->\n      <!--<div>-->\n        <!--<span style=\"font-family: 'Abril Fatface'; font-size: 30px\">Oz</span>-->\n        <!--<br>-->\n        <!--<span style=\"font-family: 'futura'; font-size: 20px;\">check out some of Oz's work. </span>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n    <div class=\"subnavPort\">\n      <div class=\"iconsNav\">\n        <!--<span style=\"font-family: james; font-size: 100px; position: relative; left: 235px; bottom: 60px;\">Cassie</span>-->\n       <div class=\"navIcon1\"> <img (click)=\"openDialog()\" class=\"portImg\" src=\"assets/img/cassiePortfolio3.png\"></div>\n        <!--<div style=\"font-family: james; font-size: 100px; position: relative; left: 0px; top: 0px;\">Oz-->\n          <!---->\n        <!--</div>-->\n        <!--<span style=\"font-family: james; font-size: 100px; position: relative; left: 205px; bottom: 60px;\">Oz</span>-->\n        <div class=\"navIcon2\">\n          <a> <img class=\"portImg\" src=\"assets/img/ozPortfolio2.png\"></a>\n        </div>\n        <div class=\"navIcon2\">\n          <a> <img class=\"portImg\" src=\"assets/img/jenPortfolio.png\"></a>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/nav4/nav4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port1images_port1images_component__ = __webpack_require__("../../../../../src/app/port1images/port1images.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Nav4Component = (function () {
    function Nav4Component(dialog) {
        this.dialog = dialog;
    }
    Nav4Component.prototype.ngOnInit = function () {
        // this.images = [];
        // this.images.push({source:'assets/img/tattoos/1.jpg', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/img/tattoos/2.jpg', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/img/tattoos/3.jpg', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/img/tattoos/4.jpg', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/img/tattoos/5.jpg', alt:'Description for Image 1', title:'Title 1'});
    };
    Nav4Component.prototype.openDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__port1images_port1images_component__["a" /* Port1imagesComponent */]);
    };
    Nav4Component.prototype.onClick = function () {
        this.animationClicked = true;
    };
    return Nav4Component;
}());
Nav4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav4',
        template: __webpack_require__("../../../../../src/app/nav4/nav4.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav4/nav4.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]) === "function" && _a || Object])
], Nav4Component);

var _a;
//# sourceMappingURL=nav4.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n  color: white;\r\n}\r\n\r\n.floating {\r\n  float: right;\r\n}\r\n@media only screen and (max-width: 575px) {\r\n  img {\r\n    width: 60%;\r\n\r\n  }\r\n  .floating{\r\n    float: left;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/studioLogoSm.png\" style=\"position: absolute; top: 10px\"></a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav floating\">\n        <li><a href=\"#\" style=\"color:white\"><span style=\"font-family: futura\">Contact Us</span></a></li>\n        <li><a href=\"#\" style=\"color:white\"><span style=\"font-family: futura\">Directions</span></a></li>\n        <li><a href=\"#\" style=\"color:white\"><span style=\"font-family: futura\">Our Loves</span></a></li>\n        <li><a href=\"#\" style=\"color:white\"><span style=\"font-family: futura\">Whatev's</span></a></li>\n      </ul>\n    </div><!--nav-collapse -->\n  </div>\n</nav>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/port1images/port1images.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port1images/port1images.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container\">-->\n  <!--<p-lightbox [images]=\"images\" easing=\"ease-in\" effectDuration=\"500ms\"></p-lightbox>-->\n<!--</div>-->\n\n<!--<a href=\"assets/img/tattoos/1.jpg\" class=\"swipebox\" title=\"My Caption\">-->\n  <!--<img src=\"assets/img/tattoos/1Thumb.jpg\" alt=\"image\">-->\n<!--</a>-->\n<!--<script type=\"text/javascript\">-->\n  <!--;( function( $ ) {-->\n\n    <!--$( '.swipebox' ).swipebox();-->\n\n  <!--} )( jQuery );-->\n<!--</script>-->\n<!--<a href=\"assets/img/tattoos/2.jpg\" class=\"swipebox\" title=\"My Caption\">-->\n  <!--<img src=\"assets/img/tattoos/2Thumb.jpg\" alt=\"image\">-->\n<!--</a>-->\n<!--<script type=\"text/javascript\">-->\n  <!--;( function( $ ) {-->\n\n    <!--$( '.swipebox' ).swipebox();-->\n\n  <!--} )( jQuery );-->\n<!--</script>-->\n<!--<a href=\"assets/img/tattoos/3.jpg\" class=\"swipebox\" title=\"My Caption\">-->\n  <!--<img src=\"assets/img/tattoos/3Thumb.jpg\" alt=\"image\">-->\n<!--</a>-->\n<!--<script type=\"text/javascript\">-->\n  <!--;( function( $ ) {-->\n\n    <!--$( '.swipebox' ).swipebox();-->\n\n  <!--} )( jQuery );-->\n<!--</script>-->\n<!--<a href=\"assets/img/tattoos/4.jpg\" class=\"swipebox\" title=\"My Caption\">-->\n  <!--<img src=\"assets/img/tattoos/4Thumb.jpg\" alt=\"image\">-->\n<!--</a>-->\n<!--<script type=\"text/javascript\">-->\n  <!--;( function( $ ) {-->\n\n    <!--$( '.swipebox' ).swipebox();-->\n\n  <!--} )( jQuery );-->\n<!--</script>-->\n<!--<a href=\"assets/img/tattoos/5.jpg\" class=\"swipebox\" title=\"My Caption\">-->\n  <!--<img src=\"assets/img/tattoos/5Thumb.jpg\" alt=\"image\">-->\n<!--</a>-->\n<!--<script type=\"text/javascript\">-->\n  <!--;( function( $ ) {-->\n\n    <!--$( '.swipebox' ).swipebox();-->\n\n  <!--} )( jQuery );-->\n<!--</script>-->\n\n<!--<gallery></gallery>-->\n\n<ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n\n<!--<ngx-gallery class=\"hidden-lg hidden-md\" [options]=\"galleryOptionsSm\" [images]=\"galleryImages\"></ngx-gallery>-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/port1images/port1images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Port1imagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Port1imagesComponent = (function () {
    function Port1imagesComponent() {
    }
    Port1imagesComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [
            // {
            //   width: '600px',
            //   height: '400px',
            //   thumbnailsColumns: 4,
            //   imageAnimation: NgxGalleryAnimation.Slide
            // },
            // // max-width 800
            // {
            //   breakpoint: 800,
            //   width: '100%',
            //   height: '600px',
            //   imagePercent: 80,
            //   thumbnailsPercent: 20,
            //   thumbnailsMargin: 20,
            //   thumbnailMargin: 20
            // },
            // // max-width 400
            // {
            //   breakpoint: 400,
            //   preview: false
            // }
            { "thumbnailsColumns": 3, "thumbnailsRows": 2, "thumbnailsPercent": 40, "imagePercent": 60, "thumbnailMargin": 2, "thumbnailsMargin": 2 },
            { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
            { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
        ];
        this.galleryOptionsSm = [
            // {
            //   width: '600px',
            //   height: '400px',
            //   thumbnailsColumns: 4,
            //   imageAnimation: NgxGalleryAnimation.Slide
            // },
            // // max-width 800
            // {
            //   breakpoint: 800,
            //   width: '100%',
            //   height: '600px',
            //   imagePercent: 80,
            //   thumbnailsPercent: 20,
            //   thumbnailsMargin: 20,
            //   thumbnailMargin: 20
            // },
            // // max-width 400
            // {
            //   breakpoint: 400,
            //   preview: false
            // }
            { "thumbnails": false },
            { "breakpoint": 500, "width": "100%", "height": "200px" }
        ];
        this.galleryImages = [
            {
                small: 'assets/img/tattoos/1.jpg',
                medium: 'assets/img/tattoos/1.jpg',
            },
            {
                small: 'assets/img/tattoos/2.jpg',
                medium: 'assets/img/tattoos/2.jpg',
            },
            {
                small: 'assets/img/tattoos/3.jpg',
                medium: 'assets/img/tattoos/3.jpg',
            },
            {
                small: 'assets/img/tattoos/4.jpg',
                medium: 'assets/img/tattoos/4.jpg',
            },
            {
                small: 'assets/img/tattoos/5.jpg',
                medium: 'assets/img/tattoos/5.jpg',
            },
        ];
    };
    return Port1imagesComponent;
}());
Port1imagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-port1images',
        template: __webpack_require__("../../../../../src/app/port1images/port1images.component.html"),
        styles: [__webpack_require__("../../../../../src/app/port1images/port1images.component.css")]
    })
], Port1imagesComponent);

//# sourceMappingURL=port1images.component.js.map

/***/ }),

/***/ "../../../../../src/app/port2images/port2images.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/port2images/port2images.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  port2images works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/port2images/port2images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Port2imagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Port2imagesComponent = (function () {
    function Port2imagesComponent() {
    }
    Port2imagesComponent.prototype.ngOnInit = function () {
    };
    return Port2imagesComponent;
}());
Port2imagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-port2images',
        template: __webpack_require__("../../../../../src/app/port2images/port2images.component.html"),
        styles: [__webpack_require__("../../../../../src/app/port2images/port2images.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Port2imagesComponent);

//# sourceMappingURL=port2images.component.js.map

/***/ }),

/***/ "../../../../../src/app/subnav/subnav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subnav {\r\n  /*height: 200px;*/\r\n  /*background-color: white;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullW.png\");\r\n  /*margin-top: 20px;*/\r\n  position: relative;\r\n  top: 50px;\r\n  padding-bottom: 25px;\r\n\r\n}\r\n\r\n.navIcon\r\n{\r\n  display: inline-block;\r\n  padding-bottom: 30px;\r\n  margin-top: 10px;\r\n  padding-right: 70px;\r\n}\r\n\r\n.iconsNavMain {\r\n  /*width: 50%;*/\r\n  margin: 0 auto;\r\n  text-align: center;\r\n\r\n}\r\n\r\n button:hover {\r\n  background-color: rgba(139, 0, 0, 0.46);\r\n\r\n}\r\n\r\n.iconText {\r\n  padding-top: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1530px) {\r\n\r\n.navIcon {\r\n  padding-right: 30px;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1250px) {\r\n\r\n  .navIcon {\r\n    padding-right: 5px;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    display: inline-block;\r\n    padding-bottom: 0px;\r\n    margin-top: 0px;\r\n    padding-right: 25px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    padding-right: 10px;\r\n    padding-top: 5px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    padding-right: 0px;\r\n    padding-top: 5px;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subnav/subnav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding:0px\">\n<div class=\"subnav col-lg-12\">\n  <div class=\"iconsNavMain\">\n    <div class=\"navIcon animated fadeInLeft\"><a href=\"#cassie\"><!--<button md-fab color=\"primary\"></button>--> <img class=\"imgpic\" src=\"assets/img/cassieIcon.png\"></a>\n    <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\">Cassie</p>\n    </div>\n  <div class=\"navIcon animated fadeInLeft\"><a href=\"#oz\"> <!--<button md-fab color=\"primary\"></button>--> <img class=\"imgpic\" src=\"assets/img/ozIcon.png\"></a>\n    <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\" >Oz</p>\n  </div>\n    <div class=\"navIcon animated fadeInLeft\"><a href=\"#jen\"> <!--<button md-fab color=\"primary\"></button>--> <img class=\"imgpic\" src=\"assets/img/jenIcon.png\"></a>\n      <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\" >Jen</p>\n    </div>\n  <div class=\"navIcon animated fadeInLeft\"><a href=\"#portfolios\"> <!--<button md-fab color=\"primary\"></button>--><img class=\"imgpic\" src=\"assets/img/portfolioIcon2.png\"></a>\n    <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\">Work</p>\n  </div>\n  <div class=\"navIcon animated fadeInLeft\"><a href=\"#theshop\"> <!--<button md-fab color=\"primary\"></button>--> <img class=\"imgpic\" src=\"assets/img/shopNew.png\"></a>\n    <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\">Studio</p>\n  </div>\n    <div class=\"navIcon animated fadeInLeft\"><a href=\"#about\"> <!--<button md-fab color=\"primary\"></button>--> <img class=\"imgpic\" src=\"assets/img/aboutUsNew.png\"></a>\n    <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\">About</p>\n  </div>\n    <div class=\"navIcon animated fadeInLeft\"><a href=\"#faq\"> <!--<button md-fab color=\"primary\"></button>--> <img class=\"imgpic\" src=\"assets/img/bookIcon.png\"></a>\n      <p class=\"iconText\" style=\"font-family: futura; font-size: 18px;\">FAQ</p>\n    </div>\n    <!--<div class=\"iconText \" class=\"navIcon animated fadeInLeft\"><a href=\"#faq\"> <img class=\"imgpic\" src=\"assets/img/Untitled-6.png\"> &lt;!&ndash;<button md-fab color=\"primary\"></button>&ndash;&gt;</a>-->\n      <!--<p style=\"font-family: futura; font-size: 18px;\">FAQ</p>-->\n    <!--</div>-->\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/subnav/subnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubnavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubnavComponent = (function () {
    function SubnavComponent() {
    }
    SubnavComponent.prototype.ngOnInit = function () {
    };
    return SubnavComponent;
}());
SubnavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subnav',
        template: __webpack_require__("../../../../../src/app/subnav/subnav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subnav/subnav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubnavComponent);

//# sourceMappingURL=subnav.component.js.map

/***/ }),

/***/ "../../../../../src/app/theshop/theshop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theShopNav {\r\n  height: 700px;\r\n  /*background-color: gainsboro;*/\r\n  background-image: url(\"https://dubdub37.github.io/Studio42/assets/img/final-fullGn.png\");\r\n  margin-top: 0px;\r\n}\r\n\r\n.mainWelcomePort {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  font-size: 2em;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.artistText {\r\n  padding: 25px;\r\n  font-family: futura;\r\n  font-size: 16px;\r\n  margin-top: 100px;\r\n}\r\n\r\n.shopImg {\r\n  display: block;\r\n  margin: 0px auto;\r\n  margin-top: 80px;\r\n  padding-left: 30px;\r\n  float: right;\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .theShopNav {\r\n    height: 800px;\r\n    background-color: gainsboro  ;\r\n    margin-top: 400px;\r\n  }\r\n.shopImg{\r\n  margin-top: 15px;\r\n}\r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 20px;\r\n    font-family: futura;\r\n    font-size: 14px;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n  .theShopNav {\r\n    height: 550px;\r\n    margin-top: 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  .theShopNav {\r\n    height: 600px;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .shopImg{\r\n    margin-top: 15px;\r\n  }\r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 20px;\r\n    font-family: futura;\r\n    font-size: 14px;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theshop/theshop.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"theshop\" class=\"container-fluid theShopNav\" style=\"padding:0px\">\n  <div class=\"col-lg-12\">\n    <div class=\"mainWelcomePort\" style=\"font-family: 'futura'\">\n      The Studio\n    </div>\n    <!--<div>-->\n      <!--<img style=\"display: block; margin: 0 auto;\" src=\"assets/img/storeIconLg.png\">-->\n    <!--</div>-->\n\n\n\n    <div class=\"shopImg\">\n      <img src=\"assets/img/shop.png\">\n    </div>\n    <div class=\"artistText\">\n      Currently located at\n      1512 7th Ave\n      Beaver Falls, PA 15010\n      Directly across the street from Rite Aid.\n      What are your hours?\n      Tuesday through Thursday we are open from 1 pm until 9ish\n      Friday and Saturday we are open from 2 pm until 11ish.\n      The “ish” is because we try not to start projects during the last hour of the shop being open. Usually we close the service area, but are available for consultations and sales an hour before closing.\n      Sunday and Monday we are closed.\n    </div>\n  </div>\n</div>\n<!--<p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>-->\n"

/***/ }),

/***/ "../../../../../src/app/theshop/theshop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheshopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheshopComponent = (function () {
    function TheshopComponent() {
    }
    TheshopComponent.prototype.ngOnInit = function () {
        // this.images = [];
        // this.images.push({source:'assets/img/aboutUsIcon.png', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/img/ArtistsIcon.png', alt:'Description for Image 2', title:'Title 2'});
        // this.images.push({source:'assets/img/portfolioIconBookSm.png', alt:'Description for Image 3', title:'Title 3'});
    };
    return TheshopComponent;
}());
TheshopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-theshop',
        template: __webpack_require__("../../../../../src/app/theshop/theshop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/theshop/theshop.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TheshopComponent);

//# sourceMappingURL=theshop.component.js.map

/***/ }),

/***/ "../../../../../src/app/thestudioinfo/thestudioinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thestudioinfo/thestudioinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: futura; text-align: center; font-size: 15px; border-color: darkred; border-style: solid; border-width: 5px; padding-right: 15px; padding-left: 15px;\">\n\n<p>\n  <span style=\"font-size: 25px;\">Studio 42</span>\n  <br>\n  <br>\n  We are a custom street shop tattoo boutique located in Beaver Falls, PA.\n  <br>\n  We are home to two full time tattoo artists, Cassie and Oz, and Oz is also a master piercer.\n  <br>\n\n  Appointments are preferred, but walk-ins are welcomed. Call the shop for availability.\n  <br>\n\n  Click the Artist Gallery link to the left to browse our portfolios.\n  <br>\n\n  Feel free to stop in to have one of our talented artists draw something just for you,\n  <br>\n  or have a look around to see if one of our existing designs is what you’re looking for.\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/thestudioinfo/thestudioinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThestudioinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThestudioinfoComponent = (function () {
    function ThestudioinfoComponent() {
    }
    ThestudioinfoComponent.prototype.ngOnInit = function () {
    };
    return ThestudioinfoComponent;
}());
ThestudioinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thestudioinfo',
        template: __webpack_require__("../../../../../src/app/thestudioinfo/thestudioinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/thestudioinfo/thestudioinfo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThestudioinfoComponent);

//# sourceMappingURL=thestudioinfo.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map