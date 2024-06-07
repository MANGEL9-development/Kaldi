import sitemap from "../sitemap.json"

function menubar(){
    let links=[];
    sitemap.sites.forEach(function(site){
        links.push(
            <li>
                <a href={site.path}>{site.name}</a>
            </li>
        );
    });

    return (
        <nav id="menubar">
            <ul>
                {links}
            </ul>
        </nav>
    );
}

export default menubar;