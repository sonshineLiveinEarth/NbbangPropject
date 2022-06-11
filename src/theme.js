const device = {
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1024px)`,
  };
  
  // 주로 사용하는 색상을 theme으로 지정
  const colors = {
    mainColor: "#2AC1BC", // mint
    yellowGreen: "#C8DF52",
    mint: "#DBE8D8",
    blue: "#0984e3",
    white: "#FFFFFF",
    black: "000000",
    BackgroundColor: "#F4F4F4"
  };
  
  const fontSizes = {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  };
  
  const theme = {
    device,
    colors,
    fontSizes,
  };
  
  export default theme;
  