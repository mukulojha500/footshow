import './App.css';
import Home from './components/Home';
import Tournament from './components/Tournament'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='tournament' element={<Tournament />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
