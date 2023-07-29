function HeroList({ hero, heroes, onSelect }) {
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

export default function Heroes({ hero, heroes, onSelect }) {
  return (
    <ul className="heroes">
      <HeroList hero={hero} heroes={heroes} onSelect={onSelect} />
    </ul>
  );
}
