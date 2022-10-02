import { html, LitElement } from "lit";
import { sessionIntroStyles } from "./session-intro-styles";
export class SessionIntro extends LitElement {
  static get styles() {
    return [sessionIntroStyles];
  }
  render() {
    return html`<h1>Introduction</h1>
      <p>
        This book is intended to be read by all past, present and future
        participants off the ING Dungeons and Dragons sessions. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Aenean id nisi ex. Quisque
        dictum justo et dolor sagittis, in cursus justo porttitor. Suspendisse
        potenti. Sed dignissim suscipit ante quis tincidunt. Vestibulum nec dui
        molestie, imperdiet sapien id, euismod elit. Integer eu auctor libero.
        Pellentesque tincidunt faucibus tortor, nec pellentesque eros laoreet
        eu. Fusce gravida nunc velit, eu ultrices libero laoreet nec. Vestibulum
        sit amet malesuada ipsum. Fusce tincidunt laoreet eleifend.
      </p>

      <h2>Some other header</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nisi
        ex. Quisque dictum justo et dolor sagittis, in cursus justo porttitor.
        Suspendisse potenti. Sed dignissim suscipit ante quis tincidunt.
        Vestibulum nec dui molestie, imperdiet sapien id, euismod elit. Integer
        eu auctor libero. Pellentesque tincidunt faucibus tortor, nec
        pellentesque eros laoreet eu. Fusce gravida nunc velit, eu ultrices
        libero laoreet nec. Vestibulum sit amet malesuada ipsum. Fusce tincidunt
        laoreet eleifend.
      </p>
      <h3>Some extra header</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nisi
        ex. Quisque dictum justo et dolor sagittis, in cursus justo porttitor.
        Suspendisse potenti. Sed dignissim suscipit ante quis tincidunt.
        Vestibulum nec dui molestie, imperdiet sapien id, euismod elit. Integer
        eu auctor libero. Pellentesque tincidunt faucibus tortor, nec
        pellentesque eros laoreet eu. Fusce gravida nunc velit, eu ultrices
        libero laoreet nec. Vestibulum sit amet malesuada ipsum. Fusce tincidunt
        laoreet eleifend.
      </p>
      <h4>Some extra extra header</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nisi
        ex. Quisque dictum justo et dolor sagittis, in cursus justo porttitor.
        Suspendisse potenti. Sed dignissim suscipit ante quis tincidunt.
        Vestibulum nec dui molestie, imperdiet sapien id, euismod elit. Integer
        eu auctor libero. Pellentesque tincidunt faucibus tortor, nec
        pellentesque eros laoreet eu. Fusce gravida nunc velit, eu ultrices
        libero laoreet nec. Vestibulum sit amet malesuada ipsum. Fusce tincidunt
        laoreet eleifend.
      </p>
      <h5>Some extra extra extra header</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nisi
        ex. Quisque dictum justo et dolor sagittis, in cursus justo porttitor.
        Suspendisse potenti. Sed dignissim suscipit ante quis tincidunt.
        Vestibulum nec dui molestie, imperdiet sapien id, euismod elit. Integer
        eu auctor libero. Pellentesque tincidunt faucibus tortor, nec
        pellentesque eros laoreet eu. Fusce gravida nunc velit, eu ultrices
        libero laoreet nec. Vestibulum sit amet malesuada ipsum. Fusce tincidunt
        laoreet eleifend.
      </p>
      <div class="column-break"></div>
      <h5>Some extra extra extra header</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nisi
        ex. Quisque dictum justo et dolor sagittis, in cursus justo porttitor.
        Suspendisse potenti. Sed dignissim suscipit ante quis tincidunt.
        Vestibulum nec dui molestie, imperdiet sapien id, euismod elit. Integer
        eu auctor libero. Pellentesque tincidunt faucibus tortor, nec
        pellentesque eros laoreet eu. Fusce gravida nunc velit, eu ultrices
        libero laoreet nec. Vestibulum sit amet malesuada ipsum. Fusce tincidunt
        laoreet eleifend.
      </p>
      <h5>Some extra extra extra header</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nisi
        ex. Quisque dictum justo et dolor sagittis, in cursus justo porttitor.
        Suspendisse potenti. Sed dignissim suscipit ante quis tincidunt.
        Vestibulum nec dui molestie, imperdiet sapien id, euismod elit. Integer
        eu auctor libero. Pellentesque tincidunt faucibus tortor, nec
        pellentesque eros laoreet eu. Fusce gravida nunc velit, eu ultrices
        libero laoreet nec. Vestibulum sit amet malesuada ipsum. Fusce tincidunt
        laoreet eleifend.
      </p>
      <blockquote>
        <h3>Some more header in a block</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
          nisi ex. Quisque dictum justo et dolor sagittis, in cursus justo
          porttitor. Suspendisse potenti. Sed dignissim suscipit ante quis
          tincidunt. Vestibulum nec dui molestie, imperdiet sapien id, euismod
          elit. Integer eu auctor libero. Pellentesque tincidunt faucibus
          tortor, nec pellentesque eros laoreet eu. Fusce gravida nunc velit, eu
          ultrices libero laoreet nec. Vestibulum sit amet malesuada ipsum.
          Fusce tincidunt laoreet eleifend.
        </p>
      </blockquote>`;
  }
}
window.customElements.define("session-intro", SessionIntro);
