import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Provider as PaperProvider } from 'react-native-paper'
import { AuthProvider } from './AuthProvider'
import { Routes } from './Routes'
import { client } from './graphql/Client'

export const Providers = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PaperProvider>
    </ApolloProvider>
  )
}
