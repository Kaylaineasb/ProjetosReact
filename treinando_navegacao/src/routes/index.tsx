
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Sigin from '../pages/Sigin'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Sigin" component={Sigin}/>
        </Stack.Navigator>
    )
}