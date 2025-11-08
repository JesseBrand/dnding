import {LitElement, html, css} from 'lit';

// updated after 4/6/25

function fetchAllCharacters () {
  return [
    { name: 'Castle-8', xp: 49, dreamXp: 1 },
    { name: 'Sam', xp: 43, dreamXp: 5 },
    // { name: 'Horatio ', xp: 42, dreamXp: 1 },
    { name: 'Lynel', xp: 40 },
    { name: 'Enphine', xp: 40, dreamXp: 10 },
    { name: 'Bill', xp: 40, dreamXp: 7 },
    { name: 'Sir Dixon', xp: 40, dreamXp: 10 },
    //{ name: 'Paxton', xp: 38 },
    { name: 'Ru', xp: 34, dreamXp: 6 },
    { name: 'Malrik', xp: 34 },
    { name: 'Alaric', xp: 31 },
    { name: 'Flicker', xp: 31 },
    { name: 'Exilian', xp: 30 },
    // { name: 'Jur\'s Next', xp: 30 },
    { name: 'Nuk', xp: 27 },
    { name: 'Aboouck', xp: 26 },
    { name: 'Layden', xp: 24 },
    { name: 'Bavon', xp: 24 },
    { name: 'Drathuul', xp: 24 },
    { name: 'Girard', xp: 24 },
    { name: 'John', xp: 24 },
    { name: 'Navani', xp: 24 },
    // { name: 'Freya', xp: 24 },
    { name: 'Sir Dozak the Magnificient', xp: 0, dreamXp: 7 }
  ]
}

export {fetchAllCharacters};