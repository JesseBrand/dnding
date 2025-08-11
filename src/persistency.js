import {LitElement, html, css} from 'lit';

// updated after 4/6/25

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 46, dreamXp: 1},
    { name: 'Sam', xp: 41, dreamXp: 5 },
    { name: 'Horatio ', xp: 41, dreamXp: 1 },
    { name: 'Lynel', xp: 39 },
    { name: 'Bill', xp: 37, dreamXp: 6 },
    { name: 'Enphine', xp: 38, dreamXp: 9 },
    { name: 'Paxton', xp: 36 },
    { name: 'Sir Dixon', xp: 37, dreamXp: 9 },
    { name: 'Ru', xp: 34, dreamXp: 6 },
    { name: 'Alaric', xp: 31 },
    { name: 'Nuk', xp: 27 },
    { name: 'Aboouck', xp: 26 },
    { name: 'Exilian', xp: 26 },
    { name: 'Layden', xp: 23 },
    { name: 'Bavon', xp: 23 },
    { name: 'Drathuul', xp: 23 },
    { name: 'Freya', xp: 23 },
    { name: 'Girard', xp: 23 },
    { name: 'John', xp: 23 },
    { name: 'Navani', xp: 23 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 6 }
  ]
}

export {fetchAllCharacters};