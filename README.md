# DEEL-OPERATION


```
DEEL OPERATION
```

## Code structure explanation

This project work contains the following folders.

- config: A folder that contains a db file that contains functions used to establish connection to our mongoDB database

- config: Config file for sqlite database
- dal: A data access layer for project
- middleware: auth getProfile middleware and and error handler middleware
- model: db models for project
- routes: api endpoints for project
- service: A service layer that serves their respective controller



#### Swagger Docs ⚡

| Routes
| http://localhost:3001/api-docs/#/



#### Routes ⚡

| Routes               | HTTP Methods | Description                    |
| :------------------- | :----------- | :----------------------------- |
| http://localhost:3001/admin/best-profession?start=<date>&end=<date> | GET         | Returns the profession that earned the most money        |
| http://localhost:3001/admin/best-clients?start=2020-08-13&end=2020-08-19   | GET          | returns the clients the paid the most for jobs in the query time period  |
| http://localhost:3001/balances/deposit/1 | POST          | Deposits money into the the the balance of a client |
| http://localhost:3001/jobs/unpaid   | GET          | Get all user account details   |
| http://localhost:3001/jobs/2/pay  | GET          | Pay for a job   |
| http://localhost:3001/contracts/3   | GET          | Get all user account details   |
| http://localhost:3001/contracts   | GET          | list of contracts belonging to a user   |



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



Then execute in command prompt:

```
$ cd "deel-backend-task""
$ npm install
$ npm run seed
$ npm run
```




### Above Requirements
- Implement with TypeScript
- Properly debug my test cases


```
DEEL OPERATION
```
