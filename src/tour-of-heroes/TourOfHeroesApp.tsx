import { useEffect, useState } from 'react';
import { heroAPI, messageAPI } from './api';
import { Hero } from './hero';

function HeroDetail({ hero, handleNameChange }) {
  return (
    hero && (
      <>
        <h2>{hero.name.toUpperCase()} Details</h2>
        <div>
          <span>id: </span> {hero.id}
        </div>
        <div>
          <label htmlFor="name">Hero name: </label>
          <input
            id="name"
            name="name"
            placeholder="name"
            onChange={handleNameChange}
          />
        </div>
      </>
    )
  );
}

function Msg() {
  return messageAPI.messages.map((message) => {
    return <div>{message}</div>;
  });
}

function Messages() {
  const hasMsg = messageAPI.messages.length > 0;
  return (
    hasMsg && (
      <>
        <div>
          <h2>Messages</h2>
          <button
            type="button"
            className="clear"
            onClick={() => messageAPI.clear()}
          >
            Clear messages
          </button>
          <Msg />
        </div>
      </>
    )
  );
}

function DashboardHero({ heroes }) {
  return heroes.map((h) => <a>{h.name}</a>);
}

function Dashboard() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    heroAPI.getHeroes().then((heroes) => setHeroes(heroes.slice(1, 5)));
  }, []);

  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        <DashboardHero heroes={heroes} />
      </div>
    </>
  );
}

export default function TourOfHeroesApp() {
  const [hero, setHero] = useState<Hero>(null as unknown as Hero);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    heroAPI.getHeroes().then((heroes) => setHeroes(heroes));
  }, []);

  function handleNameChange(event) {
    setHero({
      ...hero,
      name: event.target.value,
    });
  }

  function onSelect(hero: Hero) {
    return () => {
      setHero(hero);
      messageAPI.add(`HeroesComponent: Selected hero id=${hero.id}`);
    };
  }

  function HeroList() {
    return heroes.map((h) => (
      <li key={h.id}>
        <button
          type="button"
          className={h?.id === hero?.id ? 'selected' : ''}
          onClick={onSelect(h)}
        >
          <span className="badge">{h.id}</span>
          <span className="name">{h.name}</span>
        </button>
      </li>
    ));
  }

  return (
    <>
      <h2>My Heroes</h2>
      <nav>
        <a>Dashboard</a>
        <a>Heroes</a>
      </nav>

      <Dashboard />

      <ul className="heroes">
        <HeroList />
      </ul>

      <HeroDetail hero={hero} handleNameChange={handleNameChange} />
      <Messages />
    </>
  );
}
