import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 38},
    {name: 'Castle-8', xp: 34},
    {name: 'Horatio ', xp: 32},
    {name: 'Alaric', xp: 29},
    {name: 'Ru', xp: 28},
    {name: 'Bill', xp: 26},
    {name: 'Nuk', xp: 26},
    {name: 'Paxton', xp: 25},
    {name: 'Sir Dixon', xp: 25},
    {name: 'Enphine', xp: 25},
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