import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {firebase} from '../firebase/config';
class Main extends Component {
  state = {currentUser: null};

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }

  handleSignOut = () => {
    if (this.state.currentUser != null) {
      firebase
        .auth()
        .signOut()
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({errorMessage: error.message}));
    }
  };

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text>Đã login {currentUser && currentUser.email}!</Text>
        <Button title="Sign Out" onPress={this.handleSignOut} />
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
});
export default Main;
