import React, { useRef, useState, useEffect } from 'react'
import { Text } from 'react-native'
import { Center } from '../Center'
import { HomeNavProps } from '../ParamLists/HomeParamList'

function apiCall(x: any) {
    return x
}

export const EditProduct = ({
    route,
    navigation,
}: HomeNavProps<'EditProduct'>) => {
    const [formState] = useState()
    const submit = useRef(() => {})

    submit.current = () => {
        //api call with new form state
        apiCall(formState)
        navigation.goBack()
    }

    useEffect(() => {
        navigation.setParams({ submit })
    }, [])

    return (
        <Center>
            <Text>editing {route.params.name}...</Text>
        </Center>
    )
}
