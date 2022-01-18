import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio.js';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Portfolio />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
