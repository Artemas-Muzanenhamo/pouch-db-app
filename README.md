# PouchDB app

## Pre-requisites

* [NodeJs](https://nodejs.org)
* [Angular CLI](https://cli.angular.io/)

## season-app-server(back-end) <img src="https://user-images.githubusercontent.com/29547780/90199441-b6503c80-ddcc-11ea-9885-3b45ffdba246.png" >

* Navigate into the `season-app-server` directory.
* Through a terminal you can start up the Node server by executing:
```javascript
node season-app-server.js
```
* In your browser, navigate to: 
```javascript
localhost:8888
```

## season-app-ui (front-end) <img src="https://user-images.githubusercontent.com/29547780/90199560-0f1fd500-ddcd-11ea-9835-5043b36b26d6.png" />

* Open up a new terminal window.
* Navigate into the `season-app-ui` directory.
* The UI is an Angular 8 App. To start the application just execute the command below:
`ng server -o` 

## Architecture

### When the server is up and running
<img src="https://user-images.githubusercontent.com/29547780/90284859-9bcca080-de6a-11ea-81da-0d680ee10d21.png" />

1. User makes a request to `season-app-ui`.
2. Angular will make a request to the server `season-app-server` on `localhost:8888`
3. The server will respond with a status `200: OK` and the body with a `SEASON` object that will have either of the values `SUMMER`, `WINTER`, `AUTUMN` or `SPRING`.
4. Since the response was a `200: OK`, Angular will save the response in `PouchDB`.
5. The response will also be sent back to the user so they can see the season value.

### When the server fails
<img src="https://user-images.githubusercontent.com/29547780/90286579-15b25900-de6e-11ea-9fca-1a9442ea8a57.png"/>

1. User makes a request to `season-app-ui`.
2. Angular will make a request to the server `season-app-server` on `localhost:8888`
3. The server will respond with a bad response e.g. `500: Internal Server Error`.
4. Since the response was a `500: Internal Server Error`, Angular will fetch the response value from `PouchDB` which was stored when the server responded with a `200 OK` status.
5. The response will also be sent back to the user so they can see the season value.