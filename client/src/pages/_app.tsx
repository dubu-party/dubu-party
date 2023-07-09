import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // 리액트 쿼리의 개발도구
import { RecoilRoot } from "recoil"; // RecoilRoot 추가
import reset from "../styles/reset";
import theme from "@/styles/theme";
import { css, Global, ThemeProvider } from "@emotion/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  const querClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        // staleTime은 기본 0
        suspense: true,
        useErrorBoundary: true,
      },
      mutations: {
        useErrorBoundary: true,
      },
    },
  });
  return (
    <QueryClientProvider client={querClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              ${reset}
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
      {/* 디퐅트로 열리지 않게 하기 위해서 */}
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
};

export default App;
