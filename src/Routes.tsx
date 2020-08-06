import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Center } from './Center'
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { AuthContext } from './AuthProvider'
import { AppTabs } from './Components/AppTabs'
import { AuthStack } from './Stacks/AuthStack'

export const Routes: React.FC = () => {
    const { user, login } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((userString) => {
                if (userString) {
                    login()
                }
                setLoading(false)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    if (loading)
        return (
            <Center>
                <ActivityIndicator size="large" />
            </Center>
        )

    return (
        <NavigationContainer>
            {user ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
    )
}
