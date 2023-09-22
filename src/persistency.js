import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 39},
    {name: 'Castle-8', xp: 35},
    {name: 'Horatio ', xp: 34},
    {name: 'Alaric', xp: 30},
    {name: 'Ru', xp: 30},
    {name: 'Bill', xp: 28},
    {name: 'Paxton', xp: 27},
    {name: 'Sir Dixon', xp: 27},
    {name: 'Enphine', xp: 27},
    {name: 'Nuk', xp: 26},
    {name: 'Aboouck', xp: 25},
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