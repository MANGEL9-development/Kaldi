import Menubar from "../pieces/menubar";
import Footer from "../pieces/footer";

const Subsite = ({title,children}) => {
    return <>
        <Menubar />
        <section id="main-section">
            {children}
            <p>{title}</p> {/* this is a test, remove this later*/}
        </section>
        <Footer />
    </>;
  };

export default Subsite;