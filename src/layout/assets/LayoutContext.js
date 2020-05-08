import { createContext } from 'react'

const LayoutContext = createContext({
  state: {},
  isLoading: true,
  setLayoutState: () => {}
});

export default LayoutContext;