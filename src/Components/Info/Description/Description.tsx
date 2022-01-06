import { useEffect } from "react";
import { useRemark } from "react-remark";

const Description = () => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource("# Markdown");
  });

  return reactContent;
};

export default Description;
