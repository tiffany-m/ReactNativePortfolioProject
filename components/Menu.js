import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DESSERTS } from '../shared/desserts';

class Menu extends Component {
     constructor(props) {
        super(props);
        this.state = {
            desserts: DESSERTS
        }
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({item}) => {
            return (
                <ListItem
                    title={item.type}
                    subtitle={item.price}
                    onPress={() => navigate('Dessert', { dessertID: item.id })}
                    leftAvatar={{ source: require('./images/101.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.desserts}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Menu;