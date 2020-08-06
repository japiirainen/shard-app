import React from 'react'
import { StyleSheet } from 'react-native'
import faker from 'faker'
import { Center } from '../Center'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from 'react-native'
import { HomeNavProps } from '../ParamLists/HomeParamList'

export const Feed = ({ navigation }: HomeNavProps<'Feed'>) => {
    return (
        <Center>
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
        </Center>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
})
