import './App.css';
import CallToAction from './components/CallToAction/CallToAction';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials/Socials'
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <CallToAction />
      <Socials />
      <Navbar />
      <Background />
    </div>
  );
}

export default App;
