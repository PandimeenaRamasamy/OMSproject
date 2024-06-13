
import './Sidenavbar.scss'
import Thalapa from '../../assets/images/thalappakatti-logo-anim.png'
import dropdown from '../../assets/images/down-arrow.png'
import dollar from '../../assets/images/dollar.png'
import group from '../../assets/images/group.png'
import handimg from '../../assets/images/handimg.png'
import key from '../../assets/images/key.png'
import menu from '../../assets/images/menu.png'
import offer from '../../assets/images/offer.png'
import pay from '../../assets/images/pay.png'
import printing from '../../assets/images/printing.png'
import statistics from '../../assets/images/statistics.png'
import userimg from '../../assets/images/userimg.png'
import React, { useState } from 'react';

// import Registration from '../Registration/Registration'

const Sidenavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isopen,setisopen]=useState(false);
    const toggle=()=>{
        setisopen(!isopen);
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
   
    return (
        <>
         <div className='sidenav' >
            
            <div className='pagelinks'>
            <div className='resnamelocation'>
                <img src={Thalapa} alt="" className='resimg' />
                <div>
                    <br />
                    <p className='resname'  >Thalapakatti Biriyan</p>
                    <div className="dropdown">
                        <br />
                        <p className='reslocation' >Aarapalayam</p>

                        <button className="dropdown-toggle" onClick={toggleDropdown}>
                            <img src={dropdown} alt=""   />
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#option1" className="dropdown-item">Option 1</a>
                                <a href="#option2" className="dropdown-item">Option 2</a>
                                <a href="#option3" className="dropdown-item">Option 3</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
                

                <div className='pagelink pg1'>
                    <img src={dollar} alt="" />
                    <p  >Business</p>
                </div>
                <div className='pagelink pg2' >
                <img src={group} alt="" />
                    <p >Employees setup</p>
                </div>
                <div className='pagelink pg3'>
                <img src={handimg} alt="" />
                    <p >Customer Management</p>
                </div>
                <div className='pagelink pg4'>
                    <img src={userimg} alt="" />
                    <p >Outlet Management</p>
                </div>
                <div className='pagelink pg5' >
                <img src={key} alt="" />
                    <p >Roles & Access</p>
                </div>
                <div className='pagelink pg6'>
                <img src={menu} alt="" />
                    <p >Menu</p>
                </div>
                <div className='pagelink pg7'>
                    <img src={offer} alt="" />
                    <p >Offer Management</p>
                </div>
                <div className='pagelinksub pg8'>
                    <p >Offers</p>
                    <p >Campaigns</p>
                </div>
                <div className='pagelink pg9' >
                <img src={statistics} alt="" />
                    <p >Reports & Insights</p>
                </div>
                <div className='pagelink pg10'>
                <img src={printing} alt="" />
                    <p >Printer settings</p>
                </div>
                <div className='pagelink pg11'>
                <img src={pay} alt="" />
                    <p >Payments</p>
                </div>
               

            </div>
        </div>
       </>
       
    )
}

export default Sidenavbar