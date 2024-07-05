import "./OutletStepperForm.scss";
import React, { useState, useEffect, useRef,useContext } from 'react';
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { GiPressureCooker } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiReceipt } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { ImSpoonKnife } from "react-icons/im";
import Dinein from "../Dinein/Dinein";
import Pickup from "../PickUp/Pickup";
import Kitchen from "../Kitchen/Kitchen";
import RestaurantImage from "../Restaurant Image/InputRefs";
import { useDispatch } from 'react-redux';
import { postDineinDataRequest, PostRestaurantImageDataRequest, PostDeliveryDataRequest, PostPickupDataRequest, PostKitchenDataRequest, saveBasicDetailsRequest } from '../../../redux/Actions/PostDataAction';
import BasicDetails from "../Basicdetails/BasicDetails";
import Delivery from "../Delivery/Delivery";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LocationContext } from "../../LocationProvider";

function Receipt() {
  return <h2></h2>;
}

function Stepform() {
  const [outletactiveStep, setOutletActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Array(7).fill(false));
  const [validSteps, setValidSteps] = useState(new Array(7).fill(false));
  const dispatch = useDispatch();
  const pickUpformRef = useRef();
  const kitchenformRef = useRef();
  const restrauntimageref = useRef();
  const dineinref = useRef();
  const deliveryref = useRef();
  const basicDetailsref = useRef();

  const [pickupForm, setPickupForm] = useState("");
  const [kitchenForm, setKitchenForm] = useState("");
  const [restrauntImageForm, setrestrauntImageForm] = useState("");
  const [dineInForm, setDineInForm] = useState("");
  const [deliveryform, setDeliveryForm] = useState("");
  const [basicDetailsForm, setBasicDetailsForm] = useState('');
  const { count,setcount,togglebutton1,
    setToggleButton1,
    togglebutton2,
    setToggleButton2,
    togglebutton3,
    setToggleButton3,} = useContext(LocationContext);

  const Basicdeatil=2;
  // const dineincount=5;
  // const pickupcount=14.5;
  const deliverycount=6;
  // const kitchencount=2;

  const outletsteps = [
    {
      title: "Basic Details",
      component: <BasicDetails ref={basicDetailsref} />,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4524 14.0179C7.19063 14.4032 3.94378 18.0042 4.00036 22.283V22.4999C4.00036 23.3284 4.67194 23.9999 5.50036 23.9999C6.32878 23.9999 7.00036 23.3284 7.00036 22.4999V22.223C6.95527 19.5958 8.89402 17.3555 11.5004 17.023C14.2516 16.7502 16.7031 18.7593 16.9759 21.5105C16.992 21.6732 17.0002 21.8365 17.0003 22V22.4999C17.0003 23.3284 17.6719 23.9999 18.5003 23.9999C19.3288 23.9999 20.0003 23.3284 20.0003 22.4999V21.9999C19.9955 17.5767 16.4057 13.9949 11.9825 13.9998C11.8057 14 11.6288 14.006 11.4524 14.0179Z" fill="#2F2F2F"/>
      <path d="M12.0004 12C15.3141 12 18.0004 9.31369 18.0004 6C18.0004 2.68631 15.3141 0 12.0004 0C8.68669 0 6.00037 2.68631 6.00037 6C6.00366 9.31233 8.68805 11.9967 12.0004 12ZM12.0004 3C13.6572 3 15.0004 4.34316 15.0004 6C15.0004 7.65684 13.6572 9 12.0004 9C10.3435 9 9.00037 7.65684 9.00037 6C9.00037 4.34316 10.3435 3 12.0004 3Z" fill="#2F2F2F"/>
      </svg>
      
    },
    {
      title: "Restaurant Image",
      component: <RestaurantImage ref={restrauntimageref} />,
      icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1573_909)">
      <path d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0V0ZM5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C21.9983 19.4455 21.8957 19.8848 21.7 20.285L12.537 11.122C12.0727 10.6576 11.5214 10.2892 10.9147 10.0378C10.308 9.78644 9.65772 9.65707 9.001 9.65707C8.34428 9.65707 7.69399 9.78644 7.08728 10.0378C6.48056 10.2892 5.92931 10.6576 5.465 11.122L2 14.586V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM5 22C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V17.414L6.878 12.536C7.1566 12.2572 7.4874 12.0361 7.85151 11.8852C8.21561 11.7343 8.60587 11.6566 9 11.6566C9.39413 11.6566 9.78439 11.7343 10.1485 11.8852C10.5126 12.0361 10.8434 12.2572 11.122 12.536L20.285 21.7C19.8848 21.8957 19.4455 21.9983 19 22H5Z" fill="#2F2F2F"/>
      <path d="M16 10.5C16.6922 10.5 17.3689 10.2947 17.9445 9.91015C18.5201 9.52556 18.9687 8.97894 19.2336 8.33939C19.4985 7.69985 19.5678 6.99612 19.4328 6.31719C19.2977 5.63825 18.9644 5.01461 18.4749 4.52513C17.9854 4.03564 17.3618 3.7023 16.6828 3.56725C16.0039 3.4322 15.3002 3.50152 14.6606 3.76642C14.0211 4.03133 13.4744 4.47993 13.0899 5.05551C12.7053 5.63108 12.5 6.30777 12.5 7C12.5 7.92826 12.8688 8.8185 13.5251 9.47488C14.1815 10.1313 15.0717 10.5 16 10.5ZM16 5.5C16.2967 5.5 16.5867 5.58798 16.8334 5.7528C17.08 5.91762 17.2723 6.15189 17.3858 6.42598C17.4994 6.70007 17.5291 7.00167 17.4712 7.29264C17.4133 7.58361 17.2704 7.85088 17.0607 8.06066C16.8509 8.27044 16.5836 8.4133 16.2926 8.47118C16.0017 8.52906 15.7001 8.49935 15.426 8.38582C15.1519 8.27229 14.9176 8.08003 14.7528 7.83336C14.588 7.58668 14.5 7.29667 14.5 7C14.5 6.60218 14.658 6.22065 14.9393 5.93934C15.2206 5.65804 15.6022 5.5 16 5.5Z" fill="#2F2F2F"/>
      </g>
      <defs>
      <clipPath id="clip0_1573_909">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
    },
    {
      title: "DineIn",
      component: <Dinein ref={dineinref} />,
      icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1573_915)">
      <path d="M6 0.75C3.10575 0.75 0.749998 3.44175 0.749998 6.75C0.724209 7.83798 0.988503 8.91321 1.51573 9.86525C2.04296 10.8173 2.81412 11.6118 3.75 12.1672V21C3.75 21.5967 3.98705 22.169 4.40901 22.591C4.83096 23.0129 5.40326 23.25 6 23.25C6.59674 23.25 7.16903 23.0129 7.59099 22.591C8.01294 22.169 8.25 21.5967 8.25 21V12.1672C9.18588 11.6118 9.95703 10.8173 10.4843 9.86525C11.0115 8.91321 11.2758 7.83798 11.25 6.75C11.25 3.44175 8.89425 0.75 6 0.75ZM7.2135 11.0017C7.07634 11.0584 6.95909 11.1546 6.87658 11.2779C6.79408 11.4013 6.75002 11.5463 6.75 11.6947V21C6.75 21.1989 6.67098 21.3897 6.53033 21.5303C6.38968 21.671 6.19891 21.75 6 21.75C5.80109 21.75 5.61032 21.671 5.46967 21.5303C5.32902 21.3897 5.25 21.1989 5.25 21V11.6947C5.24997 11.5463 5.20592 11.4013 5.12341 11.2779C5.0409 11.1546 4.92365 11.0584 4.7865 11.0017C3.9959 10.6167 3.33482 10.0093 2.88427 9.25409C2.43373 8.49888 2.2133 7.62863 2.25 6.75C2.25 4.26825 3.93225 2.25 6 2.25C8.06775 2.25 9.75 4.26825 9.75 6.75C9.78669 7.62863 9.56626 8.49888 9.11572 9.25409C8.66518 10.0093 8.0041 10.6167 7.2135 11.0017Z" fill="#2F2F2F"/>
      <path d="M22.5 0.75C22.3011 0.75 22.1103 0.829018 21.9697 0.96967C21.829 1.11032 21.75 1.30109 21.75 1.5V9C21.75 9.59674 21.5129 10.169 21.091 10.591C20.669 11.0129 20.0967 11.25 19.5 11.25C19.3011 11.25 19.1103 11.329 18.9697 11.4697C18.829 11.6103 18.75 11.8011 18.75 12V21C18.75 21.1989 18.671 21.3897 18.5303 21.5303C18.3897 21.671 18.1989 21.75 18 21.75C17.8011 21.75 17.6103 21.671 17.4697 21.5303C17.329 21.3897 17.25 21.1989 17.25 21V12C17.25 11.8011 17.171 11.6103 17.0303 11.4697C16.8897 11.329 16.6989 11.25 16.5 11.25C15.9033 11.25 15.331 11.0129 14.909 10.591C14.4871 10.169 14.25 9.59674 14.25 9V1.5C14.25 1.30109 14.171 1.11032 14.0303 0.96967C13.8897 0.829018 13.6989 0.75 13.5 0.75C13.3011 0.75 13.1103 0.829018 12.9697 0.96967C12.829 1.11032 12.75 1.30109 12.75 1.5V9C12.751 9.86419 13.0499 10.7016 13.5964 11.3711C14.1429 12.0405 14.9035 12.5011 15.75 12.675V21C15.75 21.5967 15.9871 22.169 16.409 22.591C16.831 23.0129 17.4033 23.25 18 23.25C18.5967 23.25 19.169 23.0129 19.591 22.591C20.0129 22.169 20.25 21.5967 20.25 21V12.675C21.0965 12.5011 21.8571 12.0405 22.4036 11.3711C22.9501 10.7016 23.249 9.86419 23.25 9V1.5C23.25 1.30109 23.171 1.11032 23.0303 0.96967C22.8897 0.829018 22.6989 0.75 22.5 0.75Z" fill="#2F2F2F"/>
      <path d="M16.5 9.75C16.6989 9.75 16.8897 9.67098 17.0303 9.53033C17.171 9.38968 17.25 9.19891 17.25 9V1.5C17.25 1.30109 17.171 1.11032 17.0303 0.96967C16.8897 0.829018 16.6989 0.75 16.5 0.75C16.3011 0.75 16.1103 0.829018 15.9697 0.96967C15.829 1.11032 15.75 1.30109 15.75 1.5V9C15.75 9.19891 15.829 9.38968 15.9697 9.53033C16.1103 9.67098 16.3011 9.75 16.5 9.75Z" fill="#2F2F2F"/>
      <path d="M19.5 9.75C19.6989 9.75 19.8897 9.67098 20.0303 9.53033C20.171 9.38968 20.25 9.19891 20.25 9V1.5C20.25 1.30109 20.171 1.11032 20.0303 0.96967C19.8897 0.829018 19.6989 0.75 19.5 0.75C19.3011 0.75 19.1103 0.829018 18.9697 0.96967C18.829 1.11032 18.75 1.30109 18.75 1.5V9C18.75 9.19891 18.829 9.38968 18.9697 9.53033C19.1103 9.67098 19.3011 9.75 19.5 9.75Z" fill="#2F2F2F"/>
      </g>
      <defs>
      <clipPath id="clip0_1573_915">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
    },
    {
      title: "Pickup",
      component: <Pickup ref={pickUpformRef} />,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 6H21" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    },
    {
      title: "Delivery",
      component: <Delivery ref={deliveryref} />,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.126 14.2688C16.4579 14.2688 15.1008 15.6259 15.1008 17.294C15.1008 18.9622 16.4579 20.3192 18.126 20.3192C19.7945 20.3192 21.1513 18.9622 21.1513 17.294C21.1513 15.6259 19.7942 14.2688 18.126 14.2688ZM18.126 18.8066C17.2919 18.8066 16.6134 18.1282 16.6134 17.294C16.6134 16.4598 17.2919 15.7814 18.126 15.7814C18.9602 15.7814 19.6387 16.4598 19.6387 17.294C19.6387 18.1283 18.9602 18.8066 18.126 18.8066Z" fill="#2F2F2F"/>
      <path d="M7.78993 14.2688C6.12179 14.2688 4.76471 15.6259 4.76471 17.294C4.76471 18.9622 6.12179 20.3192 7.78993 20.3192C9.45807 20.3192 10.8151 18.9622 10.8151 17.294C10.8151 15.6259 9.45807 14.2688 7.78993 14.2688ZM7.78993 18.8066C6.95574 18.8066 6.27732 18.1282 6.27732 17.294C6.27732 16.4598 6.95574 15.7814 7.78993 15.7814C8.62388 15.7814 9.30254 16.4598 9.30254 17.294C9.30254 18.1283 8.62412 18.8066 7.78993 18.8066Z" fill="#2F2F2F"/>
      <path d="M20.1633 5.60984C20.0347 5.35447 19.7733 5.19336 19.4874 5.19336H15.5042V6.70597H19.021L21.0804 10.8021L22.4322 10.1224L20.1633 5.60984Z" fill="#2F2F2F"/>
      <path d="M15.8571 16.563H10.1345V18.0756H15.8571V16.563Z" fill="#2F2F2F"/>
      <path d="M5.52098 16.563H2.89916C2.48141 16.563 2.14288 16.9016 2.14288 17.3193C2.14288 17.737 2.48146 18.0756 2.89916 18.0756H5.52102C5.93877 18.0756 6.27731 17.737 6.27731 17.3193C6.27731 16.9015 5.93873 16.563 5.52098 16.563Z" fill="#2F2F2F"/>
      <path d="M23.8412 11.9395L22.3536 10.0235C22.2106 9.83896 21.99 9.73105 21.7563 9.73105H16.2605V4.43695C16.2605 4.0192 15.9219 3.68066 15.5042 3.68066H2.89916C2.48141 3.68066 2.14288 4.01924 2.14288 4.43695C2.14288 4.85465 2.48146 5.19323 2.89916 5.19323H14.7479V10.4873C14.7479 10.9051 15.0865 11.2436 15.5042 11.2436H21.386L22.4874 12.6624V16.5629H20.3949C19.9772 16.5629 19.6386 16.9015 19.6386 17.3192C19.6386 17.737 19.9772 18.0755 20.3949 18.0755H23.2437C23.6614 18.0755 23.9999 17.7369 24 17.3192V12.4034C24 12.2354 23.944 12.0721 23.8412 11.9395Z" fill="#2F2F2F"/>
      <path d="M5.47059 12.7312H1.99157C1.57382 12.7312 1.23529 13.0698 1.23529 13.4875C1.23529 13.9052 1.57387 14.2438 1.99157 14.2438H5.47054C5.88829 14.2438 6.22682 13.9052 6.22682 13.4875C6.22687 13.0698 5.88829 12.7312 5.47059 12.7312Z" fill="#2F2F2F"/>
      <path d="M7.21008 9.75635H0.756281C0.338578 9.75635 0 10.0949 0 10.5127C0 10.9304 0.338578 11.269 0.756281 11.269H7.21008C7.62783 11.269 7.96636 10.9304 7.96636 10.5127C7.96636 10.095 7.62783 9.75635 7.21008 9.75635Z" fill="#2F2F2F"/>
      <path d="M8.44537 6.78149H1.99157C1.57382 6.78149 1.23529 7.12007 1.23529 7.53778C1.23529 7.95553 1.57387 8.29406 1.99157 8.29406H8.44537C8.86312 8.29406 9.20165 7.95548 9.20165 7.53778C9.2017 7.12007 8.86312 6.78149 8.44537 6.78149Z" fill="#2F2F2F"/>
      </svg>
      
    },
    {
      title: "Kitchen",
      component: <Kitchen ref={kitchenformRef} />,
      icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1328 8.08594C20.1328 6.14742 18.5557 4.57031 16.6172 4.57031H14.4609V1.75781H9.53906V4.57031H7.38281C5.4443 4.57031 3.86719 6.14742 3.86719 8.08594V8.78906H20.1328V8.08594ZM10.9453 3.16406H13.0547V4.57031H10.9453V3.16406ZM5.39391 7.38281C5.68406 6.56433 6.46608 5.97656 7.38281 5.97656H16.6172C17.5339 5.97656 18.3159 6.56433 18.6061 7.38281H5.39391Z" fill="#2F2F2F"/>
      <path d="M21.8906 11.6016H20.1328V10.1953H3.86719V11.6016H2.10938C0.946266 11.6016 0 12.5478 0 13.7109C0 14.874 0.946266 15.8203 2.10938 15.8203H3.86719V19.4297C3.86719 20.9805 5.12887 22.2422 6.67969 22.2422H17.3203C18.8711 22.2422 20.1328 20.9805 20.1328 19.4297V15.8203H21.8906C23.0537 15.8203 24 14.874 24 13.7109C24 12.5478 23.0537 11.6016 21.8906 11.6016ZM2.10938 14.4141C1.72167 14.4141 1.40625 14.0986 1.40625 13.7109C1.40625 13.3232 1.72167 13.0078 2.10938 13.0078H3.86719V14.4141H2.10938ZM18.7266 19.4297C18.7266 20.2051 18.0957 20.8359 17.3203 20.8359H6.67969C5.90428 20.8359 5.27344 20.2051 5.27344 19.4297V11.6016H18.7266V19.4297ZM21.8906 14.4141H20.1328V13.0078H21.8906C22.2783 13.0078 22.5938 13.3232 22.5938 13.7109C22.5938 14.0986 22.2783 14.4141 21.8906 14.4141Z" fill="#2F2F2F"/>
      </svg>
      
    },
    {
      title: "Receipt",
      component: "",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.39 6.4126H6.38995C6.19104 6.4126 6.00028 6.49162 5.85962 6.63227C5.71897 6.77292 5.63995 6.96369 5.63995 7.1626C5.63995 7.36151 5.71897 7.55228 5.85962 7.69293C6.00028 7.83358 6.19104 7.9126 6.38995 7.9126H12.39C12.5889 7.9126 12.7796 7.83358 12.9203 7.69293C13.0609 7.55228 13.14 7.36151 13.14 7.1626C13.14 6.96369 13.0609 6.77292 12.9203 6.63227C12.7796 6.49162 12.5889 6.4126 12.39 6.4126Z" fill="#2F2F2F"/>
      <path d="M12.39 10.425H6.38995C6.19104 10.425 6.00028 10.5041 5.85962 10.6447C5.71897 10.7854 5.63995 10.9761 5.63995 11.175C5.63995 11.374 5.71897 11.5647 5.85962 11.7054C6.00028 11.846 6.19104 11.925 6.38995 11.925H12.39C12.5889 11.925 12.7796 11.846 12.9203 11.7054C13.0609 11.5647 13.14 11.374 13.14 11.175C13.14 10.9761 13.0609 10.7854 12.9203 10.6447C12.7796 10.5041 12.5889 10.425 12.39 10.425Z" fill="#2F2F2F"/>
      <path d="M12.39 14.5276H6.38995C6.19104 14.5276 6.00028 14.6066 5.85962 14.7473C5.71897 14.8879 5.63995 15.0787 5.63995 15.2776C5.63995 15.4765 5.71897 15.6673 5.85962 15.8079C6.00028 15.9486 6.19104 16.0276 6.38995 16.0276H12.39C12.5889 16.0276 12.7796 15.9486 12.9203 15.8079C13.0609 15.6673 13.14 15.4765 13.14 15.2776C13.14 15.0787 13.0609 14.8879 12.9203 14.7473C12.7796 14.6066 12.5889 14.5276 12.39 14.5276Z" fill="#2F2F2F"/>
      <path d="M19.4025 0.75H4.59747C4.21272 0.750981 3.83194 0.827861 3.47695 0.976234C3.12196 1.12461 2.79973 1.34156 2.52871 1.61466C2.2577 1.88777 2.04323 2.21166 1.89759 2.56778C1.75195 2.9239 1.678 3.30525 1.67997 3.69V21.9825C1.67948 22.1702 1.72896 22.3547 1.82334 22.5169C1.91771 22.6792 2.05357 22.8134 2.21697 22.9058C2.38038 22.9982 2.56542 23.0454 2.75311 23.0426C2.94081 23.0399 3.12437 22.9872 3.28497 22.89L6.04497 21.2325C6.08661 21.2066 6.13467 21.1928 6.18372 21.1928C6.23277 21.1928 6.28083 21.2066 6.32247 21.2325L9.38997 23.07C9.55131 23.1728 9.73865 23.2275 9.92997 23.2275C10.1225 23.2265 10.3113 23.1748 10.4775 23.0775L13.56 21.2325C13.6016 21.2066 13.6497 21.1928 13.6987 21.1928C13.7478 21.1928 13.7958 21.2066 13.8375 21.2325L16.5825 22.89C16.7436 22.9857 16.9276 23.0363 17.115 23.0363C17.3024 23.0363 17.4863 22.9857 17.6475 22.89C17.8088 22.7977 17.943 22.6646 18.0365 22.5039C18.1299 22.3433 18.1794 22.1609 18.18 21.975V9.33H20.535C21.0078 9.32803 21.4606 9.13933 21.795 8.80501C22.1293 8.47068 22.318 8.0178 22.32 7.545V3.69C22.3219 3.30525 22.248 2.9239 22.1024 2.56778C21.9567 2.21166 21.7422 1.88777 21.4712 1.61466C21.2002 1.34156 20.878 1.12461 20.523 0.976234C20.168 0.827861 19.7872 0.750981 19.4025 0.75ZM16.68 21.195L14.61 19.95C14.3342 19.7863 14.0194 19.6999 13.6987 19.6999C13.378 19.6999 13.0632 19.7863 12.7875 19.95L9.93747 21.66L7.09497 19.9425C6.81592 19.7756 6.49658 19.6881 6.17143 19.6894C5.84627 19.6907 5.52765 19.7808 5.24997 19.95L3.17997 21.2025V3.69C3.17698 3.50197 3.21145 3.31522 3.28134 3.14063C3.35124 2.96605 3.45518 2.80712 3.58711 2.6731C3.71903 2.53908 3.87631 2.43265 4.04977 2.36001C4.22323 2.28737 4.40941 2.24998 4.59747 2.25H16.9875C16.7894 2.62732 16.684 3.04637 16.68 3.4725V21.1725V21.195ZM20.82 7.545C20.82 7.62059 20.7899 7.69308 20.7365 7.74653C20.683 7.79997 20.6106 7.83 20.535 7.83H18.18V3.495C18.177 3.33258 18.2064 3.17118 18.2665 3.02026C18.3266 2.86933 18.4162 2.73189 18.53 2.61598C18.6438 2.50007 18.7796 2.408 18.9294 2.34516C19.0792 2.28232 19.24 2.24997 19.4025 2.25C19.7784 2.25 20.139 2.39934 20.4048 2.66518C20.6706 2.93101 20.82 3.29156 20.82 3.6675V7.545Z" fill="#2F2F2F"/>
      </svg>
      
    },
  ];

  const [outletvisitedSteps, setOutletVisitedSteps] = useState(new Array(outletsteps.length).fill(false));

 
  useEffect(() => {
    const updatedVisitedSteps = [...outletvisitedSteps];
    updatedVisitedSteps[outletactiveStep] = true;
    setOutletVisitedSteps(updatedVisitedSteps);
  }, [outletactiveStep]);

  const handleStepClick = (index) => {
    // Only allow navigation to steps that have not been validated if on the last step
     
      setOutletActiveStep(index);
  };

  const handleSaveandNext = async () => {
    let newFormData1 = {};
    let isValid = true;
    let pickupcount=0;
    switch (outletactiveStep) {
      case 0:
        newFormData1 = basicDetailsref.current.getFormData();
        setBasicDetailsForm(newFormData1);
        setcount(count+Basicdeatil)
        dispatch(saveBasicDetailsRequest(newFormData1));



        let Basicdetail=basicDetailsref.current.getFormData()
        sessionStorage.setItem(
          "Basicdetail",   
          JSON.stringify(Basicdetail)
        );
        toast.success("Data Has Been Stored Successfully .");

        break;
      case 1:
        newFormData1 = restrauntimageref.current.getFormData();
        setrestrauntImageForm(newFormData1);
        dispatch(PostRestaurantImageDataRequest(newFormData1));
        let resimage=restrauntimageref.current.getFormData()
        sessionStorage.setItem(
          "Resimage",   
          JSON.stringify(resimage),
         

        );
        toast.success("Data Has Been Stored Successfully .");
        break;
      case 2:
        isValid = dineinref.current.validate();
        let dineincount=dineinref.current.dineincount();
        if (isValid) {
          newFormData1 = dineinref.current.getFormData();
          setDineInForm(newFormData1);
        
          setcount(count+dineincount)
          dispatch(postDineinDataRequest(newFormData1));
          let dinein=dineinref.current.getFormData();
        sessionStorage.setItem(
          "Dinein",   
          JSON.stringify(dinein)
        );
        toast.success("Data Has Been Stored Successfully .");
        console.log(dineincount)
        }
        else{
          const updatecount=count-dineincount;
          setcount(updatecount)
          toast.error("Please fill out the required fields before moving to the next step")
        }
        break;
      case 3:
        isValid = pickUpformRef.current.validate();
        if(!togglebutton2){
          sessionStorage.removeItem("Pickup");
        }
        
        if (isValid) {
          newFormData1 = pickUpformRef.current.getFormData();
          pickupcount=pickUpformRef.current.getpickupcount();

          setPickupForm(newFormData1);
          setcount(count+pickupcount)
          dispatch(PostPickupDataRequest(newFormData1));
          let pickup=pickUpformRef.current.getFormData();
          sessionStorage.setItem(
            "Pickup",   
            JSON.stringify(pickup)
          );
          toast.success("Data Has Been Stored Successfully .");
          
        } else {
          const updatecount=count-pickupcount;
          setcount(updatecount)
          toast.error("Please fill out the required fields before moving to the next step.");
        }
        break;
      case 4:
        isValid=deliveryref.current.validateDeliverySetting();
        if(isValid)
          {
        newFormData1 = deliveryref.current.getFormData();
        setDeliveryForm(newFormData1);
        setcount(count+deliverycount)
        dispatch(PostDeliveryDataRequest(newFormData1));
        let delivery=deliveryref.current.getFormData();
          sessionStorage.setItem(
            "Delivery",   
            JSON.stringify(delivery)
          );
          toast.success("Data Has Been Stored Successfully .");
        }

        else {
          const updatecount=count-deliverycount;
          setcount(updatecount)
          toast.error("Please fill out the required fields before moving to the next step.");
        }
        break;
      case 5:
        isValid = kitchenformRef.current.validate();
      let  kitchencount = kitchenformRef.current.getkitchenCount();

        if (isValid) {
             let kitchen=kitchenformRef.current.getFormData();
          newFormData1 = kitchenformRef.current.getFormData();
          setKitchenForm(newFormData1);
          setcount(count+kitchencount)
          dispatch(PostKitchenDataRequest(newFormData1));
       
          sessionStorage.setItem(
            "Kitchen",   
            JSON.stringify(kitchen)
          );
          toast.success("Data Has Been Stored Successfully .");
          console.log(kitchencount) 
        } else {
          const updatecount=count-kitchencount;
          setcount(updatecount)
          toast.error("Please fill out the required fields before moving to the next step.");
        }
        break;
      default:
        console.log("There is no Api call");
        break;
    }

    if (isValid) {
      setValidSteps((prev) => {
        const updated = [...prev];
        updated[outletactiveStep] = true;
        return updated;
      });

      
    }
    handleNextStep();
  };

  const handleNextStep = () => {
    if (outletactiveStep < outletsteps.length - 1) {
      setOutletActiveStep(outletactiveStep + 1);
    }
  };

  const progress = (outletvisitedSteps.filter((step) => step).length / outletsteps.length) * 100;

  return (
    <div className="page-content">
      <div className="stepform">
        <div className="Stepperformcontainer">
          <div className="sub-containerdetail">
            <div className="stepper-progressdetail">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="stepper-container">
              {outletsteps.map((step, index) => (
                <div
                  key={index}
                  className={`step  ${validSteps[index] ? "valid" : ""} ${
                    outletvisitedSteps[index] ? "visited" : ""
                  } ${index === outletactiveStep ? "active" : ""}`}
                  
                  onClick={() => handleStepClick(index)}
                >
                  {step.icon}
                  <div className="icon-text">{step.title}</div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
        <div className="component-container">
          {outletsteps[outletactiveStep].component}
        </div>
      </div>
      <footer>
      <div className="btn-footer">
        <button className="save_next" onClick={handleSaveandNext}>
          Save & Next
        </button>
        <button className="clear_all">
          Clear All
        </button>
        <ToastContainer position="top-center" transition={Flip} />
      </div>
      </footer>
     
    </div>
  );
}

export default Stepform;
