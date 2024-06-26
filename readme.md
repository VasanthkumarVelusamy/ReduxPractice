Steps to include redux

1. Redux is a framework agnostic state management library. React Redux is a bridging library which helps react apps to use redux efficiently.
2. Redux contains createStore & combineReducers apis
3. React Reduct contains Provider & connect apis

4. First we need to create action creators (in Action.js)
5. then reducer (in Reducer.js)
6. create combine reducer in case there are more than one reducer (in index.js file of Reducers folder)
7. create store by passing the combined reducers (in Store.js)
8. import Provider from react-redux and wrap the entire app component inside the provider and pass the store to provider. (In App.js)
9. in the component where you need the action and state, use mapStateToProps and mapActionsToProps and use connect api from react-redux to make them accessible inside that component.
