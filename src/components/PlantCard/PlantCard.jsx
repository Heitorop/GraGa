import { useState } from 'react';
import fallBackPlant from '../../assets/img/fallBackPlant.png';
import './PlantCard.scss';

const PlantCard = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleImageError = () => {
    setIsImageLoaded(false);
  };
  return (
    <div className='card-wrapper'>
      <div className='card-img'>
        <img
          src={isImageLoaded ? props.images[0].source_url : fallBackPlant}
          alt='plant'
          onError={handleImageError}
        />
      </div>
      <div className='card-content'>
        <div className='card-text'>
          <h1>{props.title}</h1>
          <ul>
            <li>Kingdom : {props.classification.kingdom}</li>
            <li>Order : {props.classification.order}</li>
            <li>Family :{props.classification.family}</li>
            <li>Genus : {props.classification.genus}</li>
            <li>Species : {props.classification.species}</li>
          </ul>
        </div>
        <a
          href={props.wiki}
          target='_blank'
          rel='noopener noreferrer'
          className='card-price-btn'
        >
          <button type='button'>About</button>
        </a>
      </div>
    </div>
  );
};

export default PlantCard;
