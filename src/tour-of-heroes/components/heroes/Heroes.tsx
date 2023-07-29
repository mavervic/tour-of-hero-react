import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroAPI } from '../../api';
import { Hero } from '../../hero';

function HeroList({ heroes, deleteHero }) {
  return heroes.map((h) => (
    <li key={h.id}>
      <Link to={`/heroes/${h.id}`}>
        <span className="badge">{h.id}</span> {h.name}
      </Link>

      <button
        type="button"
        className="delete"
        title="delete hero"
        onClick={() => deleteHero(h.id)}
      >
        x
      </button>
    </li>
  ));
}

export default function Heroes() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    heroAPI.getHeroes().then((heroes) => setHeroes(heroes));
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  const handleButtonClick = () => {
    const heroName = inputValue.trim();
    if (!heroName) {
      return;
    }

    heroAPI.addHero(heroName).then((hero) => {
      setHeroes([...heroes, hero]);
    });

    setInputValue('');
  };

  const deleteHero = (id: number) => {
    heroAPI.deleteHero(id).then(() => {
      setHeroes(heroes.filter((h) => h.id !== id));
    });
  };

  return (
    <>
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
}
