/**
 * Created by @ruckonic
 * @format
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RelayEnvironmentProvider} from 'react-relay';

import RelayEnvironment from './relay/relay-environment';
import {HomeScreen} from './screens/Home/HomeScreen';
import {ProfileScreen} from './screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RelayEnvironmentProvider>
  );
}

export default App;
