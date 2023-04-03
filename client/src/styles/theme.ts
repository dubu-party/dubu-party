import { Theme } from "@emotion/react";

enum color {
  border = "#d2e0f3",
}

enum font {
  light = "Pretendard-Light",
  regular = "Pretendard-Regular",
  medium = "Pretendard-Medium",
  semibold = "Pretendard-SemiBold",
  bold = "Pretendard-Bold",
  extraBold = "Pretendard-ExtraBold",
}

enum size {
  maxWidth = "1200px",
}

const theme = {
  color,
  font,
  size,
};

export default theme;
