import Data from "./Data";
import "./Home.css"
import ScrolDown from "./ScrolDown";
import Social from "./Social";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social></Social>

                    <div className="home-img">

                    </div>

                    <Data></Data>
                </div>
                <ScrolDown></ScrolDown>
            </div>
        </section>
    );
};

export default Home;