import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={ <Projects />}/>
      </Routes>
      <Background />
    </div>
  );
}

export default App;
