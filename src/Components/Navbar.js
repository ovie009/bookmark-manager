import logo from '../images/logo-bookmark.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img className="logo" src={logo} alt="Bookmark Icon" />
            <button type='button'>
                <img src={hamburger} alt="" />
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
            <div className="sidebar">
                <div className="sidebar-main">
                    <span>
                        <img className="logo" src={logo} alt="Bookmark Icon" />
                        <img src={close} alt="colse icon" />
                    </span>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-items">
                            FEATURES
                        </li>
                        <li className="sidebar-list-items">
                            PRICING
                        </li>
                        <li className="sidebar-list-items">
                            CONTACT
                        </li>
                        <li className="sidebar-list-items">
                            LOGIN
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