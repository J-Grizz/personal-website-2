import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import AnimatedRouter from 'components/Router/AnimatedRouter'

const httpLink = createHttpLink({
  uri: 'https://kg45t4h8.api.sanity.io/v1/graphql/production/default',
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AnimatedRouter />
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
