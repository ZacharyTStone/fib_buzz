import { useEffect } from "react";
import { useRemark } from "react-remark";

const Description = () => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource("# markdown header 1\n\nmarkdown body");
  });

  return reactContent;
};

export default Description;
