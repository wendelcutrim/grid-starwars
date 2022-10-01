import Pagination from 'react-bootstrap/Pagination';

import './style.css';

interface PaginationButtonProps {
  content: string | number;
  handleButtonPrev?: any;
  handleButtonNext?: any
}

function PaginationButton(props: PaginationButtonProps) {
  return (
    <div className='pagination-custom d-flex justify-content-center align-items-center'>
      <Pagination size='lg' className='dark'>
        <Pagination.Prev onClick={props.handleButtonPrev}/> 
        <Pagination.Item>{props.content}</Pagination.Item>
        <Pagination.Next onClick={props.handleButtonNext}/>
      </Pagination>
    </div>
  )
}

export default PaginationButton
