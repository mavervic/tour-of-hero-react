import { useEffect, useState } from 'react';
import { heroAPI, messageAPI } from './api';
import Dashboard from './components/dashboard/Dashboard';
import HeroDetail from './components/hero-detail/HeroDetail';
import Heroes from './components/heroes/Heroes';
import Messages from './components/messages/Messages';
import { Hero } from './hero';

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

  return (
    <>
      <h2>My Heroes</h2>
      <nav>
        <a>Dashboard</a>
        <a>Heroes</a>
      </nav>

      <Dashboard heroes={heroes} />
      <Heroes hero={hero} heroes={heroes} onSelect={onSelect} />

      <HeroDetail hero={hero} handleNameChange={handleNameChange} />
      <Messages />
    </>
  );
}
