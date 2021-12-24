import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={ <Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
