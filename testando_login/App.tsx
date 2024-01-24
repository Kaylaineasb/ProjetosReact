import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createStackNavigator();
const InsideStack = createStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name="My todos" component={List}/>
      <InsideStack.Screen name="details" component={Details}/>
    </InsideStack.Navigator>
  )
}
export default function App() {
  const [user,setUser] = useState<User | null>(null);

  useEffect(()=>{
    onAuthStateChanged(FIREBASE_AUTH,(user)=>{
      setUser(user);
    });
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user?(
          <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown:false}}></Stack.Screen>
        ):(
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
