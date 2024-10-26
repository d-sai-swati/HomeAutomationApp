import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Platform } from 'react-native';
import { Hp } from '../constants/theme';
import ControlScreen from '../screens/Main/Controls/ControlScreen';
import { ChartBar, GridFour, Star, VideoCamera } from 'phosphor-react-native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <>
            <Tab.Navigator initialRouteName="Controls" screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let IconComponent;

                    if (route.name === 'System...') {
                        IconComponent = ChartBar;
                    } else if (route.name === 'Camera') {
                        IconComponent = VideoCamera;
                    } else if (route.name === 'Controls') {
                        IconComponent = GridFour;
                    } else if (route.name === 'Scenes') {
                        IconComponent = Star;
                    }
                    else if (route.name === 'Settings') {
                        IconComponent = User;
                    }
                    return <IconComponent size={size} color={color} weight={focused ? 'Bold' : 'Outline'} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: Platform.select({
                    ios: {
                      backgroundColor: '#0092C8',
                      paddingBottom: 30,
                      paddingTop: 10,
                      height: Hp(10),
                    },
                    android: {
                      backgroundColor: '#0092C8',
                      paddingBottom: 10,
                      paddingTop: 10,
                      height: Hp(10),
                    },
                  }),
                tabBarActiveBackgroundColor: '#0092C8',
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            })}>
                <Tab.Screen name="controls" component={ControlScreen} />
            </Tab.Navigator>
        </>
    )
}

export default Tabs;