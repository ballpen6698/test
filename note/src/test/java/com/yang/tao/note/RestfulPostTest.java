package com.yang.tao.note;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import java.util.List;

import javax.inject.Inject;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.yang.tao.note.ejb.ManagedNoteBean;
import com.yang.tao.note.entity.Note;

/**
 * Unit test for simple App.
 */
public class RestfulPostTest  {

	private static ManagedNoteBean noteBean = ManagedNoteBean.getInstance();

	public static void main(String[] args) {

		try {

			Client client = Client.create();

			String input = "?title=1111&content=contet11111";
			WebResource webResource = client.resource("http://localhost:8080/note/rest/notes/post" + input);

			
			ClientResponse response = webResource.type("application/json").post(ClientResponse.class, "");

			if (response.getStatus() != 201) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			System.out.println("Output from Server .... \n");
			String output = response.getEntity(String.class);
			System.out.println(output);
			
			
			
			

			input = "?title=2222&content=contet222222";
			webResource = client.resource("http://localhost:8080/note/rest/notes/post" + input);
			response = webResource.type("application/json").post(ClientResponse.class, input);

			if (response.getStatus() != 201) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);
			System.out.println(output);
			
			
			

			input = "?title=33333&content=conte544444";
			webResource = client.resource("http://localhost:8080/note/rest/notes/post" + input);

			response = webResource.type("application/json").post(ClientResponse.class, input);

			if (response.getStatus() != 201) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);
			System.out.println(output);

		} catch (Exception e) {

			e.printStackTrace();

		}

	}
}
