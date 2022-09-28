import './styles.css';
import { Container } from 'react-bootstrap';

import { TABLE_PEOPLE_HEAD } from '../../constants/TABLE_PEOPLE_HEAD';

import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TableHead from '../../components/TableHead';
import TableHeadRow from '../../components/TableHeadRow';

/* interface TablePeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
} */

function Home() {
  return (
    <Container>
       <Table striped bordered hover variant="dark" className="mt-4 mb-4">
        <TableHead>
          {TABLE_PEOPLE_HEAD.EN.title.map((column, index) => (
            <TableHeadRow key={index} title={column} />
          ))}
        </TableHead>
        
    </Table>
    </Container>
  )
}

export default Home