import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';



class RolePick extends Component {
  handleSetPark() {
    AsyncStorage.setItem(`activeRole`, `park`)
    .then(() => {
      this.props.navigation.navigate(`ParkHome`);    
    });
  }
  
  handleSetHost() {
    AsyncStorage.setItem(`activeRole`, `host`)
    .then(() => {
      this.props.navigation.navigate(`HostHome`);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          value={`park`}
          onPress={this.handleSetPark.bind(this)}>
          <Text>Park with Parkit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSetHost.bind(this)}>
          <Text>Host with Parkit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default ConnectedRolePick = connect(
  mapStateToProps,
  mapDispatchToProps
)(RolePick);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`
  },
  button: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 40,
    margin: 9,
    width: 200,
    borderColor: `black`,
    borderWidth: 1,
    borderStyle: `solid`,
    borderRadius: 5
  }
})