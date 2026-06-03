import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/assets/menu.png"
import logo from "../../assets/assets/logo.png"
import search_icon from "../../assets/assets/search.png"
import upload_icon from "../../assets/assets/upload.png"
import more_icon from "../../assets/assets/more.png"
import notification_icon from "../../assets/assets/notification.png"
import profile_icon from "../../assets/assets/jack.png"
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=> setSidebar(prev=>prev===false?true:false)} src={menu_icon}/>
            <Link to="/"> <img className='logo' src={logo}/></Link>
        </div>
        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
                <input type='text' placeholder='search' alt='search'/>
                <img className='search-icon'  src={search_icon}/>
            </div>
            
        </div>
        <div className='nav-right flex-div'>
            <img src={upload_icon} className=''/>
            <img src={more_icon} className=''/>
            <img src={notification_icon} className=''/>
            <img src={profile_icon} className='user-icon'/>
        </div>

    </nav>
  )
}

export default Navbar