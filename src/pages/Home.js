import navbar from "../components/pieces/navbar";
import footer from "../components/pieces/footer";
import "../components/design/stylesheets/style-main.scss";
import "../components/design/stylesheets/style-homepage.scss";

const Home = () => {
    return <>
        <section id="homepage-title">
            {/* TODO: parallax scrolling */}
            <div id="homepage-title-film">
                {navbar()}
                <div id="page-title-container">
                    <div id="title-subtitle">
                        <h1 className="website-title" id="website-title">Kaldi</h1>
                        <span id="page-subtitle">
                            A caf&#233; experience like no other
                        </span>
                    </div>
                </div>
                {/* <div id="homepage-title-ripped-effect"></div> */}
            </div>
        </section>
        <section id="homepage-main-section">
            {/* 

            Here will feature a few menu items from some of the categories (coffees, pastries, etc.)
            
            */}
        </section>
        {footer()}
    </>;
};

export default Home;
  