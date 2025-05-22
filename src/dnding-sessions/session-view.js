import {LitElement, html, css} from 'lit';

export class SessionView extends LitElement {

  static get properties() {
    return {};
  }

  render() {
    return html`
      <h1>Sessions</h1>
      Session Summaries can now be found at <a style="color:green" href="https://obsidian.dnding.nl/note/__events__Involvement++++on++++the++++Shard++++of++++Tebinor">https://obsidian.dnding.nl</a>
    `;
  }

}

window.customElements.define('session-view', SessionView);