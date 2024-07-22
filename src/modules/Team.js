import Character from './Character';

export default class Team {
    constructor() {
      this.characters = new Set();
    }
  
    add(character) {
      if (character instanceof Character) {
        this.characters.add(character);
      } else {
        throw new Error('Only instances of Character can be added');
      }
    }
  
    [Symbol.iterator]() {
      let current = 0;
      const charactersArray = Array.from(this.characters);
      return {
        next() {
          if (current < charactersArray.length) {
            return { value: charactersArray[current++], done: false };
          }
          return { done: true };
        },
      };
    }
  }
  