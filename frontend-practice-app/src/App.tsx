import reactLogo from './assets/react.svg'
import './App.css'
import StoicQuote from './stoic-quote/StoicQuote'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Frontend Practice</h1>
      <p>
        This is a place for me to improve my frontend skills. Checkout the <a href="https://github.com/TankSlayer1337/frontend-practice">source code</a>.
      </p>
      <h2>Resources</h2>
      <p>
        <a href='https://github.com/public-apis/public-apis'>This list</a> of public, free to use APIs have been very useful in adding fun content to this website.
      </p>

      <StoicQuote></StoicQuote>
    </>
  )
}

export default App
