import './style.css'

import imgError from '../../assets/img/not-found.svg';

import { Container } from 'react-bootstrap';


function NotFoundPage() {
  return (
    <Container>
      <div className="not-found d-flex flex-column justify-content-around align-items-center w-100 min-vh-100">
        <h1 className="fw-bold">Ops... Something is Wrong</h1>
        <img 
          src={imgError} 
          alt="Error 404 image"
        />
      </div>
    </Container>
  )
}

export default NotFoundPage