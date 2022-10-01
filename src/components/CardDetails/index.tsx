import './style.css';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CardDetailsProps {
    title: string;
    subtitle: string;
    
}

function CardDetails() {
  return (
    <Card>
        <Card.Body>
            <Card.Title className='fs-1 text-center'>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 fs-3 text-muted text-center">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Link href="#" className='d-flex justify-content-center align-items-center'>Teste</Card.Link>
        </Card.Body>
  </Card>
  )
}

export default CardDetails