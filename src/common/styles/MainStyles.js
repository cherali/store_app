import { createGlobalStyle } from 'styled-components'

export const MainStyles = createGlobalStyle`
 @font-face {
    font-family: IRANSans;
    src: url('/assets/fonts/IRANSans.ttf');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
    font-family: IRANSans;
  }

  body {
    direction: ltr;
    font-family: IRANSans;
  }

 /* helpers */
 .position-relative {
    position: relative;
  }

  .d-flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .align-items-center {
    align-items: center;
  }

  .w-auto {
    width: auto !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .mx-3 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .m-3 {
    margin: 1rem;
  }

  .mt-3 {
    margin-top: 1rem;
  }

  .mb-3 {
    margin-bottom: 1rem;
  }

  .p3 {
    padding: 1rem;
  }
`