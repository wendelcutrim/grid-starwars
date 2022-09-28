interface TableHeadProps {
  children?: React.ReactNode
}

function TableHead({children}: TableHeadProps) {
  return (
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  )
}

export default TableHead;