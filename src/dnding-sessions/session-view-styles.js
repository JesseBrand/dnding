import { css } from "lit";

export const sessionViewStyles = css`
  body {
    counter-reset: phb-page-numbers;
  }
  h1 {
    font-family: xalterion;
    color: white;
  }
  * {
    -webkit-print-color-adjust: exact;
  }
  .phb {
    column-count: 2;
    column-fill: auto;
    column-gap: 1cm;
    column-width: 8cm;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    -webkit-column-width: 8cm;
    -moz-column-width: 8cm;
    -webkit-column-gap: 1cm;
    -moz-column-gap: 1cm;
    position: relative;
    box-sizing: border-box;
    height: 279.4mm;
    width: 215.9mm;
    padding: 1cm 1.7cm;
    padding-bottom: 1.5cm;
    background-color: #eee5ce;
    font-family: BookSanity;
    font-size: 0.317cm;
    text-rendering: optimizeLegibility;
    page-break-before: always;
    page-break-after: always;
  }

  .phb-black-page {
    counter-increment: phb-page-numbers;
    height: 0;
    width: 0;
  }

  .phb.page {
    counter-increment: phb-page-numbers;
  }
  .phb .wide {
    column-span: all;
    -webkit-column-span: all;
    -moz-column-span: all;
  }

  .phb:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-image: url("/assets/img/5e/bottom_background.png");
    background-size: cover;
  }
  .phb:nth-child(odd):after {
    transform: scaleX(-1);
  }
  .phb:nth-child(odd) .pageNumber {
    left: 2px;
  }
  .phb:nth-child(odd) .footnote {
    left: 80px;
    text-align: left;
  }
  .phb .pageNumber {
    position: absolute;
    right: 2px;
    bottom: 22px;
    width: 50px;
    font-size: 0.9em;
    color: #c9ad6a;
    text-align: center;
  }
  .phb .pageNumber.auto::after {
    content: counter(phb-page-numbers);
  }

  .phb .footnote {
    position: absolute;
    right: 80px;
    bottom: 32px;
    width: 200px;
    font-size: 0.8em;
    color: #c9ad6a;
    text-align: right;
  }

  .phb .topnote {
    position: absolute;
    right: 80px;
    top: 32px;
    width: 200px;
    font-size: 1.5em;
    color: #c9ad6a;
    text-align: right;
  }

  .phb .toc {
    -webkit-column-break-inside: avoid;
    column-break-inside: avoid;
  }

  .book {
    transition: opacity 0.4s 0.2s;
    box-shadow: 0.5em 0.5em rgb(144, 12, 63), -0.5em 0.5em rgb(144, 12, 63),
      0.5em -0.5em rgb(144, 12, 63), -0.5em -0.5em rgb(144, 12, 63);
    border-radius: 4px;
  }
  .page {
    float: left;
    padding-bottom: 10em;
  }
  .page:nth-child(odd) {
    clear: both;
  }
  .book {
    perspective: 250vw;
    width: 1632px;
    height: 1056px;
    margin-bottom: 3em;
    margin-left: 1em;
  }
  .book .pages {
    position: relative;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: 4px;
  }
  .book .page {
    float: none;
    clear: none;
    margin: 0;
    position: absolute;
    top: 0;
    transform-origin: 0 0;
    transition: transform 1.4s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    cursor: pointer;
    user-select: none;
  }
  .book .page:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: background 0.7s;
    z-index: 2;
  }
  .book .page:nth-child(even) {
    pointer-events: all;
    transform: rotateY(0deg);
    right: 0;
    border-radius: 0 4px 4px 0;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0) 10%
      ),
      url("/assets/img/5e/background.png");
  }
  .book .page:nth-child(even):hover {
    transform: rotateY(-30deg);
  }
  .book .page:nth-child(even):hover:before {
    background: rgba(0, 0, 0, 0.03);
  }
  .book .page:nth-child(even):before {
    background: rgba(0, 0, 0, 0);
  }
  .book .page:nth-child(odd) {
    pointer-events: none;
    transform: rotateY(180deg);
    transform-origin: 100% 0;
    left: 0;
    border-radius: 4px 0 0 4px;
    background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.12) 0%,
        rgba(0, 0, 0, 0) 10%
      ),
      url("/assets/img/5e/background.png");
  }
  .book .page:nth-child(odd):before {
    background: rgba(0, 0, 0, 0.2);
  }
  .book .page.grabbing {
    transition: none;
  }
  .book .page.flipped:nth-child(even) {
    pointer-events: none;
    transform: rotateY(-180deg);
  }
  .book .page.flipped:nth-child(even):before {
    background: rgba(0, 0, 0, 0.2);
  }
  .book .page.flipped:nth-child(odd) {
    pointer-events: all;
    transform: rotateY(0deg);
  }
  .book .page.flipped:nth-child(odd):hover {
    transform: rotateY(30deg);
  }
  .book .page.flipped:nth-child(odd):hover:before {
    background: rgba(0, 0, 0, 0.03);
  }
  .book .page.flipped:nth-child(odd):before {
    background: rgba(0, 0, 0, 0);
  }
  *,
  * :before,
  *:after {
    box-sizing: border-box;
  }
  .page:nth-child(even) {
    background-position: right top;
  }
`;
