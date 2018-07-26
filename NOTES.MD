## 3 main Components

1) Search Bar
2) ForecastList
3) Chart

- Always ask yourself does a component need to be a container
  
# SearchBar

1) SearchBar needs to modify the state of the application by 'dispatching' actions.

   - it will create api requests
   - it will need to talk to Redux
   - it definitely needs to be a Container

- will be a **controlled field** -> a form element where the value of the input is set by the state of the component
- to create a controlled component I need to set the state (Component state) whenever the input is changed
- to set the state up I need to initialize it inside the constructor() method

## Note on 'this'

- Rule of thumb: if you are passing a callback function that has a reference to 'this' I will need to bind the context

## Note on form tag

- Always remember to prevent default browser behavior -> event.preventDefault()

## Containers

- a container needs to call an actionCreator in order to reach out to Redux
- needs to use the connect method from react-redux library
- Setup: 1) import connect method from react-redux

## Middleware

- Middleware are functions that take an action - it can -> let it pass through, manipulate it, log it, or stop it.
- Acts like a gatekeeper - It is before the action gets to a reducer
- all actions that I create flow through the Middleware step
- they intercept and can modify actions
- I can create as many Middleware functions as I want in an app
- popular middleware npm package -> redux-promise
  
  
## application state holds all the data for the app

- for this app it holds the weather data
- I only change application state through reducers and actions
- to change app state and add the weather data I will call an actionCreator to make an ajax call to the api server
- **REMEMBER** actionCreators always have to return an action and 
- an action is an object which **ALWAYS** has to have a type.

## props

## reducers are just js functions

- props are a way of passing data from parent to child.

## Redux promise

- Redux promise is a middleware -> gatekeeper
- it looks specifically at the payload property
- if the payload is a promise it stops everything and waits for the promise to resolve (ajax request finished and data received) -> then dispatches a new action of the same type to the reducer but with a payload of the resolved request
- In other words - it unwraps the promise for me and sends the unwrapped data to the reducer
- middleware has the ability to stop or manipulate actions before they hit any reducers
- the promise does not actually contain any of the data
- the promise is returned as the payload: in the action creator
- **DON'T EVER** manipulate / mutate state directly with Redux (ie. state.push() -> changes existing array)
- **Instead** return a completely new instance of state (ie. state.concat() -> combines existing array data with new data and creates a **NEW** array)