import {LitElement, html, css} from 'lit';
import {CharacterEntry} from './character-entry.js';
import {getAllCharacters, getXpPerLevel} from './character-manager.js'
import {max} from 'lodash-es';

export class CharacterView extends LitElement {

  static get properties() {
    return {};
  }
  
  constructor() {
    super();
    this.characters = getAllCharacters();
    this.xpPerLevel = this._trimToRange(getXpPerLevel());
  }

  _trimToRange(aXpPerLevel) {
    var iMaxXp = max(this.characters.map(oCharacter => oCharacter.xp));
    return aXpPerLevel.slice(0, aXpPerLevel.filter(iXp => iXp <= iMaxXp).length + 1);
  }

  render() {
    return html`
      <h1>Characters</h1>
      ${this.characters.map(oCharacter => html`<character-entry name="${oCharacter.name}" xp="${oCharacter.xp}" .xpPerLevel=${this.xpPerLevel}></character-entry>`)}
    `;
  }

}

window.customElements.define('character-view', CharacterView);