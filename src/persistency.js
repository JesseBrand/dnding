import {LitElement, html, css} from 'lit';

function fetchAllCharacters() {
  return [
    {name: 'Sam', xp: 40},
    {name: 'Castle-8', xp: 37},
    {name: 'Horatio ', xp: 34},
    {name: 'Lynel', xp: 34},
    {name: 'Ru', xp: 32},
    {name: 'Alaric', xp: 31},
    {name: 'Bill', xp: 30},
    {name: 'Enphine', xp: 29},
    {name: 'Paxton', xp: 29},
    {name: 'Sir Dixon', xp: 28},
    {name: 'Aboouck', xp: 26},
    {name: 'Nuk', xp: 26},
    {name: 'Exilian', xp: 24},
    {name: 'Layden', xp: 23},
    {name: 'Bavon', xp: 20},
    {name: 'Drathuul', xp: 20},
    {name: 'Freya', xp: 20},
    {name: 'Girard', xp: 20},
    {name: 'John', xp: 20},
    {name: 'Navani', xp: 20}
  ]
}

export {fetchAllCharacters};