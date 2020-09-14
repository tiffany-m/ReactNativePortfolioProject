import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DESSERTS } from '../shared/desserts';

function RenderDessert({dessert}) {
    if (dessert) {
        return (
            <Card
                featuredTitle={dessert.type}
                image={require('./images/101.jpg')}>
                <Text style={{margin: 10}}>
                    {dessert.options}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Dessert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desserts: DESSERTS
        };
    }

    static navigationOptions = {
        title: 'Dessert Information'
    }
    render() {
        const dessertID = this.props.navigation.getParam('dessertID');
        const dessert = this.state.desserts.filter(dessert => dessert.id === dessertID)[0];
        return <RenderDessert dessert={dessert} />;
    }
}

export default Dessert;