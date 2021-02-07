import "./ResultBox.scss";

const ResultBox = ({ timeItTakes, count }) => {
  return (
    <>
      <hr />

      <section className="result-box">
        <h1 data-testid="resultCount">
          {typeof count === "bigint"
            ? BigInt(count).toLocaleString()
            : count?.toLocaleString() || 0}
        </h1>
        <span>Items found in given range!</span>
        <span>
          in <strong data-testid="timeTook">{timeItTakes || 0}</strong> sec
        </span>
      </section>
    </>
  );
};

export default ResultBox;
