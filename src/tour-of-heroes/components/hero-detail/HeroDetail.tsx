export default function HeroDetail({ hero, handleNameChange }) {
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
