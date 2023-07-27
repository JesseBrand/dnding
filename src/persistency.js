import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 37},
    {name: 'Castle-8', xp: 33},
    {name: 'Horatio ', xp: 31},
    {name: 'Alaric', xp: 28},
    {name: 'Ru', xp: 28},
    {name: 'Bill', xp: 25},
    {name: 'Nuk', xp: 25},
    {name: 'Paxton', xp: 25},
    {name: 'Enphine', xp: 24},
    {name: 'Sir Dixon', xp: 24},
    {name: 'Aboouck', xp: 23},
    {name: 'Exilian', xp: 23},
    {name: 'Bavon', xp: 18},
    {name: 'Drathuul', xp: 18},
    {name: 'Freya', xp: 18},
    {name: 'Girard', xp: 18},
    {name: 'John', xp: 18},
    {name: 'Navani', xp: 18}
  ]
}

export {fetchAllCharacters};