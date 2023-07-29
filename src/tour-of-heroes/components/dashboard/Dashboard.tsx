import { Link } from 'react-router-dom';

function DashboardHero({ heroes }) {
  const heroesSlice = heroes.slice(1, 5);
  return heroesSlice.map((h) => <Link to={`/heroes/${h.id}`}>{h.name}</Link>);
}

export default function Dashboard({ heroes }) {
  return (
    <>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        <DashboardHero heroes={heroes} />
      </div>
    </>
  );
}
