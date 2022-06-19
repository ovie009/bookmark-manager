import bookmarking from '../images/illustration-features-tab-1.svg';

const Bookmarking = () => {
    return ( 
        <div className="features-content-wrapper">
            <div className="features-image-wrapper">
                <img src={bookmarking} className="features-illustration" alt="Bookmark Illustration" />
                <span className="features-illustration-design"></span>
            </div>

            <div className="features-text-wrapper">
                <h3 className="features-subheading">Bookmark in one Click</h3>
                <p className="features-paragraph">
                    Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.
                </p>
                <button className='features-more-info' type='button'>More Info</button>
            </div>
        </div>
    );
}
 
export default Bookmarking;