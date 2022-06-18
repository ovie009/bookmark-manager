import arrow from '../images/icon-arrow.svg';

const Faq = () => {
    return ( 
        <section className="faq-section">
            <div className="faq-intro-wrapper">
                <h3 className="faq-heading">Features</h3>
                <p className="faq-paragraph">
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <ul className="faq-accordion-wrapper">
                
                <li className="faq-accordion">
                    <h4 className="faq-heading">What is Bookmark?</h4>
                    <img src={arrow} alt="" />
                    <p className="faq-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                </li>

                <li className="faq-accordion">
                    <h4 className="faq-heading">How can I request a new browser?</h4>
                    <img src={arrow} alt="" />
                    <p className="faq-text">
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                </li>
                
                <li className="faq-accordion">
                    <h4 className="faq-heading">is there a mobile app?</h4>
                    <img src={arrow} alt="" />
                    <p className="faq-text">
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                    </p>
                </li>

                <li className="faq-accordion">
                    <h4 className="faq-heading">What about the chromium browser?</h4>
                    <img src={arrow} alt="" />
                    <p className="faq-text">
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