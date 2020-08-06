import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type AppParamList = {
	Home: undefined
	Search: undefined
}

export type AuthNavProps<T extends keyof AppParamList> = {
	navigation: StackNavigationProp<AppParamList, T>
	route: RouteProp<AppParamList, T>
}
