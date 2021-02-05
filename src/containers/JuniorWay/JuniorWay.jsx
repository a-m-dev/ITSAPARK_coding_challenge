import { NumsRangeForm } from "../../components";
import JuniorWayManager from "./JuniorWayManager";
import "./JuniorWay.scss";

const JuniorWay = () => {
  const {
    actions: { handleSubmitForm },
  } = JuniorWayManager();

  return (
    <article className="container junior-way">
      <section className="junior-way__container">
        <h1>Insert Your Range:</h1>
        <h4>I will handle it Junior way:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
      </section>
    </article>
  );
};

export default JuniorWay;
