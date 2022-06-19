import searching from '../images/illustration-features-tab-2.svg';

const Searching = () => {
    return ( 
        <div className="features-content-wrapper">
            <div className="features-image-wrapper">
                <img src={searching} alt="Bookmark Illustration" />
                <span className="features-illustration-design"></span>
            </div>

            <div className="features-text-wrapper">
                <h3 className="features-subheading">Intelligent search</h3>
                <p className="features-paragraph">
                    Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your bookmarks.
                </p>
                <button className='features-more-info' type='button'>More Info</button>
            </div>
        </div>
    );
}
 
export default Searching;