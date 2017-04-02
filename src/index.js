import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App/App.react';


export default function index() {
  class pan extends Component {
    render() {
      return (
        <App />
      );
    }
  }
  AppRegistry.registerComponent('pan', () => pan);
}
