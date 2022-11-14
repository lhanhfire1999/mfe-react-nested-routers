import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import { Landing, Pricing } from './pages'

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
    <StylesProvider>
      <RouterProvider router={router} />
    </StylesProvider>
  )
}

export default App
