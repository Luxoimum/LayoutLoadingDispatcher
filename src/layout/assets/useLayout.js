import { useContext } from 'react';
import LayoutContext from './LayoutProvider';

export default function useLayout() {
  const context = useContext(LayoutContext);
  console.log(context);
  return context;
}