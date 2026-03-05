import {LitElement, html, css} from 'lit';

// updated after 17/12/25

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 50, dreamXp: 1 },
    { name: 'Sam', xp: 44, dreamXp: 5 },
    // { name: 'Horatio ', xp: 42, dreamXp: 1 },
    { name: 'Enphine', xp: 42, dreamXp: 11 },
    { name: 'Bill', xp: 42, dreamXp: 8 },
    { name: 'Sir Dixon', xp: 42, dreamXp: 11 },
    { name: 'Lynel', xp: 41 },
    //{ name: 'Paxton', xp: 38 },
    { name: 'Malrik', xp: 35 },
    { name: 'Ru', xp: 34, dreamXp: 6 },
    { name: 'Flicker', xp: 33 },
    { name: 'Alaric', xp: 31 },
    { name: 'Aboouck', xp: 31 },
    { name: 'Exilian', xp: 31 },
    // { name: 'Jur\'s Next', xp: 30 },
    { name: 'Nuk', xp: 27 },
    { name: 'Layden', xp: 24 },
    { name: 'Bavon', xp: 24 },
    { name: 'Drathuul', xp: 24 },
    { name: 'Girard', xp: 24 },
    { name: 'John', xp: 24 },
    { name: 'Navani', xp: 24 },
    // { name: 'Freya', xp: 24 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 8 }
  ]
}

export {fetchAllCharacters};