import {LitElement, html, css} from 'lit';
import {sortBy} from 'lodash-es';

function commaAndList(aList) {
  switch (aList.length) {
    case 0:
      return '';
    case 1:
      return aList[0];
    default:
     var aSubList = aList.slice(0, aList.length - 1);
     return aSubList.join(', ') + ' and ' + aList[aList.length - 1];
  }
}

function sort(aObjects, aFields) {
  if (!aFields) {
    throw new Error('No fields to sort by');
  }
  if (!Array.isArray(aFields)) {
    return _sort(aObjects, [aFields]);
  }
  var aCurr = aObjects;
  for (var i = 0; i < aFields.length; i++) {
    var sField = aFields[aFields.length - 1 - i];
    var bInverted = false;
    if (sField.endsWith('_desc')) {
      sField = sField.split('_')[0];
      bInverted = true;
    }
    aCurr = sortBy(aCurr, sField);
    if (bInverted) {
      aCurr = aCurr.reverse();
    }
  }

  return aCurr;
}

export {commaAndList, sort};