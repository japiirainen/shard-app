import React from 'react'
import { Text, Button } from 'react-native'
import { Center } from '../Center'
import { AuthNavProps } from '../ParamLists/AuthParamList'

export const Register = ({ navigation, route }: AuthNavProps<'Register'>) => {
    return (
        <Center>
            <Text>Route name: {route.name}</Text>
            <Button
                title="go to login"
                onPress={() => navigation.navigate('Login')}
            />
        </Center>
    )
}
