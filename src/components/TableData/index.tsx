import { Link } from 'react-router-dom';

interface TableDataProps {
    content: any;
    route: string;
}

function TableData({ content, route }: TableDataProps) {
  return (
    <td>
        <Link to={route}>{content}</Link>
    </td>
  )
}

export default TableData