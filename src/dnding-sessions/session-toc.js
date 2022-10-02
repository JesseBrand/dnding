import { css, html, LitElement } from "lit";
import { sessionTOCStyles } from "./session-toc-styles.js";

export class SessionTOC extends LitElement {
  static get styles() {
    return [
      sessionTOCStyles,
      css`
        .center {
          text-align: center;
        }
      `,
    ];
  }

  static get properties() {
    return {
      toc: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html` <h1 class="center">Sessies Table of Content</h1>
      <ul>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
        <li>
          <h4>
            <a><span>Some title of the session</span><span> 1</span></a>
          </h4>
        </li>
      </ul>`;
  }
}

window.customElements.define("session-toc", SessionTOC);
