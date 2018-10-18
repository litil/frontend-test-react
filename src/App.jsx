import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import ActivityFeed from './components/pages/ActivityFeed';
import ActivityDetails from './components/pages/ActivityDetails';

import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import reducer from "reducers/rootReducer";
import watcherSaga from "sagas/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// @see https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(watcherSaga);

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <Switch>
            <Route exact path='/' component={ActivityFeed}></Route>
            <Route exact path='/activities' component={ActivityFeed}></Route>
            <Route path='/activities/:id/details' component={ActivityDetails}></Route>
        </Switch>
      </div>
    </div>
  );
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

export default App;
