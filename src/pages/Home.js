import menubar from "../components/pieces/menubar";
import footer from "../components/pieces/footer";
import "../components/design/stylesheets/style-main.scss";
import "../components/design/stylesheets/style-homepage.scss";

const Home = () => {
    return <>
        <section id="homepage-title">
            <div id="homepage-title-film">
                {menubar()}
                <div id="page-title-container">
                    <div id="title-subtitle">
                        <h1 className="website-title" id="website-title">Kaldi</h1>
                        <span id="page-subtitle">
                            An experience like no other
                        </span>
                    </div>
                </div>
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
  