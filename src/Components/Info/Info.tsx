import "../Info/Info.css";
import PrismCode from "../UI/PrismCode";

const code = `
const magic = ()=> {
  return fully functional 
  and easy to use application
}
magic()
`;

const Info = () => {
  return (
    <div className="Info">
      <div className="left"></div>
      <div className="right">
        <PrismCode code={code} language="javascript" />;
      </div>
    </div>
  );
};

export default Info;
