
import './App.css';
import Sidenavbar from './Components/Sidenavbar/Sidenavbar'
import Outlet from './Components/Outletnavbar/Outlet'
import Home from './Components/Homepage/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      {/* <Sidenavbar/>
      <Outlet/>
      <Footer/>
      <Home/> */}
       <Sidenavbar />,
       {/* <Home/> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outlet" element={  <Outlet />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
   
     

      
      



      

    </div>
  );
}

export default App;
