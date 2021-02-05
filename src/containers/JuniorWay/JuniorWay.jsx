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
        <NumsRangeForm submitFormHandler={handleSubmitForm} />
      </section>
    </article>
  );
};

export default JuniorWay;
