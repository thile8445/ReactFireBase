import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import {firebase} from '../firebase/config';
import {EMAIL} from '../helpers/Regexs';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   email: {
      //     value: '',
      //     isInputValid: true,
      //     errorMessage: '',
      //   },
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: null,
    };
    // this.handleInput = this.handleInput.bind();
    // this.handValid = this.handValid.bind();
  }
  goLogin = () => {
    this.props.navigation.navigate('Login');
  };
  isEmailValid = email => {
    const checkEmailResult = EMAIL.test(email);
    return checkEmailResult;
    // if (checkEmailResult) {
    //   return {isInputValid: true, errorMessage: ''};
    // } else {
    //   return {isInputValid: false, errorMessage: 'it not a type mail'};
    // }
  };
  isPasswordEqual = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  //   handleInput = email => {
  //     this.setState({
  //       email: {value: email, isInputValid: true, errorMessage: ''},
  //     });
  //   };
  //   handValid = () => {
  //     const {value} = this.state.email;
  //     const resultCheckEmail = this.validateEmail(value);
  //     console.log(resultCheckEmail);
  //   };
  handleLogin = () => {
    const {email, password, confirmPassword} = this.state;
    if (
      this.isPasswordEqual(password, confirmPassword) &&
      password.length >= 6
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(rs => {
          //   Alert.alert('Register success', 'Click OK to get to the login page', [
          //     {
          //       text: 'Cancel',
          //       style: 'cancel',
          //     },
          //     {text: 'OK', onPress: () => this.goLogin()},
          //   ]);
        })
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      this.setState({errorMessage: 'The password you  entered dit not match'});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          //   onBlur={this.handValid}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Confirm password"
          onChangeText={confirmPassword => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <Button title="Register" onPress={this.handleLogin} />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});

export default Register;
