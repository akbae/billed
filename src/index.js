import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigation/navigator';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigator />
      </Provider>
    );
  }
}

registerRootComponent(App);
