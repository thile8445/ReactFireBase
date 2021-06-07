import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {firebase} from '../firebase/config';
import {EMAIL} from '../helpers/Regexs';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: null,
    };
  }
  goLogin = () => {
    this.props.navigation.navigate('Login');
  };
  isEmailValid = email => {
    const checkEmailResult = EMAIL.test(email);
    return checkEmailResult;
  };
  isPasswordEqual = (password, confirmPassword) => {
    return password === confirmPassword;
  };
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
        <ScrollView style={styles.scrollViewStyle}>
          <Image
            style={styles.img}
            source={require('../../assets/images/touchicon.png')}
          />
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
          <TouchableOpacity style={styles.buttonSubmit}>
            <Text style={styles.buttonTitle}>Create account</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already got an account ?
              <Text
                style={styles.footerLink}
                onPress={() => this.props.navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
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
  textWarning: {
    color: 'red',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    marginVertical: 10,
    // marginHorizontal: 30,
    marginLeft: '5%',
    backgroundColor: 'white',
    overflow: 'hidden',
    paddingLeft: 10,
  },
  scrollViewStyle: {
    flex: 1,
    width: '100%',
  },
  buttonSubmit: {
    height: 40,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#788eec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  footerView: {
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    fontSize: 16,
    color: '#788eec',
    fontWeight: 'bold',
  },
  img: {
    height: 120,
    width: 90,
    margin: 30,
    alignSelf: 'center',
  },
});

export default Register;
