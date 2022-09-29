import { baseUrl } from '../../services/swapApi';
import { useState, useEffect } from 'react';

import { DataPeopleProps } from './types';

import TableData from '../TableData';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert';

function DataPeople({...rest}: DataPeopleProps, index: number) {
  const [homeland, setHomeland] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>('');

  const getHomelandName = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(rest.homeworld);
      const data = await response.json();
  
      setHomeland(data.name);
    } catch(err) {
      setError(true);
      setErrorMessage(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getHomelandName();
  }, [rest.homeworld]);

  const getPersonId = (url: string) => {
    const array = url.split('people/');
    const arraySplited = array.splice(1,1)
    const personId = arraySplited.shift();
    return personId;
  };

  return (
    <tr key={index}>
      {error && (<ErrorAlert text={errorMessage} />)}
      <TableData content={rest.name} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.height} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.mass} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.hair_color} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.skin_color} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.eye_color} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.birth_year} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.gender} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={homeland} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.films.length} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.vehicles.length} route={`/people/${getPersonId(rest.url)}`}/>
      <TableData content={rest.starships.length} route={`/people/${getPersonId(rest.url)}`}/>
    </tr>
  )
}

export default DataPeople