---
title: 'Bookmark it!'
date: '2022-07-06'
image: Nestjs-Angular.png
excerpt: This project has been developed with Nestjs backend and Angular frontend. A breif summary of the project with required links are available below. For complete documentation of this project Click here. 
isFeatured: true
frontendTitle: The frontend of this project has been developed with Angular and deployed on Firebase. The code can be viewd on github and the website can be visited with the following links 
GithubTitle: Github
Website: Website
frontendGithubLink: https://github.com/masih-mehrabi/Bookmark-it-FrontEnd/tree/master
frontendWebsiteLink: https://bookmark-it-298fb.web.app
BackendGithublink: https://github.com/masih-mehrabi/bookmark-it-backend
BackendTitle: The Backend of this project has been developed with Nestjs framework of nodejs. It handles the authentication and responds to CRUD requests. It is hosted on heroku, the code has been uploaded to github and can be viewed with the link below 
BackendLink: Github
---

# Home Page:

Openning The proejct you the home page contains the following information about the project:

Backed-End:

Nestjs: 

The back-end of this project is developed with Nestjs framework of node-js.

Prisma:

Prisma orm has been used to map data between the system and the postgres database of this project.

Docker: 

When developing modern back-ends it is hard to exclude docker. docker is used to compose and host the database image of this project beside other magic like functionalities that it brings to the table in Development enviroment.


Front-End:

Angular: 

While this web app is small with limited functionalities, it is developed to show-case the skills of the developer working with angular.

Angular Material: 

Angular brings it's own (UI) components everything that is needed to develop front-end user interfaces. Angular material has been used in combination with html and css to compose the user interface of this project.

Others: 

HttpClient, Interceptors, Guards... . Has been used to stablish communication with nestjs backend of this project. Other functionalities of Angular framework has been used which we do not have enough space fot it to be mentioned. You can see the code for more information or read the ReadMe file.

Functionalities:

Authorization: Starting out, you register provising your inoformaiton, Email and passord. Angular will send request to backend if the inoformaiton is correct (e.g:email is not taken and password is not provided). The back-end will issue you a JWT token which will be valid for 15 minutes. After 15 minutes the system will kick you out automatically. Ofcourse you can sign in anytime using your given email and password and use the system. Your Bookmarks are stored safely in the back-end.

Bookmarking: You can perform all the CRUD operations in bookmark section.
Edit your Info: You can change your information anytime you want with (Edit Infomation secction). If you change a loging credential you can login with your new credential.

Deployment:

Back-End: 

The Nestjs backend of this project has been deployed and hosted on (heroku). The following github link is the repository for the backend of this project, you can view the code here .

Front-End: 

The front-end of this application is developed with angular and deployed to firebase. The project code has been uploaded to github and can be viewed with the following link.

![The project is developed with Nestjs backend and Angular frontend](home-page.png)

# Login Dialog:

Login Dialog will open when the Login button is clicked. Email and Password is required to login. Once the correct email and password is provided, you will be redirected to Bookmark page.

![The project is developed with Nestjs backend and Angular frontend](login.png)

# Register Dialog:

Register Dialog will open when the Register button is clicked. Email and Password is required to Register. Once email and password is provided, you will be redirected to Bookmark page. You can provide First Name and Last Name but they are not required.

![The project is developed with Nestjs backend and Angular frontend](Register.png)

# Notifier:

The Notifier will give essential information to the user. It will also convey the errors given by the server. The states of success, loading and error are implemented with notifier.

![The project is developed with Nestjs backend and Angular frontend](Notifier.png)

# Bookmark Table:

The Bookmark Table displays the bookmarks from database. It also hold two buttons, one for editting and another for deleting the said bookmark.

![The project is developed with Nestjs backend and Angular frontend](bookmark-table.png)

# Add Bookmark:

Once the Add Bookmark button is pressed, a dialog will open to add bookmark. Once the information of the bookmark is provided, the button click will save the bookmark to database.

![The project is developed with Nestjs backend and Angular frontend](Add-Bookmark.png)

# Update Bookmark:

The right green button with edit icon will open the bookmark with it's contents to be editable. The dialog will save the edited bookmark to the database.

![The project is developed with Nestjs backend and Angular frontend](update-bookmark.png)

# Delete Bookmark:

The right red button with delete icon will delete the bookmark. 

![The project is developed with Nestjs backend and Angular frontend](delete-bookmark.png)

# Edit User Information:

The Edit-User-Information button will lead the user to the page where the user can edit it's information. Once the information is provided and the updated button is pressed, the new information is saved to database.
 
![The project is developed with Nestjs backend and Angular frontend](edit-user-information.png)
