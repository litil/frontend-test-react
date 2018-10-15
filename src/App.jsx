import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityFeed from './components/pages/ActivityFeed/index.jsx';

import activitiesData from './__mocks__/activitiesData.js';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityFeed activities={activitiesData} />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
