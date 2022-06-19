import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';
import dottedLine from '../images/bg-dots.svg';
import '../CSS/Download.css';

const Download = () => {

    const cards = [
        {key: 1, icon: '../images/logo-chrome.svg', iconDescription: 'Chrome icon', heading: 'Add to Chrome', text: 'Minimun version 62'},
        {key: 2, icon: '../images/logo-firefox.svg', iconDescription: 'Firefox Icon', heading: 'Add to Firefox', text: 'Minimun version 55'},
        {key: 3, icon: '../images/logo-opera.svg', iconDescription: 'Opera icon', heading: 'Add to Opera', text: 'Minimun version 46'}
    ]

    return ( 
        <section className="download-section">
            <div className="download-intro-wrapper">
                <h3 className="download-heading">Download the extension</h3>
                <p className="download-paragraph">
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className="download-card-wrapper">
                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={chrome} alt={cards[0].iconDescription} />
                    </div>
                    <h4 className="card-heading">{cards[0].heading}</h4>
                    <p className="card-text">{cards[0].text}</p>
                    <img src={dottedLine} alt="" />
                    <div className="card-button-wrapper">
                        <button className="card-button" type="button">
                            Add & Install Extension
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={firefox} alt={cards[1].iconDescription} />
                    </div>
                    <h4 className="card-heading">{cards[1].heading}</h4>
                    <p className="card-text">{cards[1].text}</p>
                    <img src={dottedLine} alt="" />
                    <div className="card-button-wrapper">
                        <button className="card-button" type="button">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={opera} alt={cards[2].iconDescription} />
                    </div>
                    <h4 className="card-heading">{cards[2].heading}</h4>
                    <p className="card-text">{cards[2].text}</p>
                    <img src={dottedLine} alt="" />
                    <div className="card-button-wrapper">
                        <button className="card-button" type="button">
                            Add & Install Extension
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Download;