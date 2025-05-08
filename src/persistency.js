import {LitElement, html, css} from 'lit';

// updated after 23/4/24

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 43, dreamXp: 1},
    { name: 'Sam', xp: 40, dreamXp: 4 },
    { name: 'Horatio ', xp: 39, dreamXp: 1 },
    { name: 'Lynel', xp: 39 },
    { name: 'Bill', xp: 36, dreamXp: 5 },
    { name: 'Enphine', xp: 35, dreamXp: 7 },
    { name: 'Ru', xp: 34, dreamXp: 5 },
    { name: 'Paxton', xp: 34 },
    { name: 'Sir Dixon', xp: 34, dreamXp: 6 },
    { name: 'Alaric', xp: 31 },
    { name: 'Nuk', xp: 27 },
    { name: 'Aboouck', xp: 26 },
    { name: 'Exilian', xp: 24 },
    { name: 'Layden', xp: 23 },
    { name: 'Bavon', xp: 21 },
    { name: 'Drathuul', xp: 21 },
    { name: 'Freya', xp: 21 },
    { name: 'Girard', xp: 21 },
    { name: 'John', xp: 21 },
    { name: 'Navani', xp: 21 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 4 }
  ]
}

export {fetchAllCharacters};