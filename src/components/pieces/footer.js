import sitemap from "../sitemap.json"

function Footer(){

    return (
        <footer>
            <div className="footer-section" id="footer-sitename">
                <h2 class="website-title" id="footer-website-title">Kaldi</h2>
            </div>
            <div className="footer-section" id="footer-links">
                <ul>
                    {
                        sitemap.sites.map((site,index) => 
                            (
                                <li key={index}>
                                    <a href={site.path}>{site.name}</a>
                                    {(site.children.length>0)? // Add sublinks if the link has any
                                        <ul>
                                            {
                                                site.children.map((subLink, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={subLink.path}
                                                            target={subLink.target || ""}
                                                        >
                                                            {subLink.name}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        :
                                        null
                                    }
                                </li>    
                            )
                        )
                    }
                </ul>
            </div>
            <div id="footer-copyright">
                <span id="copyright-statement">
                    <span id="copyright-pre-link-text">
                        Designed by&nbsp;
                    </span>
                    <a href="https://www.linkedin.com/in/mark-angelot/" target="_blank" rel="noreferrer">
                        Mark E Angelot
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;