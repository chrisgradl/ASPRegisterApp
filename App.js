import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ASPListScreen from './src/screens/ASPListScreen';
import ASPDetailScreen from './src/screens/ASPDetailScreen';
import { StatusBar } from 'expo-status-bar';
import { adaptNavigationTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

const { LightTheme } = adaptNavigationTheme({reactNavigationLight: DefaultTheme});

const Stack = createNativeStackNavigator();

// this is the main entry point for the application
export default function App() {
    return (
        <PaperProvider theme={MD3LightTheme}>
            <NavigationContainer theme={LightTheme}>
                <StatusBar style="auto"/>
                <Stack.Navigator>
                    <Stack.Screen name="ASPListScreen" component={ASPListScreen} options={{
                        title: 'ASP Register',
                        headerShown: false,
                    }} />
                    <Stack.Screen name="ASPDetailScreen" component={ASPDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
