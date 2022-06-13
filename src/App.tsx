import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

import Home from 'views/Home/Home'
import Landing from 'views/Landing/Landing'

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
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
