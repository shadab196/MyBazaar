
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Policy from './pages/policy';
import Pagenotfound from './pages/pagenotfound';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';


function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Homepage />} />
      <Route path = "/register" element={<Register/>} />
      <Route path = "/login" element={<Login/>} />
      <Route path ='/dashboard' element = {<PrivateRoute/>}>
      <Route path = "" element={<Dashboard/>} />
      </Route>
     
      
      <Route path = "/about" element={<About />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "/policy" element={<Policy />} />
      <Route path = "*" element={<Pagenotfound />} />
      
    </Routes>
    </>
  );
}

export default App;
