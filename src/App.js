import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Gif from './components/Gif';
function App() {

  const apiKey= 'HNJftEP2pS9HW0mnq71d81FfbB7IdDoF'
  
  return (
    <div className="App">
      <Header/>
      <Gif/>
    </div>
  );
}

export default App;
