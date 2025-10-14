import {LitElement, html, css} from 'lit';

export class CharacterEntry extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
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
      .right {
        margin-right: 20px;
      }
      .middle,
      .middle-filled,
      .middle-blue {
        width: 15px;
      }
      .bar .middle,
      .bar .middle-filled,
      .bar .middle-blue {
        border-right: solid 1px #666;
      }
      .bar .middle {
        background-image: url('/assets/img/frame_mid.png');
      }
      .bar .middle-filled {
        background-image: url('/assets/img/frame_mid-full.png');
      }
      .bar .middle-blue {
        background-image: url('/assets/img/frame_mid-blue.png');
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
      dreamXp: {type: Number},
      xpPerLevel: {type: Array},
      xpPerDreamLevel: {type: Array},
    };
  }

  constructor() {
    super();
    this.xp = 0;
    this.xpPerLevel = [];
    this.xpPerDreamLevel = [];
  }

  render() {
    return html`
      <div class="character">
        <div class="character-name">${this.name}</div>
        <div class="legend">
        <div class="left"></div>
        ${(() => {var aResult = []; for (var i = 0; i < this.xpPerLevel[this.xpPerLevel.length - 1] + 1; i++) {
          aResult.push(html`<div class="middle">${this.xpPerLevel.includes(i)?this.xpPerLevel.indexOf(i) + 1:''}</div>`);
        }
        aResult.push(html`<div class="right"></div>`);
        if (this.dreamXp > 0) {
          aResult.push(html`<div class="left"></div>`);
          aResult.push(html`<div class="middle">Dreamworld</div>`);
          aResult.push(html`<div class="right"></div>`);
        }
        return aResult;})()}
      </div>
        <div class="bar">
          <div class="left"></div>
          ${(() => {var aResult = []; for (var i = 0; i < this.xpPerLevel[this.xpPerLevel.length - 1]; i++) {
            aResult.push(html`<div class="middle${i < this.xp?'-filled':''}${this.xpPerLevel.includes(i + 1)?' level-tick':''}"></div>`);
          }return aResult;})()}
          <div class="right"></div>
          ${(() => {var aResult = []; if (this.dreamXp > 0) {
            aResult.push(html`<div class="left"></div>`);
              for (var i = 0; i < 10; i++) {
              aResult.push(html`<div class="middle${i < this.dreamXp?'-blue':''}${this.xpPerDreamLevel.includes(i + 1)?' level-tick':''}"></div>`);
            }
            aResult.push(html`<div class="right"></div>`);
          }return aResult;})()}
        </div>
      </div>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('character-entry', CharacterEntry);