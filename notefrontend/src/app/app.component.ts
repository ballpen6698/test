import { Component } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html',
   providers: [NoteService]
})

export   class   AppComponent  {

   title:String = "";
   content:String = "";
   notes: Note[];
   constructor(private _note: NoteService) {
   }
   
   ngOnInit() : void {
      this._note.getNotes()
      .subscribe(notes => this.notes = notes);
   }

   postNote(title:String,content:String):void{
     let newnote = "?title=" +title + "&content=" + content;
     this._note.postNote(newnote);
     window.location.reload();

   }
}