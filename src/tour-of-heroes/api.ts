import { Hero } from './hero';
import { HEROES } from './mock-heroes';

export const HERO_API = {
  heroes: HEROES,

  getHeroes: (): Promise<Hero[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          MESSAGE_API.add('HeroService: fetched heroes');
          resolve(HERO_API.heroes);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  getHeroById: (id: string): Promise<Hero | null> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          MESSAGE_API.add(`HeroService: fetched hero id=${id}`);
          resolve(HERO_API.heroes.find((hero) => hero.id === ~~id) || null);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  searchHeroes: (term: string): Promise<Hero[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          MESSAGE_API.add(`HeroService: searched heroes matching "${term}"`);
          resolve(
            HERO_API.heroes.filter((hero) =>
              hero.name.toLowerCase().includes(term.toLowerCase())
            )
          );
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  updateHero(hero: Hero): Promise<Hero> {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          MESSAGE_API.add(`HeroService: updated hero id=${hero.id}`);
          HERO_API.heroes = HERO_API.heroes.map((h) =>
            h.id === hero.id ? hero : h
          );
          resolve(hero);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  addHero(name: string): Promise<Hero> {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          MESSAGE_API.add(`HeroService: added hero name=${name}`);
          const hero: Hero = {
            id: Math.max(...HERO_API.heroes.map((h) => h.id)) + 1,
            name,
          };
          HERO_API.heroes = [...HERO_API.heroes, hero];
          resolve(hero);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  deleteHero(hero: Hero): Promise<Hero> {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          MESSAGE_API.add(`HeroService: deleted hero id=${hero.id}`);
          HERO_API.heroes = HERO_API.heroes.filter((h) => h.id !== hero.id);
          resolve(hero);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },
};

export const MESSAGE_API = {
  messages: [] as string[],

  add(message: string) {
    MESSAGE_API.messages.push(message);
  },

  clear() {
    MESSAGE_API.messages = [];
  },
};
