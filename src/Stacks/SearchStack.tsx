import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SearchParams } from '../ParamLists/SearchParamList'
import { Search } from '../views/Search'
import { addProductRoutes } from '../addProductRoutes'

const Stack = createStackNavigator<SearchParams>()

export const SearchStack = () => {
	return (
		<Stack.Navigator initialRouteName='Search'>
			{addProductRoutes(Stack as any)}
			<Stack.Screen name='Search' component={Search} />
		</Stack.Navigator>
	)
}
