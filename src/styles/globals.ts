import { createGlobalStyle } from 'styled-components';
import { colors } from 'theme';

export default createGlobalStyle`
  body,
  body *,
  body::before,
  body::after,
  body *::before,
  body *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  strong,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  caption,
  article,
  figure,
  figcaption,
  footer,
  header,
  nav,
  dl,
  dt,
  dd,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html {
    font-size: 10px;
    overflow-y: visible;
    font-family: 'Nanum Gothic', sans-serif;
  }

  body {
    font-weight: 400;
    background-color: ${colors.gray};
  }

  a img {
    vertical-align: middle;
  }

  :focus-visible {
    outline: 3px solid #aaa;
  }

  :focus:not(:focus-visible) {
    outline: 0;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  button[disabled] {
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
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
  ul,
  li {
    list-style: none;
  }

  button:focus-visible {
    outline: auto blue;
  }

  img {
    -webkit-user-drag: none;
  }
`;
