import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {firebase} from '../firebase/config';

class Login extends Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    const {email, password} = this.state;
    if (email.trim() !== '' && password.trim() !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.replace('Main');
        })
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      Alert.alert(
        'Warning',
        'Enter email and password',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
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
            <Text style={styles.textWarning}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.buttonSubmit}
            title="Login"
            onPress={this.handleLogin}>
            <Text style={styles.buttonTitle}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Don't have an account?
              <Text
                style={styles.footerLink}
                onPress={() => this.props.navigation.navigate('Register')}>
                Sign Up
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
    // justifyContent: 'flex-start',
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
  img: {
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  buttonSubmit: {
    height: 40,
    width: '90%',
    backgroundColor: '#788eec',
    marginVertical: 10,
    // marginHorizontal: 30,
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
