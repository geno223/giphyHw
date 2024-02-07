import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Gif from './components/Gif';
import { useState } from 'react';
import Button from './components/Button';
function App() {
  const [gif, setGif] = useState("")

  const handleSubmit =async ()=> {
    const apiKey= 'HNJftEP2pS9HW0mnq71d81FfbB7IdDoF'
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  }
  return (
    <div className="App">
      <Header/>
      <Button submit={handleSubmit}/>
      <Gif/>
    </div>
  );
}

export default App;
