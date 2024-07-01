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
            <h2>Kaldi</h2>
        </footer>
    );
}

export default footer;