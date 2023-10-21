import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './screen/Screen01';
import Screen02 from './screen/Screen02';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen01' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Screen01' component={Screen01} />
        <Stack.Screen name='Screen02' component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
