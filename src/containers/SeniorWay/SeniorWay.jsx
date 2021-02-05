import { NumsRangeForm, ResultBox } from "../../components";
import SeniorWayManager from "./SeniorWayManager";
import "./SeniorWay.scss";

const SeniorWay = () => {
  const {
    data,
    actions: { handleSubmitForm },
  } = SeniorWayManager();

  return (
    <article className="container senior-way">
      <section className="senior-way__container">
        <h1>Insert Your Range:</h1>
        <h4>I will handle it Senior way:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
        <ResultBox {...data} />
      </section>
    </article>
  );
};

export default SeniorWay;
