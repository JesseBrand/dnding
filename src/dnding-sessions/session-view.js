import {LitElement, html, css} from 'lit';

export class SessionView extends LitElement {

  static get properties() {
    return {};
  }

  render() {
    return html`
      <h1>Sessions</h1>
      Session Summaries can now be found at <a style="color:green" href="https://dnding.netlify.app/note/__events__involvement++++on++++the++++shard++++of++++tebinor">https://dnding.netlify.app</a>
    `;
  }

}

window.customElements.define('session-view', SessionView);