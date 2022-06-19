import Bookmarking from "./Bookmarking";
import Searching from "./Searching";
import Sharing from "./Sharing";
import { useState, useEffect } from "react";
import '../CSS/Features.css';

const handleActiveTab = (features, setBook, setSearch, setShare) => {
    
    if (features === 'Bookmarking') {
        setBook(true);
        setSearch(false);    
        setShare(false);    
    } else if (features === 'Searching') {
        setBook(false);
        setSearch(true);    
        setShare(false);    
    } else if (features === 'Sharing') {
        setBook(false);
        setSearch(false);    
        setShare(true);    
    }
}

const Features = () => {
    const [features, setFeatures] = useState('Bookmarking');
    const [book, setBook] = useState(true);
    const [search, setSearch] = useState(false);
    const [share, setShare] = useState(false);

    const displayFeatures = () => {
       if (features === 'Bookmarking') {
            return <Bookmarking />
        } else if (features === 'Searching') {
            return <Searching />
        } else if (features === 'Sharing') {
            return <Sharing />
        }
    }

    useEffect(() => {
        handleActiveTab(features, setBook, setSearch, setShare)
    }, [features])

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
                        <button type="button" className={`${book ? 'active-tab' : ''}`}>
                            Simple Booking
                        </button>
                    </li>
                    <li onClick={() => handleFeatures('Searching')} className="features-list-items">
                        <button type="button" className={`${search ? 'active-tab' : ''}`}>
                            Speedy Searching
                        </button>
                    </li>
                    <li onClick={() => handleFeatures('Sharing')} className="features-list-items">
                        <button type="button"  className={`${share ? 'active-tab' : ''}`}>
                            Easy Sharing
                        </button>
                    </li>
                </ul>
            </div>
            {displayFeatures()}
        </section>
    );
}
 
export default Features;