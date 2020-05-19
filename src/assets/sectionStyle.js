import { container,title } from "./Meterial_Info";

const sectionStyle = {
  container,
  section: {
    padding: "20px 0",
  },
  title: {
    ...title,
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    textAlign: 'center'
  },
  description: {
    color: "#999"
  },
};

export default sectionStyle;
