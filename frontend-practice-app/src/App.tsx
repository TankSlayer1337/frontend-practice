import reactLogo from './assets/react.svg'
import './App.css'
import StoicQuote from './stoic-quote/StoicQuote'
import RandomDuck from './random-duck/RandomDuck'
import Inception from './inception/Inception'
import Home from './home/Home'
import { useState } from 'react'

interface ContentItem {
  name: string,
  content: JSX.Element
}

function App() {
  const [content, setContent] = useState<JSX.Element>(<Home></Home>);
  const contentItems: ContentItem[] = [
    { name: 'Home', content: <Home></Home> },
    { name: 'Stoic Quotes', content: <StoicQuote></StoicQuote> },
    { name: 'Ducks', content: <RandomDuck></RandomDuck> },
    { name: 'Inception', content: <Inception></Inception> }
  ];

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
          {contentItems.map((contentItem) =>
            <li key={contentItem.name} className='navbar'>
              <button onClick={() => setContent(contentItem.content)}>{contentItem.name}</button>
            </li>)}
        </ul>
      </div>

      {content}
    </>
  )
}

export default App
