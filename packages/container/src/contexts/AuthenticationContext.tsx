import React, { useContext, useState } from 'react'

interface ChildrenProps {
  children: React.ReactNode
}

interface AuthenticationContextProps {
  isSignin: boolean
  setIsSignin: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthenticationContext =
  React.createContext<AuthenticationContextProps | null>(null)

export const AuthenticationContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [isSignin, setIsSignin] = useState(false)

  return (
    <AuthenticationContext.Provider value={{ isSignin, setIsSignin }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext) as AuthenticationContextProps
}
