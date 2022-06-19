import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import '../CSS/Footer.css'

const Footer = () => {
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
                    <input type="email" name="email" id="email" placeholder='Enter your email address'/>
                    <button type="button" className="form-submit">Contact us</button>
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