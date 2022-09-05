import {LitElement, html, css} from 'lit';
import {CharacterView} from './dnding-characters/character-view.js';
import {SessionView} from './dnding-sessions/session-view.js';

export class AppView extends LitElement {
  static get styles() {
    return css`
    
    `;
  }

  static get properties() {
    return {};
  }


  render() {
    return html`
      <character-view></character-view>
      <session-view></session-view>
      `;
  }

}

window.customElements.define('dnding-app', AppView);