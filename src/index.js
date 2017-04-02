import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import App from './App/App.react';
import Hello from './App/Sites/Hello.react';

export default function index() {
  class pan extends Component {
    render() {
      return (
        <Router>
          <Scene key="root">
            <Scene
              key="app"
              component={App}
              title="Home"
              initial
            />
            <Scene
              key="hello"
              component={Hello}
              title="Hello"
            />
          </Scene>
        </Router>
      );
    }
  }
  AppRegistry.registerComponent('pan', () => pan);
}
