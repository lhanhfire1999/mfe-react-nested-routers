import React from 'react'
import { RouteObject } from 'react-router-dom'
import { NavigationManager, SignIn, SignUp } from '../components'

export const routes: RouteObject[] = [
  {
    path: '/auth',
    element: <NavigationManager />,
    children: [
      {
        path: 'signin',
        element: <SignIn onSignIn={() => null} />,
      },
      { path: 'signup', element: <SignUp onSignIn={() => null} /> },
    ],
  },
]
