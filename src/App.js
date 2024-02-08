import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Gif from './components/Gif';
import { useState } from 'react';
import Button from './components/Button';
function App() {
  const [url, setUrl] = useState()

  const handleSubmit =async ()=> {
    const apiKey= 'HNJftEP2pS9HW0mnq71d81FfbB7IdDoF'
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    let res = await fetch(url)
    let json = await res.json()
    console.log(json.data.images.fixed_height.url)
    setUrl(json.data.images.fixed_height.url)
  }
  return (
    <div className="App">
      <Header/>
      <Button submit={handleSubmit}/>
      <Gif url={url}/>
    </div>
  );
}

export default App;
