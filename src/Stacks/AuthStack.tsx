import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthParamList } from '../ParamLists/AuthParamList'
import { Login } from '../views/Login'
import { Register } from '../views/Register'

const Stack = createStackNavigator<AuthParamList>()

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ header: () => null }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}
