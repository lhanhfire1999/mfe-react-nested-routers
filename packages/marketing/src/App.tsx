import React from 'react'
import { createGenerateClassName, StylesProvider } from '@material-ui/core'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Landing, Pricing } from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'pricing',
    element: <Pricing />,
  },
])

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  )
}

export default App
