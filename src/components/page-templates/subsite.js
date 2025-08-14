import Navbar from "../pieces/navbar";
import Footer from "../pieces/footer";

const Subsite = ({title,children}) => {
    return <>
        <Navbar />
        <section id="main-section">
            {children}
        </section>
        <Footer />
    </>;
  };

export default Subsite;