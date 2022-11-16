import React from 'react'
import { Header } from '../../components'
import MarketingApp from '../MarketingApp'
import { BrowserRouter } from 'react-router-dom'

const ContainerApp = () => {
  return (
    <BrowserRouter>
      <div>
        <Header signedIn={null} onSignOut={null} />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}

export default ContainerApp
