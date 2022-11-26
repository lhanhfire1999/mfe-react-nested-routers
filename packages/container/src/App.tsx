import React, { Suspense } from 'react'
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

import Progress from './components/Progress'

import Header from './components/Header'
import { AuthenticationContextProvider } from './contexts/AuthenticationContext'
import { CustomRouter } from './routing/router'

const generateClassName = createGenerateClassName({
  seed: 'co',
})

const App = () => {
  return (
    <AuthenticationContextProvider>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Progress />}>
            <CustomRouter />
          </Suspense>
        </BrowserRouter>
      </StylesProvider>
    </AuthenticationContextProvider>
  )
}

export default App
