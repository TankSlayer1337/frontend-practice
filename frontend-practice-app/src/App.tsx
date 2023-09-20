import reactLogo from './assets/react.svg'
import './App.css'
import StoicQuote from './stoic-quote/StoicQuote'
import RandomDuck from './random-duck/RandomDuck'
import Inception from './inception/Inception'
import Home from './home/Home'
import { useState } from 'react'

function App() {
  const [content, setContent] = useState<JSX.Element>(<Home></Home>);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Frontend Practice</h1>
      <div>
        <ul>
          <li><button onClick={() => setContent(<Home></Home>)}>Home</button></li>
          <li><button onClick={() => setContent(<StoicQuote></StoicQuote>)}>Stoic Quotes</button></li>
          <li><button onClick={() => setContent(<RandomDuck></RandomDuck>)}>Ducks</button></li>
          <li><button onClick={() => setContent(<Inception></Inception>)}>Inception</button></li>
        </ul>
      </div>

      {content}
    </>
  )
}

export default App
