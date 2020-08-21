import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContontainer from './components/IceCreamContontainer';
import NewCakeContainer from './components/NewCakeContainer';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContontainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
