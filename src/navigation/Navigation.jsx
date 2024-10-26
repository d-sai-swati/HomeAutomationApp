import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegistrationScreen from "../screens/Auth/RegistrationScreen";
import Controls from "../screens/Main/Controls/ControlScreen";
import Tabs from "./Tabs";
import HomeScreen from "../screens/Main/Home/HomeScreen";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
        color: 'black'
    },
};

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="login" screenOptions={
                {
                    headerShown: false,
                    animationEnabled: true,
                    animation: 'slide_from_right',
                }
            } >
                {/* ================ Screens ================= */}
                <Stack.Screen name="login" component={LoginScreen} /> 
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="controls" component={Controls} /> 
                <Stack.Screen name="tabs" component={Tabs}/>
                {/* <Stack.Screen name="registration" component={RegistrationScreen} /> */}
                {/* ================ Auth Screens ================= */}
                {/* ================ Main Screens ================= */}
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <Navigation />;
};