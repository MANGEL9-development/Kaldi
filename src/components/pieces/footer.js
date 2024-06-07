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
        <footer></footer>
    );
}

export default footer;