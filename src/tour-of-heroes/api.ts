import { Hero } from './hero';
import { HEROES } from './mock-heroes';

export const heroAPI = {
  heroes: HEROES,

  getHeroes: (): Promise<Hero[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          messageAPI.add('HeroService: fetched heroes');
          resolve(heroAPI.heroes);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  getHeroById: (id: string): Promise<Hero | null> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          messageAPI.add(`HeroService: fetched hero id=${id}`);
          resolve(heroAPI.heroes.find((hero) => hero.id === ~~id) || null);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },

  searchHeroes: (term: string): Promise<Hero[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          messageAPI.add(`HeroService: searched heroes matching "${term}"`);
          resolve(
            heroAPI.heroes.filter((hero) =>
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
          messageAPI.add(`HeroService: updated hero id=${hero.id}`);
          heroAPI.heroes = heroAPI.heroes.map((h) =>
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
          messageAPI.add(`HeroService: added hero name=${name}`);
          const hero: Hero = {
            id: Math.max(...heroAPI.heroes.map((h) => h.id)) + 1,
            name,
          };
          heroAPI.heroes = [...heroAPI.heroes, hero];
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
          messageAPI.add(`HeroService: deleted hero id=${hero.id}`);
          heroAPI.heroes = heroAPI.heroes.filter((h) => h.id !== hero.id);
          resolve(hero);
        },
        Math.floor(Math.random() * 100) + 200
      );
    });
  },
};

export const messageAPI = {
  messages: [] as string[],

  add(message: string) {
    this.messages.push(message);
  },

  clear() {
    this.messages = [];
  },
};
