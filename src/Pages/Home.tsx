import Header from "../Components/Header.tsx";
import Intro from "../Components/Intro.tsx";
import Projects from "../Components/Projects.tsx";

const Home = () => {
  return (
    <div className="bg-background min-h-screen" id="homeContainer">
      <Header />
      <Intro />
      <div className="text-white max-w-2xl mx-auto py-2 px-3">
        <div className="quote border p-5 border-gray font-bold">
          With great power comes great electricity bill.
        </div>

        {/* remove the top border → `border-t-0` */}
        <div className="title border border-t-0 w-fit ml-auto border-gray p-3 bottom-quote">
          - Dr. Who
        </div>
      </div>

      <section
        className={" mx-auto"}
        style={{
          width: "70em",
        }}
      >
        <Projects />
      </section>
    </div>
  );
};

export default Home;
