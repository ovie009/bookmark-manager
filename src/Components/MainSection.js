import illustration from '../images/illustration-hero.svg';
import '../CSS/MainSection.css';

const MainSection = () => {
    return (  
        <section className="main-section">
            <div className="main-text-wrapper">
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="main-button-wrapper">
                    <button className="chrome-cta">
                        Get it on Chrome
                    </button>
                    <button className="firefox-cta">
                        Get it on Firefox
                    </button>
                </div>
            </div>
            <div className="main-image-wrapper">
                <img className='main-illustration' src={illustration} alt="Bookmark Illustration" />
                <span className="main-illustration-design"></span>
            </div>
        </section>
    );
}
 
export default MainSection;