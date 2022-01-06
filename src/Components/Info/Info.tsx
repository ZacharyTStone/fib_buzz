import Description from "./Description/Description";
import "../Info/Info.css";

const Info = () => {
  return (
    <>
      <h1>Info</h1>
      <div className="Info">
        <div className="description">
          <Description />
        </div>
      </div>
    </>
  );
};

export default Info;
