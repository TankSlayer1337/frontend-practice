import { useState, useEffect } from 'react';
import { DuckData } from './duck-data';
import Spinner from '../spinner/Spinner';

const RandomDuck = () => {
  const [duckData, setDuckData] = useState<DuckData | undefined>(undefined);
  const [awaitingResponse, setAwaitingResponse] = useState<boolean>(true);

  const fetchDuck = async () => {
    setAwaitingResponse(true);
    try {
      const url = 'https://corsproxy.io/?' + encodeURIComponent('https://random-d.uk/api/v2/quack');
      const response = await fetch(url, {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Duck response was not ok.');
      }

      const data = await response.json();
      setDuckData(data);
    } catch (error) {
      console.error('Error: ', error);
    }

    setAwaitingResponse(false);
  }

  function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  useEffect(() => {
    fetchDuck();
  }, []);

  return (
    <div>
      <h2>Random Duck</h2>
      <p>Courtesy of Geoffrey Westhoff</p>
      <button onClick={fetchDuck}>New duck</button>
      {awaitingResponse ? <Spinner></Spinner> :
        <div>
          <img src={duckData?.url} alt='Duck'></img>
          <p>{duckData?.message}</p>
        </div>
      }
    </div>
  );
}

export default RandomDuck;