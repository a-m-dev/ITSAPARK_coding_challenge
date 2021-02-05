import { NumsRangeForm, ResultBox } from "../../components";
import JuniorWayManager from "./JuniorWayManager";
import "./JuniorWay.scss";

const JuniorWay = () => {
  const {
    data,
    actions: { handleSubmitForm },
  } = JuniorWayManager();

  return (
    <article className="container junior-way">
      <section className="junior-way__container">
        <h1>Insert Your Range:</h1>
        <h4>I will handle it with an O(n) brute-force solution:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
        <ResultBox {...data} />
      </section>
    </article>
  );
};

export default JuniorWay;
