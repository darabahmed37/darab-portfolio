import Header from "../Components/Header.tsx";
import Intro from "../Components/Intro.tsx";

const Home = () => {
    return (
        <div className="bg-background min-h-screen" id="homeContainer">
            <Header/>
            <Intro/>
        </div>
    );
};

export default Home;
