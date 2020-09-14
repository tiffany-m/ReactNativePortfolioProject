import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40}}> Contact </Text>
            </View>
            );
    }
}

export default Contact;