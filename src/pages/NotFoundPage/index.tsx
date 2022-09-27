import imgError from '../../assets/img/not-found.svg';

import { Container } from 'react-bootstrap';


function NotFoundPage() {
  return (
    <Container>
      <h1>Ops... Something its Wrong</h1>
      <img src={imgError} alt="Error 404" />
    </Container>
  )
}

export default NotFoundPage