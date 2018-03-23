import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Animated,
} from 'react-native';

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    borderColor: `#EBEBEB`,
    borderWidth: 1
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true, borderColor: `black`, borderWidth: 2 });
  handleBlur = () => this.setState({ isFocused: false, borderColor: `#EBEBEB`, borderWidth: 1 });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 300,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 10,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 16],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };
    const inputStyle = {
      height: 40,
      fontSize: 20,
      padding: 10,
      color: `black`,
      borderBottomColor: this.state.borderColor,
      borderBottomWidth: this.state.borderWidth
    }

    return (
      <View style={{ paddingTop: 15, width: '80%' }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

export default FloatingLabelInput;