import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePages/Home';
import Footer from './pages/Shared/Footer';
import NotFound from './pages/NotFound/NotFound';
import ContactNow from './pages/HomePages/ContactNow';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signin/Signup';
import RequireAuth from './pages/Signin/RequireAuth';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/contactNow/:contactId' element={
          <RequireAuth>
            <ContactNow></ContactNow>
          </RequireAuth>
        }></Route>

        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
