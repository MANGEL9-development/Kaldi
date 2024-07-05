import sitemap from "../sitemap.json"

function footer(){
    let links=[];
    sitemap.sites.forEach(function(site){
        links.push(
            <li>
                <a href={site.path}>{site.name}</a>
            </li>
        );
    });

    return (
        <footer>
            <div className="footer-section" id="footer-sitename">
                <h2 class="website-title" id="footer-website-title">Kaldi</h2>
            </div>
            <div className="footer-section" id="footer-links">
                {/* Put links here */}
            </div>
            <div id="footer-copyright">
                <span id="copyright-statement">
                    Designed by
                    <a href="https://www.linkedin.com/in/mark-angelot/" target="_blank">
                        Mark E Angelot
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default footer;