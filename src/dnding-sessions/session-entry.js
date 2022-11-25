import {LitElement, html, css} from 'lit';
import {commaAndList} from '../util.js';

export class SessionEntry extends LitElement {
  static get styles() {
    return css`
    `;
  }

  static get properties() {    
    return {
      id: {type: Number},
      name: {type: String},
      ocDate: {type: String},
      icDate: {type: String},
      characters: {type: Array},
      happenings: {type: Array},
      loot: {type: Array},
      repercussions: {type: Array}
    };
  }

  constructor() {
    super();
    console.log(this, this.characters);
  }

  render() {
    return html`
      <div class="session">
        <h2>Session ${this.id}: ${this.name} (${this.ocDate})</h2>
        <p>IC Date: ${this.icDate}</p>
        <p>The party, consisting of ${commaAndList(this.characters)}:
          <ul>
            ${this.happenings.map(sHappening => html`<li>${sHappening};</li>`)}
          </ul>
        </p>
        <h3>Loot & Rewards</h3>
        <ul>
          ${this.loot.map(sLoot => html`<li>${sLoot}</li>`)}
        </ul>
        <h3>Effects & Repercussions</h3>
        <ul>
          ${this.repercussions.map(sRepercussion => html`<li>${sRepercussion}</li>`)}
        </ul>
      </div>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('session-entry', SessionEntry);