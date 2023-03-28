import type { AppProps } from "next/app";
import reset from "../styles/reset";
import theme from "@/styles/theme";
import { css, Global, ThemeProvider } from "@emotion/react";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Global
				styles={css`
					${reset}
				`}
			/>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
