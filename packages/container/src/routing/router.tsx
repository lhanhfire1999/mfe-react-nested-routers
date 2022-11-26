import React, { lazy, useState } from 'react'
import { useRoutes } from 'react-router-dom'

import Layout from '../components/Layout'

const MarketingLazy = lazy(() => import('../components/MarketingApp'))
const AuthLazy = lazy(() => import('../components/AuthApp'))

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
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
  return routes
}
