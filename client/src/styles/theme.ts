import { Theme } from "@emotion/react";

enum color {
  mainColor = "#DD3E3E",
  border = "#d2e0f3",
  inputBorder = "#7596CA",
  placeholder = "#507BBB",
  inputShadow = "rgba(253, 253, 253, 1)",
  warning = "#DD3E3E",
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
