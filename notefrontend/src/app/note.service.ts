import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Note } from './note';
import { UrlResolver } from '../../node_modules/@angular/compiler';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class NoteService {
    private _getnoteurl = 'http://localhost:8080/note/rest/notes/all';
    private _postnoteurl = 'http://localhost:8080/note/rest/notes/post';
    constructor(private _http: Http) { }

    getNotes(): Observable<Note[]> {
        return this._http.get(this._getnoteurl)
            .map((response: Response) => <Note[]>response.json())
            .do(data => console.log(JSON.stringify(data)));
    }

    postNote(newnote: String): void {
        this._postnoteurl += newnote;
        this._http.post(this._postnoteurl,
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            }
        ).
            subscribe(
                (val) => {
                    console.log("POST call successful value returned in body",
                        val);
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
    }


}