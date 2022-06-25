import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import errorIcon from '../images/icon-error.svg';
import '../CSS/Footer.css';
import { useState } from 'react';

const Footer = () => {

    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleEmail = () => {
        let email = document.querySelector('#email').value
        console.log(email);
        if (email === '') return setInvalidEmail(true);
        // eslint-disable-next-line
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return  setInvalidEmail(false);
        else return setInvalidEmail(true);

    }
     
    return ( 
        <footer>
            <div className="footer-form-wrapper">
                <p className="footer-preview">
                    35,000+ ALREADY JOINED
                </p>
                <h2 className="footer-heading">
                    Stay up-to-date with what we're doing
                </h2>
                <form>
                    <div className={invalidEmail ? 'input-wrapper error' : 'input-wrapper'}>
                        <input type="email" name="email" id="email" placeholder='Enter your email address'/>
                        <div className="error-wrapper">
                            <img src={errorIcon} alt="error icon" style={{
                            visibility: `${invalidEmail ? 'visible' : 'hidden'}`
                        }}/>
                        </div>
                        <label htmlFor="email" style={{
                            display: `${invalidEmail ? 'block' : 'none'}`
                        }}>Whoops, make sure it's an email</label>
                    </div>
                    <button type="button" className="form-submit" onClick={handleEmail}>Contact us</button>
                </form>
            </div>
            <div className="footer-base-wrapper">
                <ul className="footer-list">
                    <li className="footer-list-items">
                        <span className="footer-logo">
                            <div className="footer-icon-wrapper">
                                <ion-icon name="bookmark" id="footer-icon"></ion-icon>
                            </div>
                            BOOKMARK
                        </span>
                    </li>
                    <li className="footer-list-items">
                        FEATURES
                    </li>
                    <li className="footer-list-items">
                        PRICING
                    </li>
                    <li className="footer-list-items">
                        CONTACT
                    </li>
                </ul>
                <ul className="socials-list">
                    <li className="footer-list-items">
                        <img src={facebook} alt="facebook icon" />
                    </li>
                    <li className="footer-list-items">
                        <img src={twitter} alt="twitter icon" />
                    </li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;