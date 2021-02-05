import "./Home.scss";

const Home = () => {
  return (
    <article className="container home">
      <section className="home__desc">
        <h1>Hello 👋 </h1>
        <h3> I provided three solution for this challenge!</h3>
        <p>
          You can choose each of them from navigation bar to check them how they
          work.
        </p>

        <ol>
          <li>
            First way is a simple modulo kind of checking number in an O(n)
            solution. It is not performant as much, and you might get your
            chrome tab crashed for large entries like numbers more than 1
            bilion.
          </li>
          <li>
            In second solution I am using a web worker to handle the large
            amount of computation in another thread. I can say that it's a bit
            more performant, and at least the UI is not locking and it becomes
            interactable.
          </li>
          <li>
            Third way is the algorithmic and mathmatical thinking way that I've
            implemented. which is the best solution that I could came up with!
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Home;
