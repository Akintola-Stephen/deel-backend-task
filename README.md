# bank-operation

A simple banking operation

```
BANKING OPERATION - is a simple app that allows user creates an account based on some given account types (Savings, Current,..), retrieve information on his account based on a generated account number and also view olist of all created account
```

## Code structure explanation

This project work contains the follwing folders.

- config: A folder that contains a db file that contains functions used to establish connection to our mongoDB database

- config: Config file for sqlite database
- dal: A data access layer for project
- middleware: auth getProfile middleware and and error handler middleware
- model: db models for project
- routes: api endpoints for project
- service: A service layer that serves their respective controller



#### Postman Docs ⚡

| Routes               | HTTP Methods | Description                    |
| :------------------- | :----------- | :----------------------------- |
| https://www.postman.com/sakintola351/workspace/flutterwave/documentation/16998467-528b10c4-1608-4701-a3b0-9d7bea00e95a | POST, GET | POSTMAN 



#### Routes ⚡

| Routes               | HTTP Methods | Description                    |
| :------------------- | :----------- | :----------------------------- |
| https://fbo-v7fg.onrender.com/api/user/register   | POST         | User registration route        |
| https://fbo-v7fg.onrender.com/api/userbankdetails | GET          | Extract a user account details |
| https://fbo-v7fg.onrender.com/api/bankdetails/    | GET          | Get all user account details   |



```
Project is created with:
```

<p>
<img src="https://img.shields.io/badge/-MongoDB%20-1AA121?style=for-the-badge&logo=mongodb&logoColor=green">
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express"> 
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
</p>


- Node
- Express
- Mongoose
- MongoDB Atlas

### Setup

To run this project locally, clone repo and add an `.env` file in the root:

```
MONGODB_URI='mongodb+srv://username:password@cluster0.eetsx.mongodb.net/database_name'
```

Then execute in command prompt:

```
$ cd "deel-backend-task""
$ npm install
$ npm run seed
$ npm run
```
