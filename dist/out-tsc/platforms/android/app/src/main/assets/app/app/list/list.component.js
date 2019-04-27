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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.Teams = ["Rubal", "Sue", "Saksham", "Vikas", "Omkar", "Ashish", "Tushar", "Upasana", "CSM"];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vYXNzZXRzL2FwcC9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQU9sRDtJQUlFO1FBRk8sVUFBSyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUcxRixDQUFDO0lBRUYsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFSVSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O09BQ1csYUFBYSxDQVV6QjtJQUFELG9CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIFRlYW1zID0gW1wiUnViYWxcIixcIlN1ZVwiLFwiU2Frc2hhbVwiLFwiVmlrYXNcIixcIk9ta2FyXCIsXCJBc2hpc2hcIixcIlR1c2hhclwiLFwiVXBhc2FuYVwiLFwiQ1NNXCJdO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19