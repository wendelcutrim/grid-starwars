import { TableHeadProps } from './types';

function TableHead({ children }: TableHeadProps) {
  return (
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  )
}

export default TableHead;