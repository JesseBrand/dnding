import { css } from "lit";

export const sessionIntroStyles = css`
  :host {
    font-family: BookSanity;
    font-size: 0.317cm;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  hr + hr + blockquote {
    column-span: all;
    -webkit-column-span: all;
    -moz-column-span: all;
  }
  hr + table {
    margin-top: -5px;
    margin-bottom: 50px;
    padding-top: 10px;
    border-collapse: separate;
    background-color: white;
    border: initial;
    border-style: solid;
    border-image-outset: 37px 17px;
    border-image-repeat: round;
    border-image-slice: 150 200 150 200;
    border-image-source: url("/assets/img/5e/hr_table_border.png");
    border-image-width: 47px;
  }
  h5 + hr + table {
    column-span: all;
    -webkit-column-span: all;
    -moz-column-span: all;
  }
  p {
    padding-bottom: 0.8em;
    line-height: 1.3em;
  }
  p + p {
    margin-top: -0.8em;
  }
  ul {
    margin-bottom: 0.8em;
    padding-left: 1.4em;
    line-height: 1.3em;
    list-style-position: outside;
    list-style-type: disc;
  }
  ol {
    margin-bottom: 0.8em;
    padding-left: 1.4em;
    line-height: 1.3em;
    list-style-position: outside;
    list-style-type: decimal;
  }
  p + p,
  ul + p,
  ol + p {
    text-indent: 1em;
  }
  img {
    z-index: -1;
  }
  strong {
    font-weight: bold;
    letter-spacing: 0.03em;
  }
  em {
    font-style: italic;
  }
  sup {
    vertical-align: super;
    font-size: smaller;
    line-height: 0;
  }
  sub {
    vertical-align: sub;
    font-size: smaller;
    line-height: 0;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-family: MrJeeves;
    font-weight: 800;
    color: #58180d;
  }
  h1 {
    column-span: all;
    font-size: 0.987cm;
    -webkit-column-span: all;
    -moz-column-span: all;
  }
  h1 + p {
    column-span: all;
    -webkit-column-span: all;
    -moz-column-span: all;
  }
  h1 + p::first-letter {
    float: left;
    font-family: Solberry;
    font-size: 10em;
    color: #222;
    line-height: 0.8em;
  }
  h2 {
    font-size: 0.705cm;
  }
  h3 {
    font-size: 0.529cm;
    border-bottom: 2px solid #c9ad6a;
  }
  h4 {
    margin-bottom: 0;
    font-size: 0.458cm;
  }
  h5 {
    margin-bottom: 0.2em;
    font-family: ScalySansSmallCaps;
    font-size: 0.423cm;
    font-weight: 900;
  }
  table {
    font-family: ScalySans;
    width: 100%;
    margin-bottom: 1em;
    font-size: 10pt;
  }
  table em {
    font-family: ScalySans;
    font-style: italic;
  }
  table strong {
    font-family: ScalySans;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  table thead {
    font-weight: 800;
  }
  table thead th {
    vertical-align: bottom;
    padding-bottom: 0.3em;
    padding-right: 0.1em;
    padding-left: 0.1em;
  }
  table tbody tr td {
    padding: 0.3em 0.1em;
  }
  table tbody tr:nth-child(odd) {
    background-color: #e0e5c1;
  }
  blockquote {
    font-family: ScalySans;
    box-sizing: border-box;
    margin-bottom: 1em;
    padding: 5px 10px;
    background-color: #e0e5c1;
    border-style: solid;
    border-width: 11px;
    border-image: url("/assets/img/5e/blockquote_border.png") 11;
    border-image-outset: 9px 0;
    box-shadow: 1px 4px 14px #888;
  }
  blockquote em {
    font-family: ScalySans;
    font-style: italic;
  }
  blockquote strong {
    font-family: ScalySans;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  blockquote p,
  blockquote ul {
    font-size: 0.352cm;
    line-height: 1.1em;
  }
  pre + blockquote,
  h2 + blockquote,
  h3 + blockquote,
  h4 + blockquote,
  h5 + blockquote {
    margin-top: 13px;
  }
  hr + blockquote {
    position: relative;
    padding-top: 15px;
    background-color: #fdf1dc;
    border-style: solid;
    border-width: 10px;
    border-image: url("/assets/img/5e/ht_blockquote_border.png") 10;
  }
  hr + blockquote h2 {
    margin-top: -8px;
    margin-bottom: 0;
  }
  hr + blockquote h2 + p {
    padding-bottom: 0;
  }
  hr + blockquote h3 {
    font-family: ScalySans;
    font-weight: 400;
    border-bottom: 1px solid #58180d;
  }
  hr + blockquote hr + ul {
    color: #58180d;
  }
  hr + blockquote ul {
    font-family: ScalySans;
    padding-left: 1em;
    font-size: 0.352cm;
  }
  hr + blockquote ul em {
    font-family: ScalySans;
    font-style: italic;
  }
  hr + blockquote ul strong {
    font-family: ScalySans;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  hr + blockquote hr + table {
    margin: 0;
    column-span: 1;
    background-color: transparent;
    border-style: none;
    border-image: none;
    -webkit-column-span: 1;
  }
  hr + blockquote hr + table tbody tr:nth-child(odd),
  hr + blockquote hr + table tbody tr:nth-child(even) {
    background-color: transparent;
  }
  hr + blockquote table {
    color: #58180d;
  }
  hr + blockquote p + p {
    margin-top: 0;
    padding-bottom: 0.5em;
    text-indent: 0;
  }
  hr + blockquote hr {
    visibility: visible;
    height: 6px;
    margin: 4px 0;
    background-image: url("/assets/img/5e/hr_blockquote_hr_background.png");
    background-size: 100% 100%;
    border: none;
  }
  hr + hr + blockquote {
    column-count: 2;
    column-fill: auto;
    column-gap: 1cm;
    column-width: 7.68cm;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    -webkit-column-width: 7.68cm;
    -moz-column-width: 7.68cm;
    -webkit-column-gap: 1cm;
    -moz-column-gap: 1cm;
  }
  hr {
    visibility: hidden;
    margin: 0;
  }
  hr + ul {
    margin-bottom: 0.5em;
    padding-left: 1em;
    text-indent: -1em;
    list-style-type: none;
  }
  pre,
  code {
    visibility: hidden;
    -webkit-column-break-after: always;
    break-after: always;
    -moz-column-break-after: always;
  }
  p,
  blockquote,
  table {
    z-index: 15;
    -webkit-column-break-inside: avoid;
    column-break-inside: avoid;
    overflow: hidden;
  }
  h4 + p + hr + ul {
    margin-top: -0.5em;
  }
  table + p {
    text-indent: 1em;
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-bottom: 0;
    margin-left: 1.5em;
  }
  li {
    -webkit-column-break-inside: avoid;
    column-break-inside: avoid;
  }
  .spellList {
    font-family: ScalySans;
    column-count: 4;
    column-span: all;
    -webkit-column-span: all;
    -moz-column-span: all;
  }
  .spellList em {
    font-family: ScalySans;
    font-style: italic;
  }
  .spellList strong {
    font-family: ScalySans;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  .spellList ul + h5 {
    margin-top: 15px;
  }
  .spellList p,
  .spellList ul {
    font-size: 0.352cm;
    line-height: 1.3em;
  }
  .spellList ul {
    margin-bottom: 0.5em;
    padding-left: 1em;
    text-indent: -1em;
    list-style-type: none;
    -webkit-column-break-inside: auto;
    column-break-inside: auto;
  }
  .phb.print blockquote {
    box-shadow: none;
  }
  .column-break {
    visibility: hidden;
    -webkit-column-break-after: always;
  }

  .wide {
    column-span: all;
    -webkit-column-span: all;
    -moz-column-span: all;
  }
  .classTable {
    margin-top: 25px;
    margin-bottom: 40px;
    border-collapse: separate;
    background-color: white;
    border: initial;
    border-style: solid;
    border-image-outset: 25px 17px;
    border-image-repeat: round;
    border-image-slice: 150 200 150 200;
    border-image-source: url("/assets/img/5e/hr_table_border.png");
    border-image-width: 47px;
  }
  .classTable h5 {
    margin-bottom: 10px;
  }
  .descriptive {
    display: block-inline;
    margin-bottom: 1em;
    background-color: #faf7ea;
    font-family: ScalySans;
    border-style: solid;
    border-width: 7px;
    border-image: url("/assets/img/5e/descriptive_border.png") 12 round;
    border-image-outset: 4px;
    box-shadow: 0 0 6px #faf7ea;
  }
  .descriptive p {
    display: block;
    padding-bottom: 0;
    line-height: 1.5em;
  }
  .descriptive p + p {
    padding-top: 0.8em;
  }
  .descriptive em {
    font-family: ScalySans;
    font-style: italic;
  }
  .descriptive strong {
    font-family: ScalySans;
    font-weight: 800;
    letter-spacing: -0.02em;
  }
  pre + .descriptive {
    margin-top: 8px;
  }
`;
