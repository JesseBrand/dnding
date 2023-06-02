import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 36},
    {name: 'Castle-8', xp: 32},
    {name: 'Horatio ', xp: 31},
    {name: 'Alaric', xp: 26},
    {name: 'Ru', xp: 26},
    {name: 'Nuk', xp: 25},
    {name: 'Bill', xp: 23},
    {name: 'Paxton', xp: 23},
    {name: 'Enphine', xp: 22},
    {name: 'Sir Dixon', xp: 22},
    {name: 'Aboouck', xp: 21},
    {name: 'Exilian', xp: 21},
    {name: 'Bavon', xp: 18},
    {name: 'Drathuul', xp: 18},
    {name: 'Freya', xp: 18},
    {name: 'Girard', xp: 18},
    {name: 'John', xp: 18},
    {name: 'Navani', xp: 18}
  ]
}

export {fetchAllCharacters};