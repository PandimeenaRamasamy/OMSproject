import React ,{useState}from 'react'
import './Updateoutlet.scss'
import Registration from '../Registration/PostData';
import StepperForm from '../Onboarding/Steperform/Stepform';
import { act } from 'react-dom/test-utils';
import  OutletStepperForm from  '../Outlet Details/OutletStepperForm/OutletStepperForm';

const Updateoutlet = ({dataapi}) => {
    const categories = ['Registration', 'OnBoarding', 'Outlet Details','Subscription'];

  
    const [activeCategory, setActiveCategory] = useState('Registration');

    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
      
    };
    console.log(dataapi[0].location.id)

    


  return (
    <>
    <div className='outletnav'>
        <p>Outlet Management</p>
       
        <nav className="navbar">
            <ul className="nav-list">
                {categories.map((category,index) => (
                    <li
                        key={category}
                        className={`nav-item  nav${index} ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))}
              
            </ul>
        </nav>


      
    </div>
    {activeCategory === 'Registration' && <Registration dataapi={dataapi}/>}
    {activeCategory === 'OnBoarding' && <StepperForm/>}
    {activeCategory === 'Outlet Details' && <OutletStepperForm/>}
  
        {/* {activeCategory === 'Veg' && <Vegdispla/>}
        {activeCategory === 'Non-Veg' && <Nonvegdidsplay/>} */}
   
    </>
  )
}

export default Updateoutlet