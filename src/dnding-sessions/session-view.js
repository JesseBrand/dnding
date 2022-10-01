import { html, LitElement } from "lit";
import { sessionViewStyles } from "./session-view-styles.js";
import { getAllSessions } from "./session-manager.js";
import { SessionEntry } from "./session-entry.js";
import { SessionTOC } from "./session-toc.js";
import { SessionIntro } from "./session-intro.js";

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
    console.log(this.sessions);
    this.titles = this.sessions.map((session) => {
      return { title: session.ocDate, page: session.id };
    });
  }

  updated() {
    super.updated();
    var pages = this.renderRoot.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (i === 0) {
        page.classList.add("flipped");
      }
      if (i % 2 === 1) {
        page.style.zIndex = pages.length - i;
      }
    }

    for (var i = 0; i < pages.length; i++) {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick = function () {
        if (this.pageNum === 1) {
        } else if (this.pageNum % 2 === 0) {
          this.classList.add("flipped");
          this.nextElementSibling.classList.add("flipped");
        } else {
          this.classList.remove("flipped");
          this.previousElementSibling.classList.remove("flipped");
        }
      };
    }
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
    //itemTemplates.push(html``);
    // first page - left side - introduction?
    itemTemplates.push(html`<div class="phb page">
      <div>
        <session-intro></session-intro>
      </div>
    </div>`);

    //first page - right side - table of contents? image?
    itemTemplates.push(html`<div class="phb page">
      <div class="toc">
        <session-toc></session-toc>
      </div>
    </div>`);

    for (let i = 0; i < this.sessions.length; i++) {
      const session = this.sessions[i];
      //const rightSession = this.sessions[i - 1];
      if (session) {
        itemTemplates.push(html`<div class="phb page">
          <session-entry
            id="${session.id}"
            ocDate="${session.ocDate}"
            icDate="${session.icDate}"
            .characters="${session.characters}"
            .happenings="${session.happenings}"
          ></session-entry>
          <div class="pageNumber auto"></div>
          <div class="footnote">Session ${session.id}: ${session.ocDate}</div>
        </div>`);
      }

      /*if (rightSession) {
        itemTemplates.push(html` <div class="phb page right-session">
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
      }*/
    }

    return html`
      <h1>Sessions</h1>
      <div class="book">
        <div class="phb-black-page"></div>
        <div class="pages">${itemTemplates}</div>
      </div>
    `;
  }
}

window.customElements.define("session-view", SessionView);
