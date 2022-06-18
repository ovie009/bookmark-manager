const Card = (icon, iconDescription, heading, text) => {
    return (  
        <div className="card">
            <div className="card-image-wrapper">
                <img src={icon} alt={iconDescription} />
            </div>
            <h4 className="card-heading">{heading}</h4>
            <p className="card-text">{text}</p>
            <hr className="card-horizontal-rule" />
            <button className="card-button" type="button">Add & Install Extension</button>
        </div>
    );
}
 
export default Card;