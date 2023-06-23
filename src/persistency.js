import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 37},
    {name: 'Castle-8', xp: 33},
    {name: 'Horatio ', xp: 31},
    {name: 'Alaric', xp: 27},
    {name: 'Ru', xp: 27},
    {name: 'Nuk', xp: 25},
    {name: 'Bill', xp: 24},
    {name: 'Paxton', xp: 24},
    {name: 'Enphine', xp: 23},
    {name: 'Sir Dixon', xp: 23},
    {name: 'Aboouck', xp: 22},
    {name: 'Exilian', xp: 22},
    {name: 'Bavon', xp: 18},
    {name: 'Drathuul', xp: 18},
    {name: 'Freya', xp: 18},
    {name: 'Girard', xp: 18},
    {name: 'John', xp: 18},
    {name: 'Navani', xp: 18}
  ]
}

export {fetchAllCharacters};