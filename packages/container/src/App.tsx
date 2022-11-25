import React, { Suspense } from 'react'
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Router'

const generateClassName = createGenerateClassName({
  seed: 'co',
})

const App = () => {
  return (
    <Suspense fallback={<div>Loading........</div>}>
      <StylesProvider generateClassName={generateClassName}>
        <RouterProvider router={router} />
      </StylesProvider>
    </Suspense>
  )
}

export default App
