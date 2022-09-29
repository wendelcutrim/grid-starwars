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
  const [genres, setGenres] = useState<string[]>([]);
  const [genre, setGenre] = useState<string>('all');
  const [birthYearArray, setBirthYearArray] = useState<string[]>([]);
  const [birthYear, setBirthYear] = useState<string>('all');
  const [hairColorArray, setHairColorArray] = useState<string[]>([]);
  const [hairColor, setHairColor] = useState<string>('all');
  
  const [page, setPage] = useState<number>(1);

  const getPeople = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`${swapApi}/people?page=${page}`);
      const data = await response.json();

      setPeople(data.results);
    } catch (err) {
      setError(true);
      setErrorMessage(err);
    }

    setLoading(false);
  };

  const getAllGenres = async () => {
    setLoading(true);

    try {
        const response = await fetch(`${swapApi}/people?page=${page}`);
        const data = await response.json();
        const genresResult = data.results.map((person: DataPeopleProps) => person.gender);
    
        setGenres(removeDuplicateData(genresResult));
    } catch(err) {
        setError(true);
        setErrorMessage(err);
    }

    setLoading(false);    
  };

  const getAllHairColors = async () => {
    setLoading(true);

    try {
        const response = await fetch(`${swapApi}/people?page=${page}`);
        const data = await response.json();
        const hairColorResults = data.results.map((person: DataPeopleProps) => person.hair_color);
    
        setHairColorArray(removeDuplicateData(hairColorResults));
    } catch(err) {
        setError(true);
        setErrorMessage(err);
    }

    setLoading(false);    
  };

  const getAllBirthYears = async () => {
    setLoading(true);

    try {
        const response = await fetch(`${swapApi}/people?page=${page}`);
        const data = await response.json();
        const birthYearsResult = data.results.map((person: DataPeopleProps) => person.birth_year);
    
        setBirthYearArray(removeDuplicateData(birthYearsResult));
    } catch(err) {
        setError(true);
        setErrorMessage(err);
    }

    setLoading(false);    
  };

  const removeDuplicateData = (list: []) => {
    const data = list.filter((item, index) => list.indexOf(item) === index);
    return data;
  };

  useEffect(() => {
    getPeople();
    getAllGenres();
    getAllHairColors();
    getAllBirthYears();
  }, [page, hairColor, birthYear]);


  return (
    <Container>
      {loading && (<Loading />)}
      {error && (<ErrorAlert text={errorMessage} />)}
      <FormFilters>
        <SelectInput 
            method={genres}
            data={genres}
            labelName="Genres"
            option={genre}
        />

        <SelectInput 
            method={hairColorArray}
            data={hairColorArray}
            labelName="Hair Color"
            option={hairColor}
        />

        <SelectInput 
            method={birthYearArray}
            data={birthYearArray}
            labelName="Birth Years"
            option={birthYear}
        />
      </FormFilters>
      
       <Table striped bordered hover variant="dark" className="mt-4 mb-4">
            <TableHead>
                {TABLE_PEOPLE_HEAD.EN.title.map((column, index) => (
                    <TableHeadRow key={index} title={column} />
                ))}
            </TableHead>

            <TableBody>
                {people.map((person, index) => {
                    if(genre === 'all' && hairColor === 'all' && birthYear === 'all' ) {
                        return (
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
                        )
                    }
                })}
            </TableBody>
        </Table>
    </Container>
  )
}

export default Home