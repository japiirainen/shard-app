import React, { useContext } from 'react'
import { Text, Button } from 'react-native'
import { Center } from '../Center'
import { AuthNavProps } from '../ParamLists/AuthParamList'
import { AuthContext } from '../AuthProvider'

export const Login = ({ navigation, route }: AuthNavProps<'Login'>) => {
	const { login } = useContext(AuthContext)
	return (
		<Center>
			<Text>Route name: {route.name}</Text>
			<Button title='Log me in' onPress={login} />
			<Button
				title='go to register'
				onPress={() => {
					navigation.navigate('Register')
				}}
			/>
		</Center>
	)
}
