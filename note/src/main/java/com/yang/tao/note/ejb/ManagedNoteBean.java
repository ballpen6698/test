package com.yang.tao.note.ejb;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import com.yang.tao.note.entity.Note;

public class ManagedNoteBean {


	public static final EntityManager em ;
	
    private static ManagedNoteBean single_noteBean = null;

 
    private ManagedNoteBean()
    {
    }
 
    public static ManagedNoteBean getInstance()
    {
        if (single_noteBean == null){
        	single_noteBean = new ManagedNoteBean();
        }
        return single_noteBean;
    }	
	
	

	static {
		   em = Persistence.createEntityManagerFactory("notejpa").createEntityManager();
	}
	

	public List<Note> findAllNotes() {
		return em.createNamedQuery("Note.FIND_ALL", Note.class).getResultList();
	}

	public void addNote(Note note) {
		em.getTransaction().begin();
		em.persist(note);
		em.getTransaction().commit();
	}

}
