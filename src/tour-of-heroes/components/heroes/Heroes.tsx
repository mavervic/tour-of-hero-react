import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_API } from '../../api';
import { Hero } from '../../hero';
import './Heroes.scoped.css';

const HeroList = ({
  heroes,
  deleteHero,
}: {
  heroes: Hero[];
  deleteHero: (hero: Hero) => void;
}) => {
  return heroes.map((hero) => (
    <li key={hero.id}>
      <Link to={`/heroes/${hero.id}`}>
        <span className="badge">{hero.id}</span> {hero.name}
      </Link>

      <button
        type="button"
        className="delete"
        title="delete hero"
        onClick={() => deleteHero(hero)}
      >
        x
      </button>
    </li>
  ));
};

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    HERO_API.getHeroes().then((heroes) => setHeroes(heroes));
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const heroName = inputValue.trim();
    if (!heroName) {
      return;
    }

    HERO_API.addHero(heroName).then((hero) => {
      setHeroes([...heroes, hero]);
    });

    setInputValue('');
  };

  const deleteHero = (hero: Hero) => {
    HERO_API.deleteHero(hero).then(() => {
      setHeroes(heroes.filter((h) => h.id !== hero.id));
    });
  };

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">Hero name: </label>
        <input id="new-hero" onChange={handleInputChange} />

        <button
          type="button"
          className="add-button"
          onClick={handleButtonClick}
        >
          Add hero
        </button>
      </div>

      <ul className="heroes">
        <HeroList heroes={heroes} deleteHero={deleteHero} />
      </ul>
    </>
  );
};

export default Heroes;
