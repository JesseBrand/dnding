import { css, html, LitElement } from "lit";
import { commaAndList } from "../util.js";
import { sessionEntryStyles } from "./session-entry-styles.js";

export class SessionEntry extends LitElement {
  static get styles() {
    return [
      sessionEntryStyles,
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
        <span class="topnote">Date: ${this.icDate}</span>
        <h1>The Title of the Story</h1>
        <p>The party members</p>
        <dl>
          ${this.happenings.map(
            (sHappening) =>
              html`<dd>${sHappening};</dd>
                <br />`
          )}
        </dl>
        <div class="columnSplit"></div>
        <h5 class="purple-header">The Party</h5>

        <p>${commaAndList(this.characters)}:</p>
      </div>
      <slot></slot>
    `;
  }
}

window.customElements.define("session-entry", SessionEntry);
