import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 38},
    {name: 'Castle-8', xp: 35},
    {name: 'Horatio ', xp: 33},
    {name: 'Alaric', xp: 30},
    {name: 'Ru', xp: 29},
    {name: 'Bill', xp: 27},
    {name: 'Nuk', xp: 26},
    {name: 'Paxton', xp: 26},
    {name: 'Sir Dixon', xp: 26},
    {name: 'Enphine', xp: 26},
    {name: 'Aboouck', xp: 24},
    {name: 'Exilian', xp: 24},
    {name: 'Bavon', xp: 18},
    {name: 'Drathuul', xp: 18},
    {name: 'Freya', xp: 18},
    {name: 'Girard', xp: 18},
    {name: 'John', xp: 18},
    {name: 'Navani', xp: 18}
  ]
}

export {fetchAllCharacters};