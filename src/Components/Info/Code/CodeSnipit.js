import PrismCode from "../../Prism/PrismCode";

const code = `
const magic = ()=> {
  return fully functional 
  and easy to use application
}
magic()
`;

export default function CodeSnipit() {
  return (
    <div
      style={{
        width: "50vw",
        height: "100%",
      }}
    >
      <PrismCode code={code} language="javascript" />;
    </div>
  );
}
