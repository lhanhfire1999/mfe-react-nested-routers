import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const MarketingLazy = lazy(() => import('../components/MarketingApp'))
const AuthLazy = lazy(() => import('../components/AuthApp'))
const LayoutLazy = lazy(() => import('../components/Layout'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutLazy />,
    children: [
      {
        index: true,
        element: <MarketingLazy />,
      },
      { path: '/pricing', element: <MarketingLazy /> },
      { path: 'auth/*', element: <AuthLazy /> },
    ],
  },
])
