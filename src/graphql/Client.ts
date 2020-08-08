import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http'

const link = createHttpLink({
  uri: 'https://mpjk0plp9.lp.gql.zone/graphql',
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
