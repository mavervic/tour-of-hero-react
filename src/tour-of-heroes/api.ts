import { Hero } from './hero';
import { HEROES } from './mock-heroes';

export const heroAPI = {
  getHeroes: (): Promise<Hero[]> => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          messageAPI.add('HeroService: fetched heroes');
          resolve(HEROES);
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
