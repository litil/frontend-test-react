import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityFeed from './components/pages/ActivityFeed/index.jsx';

import 'regenerator-runtime/runtime'
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import reducer from "reducers/rootReducer";
import watcherSaga from "sagas/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(watcherSaga);

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityFeed />
      </div>
    </div>
  );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

registerServiceWorker();

export default App;
