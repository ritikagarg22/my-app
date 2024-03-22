// import React from 'react';
// // import App from './App.js';
// // import logo from './icons_assets/logo.svg';
// // import home from 'Main.js'
// import {Link} from 'react-router-dom';

// function Nav() {
//     return(
//         <div className="">
//             <nav className="">
//                 <ul>
//                     <li>
//                         <Link to="/" className="">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/menu" className="">Menu</Link>
//                     </li>
//                     <li>
//                         <Link to="/reservations" className="">Reservations</Link>
//                     </li>
//                     <li>
//                         <Link to="/online-order" className="">Online Order</Link>
//                     </li>
//                     <li>
//                         <Link to="/login" className="">Login</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     //     <div>
//     //         <img src={logo} alt="Restaurant logo"></img>
//     //     </div>

//     // <div>
//     //     <ul>
//     //         <li>
//     //             <a href={home}>Home</a>
//     //         </li>
//     //         <li>
//     //             <a href="">About</a>
//     //         </li>
//     //         <li>
//     //             <a href="">Menu</a>
//     //         </li>
//     //         <li>
//     //             <a href={home}>Reservations</a>
//     //         </li>
//     //         <li>
//     //             <a href="">Online Order</a>
//     //         </li>
//     //         <li>
//     //             <a href="">Login</a>
//     //         </li>
//     //     </ul>
//     // </div>
//     );
// };

// export default Nav;

import { FC, HTMLAttributes } from "react";
import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";

const Nav: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
        <ul>
          <li> <img src={logoImg} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="/#about">About</HashLink> </li>
          <li> <HashLink to="/#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reservations</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
          <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
        </ul>
    </Container>
  );
};

export default Nav;