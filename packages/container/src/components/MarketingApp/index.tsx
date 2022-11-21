import { mount as marketingMount } from 'marketing/MarketingApp'
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MarketingApp = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const marketingRef = useRef<HTMLDivElement>(null)
  const isFirstRef = useRef(true)

  useEffect(() => {
    const handleMarketingNavigation = (e: Event) => {
      const marketingPathname = (e as CustomEvent<string>).detail

      if (marketingPathname === location.pathname) return
      navigate(marketingPathname)
    }

    window.addEventListener('[marketing] navigated', handleMarketingNavigation)

    return () =>
      window.removeEventListener(
        '[marketing] navigated',
        handleMarketingNavigation
      )
  }, [location])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[container] navigated`, { detail: location.pathname })
    )
  }, [location])

  useEffect(() => {
    if (!isFirstRef.current) return

    marketingMount({
      mountPoint: marketingRef?.current,
      strategy: 'memory',
      initialPathname: location.pathname,
    })
    isFirstRef.current = false
  }, [location])

  return <div ref={marketingRef}></div>
}

export default MarketingApp
