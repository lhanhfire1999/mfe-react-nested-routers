import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AuthApp, Layout, MarketingApp } from '../components'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MarketingApp />,
      },
      { path: '/pricing', element: <MarketingApp /> },
      { path: 'auth/*', element: <AuthApp /> },
    ],
  },
])
