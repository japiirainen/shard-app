import React, { createContext, useState } from 'react'
import { AsyncStorage } from 'react-native'

type User = null | { userName: String }

export const AuthContext = createContext<{
    user: User
    login: () => void
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {},
})

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    return (
        <AuthContext.Provider
            value={{
                user,
                login: () => {
                    const fakeUser: User = { userName: 'Joona' }
                    setUser(fakeUser)
                    AsyncStorage.setItem('user', JSON.stringify(fakeUser))
                },
                logout: () => {
                    setUser(null)
                    AsyncStorage.removeItem('user')
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
