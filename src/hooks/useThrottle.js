import { useState, useEffect } from 'react'

const useThrottle = (value, limit = 1000) => {
  const [throttledValue, setThrottledValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setThrottledValue(value), limit)
    return () => clearTimeout(handler)
  }, [value, limit])

  return throttledValue
}

export default useThrottle
