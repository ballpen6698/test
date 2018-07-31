package com.yang.tao.note.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.yang.tao.note.ejb.ManagedNoteBean;
import com.yang.tao.note.entity.Note;
import javax.json.*;
import javax.validation.Valid;


@Path("/notes")
public class NoteRestfulAPI{

	private ManagedNoteBean noteBean = ManagedNoteBean.getInstance();

	@GET
	@Path("/all")
	@Produces("application/json")
	public List<Note> allNotes() {
		List<Note> all = this.noteBean.findAllNotes();
		return all;
		
	}

	@POST
	@Path("/post")
	@Consumes("application/json")
	@Produces("application/json")
    public Response postNote(@QueryParam("title")String title, @QueryParam("content")String content) {
		Note note =  new Note();
		note.setTitle(title);
		note.setContent(content);
 		this.noteBean.addNote(note);
		String result = "Note saved : " + note.getTitle();
		return  Response.status(201).entity(result).build();
	}

}
