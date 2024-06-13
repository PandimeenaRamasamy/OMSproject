import React ,{useState}from 'react'
import './Outlet.scss'
import Registration from '../Registration/PostData';
import StepperForm from '../Onboarding/Steperform/Stepform';
import { act } from 'react-dom/test-utils';
import  OutletStepperForm from  '../Outlet Details/OutletStepperForm/OutletStepperForm';

const Outlet = () => {
    const categories = ['Registration', 'OnBoarding', 'Outlet Details','Subscription'];

  
    const [activeCategory, setActiveCategory] = useState('Registration');

    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
      
    };
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
    {activeCategory === 'Registration' && <Registration/>}
    {activeCategory === 'OnBoarding' && <StepperForm/>}
    {activeCategory === 'Outlet Details' && <OutletStepperForm/>}
  
        {/* {activeCategory === 'Veg' && <Vegdispla/>}
        {activeCategory === 'Non-Veg' && <Nonvegdidsplay/>} */}
   
    </>
  )
}

export default Outlet