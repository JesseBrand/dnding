import { css } from "lit";

export const sessionViewStyles = css`
  body {
    counter-reset: phb-page-numbers;
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
    z-index: 15;
    box-sizing: border-box;
    overflow: hidden;
    height: 279.4mm;
    width: 215.9mm;
    padding: 1cm 1.7cm;
    padding-bottom: 1.5cm;
    background-color: #eee5ce;
    background-image: url("/assets/img/5e/background.png");
    font-family: BookSanity;
    font-size: 0.317cm;
    text-rendering: optimizeLegibility;
    page-break-before: always;
    page-break-after: always;
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
  .phb:nth-child(even):after {
    transform: scaleX(-1);
  }
  .phb:nth-child(even) .pageNumber {
    left: 2px;
  }
  .phb:nth-child(even) .footnote {
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

  .phb.hidden {
    visibility: hidden;
    height: 0;
    padding: 0;
  }

  .phb.left-session {
    float: left;
    margin-left: 3.32em;
  }

  .phb.right-session {
    float: right;
    margin-right: 3.32em;
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
`;
