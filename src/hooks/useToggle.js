import { useState, useCallback } from 'react'

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => setState((prev) => !prev), [])

  return [state, toggle]
}

export default useToggle
