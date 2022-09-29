import './styles.css';

import { TABLE_PEOPLE_HEAD } from '../../constants/TABLE_PEOPLE_HEAD';
import { baseUrl as swapApi } from '../../services/swapApi';
import { DataPeopleProps } from '../../components/DataPeople/types';

import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import TableHead from '../../components/TableHead';
import TableHeadRow from '../../components/TableHeadRow';
import TableBody from '../../components/TableBody';
import Loading from '../../components/Loading';
import ErrorAlert from '../../components/ErrorAlert';
import DataPeople from '../../components/DataPeople/DataPeople';
import FormFilters from '../../components/FormFilters';
import SelectInput from '../../components/SelectInput';

function Home() {
  const [people, setPeople] = useState<DataPeopleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>('');
  const [countPage, setCountPage] = useState<string>('')

  const getPeoples = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`${swapApi}/people`);
      const data = await response.json();

      setPeople(data.results);
    } catch (err) {
      setError(true);
      setErrorMessage(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPeoples();
  }, []);


  return (
    <Container>
      {loading && (<Loading />)}
      {error && (<ErrorAlert text={errorMessage} />)}
      <FormFilters>
        <SelectInput 
            method="Test"
            data={["Blue", "Red", "Green"]}
            disabledInputText="Eyes Color"
        />

        <SelectInput 
            method="Test"
            data={["Blue", "Red", "Green"]}
            disabledInputText="Eyes Color"
        />

        <SelectInput 
            method="Test"
            data={["Blue", "Red", "Green"]}
            disabledInputText="Eyes Color"
        />
      </FormFilters>
       <Table striped bordered hover variant="dark" className="mt-4 mb-4">
        <TableHead>
          {TABLE_PEOPLE_HEAD.EN.title.map((column, index) => (
            <TableHeadRow key={index} title={column} />
          ))}
        </TableHead>
        <TableBody>
          {people.map((person, index) => (
            <DataPeople 
              key={index}
              name={person.name}
              height={person.height}
              mass={person.mass}
              hair_color={person.hair_color}
              skin_color={person.skin_color}
              eye_color={person.eye_color}
              birth_year={person.birth_year}
              gender={person.gender}
              homeworld={person.homeworld}
              films={person.films}
              vehicles={person.vehicles}
              starships={person.starships}
              url={person.url}
            />
          ))}
        </TableBody>
    </Table>
    </Container>
  )
}

export default Home