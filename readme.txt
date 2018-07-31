Backend server Tomcat 7 : here is link to get server https://tomcat.apache.org/download-70.cgi

how to build and run backend
 1. clean the project, and do maven clean install to get all required lib
 2. configure project -> deployment assembly -> add java build entries -> add maven lib to project
 3. make sure use tomcat 7 and add filter to tomcat web.xml
 4. deploy to tomcat 7 server

 Or
 used the note.war that I have complied and deployed to tomcat 7 and also please add following filter to tomcat web.xml 


How to run front end
 1. start angular 2 front end : start commmand line and go to nontefront fold -> type in npm install and get all required lib -> npm start to start server
 2. go to http://localhost:3000/ 
 3. once add new note, new notes will be shown on the same page
 
 
Add following to apache web.xml to allow Access-Control-Allow-Origin
 
<filter>
   <filter-name>CorsFilter</filter-name>
   <filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
</filter>
<filter-mapping>
   <filter-name>CorsFilter</filter-name>
   <url-pattern>/*</url-pattern>
</filter-mapping>
 