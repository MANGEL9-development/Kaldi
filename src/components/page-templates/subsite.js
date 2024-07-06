import menubar from "../pieces/menubar";
import footer from "../pieces/footer";

const Menu = (contents) => {
    return <>
        {menubar()}
        <section id="main-section">
            {contents}
        </section>
        {footer()}
    </>;
  };
  
export default Menu;