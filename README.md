# Njinga JS
Skeleton for simple  A.P.I.

![The Skeleton Dance - Walt Disney (1929)](skeleton.gif)

## 1. How to use
```bash
npm i
npm start
```

## 2. Settings

### 2.1 Environment variables

These environment variables are set to their default values in the .env file as in the example file  [.env.example](.env.example).

* ENV
  Environment mode.
  Default: 'development'

* PORT
  Port used in server.
  Default = 8080

* SQL_HOST
* SQL_DATABASE
* SQL_PORT
* SQL_USERNAME
* SQL_PASSWORD
* SQL_DIALECT
  Supported dialects:
  * postgres
  * sqlite
  * mysql
  * mssql 


## 3. Structure

### 3.1 Files

* [README.md](README.md)
  This file  ;-)
* [cmd.js](cmd.js)
  Utils to import and export databases.

### 3.2 Folders

* [controllers](controllers/)
  Application controllers.

* [middlewares](middlewares/)
  Application middlewares.
  Initial file number represents your initialization order.

* [resources](resources/)
  Application web routes.

* [settings](settings/)
  Application settings. Packages are started here.

* [databases/models](databases/models/)
  Application data models.

* [system](system/)
  System utils.
