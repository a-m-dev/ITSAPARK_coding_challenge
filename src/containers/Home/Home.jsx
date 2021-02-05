import "./Home.scss";

const Home = () => {
  return (
    <article className="container home">
      <section className="home__desc">
        <h1>👋 Hello</h1>
        <h3> I provided three solution for this challenge!</h3>
        <p>
          You can chose each of them from navigation bar to check them how they
          work.
        </p>

        <ol>
          <li>
            First way is a simple modulo kind of checking number in an O(n)
            solution. It is not performant, and you might get your chrome tab
            crashed for large entries like 10 bilion.
          </li>
          <li>
            In second solution I am using worker to handle the computation and
            considering the large amount of input. I can say that it's a bit
            more performant.
          </li>
          <li>Third way is the mathmatical thinking way.</li>
        </ol>
      </section>
    </article>
  );
};

export default Home;
