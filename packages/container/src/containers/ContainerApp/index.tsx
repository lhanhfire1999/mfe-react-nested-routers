import React from 'react'
import { createGenerateClassName, StylesProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { Header, MarketingApp } from '../../components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const ContainerApp = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={null} onSignOut={null} />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  )
}

export default ContainerApp
