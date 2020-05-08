import { useContext } from 'react'
import LayoutContext from './LayoutProvider'

export default function useLayout() {
  return useContext(LayoutContext);
}