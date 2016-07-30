"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageSize = 10; // 每页默认10条
        this.pageIndex = 1; // 首页
        this.totalSize = 0; // 总页码
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        // 每页默认10条
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageIndex", void 0);
    __decorate([
        // 首页
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "totalSize", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'ng2-pagination',
            templateUrl: 'ng2-pagination.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=ng2-pagination.component.js.map