import {sort} from '../util.js';
import {fetchAllCharacters} from '../persistency.js';

function getAllCharacters() {
  return sort(fetchAllCharacters(), ['xp_desc', 'name_desc']);
}
  
function getXpPerLevel() {
  return [0,1,3,6,10,14,19,24,30,36,42,48,55,62,69,78,86,94,102,110];
  // 1 2 3 4 4 5 5 6 6 6 6 7 7 7 7 8 8 8 8
}

function getXpPerDreamLevel() {
  return [0,2,6,10,15];
}

export {getAllCharacters, getXpPerLevel, getXpPerDreamLevel};