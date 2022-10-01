import { TableBodyProps } from './types';

function TableBody({ children }: TableBodyProps) {
  return (
    <tbody>
        {children}
    </tbody>
  )
}

export default TableBody