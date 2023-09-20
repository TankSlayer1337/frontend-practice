import { useState, useEffect } from 'react';
import { DuckData } from './duck-data';

const RandomDuck = () => {
  const [duckData, setDuckData] = useState<DuckData | undefined>(undefined);

  const fetchDuck = async () => {
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
  }

  useEffect(() => {
    fetchDuck();
  }, []);

  return (
    <div>
      <h2>Random Duck</h2>
      <p>Courtesy of Geoffrey Westhoff</p>
      <button onClick={fetchDuck}>New duck</button>
      {duckData &&
        <div>
          <img src={duckData.url} alt='Duck'></img>
          <p>{duckData.message}</p>
        </div>
      }
    </div>
  );
}

export default RandomDuck;