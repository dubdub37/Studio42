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
exports.push([module.i, ".aboutNav {\r\n  height: 500px;\r\n  background-color: #ececec;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.mainWelcomePort {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  font-size: 2em;\r\n  color: black;\r\n  text-align: center;\r\n  font-family: futura;\r\n}\r\n\r\n.example-card {\r\n  width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('http://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.example-button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n.historyDiv {\r\n  padding-left: 500px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.historyDiv2 {\r\n  padding-left: 100px;\r\n}\r\n\r\n/*.hisDivs {*/\r\n  /*position: absolute;*/\r\n  /*left: 50%;*/\r\n  /*transform: translate(-50%, -50%);*/\r\n/*}*/\r\n@media only screen and (max-width: 1910px){\r\n  .historyDiv {\r\n    padding-left: 500px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1869px){\r\n  .historyDiv {\r\n    padding-left: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1819px){\r\n  .historyDiv {\r\n    padding-left: 450px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1700px){\r\n  .historyDiv {\r\n    padding-left: 425px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1665px){\r\n  .historyDiv {\r\n    padding-left: 400px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1600px){\r\n  .historyDiv {\r\n    padding-left: 375px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1560px){\r\n  .historyDiv {\r\n    padding-left: 350px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1540px){\r\n  .historyDiv {\r\n    padding-left: 320px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1493px){\r\n  .historyDiv {\r\n    padding-left: 300px;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1320px){\r\n\r\n  .historyDiv {\r\n    padding-left: 200px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1120px){\r\n\r\n  .historyDiv {\r\n    padding-left: 100px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .historyDiv {\r\n    padding-left: 0px;\r\n  }\r\n\r\n  .example-card {\r\n    width: auto;\r\n  }\r\n\r\n  .historyDiv2 {\r\n    padding-left: 0px;\r\n    padding-top: 20px;\r\n  }\r\n\r\n\r\n\r\n}\r\n", ""]);

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
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__port1images_port1images_component__["a" /* Port1imagesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__port2images_port2images_component__["a" /* Port2imagesComponent */],
            __WEBPACK_IMPORTED_MODULE_27__thestudioinfo_thestudioinfo_component__["a" /* ThestudioinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__briefhistory_briefhistory_component__["a" /* BriefhistoryComponent */],
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
exports.push([module.i, ".artistNav {\r\n  height: 500px;\r\n  background-color: white  ;\r\n  padding-top: 100px;\r\n;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.headshot {\r\n  float: left;\r\n  padding-top: 15px;\r\n  padding-right: 120px;\r\n}\r\n\r\n.artisthead {\r\n  padding-left: 500px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 800px;\r\n  margin-top: -650px;\r\n  float: left;\r\n  font-size: 150px;\r\n}\r\n\r\n.artistText {\r\n  padding-left: 600px;\r\n  font-size: 16px;\r\n  margin-top: -500px;\r\n  padding-right: 25px;\r\n  font-family: futura;\r\n  padding-top: 30px;\r\n  /*font-weight: bold;*/\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  img {\r\n    height: 80%;\r\n    width: 95%;\r\n  }\r\n\r\n  .artistNav {\r\n    padding-top: 200px;\r\n\r\n  }\r\n\r\n  element.style {\r\n    font-family: james;\r\n    font-size: 65px !important;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 280px;\r\n    margin-top: -400px;\r\n    /* float: left; */\r\n    font-size: 75px;\r\n  }\r\n\r\n  .artistText {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n    margin-top: -15px;\r\n    padding-right: 25px;\r\n    font-family: futura;\r\n    /*padding-top: 50px;*/\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .artisthead2 {\r\n    padding-left: 250px;\r\n    margin-top: -350px;\r\n    /* float: left; */\r\n    font-size: 75px;\r\n  }\r\n\r\n  img {\r\n    height: 80%;\r\n    width: 95%;\r\n  }\r\n\r\n  .artistNav {\r\n    padding-top: 165px;\r\n\r\n  }\r\n\r\n  element.style {\r\n    font-family: james;\r\n    font-size: 65px !important;\r\n  }\r\n\r\n  .artistText {\r\n    padding-left: 25px;\r\n    font-size: 12px;\r\n    margin-top: -15px;\r\n    padding-right: 25px;\r\n    font-family: futura;\r\n    text-align: center;\r\n    /*padding-top: 50px;*/\r\n  }\r\n}\r\n\r\n", ""]);

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
exports.push([module.i, ".artistNav {\r\n  height: 475px;\r\n  background-color: white;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.headshot1{\r\n  float: right;\r\n  padding-top: 75px;\r\n  padding-right: 120px;\r\n}\r\n\r\n.artisthead {\r\n  padding-left: 500px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 800px;\r\n  padding-top: 370px;\r\n}\r\n\r\n.artistText {\r\n  padding: 10px 50px 50px 50px;\r\n  font-family: futura;\r\n  font-size: 16px;\r\n  /*font-weight: bold;*/\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 475px;\r\n    padding-right: 25px;\r\n    height: 50%;\r\n    width: 85%;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n    font-size: 60px;\r\n    /*padding-left: 50px;*/\r\n    /*padding-top: 450px;*/\r\n    margin-top: 540px;\r\n    padding-top: 0px;\r\n    position: absolute;\r\n    /*margin-left: 15px;*/\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: -20px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1540px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 215px;\r\n    padding-right: 120px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1526px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 215px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 700px;\r\n    padding-top: 370px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1426px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 215px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 500px;\r\n    padding-top: 370px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1226px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 215px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 300px;\r\n    padding-top: 370px;\r\n  }\r\n  .artistNav {\r\n    height: 525px;\r\n    background-color: white;\r\n    /*padding-top: 100px;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1196px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 20px;\r\n    padding-right: 120px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 300px;\r\n    padding-top: 530px;\r\n  }\r\n\r\n  .artistNav {\r\n    height: 830px;\r\n    background-color: white;\r\n    /*padding-top: 100px;*/\r\n  }\r\n}\r\n@media only screen and (max-width: 414px) {\r\n  .artisthead2 {\r\n    padding-left: 15px;\r\n    padding-top: 75px;\r\n  }\r\n\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 500px;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: -20px;\r\n    padding: 5px 5px 5px 50px;\r\n  }\r\n\r\n  .artistNav {\r\n    height: 470px;\r\n    background-color: white;\r\n    /*padding-top: 100px;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: -20px;\r\n    padding: 5px 5px 5px 40px;\r\n    /*font-weight: bold;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 415px;\r\n    padding-right: 25px;\r\n    height: 50%;\r\n    width: 85%;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  img {\r\n    width: 70%;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n    font-size: 60px;\r\n    /*padding-left: 50px;*/\r\n    /*padding-top: 450px;*/\r\n    margin-top: 475px;\r\n    padding-top: 0px;\r\n    position: absolute;\r\n    /*margin-left: 15px;*/\r\n  }\r\n\r\n  .artistText {\r\n    /*padding-left: 15px;*/\r\n    /*padding-right: 15px;*/\r\n    font-family: futura;\r\n    font-size: 12px;\r\n    margin-top: -20px;\r\n    padding: 10px 25px 5px 25px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n", ""]);

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
exports.push([module.i, ".artistNav {\r\n  height: 500px;\r\n  background-color: white;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.headshot1{\r\n  float: right;\r\n  padding-top: 15px;\r\n  padding-right: 120px;\r\n}\r\n\r\n.artisthead {\r\n  padding-left: 500px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.cassieImg{\r\n  margin-top: 200px;\r\n  position: absolute;\r\n  left: 700px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 465px;\r\n  padding-top: 0px;\r\n}\r\n\r\n.artistText {\r\n  padding: 25px;\r\n  font-family: futura;\r\n  font-size: 16px;\r\n  position: absolute;\r\n  margin-top: 300px;\r\n  padding-right: 500px;\r\n  padding-left: 75px\r\n  /*font-weight: bold;*/\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n.headshot1 {\r\n  float: right;\r\n  padding-top: 15px;\r\n  padding-right: 10px;\r\n  height: 50%;\r\n  width: 65%;\r\n  margin-right: 20px;\r\n}\r\n\r\n.artisthead2 {\r\n  padding-left: 0px;\r\n  position: relative;\r\n}\r\n\r\n  .cassieImg{\r\n    margin-top: 180px;\r\n    position: absolute;\r\n    left: 8px;\r\n  }\r\nimg {\r\n  width: 75%;\r\n}\r\n\r\n  .artistText {\r\n    padding: 25px;\r\n    font-family: futura;\r\n    font-size: 13px;\r\n    margin-top: 450px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1400px) {\r\n  .cassieImg {\r\n    margin-top: 200px;\r\n    position: absolute;\r\n    left: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .artisthead2 {\r\n    padding-left: 20px;\r\n  }\r\n.artistText {\r\n  padding: 12px;\r\n}\r\n  .cassieImg{\r\n    margin-top: 180px;\r\n    position: absolute;\r\n    left: 0px;\r\n  }\r\n\r\n  img {\r\n    width: 70%;\r\n  }\r\n}\r\n@media only screen and (max-width: 414px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 15px;\r\n    padding-right: 10px;\r\n    height: 50%;\r\n    width: 65%;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 0px;\r\n    position: relative;\r\n  }\r\n\r\n  .cassieImg{\r\n    margin-top: 160px;\r\n    position: absolute;\r\n    left: 8px;\r\n  }\r\n  img {\r\n    width: 70%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 25px;\r\n    font-family: futura;\r\n    font-size: 12px;\r\n    margin-top: 450px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  .headshot1 {\r\n    float: right;\r\n    padding-top: 15px;\r\n    padding-right: 10px;\r\n    height: 50%;\r\n    width: 65%;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .artisthead2 {\r\n    padding-left: 0px;\r\n    position: relative;\r\n  }\r\n\r\n  .cassieImg{\r\n    margin-top: 160px;\r\n    position: absolute;\r\n    left: 8px;\r\n  }\r\n  img {\r\n    width: 60%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 25px;\r\n    font-family: futura;\r\n    font-size: 12px;\r\n    margin-top: 360px;\r\n    /*font-weight: bold;*/\r\n  }\r\n\r\n}\r\n", ""]);

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

module.exports = "<div style=\"font-family: futura; text-align: center; font-size: 15px; border-color: darkred; border-style: solid; border-width: 10px; padding-right: 15px; padding-left: 15px;\">\n  <p>\n    <span style=\"font-size: 25px;\">..A brief history</span>\n    <br>\n    <br>\n    <span style=\"\">\n    Studio 42 was founded in 2001 by Cassie and Glenn Dillinger in North Sewickley, PA. <br>\n    Soon after the inception date, the studio grew out of its diapers and moved straight passed pull-ups to big kid pants.<br>\n    Laying down roots at its current location in Beaver Falls, PA at 1512 7th Ave, <br>\n    just a couple blocks down the street from our old place.<br>\n    It's easy to find, right across the street from Rite Aid, in the middle of town.\n      </span>\n  </p>\n</div>\n"

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

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".faqBack {\r\n  height: 400px;\r\n  background-color: white;\r\n  /*margin-top: 500px;*/\r\n}\r\n\r\n.faqImg {\r\npadding-left: 100px;\r\n  text-align: center;\r\n  margin-right: 105px;\r\n  cursor: pointer;\r\n}\r\n\r\n.faqText {\r\n  font-family: futura;\r\n  font-size: 25px;\r\n  margin-top: 125px;\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .faqText {\r\n    margin-top: 475px;\r\n  }\r\n\r\n  img {\r\n    height: 75%;\r\n    width: 75%;\r\n  }\r\n\r\n  .faqBack {\r\n    height: 300px;\r\n    padding-top: 55px;\r\n    /*margin-top: 500px;*/\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n  .faqText {\r\n    margin-top: 350px;\r\n  }\r\n\r\n  .faqBack {\r\n    height: 150px;\r\n    padding-top: 55px;\r\n    /*margin-top: 500px;*/\r\n  }\r\n  img {\r\n    height: 50%;\r\n    width: 50%;\r\n  }\r\n  .faqImg{\r\n    padding-left: 0px;\r\n    margin-right: 0px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"faq\" class=\"faqBack\">\n<div class=\"faqImg\">\n  <div class=\"faqText\">\n    Got Questions?\n  </div>\n<img src=\"assets/img/faqIcon2.png\">\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FaqComponent);

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footerNav {\r\n  height: 200px;\r\n  background-color: black;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.footerImg\r\n{\r\n  padding-top: 50px;\r\n  /*margin-right: 50px;*/\r\n  text-align: center;\r\n\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .footerNav {\r\n    height: 180px;\r\n    background-color: black;\r\n    margin-top: 500px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n\r\n  .footerImg\r\n  {\r\n    padding-top: 50px;\r\n    margin-right: 0px;\r\n    text-align: center;\r\n\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footerNav\">\n  <div class=\"footerImg\">\n    <!--<img src=\"assets/img/studioLogoSm.png\">-->\n    <div style=\"font-family: futura; color: white; padding-bottom: 10px;\">\n      Check us out on social media.\n    </div>\n    <a href=\"https://www.facebook.com/studio42tattoos/\">\n    <img src=\"assets/img/facebookIcon.png\" style=\"padding-right: 10px\">\n    </a>\n    <a href=\"https://twitter.com/42tattoos\">\n    <img src=\"assets/img/twitterIcon.png\" style=\"padding-right: 10px\">\n    </a>\n    <a href=\"https://www.instagram.com/casdillinger/\">\n    <img src=\"assets/img/instagramIcon.png\" style=\"padding-right: 10px\">\n    </a>\n  </div>\n</div>\n"

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
exports.push([module.i, "/*#container{*/\r\n  /*width:100%;*/\r\n  /*margin: 5em auto;*/\r\n  /*padding: 0;*/\r\n  /*background: #fff;*/\r\n/*}*/\r\n\r\n/*.items {*/\r\n/*}*/\r\n\r\n/*#left, #right {*/\r\n  /*margin: 30px;*/\r\n\r\n/*}*/\r\n\r\n.thirdnav {\r\n  height: 500px;\r\n  background-color: darkred  ;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.mainWelcome {\r\n    /*width: 50%;*/\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    font-size: 3em;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n.studio42Image\r\n{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 50px;\r\n  max-width: 100%;\r\n  /*margin-top: -165px;*/\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .mainWelcome {\r\n\r\n    margin: 0 auto;\r\n    margin-top: 0px;\r\n    font-size: 2em;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n  .thirdnav {\r\n    height: 380px;\r\n  }\r\n}\r\n", ""]);

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
exports.push([module.i, ".fournav {\r\n  height: 500px;\r\n  background-color: gainsboro  ;\r\n  /*padding-top: 100px;*/\r\n}\r\n\r\n.portImg {\r\n\r\n}\r\n\r\n.mainWelcomePort {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  font-size: 2em;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.subnavPort {\r\n  /*height: 200px;*/\r\n  margin-top: 0px;\r\n  position: relative;\r\n  /*top: 35px;*/\r\n}\r\n\r\n.navIcon1\r\n {\r\n   display: inline-block;\r\n   margin-bottom: 0px;\r\n   margin-top: 0px;\r\n   padding-right: 0px;\r\n   cursor: pointer;\r\n }\r\n.navIcon2\r\n{\r\n  display: inline-block;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  padding-left: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.iconsNav {\r\n  text-align: center;\r\n\r\n}\r\n\r\n.portInfo\r\n{\r\n  text-align: center;\r\n  font-family: Mathilde;\r\n  font-size: 5em;\r\n  font-weight: 300;\r\n}\r\n\r\n.portData {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-family: futura;\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .fournav {\r\n    height: 860px;\r\n  }\r\n\r\n  .mainWelcomePort {\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n    font-size: 20px;\r\n    color: black;\r\n    text-align: center;\r\n  }\r\n\r\n  .iconsNav {\r\n    text-align: center;\r\n    margin-right: 100px;\r\n    margin-top: -20px;\r\n  }\r\n\r\n  .navIcon1 {\r\n    padding-right: 0px;\r\n\r\n  }\r\n\r\n  .navIcon2{\r\n    padding-left: 0px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .portImg {\r\n    height: 75% !important;\r\n    width: 75% !important;\r\n  }\r\n}\r\n", ""]);

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
exports.push([module.i, ".subnav {\r\n  /*height: 200px;*/\r\n  background-color: white;\r\n  /*margin-top: 20px;*/\r\n  position: relative;\r\n  top: 50px;\r\n  padding-bottom: 25px;\r\n\r\n}\r\n\r\n.navIcon\r\n{\r\n  display: inline-block;\r\n  padding-bottom: 30px;\r\n  margin-top: 10px;\r\n  padding-right: 70px;\r\n}\r\n\r\n.iconsNavMain {\r\n  /*width: 50%;*/\r\n  margin: 0 auto;\r\n  text-align: center;\r\n\r\n}\r\n\r\n button:hover {\r\n  background-color: rgba(139, 0, 0, 0.46);\r\n\r\n}\r\n\r\n.iconText {\r\n  padding-top: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1530px) {\r\n\r\n.navIcon {\r\n  padding-right: 30px;\r\n}\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1250px) {\r\n\r\n  .navIcon {\r\n    padding-right: 5px;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media only screen and (max-width: 575px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    display: inline-block;\r\n    padding-bottom: 0px;\r\n    margin-top: 0px;\r\n    padding-right: 25px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    padding-right: 10px;\r\n    margin-left: 0px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    padding-right: 10px;\r\n    padding-top: 5px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n\r\n  .subnav{\r\n    padding-bottom: 50px;\r\n  }\r\n  .navIcon\r\n  {\r\n    padding-right: 0px;\r\n    padding-top: 5px;\r\n  }\r\n}\r\n\r\n", ""]);

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
exports.push([module.i, ".theShopNav {\r\n  height: 700px;\r\n  background-color: gainsboro;\r\n  margin-top: 400px;\r\n}\r\n\r\n.mainWelcomePort {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  padding-top: 20px;\r\n  font-size: 2em;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n.artistText {\r\n  padding: 25px;\r\n  font-family: futura;\r\n  font-size: 16px;\r\n  margin-top: 100px;\r\n}\r\n\r\n.shopImg {\r\n  display: block;\r\n  margin: 0px auto;\r\n  margin-top: 80px;\r\n  padding-left: 30px;\r\n  float: right;\r\n}\r\n\r\n@media only screen and (max-width: 575px) {\r\n  .theShopNav {\r\n    height: 800px;\r\n    background-color: gainsboro  ;\r\n    margin-top: 400px;\r\n  }\r\n.shopImg{\r\n  margin-top: 15px;\r\n}\r\n  img {\r\n    width: 100%;\r\n  }\r\n\r\n  .artistText {\r\n    padding: 20px;\r\n    font-family: futura;\r\n    font-size: 14px;\r\n    margin-top: 100px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n  .theShopNav {\r\n    height: 550px;\r\n    margin-top: 750px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  .theShopNav {\r\n    height: 600px;\r\n    margin-top: 600px;\r\n  }\r\n}\r\n", ""]);

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

module.exports = "<div style=\"font-family: futura; text-align: center; font-size: 15px; border-color: darkred; border-style: solid; border-width: 10px; padding-right: 15px; padding-left: 15px;\">\n\n<p>\n  <span style=\"font-size: 25px;\">Studio 42</span>\n  <br>\n  <br>\n  We are a custom street shop tattoo boutique located in Beaver Falls, PA.\n  <br>\n  We are home to two full time tattoo artists, Cassie and Oz, and Oz is also a master piercer.\n  <br>\n\n  Appointments are preferred, but walk-ins are welcomed. Call the shop for availability.\n  <br>\n\n  Click the Artist Gallery link to the left to browse our portfolios.\n  <br>\n\n  Feel free to stop in to have one of our talented artists draw something just for you,\n  <br>\n  or have a look around to see if one of our existing designs is what you’re looking for.\n</p>\n</div>\n"

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