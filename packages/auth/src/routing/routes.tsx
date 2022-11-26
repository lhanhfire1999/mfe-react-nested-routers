import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { NavigationManager, NotFound, SignIn, SignUp } from '../components'
import { SigninProp } from './router-factory'

export const routes = ({ onSignIn }: SigninProp): RouteObject[] => {
  return [
    {
      path: '/auth',
      element: <NavigationManager />,
      children: [
        {
          path: 'signin',
          element: <SignIn onSignIn={onSignIn} />,
        },
        { path: 'signup', element: <SignUp onSignIn={onSignIn} /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
}
