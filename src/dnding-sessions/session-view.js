import {LitElement, html, css} from 'lit';
import {SessionEntry} from './session-entry.js';
import {getAllSessions} from './session-manager.js'

export class SessionView extends LitElement {

  static get properties() {
    return {};
  }
  
  constructor() {
    super();
    this.sessions = getAllSessions();
  }

  render() {
    return html`
      <h1>Sessions</h1>
      ${this.sessions.map(oSession => html`<session-entry id="${oSession.id}" sessionName="${oSession.sessionName}" ocDate="${oSession.ocDate}" icDate="${oSession.icDate}" .characters=${oSession.characters} .happenings=${oSession.happenings} .loot=${oSession.loot} .repercussions=${oSession.repercussions}></session-entry>`)}
    `;
  }

}

window.customElements.define('session-view', SessionView);