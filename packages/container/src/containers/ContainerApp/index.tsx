import React from 'react'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import { Header, MarketingApp } from '../../components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const ContainerApp = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={null} onSignOut={null} />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  )
}

export default ContainerApp
