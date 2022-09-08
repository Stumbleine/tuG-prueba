import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import UserScreen from "./screens/UserScreen";
import Post from "./components/PostCard";
import PostScreen from "./screens/PostScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="App" component={TabNavigator}></Stack.Screen>
        <Stack.Screen name="User" component={UserScreen}></Stack.Screen>
        <Stack.Screen name="Post" component={PostScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "white",
        tabBarActiveTintColor: "#43BAC1",
        tabBarInactiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#43BAC1",
        tabBarItemStyle: {
          borderWidth: 0,
          shadowOffset: {
            width: 0,
            height: 12,
          },
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-circle"
              color={color}
              size={40}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle: {
            height: 60,
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
