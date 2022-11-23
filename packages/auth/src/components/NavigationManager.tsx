import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const NavigationManager = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleContainerNavigation = (e: Event) => {
      const containerPathname = (e as CustomEvent<string>).detail

      if (containerPathname === location.pathname) return
      navigate(containerPathname)
    }

    window.addEventListener('[container] navigated', handleContainerNavigation)

    return () =>
      window.removeEventListener(
        '[container] navigated',
        handleContainerNavigation
      )
  }, [location])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[auth] navigated', { detail: location.pathname })
    )
  }, [location])

  return <Outlet />
}

export default NavigationManager
