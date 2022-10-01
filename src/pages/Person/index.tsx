import './style.css'

import { baseUrl as swapApi } from '../../services/swapApi';

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container, Accordion } from 'react-bootstrap';
import Loading from '../../components/Loading';
import ErrorAlert from '../../components/ErrorAlert';
import CardDetails from '../../components/CardDetails';

interface PersonDataProps {
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

interface HomelandDataProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residentes: string[];
  films: string[];
  url: string;
}

function Person() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [person, setPerson] = useState<PersonDataProps | any>('');
  const [homeworld, setHomeWorld] = useState<HomelandDataProps | any>('');
  const [amountMovies, setAmountMovies] = useState<number>(0)

  const getPerson = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${swapApi}/people/${id}`);

      if (response.status != 200) {
        navigate('/*');
        throw new Error("Not Found");
      };

      const data = await response.json();

      console.log(response.status)

      const fetchHomeWorld = await fetch(data.homeworld);
      const dataHomeWorld = await fetchHomeWorld.json();

      setPerson(data);
      setAmountMovies(data.films.length);
      setHomeWorld(dataHomeWorld);
    } catch (err) {
      setError(true);
      console.log(err)
      setErrorMessage(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <Container>
      {loading && (<Loading />)}
      {error && (<ErrorAlert text={errorMessage} />)}
      {!error && (
          <CardDetails 
                name={person.name}
                age={person.birth_year}
                gender={person.gender}
                homeWorldName={homeworld.name}
                hairColor={person.hair_color}
                eyeColor={person.eye_color}
                terrain={homeworld.terrain}
                climate={homeworld.climate}
                amountMovies={amountMovies}
                textLinkButton="Voltar"
          />
      )}
    </Container>
  )
}

export default Person