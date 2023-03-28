import "@emotion/react";
import { theme } from "./theme";

type ThemeTpye = "color";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      border: string;
    };
  }
}
