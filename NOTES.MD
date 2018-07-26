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

- props are a way of passing data from parent to child.