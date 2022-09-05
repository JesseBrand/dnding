import {LitElement, html, css} from 'lit';

export class CharacterEntry extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        max-width: 800px;
        color: #fff;
      }
      .character-name {
        font-family: xalterion;
        font-size: 28px;
      }
      .bar {
        letter-spacing: -0.31em; /* webkit */
        *letter-spacing: normal; /* reset IE < 8 */
        word-spacing: -0.43em; /* IE < 8 && gecko */
      }
      .legend > *,
      .bar > * {
        display: inline-block;
      }
      .legend .left {
        margin-right: -16px;
      }
      .legend .middle {
        margin-left: 1px;
        text-align: right;
      }
      .bar > * {
        height: 16px;
      }
      .left,
      .right {
        width: 6px;
      }
      .middle,
      .middle-filled {
        width: 15px;
      }
      .bar .middle,
      .bar .middle-filled {
        border-right: solid 1px #666;
      }
      .bar .middle {
        background-image: url('/assets/img/frame_mid.png');
      }
      .bar .middle-filled {
        background-image: url('/assets/img/frame_mid-full.png');
      }
      .bar .level-tick {
        border-right-color: #ccc;
      }
      .bar .left {
        background-image: url('/assets/img/frame_left.png');
      }
      .bar .right {
        background-image: url('/assets/img/frame_right.png');
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      xp: {type: Number},
      xpPerLevel: {type: Array},
    };
  }

  constructor() {
    super();
    this.xp = 0;
    this.xpPerLevel = []
  }

  render() {
    return html`
      <div class="character">
        <div class="character-name">${this.name}</div>
        <div class="legend">
        <div class="left"></div>
        ${(() => {var aResult = []; for (var i = 0; i < this.xpPerLevel[this.xpPerLevel.length - 1] + 1; i++) {
          aResult.push(html`<div class="middle">${this.xpPerLevel.includes(i)?this.xpPerLevel.indexOf(i) + 1:''}</div>`);
        }return aResult;})()}
        <div class="right"></div>
        </div>
        <div class="bar">
          <div class="left"></div>
          ${(() => {var aResult = []; for (var i = 0; i < this.xpPerLevel[this.xpPerLevel.length - 1]; i++) {
            aResult.push(html`<div class="middle${i < this.xp?'-filled':''}${this.xpPerLevel.includes(i + 1)?' level-tick':''}"></div>`);
          }return aResult;})()}
          <div class="right"></div>
      </div>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('character-entry', CharacterEntry);