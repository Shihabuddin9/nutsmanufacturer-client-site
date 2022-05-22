import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePages/Home';
import Footer from './pages/Shared/Footer';
import NotFound from './pages/NotFound/NotFound';
import ContactNow from './pages/HomePages/ContactNow';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contactNow' element={<ContactNow></ContactNow>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
