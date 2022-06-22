import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ope3r80rxh01z41vnu9l4c/master',
  cache: new InMemoryCache()
})
