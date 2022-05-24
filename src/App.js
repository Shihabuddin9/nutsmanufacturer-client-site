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
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import MyReview from './pages/Dashboard/MyReview';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Reviews from './pages/HomePages/Reviews';


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

        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
        </Route>

        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
