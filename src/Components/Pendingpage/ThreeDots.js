import React, { useState,useContext } from 'react'
import "./ThreeDots.scss";
import morevertical from "../../assets/images/more-vertical.jpg"
import { LuCopyPlus } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import  {LocationContext} from '../LocationProvider'


const ThreeDots = () => {
  let navigate = useNavigate();
    const[threedots,setThreeDots]=useState(false)
    const handleedit=()=>{
      navigate('/outlet/Registration',{ state: { pagename: "Registration" } });
    }
    
  const { deleteoutlet,setdeleteoutlet
  
  } = useContext(LocationContext);
  return (
    <>
    {threedots?(
    <div className='ThreeDots-container'>
        <LuCopyPlus className='copy'  />
    <FaRegEdit className='copy' onClick={handleedit}/>
    
    <ImBin className='copy' onClick={()=>{
      setdeleteoutlet(true)
    }} />
    </div>
):""}
    <button onClick={()=>setThreeDots(!threedots)} className='dots'><img src={morevertical}></img></button>
    </>

  )
}

export default ThreeDots











// import React, { useState, useContext } from 'react';
// import "./ThreeDots.scss";
// import morevertical from "../../assets/images/more-vertical.jpg";
// import { LuCopyPlus } from "react-icons/lu";
// import { FaRegEdit } from "react-icons/fa";
// import { ImBin } from "react-icons/im";
// import { useNavigate } from 'react-router-dom';
// import { LocationContext } from '../LocationProvider';

// const ThreeDots = ({ onDuplicate }) => {
//   let navigate = useNavigate();
//   const [threedots, setThreeDots] = useState(false);

//   const handleEdit = () => {
//     navigate('/outlet/Registration', { state: { pagename: "Registration" } });
//   };

//   const { deleteoutlet, setdeleteoutlet ,duplicatePage} = useContext(LocationContext);

//   return (
//     <>
//       {threedots ? (
//         <div className='ThreeDots-container'>
//           <LuCopyPlus className='copy' onClick={onDuplicate} />
//           <FaRegEdit className='copy' onClick={handleEdit} />
//           <ImBin className='copy' onClick={() => {
//             setdeleteoutlet(true);
//           }} />
//         </div>
//       ) : ""}
//       <button onClick={() => setThreeDots(!threedots)} className='dots'><img src={morevertical}></img></button>
//     </>
//   );
// };

// export default ThreeDots;
