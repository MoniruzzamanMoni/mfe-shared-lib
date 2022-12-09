import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
MyLibService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

class MyLibComponent {
}
MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
MyLibComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " my-lib works! ");
            i0.ɵɵelementEnd();
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibComponent, [{
            type: Component,
            args: [{ selector: 'lib-my-lib', template: `
    <p>
      my-lib works!
    </p>
  ` }]
        }], null, null);
})();

class MyLibModule {
}
MyLibModule.ɵfac = function MyLibModule_Factory(t) { return new (t || MyLibModule)(); };
MyLibModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MyLibModule });
MyLibModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyLibModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibComponent
                    ],
                    imports: [],
                    exports: [
                        MyLibComponent
                    ]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.mjs.map
