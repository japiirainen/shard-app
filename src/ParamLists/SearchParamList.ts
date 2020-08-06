import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { ProductParamList } from './ProductParamList'

export type SearchParams = {
	Search: undefined
} & ProductParamList

export type SearchNavProps<T extends keyof SearchParams> = {
	navigation: StackNavigationProp<SearchParams, T>
	route: RouteProp<SearchParams, T>
}
