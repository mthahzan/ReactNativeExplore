import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import appTheme from '../../theme';

/**
 * App component class
 * @type {Object}
 */
class AppComponent extends Component {

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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! lol
        </Text>
        <Text style={styles.instructions}>
          This is shared code.
          index.android.js and index.ios.js does not contain any more code.
          It is all in AppComponent.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

/**
 * AppComponent styles
 * @type {Object}
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.containerBackground,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: appTheme.instructions,
    marginBottom: 5,
  },
});

export default AppComponent;
