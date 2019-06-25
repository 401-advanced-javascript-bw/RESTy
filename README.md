# ![CF](http://i.imgur.com/7v5ASc8.png) LAB

## RESTy

### Author: Bonnie Wang

### Links and Resources

- [submission PR](http://xyz.com)
- [travis](http://xyz.com)
- [amplify deployment](https://submission.d38hc35hqe1lgy.amplifyapp.com/)

#### Documentation

- [api docs](https://lab-19-api-server-bw.herokuapp.com/api/v1/doc/)
- [jsdoc](http://xyz.com) (Server assignments)
- [styleguide](http://xyz.com) (React assignments)

### Modules

#### `app.js`

#### `index.js`

### Components

#### `Header.js` -> display header

#### `Form.js` -> process GET, POST, PUT, DELETE requests

#### `Footer.js` -> display footer

#### Running the app

- `npm i`
- `npm run start`
- Step One: enter URL
- Step Two: select method

- Example:
  - Get: https://lab-19-api-server-bw.herokuapp.com/api/v1/movies
  - Post: https://lab-19-api-server-bw.herokuapp.com/api/v1/movies
    - Text Area Input: {title: " ", genre:" ", rating:" "}
  - Put: https://lab-19-api-server-bw.herokuapp.com/api/v1/movies/:id
    - Text Area Input: {tite:" ", genre:" ", rating:" "}
  - Delete: https://lab-19-api-server-bw.herokuapp.com/api/v1/movies/:id

#### Tests

- `npm run test` to run tests
- Tests for state change and REST methods
- Sucessfully get, post, put, and delete data

#### UML

![](./assets/uml.jpg)
