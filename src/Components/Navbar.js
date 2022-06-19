import logo from '../images/logo-bookmark.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import '../CSS/Navbar.css';
import { useState } from 'react';


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    return ( 
        <nav className="navbar">
            <img className="logo" src={logo} alt="Bookmark Icon" />
            <button type='button' className='open-sidenav' onClick={handleSidebar}>
                <img src={hamburger} alt="hamburger icon" />
            </button>
            <ul className='nav-list'>
                <li className="nav-list-items">
                    features
                </li>
                <li className="nav-list-items">
                    pricing
                </li>
                <li className="nav-list-items">
                    contact
                </li>
                <li className="nav-list-items">
                    login
                </li>
            </ul>
            <div className="sidebar" style={{
                left: `${sidebar ? '0px' : '100vw'}`
            }}>
                <div className="sidebar-main">
                    <div className='sidebar-header'>
                        <span className="sidebar-logo">
                            <div className="sidebar-icon-wrapper">
                                <ion-icon name="bookmark"></ion-icon>
                            </div>
                            BOOKMARK
                        </span>
                        {/* <img className="sidebar-logo" src={logo} alt="Bookmark Icon" /> */}
                        <button type='button' className='close-sidenav' onClick={handleSidebar}>
                            <img src={close} alt="close icon" />
                        </button>
                    </div>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-items">
                            <button type="button">
                                FEATURES
                            </button>
                        </li>
                        <li className="sidebar-list-items">
                            <button type="button">
                               PRICING
                            </button>
                        </li>
                        <li className="sidebar-list-items">
                            <button type="button">
                                CONTACT
                            </button>
                        </li>
                        <li className="sidebar-list-items">
                            <button type="button">
                                LOGIN
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-footer">
                    <img src={facebook} alt="facebook icon" />
                        <img src={twitter} alt="twitter icon" />
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;