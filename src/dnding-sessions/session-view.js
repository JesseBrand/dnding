import { LitElement, html, css } from "lit";
import { phbStyles } from "./phb-styles.js";
import { SessionEntry } from "./session-entry.js";
import { getAllSessions } from "./session-manager.js";

export class SessionView extends LitElement {
  static get properties() {
    return {
      selectedSessionId: { type: Number },
    };
  }

  static get styles() {
    return [phbStyles];
  }

  constructor() {
    super();
    this.sessions = getAllSessions();
    this.selectedSessionId = this.sessions.reverse()[0].id;
    console.log(this.selectedSessionId);
    console.log(this.sessions);
  }

  previousSession() {
    console.log("tes");
    this.selectedSessionId = this.selectedSessionId - 1;
  }
  nextSession() {
    this.selectedSessionId = this.selectedSessionId + 1;
  }

  render() {
    console.log("render", this.sessions);
    console.log(
      "prev",
      this.selectedSessionId === this.sessions[this.sessions.length - 1].id
    );
    console.log("next", this.selectedSessionId === this.sessions[0].id);
    return html`
      <h1>Sessions</h1>
      <button
        @click="${this.previousSession}"
        ?hidden="${this.selectedSessionId ===
        this.sessions[this.sessions.length - 1].id}"
      >
        Prev
      </button>
      <button
        @click="${this.nextSession}"
        ?hidden="${this.selectedSessionId === this.sessions[0].id}"
      >
        Next
      </button>
      ${this.sessions.map(
        (oSession) =>
          html`<div class="phb">
            <session-entry
              id="${oSession.id}"
              ocDate="${oSession.ocDate}"
              icDate="${oSession.icDate}"
              .characters=${oSession.characters}
              .happenings=${oSession.happenings}
            ></session-entry>
          </div>`
      )}
    `;
  }
}

window.customElements.define("session-view", SessionView);
