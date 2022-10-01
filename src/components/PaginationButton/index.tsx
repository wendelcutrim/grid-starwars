import './style.css';

import { PaginationButtonProps } from './types';

import Pagination from 'react-bootstrap/Pagination';

function PaginationButton(props: PaginationButtonProps) {
  return (
    <div className='pagination-custom d-flex justify-content-center align-items-center'>
      <Pagination size='lg' className='dark'>
        <Pagination.First onClick={props.firstPage} />
        <Pagination.Prev onClick={props.handleButtonPrev} />
        <Pagination.Item>{props.content}</Pagination.Item>
        <Pagination.Next onClick={props.handleButtonNext} />
        <Pagination.Last onClick={props.finalPage}/>
      </Pagination>
    </div>
  )
}

export default PaginationButton
