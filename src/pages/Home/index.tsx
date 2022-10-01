import './styles.css';

import { TABLE_PEOPLE_HEAD } from '../../constants/TABLE_PEOPLE_HEAD';
import { baseUrl as swapApi } from '../../services/swapApi';

import { Container, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import TableHead from '../../components/TableHead';
import TableHeadRow from '../../components/TableHeadRow';
import TableBody from '../../components/TableBody';
import Loading from '../../components/Loading';
import ErrorAlert from '../../components/ErrorAlert';
import DataPeople from '../../components/DataPeople/DataPeople';
import PaginationButton from '../../components/PaginationButton';
import PeopleFilters from '../../components/PeopleFilters';

interface DataPeopleProps {
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
	vehicles: string[];
	starships: string[];
	url: string;
}

function Home() {
  const [people, setPeople] = useState<DataPeopleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>('');
  const [genders, setGenders] = useState<string[]>([]);
  const [gender, setGender] = useState<string>('all');
  const [birthYearArray, setBirthYearArray] = useState<string[]>([]);
  const [birthYear, setBirthYear] = useState<string>('all');
  const [hairColorArray, setHairColorArray] = useState<string[]>([]);
  const [hairColor, setHairColor] = useState<string>('all');

  const [countData, setCountData] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const totalPages = Math.ceil(countData / people.length);

  const getPeople = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${swapApi}/people?page=${page}`);
      const data = await response.json();

      setCountData(data.count);
      setPeople(data.results);
    } catch (err) {
      setError(true);
      setErrorMessage(err);
    }

    setLoading(false);
  };

  const getAllGenders = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${swapApi}/people?page=${page}`);
      const data = await response.json();
      const gendersResult = data.results.map((person: DataPeopleProps) => person.gender);

      setGenders(removeDuplicateData(gendersResult));
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
      setError(true);
      setErrorMessage(err);
    }

    setLoading(false);
  };

  const removeDuplicateData = (list: []) => {
    const data = list.filter((item, index) => list.indexOf(item) === index);
    return data;
  };

  const handleNextPage = () => {
    if (page == 9) {
      setPage(1);
    } else {
      setPage(page + 1)
    }

  };

  const handlePrevPage = () => {
    if (page === 1) {
      setPage(totalPages)
    } else {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    getPeople();
    getAllGenders();
    getAllHairColors();
    getAllBirthYears();
  }, [page, gender, hairColor, birthYear]);

  return (
    <div>
      <Container>
        {loading && (<Loading />)}
        {error && (<ErrorAlert text={errorMessage} />)}

        <PeopleFilters
          genderArray={genders}
          hairColorArray={hairColorArray}
          birthYearArray={birthYearArray}

          eventGender={setGender}
          eventHairColor={setHairColor}
          eventBirthYear={setBirthYear}
        />


        <Table striped bordered hover variant="dark" className="mt-4 mb-4">
          <TableHead>
            {TABLE_PEOPLE_HEAD.EN.title.map((column, index) => (
              <TableHeadRow key={index} title={column} />
            ))}
          </TableHead>

          <TableBody>
            {people.map((person, index) => {
              if (gender === 'all' && hairColor === 'all' && birthYear === 'all') {
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
              } else if (gender === 'all' && hairColor !== 'all' && birthYear === 'all') {
                if (person.hair_color === hairColor) {
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
              } else if (gender === 'all' && hairColor === 'all' && birthYear !== 'all') {
                if (person.birth_year === birthYear) {
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
              } else if (gender === 'all' && hairColor !== 'all' && birthYear !== 'all') {
                if (person.hair_color === hairColor && person.birth_year === birthYear) {
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
              } else if (gender !== 'all' && hairColor === 'all' && birthYear === 'all') {
                if (person.gender === gender) {
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
              } else if (gender !== 'all' && hairColor !== 'all' && birthYear === 'all') {
                if (person.gender === gender && person.hair_color === hairColor) {
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
              } else if (gender !== 'all' && hairColor === 'all' && birthYear !== 'all') {
                if (person.gender === gender && person.birth_year === birthYear) {
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
              }
            })}
          </TableBody>
        </Table>
        <PaginationButton
          content={page}
          firstPage={() => setPage(1)}
          handleButtonNext={handleNextPage}
          handleButtonPrev={handlePrevPage}
          finalPage={() => setPage(totalPages)}
        />
      </Container>
    </div>
  )
}

export default Home