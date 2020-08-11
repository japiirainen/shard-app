import React, { createContext, useState } from 'react'
import { AsyncStorage } from 'react-native'
import { m } from './magic'

type User = null | { email: String }
const handleLogin = async (email: string) => {
  if (email) {
    await m.auth.loginWithMagicLink({ email })
    const userMetaData = await m.user.getMetadata()
    if (userMetaData.issuer) AsyncStorage.setItem('token', userMetaData.issuer)
    return userMetaData.email
  }
  throw new Error()
}
export const isLoggedIn = async () => await m.user.isLoggedIn()
export const AuthContext = createContext<{
  user: User
  login: (email: string) => Promise<string | null>
  logout: () => void
}>({
  user: null,
  login: handleLogin,
  logout: () => {},
})

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
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
