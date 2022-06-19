import arrow from '../images/icon-arrow.svg';
import '../CSS/Faq.css';
import { useState } from 'react';

const Faq = () => {

    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);

    const handleFaq1 = () => {
        setFaq1(!faq1)
    }

    const handleFaq2 = () => {
        setFaq2(!faq2)
    }

    const handleFaq3 = () => {
        setFaq3(!faq3)
    }

    const handleFaq4 = () => {
        setFaq4(!faq4)
    }

    return ( 
        <section className="faq-section">
            <div className="faq-intro-wrapper">
                <h3 className="faq-heading">Frequently Asked Questions</h3>
                <p className="faq-paragraph">
                    Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.
                </p>
            </div>
            <ul className="faq-accordion-wrapper">
                
                <li className="faq-accordion">
                    <div className="faq-subheading-wrapper" onClick={handleFaq1}>
                        <h4 className="faq-subheading">What is Bookmark?</h4>
                        <img src={arrow} className="arrow-icon" alt="arrow icon" style={{
                            transform: `${faq1 ? 'rotate(-180deg)' : 'rotate(0deg)'}`,
                        }}/>
                    </div>
                    <p className="faq-text" style={{
                        height: `${faq1 ? 'fit-content' : '0px'}`,
                        paddingBlock: `${faq1 ? '15px' : '0px'}`,
                        whiteSpace: `${faq1 ? 'unset' : 'nowrap'}`,
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                </li>

                <li className="faq-accordion">
                <div className="faq-subheading-wrapper" onClick={handleFaq2}>
                        <h4 className="faq-subheading">How can I request a new browser?</h4>
                        <img src={arrow} className="arrow-icon" alt="arrow icon" style={{
                            transform: `${faq2 ? 'rotate(-180deg)' : 'rotate(0deg)'}`,
                        }}/>
                    </div>
                    <p className="faq-text" style={{
                        height: `${faq2 ? 'fit-content' : '0px'}`,
                        paddingBlock: `${faq2 ? '15px' : '0px'}`,
                        whiteSpace: `${faq2 ? 'unset' : 'nowrap'}`,
                    }}>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                </li>
                
                <li className="faq-accordion">
                <div className="faq-subheading-wrapper" onClick={handleFaq3}>
                        <h4 className="faq-subheading">Is there a mobile app?</h4>
                        <img src={arrow} className="arrow-icon" alt="arrow icon" style={{
                            transform: `${faq3 ? 'rotate(-180deg)' : 'rotate(0deg)'}`,
                        }}/>
                    </div>
                    <p className="faq-text" style={{
                        height: `${faq3 ? 'fit-content' : '0px'}`,
                        paddingBlock: `${faq3 ? '15px' : '0px'}`,
                        whiteSpace: `${faq3 ? 'unset' : 'nowrap'}`,
                    }}>
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                    </p>
                </li>

                <li className="faq-accordion">
                <div className="faq-subheading-wrapper" onClick={handleFaq4}>
                        <h4 className="faq-subheading">What about other Chromium browsers?</h4>
                        <img src={arrow} className="arrow-icon" alt="arrow icon" style={{
                            transform: `${faq4 ? 'rotate(-180deg)' : 'rotate(0deg)'}`,
                        }}/>
                    </div>
                    <p className="faq-text" style={{
                        height: `${faq4 ? 'fit-content' : '0px'}`,
                        paddingBlock: `${faq4 ? '15px' : '0px'}`,
                        whiteSpace: `${faq4 ? 'unset' : 'nowrap'}`,
                    }}>
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </p>
                </li>

            </ul>
            <button className="faq-button">More Info</button>
        </section>
    );
}
 
export default Faq;