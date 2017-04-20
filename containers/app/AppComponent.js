import React, {Component} from 'react';

import HomePageComponent from '../homePage/HomePageComponent';

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
      <HomePageComponent />
    );
  }
}

export default AppComponent;
