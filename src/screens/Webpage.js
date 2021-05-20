import React, { Component } from 'react';
import { View, StyleSheet,Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default class MyWebComponent extends Component {


    render() {
        var temp;
        if (this.props.route.params) {
            if (this.props.route.params.conf === 'yes') {
                temp = 'https://bsrtbrb.herokuapp.com/';
            } else {
                temp = 'https://bsrtbrb.herokuapp.com/score';
            }
        } else {
            temp = 'https://bsrtbrb.herokuapp.com/home';
        }


        return (
            <View style={styles.container}>
                <Text style={styles.text}>Your Cart is empty!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        marginVertical: 20,
    },
    text: {
        fontSize:50,
        marginTop: 25,
        textAlign: 'center'
      },
})