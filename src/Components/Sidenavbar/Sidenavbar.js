
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
import React, { useState ,useEffect} from 'react';
import Merchants from '../Merchants/Merchants';
import { getDataRequest } from "../../redux/Actions/PostDataAction";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getLocationRequest } from "../../redux/Actions/PostDataAction";



// import Registration from '../Registration/Registration'

const Sidenavbar = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
   
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isopen,setisopen]=useState(false);
    const toggle=()=>{
        setisopen(!isopen);
    }
   
 
    // dispatch(getDataRequest())

   
   const getLocationhangle=()=>{
    console.log("clicking");

    dispatch(getDataRequest())

   }

      const datafromapi = useSelector((state) => state.postData.data);
      console.log("data api api ",datafromapi);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const  id=5;
    const loc="986654444"


    const locationdetails=[
        {
            "locationId": "01725078-24fd-4d3f-be13-011521ac46ef",
            "restaurantName": "meena"
        },
        {
            "locationId": "2640d800-2467-4cd8-b9f3-15515aa77dc0",
            "restaurantName": "meena234"
        },
        {
            "locationId": "49f8acd2-5433-423c-b559-d4340a3d7642",
            "restaurantName": "meena"
        },
        {
            "locationId": "671becde-6020-4e58-aa34-3fbb8bd35f3a",
            "restaurantName": "uyt"
        },
        {
            "locationId": "6a370a25-591c-48ab-b0c0-03ad442ddf6d",
            "restaurantName": "meena"
        },
        {
            "locationId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
            "restaurantName": "A2B"
        },
        {
            "locationId": "98aa9e4c-539d-4137-8de4-111510b781dc",
            "restaurantName": "A2B"
        },
        {
            "locationId": "cf28e073-e378-48a2-a349-344aa35ece63",
            "restaurantName": "A2B"
        }
    ]




  
    const locationdata=  [
        {
            "location": {
                "id": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                "merchantId": "8dfe7674-709d-431c-a233-628e839ecc76",
                "restaurantName": "A2B",
                "name": "arunaa",
                "phone": "+91 587283487r2",
                "email": "fdyu11@gmail.com",
                "addressLine1": "71,Kamarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
                "addressLine2": null,
                "addressLine3": null,
                "city": "Madurai",
                "state": "TamilNadu",
                "pinCode": "625009",
                "country": "India",
                "attributes": "{\"cuisines\": [\"Fast Food\", \"North Indian\", \"Fast Food\", \"North Indian\"], \"amenities\": [\"free-wifi\", \"free-wifi\"], \"gstNumber\": \"erry4639\", \"BankDetails\": {\"ifscCode\": \"SBI4365\", \"accountNumber\": \"123345789380\", \"AccountHolderName\": \"arun\"}, \"websiteLink\": \"www.rest.com\", \"FSSAIDetails\": {\"documents\": \"a5ccd036-5c81-4d24-922d-a80008cc0182\", \"isEnabled\": \"yes\", \"expirationDate\": \"024-7-12\", \"registerNumber\": \"8610764743\"}, \"FaceBookLink\": \"rest.fb.com\", \"DineInDetails\": {\"dineIn\": \"enabled\", \"checkIn\": {\"autoAssign\": \"no\", \"abandonTime\": \"00:15Am\", \"lateShowTime\": \"15:24\", \"autoCancelTime\": \"12:45\", \"maximumPeopleAllowedOnline\": \"25\", \"maximumPeopleAllowedOffline\": null}, \"highChair\": \"yes\", \"reservation\": {\"days\": [\"wednesday\", \"sunday\"], \"bufferDays\": 3, \"maximumPeopleAllowed\": \"25\", \"minimumPeopleAllowed\": \"2\", \"reservationServiceTimeTo\": \"00:00PM\", \"reservationServiceTimeFrom\": \"00:00AM\"}, \"interactiveDineIn\": \"enabled\", \"merchant4DigitValidation\": \"enabled\"}, \"instagramLink\": \"rest_insta\", \"SafetyMeasures\": \"We sanitize all tables and chairs after every use\", \"WhatsappNumber\": \"6578740562764958\", \"RestaurantNumber\": \"436789908295\"}"
            },
            "media": [
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Restaurant_Image",
                    "fileName": "oms_1718713982645_c003be04-6a29-46e1-a54b-3a081de721c6",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "LOGO",
                    "fileName": "oms_1718713927493_b63f6380-f711-4e28-b919-ede1e500fb8f",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "FSSAI_DOCUMENT",
                    "fileName": "oms_1718713944162_c9a2814b-f456-403a-9a51-4c92cab85ebc",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Restaurant_Image",
                    "fileName": "oms_1718713981633_ccbc97b6-f1dd-44d0-abb6-307fd88d346b",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Profile_Image",
                    "fileName": "oms_1718713980253_be8aa0a9-0c65-4b8c-9a76-4118013106a0",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                }
            ],
            "availabilityDtos": [
                {
                    "createdTime": null,
                    "endTime": "12:00PM",
                    "name": "breakfast",
                    "startTime": "08:00AM",
                    "weekDay": null
                },
                {
                    "createdTime": null,
                    "endTime": "00:00",
                    "name": "Lunch",
                    "startTime": "00:00",
                    "weekDay": null
                },
                {
                    "createdTime": null,
                    "endTime": "12:00PM",
                    "name": "breakfast",
                    "startTime": "08:00AM",
                    "weekDay": null
                }
            ]
        },
        {
            "location": {
                "id": "98aa9e4c-539d-4137-8de4-111510b781dc",
                "merchantId": "8dfe7674-709d-431c-a233-628e839ecc76",
                "restaurantName": "A2Be2b",
                "name": "arunaa",
                "phone": "+91 587283487r2",
                "email": "fdyu11@gmail.com",
                "addressLine1": "71,Kamarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
                "addressLine2": null,
                "addressLine3": null,
                "city": "Madurai",
                "state": "TamilNadu",
                "pinCode": "625009",
                "country": "India",
                "attributes": "{\"cuisines\": [\"Fast Food\", \"North Indian\", \"Fast Food\", \"North Indian\"], \"amenities\": [\"free-wifi\", \"free-wifi\"], \"gstNumber\": \"erry4639\", \"BankDetails\": {\"ifscCode\": \"SBI4365\", \"accountNumber\": \"123345789380\", \"AccountHolderName\": \"arun\"}, \"websiteLink\": \"www.rest.com\", \"FSSAIDetails\": {\"documents\": \"a5ccd036-5c81-4d24-922d-a80008cc0182\", \"isEnabled\": \"yes\", \"expirationDate\": \"024-7-12\", \"registerNumber\": \"8610764743\"}, \"FaceBookLink\": \"rest.fb.com\", \"DineInDetails\": {\"dineIn\": \"enabled\", \"checkIn\": {\"autoAssign\": \"no\", \"abandonTime\": \"00:15Am\", \"lateShowTime\": \"15:24\", \"autoCancelTime\": \"12:45\", \"maximumPeopleAllowedOnline\": \"25\", \"maximumPeopleAllowedOffline\": null}, \"highChair\": \"yes\", \"reservation\": {\"days\": [\"wednesday\", \"sunday\"], \"bufferDays\": 3, \"maximumPeopleAllowed\": \"25\", \"minimumPeopleAllowed\": \"2\", \"reservationServiceTimeTo\": \"00:00PM\", \"reservationServiceTimeFrom\": \"00:00AM\"}, \"interactiveDineIn\": \"enabled\", \"merchant4DigitValidation\": \"enabled\"}, \"instagramLink\": \"rest_insta\", \"SafetyMeasures\": \"We sanitize all tables and chairs after every use\", \"WhatsappNumber\": \"6578740562764958\", \"RestaurantNumber\": \"436789908295\"}"
            },
            "media": [
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Restaurant_Image",
                    "fileName": "oms_1718713982645_c003be04-6a29-46e1-a54b-3a081de721c6",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "LOGO",
                    "fileName": "oms_1718713927493_b63f6380-f711-4e28-b919-ede1e500fb8f",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "FSSAI_DOCUMENT",
                    "fileName": "oms_1718713944162_c9a2814b-f456-403a-9a51-4c92cab85ebc",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Restaurant_Image",
                    "fileName": "oms_1718713981633_ccbc97b6-f1dd-44d0-abb6-307fd88d346b",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Profile_Image",
                    "fileName": "oms_1718713980253_be8aa0a9-0c65-4b8c-9a76-4118013106a0",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                }
            ],
            "availabilityDtos": [
                {
                    "createdTime": null,
                    "endTime": "12:00PM",
                    "name": "breakfast",
                    "startTime": "08:00AM",
                    "weekDay": null
                },
                {
                    "createdTime": null,
                    "endTime": "00:00",
                    "name": "Lunch",
                    "startTime": "00:00",
                    "weekDay": null
                },
                {
                    "createdTime": null,
                    "endTime": "12:00PM",
                    "name": "breakfast",
                    "startTime": "08:00AM",
                    "weekDay": null
                }
            ]
        },
        {
            "location": {
                "id": "2640d800-2467-4cd8-b9f3-15515aa77dc0",
                "merchantId": "8dfe7674-709d-431c-a233-628e839ecc76",
                "restaurantName": "A2Bb2A",
                "name": "arunaa",
                "phone": "+91 587283487r2",
                "email": "fdyu11@gmail.com",
                "addressLine1": "71,Kamarajar st,New Meenakshi Nagar,New Ramnad Road Madurai.",
                "addressLine2": null,
                "addressLine3": null,
                "city": "Madurai",
                "state": "TamilNadu",
                "pinCode": "625009",
                "country": "India",
                "attributes": "{\"cuisines\": [\"Fast Food\", \"North Indian\", \"Fast Food\", \"North Indian\"], \"amenities\": [\"free-wifi\", \"free-wifi\"], \"gstNumber\": \"erry4639\", \"BankDetails\": {\"ifscCode\": \"SBI4365\", \"accountNumber\": \"123345789380\", \"AccountHolderName\": \"arun\"}, \"websiteLink\": \"www.rest.com\", \"FSSAIDetails\": {\"documents\": \"a5ccd036-5c81-4d24-922d-a80008cc0182\", \"isEnabled\": \"yes\", \"expirationDate\": \"024-7-12\", \"registerNumber\": \"8610764743\"}, \"FaceBookLink\": \"rest.fb.com\", \"DineInDetails\": {\"dineIn\": \"enabled\", \"checkIn\": {\"autoAssign\": \"no\", \"abandonTime\": \"00:15Am\", \"lateShowTime\": \"15:24\", \"autoCancelTime\": \"12:45\", \"maximumPeopleAllowedOnline\": \"25\", \"maximumPeopleAllowedOffline\": null}, \"highChair\": \"yes\", \"reservation\": {\"days\": [\"wednesday\", \"sunday\"], \"bufferDays\": 3, \"maximumPeopleAllowed\": \"25\", \"minimumPeopleAllowed\": \"2\", \"reservationServiceTimeTo\": \"00:00PM\", \"reservationServiceTimeFrom\": \"00:00AM\"}, \"interactiveDineIn\": \"enabled\", \"merchant4DigitValidation\": \"enabled\"}, \"instagramLink\": \"rest_insta\", \"SafetyMeasures\": \"We sanitize all tables and chairs after every use\", \"WhatsappNumber\": \"6578740562764958\", \"RestaurantNumber\": \"436789908295\"}"
            },
            "media": [
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Restaurant_Image",
                    "fileName": "oms_1718713982645_c003be04-6a29-46e1-a54b-3a081de721c6",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "LOGO",
                    "fileName": "oms_1718713927493_b63f6380-f711-4e28-b919-ede1e500fb8f",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "FSSAI_DOCUMENT",
                    "fileName": "oms_1718713944162_c9a2814b-f456-403a-9a51-4c92cab85ebc",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Restaurant_Image",
                    "fileName": "oms_1718713981633_ccbc97b6-f1dd-44d0-abb6-307fd88d346b",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                },
                {
                    "entityId": "9797ce29-1ef1-4c08-ab2d-bea899750bc6",
                    "entityType": "Profile_Image",
                    "fileName": "oms_1718713980253_be8aa0a9-0c65-4b8c-9a76-4118013106a0",
                    "mimeType": "image/png",
                    "sortOrder": null,
                    "tag": null
                }
            ],
            "availabilityDtos": [
                {
                    "createdTime": null,
                    "endTime": "12:00PM",
                    "name": "breakfast",
                    "startTime": "08:00AM",
                    "weekDay": null
                },
                {
                    "createdTime": null,
                    "endTime": "00:00",
                    "name": "Lunch",
                    "startTime": "00:00",
                    "weekDay": null
                },
                {
                    "createdTime": null,
                    "endTime": "12:00PM",
                    "name": "breakfast",
                    "startTime": "08:00AM",
                    "weekDay": null
                }
            ]
        }
    ]

    



console.log(locationdata[0].location.id)

    // const goToupdate = (locationIddata) => {
    //     console.log(locationIddata)
     
    //     locationdata.map((data,index)=>
    //         {
    //             if(locationIddata==(locationdata[index].location.id)){
    //                 console.log(locationIddata)
    //                 navigate('/outlet',{state:{APidata:locationdata}});
    //             }
    //         })
     
       



   
       

    //     dispatch(getLocationRequest())


      
    //     if(datafromapi.length>0){
    //     datafromapi.map((itemdata,index)=>
    //     {

    //         if(locationIddata===(datafromapi[index].location.id))
    //             {
    //                 navigate("./outlet",{ datamap:datafromapi  });
    //             }
    //     })
    // }


    //   };
    const AAlocationdata = useSelector((state) => state.getlocationdata.data);
    console.log("AA",AAlocationdata)
    const goToupdate = (locationIddata) => {

        dispatch(getLocationRequest(locationIddata));
        // console.log("sidenavarbar",locationIddata);
         
       
        const selectedLocation = AAlocationdata.find(location => location.location.id === locationIddata);

        if (AAlocationdata) {
            // console.log("sidenavbargetting");
            // console.log("isempty",AAlocationdata)
            navigate('/outlet', { state: { APidata: AAlocationdata } });
        }

        
    };
    // const abc = useSelector(item => item.getlocationdata.data)
    //  console.log('akjbdaksbd', abc)

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
                

               
                <div className='pagelink pg4'>
                    <img src={userimg} alt="" />
                    <p >Outlet Management</p>
                </div>
                <div>
      Merchants
    
      <div>
      <div>
      <button onClick={()=>dispatch(getDataRequest())}>get</button>

            {datafromapi.length > 0 &&
              datafromapi.map((location, index) => (
                <div key={index}>
                  <button className='btnlocation' onClick={()=>goToupdate(datafromapi[index].locationId)}>
                  {datafromapi[index].restaurantName}   
                </button>
                </div>
              
                
              ))}
          </div>
       
      </div>
    </div>
             

                
               

            </div>
        </div>
       </>
       
    )
}

export default Sidenavbar