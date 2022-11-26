import React, { Suspense } from 'react'
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

import Progress from './components/Progress'
import { CustomRouter } from './routing/Router'
import Header from './components/Header'
import { AuthenticationContextProvider } from './contexts/AuthenticationContext'

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
