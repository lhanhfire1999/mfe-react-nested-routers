import React from 'react'
import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/router'

const generateClassName = createGenerateClassName({
  seed: 'co',
})

const ContainerApp = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  )
}

export default ContainerApp
