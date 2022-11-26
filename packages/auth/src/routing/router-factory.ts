import { createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { routes } from './routes'

export interface SigninProp {
  onSignIn?: () => void
}
export interface RouterFactoryProps extends SigninProp {
  strategy: 'memory' | 'browser'
  initialPathname?: string
}

export type RemixRouterProps = ReturnType<typeof routerFactory>

const routerFactory = ({
  strategy,
  initialPathname,
  onSignIn,
}: RouterFactoryProps) => {
  if (strategy === 'browser') {
    return createBrowserRouter(routes({ onSignIn }))
  }

  return createMemoryRouter(routes({ onSignIn }), {
    initialEntries: [initialPathname || '/'],
  })
}

export default routerFactory
