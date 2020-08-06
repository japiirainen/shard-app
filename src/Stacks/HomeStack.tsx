import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeParamList } from '../ParamLists/HomeParamList'
import { Feed } from '../views/Feed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import { AuthContext } from '../AuthProvider'
import { addProductRoutes } from '../addProductRoutes'

const Stack = createStackNavigator<HomeParamList>()

export const HomeStack = () => {
	const { logout } = useContext(AuthContext)

	return (
		<Stack.Navigator initialRouteName='Feed'>
			{addProductRoutes(Stack as any)}
			<Stack.Screen
				options={{
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => logout()}>
								<Text style={styles.headerRight}>Logout</Text>
							</TouchableOpacity>
						)
					},
				}}
				name='Feed'
				component={Feed}
			/>
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
	headerRight: {
		color: 'red',
		paddingRight: 10,
	},
})
