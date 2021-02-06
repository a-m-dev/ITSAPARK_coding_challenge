import { NumsRangeForm, ResultBox } from "../../components";
import BruteForceSolutionManager from "./BruteForceSolutionManager";
import "./BruteForceSolution.scss";

const BruteForceSolution = () => {
  const {
    data,
    actions: { handleSubmitForm },
  } = BruteForceSolutionManager();

  return (
    <article className="container brute-force-solution">
      <section className="brute-force-solution__container">
        <h1>Insert Your Range:</h1>
        <h4>I will handle it with an O(n) brute-force solution:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
        <ResultBox {...data} />
      </section>
    </article>
  );
};

export default BruteForceSolution;
