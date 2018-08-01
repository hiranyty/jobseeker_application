# jobseeker_application
Jobseeker Management Application

This project use zuul gateway sever, oauth2 authorization  server, jobseeker ui in reactjs and Jobseeker application as a resource server.


##Zuul Gateway server :

All the routes from UI navigate through zuul gateway server or edge service

http ://localhost:8765/api/v1/jobseekers/load

http ://localhost:8765/uaa/oauth/token


AuthServer :

Auth server is configured using Oauth2 configuration. Authentication is implemented using in memory authentication using user credentials. You can change this implementation for database authentication or identity provider such as okta.   

Tokenstore is implemented using symmetric key (123). You can change this implementation for JWT. Create a jwt tokenstore  using keytools and public.cert


http ://localhost:8804


Resource Server (Jobseeker application) :

Jobseeker application is implemented as a resource server which is managed jobseeker information.

Jobseeker load endpoint - /api/v1/jobseekers/load

http ://localhost:8805

Jobseeker UI- 

This application is developed using ReactJS. Application consists 2 pages. 
1) Login Page
2) Jobseeker Page - (Jobseeker load Link)

http ://localhost:3000








