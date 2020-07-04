import React, { useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import planets from './api/data_for_test.json';
import PlanetList from './components/PlanetList/PlanetList';
import './App.scss';
import Header from './components/Header/Header';

const App = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sortBy = useMemo(() => searchParams.get('sortBy') || '', [searchParams]);
  const sortOrder = useMemo(() => searchParams.get('sortOrder') || '', [searchParams]);

  const SORT_OPTIONS = ['name', 'equatorialRadius', 'moons'];

  const searchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.value;

    setQuery(target);
  };

  const filteredPlanets = useMemo(() => planets.filter(planet => {
    return (planet.name + planet.atmosphericConstituents.list + planet.id)
      .toLowerCase().includes(query.trim().toLowerCase());
  }), [query]);

  const sortingBy = (sortField: string) => {
    if (sortBy === sortField && sortOrder === 'asc') {
      searchParams.set('sortOrder', 'desc');
    } else {
      searchParams.set('sortOrder', 'asc');
    }

    searchParams.set('sortBy', sortField);
    history.push({
      search: searchParams.toString(),
    });
  };

  useMemo(() => {
    switch (sortOrder) {
      case 'asc':
        switch (sortBy) {
          case 'name':
            filteredPlanets
              .sort((a: Planet, b: Planet) => b.name.localeCompare(a.name));
            break;

          case 'equatorialRadius':
            filteredPlanets
              .sort((a: Planet, b: Planet) => b.equatorialRadius.value - a.equatorialRadius.value);
            break;

          case 'moons':
            filteredPlanets
              .sort((a: Planet, b: Planet) => b.moons.count - a.moons.count);
            break;

          default: filteredPlanets
            .sort((a: Planet, b: Planet) => b.name.localeCompare(a.name));
        }

        break;
      case 'desc':
        filteredPlanets.reverse();
        break;
      default: filteredPlanets
        .sort((a: Planet, b: Planet) => a.name.localeCompare(b.name));
    }
  }, [filteredPlanets, sortBy, sortOrder]);

  return (
    <div className="App">
      <Header />
      <div className="wrapper">

        <div className="input">
          <input
            type="text-area"
            className="input__value"
            placeholder="what you search"
            onChange={searchQuery}
          />
        </div>

        <div className="sort__buttons">
          {SORT_OPTIONS.map(sortField => (
            <button
              key={sortField}
              type="button"
              className="sort__buttons--item"
              onClick={() => sortingBy(sortField)}
            >
              {sortField}
            </button>
          ))}
        </div>
      </div>

      <PlanetList planets={filteredPlanets} />
    </div>
  );
};

export default App;
