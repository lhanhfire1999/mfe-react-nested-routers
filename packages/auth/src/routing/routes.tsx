import React from 'react'
import { RouteObject } from 'react-router-dom'
import { NavigationManager } from '../components'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NavigationManager />,
    children: [
      // {
      //   index: true,
      //   element: <Landing />,
      // },
      // { path: 'pricing', element: <Pricing /> },
    ],
  },
]
