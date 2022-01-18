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
      <footer class="text-light bg-danger p-3" id="contact">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
