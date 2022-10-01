import { TableHeadRowProps } from './types';

function TableHeadRow({title}: TableHeadRowProps) {
  return (
    <th>{title}</th>
  )
}

export default TableHeadRow;