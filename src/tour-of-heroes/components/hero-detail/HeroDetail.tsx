import { useParams } from 'react-router-dom';

export default function HeroDetail({ fetchHero, handleNameChange }) {
  const { id } = useParams();
  const selectedHero = fetchHero(id);

  return (
    selectedHero && (
      <>
        <h2>{selectedHero.name.toUpperCase()} Details</h2>
        <div>
          <span>id: </span> {selectedHero.id}
        </div>
        <div>
          <label htmlFor="name">Hero name: </label>
          <input
            type="text"
            placeholder="name"
            value={selectedHero.name}
            onChange={handleNameChange}
          />
        </div>
      </>
    )
  );
}
