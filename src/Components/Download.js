import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';

const Download = () => {

    const cards = [
        {key: 1, icon: '../images/logo-chrome.svg', iconDescription: 'Chrome icon', heading: 'Add to Chrome', text: 'Minimun version 62'},
        {key: 2, icon: '../images/logo-firefox.svg', iconDescription: 'Firefox Icon', heading: 'Add to Firefox', text: 'Minimun version 55'},
        {key: 3, icon: '../images/logo-opera.svg', iconDescription: 'Opera icon', heading: 'Add to Opera', text: 'Minimun version 46'}
    ]

    return ( 
        <section className="download-section">
            <div className="download-intro-wrapper">
                <h3 className="download-heading">Features</h3>
                <p className="download-paragraph">
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className="download-card-wrapper">
                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={chrome} alt={cards[0].iconDescription} />
                    </div>
                    <h4 className="card-heading">{cards[0].heading}</h4>
                    <p className="card-text">{cards[0].text}</p>
                    <hr className="card-horizontal-rule" />
                    <button className="card-button" type="button">Add & Install Extension</button>
                </div>

                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={firefox} alt={cards[1].iconDescription} />
                    </div>
                    <h4 className="card-heading">{cards[1].heading}</h4>
                    <p className="card-text">{cards[1].text}</p>
                    <hr className="card-horizontal-rule" />
                    <button className="card-button" type="button">Add & Install Extension</button>
                </div>
                
                <div className="card">
                    <div className="card-image-wrapper">
                        <img src={opera} alt={cards[2].iconDescription} />
                    </div>
                    <h4 className="card-heading">{cards[2].heading}</h4>
                    <p className="card-text">{cards[2].text}</p>
                    <hr className="card-horizontal-rule" />
                    <button className="card-button" type="button">Add & Install Extension</button>
                </div>
            </div>
        </section>
    );
}
 
export default Download;