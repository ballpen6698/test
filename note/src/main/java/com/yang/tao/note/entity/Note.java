package com.yang.tao.note.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "NOTE")
@NamedQueries({ @NamedQuery(name = "Note.FIND_ALL", query = "select n from Note n") })
public class Note implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "ID")
	private int id;

	@Column(name = "TITLE", length = 255)
	private String title;

	@Column(name = "CONTENT", length = 1024)
	private String content;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public String toString(){
		StringBuilder info = new StringBuilder();
		info.append("id:").append(this.getId()).append(" title:")
		.append(this.getTitle()).append(" content").append(this.getContent());
		return info.toString();
	}

}
