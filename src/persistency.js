import {LitElement, html, css} from 'lit';

// updated after 23/4/24

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 44, dreamXp: 1},
    { name: 'Sam', xp: 40, dreamXp: 4 },
    { name: 'Horatio ', xp: 40, dreamXp: 1 },
    { name: 'Lynel', xp: 39 },
    { name: 'Bill', xp: 37, dreamXp: 5 },
    { name: 'Enphine', xp: 36, dreamXp: 7 },
    { name: 'Paxton', xp: 35 },
    { name: 'Sir Dixon', xp: 35, dreamXp: 6 },
    { name: 'Ru', xp: 34, dreamXp: 5 },
    { name: 'Alaric', xp: 31 },
    { name: 'Nuk', xp: 27 },
    { name: 'Aboouck', xp: 26 },
    { name: 'Exilian', xp: 25 },
    { name: 'Layden', xp: 23 },
    { name: 'Bavon', xp: 22 },
    { name: 'Drathuul', xp: 22 },
    { name: 'Freya', xp: 22 },
    { name: 'Girard', xp: 22 },
    { name: 'John', xp: 22 },
    { name: 'Navani', xp: 22 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 4 }
  ]
}

export {fetchAllCharacters};