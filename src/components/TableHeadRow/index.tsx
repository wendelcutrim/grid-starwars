interface TableHeadRowProps {
  title: string;
};

function TableHeadRow({title}: TableHeadRowProps) {
  return (
    <th>{title}</th>
  )
}

export default TableHeadRow;