import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';

type Props = {
  planets: Planet[];
};

const PlanetList: React.FC<Props> = ({ planets }) => {
  return (
    <>
      <div className="PlanetCard">
        {planets.map(planet => (
          <div key={planet.id}>
            <PlanetCard planet={planet} />
          </div>

        ))}

      </div>

    </>
  );
};

export default PlanetList;
