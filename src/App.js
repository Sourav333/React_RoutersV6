import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* using direct link */}

        {/* <Route path='/' element={<div>I am home page</div>} />
        <Route path='/contact' element={<div>I am Contact page</div>} />
        <Route path='/about' element={<div>I am About page</div>} /> */}

        {/* Doing Routes using Components */}

        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
