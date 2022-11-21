import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import routerFactory, { RouterFactoryProps } from './routing/router-factory'

interface MountProps extends RouterFactoryProps {
  mountPoint: Element
}

const mount = ({ mountPoint, strategy, initialPathname }: MountProps) => {
  const router = routerFactory({ strategy, initialPathname })
  const root = createRoot(mountPoint)
  root.render(<App router={router} />)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) mount({ mountPoint: devRoot!, strategy: 'browser' })
}

export { mount }
