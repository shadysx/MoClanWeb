import { container, title } from "assets/jss/material-kit-react.js";

const aboutPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
};

export default aboutPageStyle;
