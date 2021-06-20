# interview-vuejs

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

# candidate Andre Agro Ferreira

### Implemented
- [x] Given a mocked API response for the vehicles, then show the list of vehicle cards
    - Implemented the mocked api with AXIOS, this was implemented in VUEX, in an action. it is expected that the callback is an array, in case of error it gives an error in the UI.
- [x] Given any vehicle, when a user clicks on the hearth icon, then the heart becomes orange and the client should save it. /  Given a refresh of the page, then likes shouldn't be lost.
    - This feature was implemented, using VUEX, in this case I decided to use localsotrage to store the likes, however in a real application I would use the backend to manage these inputs.
- [x] Given a filter section, when a user clicks on the KM button, all the values depending on km are converted into KM
    - Feature implemented if units are in Miles it converts to KM.
- [x] Given a filter section, when a user clicks on the Miles button, all the values depending on miles are converted into MILES
    - Feature implemented if the units are in KM it converts to Miles, however I didn't put a Math.round because I didn't realize if the result should be an integer or a float, with this doubt I left a float.
- [x] Given a filter section, when a user types in the search filter, then the vehicles should be filtered by make, model and version.
    - In this case I implemented a scalable search, first it looks inside the store to see if there are any results, otherwise in a real app we could implement a request to the backend. In this case it just searches the store and if it doesn't get any results it returns an error saying that it didn't find any results.
- [x] Given a not FREE vehicle, when a user clicks on the HEART icon, nothing should happen and the like action is disabled
    - Functionality implemented
- [x] Given any error that could occur in the interaction with the API, then the client should handle it in order to avoid any application breaking point
    - This functionality was described in the first point

## Expectations 
The expectations are:

- [x] Modelling needed domain entities
    
- [fail] Writing tests!
    - Note: Unfortunately it was only one goal that I could not accomplish within the time. For one main reason, it is not part of my routine to implement tests, however I am completely capable of implementing them but it takes me longer.
- [x] Handling errors
  
-  [x] The application should have a state/storage layer for managing received data from API
  
-  [x] API response can be mocked but easily switchable to a real API.


