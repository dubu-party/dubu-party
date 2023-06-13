import type { AppProps } from "next/app";
import reset from "../styles/reset";
import theme from "@/styles/theme";
import { css, Global, ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil"; // RecoilRoot 추가

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      {/* RecoilRoot 추가 */}

      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${reset}
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
