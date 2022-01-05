import Description from "./Description/Description";
import Code from "./Code/Code";
import "../Info/Info.css";
const Info = () => {
  return (
    <>
      <h1>Info</h1>
      <div className="Info">
        <div className="description">
          <Description />
        </div>
        <div className="code">
          <Code />
        </div>
      </div>
    </>
  );
};

export default Info;
