import { NumsRangeForm } from "../../components";
import MidLevelWayManager from "./MidLevelWayManager";
import "./MidLevelWay.scss";

const MidLevelWay = () => {
  const {
    actions: { handleSubmitForm },
  } = MidLevelWayManager();

  return (
    <article className="container mid-level-way">
      <section className="mid-level-way__container">
        <h1>Insert Your Range:</h1>
        <h4>I will handle it Mid Level way:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
      </section>
    </article>
  );
};

export default MidLevelWay;
