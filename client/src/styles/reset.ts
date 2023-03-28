import { css } from "@emotion/react";

const reset = css`
  @font-face {
    font-family: "Pretendard regular";
    font-style: normal;
    font-weight: 400;
    src: url("/font/web/static/woff/Pretendard-Regular.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard medium";
    font-style: normal;
    font-weight: 500;
    src: url("/font/web/static/woff/Pretendard-Medium.woff") format("truetype");
  }
  @font-face {
    font-family: "Pretendard semiBold";
    font-style: normal;
    font-weight: 600;
    src: url("/font/web/static/woff/Pretendard-SemiBold.woff")
      format("truetype");
  }
  * {
    /* font-family: "Pretendard Variable", sans-serif;
		box-sizing: border-box; */
  }
  body {
    /* font-family: "Pretendard Variable", sans-serif;
		background-color: #ffffff;
		color: black;
		width: 375px;
		margin: 0 auto; */
  }
  p {
    margin: 0;
  }
`;

export default reset;
