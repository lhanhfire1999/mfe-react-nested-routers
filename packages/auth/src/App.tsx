import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { RemixRouterProps } from './routing/router-factory'

interface AppProps {
  router: RemixRouterProps
}
const generateClassName = createGenerateClassName({
  seed: 'ma',
})

const App: React.FC<AppProps> = ({ router }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  )
}

export default App
