import {LitElement, html, css} from 'lit';

// updated after 27/3/24

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 42, dreamXp: 1},
    { name: 'Sam', xp: 40, dreamXp: 4 },
    { name: 'Horatio ', xp: 39, dreamXp: 1 },
    { name: 'Lynel', xp: 38 },
    { name: 'Bill', xp: 35, dreamXp: 4 },
    { name: 'Ru', xp: 34, dreamXp: 5 },
    { name: 'Enphine', xp: 34, dreamXp: 6 },
    { name: 'Paxton', xp: 33 },
    { name: 'Sir Dixon', xp: 33, dreamXp: 6 },
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
    { name: 'Navani', xp: 21 }
    // Dozak dreamXp: 3
  ]
}

export {fetchAllCharacters};