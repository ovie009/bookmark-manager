import sharing from '../images/illustration-features-tab-3.svg';

const Sharing = () => {
    return ( 
        <div className="features-content-wrapper">
            <div className="features-image-wrapper">
                <img src={sharing} alt="Bookmark Illustration" />
                <span className="main-illustration-design"></span>
            </div>

            <div className="features-text-wrapper">
                <h3 className="features-subheading">Share your bookmarks</h3>
                <p className="features-paragraph">
                    Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.
                </p>
                <button className='features-more-info' type='button'>More Info</button>
            </div>
        </div>
    );
}
 
export default Sharing;