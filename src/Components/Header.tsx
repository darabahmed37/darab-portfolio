import Navbar from "./Navbar.tsx";

const Header = () => {
    return (
        <div>
            <header className={"flex items-start max-h-24"}>
                <div className="w-px h-[191px]  translate-x-5"></div>
                <Navbar/>
            </header>
        </div>
    );
};

export default Header;
