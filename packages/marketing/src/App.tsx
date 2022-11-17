import React from 'react'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'

import { Landing, Pricing } from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Landing />,
//   },
//   {
//     path: 'pricing',
//     element: <Pricing />,
//   },
// ])

const App = () => {
  return (
    <BrowserRouter>
      {/* <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider> */}
      <StylesProvider generateClassName={generateClassName}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </StylesProvider>
    </BrowserRouter>
  )
}

export default App
