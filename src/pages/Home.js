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
                            
                        </span>
                    </div>
                </div>
            </div>
        </section>
        {footer()}
    </>;
};

export default Home;
  