import "./ResultBox.scss";

const ResultBox = ({ timeItTakes, count }) => {
  console.log(typeof count);

  return (
    <>
      <hr />

      <section className="result-box">
        <h1>
          {typeof count === "bigint"
            ? BigInt(count).toLocaleString()
            : count?.toLocaleString() || 0}
        </h1>
        <span>Items found in given range!</span>
        <span>
          in <strong>{timeItTakes}</strong> sec
        </span>
      </section>
    </>
  );
};

export default ResultBox;
