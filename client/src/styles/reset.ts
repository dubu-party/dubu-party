import { css } from "@emotion/react";

const reset = css`
  @font-face {
    font-family: "Pretendard-Light";
    font-style: normal;
    font-weight: 200;
    src: url("/assets/font/Pretendard-Light.subset.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-weight: 400;
    src: url("/assets/font/Pretendard-Regular.subset.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard-Medium";
    font-style: normal;
    font-weight: 500;
    src: url("/assets/font/Pretendard-Medium.subset.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard-SemiBold";
    font-style: normal;
    font-weight: 400;
    src: url("/assets/font/Pretendard-SemiBold.subset.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard-Bold";
    font-style: normal;
    font-weight: 700;
    src: url("/assets/font/Pretendard-Bold.subset.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard-ExtraBold";
    font-style: normal;
    font-weight: 800;
    src: url("/assets/font/Pretendard-ExtraBold.subset.woff") format("truetype");
  }

  @font-face {
    font-family: "DungGeunMo";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/DungGeunMo.ttf") format("ttf");
  }

  * {
    box-sizing: border-box;
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
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
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
    font-family: "Pretendard-Regular";
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
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
  }
`;

export default reset;
