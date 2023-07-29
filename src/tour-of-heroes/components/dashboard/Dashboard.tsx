import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroAPI } from '../../api';
import { Hero } from '../../hero';
import HeroSearch from '../hero-search/HeroSearch';
import './Dashboard.scoped.css';

const DashboardHero = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    heroAPI.getHeroes().then((heroes) => {
      setHeroes(heroes);
    });
  }, []);

  const heroesSlice = heroes.slice(0, 4);
  return heroesSlice.map((h) => (
    <Link key={h.id} to={`/heroes/${h.id}`}>
      {h.name}
    </Link>
  ));
};

const Dashboard = () => {
  return (
    <div className="root">
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        <DashboardHero />
      </div>
      <HeroSearch />
    </div>
  );
};

export default Dashboard;
