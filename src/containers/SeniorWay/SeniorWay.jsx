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
        <h4>
          I had handled it with a mathematical trick and since the result could
          be way more large number, I had to use the BigInt data type for it:
        </h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
        <ResultBox {...data} />
      </section>
    </article>
  );
};

export default SeniorWay;
