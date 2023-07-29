import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

  function fetchHero(id: string) {
    const hero = heroes.find((h) => h.id === ~~id);
    return hero;
  }

  return (
    <>
      <h2>My Heroes</h2>
      <nav>
        <a href="/">Dashboard</a>
        <a href="/heroes">Heroes</a>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard heroes={heroes} />} />
        <Route
          path="/heroes"
          element={<Heroes hero={hero} heroes={heroes} onSelect={onSelect} />}
        />
        <Route
          path="/heroes/:id"
          element={
            <HeroDetail
              hero={hero}
              fetchHero={fetchHero}
              handleNameChange={handleNameChange}
            />
          }
        />
      </Routes>

      <Messages />
    </>
  );
}
