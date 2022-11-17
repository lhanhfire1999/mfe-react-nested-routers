import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
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
