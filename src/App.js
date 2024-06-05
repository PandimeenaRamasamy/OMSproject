<<<<<<< HEAD
import Delivery from "./Pages/Delivery/Delivery";

const App = () => {
  return (
    <div className="App">
      <Delivery />
    </div>
  )
=======

import './App.css';
import Sidenavbar from './Components/Sidenavbar/Sidenavbar'
import Outlet from './Components/Outletnavbar/Outlet'
import Home from './Components/Homepage/Home';
import { Routes, Route } from 'react-router-dom';
import Dinein from './Components/Dinein/Dinein'
function App() {
  return (
    <div >
      {/* <Sidenavbar/>
      <Outlet/>
      <Footer/>
      <Home/> */}
       <Sidenavbar />,
       {/* <Home/> */}
      
       {/* <Dinein/> */}

       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/outlet" element={  <Outlet />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
   
     

      
      



      

    </div>
  );
>>>>>>> origin/master
}

export default App;
