import { LitElement, html, css } from "lit";
import { commaAndList } from "../util.js";
import { phbStyles } from "./phb-styles.js";

export class SessionEntry extends LitElement {
  static get styles() {
    return [
      phbStyles,
      css`
        .purple-header {
          color: purple;
          text-align: center;
        }
      `,
    ];
  }

  static get properties() {
    return {
      id: { type: Number },
      sessionName: { type: String },
      ocDate: { type: String },
      icDate: { type: String },
      characters: { type: Array },
      happenings: { type: Array },
      loot: { type: Array },
      repercussions: { type: Array },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="session">
        <h2>Session ${this.id}: ${this.ocDate}</h2>
        <p>IC Date: ${this.icDate}</p>
        <p>The party, consisting of ${commaAndList(this.characters)}:
          <ul>
            ${this.happenings.map(
              (sHappening) => html`<li>${sHappening};</li>`
            )}
          </ul>
        </p>
      </div>
      <slot></slot>
    `;
  }
}

window.customElements.define("session-entry", SessionEntry);
