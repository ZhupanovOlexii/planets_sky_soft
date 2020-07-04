import React, { useState } from 'react';
import './PlanetCard.scss';

type Props = {
  planet: Planet;
};

const PlanetCard: React.FC<Props> = ({ planet }) => {
  const [info, setInfo] = useState('');

  const getDetailInfo = (currentPlanet: Planet) => {
    setInfo(currentPlanet.description);
  };

  const removeDescription = () => {
    setInfo('');
  };

  return (
    <>
      <div className="PlanetCard__list">
        <div className="PlanetCard__info">
          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Name
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.name}
            </p>
          </div>

          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Id
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.id}
            </p>
          </div>

          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Radius
              {' '}

            </p>
            <p className="PlanetCard__value">
              {planet.equatorialRadius.value}
              {planet.equatorialRadius.unit}
            </p>
          </div>
          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Gravity
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.surfaceGravity.value}
              {planet.surfaceGravity.unit}
            </p>
          </div>
          <div className="PlanetCard__description">
            <p className="PlanetCard__title">
              Moons
              {' '}
            </p>
            <p className="PlanetCard__value">
              {planet.moons?.count}
            </p>
          </div>
        </div>

        <div className=" PlanetCard__button--container">
          <button
            className=" PlanetCard__button--info"
            type="button"
            onClick={() => getDetailInfo(planet)}
          >
            More info
          </button>
        </div>

        {info && (
          <div className="PlanetCard__details">
            <div className=" PlanetCard__button--container">
              <button
                type="button"
                className=" PlanetCard__button--info "
                onClick={removeDescription}
              >
                Close
              </button>
            </div>
            <p className="PlanetCard__text">{info}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PlanetCard;
