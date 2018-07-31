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
var core_1 = require("@angular/core");
var note_service_1 = require("./note.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(_note) {
        this._note = _note;
        this.title = "";
        this.content = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._note.getNotes()
            .subscribe(function (notes) { return _this.notes = notes; });
    };
    AppComponent.prototype.postNote = function (title, content) {
        var newnote = "?title=" + title + "&content=" + content;
        this._note.postNote(newnote);
        window.location.reload();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        providers: [note_service_1.NoteService]
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map