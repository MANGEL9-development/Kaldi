import sitemap from "../sitemap.json"

function Footer(){
    let links=[];
    sitemap.sites.forEach(function(site){
        // console.log(site.name);
        links.push(
            <li>
                <a href={site.path}>{site.name}</a>
                {childLinks(site)}
            </li>
        );
    });

    return (
        <footer>
            <div className="footer-section" id="footer-sitename">
                <h2 class="website-title" id="footer-website-title">Kaldi</h2>
            </div>
            <div className="footer-section" id="footer-links">
                <ul>
                    {links}
                </ul>
            </div>
            <div id="footer-copyright">
                <span id="copyright-statement">
                    Designed by&nbsp;
                    <a href="https://www.linkedin.com/in/mark-angelot/" target="_blank" rel="noreferrer">
                        Mark E Angelot
                    </a>
                </span>
            </div>
        </footer>
    );
}

function childLinks(site){
    if(site.children.length>0){
        return(
            <ul>
                {
                    site.children.map((subLink, index) => (
                        <li key={index}>
                            <a href={subLink.path}>{subLink.name}</a>
                        </li>
                    ))
                }
            </ul>
        );

    }
    else{
        return null;
    }
}

export default Footer;