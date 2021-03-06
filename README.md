# Hermes (Document Management System)

[![Build Status](https://travis-ci.org/Andela-JUdensi/DMS.svg?branch=develop)](https://travis-ci.org/Andela-JUdensi/DMS)
[![Coverage Status](https://coveralls.io/repos/github/Andela-JUdensi/DMS/badge.svg?branch=develop)](https://coveralls.io/github/Andela-JUdensi/DMS?branch=develop)
[![Build Status](https://semaphoreci.com/api/v1/ajudensi/dms/branches/develop/badge.svg)](https://semaphoreci.com/ajudensi/dms)
[![Code Climate](https://codeclimate.com/github/Andela-JUdensi/DMS/badges/gpa.svg)](https://codeclimate.com/github/Andela-JUdensi/DMS)
[![Issue Count](https://codeclimate.com/github/Andela-JUdensi/DMS/badges/issue_count.svg)](https://codeclimate.com/github/Andela-JUdensi/DMS)
[![codebeat badge](https://codebeat.co/badges/79d73144-0e57-47fe-87d7-940b0d11285e)](https://codebeat.co/projects/github-com-andela-judensi-dms-develop)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](hermes-dms-develop.herokuapp.com)



#### About Hermes
A document management system (DMS) is a system (based on computer programs in the case of the management of digital documents) used to track, manage and store documents and reduce paper work.

### Features
##### Offline support

##### Privileges
- Superadmin
  Supercedes all other users. Manages all data and account. A super admin have the privilege to update a user information. This is important in case of a forgotten password and to increase/decrease privilege of a user.
- Admin
  An admin facilitates the work of a superadmin, by checkmating documents by other uses tht it conforms to application policy and guidlines. An admin can delete a public/role document by another admin and regular users.
- Regular
  These are registered users with read write access. A regular user has a profile page, and a dashboard to manage their documents.
  These documents can be edited and deleted by the regular user.
- Guests
  As a guest, you only have access to the 8 most recent public documents on the application home screen. This is important to help unregistered users get a feel of the application

### Technologies
- Nodejs: [an open source server framework that allows you to run JavaScript on the server.](https://www.nodejs.org)
- Postgresql: [open source object-relational database system](https://www.postgresql.org/about/)
- Reactjs: developed by facebook, it's an open source declarative, efficient, and flexible JavaScript library for building user interfaces.
- Redux: is a predictable state container for JavaScript apps.
- Material-ui: Google's material design UI components built with React.
- Sequelize: Sequelize is a promise-based ORM for Node.js


### Installation

### Testing
###### Server
  - Integration:
    ```
     npm run test:integration
    ```
##### Client
  - End to end test:
    ```
      npm run nightwatch
    ```
  - Component and Redux:
  ```
    npm run jest
  ```
##### Full test
  ```
     npm run test
  ```
### API
  [View and test the complete API here](https://hermes-dms-develop.herokuapp.com/documentation/)


### Limitations:
The limitations to the Document Management System API are as follows:

* Users can only create textual documents and retrieve same when needed.
* Users cannot share documents with people, but can make document `public` to make it available to other users.
* Spreadsheet is not supported

### _**Contributing**_
Contributors are welcome to further enhance the features of this API by contributing to its development.

### Licence
MIT

# IMAGES
### Your profile
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.36.54.png?raw=true)
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.37.13.png?raw=true)



### Update your profile
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.37.26.png?raw=true)


### Paginated list of users
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.37.50.png?raw=true)


### Document dashbord
##### All documents
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.38.04.png?raw=true)
##### Your documents
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.38.11.png?raw=true)
##### Document belonging to folks with the same role as you
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.38.20.png?raw=true)
##### All public documents
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.38.28.png?raw=true)


### Home page
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.38.44.png?raw=true)


### Add a new document
##### Document editor
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.38.56.png?raw=true)
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.44.33.png?raw=true)
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.44.42.png?raw=true)
##### Preview before submission
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.41.59.png?raw=true)
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.44.22.png?raw=true)


### View added documents
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.45.23.png?raw=true)
##### Toggle Zen (Read focus) mode. Focuses only on what you read
![](https://github.com/jyehoshua/DMS/blob/develop/readme-images/Screen%20Shot%202018-04-03%20at%2006.45.30.png?raw=true)





