import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Order extends Component {
    static navigationOptions = {
        title: 'Order'
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40}}> Order </Text>
            </View>
            );
    }
}

export default Order;