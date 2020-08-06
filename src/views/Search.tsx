import React, { useState } from 'react'
import faker from 'faker'
import { Button, StyleSheet } from 'react-native'
import { Center } from '../Center'
import { FlatList } from 'react-native-gesture-handler'
import { SearchNavProps } from '../ParamLists/SearchParamList'

export const Search = ({ navigation }: SearchNavProps<'Search'>) => {
	const [show, setShow] = useState(false)

	return (
		<Center>
			<Button
				title='Search products'
				onPress={() => {
					setShow(true)
				}}
			/>
			{show && (
				<FlatList
					style={styles.list}
					renderItem={({ item }) => {
						return (
							<Button
								title={item}
								onPress={() => {
									navigation.navigate('Product', {
										name: item,
									})
								}}
							/>
						)
					}}
					keyExtractor={(product, idx) => product + idx}
					data={Array.from(Array(50), () => faker.commerce.product())}
				/>
			)}
		</Center>
	)
}

const styles = StyleSheet.create({
	list: {
		width: '100%',
	},
})
