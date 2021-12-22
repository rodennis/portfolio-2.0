import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Background from './components/Background/Background';
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/contact' element={ <Contact />}/>
      </Routes>
      <Background />
    </div>
  );
}

export default App;
