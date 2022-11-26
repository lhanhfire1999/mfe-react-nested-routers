import { mount as authMount } from 'auth/AuthApp'
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthenticationContext } from '../../contexts/AuthenticationContext'
import { AUTH_PATHNAME_ROUTERS } from '../../routing/constants'

const AuthApp = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { setIsSignin } = useAuthenticationContext()

  const onSignIn = () => {
    setIsSignin((prev) => !prev)
  }

  const authWrapperRef = useRef<HTMLDivElement>(null)
  const isFirstRef = useRef(true)

  useEffect(() => {
    const handleAuthNavigation = (e: Event) => {
      const authPathname = (e as CustomEvent<string>).detail

      if (authPathname === location.pathname) return
      navigate(authPathname)
    }

    window.addEventListener('[auth] navigated', handleAuthNavigation)

    return () =>
      window.removeEventListener('[auth] navigated', handleAuthNavigation)
  }, [location])

  useEffect(() => {
    if (AUTH_PATHNAME_ROUTERS.includes(location?.pathname)) {
      window.dispatchEvent(
        new CustomEvent(`[container] navigated`, {
          detail: location.pathname,
          cancelable: true,
        })
      )
    }
  }, [location])

  useEffect(() => {
    if (!isFirstRef.current) return

    authMount({
      mountPoint: authWrapperRef?.current,
      strategy: 'memory',
      initialPathname: location.pathname,
      onSignIn,
    })
    isFirstRef.current = false
  }, [location])

  return <div ref={authWrapperRef}></div>
}

export default AuthApp
