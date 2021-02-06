import { NumsRangeForm, ResultBox, Loading } from "../../components";
import WorkerSolutionManager from "./WorkerSolutionManager";
import "./WorkerSolution.scss";

const WorkerSolution = () => {
  const {
    data,
    actions: { handleSubmitForm },
  } = WorkerSolutionManager();

  return (
    <article className="container worker-solution">
      <section className="worker-solution__container">
        <h1>Insert Your Range:</h1>
        <h4>Implemented brute-force way with web worker:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
        {data.loading ? <Loading /> : <ResultBox {...data} />}
      </section>
    </article>
  );
};

export default WorkerSolution;
