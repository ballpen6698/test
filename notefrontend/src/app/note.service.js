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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var NoteService = (function () {
    function NoteService(_http) {
        this._http = _http;
        this._getnoteurl = 'http://localhost:8080/note/rest/notes/all';
        this._postnoteurl = 'http://localhost:8080/note/rest/notes/post';
    }
    NoteService.prototype.getNotes = function () {
        return this._http.get(this._getnoteurl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    NoteService.prototype.postNote = function (newnote) {
        this._postnoteurl += newnote;
        this._http.post(this._postnoteurl, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true'
        }).
            subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map