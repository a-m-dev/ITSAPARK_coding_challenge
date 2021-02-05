import "./ResultBox.scss";

const ResultBox = ({ timeItTakes, count }) => {
  return (
    <>
      <hr />

      <section className="result-box">
        <h1>{count || 0}</h1>
        <span>Items found in given range!</span>
        <span>
          in <strong>{timeItTakes}</strong> sec
        </span>
      </section>
    </>
  );
};

export default ResultBox;
