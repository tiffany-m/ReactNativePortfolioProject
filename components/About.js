import React, { Component } from 'react';
import { View, Text } from 'react-native';

class About extends Component {
    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40}}> About </Text>
            </View>
            );
    }
}

export default About;