import {LitElement, html, css} from 'lit';

// updated after 4/6/25

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 48, dreamXp: 1 },
    { name: 'Sam', xp: 42, dreamXp: 5 },
    // { name: 'Horatio ', xp: 42, dreamXp: 1 },
    { name: 'Lynel', xp: 40 },
    { name: 'Enphine', xp: 39, dreamXp: 10 },
    { name: 'Bill', xp: 39, dreamXp: 7 },
    { name: 'Sir Dixon', xp: 39, dreamXp: 10 },
    //{ name: 'Paxton', xp: 38 },
    { name: 'Ru', xp: 34, dreamXp: 6 },
    { name: 'Malrik', xp: 32 },
    { name: 'Alaric', xp: 31 },
    // { name: 'Jur\'s Next', xp: 28 },
    { name: 'Nuk', xp: 27 },
    { name: 'Aboouck', xp: 26 },
    { name: 'Exilian', xp: 26 },
    { name: 'Layden', xp: 23 },
    { name: 'Bavon', xp: 23 },
    { name: 'Drathuul', xp: 23 },
    // { name: 'Freya', xp: 23 },
    { name: 'Girard', xp: 23 },
    { name: 'John', xp: 23 },
    { name: 'Navani', xp: 23 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 7 }
  ]
}

export {fetchAllCharacters};