import React, { useEffect } from "react";
import { useRemark } from "react-remark";

const Description = () => {
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource("# markdown header");
  }, []);

  return reactContent;
};

export default Description;
