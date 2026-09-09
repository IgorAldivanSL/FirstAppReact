import ReactLogo from './assets/logo.png'
import './styles.css'
//const content = [

//]

function App() {

  return (
    <div>
    <header>
      <img src={ReactLogo} alt="React logo" />
      <div>
        <h1>React.js</h1>
        <p>i.e., using the React library for rendering the UI</p>
      </div>
    </header>

    <div id="tabs">
      <menu>
        <button>Why React?</button>
        <button>Core Features</button>
        <button>Related Resources</button>
      </menu>

      <div id="tab-content">
        <ul>
          <li>React is extremely popular</li>
          <li>It makes building complex, interactive UIs a breeze</li>
          <li>It's powerful & flexible</li>
          <li>It has a very active and versatile ecosystem</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default App
