import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Screens/HomeScreen";
import { _NAVIGATION } from "./Static/NavigationPaths";

const Stack = createNativeStackNavigator();
const StackNavigator = Stack.Navigator as any;

export const Navigation = () => {
    return (
        <NavigationContainer>
            <StackNavigator screenOptions={{ headerShown: false}} initialRouteName={_NAVIGATION.home}>
                <Stack.Screen name={_NAVIGATION.home} component={HomeScreen} />
            </StackNavigator>
        </NavigationContainer>
    )
}