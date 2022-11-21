import { createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { routes } from './routes'

export interface RouterFactoryProps {
  strategy: 'development' | 'production'
  initialPathname?: string
}

export type RemixRouterProps = ReturnType<typeof routerFactory>

const routerFactory = ({ strategy, initialPathname }: RouterFactoryProps) => {
  if (strategy === 'development') {
    return createBrowserRouter(routes)
  }

  return createMemoryRouter(routes, {
    initialEntries: [initialPathname || '/'],
  })
}

export default routerFactory
