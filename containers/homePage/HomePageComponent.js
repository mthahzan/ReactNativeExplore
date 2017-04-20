import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import dimens from '../../theme/dimens';

/**
 * HomePage component class
 */
class HomePageComponent extends React.Component {

  /**
   * Constructor for the HomePageComponent class
   * @param  {Object} props The props passed in from parent
   */
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    };

    // Bind the context to custom functions
    this.bindCustomFunctions(this);
  }

  /**
   * Says whether the component should update
   * @return {Boolean} TRUE if the component should be updated
   */
  shouldComponentUpdate() {
    return true;
  }

  /**
   * Handles input text change
   * @param  {Context} context The context of the React class
   */
  bindCustomFunctions(context) {
    this.handleInputChange = this.handleInputChange.bind(context);
  }

  /**
   * Handles the input change event
   * @param  {String} newText The changed input text
   */
  handleInputChange(newText) {
    this.setState({
      inputText: newText,
    });
  }

  /**
   * Renders the view
   * @return {JSX} The view to be rendered
   */
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            onChangeText={this.handleInputChange}
            placeholder="Enter something here"
            style={styles.textInput}
            value={this.state.inputText}
        />

        <Text>
          You entered {this.state.inputText}
        </Text>
      </View>
    );
  }
}


/**
 * HomePageComponent styles
 * @type {Object}
 */
const styles = StyleSheet.create({
  container: {
    paddingTop: dimens.view.verticalPadding,
    paddingBottom: dimens.view.verticalPadding,
    paddingLeft: dimens.view.horizontalPadding,
    paddingRight: dimens.view.horizontalPadding,
  },

  textInput: {
    height: dimens.textInput.height,
  },
});

export default HomePageComponent;
