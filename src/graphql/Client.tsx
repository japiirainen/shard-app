import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http'

const link: any = createHttpLink({ uri: '/graphql' })

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
