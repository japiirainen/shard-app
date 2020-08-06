import React from 'react'
import { Text, Button } from 'react-native'
import { Center } from '../Center'
import { HomeNavProps } from '../ParamLists/HomeParamList'

export const Product = ({ route, navigation }: HomeNavProps<'Product'>) => {
	return (
		<Center>
			<Text>{route.params.name}</Text>
			<Button
				title='edit this product'
				onPress={() => {
					navigation.navigate('EditProduct', {
						name: route.params.name,
					})
				}}
			/>
		</Center>
	)
}
