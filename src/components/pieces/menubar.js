import sitemap from "../sitemap.json"

function searchBar(){
    return (
        <form id="searchbar" class="">
            <div id="search-input-container">
                <input type="search" name="searchquery" id="search-input" placeholder="What are you craving?"/>
                {/* TODO: add .focused to #search-input-container when input is focused. remove on blur */}
                <button type="submit">
                    <div id="search-button-onhover"></div>
                </button>
            </div>
        </form>
    );
}

function menubar(){
    let links=[];
    sitemap.sites.forEach(function(site){
        links.push(
            <li>
                {/* TODO: Add icons in the links */}
                <a href={site.path}>{site.name}</a>
            </li>
        );
    });

    return (
        <nav id="menubar">
            <ul>
                {links}
            </ul>
            <div id="searchbar-container">
                {searchBar()}
            </div>
            {/* Add an account button somewhere */}
        </nav>
    );
}

export default menubar;