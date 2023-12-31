import { debounce } from 'lodash';
import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_API } from '../../api';
import { Hero } from '../../hero';
import './HeroSearch.scoped.css';

const SearchResult: FC<{ heroes: Hero[] }> = ({ heroes }) => {
  return heroes.map((h) => (
    <li key={h.id}>
      <Link to={`/heroes/${h.id}`}>{h.name}</Link>
    </li>
  ));
};

const HeroSearch = () => {
  const [heroes, setHeroes] = useState<Array<Hero>>([]);
  const inputRef = useRef('');
  const debouncedHandleInputChange = useRef(
    debounce((inputValue: string) => {
      if (!inputValue) {
        setHeroes([]);
        return;
      }

      HERO_API.searchHeroes(inputValue).then((heroes) => {
        setHeroes(heroes);
      });
    }, 500)
  ).current;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    inputRef.current = inputValue;
    debouncedHandleInputChange(inputValue);
  };

  return (
    <>
      <div id="search-component">
        <label htmlFor="search-box">Hero Search</label>
        <input id="search-box" onInput={handleInputChange} />

        <ul className="search-result">
          <SearchResult heroes={heroes} />
        </ul>
      </div>
    </>
  );
};

export default HeroSearch;
