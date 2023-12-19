import './card.css';

function Card({ className, image, name, age, location, followers, likes, photos }) {
    return (
        <div className='container__card'>
            <div className='top-card'>
                <img src={image} alt='avatar' className='top-card__image' />
            </div>

            <div className="middle-card">
                <h1 className="middle-card__name">{name}<span className="middle-card__age">{age} </span></h1>
                <p className="middle-card__location">{location}</p>
            </div>

            <div className="bottom-card">
                <div className="bottom-card__group">
                    <h1 className="bottom-card__quantity">{followers}</h1>
                    <p className="bottom-card__label">Followers</p>
                </div>

                <div className="bottom-card__group">
                    <h1 className="bottom-card__quantity">{likes}</h1>
                    <p className="bottom-card__label">Likes</p>
                </div>

                <div className="bottom-card__group">
                    <h1 className="bottom-card__quantity">{photos}</h1>
                    <p className="bottom-card__label">Photos</p>
                </div>
                
            </div>
        </div>
    );
};

export default Card;