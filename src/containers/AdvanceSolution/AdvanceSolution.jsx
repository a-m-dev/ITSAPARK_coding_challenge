import { NumsRangeForm, ResultBox } from "../../components";
import AdvanceSolutionManager from "./AdvanceSolutionManager";
import "./AdvanceSolution.scss";

const AdvanceSolution = () => {
  const {
    data,
    actions: { handleSubmitForm },
  } = AdvanceSolutionManager();

  return (
    <article className="container advance-solution">
      <section className="advance-solution__container">
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

export default AdvanceSolution;
