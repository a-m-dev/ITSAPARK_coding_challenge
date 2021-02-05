import { NumsRangeForm, ResultBox, Loading } from "../../components";
import MidLevelWayManager from "./MidLevelWayManager";
import "./MidLevelWay.scss";

const MidLevelWay = () => {
  const {
    data,
    actions: { handleSubmitForm },
  } = MidLevelWayManager();

  return (
    <article className="container mid-level-way">
      <section className="mid-level-way__container">
        <h1>Insert Your Range:</h1>
        <h4>Implemented brute-force way with web worker:</h4>
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
        {data.loading ? <Loading /> : <ResultBox {...data} />}
      </section>
    </article>
  );
};

export default MidLevelWay;
