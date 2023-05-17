import { Theme } from "@emotion/react";

// TODO: 노란색이 약간 잘 안보이는 것 같은데 메인 색을 살짝 조정하면 어떨까요?

enum color {
  fontColor = "#575757",
  border = "#d2e0f3",
  inputBorder = "#DDDDDD",
  placeholder = "#507BBB",
  inputShadow = "rgba(253, 253, 253, 1)",
  warning = "#DD3E3E",
  lightBackground = "#F5F5F5;",
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
