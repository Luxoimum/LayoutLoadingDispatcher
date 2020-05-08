import { useContext } from 'react'
import { LayoutContext } from './layoutDispatcher'

export default function useLayout() {
  return useContext(LayoutContext);
}