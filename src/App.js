import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import FitureImg from './pages/HomePages/FitureImg';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<FitureImg></FitureImg>}></Route>
      </Routes>
    </div>
  );
}

export default App;
