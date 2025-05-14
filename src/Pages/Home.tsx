import Navbar from "../Components/Navbar.tsx";

const Home = () => {
    return (
        <div className="bg-background min-h-screen">
            <header className={"flex items-start"}>
                <div className="w-px h-[191px] bg-gray-400 translate-x-5"></div>

                <Navbar/>
            </header>
        </div>
    );
};

export default Home;
