import { render } from 'react-dom'
import { StrictMode } from 'react'
import App from './app'
// import client from './config/ApolloClient'
// import { ApolloProvider } from '@apollo/client'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)

/*

render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('app')
)

  
*/
