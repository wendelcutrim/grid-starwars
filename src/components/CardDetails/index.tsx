import './style.css';

import { CardDetailsProps } from './types';

import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function CardDetails(props: CardDetailsProps) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className='fs-1 text-center'>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 fs-3 text-muted text-center">{props.age}, {props.gender}</Card.Subtitle>
                <Card.Text>
                    Hey there, my name is {props.name} from {props.homeWorldName}, i have {props.age},  {props.hairColor !== 'none' && props.hairColor !== 'n/a' && props.hairColor !== 'null' ? 'my hair is ' + props.hairColor : "I don't have hair 😔"} and my eyes are {props.eyeColor}.
                    In my home the climate is {props.climate} and the terrain is {props.terrain}. You can know more about me in {props.amountMovies > 1 ? props.amountMovies + ' movies' : props.amountMovies + ' movie' } .
                </Card.Text>
                <LinkContainer to="/">
                    <Card.Link className='d-flex justify-content-center align-items-center'>{props.textLinkButton}</Card.Link>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}

export default CardDetails