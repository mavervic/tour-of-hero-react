import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { heroAPI } from '../../api';
import { Hero } from '../../hero';
import './HeroDetail.module.css';

const HeroDetail = () => {
  const emptyHero = { id: null as unknown as number, name: '' };
  const { id } = useParams();
  const [selectedHero, setHero] = useState<Hero>(emptyHero);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      heroAPI.getHeroById(id).then((hero) => setHero(hero || emptyHero));
    }
  }, []); // FIXME [id]?

  const handleNameChange = (event: { target: { value: string } }) => {
    setHero({
      ...selectedHero,
      name: event.target.value,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  const save = () => {
    heroAPI.updateHero(selectedHero).then(goBack);
  };

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

        <button type="button" onClick={goBack}>
          go back
        </button>
        <button type="button" onClick={save}>
          save
        </button>
      </>
    )
  );
};

export default HeroDetail;
