import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Product } from '../src/views/Product'
import { EditProduct } from '../src/views/EditProduct'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TypedNavigator, StackNavigationState } from '@react-navigation/native'
import { SearchParams } from './ParamLists/SearchParamList'
import { HomeParamList } from './ParamLists/HomeParamList'



export const addProductRoutes = (
    Stack: TypedNavigator<SearchParams | HomeParamList, StackNavigationState, any, any, any>
     ) => {
    return (
        <>
        <Stack.Screen
                options={({ route }: {route: any}) => ({
                    headerTitle: `Product: ${route.params.name}`,
                })}
                name="Product"
                component={Product}
            />
            <Stack.Screen
                options={({ route }: {route: any}) => ({
                    headerTitle: `Edit: ${route.params.name}`,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                route.params.submit?.current()
                            }}
                        >
                            <Text style={styles.headerRight}>Done</Text>
                        </TouchableOpacity>
                    ),
                })}
                name="EditProduct"
                component={EditProduct}
            />
        </>
    )
}

const styles = StyleSheet.create({
    headerRight: {
        color: 'red',
        paddingRight: 10,
    },
})
