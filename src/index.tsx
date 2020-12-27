import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query-devtools'
import './index.css'
import App from './App'

ReactDOM.render(
  <ChakraProvider>
    <HashRouter>
      <App />
      <ReactQueryDevtools initialIsOpen />
    </HashRouter>
  </ChakraProvider>,
  document.getElementById('root')
)
