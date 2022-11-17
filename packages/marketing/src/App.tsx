import React from 'react'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Landing, Pricing } from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Landing />,
// //   },
// //   {
// //     path: 'pricing',
// //     element: <Pricing />,
// //   },
// // ])

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        {/* <StylesProvider generateClassName={generateClassName}>
          <RouterProvider router={router} />
        </StylesProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}

export default App
