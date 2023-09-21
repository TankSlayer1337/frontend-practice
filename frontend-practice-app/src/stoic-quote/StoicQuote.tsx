import { useState, useEffect } from 'react';
import { QuoteData } from './quote-data';
import Spinner from '../spinner/Spinner';

const StoicQuote = () => {
  const [quoteData, setQuoteData] = useState<QuoteData | undefined>(undefined);
  const [awaitingResponse, setAwaitingResponse] = useState<boolean>(true);

  const fetchQuote = async () => {
    setAwaitingResponse(true);
    try {
      const response = await fetch('https://api.themotivate365.com/stoic-quote', {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Stoic quote response was not ok.');
      }

      const data = await response.json();
      setQuoteData(data);
    } catch (error) {
      console.error('Error: ', error);
    }

    setAwaitingResponse(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Stoic Quote</h2>
      <p>Courtesy of <a href='https://github.com/tlcheah2/stoic-quote-lambda-public-api'>Tek Loon</a></p>
      {awaitingResponse ? <Spinner></Spinner> :
        <div>
          <q>{quoteData?.quote}</q>
          <p>{quoteData?.author}</p>
        </div>
      }
      <button onClick={fetchQuote}>New quote</button>
    </div>
  );
}

export default StoicQuote;