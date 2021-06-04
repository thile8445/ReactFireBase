import React, {Component} from 'react';
import {firebase} from '../firebase/config';

class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'Login');
    });
    // this.props.navigation.replace('Main');
  }
  render() {
    return <></>;
  }
}
export default Loading;
