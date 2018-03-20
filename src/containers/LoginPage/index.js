import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon, Button, Header, Container, Content, Left } from 'native-base';
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import { login } from '../../actions/authentication';


class LoginPage extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      email: ``,
      password: ``
    }
  }

  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../../.././assetts/Login.png')}
      style={{ height: 24, width: 24 }} />
    )
  }
  handleSubmit() {
    const {
      email,
      password
    } = this.state;
    this.props.login(email, password);
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
            </Left>
        </Header>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
      <View style={styles.container}>
        <TextInput 
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize={'none'}
          onChangeText={(email) => this.setState({ email })}/>
        <TextInput 
          placeholder='Password' 
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}/>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.inputSection}>
          <FontAwesome name='user' size={20} style={styles.icon} color='black' />
          <TextInput
            style={styles.input}  
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={(email) => this.setState({ email })}/>
        </View>
        <View style={styles.inputSection}>
          <Entypo name='key' size={20} style={styles.icon} color='black' />
          <TextInput
            style={{ flex: 1 }} 
            placeholder='Password' 
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}/>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
      </Content>
        </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(login(email, password));
    }
  }
}

export default ConnectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '80%',
    backgroundColor: `white`,
    borderBottomWidth: 1,
    borderColor: 1,
    borderRadius: 10,
    marginBottom: 20
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingBottom: 10,
    backgroundColor: `white`
  },
  icon: {
    padding: 10
  },
  button: {
    justifyContent: `center`,
    alignItems: `center`,
    height: 40,
    width: 200,
    borderColor: `black`,
    borderWidth: 1,
    borderStyle: `solid`,
    borderRadius: 5
  }
});
