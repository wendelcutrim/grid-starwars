import { baseUrl } from '../../services/swapApi';
import { useState, useEffect } from 'react';

import TableData from '../TableData';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert';

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
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}

function DataPeople({...rest}: DataPeopleProps, index: number) {
  const [homeland, setHomeland] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>('');

  const getHomelandName = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`${baseUrl}/people/${rest.homeworld}}`);
      const data = await response.json();
  
      setHomeland(data);
    } catch(err) {
      setError(true);
      setErrorMessage(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getHomelandName();
  }, [rest.homeworld])

  return (
    <tr key={index}>
      {loading && (<Loading />)}
      {error && (<ErrorAlert text={errorMessage} />)}
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.height} route={`/people/${index + 1}`}/>
      <TableData content={rest.hair_color} route={`/people/${index + 1}`}/>
      <TableData content={rest.skin_color} route={`/people/${index + 1}`}/>
      <TableData content={rest.eye_color} route={`/people/${index + 1}`}/>
      <TableData content={rest.birth_year} route={`/people/${index + 1}`}/>
      <TableData content={rest.gender} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
      <TableData content={rest.name} route={`/people/${index + 1}`}/>
    </tr>
  )
}

export default DataPeople