import {sort} from '../util.js';
import {fetchAllCharacters} from '../persistency.js';

function getAllCharacters() {
  return sort(fetchAllCharacters(), ['xp_desc', 'name_desc']);
}
  
function getXpPerLevel() {
  return [0,1,3,6,10,15,20,25,30,36,42,48,54,61,68,75,82,89,97,105];
}

export {getAllCharacters, getXpPerLevel};