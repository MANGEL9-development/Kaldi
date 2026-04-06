import sitemap from "../sitemap.json"
import {SearchBar} from "../Elements/inputs"

function AccountIcon(){
    return (
        <div></div>
    );
}

function Navbar(){
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
                <SearchBar placeholder="What are you craving?" />
            </div>
            <AccountIcon />
        </nav>
    );
}

export default Navbar;