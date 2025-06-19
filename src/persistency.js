import {LitElement, html, css} from 'lit';

// updated after 4/6/25

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 45, dreamXp: 1},
    { name: 'Sam', xp: 40, dreamXp: 4 },
    { name: 'Horatio ', xp: 41, dreamXp: 1 },
    { name: 'Lynel', xp: 39 },
    { name: 'Bill', xp: 37, dreamXp: 6 },
    { name: 'Enphine', xp: 37, dreamXp: 8 },
    { name: 'Paxton', xp: 36 },
    { name: 'Sir Dixon', xp: 36, dreamXp: 8 },
    { name: 'Ru', xp: 34, dreamXp: 5 },
    { name: 'Alaric', xp: 31 },
    { name: 'Nuk', xp: 27 },
    { name: 'Aboouck', xp: 26 },
    { name: 'Exilian', xp: 26 },
    { name: 'Layden', xp: 23 },
    { name: 'Bavon', xp: 22 },
    { name: 'Drathuul', xp: 22 },
    { name: 'Freya', xp: 22 },
    { name: 'Girard', xp: 22 },
    { name: 'John', xp: 22 },
    { name: 'Navani', xp: 22 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 5 }
  ]
}

export {fetchAllCharacters};