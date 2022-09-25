import { css } from "lit";

export const sessionTOCStyles = css`
  :host {
    font-family: BookSanity;
    font-size: 0.317cm;
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
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  ul {
    padding-left: 0;
    list-style-type: none;
  }
  ul > li {
    margin-bottom: 10px;
  }

  ul span {
    display: table-cell;
  }

  ul span:first-child {
    position: relative;
    overflow: hidden;
  }

  ul span:first-child::after {
    content: "";
    position: absolute;
    bottom: 0.08cm;
    margin-left: 0.06cm;
    width: 100%;
    border-bottom: 0.05cm dotted #000;
  }

  ul span:last-child {
    font-family: BookSanity;
    font-size: 0.34cm;
    font-weight: normal;
    color: black;
    text-align: right;
    vertical-align: bottom;
    width: 1%;
    padding-left: 0.06cm;
  }
`;
