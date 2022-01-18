import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio.js';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body class="bg-dark text-light">
        <Portfolio />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
