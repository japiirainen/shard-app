import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppParamList } from '../ParamLists/AppParamList'
import { HomeStack } from '../Stacks/HomeStack'
import { SearchStack } from '../Stacks/SearchStack'

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if (route.name === 'Home') {
                        iconName = 'home'
                    } else if (route.name === 'Search') {
                        iconName = 'search1'
                    }
                    return (
                        <AntDesign
                            name={`${iconName}`}
                            size={size}
                            color={color}
                        />
                    )
                },
            })}
            tabBarOptions={{
                activeTintColor: 'purple',
                inactiveTintColor: 'gray',
            }}
        >
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Search" component={SearchStack} />
        </Tabs.Navigator>
    )
}
