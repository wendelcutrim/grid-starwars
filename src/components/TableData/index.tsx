import { Link } from 'react-router-dom';

import { TableDataProps } from './types';

function TableData({ content, route }: TableDataProps) {
  return (
    <td>
        <Link to={route}>{content}</Link>
    </td>
  )
}

export default TableData