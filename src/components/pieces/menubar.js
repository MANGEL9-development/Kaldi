import sitemap from "../sitemap.json"

function searchBar(){
    return (
        <div id="search-container">
            <form id="searchbar" class="">
                <div id="search-input-container">
                    <input type="search" name="searchquery" id="search-input" placeholder="What are you craving?" />
                    <button type="submit">
                        <div id="search-button-onhover"></div>
                    </button>
                </div>
            </form>
        </div>
    );
}

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
            {searchBar()}
            {/* Add an account button somewhere */}
        </nav>
    );
}

export default menubar;