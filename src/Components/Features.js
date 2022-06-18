import Bookmarking from "./Bookmarking";
import Searching from "./Searching";
import Sharing from "./Sharing";
import { useState } from "react";

const Features = () => {
    const [features, setFeatures] = useState('Bookmarking');

    const displayFeatures = () => {
       if (features === 'Bookmarking') return <Bookmarking />;
       if (features === 'Searching') return <Searching />;
       if (features === 'Sharing') return <Sharing />;
    }

    const handleFeatures = (data) => {
        setFeatures(data);
    }

    return ( 
        <section className="features-section">
            <div className="features-intro-wrapper">
                <h3 className="features-heading">Features</h3>
                <p className="features-paragraph">
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
                <ul className="features-list">
                    <li onClick={() => handleFeatures('Bookmarking')} className="features-list-items">
                        Simple Booking
                    </li>
                    <li onClick={() => handleFeatures('Searching')} className="features-list-items">
                        Speedy Searching
                    </li>
                    <li onClick={() => handleFeatures('Sharing')} className="features-list-items">
                        Easy Sharing
                    </li>
                </ul>
                {displayFeatures()}
            </div>
        </section>
    );
}
 
export default Features;