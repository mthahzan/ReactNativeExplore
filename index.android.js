import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import AppComponent from './components/app/AppComponent';

/**
 * Class for Android build
 */
export default class HelloWorld01 extends Component {

  /**
   * Says whether the component should update
   * @return {Boolean} TRUE if the component should be updated
   */
  shouldComponentUpdate() {
    return true;
  }

  /**
   * Renders the view
   * @return {JSX} The view to be rendered
   */
  render() {
    return (
      <AppComponent />
    );
  }
}

AppRegistry.registerComponent('HelloWorld01', () => HelloWorld01);
