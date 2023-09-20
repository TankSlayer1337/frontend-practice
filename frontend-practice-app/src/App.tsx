import reactLogo from './assets/react.svg'
import './App.css'
import StoicQuote from './stoic-quote/StoicQuote'
import RandomDuck from './random-duck/RandomDuck'
import Inception from './inception/Inception'
import Home from './home/Home'
import { useState } from 'react'

enum Content {
  Home,
  StoicQuote,
  RandomDuck,
  Inception
}

function App() {
  const [content, setContent] = useState<Content>(Content.Home);

  const renderContent = (content: Content) => {
    switch(content) {
      case Content.StoicQuote:
        return <StoicQuote></StoicQuote>;
      case Content.RandomDuck:
        return <RandomDuck></RandomDuck>;
      case Content.Inception:
        return <Inception></Inception>;
      default:
        return <Home></Home>;
    }
  }

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
          <li><button onClick={() => setContent(Content.Home)}>Home</button></li>
          <li><button onClick={() => setContent(Content.StoicQuote)}>Stoic Quotes</button></li>
          <li><button onClick={() => setContent(Content.RandomDuck)}>Ducks</button></li>
          <li><button onClick={() => setContent(Content.Inception)}>Inception</button></li>
        </ul>
      </div>

      {renderContent(content)}
    </>
  )
}

export default App
