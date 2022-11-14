import React from 'react'
import { createRoot } from 'react-dom/client'
import { ContainerApp } from './containers'

const root = createRoot(document.querySelector('#root')!)
root.render(<ContainerApp />)

export {}
