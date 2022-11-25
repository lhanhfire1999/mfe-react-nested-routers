import React, { Suspense } from 'react'
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

import Progress from './components/Progress'
import { Router } from './routing/Router'
import Header from './components/Header'

const generateClassName = createGenerateClassName({
  seed: 'co',
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={null} onSignOut={null} />
        <Suspense fallback={<Progress />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
