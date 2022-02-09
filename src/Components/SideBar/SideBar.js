import './SideBar.css'
import {BsGraphUp, BsHouse, BsPerson,BsApple, BsOption, BsSearch} from 'react-icons/bs'

const SideBar =({value})=>{
    return(
        <div className="sidebar_wrapper">
            <nav className="sidebar">
                <div className='sidebar_logo'>
                    <BsApple/>
                </div>
                <ul className="sidebar_ul">
                    <li>
                        <BsHouse/>
                        <p>Home</p>
                    </li>
                    <li>
                        <BsSearch/>
                        <p>Explore</p>
                    </li>
                    <li>
                        <BsGraphUp/>
                        <p>Stats</p>
                    </li>
                    <li>
                        <BsPerson/>
                        <p>Account</p>
                    </li>
                    <li>
                        <BsOption/>
                        <p>Settings</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;