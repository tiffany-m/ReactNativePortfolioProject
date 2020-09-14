import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Order from './Order';
import Contact from './Contact';
import Dessert from './Dessert';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#b189fa'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'black'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fa89d8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'black'
            }
        }
    }
);

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
        Dessert: { screen: Dessert }
    }, 
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f8c58b'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'black'
            }
        }
    }
);

const OrderNavigator = createStackNavigator(
    {
        Order: { screen: Order }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4f682'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'black'
            }
        }
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#8afaa3'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: 'black'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Menu: { screen: MenuNavigator },
        Order: { screen: OrderNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#82e7df'
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <MainNavigator />
            </View>
            );
    }
}

export default Main;
