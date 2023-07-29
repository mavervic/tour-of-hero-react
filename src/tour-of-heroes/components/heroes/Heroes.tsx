import { Link } from 'react-router-dom';

function HeroList({ hero, heroes, onSelect }) {
  return heroes.map((h) => (
    <li key={h.id}>
      <Link to={`/heroes/${h.id}`}>{h.name}</Link>
    </li>
  ));
}

export default function Heroes({ hero, heroes, onSelect }) {
  return (
    <ul className="heroes">
      <HeroList hero={hero} heroes={heroes} onSelect={onSelect} />
    </ul>
  );
}
