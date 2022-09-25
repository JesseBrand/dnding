import { html, LitElement } from "lit";
import { sessionViewStyles } from "./session-view-styles.js";
import { getAllSessions } from "./session-manager.js";
import { SessionEntry } from "./session-entry.js";
import { SessionTOC } from "./session-toc.js";

export class SessionView extends LitElement {
  static get properties() {
    return {
      selectedBookPage: { type: Number },
    };
  }

  static get styles() {
    return [sessionViewStyles];
  }

  constructor() {
    super();
    this.sessions = getAllSessions();
    this.bookPages =
      Math.floor(this.sessions[this.sessions.length - 1].id / 2) + 1;
    this.selectedBookPage = this.bookPages;
    this.titles = this.sessions.map((session) => {
      return { title: session.ocDate, page: session.id };
    });
  }

  previousPages() {
    this.selectedBookPage = this.selectedBookPage - 1;
    console.log(this.selectedBookPage);
  }
  nextPages() {
    this.selectedBookPage = this.selectedBookPage + 1;
  }

  render() {
    const itemTemplates = [];
    for (let i = 1; i <= this.sessions.length + 1; i += 2) {
      const leftSession = this.sessions[i - 2];
      const rightSession = this.sessions[i - 1];
      if (leftSession) {
        itemTemplates.push(html`<div
          class="phb page left-session ${Math.floor(leftSession.id / 2) + 1 !==
          this.selectedBookPage
            ? "hidden"
            : ""}"
        >
          <session-entry
            id="${leftSession.id}"
            ocDate="${leftSession.ocDate}"
            icDate="${leftSession.icDate}"
            .characters="${leftSession.characters}"
            .happenings="${leftSession.happenings}"
          ></session-entry>
          <div class="pageNumber auto"></div>
          <div class="footnote">
            Session ${leftSession.id}: ${leftSession.ocDate}
          </div>
        </div>`);
      } else if (i === 1) {
        //first page - left side - table of contents? image?
        itemTemplates.push(html`<div
          class="phb left-session ${1 !== this.selectedBookPage
            ? "hidden"
            : ""}"
        >
          <div class="toc">
            <session-toc></session-toc>
          </div>
        </div>`);
      }

      if (rightSession) {
        itemTemplates.push(html` <div
          class="phb page right-session ${Math.floor(rightSession.id / 2) +
            1 !==
          this.selectedBookPage
            ? "hidden"
            : ""}"
        >
          <session-entry
            id="${rightSession.id}"
            ocDate="${rightSession.ocDate}"
            icDate="${rightSession.icDate}"
            .characters=${rightSession.characters}
            .happenings=${rightSession.happenings}
          ></session-entry>
          <div class="pageNumber auto"></div>
          <div class="footnote">
            Session ${rightSession.id}: ${rightSession.ocDate}
          </div>
        </div>`);
      }
    }

    return html`
      <h1>Sessions</h1>
      <div style="float:left; width:100%">
        <button
          @click="${this.previousPages}"
          ?hidden="${this.selectedBookPage ===
          Math.floor(this.sessions[0].id / 2) + 1}"
        >
          Prev
        </button>
        <button
          @click="${this.nextPages}"
          ?hidden="${this.selectedBookPage ===
          Math.floor(this.sessions[this.sessions.length - 1].id / 2) + 1}"
        >
          Next
        </button>
      </div>
      ${itemTemplates}
    `;
  }
}

window.customElements.define("session-view", SessionView);
